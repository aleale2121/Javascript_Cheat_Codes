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


/*  Use extends to inherit a class from another class. In the constructor, a call to
super() is required and should appear before accessing this. The call to super()
will invoke the constructor of the base class, and JavaScript insists that the
state of the base part of the instance is initialized before the state of the
derived part. Swapping the last two lines in the constructor of ReputablePerson
will result in a runtime error.

• To access the member in the instance or in the derived class instead of the
one in the base class, use this—remember that this is dynamically scoped.
• If a member does not exist in the instance or in the derived class but
exists in the base class, use this. If in the future you override this member
in the derived class, then it will take precedence—this is most likely what
you’d want.
• To bypass the member of the derived class and access the one in the base
class, use super().

• When a field or property is not present in an object, JavaScript will search
for it in the prototype chain—that is, it will automatically look it up in the
base class.
• If we override the field or property in the derived class, then we will correctly use the overridden field or property in the instance and not the one
in the base class.
In general, the only time we should use the super. prefix is
• to access a member of the base class from within an overriding member
of the derived class with the same name
• from any other member when we intentionally want to bypass a member
in the derived class and access the one in the base class


*/


const alan = new ReputablePerson('Alan', 'Turing', 5);
console.log(alan.toString());
console.log(alan.fullName);
