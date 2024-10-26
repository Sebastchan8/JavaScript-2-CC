// 4.4 Module 4 Completion – Closing thoughts and hands-on exercises

/* -----------------------------------------------------------------
-------->  4.4.1 Summary and Labs
------------------------------------------------------------------*/

// --------> Code Challenge #1
class MyIterable {
    constructor() {
        this.data = [];
    }

    get length() {
        return this.data.length;
    }

    has(n) {
        return this.data.includes(n);
    }

    add(n) {
        if(!this.has(n)) {
            this.data.push(n);
        }
    }

    del(n) {
        let index = this.data.indexOf(n);
        if(index !== -1) {
            this.data.splice(index, 1);
        }
    }

    [Symbol.iterator] = function* (){
        for(let index = 0; index<this.length; index++) {
            yield this.data[index];
        }
    }
}

let iterable = new MyIterable();
iterable.add(2);
iterable.add(5);
iterable.add(3);
iterable.add(2);
iterable.del(3);


console.log(iterable.length); // -> 2
console.log(iterable.has(2)); // -> true
console.log(iterable.has(3)); // -> false
console.log(...iterable); // -> 2 5




// --------> Code Challenge #2

let myDecorator = function(fn) {
    let cache = new Set();
    let included = function(...args) {
        let found = false;
        for(let e of cache) {
            let index = 0;
            console.log(`${e}`)
            found = true;
            for(let arg of args) {
                console.log(`   ${arg}`);
                if(arg !== e[index++]) {
                    found = false;
                    break;
                }
            }
            if(found) {
                break;
            }
        }
        return found;
    }
    return function(...args) {
        if(included(...args)) {
            console.log(`arguments already used: ${args}`);
        } else {
            cache.add(args);
        }
        fn(...args);

    }
}

let sum = function(...args) {
    let retVal = 0;
    for(let arg of args) {
        retVal += arg;
    }
    return retVal;
}
let dfn = myDecorator(sum);
dfn(2, 3, 4);
dfn(4, 5);
dfn(2, 3, 4); // -> arguments already used: 2,3,4
dfn(4, 5); // -> arguments already used: 4,5



// --------> Code Challenge #3
let getPromiseArray = function(args) {
    let promises = args.map(arg => new Promise(function(resolve, reject){
        if(Number.isInteger(arg) && arg > 0) {
            let rnd = Math.random();
            setTimeout(resolve(arg), arg);
        } else {
            reject(new Error(`${arg} is not a positive integer`))
        }
    }));
    return promises;
}

let promises1 = getPromiseArray([10, 30, 5, 20, 'a']);
Promise.all(promises1).then(a => console.log(`all: ${a}`))
.catch(e => console.log(`all: ${e.message}`)); // -> any: 10 
Promise.any(promises1).then(a => console.log(`any: ${a}`)).
catch(e => console.log(`any: ${e.message}`)); // -> all: a is not a positive integer



// --------> Code Challenge #4

let getWeather = function(location, info) {
    let cities;
    let url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20; 

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    if(!Array.isArray(location)) {
        cities = [location]
    } else {
        cities = location;
    }
    let infoQuery = '&info=';
    let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all'?infoQuery + info:''}`));
    Promise.all(promises)
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            for(let city of data) {
                console.log('');
                console.log(`CITY: ${city.city}`);
                for(let key in city.weather) {
                    if(key === 'wind') {
                        showWindInfo(city.weather);
                    } else {
                        showInfo(city.weather, key);
                    }
                }
            }
        })
        .catch(e => console.log(e.message));
}

let weather1 = getWeather('Berlin', 'wind');
// CITY: Berlin
// WIND: 16 m/s, 117 deg
// WARNING! Wind speed over 15 m/s

let weather2 = getWeather(['Oslo', 'Yakutsk'], 'all');
// CITY: Oslo
// WIND: 8 m/s, 170 deg
// CLOUDS: 0 %
// TEMP: 0 C
// PRECIPITATION: 0 %
//
// CITY: Yakutsk
// WIND: 0 m/s, 0 deg
// CLOUDS: 0 %
// TEMP: -40 C
// WARNING! Temperature below -20 degrees
// PRECIPITATION: 0 %


// node.js code:
var express = require("express");
var cors = require("cors");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

const weather = [
    {
        city: "Oslo",
        weather: {
            wind: {
                speed: 8,
                deg: 170
            },
            clouds: 0,
            temp: 0,
            precipitation: 0
        }
    },
    {
        city: "Edinburgh",
        weather: {
            wind: {
                speed: 4,
                deg: 85
            },
            clouds: 60,
            temp: 3,
            precipitation: 0
        }
    },
    {
        city: "Berlin",
        weather: {
            wind: {
                speed: 16,
                deg: 117
            },
            clouds: 70,
            temp: 2,
            precipitation: 30
        }
    },
    {
        city: "Amsterdam",
        weather: {
            wind: {
                speed: 7,
                deg: 160
            },
            clouds: 80,
            temp: 5,
            precipitation: 10
        }
    },
    {
        city: "Yakutsk",
        weather: {
            wind: {
                speed: 0,
                deg: 0
            },
            clouds: 0,
            temp: -40,
            precipitation: 0
        }
    }
];

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

app.get("/weather", async (req, res, next) => {
    let ret = weather.find(e => e.city === req.query.city);
    if(ret) {
        if(!req.query.info || !Object.keys(ret.weather).includes(req.query.info)) {
            res.json(ret);
        } else {
            res.json({
                city: ret.city,
                weather: {
                    [req.query.info]: ret.weather[req.query.info]
                }
            });
        }
    } else {
        res.json({
            city: req.query.city
        });        
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});



// ---------- Code Challenge #5
let getWeather = async function(location, info) {
    let cities;
    let url = "http://localhost:3000/weather";
    const maxWindSpeed = 15;
    const minTemp = -20; 

    let showWindInfo = function(weather){
        console.log(`WIND: ${weather.wind.speed} m/s, ${weather.wind.deg} deg`);
        if(weather.wind.speed > maxWindSpeed) {
            console.log(`WARNING! Wind speed over ${maxWindSpeed} m/s`);
        }
    };

    let showInfo = function(weather, type){
        console.log(`${type.toUpperCase()}: ${weather[type]} ${type === 'temp' ? 'C' : '%'}`);
        if(type === 'temp' && Number(weather.temp) < minTemp) {
            console.log(`WARNING! Temperature below ${minTemp} degrees`);
        }
    };

    if(!Array.isArray(location)) {
        cities = [location]
    } else {
        cities = location;
    }
    let infoQuery = '&info=';
    let promises = cities.map(city => fetch(`${url}?city=${city}${info && info !== 'all'?infoQuery + info:''}`));
    try {
        let responses = await Promise.all(promises);
        let data = await Promise.all(responses.map(response => response.json()));
        for(let city of data) {
            console.log('');
            console.log(`CITY: ${city.city}`);
            if(city.weather) {
                for(let key in city.weather) {
                    if(key === 'wind') {
                        showWindInfo(city.weather);
                    } else {
                        showInfo(city.weather, key);
                    }
                }
            } else {
                console.log('weather unknown');
            }
        }
    } catch(e) {
        console.log(e.message);
    }
}
