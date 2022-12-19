"use strict";

const errorColor = "#EE2424";
const correctColor = "#787878";

const confirmationOutput = document.getElementById("confirmation-output");

const userData = {
  pattern: "",
  theme: "",
  confirmation: "",
};

let i = 0;
let d = document;

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function validateConfirmation(confirmation) {
    const re = /^(?!.*work5)[A-Za-z0-9-]+$/;
    return re.test(String(confirmation).toLowerCase());
  }

  const formData = new FormData(form);

  const pattern = formData.get("pattern");
  const theme = formData.get("theme");
  const confirmation = formData.get("confirmation");

  let isValid = true;

  if (confirmation.trim() === "") {
    confirmationOutput.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (!validateConfirmation(confirmation)) {
    confirmationOutput.innerText = "Домен введён некорректно";
    isValid = false;
  } else {
    confirmationOutput.innerText = "";
  }

  if (isValid === true) {
    userData.pattern = pattern;
    userData.theme = theme;
    userData.confirmation = confirmation;
    console.log(userData);

    i += 1;

    let div = d.createElement("div");
    div.className = `shopsContainer mt-0 text-secondary op shops${i}`;
    div.id = `shops${i}`;
    d.querySelector(`.shop`).appendChild(div);

    let div1 = d.createElement("div");
    div1.id = "num";
    div1.innerText = `${i}`;
    div1.style.width = "10%";
    d.querySelector(`.shops${i}`).appendChild(div1);

    let div2 = d.createElement("div");
    div2.id = "patternSelect";
    div2.className = "patternSelect";
    div2.innerText = `${pattern}`;
    div2.style.width = "15%";
    d.querySelector(`.shops${i}`).appendChild(div2);

    let div3 = d.createElement("div");
    div3.id = "themeSelect";
    div3.className = "themeSelect";
    div3.innerText = `${theme}`;
    div3.style.width = "15%";
    d.querySelector(`.shops${i}`).appendChild(div3);

    let div4 = d.createElement("div");
    div4.id = " adressSelect";
    div4.className = "adressSelect";
    div4.innerText = `http://www.${confirmation}.ru/services`;
    d.querySelector(`.shops${i}`).appendChild(div4);

    let div5 = d.createElement("input");
    div5.id = `${i}`;
    div5.className = "btn btn-secondary btn-w";
    div5.innerText = `Удалить`;
    div5.type = "button";
    div5.value = "Удалить";
    div5.style.width = "15%";
    div5.onclick = () => {
      document.getElementById(`shops${div5.id}`).remove();
    };
    d.querySelector(`.shops${i}`).appendChild(div5);
  }
});
