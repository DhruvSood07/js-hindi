  // singleton

  // object.create

  //object literals

  const mysym = Symbol("KEY1"); 
  
const JsUser = {
    name: "Dhruv",
    age:18,
    mysym:"KEY10",
    islogged: false,
    lastlogin:["mon","sun"]
}

// console.log(JsUser.name);
// console.log(JsUser["age"]);
// // console.log(mysym);
// console.log(typeof JsUser.mysym);

// JsUser.name = "Dhruv"
// Object.freeze(JsUser)
// JsUser.name = "DhruvSood"
// console.log(JsUser);

JsUser.greeting =function(){
  console.log("Hello Js User");
}
JsUser.greetingtwo =function(){
  console.log(`Hii , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());