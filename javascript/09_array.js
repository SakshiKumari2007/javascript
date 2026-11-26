/* Array:-resize, mixed datatypes, 
can't be accessed using arbitrary string as index,
index starts at 0, shallow copy & deep copy,
*/

/*
let arr1 = [9,2,7,6,5,4,3];

//  const arr2 = ["riya", "siya", "tiya"]

// console.log(arr1[3])

// const even = new Array(2,4,6,8,10,12,14)

// console.log(even[19])   //undefined
// console.log(even[1])

// array methods:-


// arr2.push("jiya")
// arr2.push("diya")
// console.log(arr2)
// arr2.pop()
// console.log(arr2)
// console.log(arr1.unshift(12))  //answer:-8


// arr1.unshift(12)
// console.log(arr1)    

// arr1.shift()
// console.log(arr1)


// console.log(arr1.includes(9));  // return boolean value

// console.log(arr1.indexOf(3)); 

// const skArr1 = arr1.join()

// console.log(arr1);
// console.log(skArr1);
console.log(arr1.includes(9)); 
*/



/*

//slice, splice

let arr1 = [9,2,7,6,5,4,3];



 console.log("A",arr1);

const array1 = arr1.slice(1,4);

console.log(array1);
console.log("B",arr1);

const carr1 = arr1.splice(1,4);
console.log (carr1);
console.log("c",arr1);


*/


const cravingFor = ["momo", "veg_roll", "ice"]

const whatIEat = ["coffee", "biscuit", "medicine"]


// cravingFor.push(whatIEat)

// console.log(cravingFor);
// console.log(cravingFor[3][1]);

// const suar = cravingFor.concat(whatIEat);
// console.log(suar)

const mixture = [...cravingFor, ...whatIEat]
console.log(mixture)


const anotherArr = [1,2,3,[4,5,6],7,8,[9,10,[11,12,13]]]

const anotherOneArr = anotherArr.flat(Infinity)
console.log(anotherOneArr)

console.log(Array.isArray("Sakshi"));
console.log(Array.from("Sakshi"));
console.log(Array.from({name: "Sakshi"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


