

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// primitive dataTypes are call by value means they copy the value and assign it to another variable, means you change variable that can not effect on oroginal value 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// in non primitive datatypes are call by Reference that means if you assign the variable to another variable so it pass the memory location reference that means original value effected  

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3