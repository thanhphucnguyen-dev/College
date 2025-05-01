/** Number method - part 1*/
/** Phần 1: toFixed(), toPrecision(), toString(), isFinite(), Number.isInteger(), Number.isSafeInteger(), Number.NaN(), isNaN() */

/** toFixed() - Làm tròn một số theo số lượng chỉ số thập phân được chỉ định trước. 
 * Kết quả trả về là string và sẽ làm tròn lên như toán học.
 */
const num1 = 3.123456789
const fixedNum = num1.toFixed(2)   // giữ lại 2 chữ số thập phân sau dấu phẩy
console.log('After toFixed(): ', fixedNum);   // 3.12
console.log('After toFixed(): ', typeof fixedNum);   // string

/** toPrecision() - Làm tròn số dựa theo số lượng chỉ số được chỉ định trước(bao gồm cả phần số nguyên và thập phân).
 */
const num2 = 123.456;
const precisionNum = num2.toPrecision(4)   // làm tròn 123.456 thành "123.5" với tổng cộng 4 chữ số
console.log('After toPrecision(): ', precisionNum);   // "123.5"

/** toString(radix) - Chuyển đổi số thành string với cơ số radix được chỉ định trước. */
const num3 = 255;
const binaryStr = num3.toString(2); // chuyển đổi thành string binary
const hexStr = num3.toString(16);   // chuyển đổi thành string hex
console.log('binaryStr: ', binaryStr);   // "11111111"
console.log('hexStr: ', hexStr);   // "ff"

/** isFinite() - Kiểm tra giá trị có phải là hữu hạn hay không (true/false) */
console.log('isFinite(123): ', isFinite(123));
console.log('isFinite(Infinity): ', isFinite(Infinity));
console.log('isFinite(-Infinity): ', isFinite(-Infinity));
console.log('isFinite(NaN): ', isFinite(NaN));
console.log('isFinite("123"): ', isFinite("123"));  // true, vì chuỗi "123" được chuyển thành số 123 khi dùng

/** Number.isInteger() - Kiểm tra giá trị có phải là số nguyên hay không (true/false) */
console.log('Number.isInteger(123): ', Number.isInteger(123));
console.log('Number.isInteger(123.456): ', Number.isInteger(123.456));   // false, vì số nguyên không phải là số nguyên
console.log('Number.isInteger(Infinity): ', Number.isInteger(Infinity));
console.log('Number.isInteger(-Infinity): ', Number.isInteger(-Infinity));
console.log('Number.isInteger(NaN): ', Number.isInteger(NaN));
console.log('Number.isInteger("123"): ', Number.isInteger("123"));  // false, vì chuỗi "123" không phải là số nguyên

/** Number.isSafeInteger() - Kiểm tra giá trị có phải là số nguyên an toàn không
 * Một số nguyên an toàn nằm trong khoảng từ -(2^53 - 1) đến 2^53 - 1.
 */
console.log('Number.isSafeInteger(123): ', Number.isSafeInteger(123));
console.log('Number.isSafeInteger(Math.pow(2, 53)): ', Number.isSafeInteger(Math.pow(2, 53)));  // false, vượt quá giới hạn
console.log('Number.isSafeInteger(9007199254740991): ', Number.isSafeInteger(9007199254740991));   // true
console.log('Number.isSafeInteger(-9007199254740991): ', Number.isSafeInteger(-9007199254740991));   // true
console.log('Number.isSafeInteger(9007199254740992): ', Number.isSafeInteger(9007199254740992));   // false


/** Number.NaN() - Đại diện cho một giá trị "Not-a-Number" trong JS.  Xuất hiện khi phép toán học không thực hiện được */
console.log('Number.NaN: ', Number.NaN);  // NaN
console.log('0 / 0: ', 0 / 0);   // NaN
console.log('parseInt("abc"): ', parseInt("abc"));   // NaN
console.log('parseFloat("abc123"): ', parseFloat("abc123"));   // NaN
console.log('Number.NaN === NaN: ', Number.NaN === NaN);   // false

/** isNaN() - Kiểm tra giá trị có phải là NaN hay không (true/false) */
console.log('isNaN(123): ', isNaN(123));   // false
console.log('isNaN(NaN): ', isNaN(NaN));   // true
console.log('isNaN(abc): ', isNaN("abc"));   // true, vì abc không thể chuyển thành số
console.log('isNaN("123"): ', isNaN("123"));   // false, vì "123" có thể chuyển thành số 123 khi dùng NaN

/** Number.isNaN() - Kiểm tra giá trị có phải là NaN hay không (true/false) */
console.log('Number.isNaN(123): ', Number.isNaN(123));   // false
console.log('Number.isNaN(NaN): ', Number.isNaN(NaN));   // true
console.log('Number.isNaN(abc): ', Number.isNaN("abc"));   // false, vì abc không thể chuyển thành số
console.log('Number.isNaN("123"): ', Number.isNaN("123"));   // false, vì "123" có thể chuyển thành số 123 khi dùng NaN
