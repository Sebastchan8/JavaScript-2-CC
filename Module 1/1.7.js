// 1.7 Section 7 – Methods

/* -----------------------------------------------------------------
--------> 1.7.1 Methods
------------------------------------------------------------------*/

let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType: function() {
        return "circle";
    }
};


// There are a simplified way
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return "circle";
    }
};


// In order to call the function:
console.log(circle.getType());

// Called up using bracket notation:
console.log(circle["getType"]() );


/* -----------------------------------------------------------------
--------> 1.7.2 The this keyword
------------------------------------------------------------------*/

// When we do this:
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return (typeof circle.radius === "number") ? 
        "circle" : "unknown" ;
    }
};
console.log(circle.getType());

// the example works as expected, but if we do the following:
let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "unknown"!


// So, to refer a property of an object, we use the this keyword
let circle = {
    radius: 100,
    center: {
        x: 0,
        y:0
    },
    getType () {
        return typeof this.radius === "number" ? "circle" : "unknown" ;
    }
};
console.log(circle.getType());
let figure = {...circle};
delete circle.radius;
console.log(figure.radius);
console.log(figure.getType()); // "circle"

// There are a potential problems, e.g.
let add = function (a,b) {
    return a + b;
}

// More compact form:
let add = (a,b) => a + b;

// But we should not use arrow functions to declare object methods


/* -----------------------------------------------------------------
--------> 1.7.3 this inside nested objects
------------------------------------------------------------------*/

// In this example this refers to the center object

let circle = {
    radius: 100,
    center: {
        x:0,
        y:0,
        show(){console.log(`${this.x}, ${this.y}`)}
    }
}
circle.center.show();

// There's not a way to access to the parent object
// Cause the concept of OOP


/* -----------------------------------------------------------------
--------> 1.7.4 Getters and setters
------------------------------------------------------------------*/

let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;}
};
console.log(contact.tel);   //207-662-5412
contact.tel = "100-100-1000";
console.log(contact.tel);   //207-662-5412
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email); //RonaldSMurphy@freepost.org

// we didn't define a tel setter, so an attempt to write into such a property will not succeed.


let contact = {
    _tel: "207-662-5412",
    get tel() {return this._tel;},
    set tel(t) { this._tel = t;}
};
console.log(contact.tel);   // 207-662-5412
contact.tel = "100-100-1000";
console.log(contact.tel);   // 100-100-1000


// This is an example with more complex actions
let contact = {
    _age: 36,
   firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
console.log(contact.fullName);
contact.age = -20;
console.log(contact.age);



