document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Простая проверка логина и пароля (замените на свою систему аутентификации)
    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedInUser", username); // Сохраняем пользователя в локальном хранилище
        window.location.href = "dashboard.html"; // Перенаправляем на главную страницу журнала
    } else {
        errorMessage.textContent = "Неверный логин или пароль!";
    }
});
