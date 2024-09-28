// 1.4 Section 4 – Dot notation vs. bracket notation

contact.tel === contact["tel"];
contact.email.work === contact["email"]["work"]

/* -----------------------------------------------------------------
--------> 1.4.1 Multi-word keys
------------------------------------------------------------------*/

// use of multi-word keys.

let contact = {
    "first name": "Ronald"
};
contact["first name"] = "Tim"; // Correct 
contact.first name = "Tim";    // SyntaxError: Unexpected identifier
contact."first name" = "Tim";    // SyntaxError: Unexpected string


/* -----------------------------------------------------------------
--------> 1.4.2 Computed keys
------------------------------------------------------------------*/

// bracket notation is more often used when operating on computed keys.

let contact = {
    email_1: "RonaldSMurphy@freepost.org",
    email_2: "rsmurphy@briazz.com"
};
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(key);
    console.log(contact[key]);
}

// or more elegant way
for(i=1; i<=2; i++) {
    let key = "email_" + i;
    console.log(`${key}: ${contact[key]}`);
}







