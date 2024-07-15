let myDate =  new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let mynewDate = new Date(2024,0,24,5,3);
// console.log(mynewDate.toDateString());
// console.log(mynewDate.toLocaleString());

let myCreatedDate = new Date("01-14-2024");

let myTimeStamp=  Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getMonth());

myDate.toLocaleString('default', {
    weekday: "long",
})




