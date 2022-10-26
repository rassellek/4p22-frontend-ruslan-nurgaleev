'use strict'

const button = document.getElementById('submit');
const output = document.getElementById('output');

button.addEventListener('click', (event) => {
    let firstNumber = document.getElementById('first-number').value;
    const operation = document.getElementById('operation').value;
    let secondNumber = document.getElementById('second-number').value;
    let result;

    event.preventDefault();

    if (firstNumber == '') { return output.innerText = 'Первое число не указано', console.log('Первое число не указано'); }

    if (secondNumber == '') { return output.innerText = 'Второе число не указано', console.log('Второе число не указано'); }

    if ((isNaN(firstNumber) === true) || (isNaN(secondNumber) === true)) {
        return output.innerText = 'Некорректный ввод чисел', console.log('Некорректный ввод чисел');
    }

    if ((output !== 'Первое число не указано') && (output !== 'Второе число не указано') && (output !== 'Некорректный ввод чисел')) {

        switch (operation) {
            case '': return output.innerText = 'Не введён знак', console.log('Не введён знак'); break;
            case '+': result = Number(firstNumber) + Number(secondNumber); break;
            case '-': result = Number(firstNumber) - Number(secondNumber); break;
            case '*': result = Number(firstNumber) * Number(secondNumber); break;
            case '/': result = Number(firstNumber) / Number(secondNumber); break;
            default: return output.innerText = 'Программа не поддерживает такую операцию', console.log('Программа не поддерживает такую операцию');
        };
    }

    if ((output !== 'Программа не поддерживает такую операцию') && (isNaN(result) || result === Infinity)) {
        return output.innerText = 'Операция некорректна', console.log('Операция некорректна');
    } else { return output.innerText = `Результат: ${result}`, console.log(result); }

});