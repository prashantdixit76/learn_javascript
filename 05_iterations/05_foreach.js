const coading = ["js","c","HTML","java"]
 coading.forEach( function (val)  {
    console.log(val);
 })


 coading.forEach ((item) => {
    console.log(item);
 })



 function printme(item){
    console.log(item);
 }




//  --------------------------

 const mycoading = [
    {
        lanuageName: "javascript",
        lanuagefileName: "js"
    },
    {
        lanuageName: "java",
        lanuagefileName: "java"
    },
    {
        lanuageName: "python",
        lanuagefileName: "py"
    },
 ]

 mycoading.forEach( (item) => {
    console.log(item.lanuageName);
 })





// ---------------------------------
 const coading1 = ["js","c","HTML","java"]

const value = coading1.forEach( (item) =>{
    console.log(item);
} )

console.log(value);

