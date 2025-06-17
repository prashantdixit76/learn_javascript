// Variables 
const accountId = 144553
let accountEmail = "kartic123@gmail.com"
var accountPassword = "12345"


// -------------------------------------------------------------------------------------------------
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
const score1 = 100.3 

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


// -------------------------------------------------------------------------------------------------
// Conversion
let score2 = "33"
console.log(typeof score2);
console.log(typeof(score2));

let valueinNumber = Number(age)
console.log(typeof valueinNumber);
console.log(valueinNumber);

let num = null
console.log( typeof num);
console.log(num);  // null

// notes 
//"33" => 33
//"33abc" => NaN
//null => null
//undefined => undefined
//true => 1 ; false => 0



// -------------------------------------------------------------------------------------------------
// Strings
const name = "Kartic"
const ytvideoes = 500
//console.log(name + ytvideoes + " value"); old method 
console.log(`my name is ${name} and i uploaded  ${ytvideoes} on youtube`); // new method


// another way to declare a string
const name1 = new String('kartic') // another way to declare string
console.log(name[2]);


//common string use 
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(3));
console.log(name1.indexOf('c'));

//substring
const newstring = name1.substring(0,4)
console.log(newstring);

//slice
const anothernewstring = name1.slice(-5,4)
console.log(anothernewstring);

//trim
const newstring1 = "    prashant    "
console.log(newstring1);
console.log(newstring1.trim());

//replace
const url = "https://kartic.com/kartic%20sharma"
console.log(url.replace('%20', '_'));

console.log(url.includes('rahul'));

//split
const name2 = "kanhiyan-sharma-mant"
console.log(name2.split(' '));



// ------------------------------------------------------------------------------------------------
// Numbers and Maths 
// ************************************ Numbers  ************************************/
const score3 = 400
console.log(score3);

//another way to declare no.
const balance1 = new Number(100)
console.log(balance1);

// convert in string
console.log(balance1.toString());
// check length
console.log(balance1.toString().length);
// give two fixed decimal places
console.log(balance1.toFixed(2));


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



// -------------------------------------------------------------------------------------------------
// Dates
//Dates
 let MyDate = new Date();
 console.log(typeof MyDate )
 console.log( MyDate.toString());
 console.log( MyDate.toDateString());
 console.log( MyDate.toLocaleString());
 console.log( MyDate.toLocaleDateString());

 let myCreatedDate = new Date(2023, 0, 1);
//   let myCreatedDate = new Date(2023, 0, 23,5,3);
//   let myCreatedDate = new Date("01-14-2023");
 console.log(myCreatedDate.toLocaleString());

// ex-1
   let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth() + 1);
  console.log(newDate.getDay());



//   -----------------------------------------------------------------------------------------------
// array
const myArr = [0,1,2,3,4,5]
const myheroes = ["sakiman" , "ranveer kapoor"]
console.log(myArr);

// -------------------------------------------------------------------------------------------------

// objects
const jsuser = {
    name: 'kartic',
    age: 18,
    location: "jaipur",
    email: 'kartic@gmail.com',
    isloggedin: false
}
console.log(jsuser.email);
// console.log(jsuser["email"])
// console.log(jsuser[mySym])

// ------------------------------------------------------------------------------------------------

// Functions
function addtwono(number1 , number2){
    console.log(number1+number2);        //parameters 
}
addtwono(5,7) // 12  //arguments 

const result = addtwono(5,7)


// ------------------------------------------------------------------------------------------------
// arrows

const chai = () => {
    let name = "karan"
    console.log(this);
}
chai() 

//explisit return
const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(5,6));


//implisit return
const addtwonum = (num1,num2) => num1 + num2
console.log(addtwonum(5,6));


// ------------------------------------------------------------------------------------------------
//IIFE (Immediately Invoked Function Expression)
//named iifi
(function chai(){
    console.log(`DB CONNECT`);
})();


//by arrow function 
//unnamed iifi
((name) => {
    console.log(`DB CONNECT TWO ${name}`);
})('kartic')


// --------------------------------------------------------------------------------------------------
// call stack
// follow LIFO (last in first out)


// ------------------------------------------------------------------------------------------------
// if,elseif,else
// if
if(2 === "2"){
console.log("Executed")
}

// else
const temp = 51
if(temp === 50){
    console.log("yes temp less then 50")
}
else {
    console.log(" no temp is not less then 50")
}

// elseif
const balance = 1000
// if(balance > 500) console.log("test")
if (balance <500) {
    console.log("less than 500");
}
else if (balance < 750) {
    console.log("less than 750");
}
else if (balance < 900) {
    console.log("less than 900");
}
else {
    console.log("less than 1200");
}


// -------------------------------------------------------------------------------------------------
// && and || 
const userloggedin = true
const dabitcard = true
const loggedinfromgoogle = true
const loggedinfromemail = true
if(userloggedin && dabitcard ) {
    console.log("Allow to buy course");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user loggedin ");
}



// -------------------------------------------------------------------------------------------------
//Switch Statements
const month = 3
switch (month){
    case 1:
    console.log("january");
    break;
    case 2:
    console.log("february");
    break;
    case 3:
    console.log("march");
    break;
    case 4:
    console.log("april");
    break;
    default:
    console.log("not found"); 
    break;   
}



// -------------------------------------------------------------------------------------------------
// Loops 
//For loops
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is beat number");
    }
    console.log(element);
    
}

//while loop
let i = 0
while (i <= 10) {
    console.log(`value of index is ${i}`);
    i = i + 2
}

// doWhile loop
let score = 1 
do {
    console.log(`score is ${score}`);
    score++
}while(score <= 10);



// -------------------------------------------------------------------------------------------------
// for of and for in 
// for of 
// ["","",""]
// [{},{},{},]

// ex
const arr = [1,2,3,4,5,6]
for (const num of arr){
console.log(num);
}

// for in 
const myobject = {
    js: 'javscript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobject){
console.log(`${key} shortcut is for ${myobject[key]}`);
}



// -------------------------------------------------------------------------------------------------
// For Each Loop
const coading = ["js","c","HTML","java"]
 coading.forEach( function (val)  {
    console.log(val);
 })


 coading.forEach ((item) => {
    console.log(item);
 })



 function printme(item){
    console.log(item);
 }




//  ------------------------------------------------------------------------------------------------
//filter
// ex-1
const mynums1 = [1,2,3,4,5,6,7,8,9,10]
const newnums1 = mynums1.filter( (num) =>num > 4 )
console.log(newnums1);

// ex-2
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num) => {
//     return num > 4
// } )
// console.log(newnums);


// -------------------------------------------------------------------------------------------------
// Map
const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('fr', "France")

// console.log(map);

for (const key in map){
    console.log(key);
}   



//  ------------------------------------------------------------------------------------------------
// multipale use of map and filters 
const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnumber = mynumber.map ( (num) => num +10 )

// const newnums = mynumber.map( (num) => num * 10  ).map( (num) => num + 1 ).filter( (num) => num >= 40 )
console.log(newnums);


//  ------------------------------------------------------------------------------------------------
// Reduce
// Ex - 1 
const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// another way
const mytotal = mynums.reduce( (acc , curr) => acc+curr , 0 )
console.log(mytotal);




// Ex - 2
const shoppingcart = [
    {
        items: "js course",
        price: 2999
    },
    {
        items: "python",
        price: 2976
    },
    {
        items: "java",
        price: 4567
    },
    {
        items: "web development",
        price: 3999
    },
]

const prictopay = shoppingcart.reduce(  (acc, item ) => acc + item.price, 0)
console.log(prictopay);

