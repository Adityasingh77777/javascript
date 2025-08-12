// javascript and classes

//oops 

// object oriented progaramming 
// collection of properties and methods
// toLowerCase

// why use oops 

// parts of oops 
// object literal 

// -constructor function
// -prototypes
// -classes
// -instances (new,this)

// ## 4 pillars
//Abstraction
// encapsulation
// inheritance 
// polymorphism

const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database");
        console.log(`Username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// Do not waste time Time is Precious 
// Hard work gives Success 
// Do Your Duty 

// constructor Function

    // new is a keyword used to create new instances  

function ser(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome${this.username}`);
    }

    return this
}

const userOne=new ser("Aditya",12,true)
const userTwo=new ser("Chai aur code",11 ,false)
console.log(userOne.constructor);
// console.log(userTwo);

