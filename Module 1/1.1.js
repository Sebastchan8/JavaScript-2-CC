// +++ 1.1 Section 1 – What is an object?

/* -----------------------------------------------------------------
--------> 1.1.1 Primitive data types
------------------------------------------------------------------*/
console.log(typeof 2.5); // -> number
console.log(typeof "one two three"); // -> string
console.log(typeof false); // -> boolean

let nr = 2.5; 
nr = nr / 2;
console.log(typeof nr); // -> number

// NOTE: Everything in JavaScript is an object, except primitive


/* -----------------------------------------------------------------
--------> 1.1.2 Array as a complex type
------------------------------------------------------------------*/ 
let a = [10, 20, "en to tre", true, 50];
a[4] = a[4] * 2;
console.log(a[0]);    // -> 10
console.log(a[2]);    // -> en to tre
console.log(a[4]);    // -> 100


/* -----------------------------------------------------------------
--------> 1.1.3 An object as a different type of array
------------------------------------------------------------------*/ 

// An object is a special kind of array, also called association array or map

let sampleObject = {
    id: 10, 
    delay: 20,
    name: "en to tre",
    isPresent: true,
    delay: 50
};
sampleObject.delay = sampleObject.delay * 2;
console.log(sampleObject.id);    // -> 10
console.log(sampleObject.name);    // -> en to tre
console.log(sampleObject.delay);    // -> 100



