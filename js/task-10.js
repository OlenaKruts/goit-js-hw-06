function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesEl = document.querySelector("#boxes");
const divControls = document.querySelector("#controls");
const inputAmountEl = divControls.firstElementChild;
const btnDestroyEl = divControls.lastElementChild;
const btnCreateEl = btnDestroyEl.previousElementSibling;

let divAll = [];
const divElFirstSize = 30;
const divElSizeChangeStep = 10;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    const divElChangeSize =
      divElFirstSize + (i - 1) * divElSizeChangeStep + "px";
    divEl.style.width = divElChangeSize;
    divEl.style.height = divElChangeSize;
    divEl.style.color = getRandomHexColor();
    divAll.push(divEl);
    //console.log(divEl);
  }
  boxesEl.append(...divAll);
}

btnCreateEl.addEventListener("click", () => {
  const amount = inputAmountEl.value;
  createBoxes(amount);
});

btnDestroyEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  for (const divElement of divAll) {
    divElement.remove();
  }
}

// закончено
