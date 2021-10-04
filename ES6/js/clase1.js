////////////////////////////
// Scope
////////////////////////////
function getClothing(isCold) {
    if (isCold) {
        let freezing = 'Grab a jacket!';
    } else {
        let hot = 'It’s a shorts kind of day.';
        console.log(freezing);
    }
}

function myLoop() {
    for (let a = 0; a < 10; a++) {
        const b = a + 1;
        console.log(b);
    }
}

////////////////////////////
// Literal templates
////////////////////////////
const student = {
    name: 'Richard Kalehoff',
    guardian: 'Mr. Kalehoff'
};

const teacher = {
    name: 'Mrs. Wilson',
    room: 'N231'
}

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up yor report card `;

////////////////////////////
// Destructuring Arrays
////////////////////////////
let positions = ['Gabrielle', 'Jarrod', 'Kate', 'Fernando', 'Mike', 'Walter'];
let [first, ,third] = positions;

/*old way

const first = positions[0];
const third = positions[2]

*/

//console.log(first, third);

////////////////////////////
// Destructuring Objects
////////////////////////////
const gemstone = {
    type: 'quartz',
    color: 'rose',
    carat: 21.29
};

const { type, color, carat } = gemstone;

/*old way

const type= gemstone.type;
const color = gemstone.color;
const carat = gemstone.carat;

*/

//console.log(type, color, carat);

////////////////////////////
// Object Literal Shorthand
////////////////////////////
let mineral = 'quartz';
let colore = 'rose';
let price = 21.29;

// Nota como se omitió la palabra function pada declarar el método calculoTotal
const piedras = {mineral, colore, price, calculaTotal() { return this.price * 1.18}};

//console.log(piedras.calculaTotal());

////////////////////////////
// For...of Loop
////////////////////////////

/*Write a for...of loop that:

loops through each day in the days array
capitalizes the first letter of the day
and prints the day out to the console */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/* for(let day of days) {
    day = day.slice(0,1).toUpperCase() + day.slice(1, day.length);
    console.log(day);
} */

////////////////////////////
// Spread operator
////////////////////////////

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 2]);
// console.log(...primes);

////////////////////////////
// concat operator
////////////////////////////

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
//const produce = fruits.concat(vegetables);

// using spread operator
const produce = [...fruits, ...vegetables];
//console.log(produce);

////////////////////////////
// Rest Parameter
////////////////////////////

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
//console.log(total, subtotal, tax, items);

// rest using
function sum(...nums) {
    let total = 0;
    for(num of nums) 
        total += num;
    return total;
}

/*Ex
Use the rest parameter to create an average() function
 that calculates the average of an unlimited amount of numbers. */

 function average(...nums) {
    let total = 0;
    for(const num of nums) {
        total += num;
    }
    return nums.length ? total / nums.length : total;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
