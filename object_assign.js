let obj1 = {
	name: "Leela",
}

let obj2 = {
	age: 20,
}

let obj = Object.assign(obj1, obj2)
console.log(obj)
let objs = { ...obj1, ...obj2 }
console.log(objs)

var person = {}
var boss = { name: "jhon" }
Object.setPrototypeOf(person, boss)
console.log(person.name)
