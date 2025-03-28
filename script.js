// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const createChannelBtn = document.getElementById('createChannelBtn');
const registrationForm = document.getElementById('registrationForm');
const createChannelForm = document.getElementById('createChannelForm');

// Обработчик нажатия на кнопку "Зарегистрироваться"
registerBtn.addEventListener('click', function() {
    // Показываем форму регистрации
    registrationForm.style.display = 'block';
    // Скрываем форму создания канала, если она открыта
    createChannelForm.style.display = 'none';
});

// Обработчик нажатия на кнопку "Создать канал"
createChannelBtn.addEventListener('click', function() {
    // Показываем форму создания канала
    createChannelForm.style.display = 'block';
    // Скрываем форму регистрации, если она открыта
    registrationForm.style.display = 'none';
});
