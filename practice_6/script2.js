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

// filter - фильтрация массива - возвращает новый массив, удовлетворяющий условиям.

// Фильтрация по индексу (см. ниже)
function deleteFromArray(array = [], index = 0) {
    return array.filter((item, innerIndex) => {
        return index !== innerIndex;
    });
}

// ***с помощью Lambda

function deleteFromArray(array = [], index = 0) {
    return array.filter((item, innerIndex) => index !== innerIndex);
}


const chelseaSquad = [
    {
        firstName:'Kepa',
        lastName: 'Arrizabalaga'
    },
    {
        firstName:'Reece',
        lastName: 'James'      
    },
    {
        firstName:'Cesar',
        lastName: 'Azpilicueta'      
    }
];

const filteredArray = chelseaSquad.filter((item, index, array) => {  //функция без параметров - колбэк
// Функция выполняется для каждого элемента
// В filteredArray попадут те элементы, где функция вернула true.

    return item.lastName[0] === 'A'; // третья буква а
}); 
console.log(filteredArray);

// Фильтрация по индексу с помощью функции deleteFromArray
const changedArray = deleteFromArray(chelseaSquad, 1);
console.log(changedArray);

// map - возвращает переформированный массив

const changedArray2 = chelseaSquad.map((item) => {
    return {
        name: item.firstName,
        surname: item.lastName
    }
});
console.log(changedArray2);

const changedArray3 = chelseaSquad.map((item) => { 
    return `${item.firstName} ${item.lastName}`
});

console.log(changedArray3);

const changedArray4 = chelseaSquad.map((item, index) => {
    return {
        // firstName: item.firstName,
        // lastName: item.lastName,
        ...item, //с помощью spread заменяем копирование полностью объекта
        id: index
    }
});
console.log(changedArray4);

// reduce - обработка каждого элемента с сохранением результата

const reducedArray = chelseaSquad.reduce((accumulator, item, index) => {

    let resString = `${item.firstName} ${item.lastName}`

    if (index === resString.length - 1) { //############ КАК ПРАВИЛЬНО
        resString += ', ';
    }
    
    accumulator += resString;

    return accumulator;

}, ''); //0 {} [] ''

console.log(reducedArray);

const arrNumbers = [
    {
        x: 5,
        y: 10
    },
    {
        x: 15,
        y: 20
    },
    {
        x: 39,
        y: 27
    }
];
// Считаем (x0 + y0) * (x1 + y1) * (x2 + y2)
const result = arrNumbers.reduce((accumulator, item, index, array) => {
accumulator *= (item.x + item.y);
// Необходимо вернуть новое значение аккумулятора
return accumulator;
}, 1);// Начальное значение аккумулятора после функции

console.log(result);


// УБРАТЬ ПОВТОРЫ СОХРАНИВ МАССИВ

const arr4 = ['банан', 'яблоко', 'яблоко'];

const result2 = Object.keys(arr4.reduce((acc, item) => {
    
    acc[item] = '';
    
    return acc;

}, {}));

console.log(result2); 


// ПОДСЧЕТ ПОВТОРОВ

const result3 = arr4.reduce((acc, item) => {
    
    acc[item] = acc[item] ? acc[item] += 1 : 1;
    
    return acc;

}, {});

console.log(result3); 