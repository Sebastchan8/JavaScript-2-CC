// 3.3 Section 3 – JSON, Math and RegExp

/* -----------------------------------------------------------------
-------->  3.3.1 JSON, Math, and RegExp
------------------------------------------------------------------*/

// Built-in objects are not only constructors of simple and composite data types.


/* -----------------------------------------------------------------
-------->  3.3.2 JSON
------------------------------------------------------------------*/

// JavaScript Object Notation, meaning a text-based data format

let vehicle2 = {
    id: "AK12113",
    longitude: 59.358615, 
    latitude: 17.947589,
    getId: function() {
        return this.id;
    }
};
let vehicle2JSON = JSON.stringify(vehicle2);
console.log(typeof vehicle2JSON); // -> string
console.log(vehicle2JSON); // -> {"id":"AK12113","longitude":59.358615,"latitude":17.947589}


// If an object references self object it returns an infinite loop

JSON.stringify(window); // -> Uncaught TypeError: Converting circular structure to JSON

// Because JSON.stringify does not know how to serialize the window object, so it throws an error.


// The object could be an array:
let Vehicle = function(id, latitude, longitude){ 
    this.id = id;
    this.latitude = latitude;     
    this.longitude = longitude;
}; 
let ids = ["AK12113", "AL1024", "BA1001"];
let vehicles = [];
ids.forEach(id => vehicles.push(new Vehicle(id, 59.358615, 17.947589)));
let vehcilesJSON = JSON.stringify(vehicles); // -> [{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]



/* -----------------------------------------------------------------
-------->  3.3.3 Converting from JSON format
------------------------------------------------------------------*/

// One of the basic rules of the JSON format is that the object keys are strings in double quotes.

let vehicleJSON = '{"id":"AK12113","position":{"longitude":59.358615,"latitude":17.947589}}';
let vehicle = JSON.parse(vehicleJSON);
console.log(typeof vehicle); // -> object
console.log(vehicle.position.longitude); // -> 59.358615


let vehcilesJSON = '[{"id":"AK12113","latitude":59.358615,"longitude":17.947589},{"id":"AL1024","latitude":59.358615,"longitude":17.947589},{"id":"BA1001","latitude":59.358615,"longitude":17.947589}]';
vehcilesJSON = vehcilesJSON.replaceAll("id", "plate");
let vehicles = JSON.parse(vehcilesJSON);
console.log(vehicles instanceof Array); // -> true
console.log(vehicles.length); // -> 3
console.log(vehicles[0].plate); // -> AK12113


/* -----------------------------------------------------------------
-------->  3.3.4 Math
------------------------------------------------------------------*/

// The Math object, like JSON, is not a constructor, but an ordinary object.

console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045


/* -----------------------------------------------------------------
-------->  3.3.5 Rounding
------------------------------------------------------------------*/

console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10
console.log(Math.ceil(10.499999)); // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10
console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11
console.log(Math.ceil(10.8)); // -> 11
console.log(Math.floor(10.8)); // -> 10
console.log(Math.round(10.8)); // -> 11



/* -----------------------------------------------------------------
-------->  3.3.6 Drawing numbers
------------------------------------------------------------------*/

let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomInteger(10,20)); // -> ?



/* -----------------------------------------------------------------
-------->  3.3.7 Other useful methods
------------------------------------------------------------------*/

console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10


console.log(Math.min(100, 20, 300, 10, 400));
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers));


Console.log(Math.pow(2, 3)); // -> 8 => 23
console.log(Math.pow(4, 2)); // -> 16 => 42
console.log(Math.pow(4, -1)); // -> 0.25 => 4-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 40.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1,0.5)); // -> NaN => -10.5 = √(2&-1)
console.log(Math.sqrt(4)); // -> 2
x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3


console.log(Math.cos(Math.PI/3));
console.log(Math.tan(Math.PI/4));
console.log(Math.asin(1));



/* -----------------------------------------------------------------
-------->  3.3.8 RegExp
------------------------------------------------------------------*/

/*
A regular expression (RegExp) is a search pattern used to test whether a string matches specific criteria. 
It consists of literals and metacharacters that define the pattern, allowing you to search, match, 
or validate strings in various programming languages. 

For example, a simple literal-based pattern like `"cut"` can check if a substring exists within a string 
(e.g., "cut" in "haircut"). A metacharacter like a dot (`"."`) can match any character, making the pattern 
more flexible. For instance, `"c.t"` would match both "cut" in "haircut" and "cat" in "caterpillar."

Regular expressions are widely used for validating text data, such as checking the format of an email address 
or searching for specific patterns in strings.
 */


