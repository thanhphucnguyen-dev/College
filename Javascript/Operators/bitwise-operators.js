/* Bitwise Operators: ~, &, |, ^, << */

/* Toán tử dùng để thực hiện các phép toán bit trong hệ nhị phân */
let x = 5   // 0101 (hệ nhị phân)
let y = 3   // 0011 (hệ nhị phân)

console.log(x & y) // 0101 & 0011 = 0001 (hệ nhị phân) và 1 (hệ thập phân)
console.log(x | y) // 0101 | 0011 = 0111 (hệ nhị phân) và 7 (hệ thập phân)
console.log(x ^ y) // 0101 ^ 0011 = 0110 (hệ nhị phân) và 6 (hệ thập phân)
console.log(~x) // ~0101 = 1010 (hệ nhị phân) và -6 (hệ thập phân)
console.log(x << 1) // LEFT SHIFT: 1010 (10) (dịch trái 1 vị trí)
console.log(x >> 1) // RIGHT SHIFT: 0010 (2) (dịch phải 1 vị trí)

/* 
    // Vì làm việc trực tiếp với các bit của dữ liệu nên toán tử bitwise có thể  thực 
        hiện các phép toán nhanh hơn so với các phép toán số học thông thường.

   // Ứng dụng nhiều trong các ứng dụng đòi hỏi hiệu suất cao như trò chơi, xử lý đồ họa, lập trình hệ thống,...
*/


