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
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Загрузка видео</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        #videoContainer {
            margin-top: 20px;
        }
        video {
            max-width: 100%;
            height: auto;
        }
        #uploadButton {
            margin-top: 20px;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #uploadButton:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <h1>Загрузить видео на сайт</h1>
    
    <!-- Поле для выбора файла видео -->
    <input type="file" id="videoInput" accept="video/*">
    
    <!-- Кнопка для загрузки видео -->
    <button id="uploadButton">Загрузить видео</button>
    
    <!-- Место для отображения видео -->
    <div id="videoContainer"></div>

    <script>
        // Получаем элементы
        const videoInput = document.getElementById('videoInput');
        const uploadButton = document.getElementById('uploadButton');
        const videoContainer = document.getElementById('videoContainer');

        // Добавляем обработчик для кнопки загрузки
        uploadButton.addEventListener('click', () => {
            const file = videoInput.files[0];  // Получаем файл
            if (file) {
                const videoURL = URL.createObjectURL(file);  // Создаем URL для видео
                const videoElement = document.createElement('video');
                videoElement.src = videoURL;
                videoElement.controls = true;  // Добавляем элементы управления видео
                videoContainer.innerHTML = '';  // Очищаем контейнер перед добавлением нового видео
                videoContainer.appendChild(videoElement);  // Вставляем видео
            } else {
                alert('Пожалуйста, выберите видео файл для загрузки.');
            }
        });
    </script>
</body>
</html>
