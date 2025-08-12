const myNums=[1,2,3,4]

const initialvalue =0
// const myTotal = myNums.reduce (function(acc,currval){
//     console.log(`acc : ${acc} and currval: ${currval}`)
//     return acc+currval
// } , 0 )

const myTotal = myNums.reduce((acc,currval) => {
    return acc+currval
},0 )

console.log(myTotal);

console.log("I wanna become great of greats ")

const shoppingCart =[
{    itemName:"js course",
        price:900
},
    {
        itemName:"App development course",
        price:500
    },

    {
        itemName:"Data scientist " ,
        price:400
    }
]

const Total=shoppingCart.reduce((acc, item) => acc+item.price ,0)
console.log(Total);

