// let myName = "mukul  "
// let myChannel = "coffee    "

// console.log(myName.trueLength);


// <----- Prototype ------> 

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mukul = function(){
    console.log(`mukul is present in all objects`);
}

Array.prototype.heyMukul = function(){
    console.log(`Mukul says hello`);
}

// heroPower.mukul()
// myHeros.mukul()
// myHeros.heyMukul()
// heroPower.heyMukul()   -> hero ke pass power nhi hai 


// inheritance

const User = {
    name: "chai",
    email: "coffee@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    _proto_: TeachingSupport
}

Teacher._proto_ = User


// morder syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "CoffeeAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"mukul".trueLength()
"iceTea".trueLength()



