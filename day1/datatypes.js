// alert ( 3 + 3); we are using nodejs not browser

console.log(3+3 );
// code reusability 

// console.log("hitesh");

// let name="hitesh";
// let age=18;
// let isloggedIn=true;
// let state = null;

// number => 2 to power 53
// bigint 
//  string =>""
// boolean => true /false
// null => stand alone value 
// undefined => 
// symbol 

console.log(typeof null); // object 
console.log(typeof undefined); // undefined 

// conversion of datatypes

let score=null
// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber=String(score);
console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;false =>0

// let isLoggedIn=1;
// let booleanIsLoggedIn= Boolean (isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 =>true ; 0 =>false
// "" => false
// "hitesh" => true

// let someNumber= 33;
// let stringNumber= String (someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// sd********* operations  *********

// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2)
// console.log(2**3);

// let str1="hello"
// let str2="hitesh"

// let str3=str1 +str2
// console.log(str3);

// console.log(1+"2")
// console.log("1"+2 +2);
// console.log(1+2+"2");

// console.log(true);
// console.log(+"");
// let num1 ,num2,num3

num1 = num2 = num3=2+2

let gameCounter=100;
++ gameCounter;// prefix operator
gameCounter++ ; // postfix operator
console.log(gameCounter);

// string to number

console.log("2" > 1);
console.log("02" > 1 );
// converting null to number (== )

console.log(null > 0);
console.log(null == 0); // comparasion is done btn empty and 0
console.log(null >=0); // null is converted to 0 

console.log(undefined ==0)

// strict check for datatypes as well as for value 
console.log("2"=== 2);

//  primitive datatype

// 7 types :Strings ,Numbers , Boolean, Null ,undefined ,symbol 
// BigInt for larger number 

// const script = 100
// const scoreValue=100.3

// const IsLoggedIn=false
const outsideTemp = null 
// let userEmail;

const id=Symbol('123');
console.log(id);
const anotherId = Symbol('123');
console.log("SHAKTIMAN");
console.log(id===anotherId);

const bigNumber= 34554545453454343443n;

// reference (Non primitive)
// Array ,Objects functions 

const heroes=["SHAKTIMAN ", "NAGRAJ" , "DOGA"];
let myObj={
    name:"hitesh",
    age:22,
}

const myfuction=function(){ 
    console.log("hello world");
}

console.log (typeof bigNumber);
console.log(typeof outsideTemp);

// null have object datatype 

// array datatype
let Aditya = ["Aditya Singh " , "IIIT Bhagalpur " , "ECE dept "];
console.log(Aditya );

// object 
let Shubham ={
    name:"Aditya ",
    age:19,
    sex:"Male",
}

const RamFunction =function(){
    console.log(Shubham);
    console.log(Aditya);
}

RamFunction();

// +++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) and  Heap (Non-primitive)

let myYouTubename="hiteshchoudharydotcom";
let anotherName=myYouTubename
anotherName= "chaiaur code";
// stack gives copy 
console.log(myYouTubename)
console.log(anotherName);


// heap gives reference 
let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo=userOne
userTwo.email="hitesh@google.com"

// this will change both email as it gives reference
//  for the heap

console.log(userOne.email);
console.log(userTwo.email);

