// let a = 10
// const b = 30 
// var c = 50 



let a = 300
if (true) {
let a = 10
const b = 30 
// var c = 50 
console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
//console.log(c);



// nasted scope

function one () {
    const username = "ram"

    function two () {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

one()









if(true) {
    const username = "karan"
    if(username === "karan") {
        const website = "youtube"
        console.log(username + " " + website);
    }
    //console.log(website);
}
//console.log(username);



// ************************** intresting ***********************
console.log(addone(5));
function addone(num) {
    return num+1

}
addone(5)





console.log(addtwo(5));
const addtwo = function(num){
    return num+ 2
}
// addtwo(5)