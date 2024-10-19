// 3.2 Section 2 – Composite data types

/* -----------------------------------------------------------------
--------> 3.2.1 Composite data types
------------------------------------------------------------------*/

// composite data types, we mean structures for storing many values of different types in different forms.

// These structures differ in the way values are identified, accessed, or organized.



/* -----------------------------------------------------------------
--------> 3.2.2 Array
------------------------------------------------------------------*/

// An array is a composite data structure, which can contain many elements of different types, and its size and contents can change.


/* -----------------------------------------------------------------
--------> 3.2.3 Creating an array
------------------------------------------------------------------*/

let array1 = []; // -> []
let array2 = [2, 4, "six"]; // -> [2, 4, "six"]
let array3 = new Array(); // -> []
let array4 = new Array(2); // -> [undefined, undefined]
let array5 = new Array(2, 4, "six"); // -> [2, 4, six]
let array6 = new Array("2"); // -> ["2"]
console.log(`array2 : ${typeof array2} : ${array2 instanceof Array} : ${array2.length}`); // -> array2 : object : true : 3
console.log(`array5 : ${typeof array5} : ${array5 instanceof Array} : ${array5.length}`); // -> array5 : object : true : 3



/* -----------------------------------------------------------------
--------> 3.2.4 Merging arrays
------------------------------------------------------------------*/

let array1 = [10, 20, 30];
let array2 = ["cat", "dog"];
let array3 = array1.concat(array2); // -> [10, 20, 30, "cat", "dog"];
console.log(array1.length); // -> 3
console.log(array2.length); // -> 2
console.log(array3.length); // -> 5
console.log(array3[0]); // -> 10
console.log(array3[3]); // -> "cat"


/* -----------------------------------------------------------------
--------> 3.2.5 Adding and removing items – push and unshift
------------------------------------------------------------------*/
// push (adding elements at the end of the array) 
// unshift (adding elements to the beginning of the array)


let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1.push(100); // -> [10, 20, 30, 100]
array1.push(50, "dog"); // -> [10, 20, 30, 100, 50, "dog"]
array1.unshift("cat", 90, 80); // -> ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"]



/* -----------------------------------------------------------------
--------> 3.2.6 Adding and removing items – pop and shift
------------------------------------------------------------------*/

// pop from the end of the array, 
// shift from the beginning


console.log(array1.length); // -> 9
console.log(array1.shift()); // -> cat
console.log(array1.length); // -> 8
console.log(array1.pop()); // -> dog
console.log(array1.length); // -> 7


/* -----------------------------------------------------------------
--------> 3.2.7 Adding and removing items without using methods
------------------------------------------------------------------*/

let array1 = [10, 20, 30]; // -> [10, 20, 30]
array1[3] = 100; // -> [10, 20, 30, 100]
array1[5] = 1000; // -> [10, 20, 30, 100, undefined, 1000]
delete array1[1]; // -> [10, undefined, 30, 100, undefined, 1000]
console.log(array1[1]); // -> undefined



/* -----------------------------------------------------------------
--------> 3.2.8 Walking through the array elements
------------------------------------------------------------------*/

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
for(let index=0; index< array1.length; index++) {
    console.log(`${index} : ${array1[index]}`); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog
}


//using for each
function toConsole(item, index, array) {
    console.log(`${index} : ${item}`);
}
array1.forEach(toConsole); // -> 0 : cat -> 1 : 90 -> 2 : 80 -> 3 : 10 -> 4 : 20 -> 5 : 30 -> 6 : 100 -> 7 : 50 -> 8 : dog


// Simplifying
array1.forEach(function (item, index) {
    console.log(`${index} : ${item}`);
});

// Using arrow function
array1.forEach( (item, index) => {
    console.log(`${index} : ${item}`);
});

// or

array1.forEach( (item, index) => console.log(`${index} : ${item}`));



/* -----------------------------------------------------------------
--------> 3.2.9 The every and some methods
------------------------------------------------------------------*/

// some, is successful if at least one of the elements meets the condition. The methods return true in the case of success, or false in the case of failure.

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let anyNumberPresent = array1.some( (item) => {
    if(typeof item === "number") {
        return true;
    } else {
        return false;
    }
}); // -> true

anyNumberPresent = array1.some( (item) => {
    return (typeof item === "number");
}); // -> true

anyNumberPresent = array1.some( item => typeof item === "number"); // -> true



// every, checks whether all the elements of the array meet a certain condition we have given.
let array2 = [90, 80, 10, 20, 30, 100, 50];
let allPositive = array2.every(item => item > 0); // -> true




/* -----------------------------------------------------------------
--------> 3.2.10 Filtering
------------------------------------------------------------------*/

// filter, returns an array containing all the elements that meet the condition we have given.
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
console.log(array1.length); // -> 9
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers.length); // -> 7
console.log(array1.length); // -> 9



