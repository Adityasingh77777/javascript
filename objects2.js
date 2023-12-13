// const tinderUser=new Object()
const tinderUser = {

}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"some@fgmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary",
        }
    }
}

console.log(regularUser["fullname"]);

//combining the objects 
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};

// const obj3={obj1 ,obj2} 
// combining the objects using assign ({} this is the empty object 
// given to store the object in this
//   object ,obj1,obj2 ,obj3......)

const obj3=Object.assign({},obj1,obj2);

// same as array concept 
const obj4={...obj1,...obj2};
console.log(obj3);
console.log(obj3);

const users =[
     {
        id:1,
        email:"h@gmail.com",
     },{
        hello:1,
     },

    ]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // access keys of the object tinderuser
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLogged'));