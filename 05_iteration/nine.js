// <----- Reduce Method ------> 

const myNums = [1, 2, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        iteamName: "js course",
        price: 2999
    },
    {
        iteamName: "java",
        price: 3999
    },
    {
        iteamName: "mobile dev course",
        price: 4999
    },
    {
        iteamName: "AI course",
        price: 6599
    },
    {
        iteamName: "data science course",
        price: 2999
    },
]

 const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
 console.log(priceToPay);