// if statement
function meow() {
	return "Meow!";
}

let time = 10;
let sound;

if (time >= 6) {
	sound = meow();
	console.log(sound);
}

// else block
function meow() {
	return "Meow!";
}

function sleep() {
	return "Zzzzz...";
}

let time = 5;
let sound;

if (time >= 6) {
	sound = meow();
} else {
	sound = sleep();
}
console.log(sound);

// several conditions: "else if" block
function meow() {
	return "Meow!";
}

function sleep() {
	return "Zzzzz...";
}

function play() {
	return "Bang bang!";
}

let time = 9;
let sound;

if (time < 6) {
	sound = sleep();
} else if (time < 8) {
	sound = meow();
} else {
	sound = play();
}
console.log(sound);


// the ternary operator
let time = 11;
let isHungry = (time >= 6) ? true : false;