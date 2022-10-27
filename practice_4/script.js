'use strict';

// // 3.7 Циклы

// // 1. Цикл "for" со счётчиком i:

// //Прямой:

// for (let i = 0; i < 10; i++) {
//     console.log('Hello World!', i + 1);
// }

// //Обратный:

// for (let i = 10; i > 0; i--) {
//     console.log('Hello World!', i);
// }

// //С пропуском:

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log('Hello World!', i + 1);
// }

// // 2. Цикл "while" со счётчиком i:

// //С предусловием:

// let isLoopContinues = true;
// let i = 0;

// while (isLoopContinues) {
//     i= Math.random();
//     console.log(i);

//     if (i > 0.5) {
//         isLoopContinues = false;
//     }
// }

// //С постусловием:

// let isLoopContinues = false;
// let i = 0;

// do {
//     i = Math.random();
//     console.log(i);

//     if (i > 0.5) {
//         isLoopContinues = false;
//     } else {
//         isLoopContinues = true;
//     }

// } while (isLoopContinues);

// //Округление: res = a * b + k

// let isLoopContinues = true;
// let i = 0;

// while (isLoopContinues) {
//     i = Math.trunc(10 * Math.random() + 1);
//     console.log(i);

//     if (i === 8) {
//         isLoopContinues = false;
//     }
// };

// // 3.8 Функции, область видимости, лексическое окружение, остаточные параметры.

// // Function Declaration

// function sayHello() {
//     console.log('Hello World!');
// }

// // Function Expression

// const sayHello2 = function () {
//     console.log('Hello World!');
// }

// // Function Expression (lambda - стрелочная функция)

// const sayHello3 = () => {
//     console.log('Hello World!');
// }

// // IIFE - Immediately Invoked Function Expression 

// (function() {
//     console.log('Hello World! IIFE');
// }) ();

// // Example + использование аргументов со значениями по умолчанию

// function sayHelloToUser(firstName = '', lastName = '') {
//     console.log(`Привет, ${firstName} ${lastName}`);
// }

// sayHelloToUser('Иван', 'Петров');

//################Области видимости:

// // Возвращаемые значения: 'return'

// function sayHello() {
//     console.log('Hello World!');
// }

// function getSum(a, b){
//     return a + b;
// }

// const sum = getSum(4, 9);
// console.log(sum);