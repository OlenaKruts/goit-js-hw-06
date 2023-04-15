// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//підставляє його поточне значення в span#name-output. Якщо інпут порожній,
//у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onTargetName);

function onTargetName(event) {
  if (event.currentTarget.value !== "") {
    refs.text.textContent = event.currentTarget.value;
  } else {
    refs.text.textContent = "Anonymous";
  }
}
//закончено
