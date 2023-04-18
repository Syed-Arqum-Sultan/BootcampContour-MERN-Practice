// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const arr = [["arqum",'sultan',1],["alu",'sun',2],["ramee",'hen',3]]




//x is element in array i is index
const arr2= arr.map((x,i)=>{
  console.log(i)
  return{
  
  firstName:x[0],
  lastName:x[1],
  id:x[2]
}
})
 console.log(arr2)


/////////////For a typical function, the value of this is the object that the function is accessed on. In other words, if the function call is in the form obj.f(), then this refers to obj. For example:
////Note how the function is the same, but based on how it's invoked, the value of this is different. This is analogous to how function parameters work.
function getThis() {
  return this;
}

const obj1 = { name: "obj1" };
const obj2 = { name: "obj2" };

obj1.getThis = getThis;//here we are passinf getThis function() obj.getThis
obj2.getThis = getThis;

console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }

 //////this key word binding in normal functions and arrow functions



  const person = {
    name: "arqum",
    bio:function(){
      return this.name;
    }
  }
console.log(person.bio())
 ///here this is working and binding in normal function scope, but we will se how it behaves in arrow function
 let name = 'ahad';
 const person2 = {
   name:"ahad", 
   bio: ()=>{
     console.log(this.name);
   }
 }
 person2.bio()