const descripter = Object.getOwnPropertyDescriptor(Math,
     "PI")
    //  console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const mynewObject = Object.create(null)

const coffee = {
    name:'cappi',
    price: 850,
    isAvailable: true,

    orderCoffee: function (){
        console.log('coffee nhi bani');
    }
}
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperties(coffee, 'name', {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {

    if(typeof value !== 'function'){

        console.log(`${key} : ${value}`);
    }
}
