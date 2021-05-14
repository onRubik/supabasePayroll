//from a node query the object is = [{hiredate: 2014-03-11T07:00:00.000Z}]

let todaysDate = Date.now();
let dateConversion = new Date(todaysDate);
let day = dateConversion.getDate();
let month = dateConversion.getMonth() + 1;
let year = dateConversion.getFullYear();

console.log(year + '-' + month + '-' + day);

let dateObject = [{'hiredate': '2014-03-11T07:00:00.000Z'}];
console.log(dateObject);