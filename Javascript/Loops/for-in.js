/** for-in: Duyệt key (chỉ mục) của object (hoặc array nếu cần) */
// LẶP QUA CÁC THUỘC TÍNH CỦA MỘT ĐỐI TƯỢNG
const developer = {
    name: 'Thanh Phúc',
    age: 20,
    gender: 'Male',
    country: 'Vietnam',
    hobbies: ['Coding', 'Reading', 'Playing games', 'Traveling'],
};

for (let key in developer) {
    console.log(`${key}: ${developer[key]}`);
}
