// using forEach() method to iterate through each element

const arrayNames = ['Mike', 'Alex', 'Alays']
arrayNames.forEach(function(element) {
	console.log(element);
});

/*
- forEach() method has two arguments : forEach(callback, thisArg)
- callback- a function to be executed for each element
-callback has three parameters:
		+ currValue: the element we are currently processing. Doesn't have to be named currentValue
		+ index: the index of the currentValue element
		+ array: the array for which we called forEach
 */
const arrayFruit = ["pineapples", "oranges", "apples"];
arrayFruit.forEach(function(value) {
	console.log("Today I ate " + value);
});

// other examples of forEach
function showItem(item, index, array) {
	console.log("My value is " + item + ". I’m the " + index + " element of array " + array);
}
arrayFruit.forEach(showItem);


