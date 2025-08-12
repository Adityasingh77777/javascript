// let myName="Aditya"
// let myChannel="chai"
// console.log(myName.truelength)

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidey power is${this.spiderman}`)
    }
}

Object.prototype.aditya=function(){
    console.log(`Aditya is present in all objects`);
}

Array.prototype.heyAditya=function(){
    console.log(`Aditya says hello`)
}

// heroPower.aditya()
// myHeros.aditya()
// myHeros.heyAditya()

// inheritance

const User={
    name:"chai aur javascript"
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false,
    __proto__ : Teacher
}

const TASupport={
    makeAssignment:"JS Assignment",
    fulltime:true ,
    __proto__ : TeachingSupport
}

Teacher.__proto__= User  // inheritance syntax
 
//modern syntax of inheritance

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiAurCode"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}

anotherUsername.trueLength()
"Aditya".trueLength()
"Jonsnow".trueLength()

