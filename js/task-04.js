// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

/* <div id="counter">
<button type="button" data-action="decrement">-1</button>
<span id="value">0</span>
<button type="button" data-action="increment">+1</button>
</div>  */

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
let counterValue = 0;

const refCounter = document.querySelector("#counter");
const refDecrementBtn = refCounter.firstElementChild;
const refIncrementBtn = refCounter.lastElementChild;
let refValue = document.querySelector("#value");

const stepDecrement = +refDecrementBtn.textContent;
const stepIncrement = +refIncrementBtn.textContent;
// console.log(refCounter);
// console.log(refDecrementBtn);
// console.log(refIncrementBtn);
// console.log(refValue);
// console.log(typeof stepIncrement);

refDecrementBtn.addEventListener("click", onClickDecrement);

function onClickDecrement() {
  counterValue += stepDecrement;
  refValue.textContent = counterValue;
  return refValue;
}

refIncrementBtn.addEventListener("click", onClickIncrement);

function onClickIncrement() {
  counterValue += stepIncrement;
  refValue.textContent = counterValue;
  return refValue;
}

// закончено
