// Отримай посилання на кнопку вхід через Google
const loginBtn = document.getElementById("loginBtn");

// Додай обробник події для натискання на кнопку
loginBtn.addEventListener("click", () => {
  // Отримай провайдера для входу через Google
  const provider = new firebase.auth.GoogleAuthProvider();
  
  // Виклич функцію для входу через Google
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // Вхід успішно виконано, можливо виконати додаткові дії
      console.log("Успішний вхід через Google", result.user);
    })
    .catch((error) => {
      // Виникла помилка під час входу через Google
      console.error("Помилка входу через Google", error);
    });
});

