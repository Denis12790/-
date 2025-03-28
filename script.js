// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const createChannelBtn = document.getElementById('createChannelBtn');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const logoutBtn = document.getElementById('logoutBtn');

// Обработчик нажатия на кнопку "Зарегистрироваться"
registerBtn.addEventListener('click', function() {
    // Показываем форму регистрации
    registrationForm.style.display = 'block';
    // Скрываем сообщение об успехе и форму создания канала, если они открыты
    successMessage.style.display = 'none';
    createChannelForm.style.display = 'none';
});

// Обработчик нажатия на кнопку "Создать канал"
createChannelBtn.addEventListener('click', function() {
    // Показываем форму создания канала
    createChannelForm.style.display = 'block';
    // Скрываем форму регистрации и сообщение об успехе, если они открыты
    registrationForm.style.display = 'none';
    successMessage.style.display = 'none';
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
});

// Обработчик нажатия на кнопку "Выйти из аккаунта"
logoutBtn.addEventListener('click', function() {
    // Скрываем сообщение об успехе и кнопку выхода
    successMessage.style.display = 'none';
    // Показываем форму регистрации
    registrationForm.style.display = 'block';
});
