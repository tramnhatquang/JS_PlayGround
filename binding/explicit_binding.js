class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const printName = function () {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

const me = new Developer("Robin", "Wieruch");

// '.call()' can be used to explicitly bind a function to an object
printName.call(me);

// printName() is not bound to an object so 'this' is undefined
printName();

const printInfo = function (lang1, lang2, lang3) {
  console.log(
    `My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`
  );
};

// Create an array of languages
languages = ["Javascript", "C++", "Python"];

// Pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);

// Pass all the arguments in one array to .apply()
printInfo.apply(me, languages);

// bind() examples
