const addAge = function(person, theAge) {
    return {...person, last: person.last.toUpperCase(), age: theAge };
 }
const parker = { first: 'Peter', last: 'Parker',
    email: 'spiderman@superheroes.example.com' };
    console.log(addAge(parker, 15));

//     { first: 'Peter',
// last: 'PARKER',
// email: 'spiderman@superheroes.example.com',
// age: 15 }


///read the book page 124