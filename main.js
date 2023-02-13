let elForm = document.querySelector("#form");
let elTitle = document.querySelector("#title");
let elInputText = document.querySelector("#text");
let elInputPass = document.querySelector("#pass");
let span = document.querySelector("#span");
let elSubBtn = document.querySelector("btn");

let reaPassword = "20030509";
let realEmail = "programistc7@gmail.com";

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let elInputTextValue = elInputText.value;
  let elInputPassValue = elInputPass.value;
  let infor = [];
  infor.push(elInputTextValue);
  infor.push(elInputPassValue);
  console.log(infor);
  if (elInputPassValue === reaPassword && elInputTextValue === realEmail) {
    span.textContent = `Siz muvofaqqiyatli ro'yxatdan o'tdingiz ✍️✍️✍️`;
    span.className = "success";
    elForm.reset();
  } else {
    span.textContent = `Parol yoki Email xato ❌❌❌`;
    span.className = "span";
    elForm.reset();
  }
});