/* -----------------------------------------------------------------
--------> 3.2.11 Mapping elements
------------------------------------------------------------------*/
// The new array is created by performing the action we invented on each element of the original array.
let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let squarePower = array1.filter(item => typeof item === "number").map(item => item*item); // -> [8100, 6400, 100, 400, 900, 10000, 2500]

// item, index, and array arguments



/* -----------------------------------------------------------------
--------> 3.2.12 Sorting
------------------------------------------------------------------*/

let array1 = ["cat", 90, 80, 10, 20, 30, 100, 50, "dog"];
let numbers = array1.filter(item => typeof item === "number"); // -> [90, 80, 10, 20, 30, 100, 50]
console.log(numbers[0]);
numbers.sort((first, second) => {
    if( first < second) {
        return -1
    } else if(first == second) {
        return 0;
    } else {
        return 1;
    }
}); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]);


// Produces the same result

numbers.sort((first, second) =>  first - second); [10, 20, 30, 50, 80, 90, 100]

// The sort method will treat any negative or positive number returned by this function in the same way


/* -----------------------------------------------------------------
--------> 3.2.13 Reducing the array
------------------------------------------------------------------*/

// Remember that in the arrow function, if we don’t use curly brackets enclosing the function block, 
// the value of the executed operation is automatically returned (without the need to use the return keyword).

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
let sum = numbers.reduce((accumulator, item) => accumulator + item);
console.log(sum); // -> 380

// 1000 as reduce parameter
let anotherSum = numbers.reduce((accumulator, item) => accumulator + item, 1000);
console.log(anotherSum); // -> 1380

// Complex example
let strangeObj = numbers.reduce((accumulator, item, index) => {
    accumulator[item] = index;
    return accumulator;
} , {});
console.log(strangeObj); // -> {10: 0, 20: 1, 30: 2, 50: 3, 80: 4, 90: 5, 100: 6}



/* -----------------------------------------------------------------
--------> 3.2.14 Reversing the order of the elements
------------------------------------------------------------------*/

let numbers = [10, 20, 30, 50, 80, 90, 100]; // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10
numbers.reverse(); // -> [100, 90, 80, 50, 30, 20, 10]
console.log(numbers[0]); // -> 100
numbers.reverse(); // -> [10, 20, 30, 50, 80, 90, 100]
console.log(numbers[0]); // -> 10




/* -----------------------------------------------------------------
--------> 3.2.15 Looking for an element
------------------------------------------------------------------*/

// The include method returns true if the item is located (otherwise it returns false

// The indexOf method returns the index (that is, the position) of the first element found in the array with the value we are looking for, or -1 if we fail.

// The lastIndexOf method works similarly, the only difference being that the search starts from the right side (from the end of the array).

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.includes("shark")); // -> true 
console.log(myPets.includes("unicorn")); // -> false
console.log(myPets.indexOf("dog")); // -> 1
console.log(myPets.lastIndexOf("dog")); // -> 6
console.log(myPets.indexOf("unicorn")); // -> -1


let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
console.log(myPets.find(item => item.length > 3)); // -> hamster
console.log(myPets.find(item => item.includes("og"))); // -> dog
console.log(myPets.find(item => item.includes("fish"))); // -> undefined
console.log(myPets.findIndex(item => item.length > 3)); // -> 2
console.log(myPets.findIndex(item => item.includes("og"))); // -> 1
console.log(myPets.findIndex(item => item.includes("fish"))); // -> -1



/* -----------------------------------------------------------------
--------> 3.2.16 Copying a selected part of the array
------------------------------------------------------------------*/

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let p1 = myPets.slice(3); // ->  ["canary", "shark", "cat", "dog"]
let p2 = myPets.slice(3, 5); // -> ["canary", "shark"]
let p3 = myPets.slice(-3); // -> ["shark", "cat", "dog"]
let p4 = myPets.slice(-3, -1); // -> ["shark", "cat"]



/* -----------------------------------------------------------------
--------> 3.2.17 Deleting and replacing a selected part of the array
------------------------------------------------------------------*/

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
let removedPets = myPets.splice(2, 3); 
console.log(myPets); // -> ["cat", "dog", "cat", "dog"]
console.log(removedPets); // -> ["hamster", "canary", "shark"]



// The splice method can also be used to insert new elements into the array.
// If we don’t want to delete anything, then we give 0 as the second argument.

let myPets = ["cat", "dog", "hamster", "canary", "shark", "cat", "dog"];
myPets.splice(2, 0, "rabbit", "guinea pig");
console.log(myPets); // -> ["cat", "dog", "rabbit", "guinea pig", "hamster", "canary", "shark", "cat", "dog"]



/* -----------------------------------------------------------------
--------> 3.2.18 The destructuring assignment
------------------------------------------------------------------*/


