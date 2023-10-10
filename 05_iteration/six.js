// const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach( (item) =>{
//     // console.log(item);
//     return item
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNums.filter((num) => {
//     return num > 4
//  })


//  const newNums = []

//  myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
//  } )

//  console.log(newNums);


const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
     edition: 2004},
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1987,
        edition: 2006
    },
    {
        title: 'Book Three', genre: 'History', publish: 1989,
        edition: 2007
    },
    {
        title: 'Book Four', genre: 'Polity', publish: 1990,
        edition: 2009
    },
    {
        title: 'Book Five', genre: 'English', publish: 1992,
        edition: 2013
    },
];

let userBooks =  books.filter( (bk) => bk.genre === 'History')

 userBooks = books.filter( (bk) => { 
    return bk.publish >= 1990 && bk.genre === 'History'
})
console.log(userBooks);
