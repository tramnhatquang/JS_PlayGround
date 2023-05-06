/*
- In JS, there are two special data types to indicate the absence of a value: null and undefined
- null means that the variable was explicitly assigned an empty or non-existent value.
- If the variable is null, we know that it does not contain an acceptable number, string or other data type:
 */

let name = null;
console.log(name) // null

/*
The undefined value is returned when a variable was declared, but its value wasn't set.
Let's consider the following example:
 */
let count;
console.log(count); // undefined


let person = {
	age: 27
};

console.log(person.name); // undefined


function getDetails(a) {
	console.log(a);
}

getDetails(); // undefined

console.log(typeof null);       // object
console.log(typeof undefined);  // undefined