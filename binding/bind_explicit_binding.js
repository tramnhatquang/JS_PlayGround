class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

var printName = function () {
  console.log(`My name is ${this.firstname} ${this.lastname}`);
};

var me = new Developer("Robin", "Wieruch");

// Here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);

// bound newPrintName() prints appropriately
newPrintName();

// unbound printName() prints undefined
printName();
