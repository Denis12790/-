// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const registrationForm = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');
const userDetails = document.getElementById('userDetails');
const logoutBtn = document.getElementById('logoutBtn');
const createChannelBtn = document.getElementById('createChannelBtn');
const channelForm = document.getElementById('channelForm');
const submitChannelBtn = document.getElementById('submitChannelBtn');
const channelNameInput = document.getElementById('channelName');

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

    // Показываем кнопку "Создать канал"
    createChannelBtn.style.display = 'inline-block';
});

// Обработчик нажатия на кнопку "Создать канал"
createChannelBtn.addEventListener('click', function() {
    // Показываем форму для создания канала
    channelForm.style.display = 'block';
});

// Обработчик нажатия на кнопку "Создать канал" и сохранение названия канала
submitChannelBtn.addEventListener('click', function() {
    const channelName = channelNameInput.value;
    if (channelName.trim() === '') {
        alert('Название канала не может быть пустым!');
        return;
    }
    alert(`Канал "${channelName}" успешно создан!`);
    // Очищаем поле ввода
    channelNameInput.value = '';
    // Скрываем форму для создания канала
    channelForm.style.display = 'none';
});
document.getElementById("createChannelBtn").addEventListener("click", function() {
    document.getElementById("createChannelForm").style.display = "block";
    document.getElementById("createChannelBtn").style.display = "none";
});

document.getElementById("submitChannel").addEventListener("click", function() {
    const channelName = document.getElementById("channelName").value;
    if (channelName) {
        document.getElementById("channelNameDisplay").innerText = channelName;
        document.getElementById("channelNameDisplayHere").innerText = channelName;
        
        // Показываем сообщение о создании канала
        document.getElementById("channelCreated").style.display = "block";
        document.getElementById("createChannelForm").style.display = "none";
    } else {
        alert("Пожалуйста, введите название канала!");
    }
});

document.getElementById("uploadVideoBtn").addEventListener("click", function() {
    const videoFile = document.getElementById("videoFile").files[0];
    if (videoFile) {
        const videoUrl = URL.createObjectURL(videoFile);
        document.getElementById("videoSource").src = videoUrl;
        document.getElementById("videoPlayer").load();
        document.getElementById("channelDisplay").style.display = "block";
    } else {
        alert("Пожалуйста, выберите файл видео для загрузки!");
    }
});
