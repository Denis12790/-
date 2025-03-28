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
    // Скрываем кнопку "Зарегистрироваться" и кнопку "Мой аккаунт"
    registerBtn.style.display = 'none';
    accountBtn.style.display = 'none';
    // Скрываем сообщение об успешной регистрации
    successMessage.style.display = 'none';
});

// Обработчик отправки формы регистрации
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    // Получаем данные из формы
    const username = document.getElementById('username').value;
    const
