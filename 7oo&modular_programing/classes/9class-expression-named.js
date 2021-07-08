const Movie = class Show {
    constructor() {
        console.log('creating instance...');
        console.log(Show);
    }
};
console.log('Movie is the class name');
console.log(Movie);
const classic = new Movie('Gone with the Wind');
try {
    console.log('however...');
    console.log(Show);
} catch(ex) {
    console.log(ex.message);
}
// The name Show is visible only within the class. Outside, the class is known
// only by the name to which the expression was assigned—Movie in this example.
// If we try to refer to it using the internal name Show, we will run into a runtime
// exception, as we see in the output:
// Movie is the class name
// [Function: Show]
// creating instance...
// [Function: Show]
// however...
// Show is not defined
// The internal name is useful to call a static method of the class that is defined
// using class expression from within an instance method or another static method
// of the class.
// Although two classes can’t have the same name, multiple classes defined
// using class expression can have the same internal name.