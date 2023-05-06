/*
- the includes() method: check wether it contains a particular element or not.

 */

const array = ["Try", "to", "find", "me", "!", 6];

console.log(array.includes("find")); // true
console.log(array.includes(5)); // false
console.log(array.includes(6)); // true

// The method also accepts an optional argument that specifies an index from which to start searching the array:
console.log(array.includes("me", 2)); // true
console.log(array.includes("me", 4)); // false

/*
- the find() method
- this case, it is appropriate to use the find() method, which returns the first element it finds in the array,
that satisfies the provided callback function. If no element meets the condition, undefined is returned.

- The callback is a function to be executed for each element of the array. Its argument is the value of the current element.
Also, there are two optional arguments: the index of the current element and the array itself.
 */

const projects = [
  { name: "To-Do App", lang: "JS" },
  { name: "Website", lang: "HTML" },
];

console.log(projects.find((e) => e.lang === "JS")); // {name: "To-Do App", lang: "JS"}
console.log(projects.find((e) => e.lang === "CSS")); // undefined

/*
- the findIndex() method
- The findIndex() method is similar to the previous one: it also accepts a callback function,
but instead it returns the index of the first element in the array that satisfies it. Otherwise, it returns -1. Let's look at the example with the same array:
 */
console.log(projects.findIndex((e) => e.lang === "HTML")); // 1
console.log(projects.findIndex((e) => e.lang === "C")); // -1

/*
- the indexOf() method
- returns the first index of an element that equals a certain value. If the element does not exist in the array,
the method returns -1. The following code demonstrates how to use the method:
 */
const languages = ["HTML", "CSS", "JS", "Python", "JS"];

console.log(languages.indexOf("JS")); // 2
console.log(languages.indexOf("English")); // -1

// As well as the includes() method, indexOf() accepts an optional argument that specifies the index from which to start searching the array:
console.log(languages.indexOf("JS", 3)); // 4
console.log(languages.indexOf("CSS", 2)); // -1

/*
- lastIndexOf() method
-  that searches the array in the opposite direction. It returns the last index of an element, that matches a particular value, as shown below:
 */

console.log(languages.lastIndexOf("JS")); // 4
console.log(languages.lastIndexOf("JS", 3)); // 2
console.log(languages.lastIndexOf("JS", 1)); // -1
