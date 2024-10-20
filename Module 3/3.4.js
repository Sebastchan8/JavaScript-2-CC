// 3.4 Section 4 – Extending built-in types

/* -----------------------------------------------------------------
-------->  3.4.1 Extending built-in types
------------------------------------------------------------------*/

/*
The built-in objects in JavaScript may not always offer methods that suit specific needs, 
so developers often create custom functionalities. For example, if you need to extract 
an element from an array at a given index, you can write a function like `getItem`. 
This function checks if the index is within bounds and returns the element, 
or `undefined` if the index is out of range.
 */
let getItem = function(array, index) {
    let retVal = undefined;
    if(index > 0 && index < array.length) {
        retVal = array[index];
    }
    return retVal;
}
let array = [10, 20, 80, 100];
console.log(getItem(array, 2)); // -> 80


/*
To make the function simpler, you can omit range checking since JavaScript already 
returns `undefined` for out-of-range indices. An even more useful variation is creating 
a `getRandomItem` function that returns a random element from the array using 
the `Math.random()` function.
 */
let getRandomItem = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
let array = [10, 20, 80, 100];
console.log(getRandomItem(array)); // -> ?
console.log(getRandomItem(array)); // -> ?


/*
To permanently extend array functionality within your application, you can add 
a new method to the `Array.prototype`. This way, the method, such as `getRandomItem`, 
can be used directly on any array. However, this approach has pros and cons. 
While it allows easy customization, it may lead to conflicts if JavaScript later 
adds a method with the same name to the language. Therefore, modifying built-in 
object prototypes should be done carefully.
 */
Array.prototype.getRandomItem = function() {
    return this[Math.floor(Math.random() * this.length)];
}
console.log(array.getRandomItem()); // -> ?
console.log(array.getRandomItem()); // -> ?


