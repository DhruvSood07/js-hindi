function  sayName() {
    console.log("D");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
}

// sayName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+ number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}

const result = addTwoNumbers(5,8);
// console.log("Result: " , result);

function loginUserMessage(username){
    if(username===undefined){
        // console.log("Please enter valid user name")
        return
    }
    return `${username} just logged in`
} 

// console.log(loginUserMessage("Dhruv")) 
// console.log(loginUserMessage( ))

function calculateCartPrice (val1 , val2, ...num1){ //rest item 
    return num1;
}

// console.log(calculateCartPrice(200,400,900));

// const user = {
//     username: "dhruv",
//     price: 200
// }

// function handleObject (anyobject){
//     console.log(`username is ${anyobject.username} and price is${anyobject.price}`);
// }

// handleObject()

const mynewArray =[200,300,400,450]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewArray));