'use strict';

// // 4.9 Введение в ООП. Классы в javascript.

// const body = document.querySelector('body');

// const div = document.createElement('div');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.backgroundColor = 'red';
// div.id = 'some-div';

// body.appendChild(div);

// setTimeout(() =>{
//     div.style.backgroundColor = 'green';
// }, 1000);

// const div2 = document.getById ('some-div'); для создания дочерних объектов.

// // Генерирование объектов с помощью классов JS:

class Person {
    _firstName = '';
    _lastName = '';
    _age = '';
    money = 0;

    static writeHello() {
        console.log('Hello!');
    }

    constructor(firstName = '', lastName = '', age = '') {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set age(age) {
        this._age = age;
    }

    get age() {
        return `${this._age} лет`;
    }
    // topUpAccount(count = 0) {
    //     this.money += count;
    // }

    sayHi() {
        console.log('hello!');
    }

    _getFullName() {
        return `${this._firstName} ${this._lastName}`;

    }

    writeFullName() {
        console.log(this._getFullName());
    }

    // // привязка контекста

    // _getFullName = () => {
    //     console.log(`${this._firstName} ${this._lastName}`);

    // }

    // writeFullName() {
    //     setTimeout(this._getFullName(), 1000);
    // }

    // _getFullName() {
    //     console.log(`${this._firstName} ${this._lastName}`);

    // }

    // writeFullName() {
    //     setTimeout(this._getFullName().bind(this), 1000);
    // }
}

// const person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     age: 50,
//     sayHi: () => {
//         console.log('hello!');
//     }
// };

// const person2 = {
//     firstName: 'Ruslan',
//     lastName: 'Nur',
//     age: 50,
//     sayHi: () => {
//         console.log('hello!');
//     }
// };

// const person3 = {
//     firstName: 'Alex',
//     lastNmae: 'Popit',
//     age: 50,
//     sayHi: () => {
//         console.log('hello!');
//     }
// };

const person = new Person('Ruslan', 'Nurgaleev', 27);
const person2 = new Person();

// person.topUpAccount(10000);

console.log(person);
console.log(person2);


// // В ООП имеется понятие "инкапсуляция"

person.age = 50;

console.log(person.age);

person.writeFullName();

// // static не имеет доступа к this 

Person.writeHello();

// // Наследование

class Employee extends Person {
    // _firstName;
    // _lastName;
    // _age;
    _taxNumber;

    constructor(firstName = '', lastName = '', age = '', taxNumber = '') {
        // this._firstName = firstName;
        // this._lastName = lastName;
        // this._age = age;
        super(firstName, lastName, age);
        this._taxNumber = taxNumber;
    }
}

const employee = new Employee('Ruslan', 'Nurgaleev', 27, '656656');

employee.writeFullName();