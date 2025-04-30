/*object */
/*
    Đối tượng bao gồm các cặp key-value (khóa - giá trị). Mỗi khóa là một chuỗi (string) và các giá 
    trị có thể là bất kì loại dữ liệu nào, bao gồm cả đối tượng khác (nested object)
*/

/** 2 CÁCH TẠO ĐỐI TƯỢNG  */

/**Cách tạo Object với cú pháp literal (literal object):*/
const developer = {
    name: 'Thanh Phuc',
    age: 20,
    greet: function () {
        console.log(`Hello ${this.name}! I am ${this.age} years old`);
    },
    skills: ['Javascript', 'React', 'Node.js', 'Express'],
    positions: {
        frontEnd: ['React', 'Angular', 'Vue'],
        backEnd: ['Node.js', 'Express'],
        fullStack: true
    }
} 
console.log(developer)


/**Cách tạo Object với từ khóa new (object constructor):*/
let developer2 = new Object()
developer2.name = 'Thanh Phuc'
developer2.age = 20
developer2.greet = function () {
    console.log(`Hello ${this.name}! I am ${this.age} years old`);
}
developer2.skills = ['Javascript', 'React', 'Node.js', 'Express']
developer2.positions = {
    frontEnd: ['React', 'Angular', 'Vue'],
    backEnd: ['Node.js', 'Express'],
    fullStack: true
}


/**2 CÁCH TRUY CẬP GIÁ TRỊ CỦA ĐỐI TƯỢNG  */

// Dùng dấu . để truy cập
console.log(developer.name)
console.log(developer.age)
console.log(developer.greet)
console.log(developer.skills)
console.log(developer.positions)

// Dùng dấu [] để truy cập
console.log(developer['name'])
console.log(developer['age'])
console.log(developer['greet'])
console.log(developer['skills'])
console.log(developer['positions'])

 
/** THÊM / SỬA/ XÓA THUỘC TÍNH CỦA MỘT OBJECT */
developer.gender = 'Male'   // Thêm
developer.age = 18  // Sửa
delete developer.greet   // Xóa
console.log(developer)

/**Lặp QUA CÁC THUỘC TÍNH CỦA MỘT ĐỐI TƯỢNG */
for (let key in developer) {
    console.log(`${key}: ${developer[key]}`);
}

console.log(Object.keys(developer))
console.log(Object.values(developer))
console.log(Object.entries(developer))



/** ĐỐI TƯỢNG CHỨA THUỘC TÍNH LÀ METHOD FUNCTION */

/**OBJECT LỒNG NHAU */
const student = {
    name: 'Daisy',
    scores: {
        math: 8,
        english: 9
    }
};

console.log(student.scores.math); // 8
