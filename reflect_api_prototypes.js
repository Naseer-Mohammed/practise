class Person {
	constructor(name) {
		this.name = name
	}
}

let person = new Person("Leela")
console.log(person)
console.log(person.__proto__)
console.log(Reflect.getPrototypeOf(person))
console.log(Reflect.getPrototypeOf(person) === Person.prototype)

//if we want to change the prototype
Person.prototype.age = 27
console.log(Reflect.getPrototypeOf(person))

let proto = {
	age: 30,
}

Reflect.setPrototypeOf(person, proto)
console.log(Reflect.getPrototypeOf(person))
