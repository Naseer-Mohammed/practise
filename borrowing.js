name ={
  firstname:'Naseer',
  lastname:'Mohammed',
  printFullName:function(){
    console.log(this.firstname + " " + this.lastname);
  }
}

name.printFullName();

name2={
  firstname:'Naseer 2',
  lastname:'Mohammed 2'
}

printFullName2=function(hometown,state){
  console.log(this.firstname + " " + this.lastname + " "+ " from " + hometown + " " + state );
}

printFullName2.call(name2,'andhra pradesh','gopalapuram');
printFullName2.apply(name2,['andhra pradesh','gopalapuram'])

printFullName3 = printFullName2.bind(name2,'andhra pradesh','gopalapuram')
console.log(printFullName3());



