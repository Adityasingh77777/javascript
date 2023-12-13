//function and parameter
function sayH(){
console.log("h");
console.log("I");
console.log("I");
}

// sayH()
sayH()
function addTwoNumbers(number1,number2){
    // console.log(number1+number2);
    let result=number1+number2
    return result 
    return number1+number2
}

addTwoNumbers(2,4)
addTwoNumbers(3,null)
const result=addTwoNumbers(54,3);
console.log("Result:" ,result );

function loginUserMessage(username){
    // if(username===undefined){
        if(!username){
        console.log("Please enter your name:");
        return 
    }
    return `${username} has just logged in`
}

// loginUserMessage()
console.log(loginUserMessage())
console.log(loginUserMessage("Aditya"))