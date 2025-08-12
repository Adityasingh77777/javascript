// for 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element ==5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let index = 0; index < 10; index++) {
    console.log(`Outer loop value is :${index}`);
    for(let j=0;j<=10;j++){
        // console.log(`Inner loop value ${j} and Inner loop value is :${index}`);
        console.log(index + '*' + j + '=' + index*j);
    }
}

let myArray=["flash " ,"batman " , "superman"]

for(let index =0;index <myArray.length;index++){
    const element = myArray[index];
    console.log(element);
}

// break and continue 

for(let index = 1;index<=20 ;index++){
    if(index == 5){
        console.log(`Detected 5`);
        continue // this will continue looping without 
        // printing the looping statement 
    }
    console.log(`value of i is ${index}`);
}