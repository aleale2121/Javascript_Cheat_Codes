new Car(); //BROKEN CODE
class Car {}

// If we refer to Car before we define it, we’ll get an error, like so:
// ReferenceError: Car is not defined
// However, if the definition comes to life before the point of reference in the flow
// of execution, as in the following example, then it’s all good:

const createCar = function() {
    return new Car();
};
class Car {}
console.log(createCar());