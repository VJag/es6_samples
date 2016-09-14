// Arrow function Basic Syntax:
// -------------------------------
/*

 (param1, param2, …, paramN) => { statements }
 (param1, param2, …, paramN) => expression
 // equivalent to:  => { return expression; }

 // Parentheses are optional when there's only one parameter:
 (singleParam) => { statements }
 singleParam => { statements }

 // A function with no parameters requires parentheses:
 () => { statements }

 */

// Example 1
// Normal function declaration
var sayHello = function() {
    console.log('Hello...');
};

sayHello();


// Arrow function
var sayBye = () => console.log('Bye');
sayBye();


// Example 2
// Normal function returning a value
var squareNormal = function(number) {
    return number * number;
};
// Arrow function returning a value
var square = (number) => number * number;


console.log(squareNormal(2));
console.log(square(5));
