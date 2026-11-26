let value = 43
let negValue = -value

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

// console.log("2">0);
// console.log("02">1);

/*
problem causes when to different type of datatypes compair 
then the output is unexpacted

typescript is a language that ristrick the comparision of different datatypes

*/


console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(null<=0);


/*
    when using comparison operation(>,<,>=,<=), Javascript
    converts null to a number,which becomes 0.
                    BUT
    The ==(loose equality) does not convert
    null to a number
    
*/    
    