// Immediately Invoked Function Expression 
// it is used to solve the problem facing due to global pollution 

// function chai(){
//     console.log(`DB connected`);
// }

// chai()

// (function chai(){
//     console.log(`DB connected`);
// })();

(function chai(){
    console.log("ADitya")
})()

// (()=>{}) () //arrow function is used as immediately invoked function 

// ((name)=>{
//     console.log(`db connected two ${name}`)
// })('Aditya')

((n)=> {
    console.log(`db connected Two ${n}`);
})('Aditya')