const object ={
  firstname:'Naseer',
  lastname:'Mohammed',
  city:'andhra pradesh',
  printFullName:function (){
    console.log(this.firstname + " " + this.lastname)
  }
}

object2 ={
  name:'dummy'
}


object2.__proto__=object;
console.log(object2.city);