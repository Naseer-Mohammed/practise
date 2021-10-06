class Person {
	constructor() {}

	get names() {
		console.log(`my name is ${this.name}`)
	}

	set names(value) {
		this.name = value
	}
}

let person = new Person()
person.names = "naseer mohammed"
person.names
