let symbol = Symbol("debug")
let anothersymbol = Symbol("debug")

const obj = {
	name: "Leela",
	[symbol]: 22,
}

console.log(symbol == anothersymbol)
console.log(obj)
console.log(obj[symbol])
for (let prop in obj) {
	console.log(prop, obj[prop])
}
