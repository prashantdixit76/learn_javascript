//arrays
//Array in javascript
//Array is a collection of elements which can be of any data type
//Array is denoted by square brackets []
//Array is a mutable data type
//Array is a reference type
//js array are resizable


const myArr = [0,1,2,3,4,5]
const myheroes = ["sakiman" , "ranveer kapoor"]

const arr2 = new Array(1,2,3,4)
console.log(myArr[2])


// Array Methods
// push() - adds an element to the end of the array
// pop() - removes an element from the end of the array
// shift() - removes an element from the beginning of the array
// unshift() - adds an element to the beginning of the array
// splice() - adds or removes elements from the array
// sort() - sorts the array in ascending or descending order
// reverse() - reverses the array
// indexOf() - returns the index of the first occurrence of the specified element
// lastIndexOf() - returns the index of the last occurrence of the specified element
// includes() - returns a boolean indicating whether the array includes the specified element
// join() - returns a string containing all the elements of the array
// concat() - returns a new array containing all the elements of the original array and the elements of
// every other array in the argument list
// slice() - returns a shallow copy of a portion of the array


myArr.push(6)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.shift()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)


console.log(myArr.includes(8));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr)
