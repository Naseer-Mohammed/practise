const array = [1, 2, 3, 4, 5, 6]

for (let arr of array) {
	console.log(arr)
}

const Obj = {
	firstname: "naseer",
	lastname: "mohammed",
	age: 30,
}

for (let prop in Obj) {
	console.log(prop, Obj[prop], Obj.prop)
}
