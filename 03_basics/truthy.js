const userEmail = "Dhruv@.si"

if(!userEmail){
        console.log("Dhruv");
}
else{
        console.log("DONT");
}

//falsy valuess

// false, 0 , -0, BigInt 0n, "", null, undefined ,NaN

//Truthy values

// "0", 'false' , [], {}

const emptyObj ={};

if(Object.keys(emptyObj).length===0){
        console.log("Object is empty");
}

// Nullish coalescing Operater  (??):null undefined

let val1;
// val1 =  5 ?? 10 
// val1 =  null ?? 10 
val1 =  undefined ?? 10 


console.log(val1)

//ternary operator  

// condition ? true : false

const iceTea = 100;

iceTea >10 ? console.log("<80") : console.log(">80")