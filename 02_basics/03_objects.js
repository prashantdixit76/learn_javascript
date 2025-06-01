//singleton

//Object literals


const mySym =Symbol("Key1")

const jsuser = {
    name: 'kartic',
    age: 18,
    [mySym]: "myKey1",
    location: "jaipur",
    email: 'kartic@gmail.com',
    isloggedin: false
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mySym])



jsuser.email  = "kartic123@gmail.chat.com"
// Object.freeze(jsuser)
console.log(jsuser)



jsuser.greeting = function(){
    console.log("Hello");
}

jsuser.greetingtwo = function(){
    console.log(`Hello, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());