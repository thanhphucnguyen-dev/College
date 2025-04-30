/** method-function (hàm phương thức): là một hàm được định nghĩa, khai báo trong một đối tượng */
// KHÔNG HOISTING
const person = {
    name: 'Thanh Phuc',
    age: 20,
    gender: 'Male',
    country: 'Vietnam',
    hobbies: ['Coding', 'Reading', 'Playing games', 'Traveling'],
    sayHello: function () {
        console.log(`Hello ${this.name}! I am ${this.age} years old`);
    }
}

person.sayHello(); // Hello Thanh Phuc! I am 20 years old

// Hàm phương thức trong hệ thống Javascript
function sayHello() {
    console.log(`Hello ${this.name}! I am ${this.age} years old`);
}