// 1.5 Section 5 – Property existence test and property enumeration

/* -----------------------------------------------------------------
--------> 1.5.1 Property existence test and property enumeration
------------------------------------------------------------------*/

// for verifying a property
if(contact.notes) { // if different then undefined
    console.log(contact.notes);
}

// or the negation
if(!contact.notes) { // if undefined (check !)
    contact.notes = "something really important";
}

// NOTE: if a property doesn't exist, it will be treated as undefined
console.log(contact.notes); // -> undefined

// But if we're trying to refer a nested object it will be exception
console.log(contact.email.private); // exception!


// The easiest way to protect yourself is to either use the try ... catch block, or simply check before calling if the object and required field exist:
if(contact && contact.email) {
    console.log(contact.email.private);
}

// or in a simpler form:
contact && contact.email && console.log(contact.email.private);


/* -----------------------------------------------------------------
--------> 1.5.2 Existence test using "in"
------------------------------------------------------------------*/

/*
If the field exists, it’s returned true (even if the field has no set value).
Otherwise, the value false is returned.
 */

if("notes" in contact) { // if true
    console.log(contact.notes);
}


/* -----------------------------------------------------------------
--------> 1.5.3 Enumeration "for ... in"
------------------------------------------------------------------*/

// display property names of the contact object
let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};
for(x in contact) {
    // print property name
    console.log(x);
}


// display de values of the contact object
for(x in contact) {
    // print property value 
    console.log(contact[x]);
}

// display the name, type, and value of all the properties
for(x in contact) {
    // print property name, type and value
    console.log(`${x} : ${typeof contact[x]} : ${contact[x]}`);
}


/* -----------------------------------------------------------------
--------> 1.5.4 The Object.keys method
------------------------------------------------------------------*/

// returns an array of property names
// This array will contain all the keys (property names) of the contact object.

let keys = Object.keys(contact); // ["tel", "email"]

