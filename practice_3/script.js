'use strict';

const str = 'строка'.toUpperCase();
const str2 = 'СтРока'.toLowerCase();

console.log(str);
console.log(str2);

console.log('строка'.toUpperCase()); //Тоже работает, объявление переменной необязательно.

console.log('Строка'.includes('рок')); // Проверка наличия подстроки в строке - true.

console.log('Строка'.startsWith('Стр')); // Проверка начала подстроки в строке - true.

console.log('Строка'.endsWith('ка')); // Проверка конца подстроки в строке - true.

const strReplace = 'А роза упала на лапу Азора'.replace('А', 'а');
// Заменяет только первое вхождение подстроки (первую найденную подстроку)
const strReplaceAll = 'А роза упала на лапу Азора'.replaceAll('А', 'а');
// Заменяет все вхождения подстроки
// (все найденные подстроки)

console.log(strReplace); // 'а роза упала на лапу Азора'
console.log(strReplaceAll); // 'а роза упала на лапу азора'

const str3 = '    строка с пробелами по краям       '.trim();
// 'строка с пробелами по краям'

console.log(str3);

const str4 = 'Привет!';
console.log(str4[0]); // 'П' (нумерация с 0)

console.log(str4.length); // 7 (длина строки)

console.log(str4.substring(2,4)); // Срез строки

const a = null;
const b = 'Строка';
const c = 0;
// resultOr присвоится первое не-falsey значение.
const resultOr = a || b || c; // result: 'Строка'
// resultAnd присвоится значение первой falsey-переменной (слева-направо)
// Если все оказались true, значит присвоится значение последней
const resultAnd = a && b && c; // result: null

console.log(resultOr); // result: 'Строка'
console.log(resultAnd); // result: null

// result присвоится результат сравнения.
const result = '1' == 1; // result: true тип не учитывается
const result2 = '1' === 1; // result: false с учетом типа

console.log(result); // result: true
console.log(result2); // result: false

//#################ВЕТЛЕНИЯ############################
 
//const num = 5;
//const num2 = 9;


//if (num >= 5 && num2 >= 10) {
//    console.log('Число 1 больше или равно 5 и Число 2 больше или равно 10');
//} else {
//    console.log('ИНАЧЕ');
//}

 // Результат примера - ИНАЧЕ

 //####################################################

const age = 26;
const firstName = 'Andrew';
const lastName = 'Gulin';
// можно комбинировать несколько условий с
// помощью логических операторов.
if (age > 18 && age < 30) {
console.log('Ваш возраст от 18 до 30');
}
// у логического И приоритет больше, поэтому
// если нет скобок, то И выполнится первым, и затем ИЛИ
// Если нужен другой приоритет, можно воспользоваться скобками
if ((firstName === 'Andrew' || firstName === 'Андрей') && age > 18) {
console.log('Условие выполнилось')
}

const someVariable = 'ЗНАЧЕНИЕ';
switch (someVariable) {
case 'Значение 1': console.log('1'); break;
case 'Значение 2': {
// можно выполнять несколько операций, для этого
// надо поставить фигурные скобки
} break;
default: {
// Если someVariable не совпало ни с одним значением case,
// выполняется default.
}
}