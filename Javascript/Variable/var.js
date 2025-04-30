/* 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT: var - let - const */

/**---------------VAR---------------- */
/* Hoisting: biến khai báo bằng var sẽ được hoisted (di chuyển lên đầu phạm vi khối (scope) của nó)
            và đồng thời nó được khởi tạo giá trị mặc định ban đầu là undifine. Cho nên ta có thể sử 
            dụng trước khai báo mà không gặp lỗi.
*/
console.log('nameVar: ', nameVar);


// khai báo
var nameVar = 'ThanhPhucNguyen';
console.log('nameVar: ', nameVar);

// Tái khai báo: có thể khai báo cùng một biến var nhiều lần trong cùng một phạm vi nó ko gặp lỗi.
var nameVar = 'ThanhPhucNguyen - front end developer';
console.log('nameVar: ', nameVar);

// Gán lại: có thể gắn lại giá trị của biến var.
nameVar = 'ThanhPhucNguyen - back end developer';
console.log('nameVar: ', nameVar);
