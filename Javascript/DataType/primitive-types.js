/**Nhóm các kiểu dữ liệu nguyên thủy Primitive Types **/
/**
 * Các giá trị nguyên thủy được lưu trữ trực tiếp trong ngăn xếp (stack).
 * Khi một giá trị nguyên thủy được gán cho  một biến, giá trị này không thể thay đổi (immutable).
 * Khi thay đổi giá trị của biến, một bản sao độc lập của giá trị đó sẽ được tạo ra.
 * Primitive Types bao gồm các kiểu dữ liệu phổ biến sau:  
 */

// Number: Đại diện cho các số, bao gồm cả số nguyên và số thập phân
let age = 20
let productPrice = 10.99
console.log('Age: ', age)
console.log('Typeof age: ', typeof(age))
console.log('ProductPrices: ', productPrice)
console.log('Typeof ProductPrices: ', typeof(productPrice))
console.log('--------------------')

// String: Đại diện cho các chuỗi kí tự
let username = "ThanhPhucNguyen"
console.log('Username: ', username)
console.log('Typeof usename: ', typeof(username))
console.log('--------------------')

// Boolean: Đại diện cho các giá trị đúng (true) hoặc sai (false)
let isAvailable = true
console.log('isAvailable: ', isAvailable)
console.log('Typeof isAvailable: ', typeof(isAvailable))
let isFree = false
console.log('isFree: ', isFree)
console.log('Typeof isFree: ', typeof(isFree))
console.log('--------------------')

// Null: Đại diện cho một giá trị kiểu "rỗng" hoặc không có gì
let nullValue = null
console.log('nullValue: ', nullValue)
console.log('typeof nullValue - return object: ', typeof nullValue)
console.log('typeof nullValue - return true: ', nullValue === null)
console.log('--------------------')

// Undefine: Đại diện cho một biến chưa được gán giá trị
let undefineValue 
console.log('undefinedValue: ', undefineValue)
console.log('typeof undefinedValue: ', typeof undefineValue)
console.log('--------------------')

/* // Symbol (Xuất hiện từ ECMAScript 6 - ES6): Đại diện cho một giá trị Unique: độc nhất,
  bất biến, thường được sử dụng làm khóa hoặc id cho các đối tượng - Objects. */
let uniqueId = Symbol('b2203464')
console.log('uniqueId: ', uniqueId)
console.log('Typeof uniqueId: ', typeof uniqueId)
console.log('--------------------')

/* // BigInt (Xuất hiện từ ECMAScript 2020 - ES20): Đại diện cho các số nguyên có giá trị rất lớn, 
   lớn hơn kiểu Number thông thường ở trên. */
let bigNumber01 = BigInt(9007199254740991)
console.log('bigNumber01: ', bigNumber01)
console.log('Typeof bigNumber01: ', bigNumber01)

let bigNumber02 = 9007199254740991n
console.log('bigNumber02: ', bigNumber02)
console.log('Typeof bigNumber02: ', bigNumber02)
console.log('--------------------')




