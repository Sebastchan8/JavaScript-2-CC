// 1.3 Section 3 – Properties

/* -----------------------------------------------------------------
--------> 1.3.1 Types
------------------------------------------------------------------*/

// Take an example of an object with a funtion as property:
let test = {
    nr: 10, 
    b: false, 
    str: "uno dos tres", 
    arr: [10, 20, 30], 
    obj: {
        x: 10, 
        y: 20
    }, 
fn: function(arg) {console.log(arg)} 
};
test.fn(123);

/* -----------------------------------------------------------------
--------> 1.3.2 Nested properties
------------------------------------------------------------------*/
console.log(test.obj.x);
test.obj.y = 40;


/* -----------------------------------------------------------------
--------> 1.3.3 A function as a property type – a method
------------------------------------------------------------------*/

// A function that is the property of an object will be called a method.

let point = {
    x: 0,
    y: 0,
    moveHorizontally: function(distance) {
        this.x = this.x + distance;
    },
    moveVertically: function(distance) {
        this.y = this.y + distance;
    }
}
console.log(point.x);    // -> 0
point.moveHorizontally(30);
console.log(point.x);    // -> 30


/* -----------------------------------------------------------------
--------> 1.3.4 Adding a new property
------------------------------------------------------------------*/

// a non-existent property of an object is treated as undefined and not, for example, as null.

console.log(contact.notes);


/* -----------------------------------------------------------------
--------> 1.3.5 Modifying a property
------------------------------------------------------------------*/

// the value of a property can be changed by assigning a new value to it.
// doens't matter if the property is an other data type

let contact = {
    tel: "207-662-5412",
    email: "RonaldSMurphy@freepost.org"
};

// assigning a new value: an array
contact.email = ["RonaldSMurphy@freepost.org", "rsmurphy@briazz.com" ];

// assigning a new value: an object
contact.email = {
    private: "RonaldSMurphy@freepost.org",
    work: "rsmurphy@briazz.com" 
};
console.log(contact.email.work);


/* -----------------------------------------------------------------
--------> 1.3.5 1.3.6 Deleting a property
------------------------------------------------------------------*/

// to remove a property from an object, use the delete operator
delete contact.email.work;
console.log(contact.email.work);
console.log(contact.email.private);




