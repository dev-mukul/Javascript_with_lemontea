
function sayMyName(){
    // console.log("M");
    // console.log("U");
    // console.log("K");
    // console.log("U");
    // console.log("L");

}

// sayMyName // refrence
// sayMyName() //execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {

    // let result = number1 + number2
    // return result

    return number1 + number2
    
}

 const result = addTwoNumbers(3, 5)

//  console.log("Result : ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        // console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

//  console.log(loginUserMessage("mukul"))

// rest and spread are is same 

function calculateCartPrice(val1, val2, ...num1){

    return num1

}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "mukul",
    prices: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price:399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000 ]));