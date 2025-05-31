const name = "Kartic"
const ytvideoes = 500

//console.log(name + ytvideoes + " value"); old method 

console.log(`my name is ${name} and i uploaded  ${ytvideoes} on youtube`); // new method

const name1 = new String('kartic') // another way to declare string
console.log(name[2]);

//common string use 
console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.charAt(3));
console.log(name1.indexOf('c'));



//substring
const newstring = name1.substring(0,4)
console.log(newstring);


//slice
const anothernewstring = name1.slice(-5,4)
console.log(anothernewstring);

//trim
const newstring1 = "    prashant    "
console.log(newstring1);
console.log(newstring1.trim());

//replace
const url = "https://kartic.com/kartic%20sharma"
console.log(url.replace('%20', '_'));

console.log(url.includes('rahul'));

//split
const name2 = "kanhiyan-sharma-mant"
console.log(name2.split(' '));

