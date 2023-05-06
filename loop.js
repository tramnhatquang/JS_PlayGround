// a basic for loop
// for (let a = 0; a < 10; a++) {
// 	console.log(a)
// }
// console.log('\n')

// loop through an array
const arr = [
	'Jonas',
	'Danny',
	2037-1991,
	'teacher',
	['Hello', 'Wordl']
];

types = []

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);

	// Filling types arr
	// types[i] = typeof arr[i];

	types.push(typeof arr[i]);
}

console.log(types)
