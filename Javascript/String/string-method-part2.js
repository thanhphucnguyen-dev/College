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
const replaceStr = str4.replace('World', 'Thanh')
const replaceAllStr = str4.replace(/World/g, 'Thanh')
console.log('After replace(): ', replaceStr)
console.log('After replaceAll(): ', replaceAllStr)
console.log('str4: ', str4)

/** match() - Tìm kiếm và trả về một mảng chưa kết quả khớp với biểu thức chính quy (regex) trong chuỗi.
 *            Nếu ko có kết quả khớp, trả về null. Chỉ trả về kết quả lần xuất hiện đầu tiên.
 *            Muốn trả về toàn bộ kết quả thì phải dùng  flag g (global).
 */
const str5 = 'Hello World World dev dev dev'
const matchStr = str5.match('dev')
const matchAllStr = str5.match(/dev/g)
console.log('matchStr: ', matchStr)
console.log('matchAllStr: ', matchAllStr)   // [ 'dev', 'dev', 'dev' ]
console.log('str5: ', str5)

/** search() - Tìm kiếm theo đầu vào là một biểu thức chính quy (regex) trong chuỗi và trả về index
 *             tại vị trí lần xuất hiện đầu tiên của chuỗi regex. Nếu ko không tìm thì trả về -1.
 */
const str6 = 'Hello World World dev dev dev'
const searchStr = str6.search('dev')
const searchAllStr = str6.search(/dev/g)
console.log('searchStr: ', searchStr)
console.log('searchAllStr: ', searchAllStr)   // 18
console.log('str6: ', str6)

/** startsWith() - Kiểm tra chuỗi có bắt đầu bằng một chuỗi con cụ thể không. Trả về true/false */
const str7 = 'Hello World World dev'
const startsWithResult = str7.startsWith('Hello')
console.log('startsWithResult: ', startsWithResult)   // true
console.log('str7: ', str7)

/** endsWith() - Kiểm tra chuỗi có kết thúc bằng một chuỗi con cụ thể không. Trả về true/false */
const str8 = 'Hello World World dev'
const endsWithResult = str8.endsWith('World')
console.log('endsWithResult: ', endsWithResult)   // false
console.log('str8: ', str8)
