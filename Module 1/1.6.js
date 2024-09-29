// 1.6 Section 6 – References

/* -----------------------------------------------------------------
--------> 1.6.1 References
------------------------------------------------------------------*/


// This will return an exception

const contact1 = {};
contact1 = { email: "RonaldSMurphy@freepost.org"}; // TypeError: Assignment to constant variable. 

// but it is accepted
const contact = {};
contact.email = "RonaldSMurphy@freepost.org";
console.log(contact.email);

// and the operations with the property as well
contact.email = "rsmurphy@briazz.com";
console.log(contact.email);
delete contact.email;
console.log(contact.email);


/* -----------------------------------------------------------------
--------> 1.6.2 The const object can be modified
------------------------------------------------------------------*/

// We cannot change the reference, e.g. by replacing the object (the new object has a different address)
// However, changes inside an object – adding a new property, changing a value, etc. do not affect the reference.


/* -----------------------------------------------------------------
--------> 1.6.3 Comparing objects
------------------------------------------------------------------*/

// Those are two different objects (two different memory refferences)
var point1 = {x: 10, y: 20};
var point2 = {x: 10, y: 20};
console.log(point1 === point2);     // false


// Otherwise they are the same
let point3 = point1;
console.log(point1 === point3);     // true

point3.z = 40;
console.log(point3.z);    // 40
console.log(point1.z);    // 40
console.log(point2.z);    // undefined


/* -----------------------------------------------------------------
--------> 1.6.4 Copying objects (copying references (), cloning, merging)
------------------------------------------------------------------*/

let point0 = {x:10, y: 20 };
let point1 = point0;    // copy reference
let point2 = {};
Object.assign(point2, point0);  //  copy properties into the new object
console.log(point2.x);
console.log(point2.y);
console.log(point1 === point0); // true
console.log(point1 === point2); // false

// x, y, and z (with the values 10, 20, and 100 respectively)
let point3 = {};
Object.assign(point3, point0, {z: 100});
console.log(point3.z);

// the properties with the same names are overwritten.
var point4 = {};
Object.assign(point4, point3, {z: 200, color: "red"});
console.log(point4.z);    // 200


// We can simplify
let point0 = {x:10, y: 20 };
let point2 = Object.assign({}, point0);
let point3 = Object.assign({}, point0, {z: 100});

//alternative to Object.assign is to use the spread operator
// The example rewritten
let point0 = {x:10, y: 20 };
let point2 = { ...point0};
let point3 = { ...point0, z: 100};

// This code
let point4 = { ...point3, ...{z: 200, color: "red"}};

// will produce the same effect
let point4 = { ...point3, z: 200, color: "red"};



// The following example shows how the spread operator can duplicated an object, but not at all.
// The properties that are primitive works as expected
let circle1 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};
let circle2 = {...circle1};
circle1.radius = 200;
circle1.center.x = 200;
console.log(circle2.radius);
console.log(circle2.center.x);
console.log(circle1 === circle2); // false
console.log(circle1.center === circle2.center); // true !

// Although those are two differents objects, the 'center' property are the same
// Thus, we should copy the properties that are objects too

// For that this is an iterative function
let deepClone = function(obj) {
    let newObj = {...obj};
    for(var property in newObj) {
        if(typeof newObj[property] === "object") {
            newObj[property] = deepClone(newObj[property]);
        }
    }
    return newObj;
}

// So we could use it

// Practice
/*
    Invent a sample object with at least three nesting levels, clone it using this function, and check 
    that all properties, at any nesting level, are actually independent of the source object. 
 */
let circle11 = {
    radius: 100,
    center: {
        x: 100,
        y: 100
    }};
let circle22 = {...circle11};
let circle33 = deepClone(circle11);

circle11.radius = 200;
circle11.center.x = 200;

console.log(circle22.radius); // 100
console.log(circle22.center.x); // 200

console.log(circle33.radius); // 100
console.log(circle33.center.x); // 100

console.log(circle11 === circle22); // false
console.log(circle11.center === circle22.center); // true

console.log(circle11 === circle33); // false
console.log(circle11.center === circle33.center); // false <-- verified that center property in circle33 is different

// Now its possible to notice that the 'center' property (an object) is independent of the source object
