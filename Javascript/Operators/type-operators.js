/* Kiểu dữ liệu (Type Operators): typeof, instanceof */

let str = 'ThanhPhucNguyen'
let num = 10
let isTrue = true
console.log(typeof str) // string
console.log(typeof num) // number
console.log(typeof isTrue) // boolean
console.log(typeof {}) // object
console.log(typeof []) // object
console.log(typeof null) // object: một chiếc bug của Javascript
console.log(typeof undefined) // undefined

// Kiểu dữ liệu
if (typeof str === 'string') {
  console.log('str là một chuỗi')
}
