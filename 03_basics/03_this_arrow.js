const user = {
    username : "Mukul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function coffee(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// coffee()


// const coffee = function () {
//     let username = "Mukul"
//     console.log(this.username);
// }

const coffee =  ()=> {
    let username = "Mukul"
    console.log(this);
}


// coffee()

// const addTwo = ( num1,num2 ) =>{
//     return num1 + num2
//  }


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "mukul"})

 console.log(addTwo(10, 90))


