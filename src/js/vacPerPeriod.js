const {Client} = require('pg');

const connectionData = {
    user: 'postgres',
    host: '',
    database: 'dzpayroll',
    password: 'ccv6678',
    port: 5432
}

const client = new Client(connectionData);
let qObject = new Object();

client.connect();
client.query('SELECT hiredate FROM employees WHERE employeeid = 19838').then(
    response => {
        qObject = response.rows;
        console.log(qObject);
        //test to manipulate the year
        let newDate = new Date();
        newDate.setFullYear(qObject.getFullYear()+1);
        console.log('after: ' + newDate);
        client.end();
    })
    .catch(err => {
        console.error(err);
        client.end();
    });