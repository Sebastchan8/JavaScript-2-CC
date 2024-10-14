// 2.3 Section 3 – Getters and setters

/* -----------------------------------------------------------------
--------> 2.3.1 Getters and setters
------------------------------------------------------------------*/

// The setter and getters method works as expected in objects
// the set method will set the value of the property
// the get method will return the value of the property

class Vehicle { 
    constructor({id, latitude, longitude}){ 
        this.id = id; 
        this.position = {latitude, longitude}; 
        this.status = "unavailable"; 
    };
    set position({latitude, longitude}) { 
        this.time = Date.now(); 
        this.longitude = longitude; 
        this.latitude = latitude; 
    };
    get position() { 
        return { 
            latitude: this.latitude, 
            longitude: this.longitude 
        }; 
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.position = {longitude: 18.193121, latitude: 59.378654};
console.log(vehicle.position);


// For example the setter is called by vehicle.position = {}
// and the getter is called by vehicle.position