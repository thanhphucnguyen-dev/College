/** expression-function (hàm biểu thức): nghĩa là gán hàm cho một biến, ,cũng là một cách định nghĩa hàm */
// KHÔNG HOISTING
const sayHello = function (someone) {
    console.log(`Hello ${someone}! I am FullStack Developer from VietNam`);
}

sayHello('Thanh Phuc'); // Hello Thanh Phuc! I am FullStack Developer from VietNam