// in ES5 format...
// function Person() {
// 	this.name = "Naseer"
// }

// let person = new Person()
// console.log(person.name)

// ES6 Class Creation
class Myclass {
	constructor(name) {
		this.name = name
	}
	myfucntion() {
		console.log(`my name is ${this.name}`)
	}
}

let myclass = new Myclass("naseer")
myclass.myfucntion()
