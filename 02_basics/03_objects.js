// singleton


Object.create  //constructor ki trh  <- yeh hote hai singleton


// object 


const mySum = Symbol("key1")
 

const JsUser = {
    name: "Mukul",
    age: 24,
    location: "Delhi",
    email: "devmukku99@gmail.com",
    isLoggedIn: false,
    localLoginDays: ["Monday", "Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser.location);


JsUser.email = "mukkusd29@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "chaudhary@gmail.com"
// console.log(JsUser);

JsUser.greeting = function (){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function (){
    console.log(`Hello JS User,  ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());