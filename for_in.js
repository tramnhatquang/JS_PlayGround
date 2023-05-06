let book = {
  name: "Crime and Punishment",
  author: "Fedor Mikhailovich Dostoevsky",
  publicationDate: 1866,
};

// for... in syntax

// we use "for in" loop when we want to iterate through each keys of the object (similarly to arrays)
for (let key in book) {
  console.log(`Key: ${key}, value: ${book[key]}`);
}

let book1 = ["Crime and Punishment", "Fedor Mikhailovich Dostoevsky", 1866];
for (let key in book1) {
  console.log(key);
}

/*
- Example: Loop over the books and print the name of each book below
 */

let library = {
  books: {
    first: "Brothers Karamazov",
    second: "The Catcher in the Rye",
  },
};

for (let key in library.books) {
  console.log(library.books[key]);
}

// other ways
for (let object in library) {
  console.log(object);
  for (let key in library[object]) {
    console.log(library[object][key]);
  }
}
