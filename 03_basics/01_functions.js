console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");

//-----------------
function saymyname(){
    console.log("A");
console.log("B");
console.log("C");
console.log("D");
console.log("E");
console.log("F");
}

saymyname()

//--------------------
// function addtwono(number1 , number2){
//     console.log(number1+number2);        //parameters 
// }
// addtwono(5,7) // 12  //arguments 


// const result = addtwono(5,7)


//--------------
function addtwono(number1 , number2){
    let result = (number1+number2);  
    return result      //parameters 
    console.log("kartic")// never execute 
}
addtwono(5,8) // 13  //arguments 


const result = addtwono(5,8)
console.log("result: ", result) // 13



//------------------------
function loginuser(username) {
    if(username == undefined){
        console.log("please enter login name");
        return
    }
    return `${username} just logged in `
}
//console.log(loginuser("kartic"))
//console.log(loginuser())



//-------------------
function calculateprice (...num1){
    return num1

}

console.log(calculateprice(200,300,400,6666));



//------------------
const user = {
    username: "kartic",
    price: 1000
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user) //username is kartic and price is 1000






// -------------------
const mynewarray = [ 1,2,3,4,5]
function handlearray(array){
    return array[1]
}
console.log(handlearray(mynewarray)) // 2