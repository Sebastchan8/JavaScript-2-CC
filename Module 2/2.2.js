// 2.2 Section 2 – Properties

/* -----------------------------------------------------------------
--------> 2.2.1 Properties
------------------------------------------------------------------*/

//This possibility has been added relatively recently, but it is still an experimental technique.

/* -----------------------------------------------------------------
--------> 2.2.2 Property definitions inside class methods
------------------------------------------------------------------*/

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

// When creating a new instance of Vehicle Class  with the constructor method:
// first de id and status properties are created, then the setPosition and getPosition methods
// Create the time, latitude and longitude properties
// Then, if we exceute the getPosition method, it will change the latitude and longitude properties values
// They won't be created again


/* -----------------------------------------------------------------
--------> 2.2.3 Direct declaration inside the class body
------------------------------------------------------------------*/

// the previous class could be written as:
class Vehicle {
    status = "unavailable";
    constructor({id, latitude, longitude}){
        this.id = id;
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

// So the status doesn't need to be set at the time of instantiation

// Since javascript introduced the private properties we could declare them inside the class body
class Vehicle {
    status = "unavailable";
    #longitude;
    #latitude;
    constructor({id, latitude, longitude}){
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(vehicle.getPosition());
console.log(vehicle.#longitude); // error: SyntaxError: reference to undeclared private field or method #longitude


