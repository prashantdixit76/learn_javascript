//forin
const myobject = {
    js: 'javscript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myobject){
console.log(`${key} shortcut is for ${myobject[key]}`);
}




const programming = ["js", "c" , "HTML"]
for(const key in programming) {
console.log(programming[key]);
}





// const map = new Map()
// map.set('IN', "India")
// map.set('USA',"United States of America")
// map.set('fr', "France")

// // console.log(map);

// for (const key in map){
//     console.log(key);
// }   