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