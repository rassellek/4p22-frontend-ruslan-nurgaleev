"use strict";

//Допущение наличия двух объявленных функций в глобальном контексте (основная -  fibonacci , и функция-помощник).

function makeFibonacciFunction() {
  let next = 1;
  let last = -1;

  return function () {
    const result = last + next;
    last = next;
    next = result;
    console.log(result);
    // console.log(`last.${last}`); // Показать изменения переменных в контексте
    // console.log(`next.${ next}`); // Показать изменения переменных в контексте
    return result;
  };
}

const fibonacci1 = makeFibonacciFunction();

fibonacci1(); // Вывод в консоль: 0
fibonacci1(); // Вывод в консоль: 1
fibonacci1(); // Вывод в консоль: 1
fibonacci1(); // Вывод в консоль: 2
fibonacci1(); // Вывод в консоль: 3
fibonacci1(); // Вывод в консоль: 5
fibonacci1(); // Вывод в консоль: 8
fibonacci1(); // Вывод в консоль: 13
fibonacci1(); // Вывод в консоль: 21

// *Реализация задания только с одной объявленной в глобальном контексте функцией. (IIFE)

const fibonacci2 = (function makeFibonacciFunction() {
  let next = 1;
  let last = -1;

  return function () {
    const result = last + next;
    last = next;
    next = result;
    console.log(result);
    // console.log(`last.${last}`); // Показать изменения переменных в контексте
    // console.log(`next.${ next}`); // Показать изменения переменных в контексте
    return result;
  };
})();

fibonacci2(); // Вывод в консоль: 0
fibonacci2(); // Вывод в консоль: 1
fibonacci2(); // Вывод в консоль: 1
fibonacci2(); // Вывод в консоль: 2
fibonacci2(); // Вывод в консоль: 3
fibonacci2(); // Вывод в консоль: 5
fibonacci2(); // Вывод в консоль: 8
fibonacci2(); // Вывод в консоль: 13
fibonacci2(); // Вывод в консоль: 21

// **Замена на стрелочные функции. (IIFE + Lambda)

const fibonacci3 = (() => {
  let last = -1,
    next = 1;

  return () => {
    const result = last + next;
    last = next;
    next = result;
    console.log(result);
    // console.log(`last.${last}`); // Показать изменения переменных в контексте
    // console.log(`next.${ next}`); // Показать изменения переменных в контексте
    return result;
  };
})();

fibonacci3(); // Вывод в консоль: 0
fibonacci3(); // Вывод в консоль: 1
fibonacci3(); // Вывод в консоль: 1
fibonacci3(); // Вывод в консоль: 2
fibonacci3(); // Вывод в консоль: 3
fibonacci3(); // Вывод в консоль: 5
fibonacci3(); // Вывод в консоль: 8
fibonacci3(); // Вывод в консоль: 13
fibonacci3(); // Вывод в консоль: 21
