/*
- splice method
- 
 */

let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
arr.splice(3, 2);

console.log(arr); // [ 'one', 'two', 3, 6, 'seven', 8 ]

// Now let's insert strings to replace these two elements:
let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
arr.splice(3, 2, "Here's", "Johnny!");

console.log(arr); // [ 'one', 'two', 3, "Here's", 'Johnny!', 6, 'seven', 8 ]

// If you just want to insert items without deleting anything, pass 0 to the second parameter:
let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
arr.splice(1, 0, "Here's", "Johnny!");

console.log(arr); // [ 'one', "Here's", 'Johnny!', 'two', 3, 'four', 5, 6, 'seven', 8

// When a single argument is provided, splice removes everything starting from the specified index:
let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
arr.splice(-3);

console.log(arr); // [ 'one', 'two', 3, 'four', 5 ]

// In addition to modifying the existing array, splice also returns an array containing the deleted elements:
let arr = ["one", "two", 3, "four", 5, 6, "seven", 8];
let newArr = arr.splice(-3);

console.log(arr); // [ 'one', 'two', 3, 'four', 5 ]
console.log(newArr); // [ 6, 'seven', 8 ]

/*
- split() method

 */
let str = "one two three";
let arr = str.split(" ");

console.log(arr); // [ 'one', 'two', 'three' ]

/*
- the concat() method: merging arrays and strings with concat()
 */

let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let sounds = ["bark", "meow", "quack", "buzz"];
let arr = colors.concat(numbers, sounds);

console.log(arr);
// [ 'red', 'green', 'blue', 1, 2, 3, 4, 5, 'bark', 'meow', 'quack', 'buzz' ]
