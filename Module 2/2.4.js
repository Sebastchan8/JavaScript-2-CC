// 2.4 Section 4 – Inheritance

/* -----------------------------------------------------------------
--------> 2.4.1 Inheritance
------------------------------------------------------------------*/

/*
The introduction of classes in JavaScript simplifies inheritance syntax, 
though it still operates on prototypes. The `extends` keyword allows one 
class to inherit properties and methods from another, without modifying 
the base class. For example, in a transport company scenario, a new `Bus` 
class can inherit from a `Vehicle` class. The `Bus` class adds a `seats` 
property while inheriting the `Vehicle` properties.

Initially, the `Bus` constructor only defines the `seats` property, 
causing inherited properties like `id` to be `undefined`. To fix this, 
the `super()` keyword is used in the `Bus` constructor to call the 
`Vehicle` constructor and properly initialize inherited properties. 
This approach ensures all inherited and new properties are correctly assigned.

In JavaScript, the class being inherited from is referred to as the "super class."
*/

class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    }
}
let bus = new Car({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"}); 
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"


/* -----------------------------------------------------------------
--------> 2.4.1 Inheritance
------------------------------------------------------------------*/

// When we add methods to the base class, we can also add methods to the derived class.
// and the inheritanced class wins over the base class
// So, if we want to call a method from the base class, we need to use super.

class AlmostEmptyClass { 
    constructor(sth) { 
        console.log(sth); 
    }; 
    sayHi() { 
        console.log("Hi!") 
    }; 
}; 
    class ExtendedClass extends AlmostEmptyClass {
        constructor(name) {
            super("I’m super ...");
            this.name = name;
        };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
    newHi() {
        this.sayHi();
    }
    oldHi() {
        super.sayHi();
    };
};
let obj = new ExtendedClass("Bob"); // -> I’m super ...
obj.sayHi();    // -> Hi Bob!
obj.newHi();    // -> Hi Bob!
obj.oldHi();    // Hi!

// NOTE: during inheritance, new fields shadow the old ones if they have the same names. 
// You can access the base class fields from inside the new methods using the super keyword instead of this.


/* -----------------------------------------------------------------
--------> 2.4.3 Inheritance from a constructor function
------------------------------------------------------------------*/

// Classes can also inherit from a constructor function.
Let AlmostEmpty = function(sth) { 
    console.log(sth); 
    this.sayHi = function() { 
        console.log("Hi!") 
    }; 
};

class ExtendedClass extends AlmostEmpty {
    constructor(name) {
        super("I’m super ...");
        this.name = name;
    };
    sayHi() { 
        console.log(`Hi ${this.name}!`); 
    };
};
let obj = new ExtendedClass("Bob");
obj.sayHi();    // -> Hi Bob!

