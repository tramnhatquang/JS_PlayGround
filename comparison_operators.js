/*
Comparison operators list
 */

console.log(5 > 3);   // true
console.log(4 < 2);   // false
console.log(7 == 6);  // false
console.log(7 != 6);  // true

console.log("A" == "A");             // true
console.log("A" != "Z");             // true
console.log("Z" > "A");              // true
console.log("colorful" > "color");   // true
console.log("Dog" > "Bird");         // true
console.log("z" > "Z");              // true

/*
- Different types
 */

console.log("10" > 5);    // true
console.log(14 == "14");  // true
console.log(true == 1);   // true
console.log(false == 0);  // true

// Strict equal and strict not equal
console.log("15" === 15);         // false
console.log("15" == 15);          // true
console.log(true === 1);          // false
console.log(true == 1);           // true
console.log(null === undefined);  // false
console.log(null == undefined);   // true


// null, 0, and undefined
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true

// any comparison of undefined with 0 is always false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined <= 0); // false

// undefined can only equal null and nothing more
console.log(undefined == null);  // true
console.log(undefined == 0);     // false