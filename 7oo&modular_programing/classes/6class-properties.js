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
 }
console.log(new Car(2018));


const car = new Car(2007);


console.log(car.getAge());


/*
but getAge() is a Java-style getter. C# developers write properties
instead of getter methods, and JavaScript now provides the same capability.
A property may have a getter, a setter, or both. If a property has only a getter,
it becomes a read-only property. We’ll take a look at setters later, but for now
let’s keep our focus on the getter.*/

// We can’t call age() either since it’s really not a method. We
// have to use the property name directly to refer to it, like so:
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