let myPets = ["cat", "dog", "hamster", "canary"];
let pet1 = myPets[0];
let pet3 = myPets[2];
let pet4 = myPets[3];
console.log(pet1); // -> cat
console.log(pet3); // -> hamster

// destructuring assignment

let [pet1, , pet3, pet4] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> hamster


let myPets = ["cat", "dog"];
let [pet1, , pet3] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> undefined


// Prepare the default values
let myPets = ["cat", "dog"];
let [pet1 = "fish", , pet3 = "fish"] = myPets;
console.log(pet1); // -> cat
console.log(pet3); // -> fish



/* -----------------------------------------------------------------
--------> 3.2.19 The spread operator in arrays
------------------------------------------------------------------*/

// spread operator (i.e. three dots)

let array1 = [100, 200, 300];
let array2 = [1000, 2000];
let array3 = [10, 20, ...array1, 500, ...array2]; //-> [10, 20, 100, 200, 300, 500, 1000, 2000]


// passing an array and the positions as arguments
let testFn = (a, b, c, d) => a + b + c + d;
let array = [10, 20, 30, 40];
console.lof(testFn(...array)); // -> 100



/* -----------------------------------------------------------------
--------> 3.2.20 Set
------------------------------------------------------------------*/

// The Set constructor is used to create a collection of unique elements.



/* -----------------------------------------------------------------
--------> 3.2.21 The Set constructor
------------------------------------------------------------------*/

let emptySet = new Set(); // -> {}
console.log(emptySet.size); // -> 0
let petsSet = new Set(["cat", "dog", "cat"]); // -> {"cat", "dog"}
console.log(petsSet.size); // -> 2



/* -----------------------------------------------------------------
--------> 3.2.22 Checking the presence of the element
------------------------------------------------------------------*/

let petsSet = new Set(["cat", "dog"]); // -> {"cat", "dog"}
console.log(petsSet.has("cat")); // -> true
console.log(petsSet.has("shark")); // -> false


/* -----------------------------------------------------------------
--------> 3.2.22 3.2.23 Handling elements
------------------------------------------------------------------*/

console.log(petsSet.size); // -> 2
petsSet.add("shark");
petsSet.add("hamster");
console.log(petsSet.size); // -> 4
console.log(petsSet.has("shark")); // -> true
petsSet.delete("dog"); // -> true
petsSet.delete("dog"); // -> false
console.log(petsSet.size); // -> 3
petsSet.clear();
console.log(petsSet.size); // -> 0




/* -----------------------------------------------------------------
--------> 3.2.24 Walking through the set elements
------------------------------------------------------------------*/

let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
petsSet.forEach(value => console.log(value)); // -> cat -> dog -> hamster


petsSet.forEach((value, key) => console.log(`(${value}:${key})`)); // -> (cat:cat) -> (dog:dog) -> (hamster:hamster)


// other way
let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
let petsIterator = petsSet.values();
console.log(petsIterator.next().value); // -> cat
console.log(petsIterator.next().value); // -> dog
console.log(petsIterator.next().value); // -> hamster

// on a loop
let petsIterator = petsSet.values();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> cat -> dog -> hamster
 result = petsIterator.next();
}



/* -----------------------------------------------------------------
-------->  3.2.25 The spread operator in sets
------------------------------------------------------------------*/

// Convert a set into an array
let petsSet = new Set(["cat", "dog", "hamster"]); // -> {"cat", "dog", "hamster"}
console.log(petsSet instanceof Set); // -> true
let petsArray = [...petsSet]; // -> ["cat", "dog", "hamster"]
console.log(petsArray instanceof Array); // -> true




/* -----------------------------------------------------------------
-------->  3.2.26 Map
------------------------------------------------------------------*/

// The keys in the map are unique, trying to add a new element with the same key as the existing one will overwrite it.

// The difference is that we store key:value pairs in the map, while in the set we store values only




/* -----------------------------------------------------------------
-------->  3.2.27 The Map constructor
------------------------------------------------------------------*/

let emptyMap = new Map();
let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(emptyMap.size); // -> 0
console.log(petsMap.size); // -> 3



/* -----------------------------------------------------------------
-------->  3.2.28 Checking the presence of the element
------------------------------------------------------------------*/

// has method which allows us to check if there is an item with the given key in the collection 
// (we look only at the key, and not at the value)

let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.has("dogs")); // -> true
console.log(petsMap.has("sharks")); // -> false
console.log(petsMap.has(1)); // -> false




/* -----------------------------------------------------------------
-------->  3.2.29 Handling elements
------------------------------------------------------------------*/

let petsMap = new Map([["cats", 1],[ "dogs", 2],[ "hamsters", 5]]);
console.log(petsMap.get("hamsters")); // -> 5
petsMap.set("hamsters", 6);
console.log(petsMap.get("hamsters")); // -> 6
petsMap.delete("hamsters");
console.log(petsMap.get("hamsters")); // -> undefined
petsMap.clear();
console.log(petsMap.size); // -> 0



