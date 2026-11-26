// singleton
// object.create


// object.literals


const sym1 = Symbol("key1")  //declearation of symbol
console.log(typeof sym1)
console.log(sym1)
 
const jsUser ={
    name : "sakshi",
    age : 20,
    [sym1] : ("key12"),  //use of symbol
    location : "ramghar",
    "current location" : "chikor",
    email : "sakshi123@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

// access of  objects

console.log(jsUser.email)  //not applicable in all
console.log(jsUser["email"])
console.log(jsUser["current location"])
console.log(jsUser[sym1])
console.log(typeof jsUser[sym1])

// change the object values

/*
use dot notation if key has
no spaces,no special characters,
doesn't start with a number

otherwise use bracket notation
*/

jsUser["current location"] ="narka"
console.log(jsUser["current location"])

Object.freeze(jsUser)
jsUser.email = "salshi1212@gmail.com"
console.log(jsUser)

