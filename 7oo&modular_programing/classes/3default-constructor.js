class Car {}
console.log(Reflect.ownKeys(Car.prototype));

// This reveals the default constructor that JavaScript quietly created for
// us:
// [ 'constructor' ]