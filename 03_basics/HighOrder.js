// // for of

// const arr=[ 1,2,3,4,5]

// for (const num of arr) {
//     // console.log(num);  
// }

// const greeting ="hello world"

// for (const greet of greeting) {
//     // console.log(`Each char is ${greet}`);
// }

// // map

//  const map = new Map()

// map.set('IN',"INDIA")
// map.set('JPN',"JAPAN")
// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, '-', value);
// } 

// const myObject = {
//     js: 'Javascript',
//     cpp: 'c++',
//     rb:"ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//       console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming =["js", "rb", "py"]

for (const key of programming) {
    console.log(programming[key]);
}