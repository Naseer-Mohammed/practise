class Person {
	constructor(name) {
		this.name = name
	}

	myfunction() {
		console.log(`this is my name ${this.name} and my age is ${this.age}`)
	}
}

let person = new Person("Naseer Mohammed")
//person.myfunction()

class xyz extends Person {
	constructor(name, age) {
		super(name)
		this.age = age
		super.myfunction()
	}
}

let xyz1 = new xyz("naseer mohammed", 30)
xyz1.myfunction()
