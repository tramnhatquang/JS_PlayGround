class BMW {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Start Engine");
  }

  stop() {
    console.log("Stop engine!");
  }
}

class ThreeSeries extends BMW {
  constructor(make, model, year, cruiseControlEnabled) {
    super(make, model, year);
    this.cruiseControlEnabled = cruiseControlEnabled;
  }
}

class FiveSeries extends BMW {
  constructor(make, model, year, parkingAssistEnabled) {
    super(make, model, year);
    this.parkingAssistEnable = parkingAssistEnabled;
  }

  // overriding function in the parent class

  start() {
    console.log("Remote Start");
  }

  stop() {
    console.log("Remote Stop");
  }
}

// create new instances
const threeSeries = new ThreeSeries("BMW", "328", 2018, true);
const fiveSeries = new FiveSeries("BMW", "528", 2018, true);

console.log(threeSeries);
console.log(fiveSeries);

// call functions in the class
threeSeries.start();
threeSeries.stop();

// call overriding methods
fiveSeries.start();
fiveSeries.stop();
