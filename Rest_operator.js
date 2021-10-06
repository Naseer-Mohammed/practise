function sum(array) {
	let result = 0
	for (let i = 0; i < array.length; i++) {
		result = result + array[i]
	}
	return result
}

console.log(sum([10, 20, 30]))

//2. sending it as arguments
function sum1(array) {
	let result = 0
	for (let i = 0; i < arguments.length; i++) {
		result = result + arguments[i]
	}
	return result
}

console.log(sum1(10, 20, 30))

//3. Using rest Operator
function sum2(...abc) {
	console.log(abc)
	let result = 0
	for (let i = 0; i < abc.length; i++) {
		result = result + abc[i]
	}
	return result
}

console.log(sum2(10, 20, 30))

function fun(...input) {
	let sum = 0
	for (let i of input) {
		sum += i
	}
	return sum
}
console.log(fun(1, 2)) //3
console.log(fun(1, 2, 3)) //6
console.log(fun(1, 2, 3, 4, 5)) //15
