/** String method - part 2*/
/** Phần 2: toLowerCase(), toUpperCase(), trim(), replace(), match(regex), search(regex),  startsWith(), endsWith()
 */

/** toLowerCase() - Chuyển đổi tất cả ký tự thành chữ thường */
const str1 = 'Javascript IS FUN BUT NOT EASY'
const toLowerCaseResult = str1.toLowerCase()
console.log('After toLowerCase(): ', toLowerCaseResult)

/** toUpperCase() - Chuyển đổi tất cả ký tự thành chữ in hoa */
const str2 = 'javascript is fun but not easy'
const toUpperCaseResult = str2.toUpperCase()    
console.log('After toUpperCase(): ', toUpperCaseResult)

/** trim() - Xóa ký tự khoảng trắng (space) ở đầu và cuối của chuỗi. KO LÀM THAY ĐỔI CHUỖI GỐC*/
const str3 = '  "Javascript is fun but not easy"    '
const trimResult = str3.trim()
console.log('After trim(): ', trimResult)
console.log('str3: ', str3)

/** replace() - Thay thế một chuỗi con trong chuỗi ban đầu bằng một chuỗi khác.
 *              Nó chỉ thay thế lần xuất hiện đầu tiên, muốn thay thế toàn
 *              bộ thì phải dùng biểu thức chính quy (regex) với flag g (global)
 *              KO LÀM THAY ĐỔI CHUỖI GỐC BAN ĐÂU
 */
const str4 = 'Hello World World World'
// const replaceResult = str4.replace('World', 'Thanh')
const replaceResult = str4.replace(/World/g, 'Thanh')
console.log('After replace(): ', replaceResult)
console.log('str4: ', str4)

/** match() - Tìm kiếm và trả về một mảng chưa kết quả khớp với biểu thức chính quy (regex) trong chuỗi.
 *            Nếu ko có kết quả khớp, trả về null. Chỉ trả về kết quả lần xuất hiện đầu tiên.
 *            Muốn trả về toàn bộ kết quả thì phải dùng  flag g (global).
 */

/** search()  - Tìm kiếm theo đầu vào là một biểu thức chính quy (regex) trong chuỗi và trả về index
 *              tại vị trí lần xuất hiện đầu tiên của chuỗi regex. Nếu ko không tìm thì trả về -1.
 */

/** startsWith() - Kiểm tra chuỗi có bắt đầu bằng một chuỗi con cụ thể không. Trả về true/false */

/** endsWith() - Kiểm tra chuỗi có kết thúc bằng một chuỗi con cụ thể không. Trả về true/false */