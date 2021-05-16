//Date.prototype.getFullYear()
//Date.parse()

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
        //qObject = response.rows;
        const target = qObject;
        const source = response.rows;
        const returnTarget = Object.assign(target, source);
        console.log(qObject);
        console.log(returnTarget);
        
        
        // when running the next two lines is gets typeerror: this is not a date object
        // let yearTest = Date.prototype.getFullYear(qObject);
        // console.log(yearTest);
        console.log('type: ' + typeof qObject);

        //trying to get key value from object:
        console.log(Object.values(qObject));
        console.log(Object.keys(qObject));
        
        
        //test to manipulate the year
        //let newDate = new Date();
        // newDate.setFullYear(qObject.getFullYear()+1);
        // console.log('after: ' + newDate);
        client.end();
    })
    .catch(err => {
        console.error(err);
        client.end();
    });