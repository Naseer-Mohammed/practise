let symbol1 = Symbol.for("age")
let symbol2 = Symbol.for("age")
console.log(symbol1 == symbol2)

person = {
	name: "Leela",
	age: 27,
}

function makeAction() {
	let symbol = Symbol.for("age")
	person[symbol] = 30
}

makeAction()
console.log(person[symbol1])
console.log(person.age)

class Admin {}
let admin = new Admin()
console.log(admin)
console.log(admin.toString())

class Charminar {}
Charminar.prototype[Symbol.toStringTag] = "charminar"
let charminar = new Charminar()
console.log(charminar)

let numbers = [1, 2, 3, 4]
console.log(numbers)

numbers[Symbol.toPrimitive] = function () {
	return 99
}

console.log(numbers + 1)
