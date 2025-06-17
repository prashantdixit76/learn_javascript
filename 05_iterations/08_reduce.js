const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)


const mytotal = mynums.reduce( (acc , curr) => acc+curr , 0 )
console.log(mytotal);





const shoppingcart = [
    {
        items: "js course",
        price: 2999
    },
    {
        items: "python",
        price: 2976
    },
    {
        items: "java",
        price: 4567
    },
    {
        items: "web development",
        price: 3999
    },
]

const prictopay = shoppingcart.reduce(  (acc, item ) => acc + item.price, 0)
console.log(prictopay);

