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








