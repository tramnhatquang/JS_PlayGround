// destructing when calling function

// function add(options) {
//   console.log(options.num1 + options.num2 + options.num3);
// }

// or we can do like below
function add({ num1, num2, num3 }) {
  console.log(num1 + num2 + num3);
}

add({ num1: 10, num2: 20, num3: 30 });
