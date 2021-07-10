//Inlining Exports
/**
 You may declare a reference or a class and at the same time export it—that
is, inline the export keyword in the declaration. This approach is the easiest
and least noisy approach to exporting. To inline an export, prefix a declaration
with the export keyword, which makes the declared reference available outside
the module. The name of the declared reference becomes the name that is
exported—this is called a named export.
For example, the following code exports a primitive, a function, an object, and
a class, with their respective names. The primitive referenced by the variable
FREEZINGPOINT_IN_F is not exported and is visible only within the module/file.
 */

 export const FREEZING_POINT = 0;

 export function f2c(fahrenheit) {
   return (fahrenheit - 32) / 1.8;
 }
 
 export const temperaturePoints = { freezing: 0, boiling: 100 };
 
 export class Thermostat {
   constructor() {
     //...initialization sequence
   }
 }
 
 const FREEZINGPOINT_IN_F = 32;
 
 function c2f(celsius) {
   return celsius * 1.8 + 32;
 }
 
 const FREEZINGPOINT_IN_K = 273.15, BOILINGPOINT_IN_K = 373.15;
 
 export { c2f, FREEZINGPOINT_IN_K };
 /*
 You’re not forced to export at the point of declaration. You can export an
existing function, object, and so forth at any time by explicitly declaring an
export. Although inlining exports is less noisy and avoids an extra line for
export, explicitly exporting is necessary when we want to export select names
when using multiple declarations.
In the following code, we explicitly export the c2f function, which we could
have exported inline as well. However, we want to export only FREEZINGPOINT_IN_K,
from the multiple declarations, and not export BOILINGPOINT_IN_K. Explicit export
is a good choice for this.

 //Prefer inline exports over explicit exports, and in general, use explicit exports
//only when an inline export is not suitable.
 */


 
///Exporting with a Different Name
function c2k(celsius) {
    return celsius + 273.15;
}                         
  
export { c2k as celsiusToKelvin };

///Default Exports
/*
A default export may signify a major, the most significant, or the only export
a module may like to expose. Although a module can have zero or more named
exports, it can have at most one default export. Use a default export if you have
only one reference or class to export. Even when you have multiple things to
export, you may use a default export if most users of your module will use a
particular reference more frequently than other exported references.
To mark an export as default, follow the export keyword with the default keyword.
Default exports have one restriction, however; export default is not permitted in
front of the keywords const and let while export without default is allowed. In
short, inlining of default exports is permitted for functions and classes, but
not for variables and constants. You may explicitly export variables and
constants as default.
*/


 export default function unitsOfMeasures() {
   return ['Celsius', 'Delisle scale', 'Fahrenheit', 'Kelvin', /*...*/];
 }
 /**
  The unitsOfMeasures() function is exported as default. Instead of exporting a
function as default, we can similarly export a class as default.
In the previous code we used an inline default export on the function. We can
also perform an explicit default export at a later time after declaring the
function with no export, like so: export default unitsOfMeasures. As we discussed
before, this approach is especially useful to export a variable that was declared
using const or let; that’s because default can’t be followed by const or let.
  
If you mark an export as default when declaring a function or a class, the
name you provide for the function or class is not visible outside the module.
If you have no use for that name internally in your module, then you can
omit the name entirely. So, for instance, instead of exporting a function
like this:
export default function unitsOfMeasures() {
return ['Celsius', 'Delisle scale', 'Fahrenheit', 'Kelvin', ];
}
if you have no use for that function within your module, then you may omit
the name of the function, like so:
export default function() {
return ['Celsius', 'Delisle scale', 'Fahrenheit', 'Kelvin', ];
}
*/

//Reexporting from Another Module
/**
 * 
 * You can reexport modules to reduce the number of imports and to make
dependencies transitive. Occasionally you may want to make available to the
users of your module some references that are contained in other modules.
Here’s a way to reexport all exported references, except default, from temperature:
export * from './temperature';
export { Thermostat, celsiusToKelvin } from './temperature';
export { Thermostat as Thermo, default as default } from './temperature'; 

*/