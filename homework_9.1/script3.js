"use strict";

const user = {
  firstName: "Andrew",
  lastName: "Gulin",
  id: 2344234,
  taxNumber: "13135153",
  personalInfo: {
    tel: 34354,
    passort: 12351531,
    deepObj: 'xvxv',
    sas: 'lol',
  },
  kwkwk: {
    wdwd: 'qwwqewr',
    wdwdwd:'cscscs',
  }
};

let countElementsObj = 0;
let countElementsObj2 = 0;

console.log(`{`);
document.getElementById("demo").innerHTML += `{`;

function recursion(obj) {


  for (let item in obj) {
    let stringJson = "";
        
    if (typeof obj[item] === "object" && countElementsObj == 0) {
        countElementsObj = Object.keys(obj[item]).length;     
        console.log(`"` + item + `"` + `: {` + `   `);
        document.getElementById("demo").innerHTML += stringJson + `"` + item + `"` + `: {` + `<br>`;
        recursion(obj[item]);
    } else  if (typeof obj[item] === "object" && countElementsObj != 0) {
        countElementsObj2 = Object.keys(obj[item]).length;     
        console.log(`    ` + `"` + item + `"` + `: {` + `   `);
        document.getElementById("demo").innerHTML += stringJson + `    ` + `"` + item + `"` + `: {` + `<br>`; 
        countElementsObj = countElementsObj - 1;
   } else  if (countElementsObj2 != 0) { 
        console.log(`        ` + `"` + item + `"` + ":", obj[item] + `, `);
        document.getElementById("demo").innerHTML += stringJson + `        ` + `"` + item + `"` + `: ` + obj[item] + `, ` + `<br>`;   
        countElementsObj2 = countElementsObj2 - 1;  
   } else if (countElementsObj != 0) { 
        countElementsObj = countElementsObj -1;
        console.log(`    ` + `"` + item + `"` + ":", obj[item] + `, `);
        document.getElementById("demo").innerHTML += stringJson + `    ` + `"` + item + `"` + `: ` + obj[item] + `, ` + `<br>`;   
   } else {
        console.log(`"` + item + `"` + ":", obj[item] + `, `);
        document.getElementById("demo").innerHTML += stringJson + `"` + item + `"` + `: ` + obj[item] + `, ` + `<br>`;  
   }         
  }

  console.log(`}`);
  document.getElementById("demo").innerHTML += `} <br>`;
}

recursion(user);
