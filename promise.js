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
		console.log("error is" + err)
	})
