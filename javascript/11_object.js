/*

const tinderUser = new Object()  //singleton object
//const tinderUsers = {}          //non singleton object
// both are empty objects

tinderUser.id = "1234abcd*"
tinderUser.name = "Sakshi"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);

// nested objects

const location = {
    email : "sakshi098@gmail.com",
    address : {
        currentAddress : "chikor",
        fullAddress  : "bhurkunda, (chikor), pin-829105"
    }
}
// console.log(location.address["fullAddress"])

// ? also use to check the objects

const obj1 = {1:"a",2:12,3:"b"}
const obj2 = {4:"c",5:"d",6:"e"}
const obj0 = {7:"sakshi",a:true,sym:Symbol("keys")}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)
// {}: act as a target
// obj,obj0 : act as a source
const obj4 = {...obj0, ...obj1, ...obj2}
console.log(obj4)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


*/


//   %%%%%%%%%%%%%%%%%%%       de-structure     %%%%%%%%%%%%%%

const course = {
    courseName : "javaScript",
    price : 1999,
    isLoggedIn : true,
    courseInstructor : "hitesh"

}

// course.courseInstructor

const{courseInstructor : instructor} =  course
console.log(instructor)

const{isLoggedIn} = course
console.log(isLoggedIn)

console.log(course.hasOwnProperty("isLoggedIn"))

{

}