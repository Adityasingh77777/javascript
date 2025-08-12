const name="hitesh"
const repoCount=50

// console.log(name + repoCount +"Value");
// above code is old
// new code

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// dollar sign is used to concatenate strings 
const gameName=new String('hitesh');
// object 

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());

const newString=gameName.substring(0,4);
console.log(newString);
const anotherString= gameName.slice(1,4)
console.log(anotherString);

const newStringOne="hitesh";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://m.youtube%20.com/";
console.log(url.replace('%20', '-'))
console.log(url.includes('sunder'));
console.log(gameName.split('-'));
