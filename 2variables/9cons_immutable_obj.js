'use strict';
const sam = Object.freeze({ first: 'Sam', age: 2 });
//sam = {}; //ERROR, the reference sam is immutable
sam.age = 3;
console.log(sam.age);
// Right after we created the object, we passed it through the freeze() method of
// Object. This returns a reference to an object that is immutable. We assign the
// reference to a constant variable named sam. Now, the reference is immutable
// thanks to const. Furthermore, the object itself is immutable due to freeze(), as
// we see from the output:
// sam.age = 3;
// ^
// TypeError: Cannot assign to read only property 'age' of object '#<Object>'