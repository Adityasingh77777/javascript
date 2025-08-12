// switch(key){
//     case value:

//     break;

//     default :
//     break;
// }

const month =3;
switch(month){
    case 1:
        console.log("january")
    break;

    case 2:console.log("feb");
    break;

    case 3:console.log("march");
    break;

    case 4:console.log("April");
    break;

    default :
    console.log("default case matched ");
}

const userEmail = "h@gmail.com";
if(userEmail){
    console.log("Got user email ");
}
else {
    console.log("Dont have user email ");
}

// falsy values are 
// false ,0 , -0,BigInt ,0n,"" , null , undefined , NaN

// truthy values are
// "0" ,'false' ," " , [] , {} ,function (){}

if(userEmail.length ===0 ){
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing Operator (??) : null undefined  
// it is used to assign the data if the initial value is null 

let val1;
val1=5 ?? 10
val1=null ?? 10
val1=undefined ?? 15 
val1=null ?? 10 ?? 20

console.log(val1);

// ternary operator 

// condition ? true : false 
const iceTeaPrice =100;
iceTeaPrice <=80 ? console.log("less than 80 ") : console.log("more than 80")
console.log("helllo ")
console.log("I am dead already ");

console.log("mosely knew nothing ");

console.log("i am gonna kill a man name Thomas Shelby");









