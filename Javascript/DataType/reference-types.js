
/** Nhóm các dữ liệu tham chiếu - Reference Types **/

/**
 * Các giá trị tham chiếu không được lưu trữ trực tiếp trong ngăn xếp (Stack) mã sẽ tham chiếu đến
   địa chỉ của đối tượng trong Heap Memory.
 *  Các giá trị tham chiếu có thể được thay đổi sau khi chúng ta tạo ra.
 * Khi gán đối tượng A cho B,  thì cả A và B sẽ tham chiếu đến cùng đối tượng, chứ ko tạo ra bản sao riêng biệt.
 * Reference: bao gồm các kiểu dữ liệu phổ biến sau:
 */

// Object: Đại diện cho một tập hợp các thuộc tính và phương thức
let developer = {
    username: 'ThanhPhucNguyen',
    age: 20,
    greet: function() {
        console.log('HI hihi. I am ' + this.username)
    }
}
developer.greet()
console.log('developer.username: ', developer.username)
console.log('developer.age: ', developer.age)
console.log('----------------------------')

// Array: Một loại đối tượng đặc biệt để lưu trữ danh sách các giá trị
let colors = ['red', 'green', 'blue', 'yellow', 'gray', 'black', 'orange', 'pink']
console.log('Colors: ', colors)
console.log('colors[0]: ', colors[0])
console.log('colors[1]: ', colors[1])
console.log('colors[2]: ', colors[2])
console.log('----------------------------')

// Function: Đại diện cho một hàm xử lý, cũng được coi là một loại đối tượng đặc biệt
function weatherInfo(city) {
    console.log(`The weather in ${city} is really hot today`)
}
weatherInfo('Hanoi')
console.log('----------------------------')

// Date: Đại diện cho ngày, giờ dùng xử lý thời gian trong chương trình
const today = new Date()
console.log(`Today is: ${today}`)
console.log('Year: ', today.getFullYear())
console.log('Month: ', today.getMonth() + 1) // tháng tính từ 0-->11
console.log('Date: ', today.getDate())
// ...
console.log('----------------------------')

// RegExp (biểu thức chính quy): dùng để kiểm tra hoặc tìm kiếm chuỗi theo mẫu
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const testEmail = "example@gmail.com"
console.log(`Is "${testEmail}" a valid?`, emailPattern.test(testEmail))
console.log('----------------------------')
