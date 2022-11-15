"use strict";

const user = {
  firstName: "Andrew",
  lastName: "Gulin",
  id: 2344234,
  taxNumber: "13135153",
  personalInfo: {
    tel: 34354,
    passort: 12351531,
    arr: [1, 3, "sdscs"],
    deepObj: {
      some1: 124,
      asda: "wqerty",
    },
  },
};

// function viewObject(obj) {
//   for (let [key, value] of Object.entries(obj)) {
//     console.log("key: ", key)
//     console.log("value: ", value)

//     if (typeof value !== "object" ) {
//         console.log(`"${key}": ${value}`);
//       continue;
//     }
    
//     if (typeof value === "object" ) {
//         console.log(`"${key}": {}`);
//     }
//     viewObject(value);
//   }
// }

// viewObject(user);

// console.log(example);

// var stringJson = JSON.stringify(example, null, '\t');

// console.log(stringJson);

// document.getElementById("demo").innerText = stringJson;

function parseObjectProperties(obj, parse) {
  for (var k in obj) {
    if (typeof obj[k] === "object" && obj[k] !== null) {
      parseObjectProperties(obj[k], parse);
    } else if (obj.hasOwnProperty(k)) {
      parse(k, obj[k]);
    }
  }
}

parseObjectProperties(user, function (k, prop) {
  let stringJson = '';

  console.log(`${k}: ${prop}`);

  document.getElementById("demo").innerHTML +=
    stringJson + `<br>` + `\t` + `${k}: ${prop}`;
});


