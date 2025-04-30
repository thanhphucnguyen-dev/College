/* 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT: var - let - const */

/**---------------CONST---------------- */
/* Hoisting: biến khai báo bằng const cũng được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó)
            nhưng lại ko được khởi tạo giá trị mặc định ban đầu. Nên ko thể dùng trước khi khai báo.
*/
// console.log('nameConst', nameConst);


// khai báo
let nameConst = 'ThanhPhucNguyen';
console.log('nameLet: ', nameConst);

// Tái khai báo: KO thê khai báo một biến nhiều lần với const
// let nameConst = 'ThanhPhucNguyen';
// console.log('nameLet: ', nameConst);

// Gán lại: KO thể gắn lại giá trị của biến let.
// nameConst = 'ThanhPhucNguyen - FullStack Dev';
// console.log('nameLet: ', nameConst);