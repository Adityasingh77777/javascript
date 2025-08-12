// new keyword ko samajho

function multiplyBy5(num){
    this.num=num
    return num*5
}

multiplyBy5.power=2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5(40));
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username= username 
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai= new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()
chai.increment();
chai.printMe()

// we live in meritocity not in equality


// prototype section start
let myName="Aditya"
console.log(myName.truelength);
