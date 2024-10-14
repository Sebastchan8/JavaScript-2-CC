// 2.5 Section 5 – Static members

/* -----------------------------------------------------------------
--------> 2.5.1 Static members
------------------------------------------------------------------*/

/*
In JavaScript classes, besides regular methods and properties (prototype ones), 
we can define static methods and properties using the static keyword. These fields 
are associated with the class itself, not with the instances of the class. While 
static methods may seem unnecessary at first, they are useful for tool methods 
that operate on multiple instances of a class, rather than on individual objects.

For example, a Vehicle class can have a static method isSameId to compare if 
two vehicles have the same id. This method is logically tied to the class, not 
a single instance, making it ideal as a static method.

Static methods are accessed through the class itself 
(e.g., Vehicle.isSameId(v1, v2)) rather than through individual objects. 
Additionally, static methods can be defined either inside the class 
using the static keyword or outside the class after declaration.
 */


// When we use a static function with an object or instance we get error:
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
    static sayHello() {
        console.log("Hello!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
almostEmptyObject.sayHello(); // error
AlmostEmptyClass.sayHello(); // -> Hello!

// We need to use the class name to call the static method:
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
    static isSameId(v1, v2) {
        return v1.id === v2.id;
    };
};
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle1 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});
Vehicle.isSameId(vehicle1, vehicle2); // -> true
Vehicle.isSameId(vehicle1, vehicle2); // -> false


// The previous examples the static methods are defined inside the class
// we can do it outside the class:
Vehicle.isSameId =  function(v1, v2) {
    return v1.id === v2.id;
};
