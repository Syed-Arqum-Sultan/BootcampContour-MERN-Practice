// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const arr = [["arqum",'sultan',1],["alu",'sun',2],["ramee",'hen',3]]

const arr2= arr.map(x=>{
return{
  firstName:x[0],
  lastName:x[1],
  id:x[2]
}
})
 console.log(arr2)
 