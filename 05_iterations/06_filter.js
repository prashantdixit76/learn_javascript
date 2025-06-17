
//filter
// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num) =>num > 4 )
// console.log(newnums);




// const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num) => {
//     return num > 4
// } )
// console.log(newnums);





// const newnums = []
// mynums.forEach( (num) => {
//     if (num >4){
//         newnums.push(num)
//     }
// })
// console.log(newnums);






// example
const books = [
    {title: 'Book One', genre: 'fiction', publish: 1981, edition: 2004},
    {title: 'Book One', genre: 'non fiction', publish: 1982, edition: 2005},
    {title: 'Book One', genre: 'fiction', publish: 1983, edition: 2006},
    {title: 'Book One', genre: 'non fiction', publish: 1984, edition: 2007},
    {title: 'Book One', genre: 'history', publish: 1985, edition: 2008},
    {title: 'Book One', genre: 'non fiction', publish: 1986, edition: 2009},
];


// const userBooks = books.filter( (bk) =>bk.genre === 'non fiction' )

// const userBooks = books.filter( (bk) => { return bk.publish <= 2000})

const userBooks = books.filter ( (bk) => {
    return bk.publish <= 2000 && bk.genre === "non fiction"
} )
console.log(userBooks);








