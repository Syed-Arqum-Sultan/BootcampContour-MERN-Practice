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


 //callbacks (below example shows working without callbacks!)

 function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
myDisplayer(result);

///same action using callbacks!
////promises
// function job() {
    
//   return new Promise((resolve)=>{

//       setTimeOut(
//         ()=>
//       resolve('hello world')
//       ,2000);
  
//     }) ;
// }
// console.log(job())


///promise practice 2 
function job(data) {
  let promise = new Promise((resolve, reject)=>{
      
      if(isNaN(data)){
        return promise.reject("error");
      }
      if(data%2==1){
        setTimeOut(()=>resolve('odd'),1000)
      }
      if(data%2==0){
        setTimeOut(()=> reject("even"), 2000)
      }
      
  });
  return promise
}
console.log(job(35));


////promise chaining 



var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';/// returning this will create an auto resolve promise, here an auto resolve promise is created 
}) 

.then(function(data3) {
    console.log('data3', data3);
})//here as we are not returning anything the return will have a auto resolve promise which will have a value of undefined as we are not returnuig abything! 

.then(function(data4){
  console.log("data4", data4);
})
function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}
