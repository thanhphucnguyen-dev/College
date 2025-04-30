/** constructor-function (hàm khởi tạo - hàm tạo): sử dụng để tạo đối tượng mới, thường kết hợp với từ khóa new */
// KHÔNG HOISTING

function Developer(usename) {
    this.usename = usename
    this.greet = function () {
        console.log(`Hello ${this.usename}! I am FullStack Developer from VietNam`);
    }
}

const developer = new Developer('Thanh Phuc')
developer.greet() // Hello Thanh Phuc! I am FullStack Developer from VietNam