'use strict';

class Names {
  constructor(...names) {
    this.names = names;
  }

  filter1(selector) {
    return new Names(...this.names.filter(selector));
  }

  filter2(selector) {
    const constructor = Reflect.getPrototypeOf(this).constructor;
    
    return new constructor(...this.names.filter(selector));
  }

  filter3(selector) {
    const constructor = 
      Reflect.getPrototypeOf(this).constructor.kindHint ||
        Reflect.getPrototypeOf(this).constructor;
    
    return new constructor(...this.names.filter(selector));
  }
}


class SpecializedNames extends Names {
  static get kindHint() {
    return Names;
  }
}
const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');
console.log(specializedNames.filter1(name => name.startsWith('Java')));
/**
 Names { names: [ 'Java', 'JavaScript' ] }
The output reveals the type of the instance along with the data it contains.
The filter1() method behaves like the concat() method of String—rather inconsiderate of the derived class. It decided to create only an object of the base
type, regardless of the runtime type of the instance on which the method is
called.
 */
/*
filter2(selector) {
    const constructor = Reflect.getPrototypeOf(this).constructor;
    return new constructor(...this.names.filter(selector));
}
Unlike the filter1() method that hardcoded the class name, filter2() gets the
constructor of this and then does a new on it, passing the filtered data. Even
though filter2() is in the Names class, the instance created using this approach
will be of the actual context object on which the method is called. Let’s use
this method on the instance of specializedNames:
*/
const specializedNames = new SpecializedNames('Java', 'C#', 'JavaScript');
console.log(specializedNames.filter1(name => name.startsWith('Java')));
/*We created an instance specializedNames of SpecializedNames, invoked the filter1()
method on that instance, and printed the response from that method. The
method of the base class is executed in the context of the derived class. Nevertheless, the instance is of the base type since filter1() hardcoded the type.
Let’s verify that’s true from the output:
Names { names: [ 'Java', 'JavaScript' ] }
The output reveals the type of the instance along with the data it contains.
The filter1() method behaves like the concat() method of String—rather inconsiderate of the derived class. It decided to create only an object of the base
type, regardless of the runtime type of the instance on which the method is
called.*/

/**
  filter3(selector) {
const constructor =
Reflect.getPrototypeOf(this).constructor.kindHint ||
Reflect.getPrototypeOf(this).constructor;
return new constructor(...this.names.filter(selector));
}
The method navigates from the context object this to its prototype, then to the
constructor, and asks for the kindHint property. In other words, the method is
asking for a static property on the context object’s class. The constructor reference
then refers to the value returned by the kindHint property if that property is
found and the value is not undefined; otherwise, the constructor reference refers
to the constructor of the context object. The filter3() method then uses the
constructor reference to create an instance.
 */