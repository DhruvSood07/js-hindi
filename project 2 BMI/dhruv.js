const form = document.querySelector('form')
// this usecase will give empty values
// const height= parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()
 const height= parseInt(document.querySelector('#height').value);
 const weight= parseInt(document.querySelector('#weight').value);
 const results= document.querySelector('#results').value;
    
 if(height=== ''|| height<0|| isNaN(height)){
    results.innerHTML = `Pleaee give a valid height ${height}`
 }
 else if(weight=== ''|| weight<0|| isNaN(weight)){
    results.innerHTML = `Pleaee give a valid height ${weight}`
 }
 else{
   const bmi= (weight/((height*height)/1000)).toFixed(2)
   //show results
   results.innerHTML `<span>${bmi}</span>`
 }
});