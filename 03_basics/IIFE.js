// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) =>{
    console.log(`Db 2 conneted ${name}`)
})('Dhruv')