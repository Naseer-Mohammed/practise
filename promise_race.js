// it gives the result which ever executes first either it may be success or failure
//first come first serve either it may be success or failure.

let promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolved 1")
	}, 1002)
})

let promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Rejected 2")
	}, 1000)
})

Promise.race([promise1, promise2])
	.then((result) => console.log(result))
	.catch((error) => console.log(error))
