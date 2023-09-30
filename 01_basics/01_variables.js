const accountId = 1445533
// isko change nhi kiya jata hai
let accountEmail = "mukkusd29@gmail.com"
var accountPassword = "12345"
// accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed

accountEmail = "@hsvt.com"
accountPassword = "12121212"
// accountCity = "Delhi"    --> asa bhi likh sakte hai 

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountState])