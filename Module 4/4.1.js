// 4.1 Section 1 – Advanced functions and decorators

/* -----------------------------------------------------------------
-------->  4.1.1 Extended Parameter Handling – Default parameter values
------------------------------------------------------------------*/

function greetings(name) {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, undefined!
greetings('Alice'); // -> Hi. Alice!

// Default parameter values
function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, anonymous!
greetings('Alice'); // -> Hi. Alice!


function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400



/* -----------------------------------------------------------------
-------->  4.1.2 The rest parameter
------------------------------------------------------------------*/

function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> length: 3, args: 100 200 300
test(100); // -> length: 1, args: 100

// The following:

function test(firstArg, ...anotherArgs) {
    let msg = `frist arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> frist arg: 100, length: 2, args: 200 300
test(100); // -> frist arg: 100, length: 0, args: 




/* -----------------------------------------------------------------
-------->  4.1.3 The spread operator
------------------------------------------------------------------*/

function getFile(url, name, mime) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = ['https://localhost/files', 'test.json', 'application/json'];
getFile(...parameters); // -> url: https://localhost/files, name: test.json, mime: application/json



/* -----------------------------------------------------------------
-------->  4.1.4 Simulating named parameters
------------------------------------------------------------------*/

function getFile({url, name, mime}) {
    console.log(`url: ${url}, name: ${name}, mime: ${mime}`);
    // ...
    // some logic responsible for connecting and downloading the file
}
let parameters = {name: 'test.json', url: 'https://localhost/files', mime: 'application/json'};
getFile(parameters); // -> url: https://localhost/files, name: test.json, mime: application/json
getFile({mime: 'image/jpeg', url: 'http://test.com/rest', name: 'id.jpg'}); // -> url: http://test.com/rest, name: id.jpg, mime: image/jpeg



/* -----------------------------------------------------------------
-------->  4.1.5 Closure
------------------------------------------------------------------*/

let counter = 0; // global variable
function tick() {
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 2
console.log(tick()); // -> 3



function tick() { // local variable
    let counter = 0;
    return ++counter;
}
console.log(tick()); // -> 1
console.log(tick()); // -> 1
console.log(tick()); // -> 1



// Closure
function getTick() {
    let counter = 10;
    return function () {
        return ++counter;
    }
}
let tick = getTick();
console.log(tick()); // -> 11
console.log(tick()); // -> 12
console.log(tick()); // -> 13


// closures is to emulate private properties
function getPoint() {
    function inc(n) {
        return ++n;
    };
    return {
        x: 10,
        y: 20,
        incX: function() {
            this.x = inc(this.x);
        },
        incY: function() {
            this.x = inc(this.x);
        }
    };
}
let point = getPoint();
console.log(point); // -> {x: 10, y: 20, show: ƒ, incX: ƒ, incY: ƒ}
point.incX();
console.log(point); // -> {x: 11, y: 20, show: ƒ, incX: ƒ, incY: ƒ}



/* -----------------------------------------------------------------
-------->  4.1.6 IIFE (Immediately Invoked Function Expression)
------------------------------------------------------------------*/

(function(msg){
    console.log(msg);
})('test IIFE'); // -> test IIFE


// it's worth using IIFE in case of prevent global variables
(function () {
    let a = 10;
    let b = 20;
    let result;
    let sum = function (x, y) {
        return x + y;
    }
    result = sum(a, b);
    console.log(result); // -> 30
})();
console.log(result); // -> Undefined ReferenceError: result is not defined 



/* -----------------------------------------------------------------
-------->  4.1.7 Forwarding calls (apply, call, bind)
------------------------------------------------------------------*/

/**

In JavaScript, the this keyword behaves differently depending on how and where it is used. 
Below is a summary with code examples that cover different scenarios, especially when using 
functions like call, apply, and bind, and how this is handled in arrow functions.

 */

// Object Methods
let point = {
    x: 100,
    y: 200,
    show: function() {
        console.log(`${this.x}:${this.y}`);  // Accesses point.x and point.y
    }
};
point.show();  // Output: 100:200


// Global Functions
'use strict';
function test() {
    console.log(this);  // In strict mode: undefined
}
test();

function test() {
    console.log(this);  // Without strict mode: refers to global object (Window)
}
test();

// Using call and apply
let point = {
    x: 100,
    y: 200
};

function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`);
}

// Using call
showPoint.call(point, 'coordinates');  // Output: coordinates [100:200]

// Using apply
showPoint.apply(point, ['coordinates']);  // Output: coordinates [100:200]



// Using bind
let point = {
    x: 100,
    y: 200
};

function showPoint(msg) {
    console.log(`${msg} [${this.x}:${this.y}]`);
}

// Bind the function to 'point' object
let showCoordinates = showPoint.bind(point, 'coordinates');

// Call the new function
showCoordinates();  // Output: coordinates [100:200]



// Arrow Functions
let point = {
    x: 100,
    y: 200,
    show: () => {
        console.log(this);  // Arrow function: this refers to the outer scope, not the point object
    }
};

point.show();  // Output: Window (or global object)




/* -----------------------------------------------------------------
-------->  4.1.8 First-class functions
------------------------------------------------------------------*/

// Function Expressions
let sum = function(a, b) {
    return a + b;
};
console.log(sum(10, 20));  // Output: 30



// Passing Functions as Arguments
function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}

console.log(executeOperation(sum, 10, 20));  // Output: 30



// Returning Functions from Functions
function getMultiplyBy(multiplier) {
    return function(a) {
        return a * multiplier;
    }
}

let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2));  // Output: 6
console.log(getMultiplyBy(5)(10));  // Output: 50


/*
    The example above is also a closure. A closure is a function that 
    "remembers" the environment (variables) in which it was created, 
    even after that environment is gone. In the getMultiplyBy example:

    The inner function has access to the multiplier argument from 
    the outer getMultiplyBy function, even though getMultiplyBy 
    has already finished executing.
 */



 
    
/* -----------------------------------------------------------------
-------->   4.1.9 Decorating functions (wrappers, higher order functions)
------------------------------------------------------------------*/

// Simple decorator
let funA = function(a, b) {
    return a + b;
}

let decor = function(fn) {
    return function(arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`Result: ${result}`);
        return result;
    }
}

let funB = decor(funA);
console.log(funA(3, 4)); // Output: 7
funB(3, 4);              // Output: "Result: 7", 7



// Practical Use Case: Caching (Memoization)
let factorial = function (n) {
    return n > 1 ? factorial(n-1) * n : 1;
}

let decor = function(fn) {
    let results = new Map();
    return function(n) {
        let result = results.get(n);
        if (!result) {
            result = fn(n);
            results.set(n, result);
            console.log(`... calc ${n} -> ${result}`);
        } else {
            console.log(`... found ${n} -> ${result}`);
        }
        return result;
    }
}

let factorial2 = decor(factorial);

factorial2(3);  // Output: "... calc 1 -> 1", "... calc 2 -> 2", "... calc 3 -> 6"
factorial2(3);  // Output: "... found 3 -> 6"



// Debounce
function debounce(fn, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), delay);
    }
}


// Throttle
function throttle(fn, interval) {
    let lastCall = 0;
    return function(...args) {
        let now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            fn.apply(this, args);
        }
    }
}



