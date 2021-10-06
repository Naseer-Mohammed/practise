let person = {
	name: "Leela",
}

let handler = {
	set: function (obj, key) {
		return Reflect.get(obj, key)
	},
}

let { proxy, revoke } = Proxy.revocable(person, handler)
revoke()
//console.log(proxy.name)
console.log(person.name)
