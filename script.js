// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

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

    // Показываем сообщение об успешной регистрации
    registrationForm.style.display = 'none';
    successMessage.style.display = 'block';

    // Меняем текст на кнопке на "Мой аккаунт"
    registerBtn.innerText = 'Мой аккаунт';

    // Добавляем обработчик для кнопки "Мой аккаунт"
    registerBtn.addEventListener('click', function() {
        alert("Вы зарегистрированы!");
    });
});
