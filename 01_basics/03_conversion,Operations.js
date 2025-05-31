let score = "33"


console.log(typeof score);
console.log(typeof(score));



let age = "33abc"

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


let isloggedin = 1
let booleanloggedin = Boolean(isloggedin)
console.log(booleanloggedin);


let isloggedin1 = ""
let booleanloggedin1 = Boolean(isloggedin1)
console.log(booleanloggedin1);

let isloggedin2 = "kartic"
let booleanloggedin2 = Boolean(isloggedin2)
console.log(booleanloggedin2);


//note
// 1 => true 
//0 => false
//"" => false
//"kartic" => true

//example 
let  Somenum = 33
let stringsomenum = String(Somenum)
console.log(stringsomenum);
console.log(typeof stringsomenum);


//***************************** Operations ***************************************/
let value = 3
let nevalue = -value
console.log(nevalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%2);


//add two strings value 
let str1 = "hello"
let str2 =" kartic"
let str3 = str1 +str2
console.log(str3);



console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//note 
//if first is interger then treat like as integer and perform given task  if first is string then treat like as string .  



console.log(true);
console.log(+true);
console.log("");




let gamecounter = 100
++gamecounter;
console.log(gamecounter);

--gamecounter;
console.log(gamecounter);










