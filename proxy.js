let person = {
	name: "Leela",
}

let handler = {
	get: (obj, key) => {
		return key in obj ? obj[key] : "age not found"
	},
	set: (obj, key, value) => {
		if (value.length > 3) {
			Reflect.set(person, key, value)
		}
	},
}

let proxy = new Proxy(person, handler)
proxy.name = "jhon"
console.log(proxy.name)
