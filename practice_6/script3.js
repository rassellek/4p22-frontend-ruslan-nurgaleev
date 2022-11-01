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