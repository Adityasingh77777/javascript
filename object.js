// singleton

// object literals 

const mySym=Symbol("key1")

const JsUser= {
    name:"Aditya",
    "fullName":"Aditya Singh",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.location);
console.log(JsUser["location"]);
console.log(JsUser["fullName"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email="Aditya@chatgpt.com"
// Object.freeze(JsUser) // this will not allow any change in the object 
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

// function
JsUser.greeting=function(){
    console.log("hello Js User")
}

JsUser.greetingTwo=function(){
    console.log(`hello Js User ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());