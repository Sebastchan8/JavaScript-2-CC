// 3.1 Section 1 – Simple Data Types

/* -----------------------------------------------------------------
--------> 3.1.1 Simple data types
------------------------------------------------------------------*/
/*
Most commonly, data types are divided into two categories: simple (or primitive) and composite (or complex).
Simple types contain a single value, which will be interpreted as something like a number or a text.
Composite types are usually constructed from simple types, and most often are all kinds of collections (ordered or not).
*/




/* -----------------------------------------------------------------
--------> 3.1.2 Primitives and autoboxing
------------------------------------------------------------------*/

/*
Primitive data types are the simplest, and only contain a single value and aren't objects.
 */

// We could treat them as objects:
let strObj = new String("Do bats eat cats?");
console.log(typeof(strObj)); //-> object
console.log(strObj.length); // -> 17
let words = strObj.split(" ");
console.log(words[0]); // -> Do

// But there's a problem, objects occupy incomparably more memory space than primitives.
// So we could use autoboxing to convert them to primitives:
let str = "Do bats eat cats?";
console.log(typeof(str)); //-> string
console.log(str.length); // -> 17
let words = str.split(" ");
console.log(words[0]); // -> Do

/*
When using dot notation, we indicate that we will want to use some method or property 
of a primitive (which does not have any property nor any property of its methods) and 
the engine converts it in flight to the corresponding object.

Such an operation obviously has an impact on the engine's performance, but the memory 
we save in this way is worth it. This behavior of the JavaScript engine is called autoboxing.
 */





/* -----------------------------------------------------------------
--------> 3.1.3 Boolean
------------------------------------------------------------------*/

// Example using Boolean Class:
let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : true

