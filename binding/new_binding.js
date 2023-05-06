var printInfo = function (firstname, lastname, lang1, lang2, lang3) {
  this.firstname = firstname;
  this.lastname = lastname;
  console.log(
    `My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`
  );
};

languages = ["Javascript", "C++", "Python"];
printInfo("Robin", "Wieruch", languages[0], languages[1], languages[2]);