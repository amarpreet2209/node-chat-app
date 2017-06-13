var moment  = require('moment');


// jan 1st 1970 00:00:00 am



// var date =new Date()
// console.log(date.getMonth());
// var date = moment();
// date.add(100,'year').subtract(2,'months');
// console.log(date.format('MMM Do, YYYY'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'));
