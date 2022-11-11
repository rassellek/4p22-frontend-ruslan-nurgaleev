"use strict";

const errorColor = "#EE2424";
const correctColor = "#787878";

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
  radio: "",
  textarea: "",
  checkbox: "",
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
  const radio = formData.get("gender-radio-group");
  const textarea = formData.get("textarea");
  const checkbox = formData.get("check");

  let isValid = true;

  if (email.trim() === "") {
    emailBorder.style.borderColor = errorColor;
    emailOutput.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (!validateEmail(email)) {
    emailBorder.style.borderColor = errorColor;
    emailOutput.innerText = "Email введён некорректно";
    isValid = false;
  } else {
    emailBorder.style.borderColor = correctColor;
    emailOutput.innerText = "";
  }

  if (password.trim() === "") {
    passwordBorder.style.borderColor = errorColor;
    passwordOutput.innerText = "Поле обязательно для заполнения";
    isValid = false;
  } else if (password.length < 8) {
    passwordBorder.style.borderColor = errorColor;
    passwordOutput.innerText = "Пароль должен содержать не менее 8 символов";
    isValid = false;
  } else {
    passwordBorder.style.borderColor = correctColor;
    passwordOutput.innerText = "";
  }

  if (confirmation.trim() === "" || confirmation !== password) {
    confirmationBorder.style.borderColor = errorColor;
    confirmationOutput.innerText = "Пароли не совпадают";
    isValid = false;
  } else {
    confirmationBorder.style.borderColor = correctColor;
    confirmationOutput.innerText = "";
  }

  if (isValid === true) {
    userData.email = email;
    userData.password = password;
    userData.confirmation = confirmation;
    userData.radio = radio;
    userData.textarea = textarea;
    userData.checkbox = checkbox;
    console.log(userData);
  }
});
