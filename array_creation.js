// literal notation

let arr1 = ['JetBrains', 'Hyperskill'];
let arr2 = [45, 34, 23];
let arr3 = ['JavaScript', 12];

// the fill() method (fill(value, start, end))
/*
end: the index where the filling should finish(not including the end).
This argument is also optional, and its default is the array's length.
 */
const myNumbers = [1, 4, 7, 10, 15];

// fill with 0 from position 1 until position 3
console.log(myNumbers.fill(0, 1, 3)); // [1, 0, 0, 10, 15]

console.log(myNumbers.fill(13)); // [13, 13, 13, 13, 13]

// fill with 5 from position 2
console.log(myNumbers.fill(5, 2)); // [13, 13, 5, 5, 5]


/*
- the from() method
 */