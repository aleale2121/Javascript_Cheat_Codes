const createPerson = function(name, age, sport, sportFn) {
    return {
        name,
        age,
        toString() {
            return `${this.name} ${this.age}`;
        },
        [`play${sport}`] : sportFn
    };
};
const sam =
createPerson('Sam', 21, 'Soccer',function() { console.log(`${this.name}, kick, don't touch`); });
console.log(sam.name);
console.log(sam.toString());
sam.playSoccer();
// We eliminated the unnecessary local variable and kept all initialization to
// within the object literal, and that reduced a couple of lines of code. In addition,
// each line of code also saw some reduction in noise. Less typing, less boilerplate
// code, for the win.