const Car = function(year) {
    this.year = year;
};
// Traditionally, function names were capitalized to convey they represent classes
// and regular functions otherwise. Regardless of how we name the functions, all
// are constructors. We can create an instance from this function, like so:

const car1 = new Car(2018);


// Arrow functions can’t serve as constructors and can’t be used to instantiate
// objects. Let’s examine what happens if we try to use new on an arrow function: