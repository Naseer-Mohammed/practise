const list = [
	"Tom",
	"Jerry",
	"Thomas",
	"Tom",
	"Jerry",
	"Courage",
	"Tom",
	"Courage",
]

// let multiplevalues = []
// let output = list.reduce((acc, curr) => {
// 	if (!multiplevalues.includes(curr)) {
// 		multiplevalues.push(curr)
// 	}
// })

// console.log(multiplevalues)

let output1 = list.reduce((acc, curr) => {
	if (acc[curr]) {
		acc[curr] = acc[curr] + 1
	} else {
		acc[curr] = 1
	}
	return acc
}, {})

console.log(output1)

let output2 = list.filter((a) => {
	if (a == "Tom") return a
})

console.log(output2)

let output3 = list.find((a) => {
	if (a == "Tom") return a
})

console.log(output3)

let values = []
list.forEach((a, b) => {
	if (!values.includes(a)) {
		values.push(a)
	}
})

console.log(values)

const arr1 = [
	{ x: "1", y: "2", z: "3" },
	{ x: "5", y: "7", z: "0" },
	{ x: "8", y: "1", z: "7" },
	{ x: "2", y: "6", z: "1" },
]

var dup = []
var output22 = arr1.map((key, value) => {
	return { x: key.x, z: key.z }
})

console.log(output22)

var myObject = {
	ircEvent: "PRIVMSG",
	method: "newURI",
	regex: "^http://.*",
}
delete myObject.regex

myObject.name = "zameer"
myObject["lastname"] = "Mohammed"

console.log(myObject)

arr1.reduce((acc, curr) => {
	delete curr.y
}, {})

console.log(arr1)

const arr = ["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"]

let output = arr.reduce((acc, curr) => {
	if (acc[curr]) {
		acc[curr] = acc[curr] + 1
	} else {
		acc[curr] = 1
	}
	return acc
}, {})

console.log(output)

for (let prop in output) {
	if (output[prop] == 2) {
		console.log(prop)
	}
}

function a(x) {
	setTimeout(() => {
		return x("Naseer")
	}, 5000)
}

b = function (t) {
	console.log(t)
}

a(b)

let promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("abc")
	}, 5000)
})

promise
	.then((res) => {
		console.log(res)
	})
	.catch((err) => {
		console.log(err)
	})

const myarray100 = [6, 0, 9, 0, 4, 0]
const myarray101 = myarray100.filter((x) => x > 0)
const myarray102 = myarray100.filter((x) => x == 0)
console.log(myarray101, myarray102)
console.log(...myarray101, ...myarray102)
