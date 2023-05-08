const product = {
  name: "Iphone",
};

console.log(Object.isExtensible(product)); // true

Object.seal(product); // seal the object

console.log(Object.isSealed(product)); // true and the object is sealed now. All properties are not configurable
console.log(Object.isExtensible(product)); // false

// check the properties' states
product.price = 10;
console.log("price" in product); // false

delete product.name;
console.log("name" in product); // true

console.log(product); // the object is unchanged

console.log(Object.getOwnPropertyDescriptors(product));
