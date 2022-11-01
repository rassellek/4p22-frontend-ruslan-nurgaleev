'use strict';

// // 4.3 Массивы, методы массивов

const arr = [];
const arr2 = ['яблоко', 'банан', 'персик'];

// Желательно сохранять струтуру (одинаковые типа, поля) для удобства обработки

const objectList = [ 
    {
        firstName: 'Petr',
        lastName: 'Cech',
        birthDate: '20.05.1982'
    },
    {
        firstName: 'Branislav',
        lastName: 'Ivanovich'
    },
    {
        firstName: 'John',
        lastName: 'Terry'
    },
    {
        firstName: 'Ricardo',
        lastName: 'Carvalho'
    },
    {
        firstName: 'Ruslan',
        lastName: 'Nur'
    },
    {
        firstName: 'Andrew',
        lastName: 'Gulin'
    }
];

// Длинна массива
const length = objectList.length;
console.log(length);


const element = objectList[3];
console.log(element.firstName);

// Последний элемент - способ 1
const element2 = objectList[objectList.length - 1];
console.log(element2.firstName);

// Перебор всех элементов - способ 1
for (let i = 0; i < objectList.length; i++) {
    console.log(objectList[i].firstName);
}

// Сумма массива
const numberList =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
}
console.log(sum); //55

// // Перебор всех элементов - способ 2
// objectList.forEach((item) => {
//     console.log(item.firstName);
// });

// objectList.forEach((elem, index) => {
//     console.log(`${index + 1}. ${elem.firstName}`);
// });

// objectList.forEach((elem, index, array) => {
//     console.log(array);
//     console.log(`${index + 1}. ${elem.firstName}`);
// });

objectList.forEach((elem, index) => {
    console.log('Итерация  цикла', index);
    console.log(`${index + 1}. ${elem.firstName}`);
    if (index >= 4) {
        return;
    }   
});

for (let i = 0; i < objectList.length; i++) {
    console.log('Итерация  цикла', i);
    console.log(`${i + 1}. ${objectList[i].firstName}`);
    if (i >= 4) {
        break;
    }
};


// // Методы массивов
// // push - добавить с конца массива

objectList.push({
    firstName: 'Frank',
    lastName: 'Lam'
});

arr2.push('папайя');

console.log(objectList);
console.log(arr2);

// // pop - удалить с конца массива

const lastElem = arr2.pop();
console.log(lastElem);
console.log(arr2);

// unshift - добавить в начало массива
arr2.unshift('Папайя');
console.log(arr2);

// shift - удалить с начала массива
const firstElem = arr2.shift();
console.log(firstElem);
console.log(arr2);

// indexOf - индекс элемента
const index = arr2.indexOf('банан');
console.log(index); //1

// findIndex - индекс элемента
const index2 = objectList.findIndex((item) => {
    return item.firstName === 'Petr';
});
console.log(index2); //0

// find - поиск в массиве
const elem = objectList.find((item) => {
    return item.lastName === 'Terry';
});
console.log(elem); //нашел объект по фамилии

//slice - копировать массив с индекса(включая его) по индекс(не вкключая его)
const arr3 = arr2.slice(1, 2);
console.log(arr3); 

// splice - вырезать и изменить массив с "индекса" в "количестве"
arr2.splice(1, 2);
console.log(arr2); 