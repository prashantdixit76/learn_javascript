"use strict" // treat all JS codeas newer version

//alert("hello") //we are using NodeJs not browser

console.log(2+
    2)// code should be readability

    
console.log("kartic")



let name = "kartic sharma"
let age = 18
// let islogged in = false


//notes 
// Data types on js 

// Number => 2 to power 13
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => variable is declared but not assigned
// symbol => unique value


// object => collection of key value pair


console.log(typeof age);

console.log(typeof undefined); // undefined 
console.log(typeof null); // object



// ****************************** Data types Summary ******************
//primitive
// 1. number
// 2. string
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 7. bigInt


const agee = 33
const score = 100.3 

const isloggedinn = false
const outsidetemp = null

const id = Symbol("123")
const anotherid = Symbol("123")
console.log(id == anotherid);


//nonprimitive
// 1. array
// 2. object
// 3. Functions


const heros = ["Ironman", "Captain", "Thor"] //array
const person = {name: "John", age: 30} //object
const greet = function(){ console.log("Hello")} //function 