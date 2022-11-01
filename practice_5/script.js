'use strict';

// // // 4.1 Комментарии, отладка, советы по стилю кода

// // Именная функция:

// function sayHello() {
//     console.log('Hello From Declaration');
// }

// // Анонимная функция:

// const sayHello2 = function () {
//     console.log('Hello From Expression');
// }


// // Стрелочная функция:

// const sayHello3 = () => {
//     console.log('Hello From Lambda Expression'); 
// }

// // hoisting - всплытие объявления переменных и функций вверх глобальной области видимости
// sayHello(); // Первую можно вызвать до объявления
// sayHello2(); // Нельзя вызвать до объявления
// sayHello3(); // Нельзя вызвать до объявления

// //var функциональная область видимости

// console.log(x);
// var x = 3;  // получим undefined

// function printX () {
//     console.log(x);
//     var x = 5; 
// }
// printX (); // получим undefined

// //let const блочная область видимости

// let x = 3;  // Попадает в темпларную мертвую зону, но хостинг работает, js знает, что в будущем переменная объявлена

// function printX () {
//     console.log(x);
//     let x = 5; 
// }
// printX (); // Cannot access 'x' before initialization

// // Замыкания Closures 
// // Способность функции запоминать переменные из контекста, где она была создана

// let func;
// //let i; глобальная

// for ( let i = 0; i < 10; i++) {
//     if (i === 5) {
//         func = function () {
//                 console.log(i);
//         }
//     }
// }
// // i локальная переменная в области видимости (блок функции) будет выводится 5 из контекста, а если i (шлобально) вынести наружу, то будет 10.
// func();

// //Локальные и глобальные переменные
// // Функция имеет доступ и может изменять переменные, объявленные в основном коде программы
// // Переменные, созданные внутри функции, недоступны вне этой функции

// // EXAMPLE 1 - Замыкания Closures 

// const button = document.getElementById('button');

// const someVariable = 'Привет, мир!';

// button.addEventListener('click', function() {
//     console.log(someVariable);
// });

// // Объект - составной тип задаётся в фигурных скобках и у него есть поля, они разделяются запятыми:

// const person = { //объект
//     firstName: 'Andrew', //примитив строка свойство
//     lastName: 'Gulin', //примитив строка свойство
//     body: { //ключ 
//         age: 50,
//         height: 185
//     }
// }

// console.log (person.body.age); // 50

// // Сравнение объектов:

// const person2 = person; // ССЫЛКА, объект в памяти один

// console.log (person2 === person); // true так как ссылки в памяти равны

// // Сравнение объектов:

// const person2 = { //объект
//     firstName: 'Andrew', //примитив строка свойство
//     lastName: 'Gulin', //примитив строка свойство
//     body: { //ключ 
//         age: 50,
//         height: 185
//     }
// }

// console.log (person2 === person); // false 

// // !***Меняется сам объект. вне зависимости от указания ссылок


// // Опциональная цепочка

const person = { //объект
    firstName: 'Andrew', //примитив строка свойство
    lastName: 'Gulin', //примитив строка свойство
    // body: { //ключ 
    //     age: 50,
    //     height: 185
    // }
}

// console.log (person.body.age); // ошибка undefined

console.log (person?.body?.age); // Опциональная цепочка undefined