// 2.1 Section 1 – Class declaration

/* -----------------------------------------------------------------
--------> 2.1.1 Class declaration
------------------------------------------------------------------*/

let Vehicle = function(id, latitude, longitude){
    
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable";
    this.time = Date.now();
    this.latitude = latitude;    
    this.longitude = longitude;
};
let vehicle1 = new Vehicle("AL1024", 59.358615, 17.947589);
vehicle1.setPosition(59.367647, 18.213451);
console.log(vehicle1);

// ----------------
let Vehicle = function(initialData){
    let {id, latitude, longitude} = initialData;
    this.setPosition = function(latitude, longitude) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.id = id;
    this.status = "unavailable"; 
    this.setPosition(latitude, longitude);
};
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});


// ----------------
// destructuring assignment:
let {id, latitude, longitude} = initialData;


// So the class more sophisticated
let Vehicle = function({id, latitude, longitude}){
    this.setPosition = function({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    this.getPosition = function() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
    this.id = id;
    this.status = "unavailable";
    this.setPosition({latitude, longitude});
};
let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});

// It was emulated, it is real class:
class EmptyClass {};
let emptyObject = new EmptyClass;

// another example:
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
almostEmptyObject.sayHi(); // -> Hi!

// And this is ve Vehicle class using a class declaration:
class Vehicle {
    constructor({id, latitude, longitude}){
       this.setPosition = function({latitude, longitude}) {
           this.time = Date.now();
           this.longitude = longitude;
           this.latitude = latitude;
       };
       this.getPosition = function() {
           return {
               latitude: this.latitude,
               longitude: this.longitude
           };
       };
       this.id = id;
           this.status = "unavailable";
       this.setPosition({latitude, longitude});
       };
   };
   let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
   let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
   

   // Elegant way:

   class Vehicle {
    constructor({id, latitude, longitude}){
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition());


/* -----------------------------------------------------------------
--------> 2.1.2 Class expression
------------------------------------------------------------------*/

// Function types:
function namedFunction() { 
    console.log("I'm named, I hope ... ") 
};
let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...")
};
let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...")
};
namedFunction();    // -> I'm named, I hope ...
anonymousFunction();    // -> I'm a bit anonymous ...
notExactlyAnonymousFunction();    // -> I'm confused ...


// The ability to store a function in a variable (i.e. a function expression) indicates that functions in JavaScript are first-class citizens.

// As the function can be stored in a variable, a class expression can also be stored in a variable.
let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!

/* -----------------------------------------------------------------
--------> 2.1.3 The instance of operator
------------------------------------------------------------------*/

// typeof operator:
console.log(typeof almostEmptyObject); // -> "object"

// It returns object but is not what are we looking for
// So we can check the class by their constructor name:
console.log(almostEmptyObject.constructor.name); // -> "AlmostEmptyClass"


// but is more efective instanceof operator, to check if an object is an instance of a class:
// It returns true or false, confirming or denying that the specified object is an instance of the specified class.

console.log(almostEmptyObject instanceof AlmostEmptyClass); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true


