class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}
}

let person = Reflect.construct(Person, ["Naseer", 32])
console.log(Reflect.get(person, ["name"]))

Reflect.defineProperty(person, "hobbies", {
	writable: false, // whether can be updatable or not
	value: ["Sports", "Cooking"],
	configurable: false, // whether the property can be deletable or not
})

console.log(Reflect.get(person, "hobbies"))
console.log(Reflect.ownKeys(person))
Reflect.set(person, "hobbies", ["nothing"])
console.log(Reflect.get(person, "hobbies"))
Reflect.deleteProperty(person, "hobbies")
console.log(Reflect.get(person, "hobbies"))
