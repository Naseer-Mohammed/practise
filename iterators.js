let numbers = [1, 2, 3]
let itfn = numbers[Symbol.iterator]()
console.log(itfn.next())
console.log(itfn.next())
console.log(itfn.next())
console.log(itfn.next())

numbers[Symbol.iterator] = function () {
	let nextValue = 10
	return {
		next: function () {
			nextValue++
			return {
				done: nextValue > 15 ? true : false,
				value: nextValue,
			}
		},
	}
}

for (let value of numbers) {
	console.log(value)
}

// Custom iteriable object.
person = {
	name: "Leela",
	hobbies: ["Sports", "Cooking"],
	[Symbol.iterator]: function () {
		let i = 0
		let hobbie = this.hobbies
		let name = this.name
		return {
			next: function () {
				value = hobbie[i]
				i++
				return {
					done: i > hobbie.length ? true : false,
					value: `${name} is good at ${value}`,
				}
			},
		}
	},
}

for (let hobby of person) {
	console.log(hobby)
}
