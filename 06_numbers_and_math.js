// ************************************ Numbers  ************************************/
const score = 400
console.log(score);

//another way to declare no.
const balance = new Number(100)
console.log(balance);

// convert in string
console.log(balance.toString());
// check length
console.log(balance.toString().length);
// give two fixed decimal places
console.log(balance.toFixed(2));


//foe take precision value
const otherno = 123.899
console.log(otherno.toPrecision(3));

//foe better understanding 
const hundreds = 10000000000000 
console.log(hundreds.toLocaleString('en-IN'));



// ************************************ MATHS OBJECT *******************************************
console.log(Math);

console.log(Math.abs(-5)); // absolute value
console.log(Math.round(3.7)); // round to nearest integer
console.log(Math.ceil(3.7)); // round up to nearest integer
console.log(Math.floor(3.7)); // round down to nearest integer
console.log(Math.max(1,2,3,4,5)); // max value
console.log(Math.min(1,2,3,4,5)); // min value
console.log(Math.pow(2,3)); // power
console.log(Math.sqrt(16)); // square root


console.log(Math.random()); // gives random number between 0 and 1
console.log((Math.random()*10) +1); // gives random number between 1 and 10



const min = 10
const max = 20

Math.random( 10,20) // gives random number between 10 and 20 

console.log( Math.floor(Math.random() * (max - min + 1)) + min); // gives random number between 10 and 20

