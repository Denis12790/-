// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const accountBtn = document.getElementById('accountBtn');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const logoutBtn = document.getElementById('logoutBtn');

// Обработчик нажатия на кнопку "Зарегистрироваться"
registerBtn.addEventListener('click', function() {
    // Показываем форму регистрации
    registrationForm.style.display = 'block';
    // Скрываем сообщение об успехе и кнопку "Мой аккаунт", если они открыты
    successMessage.style.display = 'none';
    accountBtn.style.display = 'none';
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

    // Показываем сообщение об успешной регистрации
    registrationForm.style.display = 'none';
    successMessage.style.display = 'block';

    // Скрываем кнопку "Зарегистрироваться" и показываем кнопку "Мой аккаунт"
    registerBtn.style.display = 'none';
    accountBtn.style.display = 'inline-block';
});

// Обработчик нажатия на кнопку "Мой аккаунт"
accountBtn.addEventListener('click', function() {
    // Показываем сообщение о том, что пользователь авторизован
    alert("Вы в вашем аккаунте!");
    // Показываем кнопку "Выйти из аккаунта"
    logoutBtn.style.display = 'inline-block';
});

// Обработчик нажатия на кнопку "Выйти из аккаунта"
logoutBtn.addEventListener('click', function() {
    // Скрываем кнопку выхода
    logoutBtn.style.display = 'none';
    // Показываем кнопку "Зарегистрироваться" и скрываем "Мой аккаунт"
    registerBtn.style.display = 'inline-block';
    accountBtn.style.display =
