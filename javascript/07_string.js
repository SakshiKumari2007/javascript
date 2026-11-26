// const name = "sakshi"
// const currentAge = 20

// console.log(name+ currentAge+" value")    //not relavent

// console.log(`my name is ${name} and my age is ${currentAge}`);    //stinginterpolation

const gameName = new String("Skuma-ri")

//  console.log(gameName[-7]);   //it's show undefine

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.length);
// console.log(gameName.__porto__);

// console.log(gameName.charAt(-0));  // treat just as 0
// console.log(gameName.charAt(-7));    //blank
// console.log(gameName.indexOf("R"));



/*
const newString = gameName.substring(4,6)
console.log(newString);
                                                       //nahi samajh aaya
const anotherString = gameName.slice(-6,4)
console.log(anotherString)

*/

const newStringOne = "    Sakshi   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = new String("https://sakshi.com/sakshi%50kum")

console.log(url.replace('%50','#2'));

console.log(url.includes("ptth"))

console.log(url.split('/'))