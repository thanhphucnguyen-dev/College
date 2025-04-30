/** String method */
// chartAt(), concat(), includes(), indexOf(), lastIndexOf(), slice(), split(), substring()

// chartAt() - TRẢ VỀ KÝ TỰ TẠI MỘT VỊ TRÍ CỤ THỂ TRONG CHUỖI. VỊ TRÍ BẮT ĐẦU LÀ 0, TRẢ VỀ STRING RỖNG NẾU VỊ TRÍ KO TỒN TẠI
const str1 = 'Hello World'
const chartAtResult = str1.charAt(0)
console.log('After chartAt(): ', chartAtResult)

/** concat() - NỐI HAI HAY NHIỀU CHUỖI LẠI VỚI NHAU VÀ TRẢ VỀ MỘT CHUỖI MỚI */
const str2 = 'Thanh'
const separator = ' '
const str3 = 'Phuc'
const concatResult = str2.concat(separator).concat(str3)
console.log('After concat(): ', concatResult)

/** includes() - KIỂM TRA XEM CHUỖI CÓ MỘT CHUỖI CON CỤ THỂ KHÔNG. TRẢ VỀ TRUE NẾU CHUỖI CON DC TÌM THẤY
 * CÓ PHÂN BIỆT HOA THƯỜNG
 */
const str4 = 'ThanhPhucNguyen'
const includesResult = str4.includes('thanh')
console.log('After includes(): ', includesResult)


/** indexOf() - TRẢ VỀ INDEX CỦA LẦN XUẤT HIỆN ĐẦU TIÊN CỦA CHUỖI CON TRONG CHUỖI. 
 *              CHUỖI CON KO TÌM THẤY SẼ TRẢ VỀ -1. CÓ PHÂN BIỆT HOA THƯỜNG
 */
const str5 = 'ThanhPhucNguyen'
const indexOfResult = str5.indexOf('Thanh')
console.log('After indexOf(): ', indexOfResult)


/** lastIndexOf() - TRẢ VỀ INDEX CỦA LẦN XUẤT CUốI CỦA CHUỖI CON TRONG CHUỖI. 
 *              CHUỖI CON KO TÌM THẤY SẼ TRẢ VỀ -1.
 */
const str6 = 'ThanhPhucNguyenThanh'
const lastIndexOfResult = str6.lastIndexOf('Thanh')
console.log('After lastIndexOf(): ', lastIndexOfResult)

/** split() - CHIA CHUỖI THÀNH MỘT MẢNG CÁC CHUỖI CON DỰA TRÊN MỘT KÍ TỰ NHẬN DIỆN
 *              KO LÀM THAY ĐỔI CHUỖI GỐC.
 */
const str7 = 'Node.js, React.js, Angular.js, MongoDB, Express.js'
const splitResult = str7.split(', ')
console.log('After split(): ', splitResult) // Kết qua: [Node, js, React, js, Angular, js, MongoDB, Express, js]

/** slice() -TRẢ VỀ MỘT CHUỖI CON TỪ CHUỖI GỐC BAN ĐẦU, TỪ startIndex --> endIndex (ko bao gồm endIndex).
 *            KO LÀM THAY ĐỔI CHUỖI GỐC BAN ĐẦU. Nếu chúng ta cố tình để start->end thì slice() sẽ trả về chuỗi rỗng.
*/
const str8 = 'Javascript is awesome'
const sliceResult_1 = str8.slice(0, 10)
const sliceResult_2 = str8.slice(10, 0)
console.log('After slice() 01: ', sliceResult_1)    // Kết quả: Javascript
console.log('After slice() 02: ', sliceResult_2)    // Kết quả: 

/** substring() - TRẢ VỀ MỘT CHUỖI CON TỪ CHUỖI GỐC BAN ĐẦU, TỪ startIndex --> endIndex (ko bao gồm endIndex).
 *                . TUY NHIÊN KHÁC VỚI SLICE(): SUBSTRING() SẼ HOÁN ĐỔI START INDEX VÀ END INDEX NẾU TA VÔ TÌNH
 *                ĐỂ startIndex > endIndex.
 */
const str9 = 'Javascript is fun but not easy'
const substringResult_1 = str9.substring(0, 10)
const substringResult_2 = str9.substring(10, 0)
console.log('After substring() 01: ', substringResult_1)    // Kết quả: Javascript
console.log('After substring() 02: ', substringResult_2)    // Kết quả: Javascript

