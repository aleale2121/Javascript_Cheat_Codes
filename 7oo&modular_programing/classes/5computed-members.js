const NYD = `New Year's Day`;
class Holidays {
    constructor() {
        this[NYD] = 'January 1';
        this["Valentine's Day"] = 'February 14';
    }
    ['list holidays']() {
        return Object.keys(this);
    }
}

// NYD is a variable that contains the value evaluated from a template literal. In
// essence, it contains the string "New Year's Day" as its value. Within the constructor of the Holidays class, we use the variable NYD to create a computed field with
// the contained string as field name.
// Instead of using a variable, we may also embed a string or template literal
// directly within the [], like we do for the field named "Valentine's Day" or the method
// named 'list holidays'.

// In addition to defining computed fields and methods within the class, we can
// add them to an instance, like so:
const usHolidays = new Holidays();
usHolidays['4th of July'] = 'July 4';

console.log(usHolidays[`Valentine's Day`]);
const methodName = 'list holidays';
console.log(usHolidays[methodName]());
