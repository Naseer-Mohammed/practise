name={
  firstname:'Naseer',
  lastname:'Mohammed'
}

printFullName=function(){
  console.log(this.firstname + " " + this.lastname);
}

//function borrowing.
printFullName.call(name);
printFullName.apply(name);

//creating the copy of the method, which can be called later.
printFullName1= printFullName.bind(name);
console.log(printFullName1());



