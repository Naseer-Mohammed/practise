let sum = function (a) {
	return function (b) {
		console.log(a, b)
		return b ? sum(a + b) : a
	}
}

console.log(sum(10)(20)(30)(40)())
