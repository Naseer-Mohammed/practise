let multiply= function(x,y){
   console.log(x*y);
}

let multiplytwo = multiply.bind(this,10);
console.log(multiplytwo(2));

let multiplythree = multiply.bind(this,10);
console.log(multiplythree(3));

function multiplication(x){
  return function multiplication1(y){
    console.log(x+y)
  }
}

mult1=multiplication(1);
console.log(mult1(9));
