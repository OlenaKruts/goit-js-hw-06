// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputChangeBorder = document.querySelector("#validation-input");
const lengthAttribute = inputChangeBorder.getAttribute("data-length");

//console.log(lengthAttribute);

inputChangeBorder.addEventListener("blur", onValidInput);

function onValidInput(event) {
  //console.log(event.currentTarget.value.length);
  //console.log(lengthAttribute);
  //console.log(event.currentTarget.value.length == lengthAttribute);
  if (event.currentTarget.value.length == lengthAttribute) {
    inputChangeBorder.classList.add("valid");
    inputChangeBorder.classList.remove("invalid");

    //console.log(inputChangeBorder);
  } else {
    inputChangeBorder.classList.remove("valid");
    inputChangeBorder.classList.add("invalid");
    //console.log(inputChangeBorder);
  }
}

//закончено
