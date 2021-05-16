const {Client} = require('pg');

const connectionData = {
    user: 'postgres',
    host: '',
    database: 'dzpayroll',
    password: 'ccv6678',
    port: 5432
}

const query = {
  text: 'SELECT hiredate FROM employees WHERE employeeid = 19838',
  rowMode: 'array',
}

const client = new Client(connectionData);

client.connect();
client.query(query).then(
  response => {
      console.log(response.rows);
      console.log('type: ' + typeof response.rows)
      
      const parsedInfo = Date.parse(response.rows);
      console.log(parsedInfo);
      console.log('dateType: ' + parsedInfo);
      //to string:
      console.log(parsedInfo.toString());
      //console.log(datetime.toISOString().slice(0,10));
      console.log(parsedInfo.toISOString());
      
      
      client.end();
  })
  .catch(err => {
      console.error(err);
      client.end();
  });