const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
// console.log(ingredients[0]);
// console.dir(ingredients);

const makeupIngredients = [];
const ulIngredients = document.querySelector("#ingredients");

ingredients.forEach((ingredient, index, array) => {
  const liIngredient = document.createElement("li");
  liIngredient.classList.add("item");
  liIngredient.textContent = ingredients[index];

  makeupIngredients.push(liIngredient);
});

console.log(makeupIngredients);

ulIngredients.append(...makeupIngredients);
 
// закончено