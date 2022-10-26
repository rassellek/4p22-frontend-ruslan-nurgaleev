'use strict'

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submit');

//РЕЖИМ РЕАЛЬНОГО ВРЕМЕНИ
// loginInput.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

// passwordInput.addEventListener('input', (event) => {
//     console.log(event.target.value);
// });

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(passwordInput.value);
});
