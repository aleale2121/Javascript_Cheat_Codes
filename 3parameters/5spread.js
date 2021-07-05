// The ellipsis symbol used for the rest parameter on the receiving end can also
// be used on the function call side
// The intention of the spread operator is the
// opposite of that of the rest parameter—spread breaks a collection into discrete
// values whereas rest gathers discrete values into an array. Since they are used
// in two different contexts, there should be no confusion. 
const greet = function(...names) {
    console.log('hello ' + names.join(', '));
};

const jack = 'Jack';
const jill = 'Jill';
greet(jack, jill);

const tj = ['Tom', 'Jerry'];
greet(tj[0], tj[1]);

greet(...tj);

//The spread operator retires the apply() function that is available in JavaScript

greet.apply(null, tj); //no more stinky null

// While spread may appear to be a direct replacement for the apply() function,
// we actually can get more mileage out of spread than when using apply().