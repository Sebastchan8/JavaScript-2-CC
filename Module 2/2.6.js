// 2.6 Section 6 – Classes vs. constructors

/* -----------------------------------------------------------------
--------> 2.6.1 Classes vs. constructors
------------------------------------------------------------------*/

// Classes and constructors are two different ways to create objects.
// But with both we can achieve the same result.

// However, with classes we can have cleaner and more readable code
// depends on the developer's preference, team standards, or framework requirements

// Example: Constructor functions:
let Test = function(arg) { 
    this.arg = arg;
    console.log(this.arg);
}; 
    
Test.prototype.showSth = function() { 
    console.log("I'm prototyped!");
};
    
Test.showSth = function() { 
    console.log(`Hi, I'm static!`);
};  
let test = new Test("Hello");
test.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test instanceof Test);

// Example: Classes:

class TestClass { 
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    }; 
    
    showSth() { 
        console.log("I'm prototyped!");
    };
    
    static showSth() { 
        console.log(`Hi, I'm static!`);
    };  
}; 
let test = new TestClass("Hello");
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static!
console.log(test instanceof TestClass);
