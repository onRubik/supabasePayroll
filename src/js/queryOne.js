const {Client} = require('pg');

const connectionData = {
    user: 'postgres',
    host: '',
    database: 'dzpayroll',
    password: 'ccv6678',
    port: 5432
}

const client = new Client(connectionData);

client.connect();
client.query('SELECT * FROM eventrecords').then(
    response => {
        console.log(response.rows);
        client.end()
    })
    .catch(err => {
        client.end()
    })
