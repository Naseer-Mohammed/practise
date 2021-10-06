function* select() {
	yield 1
	yield 2
}

let iteritable = select()
console.log(iteritable.next())
console.log(iteritable.next())
console.log(iteritable.next())

function* gen() {
	yield "hobbies"
	yield "cooking"
}

obj = {
	[Symbol.iterator]: gen,
}

for (let element of obj) {
	console.log(element)
}

console.log("Example 1--------")

function* iter(end) {
	for (let i = 0; i < end; i++) {
		yield i
	}
}

let itfn = iter(3)
console.log(itfn.next())
console.log(itfn.next())
console.log(itfn.next())
console.log(itfn.next())

function* iter1(end) {
	for (let i = 0; i < end; i++) {
		try {
			yield i
		} catch (e) {
			console.log(e)
		}
	}
}

console.log("Example 2--------")

let itfn1 = iter1(3)
console.log(itfn1.next())
console.log(itfn1.throw("error occured"))
console.log(itfn1.next())
console.log(itfn1.next())

console.log("Example 3---------")

function* iter2(end) {
	for (i = 0; i < end; i++) {
		try {
			yield 1
		} catch (e) {
			console.log(e)
		}
	}
}

let itfn2 = iter2(3)
console.log(itfn2.next())
console.log(itfn2.return("returned here"))
console.log(itfn2.next())
console.log(itfn2.next())
