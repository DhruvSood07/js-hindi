// var c =300;
let a =300

if(true){
    let a=10
const b=20

// console.log("Inner: ", a);
} 

// console.log(a);
// console.log(b);
// console.log(c);

//nested scope

function one(){
    const username ="Dhruv"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one() 

if(true){
    const username ="Dhruv"
    if(username === "Dhruv"){
        const website =" youtube"
        // console.log(username+website);

    }
    // console.log(website);
}

// console.log(username);

// *********************************  interesting ******************************

// addone(5)  this can execute
function addone(num){
    return num+1;

}
addone(5);


// addTwo() we cant do this
const addTwo = function(num){
    return num+2
}

addTwo(8);