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
