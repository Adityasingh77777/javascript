var c=300
let a = 30
// scope is representing as { }

if(true){
    let a=20
const b=20
// var c=40
console.log("INNER:" , a);
}
let  array=[3,4,545];

function abs(){
    console.log("hello")
}
abs()

console.log(a)
// console.log(b);
console.log(c); // var is acceseed from scope and 
// changed from any of the scope 

// nested scope 

function one (){
    const username="hitesh"

    function two(){
        const website = "you tube"
        console.log(username);
    }
    // console.log(website)
    two()
}

one()

function body(){
    function abs(){
        console.log("body banani hai ki nahi ")
        console.log("gym jao bhenchod ");
    }

    abs()
}

body()

if(true){
    const username="Aditya"
    if(username=== "Aditya"){
        const website = "youtube"
        console.log(username+ website);
    
    }
//     console.log(website); as website is not
// declared outside the username
}

// console.log(username)


//++++++++++++++ interesting ++++++++++++++++++++
console.log(addone(5))  // function can be used above and below 
// the function is used before declaration 
function addone (num){
    return num+1;

}
console.log(addone(5))

// console.log(addTwo(5))
// it is converted to expression so it not used above declaration of function 

const addTwo = function (num){
    return num+2
}

console.log(addTwo(5))