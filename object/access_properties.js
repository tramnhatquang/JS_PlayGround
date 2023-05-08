const credit_card = {
  _name: "John",
  get name() {
    return this._name;
  },

  set name(name) {
    this._name = name;
  },
};

console.log(credit_card.name);

// update the name
credit_card.name = "Bob";
console.log(credit_card.name);
