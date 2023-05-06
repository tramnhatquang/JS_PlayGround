const danny = {
	fullName: 'Danny Tram',
	mass: 158,
	height: 1.75,

	calcBMI : function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};

const john = {
	fullName: 'John Smith',
	mass: 92,
	height: 1.95,

	calcBMI : function() {
		this.bmi = this.mass / this.height ** 2;
		return this.bmi;
	}
};


danny.calcBMI();
john.calcBMI();

console.log(danny.bmi, john.bmi);

if (danny.bmi > john.bmi)
	console.log('Danny\' BMI is larger than John\'s');
else if (danny.bmi < john.bmi)
	console.log('John\'s BMI is larger than Danny\'s')
else
	console.log('They have the same BMI')