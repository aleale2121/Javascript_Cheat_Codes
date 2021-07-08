class Car {}
console.log(Car);
/*
Even though we used the class syntax, we’re actually creating a function, one
that can only be used with new. The output from the code shows this:
[Function: Car]
In spite of the fact that the class syntax defines a function—albeit reserved for
creating an object—if we invoke the class as if it were a regular function, we’ll
get an error:
Car(); //BROKEN CODE
^
TypeError: Class constructor Car cannot be invoked without 'new'*/