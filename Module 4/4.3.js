// 4.3 Section 3 – Asynchronous programming

/* -----------------------------------------------------------------
-------->  4.3.1 Asynchronous programming
------------------------------------------------------------------*/

var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
app.get("/", (req, res, next) => {
  res.send(' \
   \
   \
 \
Sample Site \
   \
   \
   \
  ');
});
app.get("/json", async (req, res, next) => {
  const time = Math.floor(Math.random() * 1000) + 1000;
  let square = req.query.value || 0;
  square *= square;
  await sleep(time);
  res.json({
'time': time,
'square': square
  });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});



/* -----------------------------------------------------------------
-------->  4.3.2 Why do we need asynchronous techniques?
------------------------------------------------------------------*/

// Synchronous Execution
// each task is completed before the next one begins.
let showInfo = result => {
    let info = "the arguments are equal";
    if (result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}

let compareSync = (a, b, fn) => {
    let r = a - b;
    fn(r);
}

console.log("start");
compareSync(10, 5, showInfo);
console.log("end");

// start
// the first argument is greater
// end


// Asynchronous Execution
// In asynchronous programming, certain tasks can start before others finish.

let showInfo = result => {
    let info = "the arguments are equal";
    if (result > 0) {
        info = "the first argument is greater";
    } else if (result < 0) {
        info = "the second argument is greater";
    }
    console.log(info);
}

let compareAsync = (a, b, fn) => {
    let r = a - b;
    setTimeout(fn, 1000, r); // Delay the function call by 1000 ms
};

console.log("start");
compareAsync(10, 5, showInfo);
console.log("end");

// start
// end
// the first argument is greater


/**
 * JavaScript offers several tools for working asynchronously, such as:

    Callbacks (like in this example).
    Promises, which make managing asynchronous code cleaner.
    async/await syntax, which makes asynchronous code appear synchronous, improving readability.

 */




/* -----------------------------------------------------------------
-------->  4.3.3 Callback functions
------------------------------------------------------------------*/

/**
 * 
    open – a method used for initializing the XMLHttpRequest object;
    send – a method used for sending the request; by default, it is asynchronous (i.e. it ends immediately after sending the request to the server without waiting for the response)
    addEventListener – a method used for adding the event handler related to the request; as parameters, we give the event type (e.g. "load"). The event is generated when the server sends a response to the request and the function to be called as a reaction to the event;
    onload – a property to which we can assign the function that will be called in response to the "load" event; this property can be used instead of calling addEventListener ("load", ...)
    status – a property which contains the response status according to the HTTP protocol (e.g. the value 200 means that the response is correct, and 404 means that the server cannot find the file)
    responseText – a property which contains the server response (data) in the form of text; both responseText and status can be read only after we receive the response from the server, which we will be informed of via the "load" event.

 */

    const value = 200;
    let request = new XMLHttpRequest();
    request.addEventListener("load", () => {
        if (request.status === 200) {
            const resp = JSON.parse(request.responseText);
            console.log(`server: ${value} * ${value} = ${resp.square} (${resp.time}ms)`);
        }
    });
    request.open('GET', `http://localhost:3000/json?value=${value}`);
    request.send();
    console.log(`browser: ${value} * ${value} = ${value * value}`);
    




/* -----------------------------------------------------------------
-------->  4.3.4 Promises
------------------------------------------------------------------*/

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/**
 * In asynchronous programming, errors can occur at any point due to delays or issues with external resources. For async functions, JavaScript allows handling errors using try...catch blocks, providing a way to catch exceptions in a readable way, similar to synchronous code.

If an error occurs within an await operation, it will be caught by the catch block in the surrounding try...catch. This is especially useful for handling network requests or other asynchronous operations that may fail.
 */

let p = new Promise((resolve, reject) => {
    resolve(5);
});


let p = new Promise((resolve, reject) => {
    reject(new Error('!!!'));
});


let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});


// promise example
let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4);
    if (value === 0) {
        reject(new Error('!!!'));
    } else {
        setTimeout(() => {
            resolve(value);
        }, value * 1000);
    }
});
let handleResolved = function (value) {
    console.log(value);
}
let handleRejected = function (error) {
    console.log(`Error: ${error.message}`);
}
p.then(handleResolved, handleRejected);
console.log('end');


// Example
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


/**
 * If fetch or response.json() fails, the error will be caught by catch, and a clear error message will be logged.
This makes debugging and error handling in asynchronous code much easier to manage and read.
 */




/* -----------------------------------------------------------------
-------->  4.3.5 Combining Multiple Promises
------------------------------------------------------------------*/

/**
 * Promise.all(): This method takes an array of promises and returns a single promise. It resolves when all promises in the array are fulfilled. If any promise is rejected, Promise.all immediately rejects with that error, skipping any further results.

Promise.race(): Similar to Promise.all(), but instead of waiting for all promises to resolve, it fulfills or rejects as soon as any of the promises in the array settle (either resolved or rejected).
 */


const p1 = fetch('https://api.example.com/data1');
const p2 = fetch('https://api.example.com/data2');

Promise.all([p1, p2])
    .then(results => Promise.all(results.map(r => r.json())))
    .then(data => console.log(data)) // Logs an array of responses
    .catch(error => console.error('Error with one of the promises:', error));


/**
 * Promise.all is used to handle multiple fetch requests.
If all requests succeed, their responses are processed as JSON and logged as an array.
If any request fails, catch handles the error, logging a message.
 */

/**
 * Using Promise.all ensures you get all results at once but requires every promise to succeed, which is ideal for tasks where you need complete data before proceeding.
 */