/* Javascript Execution context 
{} -> Global Execution context
 

Global Execution context 
Functional Execution context 
Eval Execution context 

{} -> Memory Creation phase / Creation phase
   -> Executio  Phase
*/

let val1= 10;
let val2 = 5;

function addNum(num1, num2){
    let total =num1+ num2
    return total

}
let result1 = addNum(val1, val2)
let result2 = addNum(3 , 6) 