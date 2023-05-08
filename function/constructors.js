function Flight() {}

const flight1 = new Flight();
const flight2 = new Flight();

console.log(flight1 instanceof Flight); // true
console.log(flight2 instanceof Flight); // true

console.log(flight1.constructor);