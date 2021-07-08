class Car {
    constructor(year) {
        this.year = year;
        this.miles = 0;
    }
    drive(distance) {
        this.miles += distance;
    }
 }
console.log(new Car(2018));

// A constructor is called when an instance is created using the new keyword.
// The constructor can’t be called directly without new