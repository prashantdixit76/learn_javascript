const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["flash","batman","haila"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1])


// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);


// const allnewheroes = [...marvel_heroes,...dc_heroes]
// console.log(allnewheroes);  // thor ironman spiderman flash batman haila 


const anotherarray =[1,2,3,[6,8],9,7,[2,3,[3,6]]]
const real_anotherarray = anotherarray.flat(Infinity)
console.log(real_anotherarray); 



console.log(Array.isArray("kartic"))
console.log(Array.from("kartic"))
console.log(Array.from({name:"kartic sharma"}))//intrsting




let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 , score2 , score3));