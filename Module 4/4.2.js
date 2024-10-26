// 4.2 Section 2 – Generators and iterators

/* -----------------------------------------------------------------
-------->  4.2.1 Generators and iterators
------------------------------------------------------------------*/
let s = new Set([1, 30]);
s.add(500);
s.add(50);

for(let e of s) {
    console.log(e); // -> 1  30   500   50
}

console.log([...s]); // -> [1, 30, 500, 50]

console.log(...s); // -> 1  30  500   50

let it = s[Symbol.iterator]();
console.log(it.next().value); // -> 1
console.log(it.next().value); // -> 30
console.log(it.next().value); // -> 500
console.log(it.next()); // -> {done: false, value: 50}



/* -----------------------------------------------------------------
-------->  4.2.2 Iterators
------------------------------------------------------------------*/

/*
Iterators and Iterables

    An iterator is an object associated with an iterable that allows traversal of its elements one by one.
    Iterators follow the Iterator Protocol, meaning they must implement a next() method.
    The next() method returns an object with:
        value: The current item in the collection.
        done: A boolean indicating whether the end of the collection has been reached.
 */


// Basic operator
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    iterator: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                };
            }
        };
    }
};
let it = almostIterable.iterator();
console.log(it.next()); // -> {value: 10, done: false}


// Making an Object Fully Iterable
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function() {
        let index = -1;
        let data = this.data;
        return {
            next: function() {
                index++;
                return {
                    value: data.length === index ? undefined : data[index],
                    done: data.length === index
                };
            }
        };
    }
};


// Using Custom Iterables with for...of and Spread Syntax
for (let value of almostIterable) {
    console.log(value); // Logs 10, 30, 60, 20, 90
}

console.log([...almostIterable]); // -> [10, 30, 60, 20, 90]


// Simplifying Iterators with Generators
let almostIterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for (let item of this.data) {
            yield item;
        }
    }
};




/* -----------------------------------------------------------------
-------->  4.2.3 Generators
------------------------------------------------------------------*/

/**
 * Generators are special functions that can pause and resume their execution using the yield keyword.
Defined with function*, they return a Generator object, which is an iterator.
 */


/**
 * yield is similar to return, but it pauses the function instead of ending it.
When yield is used, the function execution pauses, and the value after yield is returned as value in the object {value, done}.
 */

function* testGenerator() {
    yield 10;
    yield 20;
    yield 30;
}
let gen = testGenerator();
console.log(gen.next()); // -> {value: 10, done: false}
console.log(gen.next()); // -> {value: 20, done: false}
console.log(gen.next()); // -> {value: 30, done: false}
console.log(gen.next()); // -> {value: undefined, done: true}



// Using Generators with Loops and Data Structures
function* testGenerator() {
    let data = [10, 20, 30];
    for (let element of data) {
        yield element;
    }
}



// Adding Generators to Objects
let iterable = {
    data: [10, 30, 60, 20, 90],
    [Symbol.iterator]: function* () {
        for (let element of this.data) {
            yield element;
        }
    }
};


// Generating Sequences Dynamically
function* factorialGenerator(range = Infinity) {
    let last = 1;
    for (let i = 1; i <= range; i++) {
        last *= i;
        yield last;
    }
}


// Delegating with yield*
function* cities() {
    for (let city of ['London', 'Oslo', 'Berlin']) {
        yield city;
    }
}
function* test() {
    yield* cities();
    yield 'Amsterdam';
    yield* ['Madrid', 'Rome'];
}
console.log([...test()]); // -> ['London', 'Oslo', 'Berlin', 'Amsterdam', 'Madrid', 'Rome']



// Infinite Generators
function* fibonacci(range = Infinity) {
    let a = 0, b = 1;
    yield a;
    yield b;
    while (range--) {
        [a, b] = [b, a + b];
        yield b;
    }
}

