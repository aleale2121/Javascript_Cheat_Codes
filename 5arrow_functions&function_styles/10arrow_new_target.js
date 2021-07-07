const arrow = () => {
    console.log(new.target);
    };
    arrow();
    // The arrow function is directly defined in this file. In the lexical scope, the
    // new.target property has a value of undefined. The reference to this property
    // within the arrow function binds to the property in the file scope. Hence we
    // get the following output:
    // undefined

//  If the arrow function is defined within the context of another function, it will
// take on the new.target property of that function. Let’s verify this with the next
// example.


const outer = function() {
    return () => console.log(new.target);
 };
 const arrow1 = new outer();
 const arrow2 = outer();
arrow1();
arrow2();

// The outer() function returns an arrow function in response to a call. We first
// invoke outer() as a constructor and store the result into the variable arrow1. We
// then invoke outer() again, but this time as a function instead of a constructor,
// and store the result into the variable arrow2. Finally we call the two arrow
// functions, using the variables arrow1 and arrow2.
// Since the first arrow function, referenced using arrow1, was created within a
// constructor call, its new.target property binds to the variable within the constructor. As a result, the print of this property to the console shows the reference to the constructor function. On the other hand, since the second arrow
// function, referenced using arrow2 was obtained from a function call, and not
// a constructor invocation, the new.target property is undefined. The output
// illustrates this scenario.
// [Function: outer]
// undefined