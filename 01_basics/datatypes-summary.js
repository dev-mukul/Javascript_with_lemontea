// # Primitive 

//  7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// Js is 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId);


// const bigNumber = 34675865369379n



// Reference (Non Primitive)

// Array, Obejcts, Functions

const heros = ["shaktiman", "doga"]
//  let myObj {
//     name: "Mukul"
//     age: 22

// }

const myFunction = function(){
    // console.log("Hello wolrd");

}

// console.log(typeof myFunction)






//  **************** Memory ****************

// stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Mukulchaudhary.com"

let anothername = myYoutubename
anothername = "coffeaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi: "user@aby"
}

let userTwo = userOne

userTwo.email = "mukuldx22@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

