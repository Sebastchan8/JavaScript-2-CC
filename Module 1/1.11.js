// 1.11 Module 1 Completion – Closing thoughts and hands-on exercises

/* -----------------------------------------------------------------
--------> 1.11.1 Summary and Labs
------------------------------------------------------------------*/

// --------> Code Challenge #1

// My Solution
let Paint = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

let myPaintings = [
    new Paint("Mona Lisa", "Leonardo da Vinci", 1503),
    new Paint("The Last Supper", "Leonardo da Vinci", 1495),
    new Paint("Starry Night", "Vincent van Gogh", 1889),
    new Paint("The Scream", "Edvard Munch", 1893),
    new Paint("Guernica", "Pablo Picasso", 1937),
    new Paint("The Kiss", "Gustav Klimt", 1907),
    new Paint("Girl With a Pearl Earring", "Johannes Vermeer", 1665),
    new Paint("The Birth of Venus", "Sandro Botticelli", 1485),
    new Paint("Las Meninas", "Diego Velázquez", 1656),
    new Paint("The Creation of Adam", "Michelangelo", 1512)
];

for (let i = 0; i < myPaintings.length; i++) {
    console.log(`${i + 1}. Title: ${myPaintings[i].title}, Artist: ${myPaintings[i].artist}, Date: ${myPaintings[i].date}`);
}

// Cisco Solution
let images = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
];
images.forEach(image => {console.log(`${image.title}
(${image.artist}, ${image.date})`)});


// --------> Code Challenge #2

// My Solution: Does not work
let Image = function(title, artist, date){
    this.title = title;
    this.artist = artist;
    this.date = date;
    
    getImage: function(){
        return {title, artist, date};
    }
};

let images1 = images.copy();

let images2 = images1.getImage().copy();

images2.forEach(image => {
   console.log(${image.title} ${image.artist} ${image.date}) 
});

// Cisco Solution
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}

let images1 = [];
let images2 = [];

images.forEach(image => images1.push(new Image(image.title, image.artist, image.date)));
images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));
images2.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)});


// --------> Code Challenge #3

// My Solution
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

let Paintings = function(){
    this.images = [];
    
    this.contains = function(imageTitle){
        for(let image of this.images){
            if(image.title === imageTitle){
                return true;
            }
        }
        return false;
    }
    
    this.add = function(title, artist, date){
        if(!this.contains(title)){
            this.images.push(new Image(title, artist, date));
        }
    }
    
    this.show = function(){
        this.images.forEach(image => {
           console.log(`${image.title} (${image.artist}) -> ${image.date}`);
        });
    }
    
    this.clear = function(){
        this.images = [];
    }
};

let images = new Paintings();

console.log("---> Adding")
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
console.log("---> Showing")
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
console.log("---> Clearing")
images.clear();
console.log("---> Showing again")
images.show(); // Empty


// Cisco Solution
let images = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for(image of this.list) {
            if(image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    }
}

// --------> Code Challenge #4

// My Solution
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
};

let Paintings = function(){
    this.images = [];
    
    this.contains = function(imageTitle){
        for(let image of this.images){
            if(image.title === imageTitle){
                return true;
            }
        }
        return false;
    }
    
    this.add = function(title, artist, date){
        if(!this.contains(title)){
            this.images.push(new Image(title, artist, date));
        }
    }
    
    this.show = function(){
        this.images.forEach(image => {
           image.show();
        });
    }
    
    this.clear = function(){
        this.images = [];
    }
    
    this.edit = function(title, artist, date){
        for(let image of this.images){
            if(image.title === title){
                image.title = title;
                image.artist = artist;
                image.date = date;
                break;
            }
        }
    }
    
    this.delete = function(title){
        for(i = 0; i < this.images.length; i++){
            if(this.images[i].title === title){
                this.images.splice(i, 1);
            }
        }
    }
};

Image.prototype.show = function() {
    console.log(`-> ${this.title} (${this.artist}, ${this.date})`);
};

let images = new Paintings();

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)


// Cisco Solution
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

images.show = function(title) {
    for(image of this.list) {
        image.show();
    }
}

images.edit = function(title, artist, date) {
    for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}

// --------> Code Challenge #5

// My Solution - Does not work
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}};
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}};
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}};
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}};
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}};

let deepComp = function(a, b){
    for (let property in a){
        if(typeof a[property] === "object"){
            return deepComp(a[property], b[property])
        }
        return a[property] == b[property]
    }
}


console.log(deepComp(a,b)); // -> true
console.log(deepComp(a,c)); // -> false
console.log(deepComp(a,d)); // -> false
console.log(deepComp(a,e)); // -> false
console.log(deepComp(a,f)); // -> false

// Cisco Solution
let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if(retVal) {
        for(property in src) {
            if(typeof(src[property]) === typeof(trg[property])) { 
                retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property]
            } else {
                retVal =false;
            }
            if(!retVal) break;
        }
    }
    return retVal;
}