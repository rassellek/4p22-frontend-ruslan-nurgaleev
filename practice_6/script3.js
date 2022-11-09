'use strict';


// // 4.4 Object.keys, values, entries, Map, Set

const person = {
        firstName: 'Andrew',
        lastName: 'Gulin',

}

console.log(Object.keys(person));

console.log(Object.values(person));

console.log(Object.entries(person));

Object.entries(person).forEach((entry) =>{
    console.log(`Ключ: ${entry[0]}, Значение: ${entry[1]}`);
});

Object.entries(person).forEach(([ key, value ]) =>{
    console.log(`Ключ: ${key}, Значение: ${value}`);
});

// Set - множество значений. По сути, очень сильно перекликается с массивом.
// Главное отличие - не может содержать повторяющихся значений.

const set = new Set();

set.add('яблоко');
set.add('яблоко');
set.add('банан');

console.log(set);
// в результате в set будет только два значения - яблоко и банан

//set.clear(); // очистить множество
set.delete('банан'); // удалить элемент по значению
console.log(set.size); // количество элементов в множестве // 1
// Пробежаться по значениям множества
for (let entry of set) {
    console.log(entry);
}

//Map
// Раньше для создания объекта с парами ключ-значение использовали объект, но у
// Map есть несколько преимуществ (именно для пар ключ-значение).
// Сравнение объектов и мап на MDN.

const map = new Map();
map.set('Ключ', 'Значение');
map.set('Ключ2', 'Значение2');



console.log(map.size); // Количество пар ключ-значение
console.log(map.get('Ключ')); // Возвращает значение с ключом "Ключ"
console.log(map.has('Ключ')); // true, если map содержит значение с ключом "Ключ"
//console.log(map.delete('Ключ')); // Удаляет пару ключ-значение с ключом "Ключ"


// Пробежаться по элементам map
for (let [key, value] of map) {
    console.log(`${key} - ${value}`);
}


// Другой вариант
for (let entry of map) {
const key = entry[0];
const value = entry[1];
}

