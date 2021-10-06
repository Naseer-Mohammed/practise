let array = [1, 1, 1]
console.log(array)

let set = new Set([1, 2, 3])
console.log(set)

set.add(5)
set.add(5)
set.add(6)
set.add(6)

console.log(set.size)

for (let value of set) {
	console.log(value)
}

for (let value of set.entries()) {
	console.log(value)
}

for (let value of set.keys()) {
	console.log(value)
}

for (let value of set.values()) {
	console.log("values are " + value)
}

// delete, it will directly delete the value 1
console.log(set.delete(1))
console.log(set.has(1))
console.log(set)
set.clear()
console.log(set)
