object = {
  firstname:'Naseer',
  lastname:'Mohammed',
  printFullNme:function(){
    console.log(this.firstname + " " + this.lastname);
  },
  city:'Hyderabad'
}

// object calling properties or methods in another object is called as
// prototypal inheritence.

object1={
  name:'andhra pradesh'
}

 object1.__proto__= object;
 console.log(object1.city);
 console.log(object1.printFullNme());
 console.log(object1.__proto__);
 console.log(object1.__proto__.firstname);


