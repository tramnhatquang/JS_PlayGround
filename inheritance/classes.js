class Human {
	name = 'Henry';

	printName() {
		console.log('Your name is ' + this.name);
	}
}


class Person extends Human {

	name = 'Danny'
	gender = 'male'

	printInfo() {
		console.log('Your name is ' + this.name)
		console.log('Your gender is ' + this.gender)
	}
}

// create a Person object
const person = new Person()
person.printName() // Your name is Danny

person.printInfo()
/*
Your name is Danny
Your gender is male
 */