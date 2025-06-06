// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id ="12345"
tinderuser.name = "sunny"
tinderuser.isloggedin = false

console.log(tinderuser);

const regulasruser = {
    email: "sunny@gmail.com",
    fullname: {
        userfullname: {
        first: "sunny",
        last: "lee"
        }
    }
}
console.log(regulasruser.fullname.userfullname.first);




const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}
const obj4 = {7: "d", 8: "e", 9: "f"}
// const obj3 = {obj1 , obj2}

// const obj3 = Object.assign( {}, obj1 , obj2 , obj4)
// console.log(obj3);


const obj3 = {...obj1 , ...obj2 , ...obj4}
console.log(obj3);





console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('islogged'))










//another method 

const course = {
    coursename: "js hindi",
    price: "999",
    duration: "2 months",
    teacher: "kartic"
}

console.log(course);
console.log(course.teacher);


//another method
const { duration} = course
console.log(duration);




// {
//     "name": "kartic",
//     "coursename": "js hindi",
//     "price": "999",
// }

