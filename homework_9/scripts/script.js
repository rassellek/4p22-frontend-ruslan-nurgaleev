"use strict";

const fibonacci = (() => {
  let last = -1,
    next = 1;

  return () => {
    const result = last + next;
    last = next;
    next = result;
    console.log(result);
    return result;
  };
})();

fibonacci(); // Вывод в консоль: 0
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 1
fibonacci(); // Вывод в консоль: 2
fibonacci(); // Вывод в консоль: 3
fibonacci(); // Вывод в консоль: 5
fibonacci(); // Вывод в консоль: 8
fibonacci(); // Вывод в консоль: 13
fibonacci(); // Вывод в консоль: 21
