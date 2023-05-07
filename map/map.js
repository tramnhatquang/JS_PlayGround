// creat a map
let scores = new Map();
scores.set("maths", 90);
scores.set("physics", 95);
scores.set("chemistry", 80);

// print to the console
console.log(scores.get("maths"));
console.log(scores.get("physics"));
console.log(scores.get("chemistry"));
console.log(scores);

// check the size
console.log(`The current size is ${scores.size}`);

console.log(scores.has("maths")); // true

scores.delete("maths");
console.log(scores.has("maths")); // false
scores.clear();

console.log(scores.size);
