const Car = (year) => this.year = year;
const car1 = new Car(2018);

// Any attempt to run this code will end up with an error:
// const car1 = new Car(2018);
// ^
// TypeError: Car is not a constructor