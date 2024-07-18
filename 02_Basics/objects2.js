// const tinder = new Object() singleton object
const tinderUser= {} //Non singleton object,

tinderUser.id ="123abc"
tinderUser.name= "Dhruv"
tinderUser.islogged= true;

// console.log(tinderUser);

const regularUser = {
    email: "dhruv@gmail",
    fullname:{
        userfullname:{
            firstname:"Dhruv",
            lastname:"Sood"
        }
    }
}

// console.log(regularUser.fullname.userfullname);


const obj1={1:"a" , 2:"b"}
const obj2={3:"c" , 4:"d"}
const obj4={5:"c" , 6:"d"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1,obj2) both will give same result but below one is guranteed result
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3= {...obj1,...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isloggednin'));

// Object destruction and APIs

const course ={
    name:"dhruv",
    price:"10",
    instructor: "sood"
 }

const {instructor: inst} = course
// console.log(instructor);
console.log(inst);

//json
// {
//     "name":"dhuv",
//     "price":"free",
// }

[
  {},
   {},
   
]