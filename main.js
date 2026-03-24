// Цикл for
for (let i = 0; i < 5; i++) {
    console.log(i);
}


// Практическое задание №1
let sum = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i % 2 === 0) {
        console.log("Чётное:", i);
    }
    sum += i;
}
console.log("Сумма от 1 до 10:", sum);


// Цикл while
let i = 0;
while (i < 3) {
    console.log("Count:", i);
    i++;
}


// Практическое задание №2
let number = 5;
while (number > 0) {
    console.log(number);
    number--;
}


// Цикл do...while
let k = 0;
do {
    console.log("Value:", k);
    k++;
} while (k < 3);


// Операторы break и continue
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}


// Практическое задание №4
console.log("--- Практика 5.8 ---");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}


// Вложенные циклы
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}


// Практическое задание №5
let star = "";
for (let i = 1; i <= 4; i++) {
    star += "*";
    console.log(star);
}


// Объявление функции
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));


// Практическое задание №1
function multiply(a, b) {
    return a * b;
}
console.log("Multiply:", multiply(5, 3));


// Функция без return
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello("Тимофей");


// Практическое задание №2
function printInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printInfo("Alex", 25);


// Значения параметров по умолчанию
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
greet();
greet("User");


// Практическое задание №3
function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
console.log("Price with default discount:", calculateDiscount(1000));
console.log("Price with 20% discount:", calculateDiscount(1000, 20));


// Функции как значения
const add = function (a, b) { 
    return a + b; 
};
console.log(add(2, 3));


// Стрелочные функции
function sumFunc(a, b) {
    return a + b;
}
const sumFunc2 = (a, b) => a + b;
const double = x => x + 2;
const sumFunc3 = (a, b) => a + b;
const sayGreeting = () => console.log("Hello");
const square = x => x * x;
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}


// Создание массива
let numbersArr = [1, 2, 3, 4, 5];
console.log(numbersArr);

console.log(numbersArr[0]);
console.log(numbersArr[1]);

console.log(numbersArr.length)


// Практическое задание №1
let colors = ["Red", "Green", "Blue"];
console.log("First:", colors[0], "Last:", colors[colors.length - 1]);
colors[1] = "Yellow";
console.log("Colors array:", colors);


// Добавление и удаление
numbersArr.push(10);
console.log(numbersArr);

numbersArr.pop();
console.log(numbersArr);


// Практическое задание №2
let students = [];
students.push("Anna");
students.push("Bob");
students.push("Charlie");
students.pop();
console.log("Students:", students);


// Перебор
let numbers2 = [10, 20, 30];
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i]);
}


// Цикл for...of
for (let value of numbers2) {
    console.log(value);
}


// Разные типы данных
let mixedArray = [1, "text", true, 3.14];
console.log(mixedArray);


// Поиск элемента
console.log(numbersArr.includes(1));
console.log(numbersArr.indexOf(2));

console.log(fruits.includes("яблоко"));
console.log(fruits.includes("манго"));


// Практическое задание №4
let cities = ["Moscow", "Paris", "London"];
let city = "Paris";
if (cities.includes(city)) {
    console.log("index:", cities.indexOf(city));
} else {
    console.log("City not found");
}


// Создание объекта
let user2 = { 
    name: "John", 
    age: 20,
    isStudent: true, 
};

console.log(user2);


// Доступ к свойствам объекта
console.log(user2.name);
console.log(user2.age);

console.log(user2["name"]);


// Практическое задание №1
let book = {
    title: "JS Guide",
    author: "Unknown",
    year: 2023
};
console.log(book.title, book.author, book.year);
book.year = 2024;
console.log("Updated year:", book.year);


// Добавление и удаление свойств
user2.age = 30;
user2.name = "Кирилл";
delete user2.isStudent;
console.log(user2);


// Объект с методами
let user2 = {
    name: "Ivan",
    age: 20,
    isStudent: true,
    sayHello: function () {
        console.log(`Hello, my name is ${name}`);
    },
};

user2.sayHello();


// Практическое задание №2
let car = {
    brand: "Toyota",
    year: 2020,
    getInfo: function() {
        console.log(`Car: ${this.brand}, Year: ${this.year}`);
    }
};
car.getInfo();


// Перебор свойств
for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

// 8.9. Практическое задание №3
let product = {
    name: "Laptop",
    price: 1000,
    stock: 5
};
for (let key in product) {
    console.log(`Product ${key}: ${product[key]}`);
}


// Вложенные объекты и массивы
let student = {
    name: "Григорий",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Волжский",
        street: "Пушкина",
    },
};

console.log(student.skills[0]);
console.log(student.address.city);