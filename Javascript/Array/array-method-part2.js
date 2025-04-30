/** Array method - part 2*/
/**Phần 2: slice(), splice(), concat(), join(), toString(), every() */

/** concat() -  NỐI HAI HAY NHIỀU MẢNG LẠI VỚI NHAU. Ko làm thay đổi mảng 
 *              gốc mà trả về mảng mới chứa tất cả các phần tử của mảng được nối 
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const concatResult = arr1.concat(arr2)
console.log('After concat(): ', concatResult)   // Kết quả: [1, 2, 3, 4, 5, 6]
console.log('Arr1: ', arr1)
console.log('Arr2: ', arr2)

/** slice() - TRẢ VỀ MỘT MẢNG CON CỦA MẢNG BAN ĐẦU, từ vị trí startIndex đến endIndex 
 *            (KO BAO GỒM endIndex). ko làm thay đổi mảng gốc ban đầu
 */
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sliceResult = arr3.slice(1, 4)
console.log('After slice(): ', sliceResult) // Kết quả: [2, 3, 4]

/** splice() -  DÙNG ĐỂ THAY ĐỔI NỘI DUNG CỦA MẢNG BẰNG CÁCH XÓA, THAY THẾ HOẶC THÊM PHẦN TỬ MỚI
 *              . SẼ LÀM THAY ĐỔI MẢNG GỐC BAN ĐẦU.
 */
const arr4 = [1, 2, 3, 4, 5, 6]
const spliceResult = arr4.splice(2, 3, 'a', 'b', 'c') 
// Bắt đầu từ vị trí index 2, xóa 3 phần tử (3, 4, 5), thêm 3 phần tử mới (a, b, c)
console.log('After splice(): ', spliceResult) // Kết quả: [3, 4, 5]
console.log('After splice() - arr4: ', arr4)   // Kết quả: [ 1, 2, 'a', 'b', 'c', 6 ]

/** every() -  KIỂM TRA TẤT CẢ CÁC PHẦN TỬ TRONG MẢNG CÓ THỎA MÃN ĐIỀU KIỆN CỦA HÀM CALLBACK HAY KO.
 *              TRUE NẾU TẤT CẢ THỎA MÃN VÀ NGƯỢC LẠI
 */
const arr5 = [1, 2, 3, 4, 5, 6]
const allPositive = arr5.every(num => num > 0)
console.log('After every(): ', allPositive)


/** findIndex() - TRẢ VỀ CHỈ SỐ INDEX CỦA PHẦN TỬ ĐẦU TIÊN TRONG MẢNG THỎA MÃN ĐIỀU KIỆN TRONG HÀM CALLBACK.
 *              KO CÓ PHẦN TỬ THỎA MÃN SẼ TRẢ VỀ -1.
 */
const arr6 = [1, 2, 3, 4, 5, 6]
const findIndexResult = arr6.findIndex(num => num > 3)
console.log('After findIndex(): ', findIndexResult)


/** toString()  - Nối tất cả các phần tử của mảng thành một chuỗi string  */
const arr7 = [1, 2, 3, 4, 5, 6]
const toStringResult = arr7.toString()
console.log('After toString(): ', toStringResult)

/** join()      -  Tương tự toString(), nhưng có thể chỉ định thêm dấu phân cách */
const arr8 = [1, 2, 3, 4, 5, 6]
const joinResult = arr8.join(' - ')
console.log('After join(): ', joinResult)