/** Array */
/**Phần 1: push(), pop(), unshift(), shift(), forEach(), map(), filter(), find(), reduce(), some() **/

// Tạo array chứa các số 1-> 5
let numbers = [1, 2, 3, 4, 5]
console.log('Độ dài của numbers: ', numbers.length)

/**A. THÊM/XÓA PHẦN TỬ */

// push() - Thêm phần tử vào cuối cùng của mảng
numbers.push(6)
console.log('After push: ', numbers)

// pop() - Xóa phần tử cuối cùng của mảng
numbers.pop()
console.log('After pop: ', numbers)

// unshift() -  Thêm phần tử vào đầu mảng
numbers.unshift(0)
console.log('After unshift: ', numbers)

// shift() - Xóa phần tử đầu mảng
numbers.shift()
console.log('After shift: ', numbers)

/**B.  */

// forEach() - lặp qua từng phần tử của mảng
console.log('Start forEach: ')
numbers.forEach((number, index) => {
    console.log(`Index:  ${index} - Value: ${number}`)
})

// map() - Tạo mảng mới với các phần tử biến đổi từ mảng gốc
console.log('Start map: ')
let squaredNumbers = numbers.map((number) => {
    return number * number
})
console.log('After map() - squaredNumbers: ', squaredNumbers)

// filter() - Tạo một mảng mới với các phần tử thỏa mãn điều kiện
let evenNumbers = numbers.filter((number) => {
    return number % 2 === 0
})
console.log('After filter() - evenNumbers: ', evenNumbers)

// find() - Tìm phần tử đầu tiên thỏa mãn điều kiện
let foundNumber = numbers.find((number) => {
    return number > 3
})
console.log('After find() - foundNumber: ', foundNumber)

// reduce() - Tính toán một giá trị duy nhất từ mảng
let sum = numbers.reduce((total, number) => {
    return total + number
}, 0)
console.log('After reduce() - sum: ', sum)

// some() - Kiểm tra mảng có ít nhất một phần tử thỏa mãn điều kiện hay không, trả về boolean
let hasEvenNumber = numbers.some((number) => {
    console.log('Test method some(): ', number)
    return number % 2 === 0
}) 
console.log('After some() - hasEvenNumber: ', hasEvenNumber)
