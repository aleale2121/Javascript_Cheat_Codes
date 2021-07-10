/*
Unlike class-based inheritance, prototypal inheritance is implemented using
delegation. Remember the sage advice from good design books: delegation is
better than inheritance. Prototype-based languages like JavaScript take that
advice to heart. Although languages like Java, C#, C++, Ruby, and a number
of other OO languages provide class-based inheritance, prototype-based languages use an object chain to delegate calls. Instead of relying on a base class
or superclass, prototypal inheritance relies on an object next in the chain to
serve as its base. Class-based inheritance is rather inflexible—once you inherit
your class from another class, it’s stuck to the parent.

In prototype-based languages, inheritance is dynamic; you may alter the object that serves as
the base at runtime. That base object is called the object’s prototype
*/

class Counter {}
const counter1 = new Counter();
const counter2 = new Counter();
const counter1Prototype = Reflect.getPrototypeOf(counter1);
const counter2Prototype = Reflect.getPrototypeOf(counter2);
console.log(counter1 === counter2); //false
console.log(counter1Prototype === counter2Prototype); //true
/*
The instance counter1 of Counter has a prototype Counter {}, which in turn has a
prototype {}, which has null as its prototype, thus ending the prototype chain.
The instance counter2 has the exact chain as counter1.
Although two objects of the same class in class-based inheritance share the
same class hierarchy, two objects of the same class in prototypal inheritance
share the same object chain. At least that’s the default behavior. As you’ll
soon see, we can dynamically alter that chain—such dynamic capability is
hard to imagine in class-based inheritance.
*/