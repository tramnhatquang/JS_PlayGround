/*
The difference between let, var, const is the scope in which they were defined
- let, const is only available inside the scope they were defined
- var has broader scope for a variable (global scope)

 */

for (let x = 1; x<= 10; x++) {}
// console.log(x), caused an error

for (var x = 1; x <= 10; x ++) {}
console.log(x) // work well

var a = 'Quang dep trai'
// x = 1000 // error, immutable constant variable, cannot modified
a = 1000
console.log(a)



/*
However, there are two restrictions that you can easily remember: a name can only consist of letters, numbers, and symbols _, $;
and it shouldn't start with a digit.
 */
let $testName; // right
let testName;  // right
let test_name; // right
let test18;    // right
let test;      // right

// let 18test;    // wrong , invalid name
// let test-name; // wrong, invalid name
