let Object = {
	name: "Leela",
	age: 30,
	hello: function () {
		console.log("function is working")
	},
}

const { name, age, hello } = Object
console.log(name)
console.log(age)
hello()

const Object1 = {
	name1: "Naseer",
	hello1: function () {
		console.log("working with function 2")
	},
}

const { name1, hello1 } = Object1
console.log(name1)
hello1()
