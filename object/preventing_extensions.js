const product = {
  name: "Iphone",
};

// check if an object is extensible or not
console.log(Object.isExtensible(product)); // true

Object.preventExtensions(product); // make it un-extensible

console.log(Object.isExtensible(product)); // false
