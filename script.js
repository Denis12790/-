// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const userDetails = document.getElementById('userDetails');
const logoutBtn = document.getElementById('logoutBtn');

// Обработчик нажатия на кнопку "Зарегистрироваться"
registerBtn.addEventListener('click', function() {
    // Показываем форму регистрации
    registrationForm.style.display = 'block';
    // Скрываем кнопку "Зарегистрироваться"
    registerBtn.style.display = 'none';
});

// Обработчик отправки формы регистрации
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем данные из формы
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Проверка на совпадение пароля и подтверждения пароля
    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    // Показываем сообщение об успешной регистрации и данные пользователя
    registrationForm.style.display = 'none';
    successMessage.style.display = 'block';
    userDetails.textContent = `Имя пользователя: ${username} | Email: ${email}`;

    // Добавляем обработчик для кнопки "Выйти из аккаунта"
    logoutBtn.addEventListener('click', function() {
        // Очищаем данные пользователя
        successMessage.style.display = 'none';
        registerBtn.style.display = 'block'; // Показываем кнопку "Зарегистрироваться"
        registrationForm.style.display = 'none'; // Скрываем форму регистрации
        document.getElementById('username').value = ''; // Очищаем поля ввода
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirmPassword').value = '';
    });
});
// Сохранение имени пользователя
localStorage.setItem("username", "Иван");

// Получение имени пользователя
let user = localStorage.getItem("username");
console.log(user); // Выведет: Иван

// Удаление имени
localStorage.removeItem("username");

// Очистка всего хранилища
localStorage.clear();
localStorage.removeItem("аааа");
