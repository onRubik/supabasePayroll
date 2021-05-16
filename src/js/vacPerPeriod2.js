const {Client} = require('pg');

const connectionData = {
    user: 'postgres',
    host: '',
    database: 'dzpayroll',
    password: 'ccv6678',
    port: 5432
}

const client = new Client(connectionData);

const query = {
    // give the query a unique name
    name: 'get-hiredate',
    text: 'SELECT hiredate FROM employees WHERE employeeid = 19838',
    values: [0],
  }
  // callback
  client.query(query, (err, res) => {
    if (err) {
      console.log(err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
  // promise
  client.connect();
  client
    .query(query)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))