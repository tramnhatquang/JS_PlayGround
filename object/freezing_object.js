// when you freeze an object, all properties are non-writable, non-configurable, non-extensible
const product = {
  name: "Iphone",
};

console.log(Object.isExtensible(product)); // true
console.log(Object.isSealed(product)); // false
console.log(Object.isFrozen(product)); // false

Object.freeze(product); // freeze the object

console.log();
console.log(Object.isExtensible(product)); // false
console.log(Object.isSealed(product)); // true
console.log(Object.isFrozen(product)); // true

// test properties
product.name = "Mac Book Pro"; // it fails silently
console.log(product.name); // Iphone

const license = {
  name: "Toyota Camry",
  number: 20,
};
