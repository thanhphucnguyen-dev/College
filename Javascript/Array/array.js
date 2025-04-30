/** Array */
/**
 * Array là kiểu dữ liệu dùng để lưu danh sách các giá trị.
 * Có thể là bất kì kiểu dữ liệu nào, number, string, object,... thậm chí các mảng khác
 * Có các chỉ số index bắt đầu từ 0
 * 
 */
// vd: cách tạo và sử dụng mảng
// Tạo array chứa các số từ 1 -> 5 dùng []
let number = [1, 2, 3, 4, 5]

// Tạo array chứa các số từ 1 -> 5 dùng new Array()
let number2 = new Array(1, 2, 3, 4, 5)

// Truy cập phần tử đầu tiên của mảng (theo index = 0)
console.log('First item of numbers: ', number[0])

// Truy cập phần tử cuối cùng của mảng (theo index = array.length - 1)
console.log('Last item of numbers: ', number[number.length - 1])



// MẢNG CHỨA BẤT KỲ KIỂU DỮ LIỆU NÀO
let mixedArray = [1, 'Hello', true, null, undefined, { username: 'ThanhPhuc' }, [1, 2, 3]]
console.log('MixedArray: ', mixedArray)


