// 1.9 Section 9 – Other ways to create objects

/* -----------------------------------------------------------------
--------> 1.9.1 Other ways to create objects
------------------------------------------------------------------*/

// thE simplest way to create objects is using the object literal notation
// but this is not the only method available


/* -----------------------------------------------------------------
--------> 1.9.2 Factory
------------------------------------------------------------------*/

// A programming pattern that allows you to create objects
let createPoint  = function(x, y) {
    let obj = {};
    obj.x = x;
    obj.y = y;
    return obj;
};
let point1 = createPoint(1,1);
let point2 = createPoint(2,2);
console.log(point1.x); // ->  1
console.log(point2.x); // -> 2

// This is the best way to create objects:
let createPoint  = function(x, y) {
    return {
        x:x,
        y:y
    }
};

// But there are other way even simpler:
let createPoint  = function(x, y) {
    return {
        x,
        y
    }
};

// and another simpler way using arrow notation:
let createPoint  = (x, y) => ({x, y});


// A complex example:
let createColoredPoint  = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    return {
        x,
        y,
        getColor() {return _color}
    }
};
let coloredPoint1 = createColoredPoint (1, 1, "red");// -> ... object under construction
let coloredPoint2 = createColoredPoint (2, 2, "green");// -> ... object under construction 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

// the local variables of the function, which are used by the methods of the returned object, are not deleted
// each call to a function has its own independent environment, just as objects created by the factory are independent. This mechanism is called closure.

// The local variable _color is not accessible from the outside, but only with the getColor method. Therefore, we can treat it as private property.




/* -----------------------------------------------------------------
--------> 1.9.3 The constructor and the new keyword
------------------------------------------------------------------*/

// This is how we can create objects using the new keyword
let ColoredPoint = function(x, y, color) {
    let _info = "... object under construction";
    let _color = color;
    console.log(_info);
    
    this.x = x;
    this.y = y;
    this.getColor = function() {return _color};
};
let coloredPoint1 = new ColoredPoint(1, 1, "red");
let coloredPoint2 = new ColoredPoint(2, 2, "green"); 
console.log(coloredPoint1.getColor());    // -> red
console.log(coloredPoint2.getColor());    // -> green
console.log(coloredPoint1._color);   // -> undefined !!!

console.log(coloredPoint1.constructor.name); // -> ColoredPoint

console.log(typeof coloredPoint1.constructor); // -> function

// in an empty object if we display the constructor name its a function as well
// Note that the inherited properties are not enumerated with the "for ... in" loop, nor Object.kesys nor Object.getOwnPropertyNames. They are available, we can use them, but they are treated slightly differently from the object's own properties.
// The name of the getOwnPropertyNames method does not appear by accident.



/* -----------------------------------------------------------------
--------> 1.9.4 new Object()
------------------------------------------------------------------*/

let emptyObject = new Object();
console.log(emptyObject.constructor.name); 

// there are equivalent ways to create an empty object

let anotherEmptyObject = {};
console.log(anotherEmptyObject.constructor.name);



/* -----------------------------------------------------------------
--------> 1.9.5 Object.create
------------------------------------------------------------------*/

// It allows you to create a new object based on an existing object
let reallyEmptyObject = Object.create(null);
console.log(typeof reallyEmptyObject.constructor); // -> undefined

// This time we create a really empty object
// If is important create the empty object using the Object.create method with null as argument



/* -----------------------------------------------------------------
--------> 1.9.6 Class
------------------------------------------------------------------*/

// it was added in one of the following language editions (ECMA6)
