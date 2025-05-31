//Dates
//  let MyDate = new Date();
//  console.log(typeof MyDate )
//  console.log( MyDate.toString());
//  console.log( MyDate.toDateString());
//  console.log( MyDate.toLocaleString());
//  console.log( MyDate.toLocaleDateString());

//  let myCreatedDate = new Date(2023, 0, 1);
//   let myCreatedDate = new Date(2023, 0, 23,5,3);
//   let myCreatedDate = new Date("01-14-2023");
//  console.log(myCreatedDate.toLocaleString());




//  let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//   console.log(myCreatedDate.getTime());



  let newDate = new Date()
  console.log(newDate);
  console.log(newDate.getMonth() + 1);
  console.log(newDate.getDay());




  
  newDate.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    })
    console.log(newDate.toLocaleString('default',{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
        }))



