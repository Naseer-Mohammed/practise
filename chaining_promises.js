function waitAsecond(seconds) {
	return new Promise((resolve, reject) => {
		seconds++
		if (seconds > 10) {
			reject("api failed")
		} else {
			setTimeout(() => {
				resolve(seconds)
			}, 1000)
		}
	})
}

waitAsecond(0)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then(waitAsecond)
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
