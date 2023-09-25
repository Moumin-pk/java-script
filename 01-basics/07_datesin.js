// Dates

let myDate = new Date();
// console.log(myDate.toString()); // convert to string
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // object

// let myCreateDate = new Date(2002, 5, 7);
// let myCreateDate = new Date(2002, 5, 7,5,3);
// let myCreateDate = new Date("06-07-2002");
let myCreateDate = new Date("07-06-2002");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); 
console.log(myCreateDate.getTime());
console.log(Math.round(Date.now()/1000)); //convert in sec and round the value

myDate.toLocaleString('default',{
    weekday: 'long',
})
console.log(myDate);

