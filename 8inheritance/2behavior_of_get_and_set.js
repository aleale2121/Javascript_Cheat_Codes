/*class based inheritance,
the instances of a class reuse the members of the class’s base class.

In prototypal inheritance
the prototype is reused. When a property or a method is accessed on an object,
the object may reuse the members in its prototype by delegating
calls to its prototype.*/

class Counter {}
Counter.prototype.count = 0;
Counter.prototype.increment = function() { this.count += 1; };
const counter1 = new Counter();
const counter2 = new Counter();
console.log(counter1.count);
console.log(counter2.count);
counter1.increment();
console.log(counter1.count);
console.log(counter2.count);

/**
 * We added and initialized a field, count, to the prototype. Then we added a method,
increment(), to the prototype as well. The method, when called, will add 1 to this.count.
We then created two instances of Counter—counter1 and counter2—and displayed
the value of count. The count field does not exist directly in these instances, but
JavaScript will get the values from the prototype. Earlier we verified that the
instances share a prototype. Both the lines will display the value of 0.
We then called the increment() method on counter1. Once again, increment() is
reused from the prototype and it increments the value of this.count. We then
asked for the value of count again on the two instances.
A part of our brain may say that the output of the last two lines will be 1 and
0, respectively. But maybe another logical part of our brain questions that
thinking. Hmm…
The instances of Counter share the prototype, but changing one object should
not affect another. When we run the code, we get the output that confirms
the isolation of the instances:
0
0
1
0
That’s great, but what’s the magic? The reason for this behavior is how
JavaScript uses prototypes:
Gets search deep, but sets are always shallow
 */
/*
When we access—that is, get—a member on an instance, if the instance has
that member the value is immediately returned. If the member is missing,
then JavaScript quietly forwards the request for the member to the instance’s
prototype. The steps for lookup are then carried out through the prototype
chain until either the member is found or the search reaches the end of the
chain. On the other hand, when a field is set on an instance, the set happens
on that instance. JavaScript does not perform any lookup to see if the member
being set is present. If it is present, the value gets overwritten. If the member
does not exist, then it is created with the value given.
In the example, when increment() calls this.count, even though the method is part
of the prototype, this refers to the counter1 instance. Thus, after the call to
increment(), counter1 acquires the count field. We can verify this quickly with a
small change to the code:*/


const counter1 = new Counter();
console.log(
`Prototype has: ${Object.keys(Reflect.getPrototypeOf(counter1))}`);
console.log(`Before increment instance has: ${Object.keys(counter1)}`);
counter1.increment();
console.log(`After increment instance has: ${Object.keys(counter1)}`);

/*

In this modified version, we create an instance of Counter and display the
members (keys) of the prototype. Then we display the members of the counter1
instance. After calling the increment() method, we again display the members
of the instance. The output confirms that the instance acquired a field after
the call to increment().
Prototype has: count,increment
Before increment instance has:
After increment instance has: count
When increment() is called for the first time on an instance, the value of count
is obtained from the prototype, and the incremented value is then set on the
instance instead of on the prototype.
We have seen how JavaScript uses its prototype chain to implement prototypal inheritance. Next we will see how this relates to the updated syntax for
inheritance.*/