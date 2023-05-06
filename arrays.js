

/*
- Arrays are used to store multiple elements in a single variable. They are a special type of object in JavaScript.
(The typeof operator in JavaScript returns "object" for Arrays.)
 */

// Declaration of Arrays
let marks = new Array(); // Method 1

let marks = []; // Method 2, is more prefered way then method 1

// Initialization of Arrays
// Method 2

// Declaring and initializing the Array at the same time.

let marksOne = [45, 50, 44, 30, 29] // Only integers

let marksTwo = ["forty-five", "fifty", 44, 30, "twenty-nine"] // Strings and integers


// Method 1

// Declaring and initializing the Array at the same time.

let marksOne = new Array(45, 50, 44, 30, 29); // Creates an Array of marks with five elements

let marksTwo = new Array(5); // Creates an Array of five undefined elements

let marksThree = new Array("45"); // Creates an Array containing one string element, which is "45"


// Length of an Array
const languages = ["C", "C++", "Python", "Java", "JavaScript"];

let len = languages.length; // 5


// isArray() method
let marks = [45, 50, 44, 30, 29];

Array.isArray(marks); // true

let marksOne = "45";

Array.isArray(marksOne); // false



// some arrays methods
const arrays = [1, 2, 3]
const doubleNumArray = arrays.map(num => num *2);
console.log(arrays)
console.log(doubleNumArray)