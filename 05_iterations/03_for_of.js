// for of 
// ["","",""]
// [{},{},{},]


const arr = [1,2,3,4,5,6]
for (const num of arr){
console.log(num);
}


const greetings =" hello world!"
for (const greet of greetings){
    console.log(`each char is ${greet}`);
}



//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('fr', "France")

// console.log(map);

for (const [ key , value] of map){
    console.log(key , ':-' , value);
}
