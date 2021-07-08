class Car {
    constructor(year) {
        this.year = year;
        this.miles = 0;
    }
    drive(distance) {
        this.miles += distance;
    }

    
    getAge() {
        return new Date().getFullYear() - this.year;
    }
    get age() {
        return new Date().getFullYear() - this.year;
    }
    static pickBetter(carA, carB) {
        const computeScore = car =>
        car.age * Car.ageFactor + car.distanceTraveled * Car.distanceFactor;
        return computeScore(carA) < computeScore(carB) ? carA : carB;
    }
 }
console.log(new Car(2018));


const car = new Car(2007);


console.log(car.getAge());


console.log(car.age);
car.age = 7;
console.log(car.age)


car.drive(10);
console.log("--distance traveled--");
console.log(car.distanceTraveled);
car.distanceTraveled = 14;

console.log(car.distanceTraveled);
try {
    car.distanceTraveled = 1;
} catch(ex) {
    console.log(ex.message);
}

    // The pickBetter() method is marked as static but it looks much like an instance
    // method otherwise. While we may use this to refer to the static members, it is
    // safer to use the class name, like Car.ageFactor, instead of this.ageFactor—this will
    // prevent us from issues with this referring to something other than the class
    // at runtime due to dynamic scoping.
    // Let’s take a look at calling the static method of the class.
const car1 = new Car(2007);
car1.drive(150000);
const car2 = new Car(2010);
car2.drive(175000);
console.log(Car.pickBetter(car1, car2));