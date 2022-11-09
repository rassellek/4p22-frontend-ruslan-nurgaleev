'use strict';

const example = {
    firstName: 'Andrew',
    lastName: 'Gulin',
    id: 2344234,
    taxNumber: '13135153',
    personalInfo: {
        tel: 34354,
        passort: 12351531
    }
};

console.log(example);

var stringJson = JSON.stringify(example, null, '\t');

console.log(stringJson);

document.getElementById("demo").innerText = stringJson;







