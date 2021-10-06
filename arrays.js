let array = Array(5)
console.log(array)

let array1 = Array.of(5)
console.log(array1)

let array2 = Array.of(10, 12, 30)
console.log(array2)

let oldArray = [1, 2, 3, 4, 5]
let newArray = Array.from(oldArray, (val) => {
	return val * 10
})

console.log("old array " + oldArray)
console.log("new array " + newArray)

// fill method
let array3 = Array.of(10, 11, 13)
array3.fill(100)
console.log(array3)
let array4 = Array.of(10, 11, 13)
array4.fill(100, 0, 1)
console.log(array4)
let array5 = Array.of(10, 11, 13)
array5.fill(100, 0, 2)
console.log(array5)

// always find returns only single value.
let array6 = Array.of("Tom", "Tom", "king", "Queen")
const arrFind = array6.find((val) => val === "Tom")
console.log(arrFind)

let array7 = [
	{ name: "apples", quantity: 12 },
	{ name: "oranges", quantity: 13 },
	{ name: "kiwi", quantity: 14 },
]

const obj7 = array7.find((val) => val.name == "apples")
console.log(obj7)

function findApples(fruitObj) {
	//return (fruitObj.name = "apples")
	console.log(fruitObj)
}

console.log(array7.find(findApples))
