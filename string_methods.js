// length -> returns the length of the string
console.log("Hello".length); //5
let text = "Hello World";
console.log(text.length); // 11

// .toLowerCase() method
console.log("BLUE".toLowerCase()); // "blue"

// .toUpperCase() method
console.log("red".toUpperCase()); // "RED"


const language = "JavaScript";

console.log(language[0]); // J
console.log(language[1]); // a
console.log(language[2]); // v
console.log()

/*
Since 2022, JavaScript now has a .at() method that reads the character at a certain index,
which can also be negative.
 */

// the .at(index) method
console.log(language.at(0)); // "J"
console.log(language.at(1)); // "a"
console.log(language.at(-1)); // "t", get the last char in the string
console.log(language.at(-2)); // "p"

// convert from a number to a string: value.toString()
let answer = 42;
console.log(answer.toString()); //"42"