const dup=[1,2,3,4,5,5,1,2];
uniqueChars =[...new Set(dup)]
console.log(`removed duplicates ${uniqueChars}`)

// function double(x)
// {
//   console.log(x)
// }
// const arry=[1,2,3,4,5];
// output = arry.map(double)


const arry=[1,2,3,4,5]
console.log(`map function ${arry.map(r=> r.toString(2))}`);
console.log(`filter function ${arry.filter(r=>r>3)}`)

//reduce function
const reduce=arry.reduce(function (acc,curr) {
    return acc = acc+curr;
},0);

console.log(reduce)

// max function using reduce function
const max = arry.reduce(function(acc,curr){
      if(curr>acc){
        acc=curr;
      }
      return acc;
},0)

console.log(max);

const users=[
  {firstname:'a', lastname:"b", age:26},
  {firstname:'a', lastname:"b", age:75},
  {firstname:'a', lastname:"b", age:50},
  {firstname:'a', lastname:"b", age:26},
]

  const output = users.reduce(function(acc,curr){
    if(acc[curr.age])
    {
      acc[curr.age]= ++acc[curr.age];
    }
    else{
      acc[curr.age]=1;
    }
     return acc;
  },{})


  console.log(output);

  var example='erw';
  var example='fff'
  console.log(example);


let firstname='abac'
firstname='123'
console.log(firstname)

//Arrow functions

const createObj =() => ({firstname:'naseer', lastname:'mohammed'})
console.log(createObj());

//closures
function abc(){
    var a=100;
 return function xyz(){
     console.log(100);
  }
}

z=abc();
z();

//Passing fuction as a argument or as a parameter to a function is called as HOC 
//here x is called as callback function & function y is called Higher Order function

function x(){
  console.log('called X');
}

function y(x){
   x();
}

y(x);

const Array=[2,6,7,9,10]

const square =(x)=>{
  console.log(x*x);
}

Array.map(square)


//trust issues with settimeout.

console.log('start')
// setTimeout(() => {
//   console.log('callback function');
// }, 0);
console.log('end')

//first class functions


// call apply and bind method

let name ={
  firstname:'Naseer 1',
  lastname:'Mohammed 1',
  printFullName: function(){
    console.log(this.firstname + " " + this.lastname)
  }
}  

name.printFullName();

//function borrowing

name2={
  firstname:'sachin',
  lastname:'Tendulkar'
}

name.printFullName.call(name2);

// function borrowing example 2

name3={
  firstname:'firstname 3',
  lastname: 'lastname 3'
}

printFullName3=function(hometown,state){
    console.log(this.firstname + " -- " + this.lastname + " from " + hometown + " " +  state);
}

printFullName3.call(name3,"Gopalapuram", "andhra pradesh");
// in apply we sent the data in the form of any array
printFullName3.apply(name3, ["Gopalapuram", "andhra pradesh"])