// Boolean autoboxing
let bool1 = false;
let str1 = bool1.toString();
let bool2 = bool1.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${ bool2}`); // -> bool2 : boolean : false


/*
In JavaScript, the following values are treated as false: false (which probably is not a surprise), 
null, undefined, NaN (not a number), "". (empty string), 0 (the number zero), -0 (the number negative zero), 
0n (BigInt zero), -0n (negative BigInt zero).

All other values will be treated as true, hence the results obtained in the example.
*/
let bool1 = Boolean(false);
let bool2 = Boolean(1);
let bool3 = Boolean("");
console.log(`bool1 : ${typeof bool1} : ${bool1}`); // -> bool1 : boolean : false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> bool2 : boolean : true
console.log(`bool3 : ${typeof bool3} : ${bool3}`); // -> bool3 : boolean : false



/* -----------------------------------------------------------------
--------> 3.1.4 Number
------------------------------------------------------------------*/

// For integers, by default, the smallest value is -(253 – 1) and the largest (253 – 1).

// BigInt e.g. implementing a cryptographic algorithm operating

// preceding the numerical value with 0x, 0o or 0b, we can tell the JavaScript engine 
// to treat the number as hexadecimal, octal, or binary.

// It is also possible to write a number in exponential form, so for example, 
// instead of 9000 we can write 9e3, and instead of 0.00123 we can write 123e-5.

let a = 10; // decimal - default
let b = 0x10;   // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1));    // -> 0.9
console.log(x / 0);      // -> Infinity
console.log(x / "abc");  // -> NaN





/* -----------------------------------------------------------------
--------> 3.1.5 The Number constructors
------------------------------------------------------------------*/

// We could instance objects with Number class but is not efficient because the previous explanation
// We could use Number methods, the toString method accepts an argument its the format
// 16: hexadecimal, 10: decimal, 8: octal, 2: binary; if not specified, the default is 10 decimal
let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr1 : string : b



/* -----------------------------------------------------------------
--------> 3.1.6 Converting numbers into different string formats
------------------------------------------------------------------*/
// toExponetial: a string representing a number exponential form
let a = 12345;
console.log(a.toExponential());   // -> 1.2345e+4
console.log(a.toExponential(1));  // -> 1.2e+4


// toFixed: string representing a number rounded to digits decimal places.

let nr1 = 10.55;
console.log(nr1.toFixed(1)); // -> 10.6
console.log(nr1.toFixed(0)); // -> 11
console.log(nr1.toFixed(3)); // -> 10.550
let nr2 = 2.55;
console.log(nr2.toFixed(1)); // -> 2.5
console.log(nr2.toFixed(20)); // -> 2.54999999999999982236
console.log(((nr2 * 10).toFixed(0) / 10)); // -> 2.6


// toLocalString: string representing a number in the current locale
let nr = 123456.789;
console.log(nr.toLocaleString("en-GB")); //-> 123,456.789
console.log(nr.toLocaleString("fr-FR")); //-> 123·456,789
console.log(nr.toLocaleString("de-DE")); //-> 123.456,789
console.log(nr.toLocaleString("ar-EG")); //-> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR"
})); //-> 123.456,79 €
console.log(nr.toLocaleString()); // Depende de la configuración local predeterminada




/* -----------------------------------------------------------------
--------> 3.1.7 Static properties and methods of the Number constructor
------------------------------------------------------------------*/

Console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991


let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; i< numbers.length; i++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}


// is 2e+100 Integer: true
// is 2e+100 safe Integer: false
// is 2e+100 finite number: true
// is 200000 Integer: true
// is 200000 safe Integer: true
// is 200000 finite number: true
// is 1.5 Integer: false
// is 1.5 safe Integer: false
// is 1.5 finite number: true
// is Infinity Integer: false
// is Infinity safe Integer: false
// is Infinity finite number: false


console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN




/* -----------------------------------------------------------------
--------> 3.1.8 Static properties and methods of the Number constructor
------------------------------------------------------------------*/

// A lotof string methods



/* -----------------------------------------------------------------
-------->  3.1.9 What we already know about strings
------------------------------------------------------------------*/

// How to declare a string
let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string


// Examples:
let warn2 = "Confirm ticket reservation for \"Alien 10\" movie.";
let warn1 = 'Confirm ticket reservation for "Alien 10" movie.';
let warn2 = "Confirm ticket reservation for 'Alien 10' movie.";
let warn3 = `warning: "Confirm ticket reservation for 'Alien 10' movie."`;



/* -----------------------------------------------------------------
-------->   3.1.10 The String constructor
------------------------------------------------------------------*/

// we can define an a string and with the autoboxing we can use the methods of the String constructor
let name = "Bob";
console.log(name.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0



/* -----------------------------------------------------------------
-------->  3.1.11 String as an array of characters
------------------------------------------------------------------*/

// a string is an array of characters
let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A




/* -----------------------------------------------------------------
-------->   3.1.12 Case conversion &&  3.1.13 Splitting the string
------------------------------------------------------------------*/

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127




/* -----------------------------------------------------------------
-------->    3.1.14 Replacing substrings
------------------------------------------------------------------*/

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words.length); // -> 30


/* -----------------------------------------------------------------
-------->    Incomplete 3.1.15 Searching for substrings
------------------------------------------------------------------*/

let text = "One, two, three, one, two, three.";
console.log(text.includes("two")); // -> true
console.log(text.includes("four")); // -> false
console.log(text.indexOf("two")); // -> 5
console.log(text.indexOf("four")); // -> -1
console.log(text.lastIndexOf("two")); // -> 22



/* -----------------------------------------------------------------
-------->     3.1.16 Copying substrings
------------------------------------------------------------------*/

let text = "One, two, three, one, two, three.";
console.log(text.substr(0,8)); // -> One, two
console.log(text.substr(10)); // -> three, one, two, three.
console.log(text.substr(-6)); // -> three.
console.log(text.substr(-6, 2)); // -> th


console.log(text.substring(5, 8)); // -> two
console.log(text.substring(5)); // -> two, three, one, two, three.
console.log(text.substring(-11, 8)); // -> One, two


console.log(text.slice(0,3)); // -> One
console.log(text.slice(5)); // -> two, three, one, two, three.
console.log(text.slice(-11)); // -> two, three.
console.log(text.slice(-11, -8)); // -> two



/* -----------------------------------------------------------------
-------->      3.1.17 Padding
------------------------------------------------------------------*/

let numbers = [100, 5, 66];
for(let i=0; i< numbers.length; i++) {
    console.log(String(numbers[i]).padStart(10, '0'));
    console.log(String(numbers[i]).padStart(10, 'abc'));
    console.log(String(numbers[i]).padStart(10));
}



// 0000000100
// abcabca100
// 100
// 0000000005
// abcabcabc5
// 5
// 0000000066
// abcabcab66
// 66


/* -----------------------------------------------------------------
-------->      3.1.18 Trimming
------------------------------------------------------------------*/

let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"


/* -----------------------------------------------------------------
-------->      3.1.19 Comparing strings
------------------------------------------------------------------*/

console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false


console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true


console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true


console.log("Ørnes" < "Sundsfjord"); // -> false


console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1


/* -----------------------------------------------------------------
-------->      3.1.20 Date
------------------------------------------------------------------*/

// In JavaScript, January 1, 1970 00:00:00:00 UTC is used as the zero-point, as in many computer systems.



/* -----------------------------------------------------------------
-------->      3.1.20 Date
------------------------------------------------------------------*/
// UTC (Universal Coordinated Time), referring to the GMT+0 time zone.



/* -----------------------------------------------------------------
-------->      3.1.21 Time zones and other tricks
------------------------------------------------------------------*/

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT



console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT



console.log(date2.getTimezoneOffset()); // -> -60
console.log(date2.toLocaleString()); // -> 01/01/1970, 11:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT



date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000




/* -----------------------------------------------------------------
-------->      3.1.22 Current time
------------------------------------------------------------------*/

let nowObj = new Date();
console.log(nowObj.toLocaleString());


let now = Date.now(); // timestamp
let nowObj = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj} : ${nowObj}`);



