class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

var me = new Developer("Robin", "Wieruch");
console.log(me.getName()); // 'this' is me -> output: Robin Wieruch

var hobbit = new Developer("Frodo", "Baggins");
console.log(hobbit.getName()); // 'this' is 'hobbit' -> output:Frodo Baggins

/*
- The example above is all about implicit binding where 'this' implicitly binds into the current object (instance of the class)
 */
