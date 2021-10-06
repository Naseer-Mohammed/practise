let numbers = [1, 2]
let a = numbers[0]
let b = numbers[1]
console.log(a, b)

//ES6  syntax
let [x, y] = numbers
console.log(x, y)

let array = [1, 2, 3]
let [p, , q] = array
console.log(p, q)

// swapping can be done easily...
// let xx = 1
// let yy = 2
// let [yy, xx] = [xx, yy]
// console.log(xx, yy)

let t = [1, 9, 10, 11, 15, 16]

let [g, ...h] = t
console.log(g, h)
