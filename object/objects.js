let book1 = {};
let book2 = {};
console.log(typeof book1); // object
console.log(typeof book2); // object

// create an object using curly bracket is called literal notation

// an array of string
const jonasArray = ["Jonas", "Danny", "Minh", "Kim", "Dung"];

// an object
const jonas = {
  firstName: "Tram",
  lastName: "Danny",
  arr: ["Quang", "Minh"],
};

// console.log(jonas); // print out the object
// console.log(jonas.firstName); // get first name
// console.log(jonas.lastName); // get last name
// console.log(jonas.arr); // get the arr inside the object
delete jonas.arr; // removing the arr property from an object named jonas

// using bracket notation
// console.log(jonas['firstName']); // Tram
// console.log(jonas['quang']); // undefined

const nameKey = "Name";
// console.log(jonas['first' + nameKey])

// prompt
const question = prompt("What do you want today");




