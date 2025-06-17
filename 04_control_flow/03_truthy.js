const useremail = "kartic@.ai"
if(useremail){
    console.log("got have email");
}
else {
     console.log("dont have email");
     
}


//truthy values
//  "0" , 'false' , " " , [] , {} , function(){} 

//falsy value 

// [false, 0,-0, BigInt 0n , "" , null , underfined , NaN ]





if(useremail.length === 0 ){
    console.log("array is empty");
}



const emptyobj = {}
if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}


//false == 0 =>true
//false == '' =>true
// 0 == '' => true




//Nullish Coalescing operator (? ?): null undefined
let val1;
// val1 = 2 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 16

console.log(val1);


//terniary Operator

// consition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80"): console.log("more than 80")


