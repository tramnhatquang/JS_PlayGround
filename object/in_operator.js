const person = {
  name: "Dan",
  age: 18,
};

// using in operator
console.log("name" in person); // true
console.log("age" in person); // true
console.log("job" in person); // false
