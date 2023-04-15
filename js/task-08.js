// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const inputForm = document.querySelector(".login-form");
const inputEmail = document.querySelector("email");
const inputPassword = document.querySelector("password");

inputForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();

  const inputEmail = event.currentTarget.elements.email.value;
  const inputPassword = event.currentTarget.elements.password.value;

  if (inputEmail === "" || inputPassword === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      Email: inputEmail,
      Password: inputPassword,
    };
    console.log(formData);
    event.currentTarget.reset();
  }
}
//закончено
