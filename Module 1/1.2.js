// 1.2 Section 2 – Literals

/* -----------------------------------------------------------------
--------> 1.2.1 Basic way to create objects
------------------------------------------------------------------*/

// literal notation or initializer notation

let contact = {};

contact.tel = "207-662-5412";
console.log(contact);
console.log(contact.tel);

// the properties should be a string, if its a only word theres not problem
// but if the key is two-words composed it should be enclosed in quotes ""

// THIS EXAMPLE IS WRONG:

let contact = {
    //first name: "Ronald"
};

// it should be:
let contact = {
    "first name": "Ronald"
};

// but this is not the best idea, its better to use CAMEL CASE
// first name -> firstName

// mindblowing
console.log(typeof console);    // -> object
console.log(typeof console.log);    // -> function



/* -----------------------------------------------------------------
--------> 1.2.2 Deleting objects
------------------------------------------------------------------*/

// Javascript has a Garbage Collector
// It will take care of the objects that are not in use
// and will remove them from memory
// JS doesn't even provide for the possibility to delete objects