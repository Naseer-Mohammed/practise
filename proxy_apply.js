function log(message) {
	console.log("log message is " + message)
}

let handler = {
	apply: function (fname, thisarg, arglist) {
		if (arglist.length === 1) {
			console.log(fname, thisarg, arglist)
			Reflect.apply(fname, thisarg, arglist)
		}
	},
}

let proxy = new Proxy(log, handler)
proxy("naseer")
