"use strict";

const emailOutput = document.getElementById("email-output");
const emailBorder = document.getElementById("email");
const passwordOutput = document.getElementById("password-output");
const passwordBorder = document.getElementById("password");
const confirmationOutput = document.getElementById("confirmation-output");
const confirmationBorder = document.getElementById("confirmation");

const userData = {
  email: "",
  password: "",
  confirmation: "",
};

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");
  const confirmation = formData.get("confirmation");
  let isValid = true;

  if (email.trim() === "") {
    emailBorder.style.borderColor = "#EE2424";
    emailOutput.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailBorder.style.borderColor = "#EE2424";
    emailOutput.innerText = "Email введён некорректно";
    isValid = false;
  } else {
    emailBorder.style.borderColor = "#787878";
    emailOutput.innerText = "";
  }

  if (password.trim() === "") {
    passwordBorder.style.borderColor = "#EE2424";
    passwordOutput.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (password.length < 8) {
    passwordBorder.style.borderColor = "#EE2424";
    passwordOutput.innerText = "Пароль должен содержать не менее 8 символов";
    isValid = false;
  } else {
    passwordBorder.style.borderColor = "#787878";
    passwordOutput.innerText = "";
  }

  if (confirmation.trim() === "" || confirmation !== password) {
    confirmationBorder.style.borderColor = "#EE2424";
    confirmationOutput.innerText = "Пароли не совпадают";
    isValid = false;
  } else {
    confirmationBorder.style.borderColor = "#787878";
    confirmationOutput.innerText = "";
  }

  if (isValid === true) {
    userData.email = email;
    userData.password = password;
    userData.confirmation = confirmation;
    console.log(userData);
  }
});
