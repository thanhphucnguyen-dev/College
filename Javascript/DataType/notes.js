/*
    * Javascript là ngôn ngữ được định kiểu dữ liệu linh hoạt (dynamic). Nó tiện lợi nhưng cũng đồng
      nghĩa với việc xảy ra những bug phát sinh trong quá trình development nếu chưa nắm được cốt lõi
      về các kiểu dữ liệu.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#dynamic_and_weak_typing

    --> Lý do mà Typescript ra đời...
*/

let x // Now x is undefined
x = 7 // Now x is Number
x = 'Hello' // Now x is string
x = true // Now x is boolean
x = null // Now x is null
x = undefined // Now x is undefined 
console.log(x)

/**VD sự khác nhau giữa Primitive và Refenrence */

// Primitive
let username = 'ThanhPhucNguyen'
let usernameCopy = username
usernameCopy = 'ThanhPhucNguyen - FullStack Developer'
console.log('Username: ', username)
console.log('usernameCopy: ', usernameCopy)
console.log('----------------------------')

// Refenrence
let objectA = { username: 'ThanhPhucNguyen' }
let objectB = objectA  // lúc này thì cả 2 đang cùng tham chiếu đến một đối tượng
objectB.username = 'ThanhPhucNguyen - FullStack Developer'
console.log('objectA: ', objectA)
console.log('objectB: ', objectB)

