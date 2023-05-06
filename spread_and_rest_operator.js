// Spread operator
// takes out all elements from the prev object and put them into a new object
//ex:
const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]
const newNumbers2 = [numbers, 4]

// console.log(newNumbers)
// console.log(newNumbers2)

// for objects
const person = {
	name : 'Max',
}

const newPerson = {
	...person,
	age : 28
}

// console.log(newPerson)

// Rest operator
const filter = (...args) => {
	return args.filter(x => x === 1)
}

console.log(filter(1, 2, 3))

