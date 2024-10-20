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





