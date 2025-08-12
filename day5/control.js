// if

if(true){
    console.log("hello")
}

if(2==="2"){
    console.log("executed")
}

const isUserLoggedIn=true

if(isUserLoggedIn){

}

if(3!= 2){

}
const temperature=41

if(temperature ===41){
    console.log("less than 50 ");
}
else
    console.log("temperature is greater than 50")

    console.log("Execute")
// <,>,<=  ,>= , ==, != ,=== ,!== (strict equal )
// === this will check about the datatype as well as value 

const score =200

if(score>100){
    const power="fly"
    console.log(`User power:${power}`);
}

// console.log(`User Power:${power}`);

const balance=1000

if(balance >500) console.log("test")

// +++++++++++++++++++++ nested 
if(balance <500){
    console.log("less than 500")
}else if(balance <750){
    console.log("less than 750")
}else if(balance<900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}


const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInfromGoogle || loggedInFromEmail){
    console.log("user logged in ");
}

