/* 3 CÁCH KHAI BÁO BIẾN TRONG JAVASCRIPT: var - let - const */

// Sự khác nhau về Scope - Phạm vi giữa let, const, var

// Scope được xác định bởi cặp dấu {}

const testScope = () => {
    {
        var scopeVar = 'ThanhPhucNguyen - Var';
        var scopeLet = 'ThanhPhucNguyen - Let';
        var scopeConst = 'ThanhPhucNguyen - Const';

        console.log('scopeVar: ', scopeVar);
        console.log('scopeLet: ', scopeLet);
        console.log('scopeConst: ', scopeConst);
    }
    // console.log('scopeVar: ', scopeVar);
    // console.log('scopeLet: ', scopeLet);
    // console.log('scopeConst: ', scopeConst);
}

testScope();

// Kết luận về Scope - phạm vi một khối (Block Scope)
/*
    // Biến đc khai báo bằng let, const có phạm vi trong một khối (block scope)
        nghĩa là nó chỉ tông tại trong khối mà nó được khai báo.

    // Biến khai báo bằng var có 2 TRƯỜNG HỢP:
        // * Phạm vi toàn cục nếu nó được khai báo bên ngoài bất kì hàm nào (ngoài cùng của file)
        // * Phạm vi cụ thể trong một hàm: nếu nó được khai báo bên trong một hàm. Khiến cho var có scope lổng lẻo
            VẬY NÊN THỰC TẾ HIỆN TA CHỦ YẾU DÙNG CONST VÀ LET KHAI BÁO BIẾN, TRÁNH CÁC VẤN ĐỀ LIÊN QUAN TỚI SCOPE CỦA VAR.
    
    // let, const xuất hiện từ phiên bản ổn định ES6 (ECMAScript 6) vào tháng 6 năm 2015 còn var thì có từ khi JavaScript ra đời (5/1995).
*/