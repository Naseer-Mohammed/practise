//converting an array to list using spread operator
var array = [1, 2, 3, 4, 5]
console.log(...array)

//converting an list to array using rest operator.
function list(...mylist) {
	console.log(mylist)
	let max = 0
	return mylist.reduce((acc, curr) => {
		if (curr > max) {
			max = curr
		}
		return max
	}, {})
}

console.log(list(1, 2, 3, 4, 5, 6))
console.log(Math.max(...array))
