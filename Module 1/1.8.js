// 1.8 Section 8 – Property and object configuration (flags and more)

/* -----------------------------------------------------------------
--------> 1.8.1 Property configuration
------------------------------------------------------------------*/

let contact = {
    _age: 36,
    firstName : "David",
    lastName : "Taylor",
    get fullName() {return `${this.firstName} ${ this.lastName}`;},
    get age() { return this._age;},
    set age(a) { if( a > 0) this._age = a;}
};
let keys = Object.keys(contact);
console.log(keys); // _age,firstName,lastName,fullName,age


let desc = Object.getOwnPropertyDescriptor(contact, "firstName");
console.log(JSON.stringify(desc, null, 2));
// { "value": "David", "writable": true, "enumerable": true, "configurable": true }


// To default all properties are true

let contact = {};
Object.defineProperty(contact, "_age", {
    value: 36,
    writable: true,
    enumerable: false,
    configurable: true
});
Object.keys(contact); // with enumerable false it won't be displayed
console.log(contact._age);

// Now, the _age property is read only with writable false
Object.defineProperty(contact, "_age", {
    value: contact._age,
    writable: false,
    enumerable: false,
    configurable: true
});
contact._age = 100;
console.log(contact._age);

// The value in age can't be changed

// However, if we want to display all keys whether they are enumerable or not
let enumKeys = Object.keys(contact);
let allKeys = Object.getOwnPropertyNames(contact);
console.log(enumKeys); 
console.log(allKeys);



/* -----------------------------------------------------------------
--------> 1.8.2 Object configuration
------------------------------------------------------------------*/

// configuration can also be changed at the level of the whole object (not only its individual properties).

// Object.preventExtensions(obj) – after calling this method, we won't be able to add new properties to the object obj
// Object.seal(obj) – does not allow the adding, removing, or reconfiguring of the properties of the object obj
// Object.freeze(obj) – similar to Object.seal, but additionally makes it impossible to change the value of the property.

// Or check by methods: Object.isExtensible, Object.isSealed(obj) and Object.isFrozen(obj)


