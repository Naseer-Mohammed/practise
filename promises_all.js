let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolved 1")
	}, 1000)
})

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Rejected 2")
	}, 1000)
})

Promise.all([promise1, promise2])
	.then((result) => console.log(result))
	.catch((error) => console.log(error))

// promise all check for whether all the promises are exexuted or not else it will give you the
//rejected result.
