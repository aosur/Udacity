const greet = (name) => `Hello ${name}`;
//console.log(greet('Alan'))

const greet2 = function (name) {
    return `Goodbye ${name}`;
}

//console.log(greet2('Alan'))

const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
    square => square * square
);

//console.log(...squares);

/////////////////////////////////
// Default Function Parameters //
/////////////////////////////////

// Look at this:
function greetx(name, greetings) {
    let namex = typeof name !== 'undefined' ? name : 'Student';
    let greetingsx = typeof greetings !== 'undefined' ? greetings : 'Welcome';
    return `${greetingsx} ${namex}`;
}

/** with Default function parameters*/
function greetx2(name = 'Student', greetings = 'Welcome') {
    return `${greetings} ${name}`;
}

///////////////////////////////////////
// Defaults and destructuring arrays //
///////////////////////////////////////
function createGrid([width = 5, height = 5] = []) {
    return `Generates a ${width} x ${height} grid`;
}

/* createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid */

function buyShirt({ color = "blue", quality = "standard" } = {}) {
    return `Shirt ${color} ${quality}`;
}

/* buyShirt({})
buyShirt({color:'yellow'})
buyShirt({color:'green', quality:'top'})
buyShirt({quality:'top'})
buyShirt() */

function buildHouse({ floors = 1, color = 'red', walls = 'brick' } = {}) {
    const floorNumber = floors === 1 ? 'floor' : 'floors';
    return `Your house has ${floors} ${floorNumber} with ${color} ${walls} walls.`;
}

/* buildHouse({})
buildHouse({floors: 2})
buildHouse({floors: 5, color: 'green'})
buildHouse({floors: 5, color: 'green', walls: 'no brick'})
buildHouse({walls: 'no brick'})
buildHouse()
 */

////////////////////////
// ES5 "Class" Recap //
//////////////////////

/* function Plane(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
}

Plane.prototype.startEngines = function() {
    console.log('starting engines...');
    this.enginesActive = true;
};

Plane.prototype.getStartEngines = function() {
    console.log('getting engines...');
    console.log(this.enginesActive);
};
 */
////////////////////////
// ES6 "Classes" //
//////////////////////
class Plane {
    constructor(numEngines) {
        this.numEngines = numEngines;
        this.enginesActive = false;
    }

    startEngines() {
        console.log('starting engines...');
        this.enginesActive = true;
    }

    getStartEngines() {
        console.log('getting engines...');
        console.log(this.enginesActive);
    }

}

/* let richardsPlane = new Plane(1);
richardsPlane.getStartEngines();
richardsPlane.startEngines();
richardsPlane.getStartEngines();

let jamesPlane = new Plane(4);
jamesPlane.getStartEngines();
jamesPlane.startEngines();
jamesPlane.getStartEngines();

 */

/* Ex 
    Create a Bicycle subclass that extends the Vehicle class. 
    The Bicycle subclass should override Vehicle's constructor
     function by changing the default values for wheels from 
     4 to 2 and horn from 'beep beep' to 'honk honk'.*/

class Vehicle {
    constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
        this.color = color;
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        console.log(this.horn);
    }
}

class Bicycle extends Vehicle {
    constructor(color, wheels = 2, horn = 'honk honk') {
        super(color, wheels, horn);
    }
}

/* tests*/
/* const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk */

////////////////////////
// Symbols //
//////////////////////

const sym1 = Symbol('apple');

/* const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
}; */

const bowl = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };

//console.log(bowl)

/////////////////////////////////////
// Iteration & Iterable Protocols //
///////////////////////////////////

const vocales = ['a', 'e', 'i', 'o', 'u'];
const arrayIterator = vocales[Symbol.iterator]();

/* console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next())
console.log(arrayIterator.next()) */

/////////////////////////////////////
// Sets //
///////////////////////////////////

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

/* console.log(games);
console.log(games.size) */

/////////////////////////////////////
// Iterators //
///////////////////////////////////

// values() regresa un SetIterator
const iterator = games.values()
//console.log(iterator)

// next() regresa un objeto con dos propiedades: value y done
/* console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) */

/* Create a variable with the name myFavoriteFlavors and give it the value of an 
empty Set object. Then use the .add() method to add the following strings to it:

"chocolate chip"
"cookies and cream"
"strawberry"
"vanilla"

Then use the .delete() method to remove "strawberry" from the set. */

const myFavoriteFlavors = new Set();
console.log(myFavoriteFlavors) 
myFavoriteFlavors.add("chocolate chip");
myFavoriteFlavors.add("cookies and cream");
myFavoriteFlavors.add("strawberry");
myFavoriteFlavors.add("vanilla");
console.log(myFavoriteFlavors)
myFavoriteFlavors.delete("strawberry")
console.log(myFavoriteFlavors)