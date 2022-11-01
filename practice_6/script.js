'use strict';


// // 4.4 Object.keys, values, entries, Map, Set

// // 1. Object.assign ({таргет}, источник1, источник2) - копирование объекта

// const person = {
//         firstName: 'Andrew',
//         lastName: 'Gulin'
// }

// const employee = {
//     lastName: 'GulinEmployee',
//     id: 2344234,
//     taxNumber: '13135153'
// }

// const person2 = Object.assign ({}, person, employee);
// const person3 = { ...person, ...employee}; // альтернативна spread

// console.log(person2);
// console.log(person3);


const employee = {
    lastName: 'GulinEmployee',
    id: 2344234,
    taxNumber: '13135153',
    personalInfo: {
        tel: 34354,
        passort: 12351531
    }
}

// json - JavaScript Object Notation
const stringJson = JSON.stringify(employee);
console.log(stringJson); //JSON

const employee2 = JSON.parse(stringJson);
console.log(employee2); //ОБЪЕКТ

employee2.personalInfo.passort = 0;

console.log(employee.personalInfo.passort); // 12351531
console.log(employee2.personalInfo.passort); //0

