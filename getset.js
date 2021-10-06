class Person {
	constructor(name, age) {
		this._name = name
		this._age = age
	}

	get name() {
		return this._name
	}

	set name(value) {
		this._name = value
	}

	get age() {
		return this._age
	}

	set age(value) {
		this._age = value
	}
}

let user = {
	_name: "Naseer",
	_age: 32,
}

let person = new Person("Leela", 30)
console.log(Reflect.get(person, "name"))

Reflect.set(person, "name", "Jhon")
console.log(Reflect.get(person, "name"))

console.log(Reflect.get(person, "name", user))
console.log(Reflect.get(person, "age", user))

Reflect.set(person, "name", "mohammed", user)
Reflect.set(person, "age", "40", user)

console.log(Reflect.get(person, "name", user))
console.log(Reflect.get(person, "age", user))

console.log(Reflect.has(person, "name"))
console.log(Reflect.ownKeys(person))
