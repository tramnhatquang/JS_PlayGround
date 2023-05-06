function Car(model, speed) {
	this.model = model;
	this.speed = speed;

	this.getSpeed = function() {
		console.log("The speed of " + this.model + " is: " + this.speed + " km per hour");
	};
}

const carKIA = new Car("KIA Stinger", 209);
carKIA.getSpeed();

/*
- The constructor functions have some unique features:
+ We spelled the constructor function with a capital letter (Car). While this is not a rule, it is a naming convention between developers.
Please use this recommendation: it allows us to find the function constructor faster.
+ It is essential to call the function constructor with the keyword new.
+ Inside the constructor function, this does not have a value. After a new object has been created,
the value of this becomes the new object.
+ Constructors always return a new object without using the return keyword inside them. By default, they return this.
You can easily change this logic and use return whenever you want.
 */
