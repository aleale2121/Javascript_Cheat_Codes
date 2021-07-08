// Class expressions are useful to create dynamic classes at runtime based on,
// for example, properties you read from a file, database, or user-provided input.
// Imagine creating a class factory function that will create and return a class—
// that’s a good place to use a class expression.
// JavaScript supports both a class statement—which you use to define a class—
// and a class expression. The two key differences between a class expression
// and a class statement are
// • The class name is optional for class expressions but required for class
// statements.
// • The class expression should be treated as an expression—that is, it should
// be returned, passed to another function, or be stored in a variable.
// Class statements are more common than class expressions, but the latter

const createClass = function(...fields) {
    return class {
        constructor(...values) {
            fields.forEach((field, index) => this[field] = values[index]);
        }
    };
};
const Book = createClass('title', 'subtitle', 'pages');
const Actor = createClass('firstName', 'lastName', 'yearStarted');


// Once we obtain a reference to classes created using class expressions, we can
// use them like classes defined using the class statement. Let’s create an instance
// of the Actor class we created using class expression.

const fisher = new Actor('Carrie', 'Fisher', 1969);
console.log(fisher);

// To the constructor we passed values for each field of the class. These correspond
// to the field names we provided in the second call to the createClass() function.
// Here’s the output of this code, showing the details of the instance created.
// { firstName: 'Carrie', lastName: 'Fisher', yearStarted: 1969 }
// Since our class was not given a name during creation, the output shows the
// instance like it’s a JavaScript object—there’s no class name prefix in the output.