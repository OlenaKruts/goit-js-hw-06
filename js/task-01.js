// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
//  елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const category = document.querySelector("#categories");
// console.log(category);
const itemsInCategory = category.children;
// console.log(itemsInCategory);
console.log("Number of categories: " + itemsInCategory.length);

const arrItemsInCategory = Array.from(itemsInCategory);
// console.log(arrItemsInCategory);
arrItemsInCategory.forEach((item, index) => {
  const titleOfCategory = item.firstElementChild.textContent;
  console.log("Category: " + titleOfCategory);
  const grupOfCategory = item.firstElementChild.nextElementSibling.children;
  console.log("Elements: " + grupOfCategory.length);
});


// закончено