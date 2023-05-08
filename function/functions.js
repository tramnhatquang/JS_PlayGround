/*
 - Function declaration: a normal way to declare a function definition
 */
// define a normal function
function add(num1, num2) {
	// add two given numbers
	return num1 + num2;
}


console.log(add(100, -1)) // 99
console.log(add(1000, -1000)) // 0


/*
- this is called hoisting when JS will look for function declaration before invoking any function calls
 */
sum(2, 3); // 5

function sum(a, b) {
	return a + b;
}

/*
- Function expression: is a function definition method that is part of an expression (usually, an assignment).
- Function expression is often defined as assigning an anonymous function to a variable.
- Unlike function declarations, function expressions must be defined before they are called.
Function expressions are created during the execution of the expression that creates them.
 */

let sayHi = function(name){
	alert('Hello' + ' ' + name);
}

let sum = function(a, b) {
	return a + b;
}

sum(2, 3)

/*
- Arrow function expression
- In the modern standard JavaScript, function expression can be declared using arrow notation.
The advantage of arrow functions is that they have a shorter syntax than function expressions.
 */

let sum = (a, b) => {
	return a + b;
}

sum(2, 3);

/*
The Function() constructor
- Functions can also be defined with a built-in JavaScript function constructor called Function().

 */

const mult = new Function("a", "b", "return a * b");

let x = mult(4, 3); // x = 12

/*
In practice, this way of function definition is rarely used: you don't have to use a function constructor.
The example above is the same as writing the following:
 */
const mult = function (a, b) {return a * b};

let x = mult(4, 3); // x = 12

/*
- Hoisting is a mechanism in JavaScript in which variables and function declarations (declarations using the function keyword),
are moved to the top of their scope before the code is executed.
 */