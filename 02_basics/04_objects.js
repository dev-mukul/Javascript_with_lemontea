// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "mukuldx22@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mukul",
            lastname: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2}
//  const obj3 = Object.assign({}, obj1, obj2)


 const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email:"hot@gamil.com"
    },
        {
        id: 1,
        email: "hot@gamil.com"
    },
        {
        id: 1,
        email: "hot@gamil.com"
    },
        {
        id: 1,
        email: "hot@gamil.com"
    }
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



// <------------ de-structure and JSON API intro --------->

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseIntructor: "Hitesh"
}

// course.courseIntructor

const {courseIntructor: instructor} = course

// console.log(courseIntructor);
console.log(instructor);

// {
//     name :"mukul",
//     coursename: "Js in hindi",
//     price: "free"
// }

[
    {},
    {},
    {}
]

