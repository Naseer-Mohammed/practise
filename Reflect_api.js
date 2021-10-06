class Person {
	constructor(name) {
		this.name = name
	}
}

function sample() {}

let person = Reflect.construct(Person, ["Leela"])
console.log(person)
console.log(person instanceof Person)
console.log(person.__proto__ === Person.prototype)

let person1 = Reflect.construct(Person, ["Leela"], sample)
console.log(person1.__proto__ === Person.prototype)
console.log(person1.__proto__ === sample.prototype)
console.log(person1)
