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
      client.end();
  })
  .catch(err => {
      console.error(err);
      client.end();
  });