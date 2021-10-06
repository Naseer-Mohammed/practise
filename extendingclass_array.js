class ExtendableArray extends Array {
	multiplyby2() {
		let returnArray = []
		this.forEach((value) => returnArray.push(value * 2))
		return returnArray
	}
}

let array = new ExtendableArray()
array.push(1)
array.push(2)
array.push(3)
console.log(array)
console.log(array.multiplyby2())
