const scores = new Map([
  ["math", 90],
  ["physics", 95],
  ["chemistry", 80],
]);

// loop through each entity in the map
for (let key of scores.keys()) {
  console.log(key);
  console.log(scores.get(key));
}

for (let value of scores.values()) {
  console.log(value);
}

for (let [k, v] of scores.entries()) {
  console.log(k, v);
}
