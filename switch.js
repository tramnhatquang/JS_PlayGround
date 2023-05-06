let cityTo = "Paris";

switch (cityTo) {
	case "Berlin":
		console.log("The price is $100");
		break;
	case "Paris":
		console.log("The price is $120");
		break;
	case "London":
		console.log("The price is $150");
		break;
	default:
		console.log("The price is $90");
		break;
}

/*
- It all depends on the developer's preferences to choose between if-else and switch statements to maximize the
 program efficiency.
 */

// More examples
function checkTheDate(value){
	switch (value) {
		// write your code here
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			console.log('Yes, you should go to work');
			break;
		default:
			console.log('No, this is your well-deserved weekend!');
	}
}


