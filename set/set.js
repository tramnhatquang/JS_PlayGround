let courses = new Set();
courses.add("Angular");
courses.add("Python");
courses.add("JS");
courses.add("Java");
courses.add("Java");

// create a new set during initialization
const people = new Set(["a", "b", "c", "d"]);
console.log(people);

// print to the console
console.log(courses);
console.log(courses.size); // 4
console.log(courses.has("Angular")); // true
console.log(courses.has("React")); // false

// loop through each element in the set
for (let key of courses) {
  console.log(key);
}
