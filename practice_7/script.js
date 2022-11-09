'use strict';


// // 4.5.1 Рекурсия и стек.

// function recursion() {
//     recursion();
// }

// recursion();

// _
// | _
// | | _
// | | | _

// function factorial(n) {

//     console.log(n);

//     if (n === 1) {
//         return 1;
//     }

//     return n * factorial(n - 1);   // 4 * 3 * 2 * 1
// }

// console.log(factorial(4));

// 5! = 5 * 4 * 3 * 2 * 1

// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1

// const obj = {
//     field1: '',
//     field2: '',
//     field3: '',
//     field4: {
//         field1: '',
//         field2: '',
//         field3: '',
//         field4: {
//             field: ''
//     }
// }

// обход дерева в глубь с помощью рекурсии. ==> Homework_9.1


// // 4.5.2 Методы:
// // setTimeout - выполняют callback через паузы (1 раз).
// // setInterval - выполняют callback через промежуток времени.

// setTimeout(() => {
//     console.log('Hello, Timeout');
// }, 1000);

// setInterval(() => {
//     console.log('Hello, Interval');
// }, 1000);

// 1000 миллисекунд.

// // EXAMPLE

// function makeTimeoutFunction() {
//     let i = 0;

//     return () => {
//         i++
//         console.log(`Вызвано ${i} раз`);
//     }
// }


// const timeoutFunction = makeTimeoutFunction();
// const interval = setInterval (timeoutFunction, 1000);

// function stopInterval () {
//     clearInterval(interval);
// }

// setTimeout(stopInterval, 3000);

// //способ 2 остановить:

// setTimeout (() => {
//     clearInterval(interval);
// }, 3000);



// // 4.6 Промисы, fetch API.

// // Promise

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {

//         reject('error');
//     }, 1000);
// });

// console.log(promise); // ничего не произойдет выводт сообщение в процессе

// promise.then((result) =>{
//     console.log('Промис завершился успешно' , result);
// }).catch((e) => {
//     console.log('Промис завершился неудачно', e);
// }).finally (() => {
//     console.log('Промис завершился');
// });

// //finaly выполняется всегда

// async function asyncFunction() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(60);
//             reject('error');
//         }, 1000);
//     });

//     try {
//     const result = await promise;
//     console.log(result);
//     } catch (e) {
//         console.log(e);
//     } finally {
//         console.log('finally');
//     }
// }

// asyncFunction();

// // 4.6.2 fetch API.

// fetch('https://reqres.in/api/users')
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     }).then ((result) =>{
//         console.log(result);
//     }).catch((e) => {
//         console.log(e);
//     });

// // способ 2 через асинхронную функцию

async function fetchData () {
    let result = null;

    try {
    const response = await fetch('https://reqres.in/api/users');
   result = await response.json();
    } catch (e) {
        console.log(e);
    }
    console.log(result);
};

fetchData();