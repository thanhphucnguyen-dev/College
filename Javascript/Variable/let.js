/* 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT: var - let - const */

/**---------------LET---------------- */
/* Hoisting: biến khai báo bằng let cũng được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó)
            nhưng lại ko được khởi tạo giá trị mặc định ban đầu. Nên ko thể dùng trước khi khai báo.
*/
// console.log('nameLet', nameLet);


// khai báo
let nameLet = 'ThanhPhucNguyen';
console.log('nameLet: ', nameLet);

// Tái khai báo: KO thê khai báo một biến nhiều lần với let
// let nameLet = 'ThanhPhucNguyen';
// console.log('nameLet: ', nameLet);

// Gán lại: có thể gắn lại giá trị của biến let.
nameLet = 'ThanhPhucNguyen - FullStack Dev';
console.log('nameLet: ', nameLet);