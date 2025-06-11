const user = {
    name: 'John Doe',
    price: 99,

    welcomemessage: function(){
        console.log(`${this.name} , Welcome to website`);
        console.log(this);
    }
}

user.welcomemessage()
user.name = "kartic"
user.welcomemessage()

// console.log(this);


// function chai(){
//     let name = "karan"
//     console.log(this);
// }
// chai(); // window object in browser and global object in node js



// const chai = function(){
//     let name = "karan"
//     console.log(this.name);
// }
// chai()



const chai = () => {
    let name = "karan"
    console.log(this);
}
chai() 

// arraow function
//explisit return
const addtwo = (num1,num2) => {
    return num1 + num2
}
console.log(addtwo(5,6));


//implisit return
const addtwonum = (num1,num2) => num1 + num2
console.log(addtwonum(5,6));

//object return
const addtwonumm = (num1,num2) => ({username: "kartic"})
console.log(addtwonumm(5,6));



