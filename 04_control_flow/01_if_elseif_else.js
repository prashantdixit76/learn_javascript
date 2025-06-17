//if  , else if , else 


if(2 === "2"){
console.log("Executed")
}

// [<,>, <=,>=,== , != , === ]

// else
const temp = 51
if(temp === 50){
    console.log("yes temp less then 50")
}
else {
    console.log(" no temp is not less then 50")
}


// ---------------------------------

const score = 200
if(score >100) {
    let power ="fly"
    console.log(`user power: ${power}`);
}

// ---------------------------------
//elseif
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


// ---------------------------------

// && => both condition should be true
// || => any one condition should be true 
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



// ---------------------------------



