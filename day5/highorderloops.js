// for of 

// ["" , "" , ""]

// [{}, {} ,{}]

const arr= [1,2,3,4,5]

for(const num of arr){
    console.log(num); // this will return the value at each index 
}

const greetings = "hello world "

for (const greet of greetings ){
    if(greet == ' '){
        continue;
    }
    console.log(`Each char is ${greet}`);
}

// maps 

const map =new Map()

map.set ('IN', "India ");
map.set('USA' ,"America ")
map.set('Fr' ,"France")

// console.log(map)

for(const [key,value] of map){
    console.log(key, ':-' , value)
}

// const myObj={
//     game1:'NFS',
//     game2:'spiderman'
// }

// for(const [key,value] of myObj){
//     console.log(key , ':-' , value);
// } 

// objects are not iterables in for of 

// +++++++++++++++++ for in +++++++++++++++++++
// for in is used to iterate objects 
const obj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'Swift by apple'
}

for(const key in obj){
    console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ["js" , "rb" , "py" , "java" ,"cpp"]

for (const key in programming) {
       console.log(programming[key])
       console.log(key); // this will return index not value 
}

// for of  will be used in array 
// for in will be used in objects 


// forEach loop is used as callback function 
const coding = ["js" , "ruby" ,"swift " , "python "]

coding.forEach(function (item) {
     console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function Printme(items){
    console.log(items)
}

coding.forEach(Printme)

// coding.forEach((item,index, arr) =>{
//     console.log(item,index, arr);
// })

// const myCoding=[{
//     language:"javascript",
//     languageFileName:"js",
// }   ,
//     {
//         language:"java",
//         languageFileName:"java",
//     },
//     {
//         language:"python",
//         languageFileName:"py"
//     }
// ]

// myCoding.forEach((item) =>{
//     console.log(item.language);
// })

// const cod = ["js" ,"ruby" , "java" ,"python", "cpp"]
// const values = coding.forEach((item) => {
//     return item
// })

// console.log(values); forEach will not return any values 

const myNums= [1,2,3,4,5,6,7,8,9,10] 

const newNums= myNums.filter( (nums) => {
    return nums>4
} )

// by using forEach
const newNum=[]
myNums.forEach((num) =>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum)
console.log(newNums)

const books = [
    {
        title:'Book one' , genre:'fiction' ,  publish: 1986 , edition: 1996
    },
    {
        title:'Book Two' ,genre:'Non-fiction' , publish:1992 ,
        edition :2008
    },
    {
        title:'Book Three' , genre:'history' ,publish:1998 ,edition:2007
    },
    {
        title:'Book Four' , genre:'Non-Fiction' , publish:1989,edition:2010
    },
    {
        title:'Book Five' ,genre:'Science' ,publish:1987 ,edition:1996
    },
]

const userBooks= books.filter((bk) => bk.genre==='Non-Fiction')
console.log(userBooks);
const userB=books.filter((bk) =>{
    return bk.publish >=1996
})
console.log(userB)

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNumbers=myNumbers
    .map((num) => num*10)
    .map((num) => num+1)
    .filter((num) => num >=40)

console.log(newNumbers);


