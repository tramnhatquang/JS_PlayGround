/*
- An anonymous function is a function that does not use an identifier when created.
There is a basic rule: if a function does not have an identifier after the function keyword, then it is anonymous,
otherwise, it is named.

 */

// the classic anonymous function
// function () {
// 	return 'Hello world!';
// }

// create a new anonymous function and assign it to a new variabl;e
const greetings = function () {
	return 'Hello world!';
}

greetings(); // 'Hello world!'

/*
Hoisting is a mechanism in JavaScript in which variables and function declarations (declarations using the function keyword),
are moved to the top of their scope before the code is executed.
 */

funcOne(); // 'One'

function funcOne () {
	return 'One';
}

// funcTwo(); // Error
//
// const funcTwo = function () {
// 	return 'Two';
// }

// an anonymous function is not available once it has been created unless we have defined its variable as a value

/*
Passing anonymous function as an argument
 */
function alertMessage(text) {
	console.log(text());
}

const textFunc = function () {
	return "Hello world!";
};

alertMessage(textFunc);

// Hello world! will be printed in console

/*
- Immediate execution of anonymous function:  a function that is immediately called at the place of its creation.
You might need it if you do not want to clog your code and if this function is not useful to you in the future.
- First, to create it, we must wrap the anonymous function in parentheses which is called the grouping operator.
 */

(function () {
	console.log('Hello world!');
})();

// Same thing just in arrow function syntax

(() => {
	console.log('Hello world!');
})();

// 'Hello world!' will be printed to the console

// arrow functions are anonymous functions so we cannot call them before initialization
