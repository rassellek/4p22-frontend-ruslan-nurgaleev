'use strict';

// // 4.9 LocalStorage SessionStorage cookies

localStorage.setItem('theme', 'dark');

console.log(localStorage.getItem('theme'));

// localStorage.clear();

sessionStorage.setItem('theme', 'dark'); // хранит данные в пределах одной сессии, одной вкладке браузера.

// https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js 
// удаление
// https://www.npmjs.com/package/js-cookie 
// документация
document.cookie = 'key=value';


console.log(document.cookie);

