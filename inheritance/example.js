class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getName() {
    return this.firstname + " " + this.lastname;
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return "React Developer";
  }
}

const me = new ReactDeveloper("Robin", "Wieruch");

console.log(me.getName());
console.log(me.getJob());