/* -----------------------------------------------------------------
-------->  3.2.30 Walking through the map elements
------------------------------------------------------------------*/

// forEach
let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
anotherPetsMap.forEach((value, key) => console.log(`${key} : ${value}`)); // -> snakes : 1 -> cats : 3 -> dogs : 2

// values
let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petValuesIterator = anotherPetsMap.values();
console.log(petValuesIterator.next().value); // -> 1
console.log(petValuesIterator.next().value); // -> 3
console.log(petValuesIterator.next().value); // -> 2

// keys
let anotherPetsMap = new Map([["snakes", 1],["cats", 3],["dogs", 2]]);
let petKeysIterator = anotherPetsMap.keys();
console.log(petKeysIterator.next().value); // -> snakes
console.log(petKeysIterator.next().value); // -> cats
console.log(petKeysIterator.next().value); // -> dogs

// entries
let petsIterator = anotherPetsMap.entries();
let result = petsIterator.next();
while (!result.done) {
    console.log(result.value); // -> ["snakes", 1] -> "cats", 3] -> ["dogs", 2]
 result = petsIterator.next();
}



/* -----------------------------------------------------------------
-------->  3.2.31 The for ... of loop
------------------------------------------------------------------*/

let petsArray = ["cat", "dog", "hamster"];
for( let pet of petsArray) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsSet = new Set(["cat", "dog", "hamster"]);
for( let pet of petsSet) {
    console.log(pet); // -> cat -> dog -> hamster
};
let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
for( let pet of petsMap) {
    console.log(pet); // -> ["cats", 1] -> ["dogs", 3] -> ["hamsters", 2]
    console.log(pet[0]); // -> ctas -> dogs -> hamsters
}



/* -----------------------------------------------------------------
-------->  3.2.32 The spread operator in maps
------------------------------------------------------------------*/

let petsMap = new Map([["cats", 1], ["dogs", 3], ["hamsters", 2]]);
console.log(petsMap instanceof Map); // -> true
let petsArray = [...petsMap]; // -> [["cats", 1], ["dogs", 3], ["hamsters", 2]]
console.log(petsArray instanceof Array); // -> true




/* -----------------------------------------------------------------
-------->  3.2.33 Object
------------------------------------------------------------------*/

/*
Arrays, maps, or sets are composite structures whose main task is to allow you to store your data collection.

Each of these structures has different features and is suitable for different tasks. The elements of an array can be repeated.

As they only have values, we identify them by their position (index) and therefore their order is important.

A set is a data collection without indexes, in which a certain order is maintained, but it does not affect the operation of the set.

Elements in a set have only a value (although formally in JavaScript they also have keys identical to values).

The last of these structures (i.e. the map) similar to the set has elements whose order is not important.

Map elements always consist of a key:value pair, both attributes of which can be of any type.

The keys in the map must be unique, and they cannot be repeated.
 */




/* -----------------------------------------------------------------
-------->  3.2.34 Creating an object
------------------------------------------------------------------*/

// Let's treat an object as a collection of elements with certain keys and values.
let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};



/* -----------------------------------------------------------------
-------->  3.2.35 Handling elements
------------------------------------------------------------------*/

console.log(anotherPetsObj.snakes); // -> 1
anotherPetsObj.snakes = 2;
console.log(anotherPetsObj.snakes); // -> 2
delete anotherPetsObj.snakes;
console.log(anotherPetsObj.snakes); // -> undefined
anotherPetsObj.snakes = 0;
console.log(anotherPetsObj.snakes); // 0



/* -----------------------------------------------------------------
-------->  3.2.36 Walking through elements
------------------------------------------------------------------*/

let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
Object.keys(anotherPetsObj).forEach(key=>console.log(key)); // -> snakes -> cats -> dogs
Object.values(anotherPetsObj).forEach(key=>console.log(key)); // -> 1 -> 3 -> 2
Object.entries(anotherPetsObj).forEach(key=>console.log(key)); // -> ["snakes", 1] -> ["cats", 3] -> ["dogs", 2]


let anotherPetsObj = {"snakes": 1,"cats": 3,"dogs": 2};
for (let key in anotherPetsObj) {
    console.log(key); // -> snakes -> cats -> dogs
    console.log(anotherPetsObj[key]); // -> 1 -> 3 -> 2
}



/* -----------------------------------------------------------------
-------->  3.2.37 The spread operator for objects
------------------------------------------------------------------*/

let petsObj = {"cats": 1, "dogs": 3, "hamsters": 2};
let newPetsObj = {...petsObj, "sharks": 1}; // -> {cats: 1, dogs: 3, hamsters: 2, sharks: 1}


