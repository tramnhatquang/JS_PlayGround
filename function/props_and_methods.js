function Flight(airline, flightNumber) {
  this.airline = airline;
  this.flightNumber = flightNumber;

  this.display = function () {
    console.log(this.airline);
    console.log(this.flightNumber);
  };
}

const flight1 = new Flight("American Airlines", "AA123");
const flight2 = new Flight("South West", "SW456");

flight1.display();
console.log();
flight2.display();

function Laptop(manufacturer, memory, capacity) {
  this.manufacturer = manufacturer;
  this.memory = memory;
  this.capacity = capacity;

  this.display = function () {
    console.log(this.manufacturer);
    console.log(this.memory);
    console.log(this.capacity);
  };
}

// create two objects
const laptop_1 = new Laptop("Dell", "16GB", "16 cores, 8 threads");
const laptop_2 = new Laptop("Apple", "32GB", "16 cores, 32 threads");

laptop_1.display();
laptop_2.display();
