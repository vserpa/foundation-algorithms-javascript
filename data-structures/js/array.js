// Array Initialization
// var daysOfWeek = [];
// var daysOfWeek = ['Sunday', 'Tuesday'];
// var daysOfWeek = new Array();
// var daysOfWeek = new Array(7);
// var daysOfWeek = new Array('Sunday', 'Tuesday');

// Array common methods
// .length
// .push(value) // insert value on the final
// .unshift(value) // insert value on the begin

var daysOfWeek = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (var i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i]);
}

// fibonacci
// a series of numbers in which each number is the sum of the two preceding numbers. 
var fibonacci = [0, 1];

for (var i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);