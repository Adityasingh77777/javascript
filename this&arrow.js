const user={
    username:"Aditya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this) // this gives the current context or variable
    }
}

user.welcomeMessage()
user.username="sam"
user.welcomeMessage()

console.log(this)

// +++++++++++++ arrow function +++++++++++++++++++
function chai (){
    let username="Aditya"
    console.log(this.username);
}
chai()

// const chasini=function (){
//     let username="Aditya"
//     console.log(this.username);
// }
// chasini()

const chas=() =>{
    let username="Aditya"
    console.log(this.username);
}

chas()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

const addTwo = (num1,num2)=> (num1+num2) // this is best 
// const addTwo= (num1,num2 ) => num1+num2

const addOne=(num3,num4)=> ({username:"hitesh"})
console.log(addOne(45,34));
console.log(addTwo(5,6));

const myArray=[3,5,6,6,8];
