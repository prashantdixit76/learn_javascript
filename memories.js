//Stack and Heap memory
// stack - primitive types 
// heap - non primitive types

const { useInsertionEffect } = require("react");

let name = "Kartic"
let anothername = name
anothername = "rahul"

console.log(name);
console.log(anothername);



// heap
let userone =  {
    email: "kartic@gmail.com",
    Upi: "kartic@ybl"

}

let usertwo = userone

usertwo.email = "prashant@gmail.com"

console.log(userone.email);
console.log(usertwo.email)



