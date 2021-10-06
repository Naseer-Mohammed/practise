let fruits = {
	name: "apples",
	places: "cool areas",
}

let vegetables = {
	name: "potato",
	places: "any place",
}

let basket = new Map()
console.log(basket)
console.log(basket.size)

basket.set("fruits", fruits)
basket.set("veggie", vegetables)
console.log(basket.size)
basket.set("veggie", vegetables)
basket.set("veggie", vegetables)
console.log(" the size will be the same no change " + basket.size)
console.log(basket.get("fruits"))
console.log(basket.get("veggie"))
basket.delete("fruits")
console.log(basket.get("fruits"))
// to delete entire basket
basket.clear()
console.log(basket.size)

let fruits1 = {
	name: "apples",
	places: "cool areas",
}

let vegetables1 = {
	name: "potato",
	places: "any place",
}

let basket1 = new Map()
basket1.set("fruits1", fruits1)
basket1.set("veggie1", vegetables1)

console.log(basket1.keys())

for (let keys of basket1.keys()) {
	console.log(keys)
}

for (let values of basket1.values()) {
	console.log(values)
}

for (let entries of basket1.entries()) {
	console.log("entries are " + entries.keys)
}

for (let entries of basket1) {
	console.log("entries are 1 " + entries)
}
