const marvel_heros = ["thor", "dhruv", "sood"]
const dc = ["mia", "leone", "jonny"]

// marvel_heros.push(dc); 
// console.log(marvel_heros) // array within array

// console.log(marvel_heros[3][0])

// const all_heros = marvel_heros.concat(dc);
// console.log(all_heros) //same array within array

const otherArr = [...marvel_heros, ...dc];
console.log(otherArr)

const anotherArry = [1,2,3 ,[4,5,6] , 7, [6,7, [4,5]]]

const real_another_array = anotherArry.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Dhurv"))
console.log(Array.from("Dhruv"))
console.log(Array.from({name: "dhruv"}))

let score1= 100;
let score2= 200;
let score3= 300;

console.log(Array.of(score1,score2,score3))
