const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// Напиши скрипт для створення галереї зображень на підставі масиву даних.
//HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
// Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
const gallery = document.querySelector("ul.gallery");
//console.log(gallery);
const imageGallery = [];
//let imgElString = "";
const itemsGallery = images.map((image) => {
  const imageEl = document.createElement("img");
  //console.log(typeof imageEl);
  imageEl.src = image.url;
  imageEl.alt = image.alt;
  imageEl.width = 320;
  imageEl.height = 180;
  imageEl.style.objectFit = "cover";
  imageEl.style.border = "1px solid black";

  //console.log(imageEl);
  //imgElString += imageEl;
  //console.log(imgElString);
  imageGallery.push(imageEl);
  //console.log(imageGallery);
  //gallery.insertAdjacentHTML("afterbegin", imageEl);
});

//console.log(imageGallery);

gallery.append(...imageGallery);
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.rowGap = "10px";
//const first = imageGallery.join(",");
//console.log(...imageGallery.toString());
//gallery.insertAdjacentHTML("afterbegin", imageGallery.toString());

// добавить стили