/* -----------------------------------------------------------------
-------->  3.3.9 Constructor and test method
------------------------------------------------------------------*/

let re1 = new RegExp('c.t');
let re2 = /c.t/;
console.log(re1.test("cat")); // -> true
console.log(re2.test("cut")); // -> true
console.log(re2.test("ct")); // -> false



/* -----------------------------------------------------------------
-------->  3.3.10 The exec method
------------------------------------------------------------------*/

let re = /c.t/;
console.log(re.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re.exec("ct")); // -> null



/* -----------------------------------------------------------------
-------->  3.3.11 String constructor methods using RegExp
------------------------------------------------------------------*/

// String -> match, search, replace, ...
let re = /c.t/;
let str = "dog and cat";
console.log(str.match(re)); // -> ["cat", index: 8, input: "dog and cat", groups: undefined]
console.log(str.search(re)); // -> 8
console.log(str.replace(re, 'unicorn')); // -> dog and unicorn
console.log(str); // -> dog and cat



/* -----------------------------------------------------------------
-------->  3.3.12 Basic rules for regular expressions
------------------------------------------------------------------*/

// we use the escape character, which is \ (backslash).

let re = /c\.t/;
console.log(re.exec("cut")); // -> null
console.log(re.exec("c.t")); // -> ["c.t", index: 0, input: "c.t", groups: undefined]

/*
Other metacharacters are * (asterisk), + (plus) and ? (question mark).

They indicate how many times in a row the preceding character (literal or metacharacter) can occur.

The + character means that it may occur once or more times, the * character is zero or more times, 
and the ? character zero or exactly once
 */

let re1 = /o*ps/;
console.log(re1.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re1.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re1.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re2 = /o+ps/;
console.log(re2.exec("ps")); // -> null
console.log(re2.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re2.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
let re3 = /o?ps/;  /// strange, isnt it?
console.log(re3.exec("ps")); // -> ["ps", index: 0, input: "ps", groups: undefined]
console.log(re3.exec("ops")); // -> ["ops", index: 0, input: "ops", groups: undefined]
console.log(re3.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]



/*
The metacharacter | (vertical bar) is treated as an alternative.

It separates two strings of characters, one of which must appear in the tested string
 */
let re1 = /ca|ut/;
console.log(re1.exec("cattle")); // -> ["ca", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["ut", index: 5, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null
let re1 = /c(a|u)t/;
console.log(re1.exec("cattle")); // -> ["cat", "a", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", "u", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> null



/*
This metacharacter is \s.

The backslash at the beginning is an integral part of this metacharacter.
 */

let re = /\so{2,3}ps/; // repeats 'o' two or three times 
console.log(re.exec("He said: ops!")); // -> null
console.log(re.exec("He said: ooops!")); // -> ["ooops", index: 9, input: "He said: ooops!", groups: undefined]
console.log(re.exec("He said: ooooooooops!")); // -> null



/*
At the beginning of the set, you can insert the ^ (caret) metacharacter.

This will mean that any character that is not included in the set may appear in that position.
 */

let re1 = /c[aiu]t/;
console.log(re1.exec("cattle")); // -> ["cat", index: 0, input: "cattle", groups: undefined]
console.log(re1.exec("haircut")); // -> ["cut", index: 4, input: "haircut", groups: undefined]
console.log(re1.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]
let re2 = /c[^au]t/;
console.log(re2.exec("cattle")); // -> null
console.log(re2.exec("haircut")); // -> null
console.log(re2.exec("city")); // -> ["cit", index: 0, input: "city", groups: undefined]


// The appearance of the \d metacharacter means that any number can be matched at this position.

let re = /id\d+/;
console.log(re.exec("My ids.")); // -> null
console.log(re.exec("id60001")); // -> ["id60001", index: 0, input: "id60001", groups: undefined]



/*
The last important metacharacters are ^ (caret) and $ (dollar sign).

They indicate the beginning and end of a string.

Note that the caret used inside the square brackets, which denote a set of literals, has a completely different meaning.
 */
let re1 = /^(abc\s){3}$/;
console.log(re1.exec("abc abc abc ")); // -> ["abc abc abc ", "abc ", index: 0, input: "abc abc abc ", groups: undefined]
console.log(re1.exec("abc abc abc abc ")); // -> null
console.log(re1.exec("abc abcabc")); // -> null

