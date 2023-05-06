var num1 = 1;
var num2 = num1;

// primitive variables
// console.log(num2)

num2 = 100
// console.log(num1)

// reference variables
const person = {
	name: 'Max'
}

const newPerson = person;

// change the name from th Person object
person.name = 'Danny'

console.log(newPerson) // Danny