const promiseOne=new Promise(function(resolve,reject){
    //do an asyn task
    // DB calls ,cryptography ,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved  ");
})

const secondPromise=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("Async Task Two ");
            resolve();
        },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseQ=new Promise(function(resolve,reject){

})
const promiseThree = new Promise(function(resolve,reject){
    // data transfer ke liye 
    setTimeout(function(){
        // resolve is connected to then function
        resolve({username:"chai",email:"Aditya@gmail.com",})
    },1000)
})

// using then we are calling resolve
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"hitesh",password:"123"})
        }
        else {
            reject('ERROR:something went wrong')
        }
    },1000)
})

// const username=promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// })

promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((username) =>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{console.log("The promise is either resolved or rejected")
})

// we can use then catch to throw and catch it in catch function
// finally is used to print it as a result of then and catch

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response= await promiseFive 
    console.log(response);
}   catch(error){
        console.log(error);
}
}

consumePromiseFive();

async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
} catch{
    console.log("E:",error);
}
}

getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))