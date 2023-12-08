// date objects
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate= new Date(2023,0,23);
let mDate= new Date("2023-01-14");
let myCreatedDate= new Date("01-14-2023");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getMonth()+1); // month is started from 0
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))

