// check if a property is owned by an object but not inherits from other classes
const person = {
  name: "Dan",
  age: 18,
};

console.log(person.hasOwnProperty("toString")); // false
console.log(person.hasOwnProperty("name")); // true
