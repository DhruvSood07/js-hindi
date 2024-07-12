  const name = 'dhruv'
  const repoCount = 50;

//   console.log(`Hello my name is ${name} and my body count is ${repoCount}`);

  const gameName =  new String("dhruv-sood");

  console.log(gameName[0]);

//   console.log(gameName.length);
//   console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3)); 
// console.log(gameName.indexOf("u"));

const newString = gameName.slice(0,3);
console.log(newString);

const newStringone ="    dhruv    ";
console.log(newStringone);
console.log(newStringone.trim());

const url = "https:/clscdc/dhruv/sood";
console.log(url.replace('dhruv','chak'));

console.log(url.includes('dhruv'));

console.log(gameName.split('-'));