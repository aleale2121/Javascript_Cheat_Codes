const createPerson = function(name, age, sport, sportFn) {
    const person = {
        name: name,
        age: age,
        toString: function() {
            return this.name + ' ' + this.age;
        }
    };
    person['play' + sport] = sportFn;

    return person;
 };

const sam =createPerson('Sam', 21, 'Soccer',
    function() { console.log(`${this.name}, kick, don't touch`); });

console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
/*
The createPerson() function receives a few parameters and creates an object
using them. It assigns the value of name to a property with the same name
and likewise assigns age to age. Finally, it creates a computed property whose
name is based on the value of the sport parameter. This last step had to be
done outside of the initialization in the past—computed properties were not
allowed in the object initialization list. The code works, as we see in the following output:
Sam
Sam 21
Sam, kick, don't touch
But that’s some noisy code; let’s see how we can make it concise.
The object literals syntax makes it possible to assign values to fields and
create functions within an object. It is the colon notation in { field: value, func:
function() {...} }. Enhanced object literal enhances that notation by removing
some noise and making a few things implicit.*/

