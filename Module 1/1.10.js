// 1.10 Section 10 – Prototypes

/* -----------------------------------------------------------------
--------> 1.10.1 Prototypes
------------------------------------------------------------------*/

//  Classes act as templates for creating objects (instances), allowing properties and methods to be inherited.
// Prototypes are still important to understand, but classes are now more commonly used.



/* -----------------------------------------------------------------
--------> 1.10.2 __proto__
------------------------------------------------------------------*/

// Note: it is not recommended to use the __proto__ property in JavaScript
figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};
circle.__proto__ = figure;

console.log(figure.getType()); // unknown
console.log(circle.getType()); // circle


// In our case, the method belongs to figure, but it is called in circle
// this inside it refers to circle and not to figure


/* -----------------------------------------------------------------
--------> 1.10.3 Object.setPrototypeOf
------------------------------------------------------------------*/

figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};
let circle = {
    type: "circle",
    center: {x:0, y:0},
    radius: 100
};

Object.setPrototypeOf(circle, figure);
let proto = Object.getPrototypeOf(circle);
console.log(JSON.stringify(proto, null, 2)) // {}
console.log(circle.getType()); // circle

// set figure object as proto in circle

/* -----------------------------------------------------------------
--------> 1.10.4 Object.create
------------------------------------------------------------------*/

// Wecan create an object based on another object
figure = {
    getType: function() {
        return this.type ? this.type : "unknown";
    }
};

let circle = Object.create(figure)
circle.type = "circle";
circle.center = {x:0, y:0},
circle.radius = 100;
console.log(circle.getType());

/* -----------------------------------------------------------------
--------> 1.10.5 Constructor
------------------------------------------------------------------*/

let Figure = function(){
    this.getType = function() {
        return this.type ? this.type : "unknown";
    }
};
let figure = new Figure;

let Circle = function(center, radius){
    this.type = "circle";
    this.center = center;
    this.radius = radius;
};
Circle.prototype = figure;
let circle1 = new Circle({x:0, y:0}, 10);
let circle2 = new Circle({x:100, y:100}, 100);

let Triangle = function(v1, v2, v3) {
    this.type = "triangle";
    this.vertices = [ v1, v2, v3];
};
Triangle.prototype = figure;
let triangle1 = new Triangle({x:0, y:0}, {x:50, y:50}, {x:10, y:100});
console.log(circle1.getType()); // circle
console.log(triangle1.getType()); // triangle

Circle.prototype.hi = function(){console.log("Hi!")};

circle1.hi(); // Hi!
triangle1.hi(); // Hi!
figure.hi(); // Hi!

// Now we can add methods to the string prototype
let testString = new String("unu doi trei");
console.log(testString.length);

String.prototype.hi = function(){console.log("Hi!")};
console(string.hi()); // Hi!

