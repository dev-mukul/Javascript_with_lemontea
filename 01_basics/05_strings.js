// string single code and double code donate 

const name = "mukul"
const repoCount = 50

// console.log(name + repoCount + " Value ");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('mukul-hc')

console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));



 const newString = gameName.substring(2, 6)
 console.log(newString);

 const anotherString = gameName.slice(-8, 4)
 console.log(anotherString);

 const newStringOne = "     mukul     "
 console.log(newStringOne);
 console.log(newStringOne.trim());


 const url = "https://google.com"

  console.log(url.replace('%20', '-'))

  console.log(url.includes('mukul'))

  console.log(gameName.split('-'));
