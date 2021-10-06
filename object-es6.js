let firstname = "naseer"
let lastname = "mohammed"
let age = 30
let myfunction = "functionName"

const myObject = {
	firstname,
	lastname,
	age,
	hello() {
		console.log(this.firstname + "---" + this.lastname + "---" + this.age)
	},
	[myfunction]() {
		console.log("This is another way")
	},
}

console.log(myObject.hello())
console.log(myObject[myfunction]())
