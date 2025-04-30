/** arrow-function (hàm mũi tên): là sự thay thế với cú pháp đơn giản của hàm biểu thức */
// XUẤT HIỆN TỪ ES6: Arrow Functions
// KO CÓ THIS RIÊNG, KẾ THỪA THIS TỪ BÊN NGOÀI
const sayHello = (someone) => {
    // console.log(this);
    
    console.log(`Hello ${someone}! I am FullStack Developer from VietNam`);
}

sayHello('Thanh Phuc'); // Hello Thanh Phuc! I am FullStack Developer from VietNam