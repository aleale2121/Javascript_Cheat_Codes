// extends Implies Prototypal Inheritance
// Even though JavaScript uses the extends keyword, which is popular for inheri￾tance in Java,
//  it’s important to remember that the inheritance is prototype
// Inheriting from a Class based and not class based
class Person {
    constructor(firstName, lastName) {
        console.log('initializing Person fields');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toString() {
        return `Name: ${this.firstName} ${this.lastName}`;
    }
    get fullName() { return `${this.firstName} ${this.lastName}`; }
    get surname() { return this.lastName; }
}
class ReputablePerson extends Person {
    constructor(firstName, lastName, rating) {
        console.log('creating a ReputablePerson');
        super(firstName, lastName);
        this.rating = rating;
    } 
    ///override
    toString() {
        return `${super.toString()} Rating: ${this.rating}`;
    }
    get fullName() {return `Reputed ${this.surname}, ${super.fullName} `; }
}
/*
The method prints the given object and recursively calls itself, passing the
prototype of the object at hand, until it reaches the end of the prototype chain.
Let’s call it on an instance of ReputablePerson:
*/
const printPrototypeHierarchy = function(instance) {
    if(instance !== null) {
        console.log(instance);
        printPrototypeHierarchy(Reflect.getPrototypeOf(instance));
    }
};

const alan = new ReputablePerson('Alan', 'Turing', 5);
printPrototypeHierarchy(alan);
// The excerpt of the output from this call to printPrototypeHierarchy is shown next:
// ReputablePerson { firstName: 'Alan', lastName: 'Turing', rating: 5 }
// ReputablePerson {}
// Person {}
// {}

//Changing the Prototype Chain
/*
Unlike class-based inheritance hierarchy, the prototype chain is not frozen
in time. We can change the prototype chain—cautiously—if we desire. 
*/

class ComputerWiz {}
Reflect.setPrototypeOf(Reflect.getPrototypeOf(alan), ComputerWiz.prototype);
console.log('...after change of prototype...');
printPrototypeHierarchy(alan);
/*
Instead of altering the prototype of the instance alan, we’re altering the prototype of the prototype of alan. Let’s take a look at the excerpt from the output
after this change:
...after change of prototype...
ReputablePerson { firstName: 'Alan', lastName: 'Turing', rating: 5 }
ReputablePerson {}
ComputerWiz {}
{}
*/
/**
 We modified the prototype of prototype of alan—remember that instances of a
class share prototypes. Thus, if we create another object of ReputablePerson,
then its prototype chain will be the same as the modified prototype chain of
alan.
 */

const ada = new ReputablePerson('Ada', 'Lovelace', 5);
printPrototypeHierarchy(ada);
// Here’s the output for this part of the code:
// ReputablePerson { firstName: 'Ada', lastName: 'Lovelace', rating: 5 }
// ReputablePerson {}
// ComputerWiz {}
// {}


//Using Default Constructors
/*
Recall that if you do not write a constructor, JavaScript provides a default
constructor for the class. The same rule applies to derived classes, with one
bonus—the default constructor automatically calls super to pass any arguments
to the base class.*/

class AwesomePerson extends Person {
    get fullName() {
        return `Awesome ${super.fullName}`;
    }
}
const ball = new AwesomePerson('Lucille', 'Ball');
console.log(ball.fullName);

/*initializing Person fields
Awesome Lucille Ball*/