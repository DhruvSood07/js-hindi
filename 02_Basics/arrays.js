 // Arrays

 const myArr = [0,1,2,3,4,5];
//  console.log(myArr);

//Shallow copy 
//Deeo copies

//Array methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(7);
// myArr.unshift(9);
// myArr.shift(); 

//    
// const newArr = myArr.join(); // converts arrat to string
// console.log(myArr);
// console.log(typeof newArr);

// slice , splice.

console.log("A ",myArr);

const myn1= myArr.slice(1,3)  //creates a copy of array last range not included
 
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3); //change from original array
console.log("C" ,myn2)

 