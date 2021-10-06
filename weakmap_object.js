let fruits = {
	name: "apples",
}

let vegetables = {
	name: "potato",
}

let a = { a: 1 }
let b = { b: 1 }

let basket = new WeakMap()
basket.set(a, fruits)
basket.set(b, vegetables)

console.log(basket.get(a))
console.log(basket.get(b))
