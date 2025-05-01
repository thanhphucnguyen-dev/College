/** Number method - part 2*/
/** Phần 2: parseInt(), parseFloat(), Number.parseInt(), Number.parseFloat(), Number.prototype.valueOf(), 
 * Number.MAX_VALUE, Number.MIN_VALUE, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
 * */

/** parseInt() - Chuyển đổi chuỗi thành số nguyên */
const str1 = '123';
const num1 = parseInt(str1);   // chuyển đổi chuỗi thành số nguyên
console.log('After parseInt(): ', num1);   // 123
console.log('After parseInt(): ', typeof num1);   // number

/** parseFloat() - Chuyển đổi chuỗi thành số thập phân */
const str2 = '123.456';
const num2 = parseFloat(str2);   // chuyển đổi chuỗi thành số thập phân
console.log('After parseFloat(): ', num2);   // 123.456
console.log('After parseFloat(): ', typeof num2);   // number

/** Number.parseInt() - Chuyển đổi chuỗi thành số nguyên */
const str3 = '123';
const num3 = Number.parseInt(str3);   // chuyển đổi chuỗi thành số nguyên
console.log('After Number.parseInt(): ', num3);   // 123
console.log('After Number.parseInt(): ', typeof num3);   // number

/** Number.parseFloat() - Chuyển đổi chuỗi thành số thập phân */
const str4 = '123.456';
const num4 = Number.parseFloat(str4);   // chuyển đổi chuỗi thành số thập phân
console.log('After Number.parseFloat(): ', num4);   // 123.456
console.log('After Number.parseFloat(): ', typeof num4);   // number