/* -----------------------------------------------------------------
-------->       3.1.23 Time specification with individual components
------------------------------------------------------------------*/

let date1 = new Date(2020, 6);
let date2 = new Date(2020, 6, 8);
let date3 = new Date(2020, 6, 8, 10);
let date4 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date1.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date2.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date3.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date4.toLocaleString()); // -> 08/07/2020, 10:20:45


/* -----------------------------------------------------------------
-------->       3.1.24 Time specification with date string
------------------------------------------------------------------*/

let date1 = new Date("2020-07-08");
let date2 = new Date("2020-07-08T10:20:00");
let date3 = new Date("2020-07-08T10:20:00Z");


let date1 = new Date("Mon Mar 02 2020 10:00:00");
let date2 = new Date("Mon March 2 2020 10:00");
let date3 = new Date("Mar 02 2020 10:00:00");
let date4 = new Date("2 March 2020, 10:");
let date5 = new Date("3.2.2020");
let date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");



/* -----------------------------------------------------------------
-------->       3.1.25 Practical use of a timestamp
------------------------------------------------------------------*/

let date1 = new Date(2020, 6, 8, 10, 20, 0);
let date2 = new Date(2020, 6, 9, 10, 20, 0);
console.log(date2.getTime() - date1.getTime()); // -> 86400000 -> 1000 x 60 x 60 x 24


let startTime = Date.now();
for(i=0; i<10000000; i++){}
let endTime = Date.now();
console.log(endTime - startTime);


/* -----------------------------------------------------------------
-------->        3.1.26 Operating on individual date and time components
------------------------------------------------------------------*/

let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12


let date = new Date("2020-07-08T10:20:00");
console.log(date.toLocaleDateString()); // -> 08/07/2020
console.log(date.toLocaleTimeString()); // -> 10:20:00





