// Когда пользователь нажимает кнопку "Создать канал"
document.getElementById('createChannelBtn').addEventListener('click', function() {
    // Показываем форму для создания канала
    document.getElementById('createChannelForm').style.display = 'block';
    // Скрываем форму для регистрации (если она открыта)
    document.getElementById('registrationForm').style.display = 'none';
});

// Когда пользователь нажимает кнопку "Зарегистрироваться"
document.getElementById('registerBtn').addEventListener('click', function() {
    // Показываем форму для регистрации
    document.getElementById('registrationForm').style.display = 'block';
    // Скрываем форму для создания канала (если она открыта)
    document.getElementById('createChannelForm').style.display = 'none';
});
