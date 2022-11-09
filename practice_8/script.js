'use strict';


// // 4.7 События браузера, обработчики событий, всплытие и погружение, DOM, управляемые input'ы

// const container = document.getElementById('container_id');

// container.style.width = '100px';
// container.style.height = '100px';
// container.style.backgroundColor = 'red';

// container.classList.add('some-class');
// container.classList.remove('some-class');
// container.classList.toggle('some-class');

const container = document.querySelector('.container');
// const container = document.querySelectorAll('.container');

container.addEventListener('click', (event) => {
    console.log('click');       
    event.preventDefault();
});

container.addEventListener('mousedown', (event) => {
    console.log('mousedown');       
});

container.addEventListener('mouseup', (event) => {
    console.log('mouseup');       
});

container.addEventListener('mousemove', (event) => {
    console.log(event.clientX);       
});

const input = document.querySelector('input[name=email]');
console.log(input);

input.addEventListener('keydown', (event) => {
    event.preventDefault(); // отмена события
    
    console.log(event.target.value);       

    const regEx = /\d/g;

// // регулярные выражения https://regex101.com/

    event.target.value = event.target.value.replace(regEx, '');
});

const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');

document.addEventListener('click', (event) => {
    console.log('document');
    event.stopPropagation();
});

box1.addEventListener('click', (event) => {
    console.log('box-1');
    event.stopPropagation();
});

box2.addEventListener('click', (event) => {
    console.log('box-2');
    event.stopPropagation();
});

box3.addEventListener('click', (event) => {
    console.log('box-3');
    event.stopPropagation();
});

//////

document.addEventListener('click', (event) => {
    console.log('document capture');
}, {capture: true});


box1.addEventListener('click', (event) => {
    console.log('box-1 capture');
}, {capture: true});

box2.addEventListener('click', (event) => {
    console.log('box-2 capture');

}, {capture: true});

box3.addEventListener('click', (event) => {
    console.log('box-3 capture');

}, {capture: true});


