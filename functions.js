// Логика входа
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Стандартные учетные данные
    const validUser = { username: 'admin', password: 'admin', role: 'admin' };

    if (username === validUser.username && password === validUser.password) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', validUser.role);
        window.location.href = 'dashboard.html'; // Перенаправляем на главную страницу
    } else {
        alert('Неверный логин или пароль!');
    }
});

// Загружаем информацию о пользователе
window.onload = function() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (!username) {
        window.location.href = 'index.html'; // Перенаправляем на страницу входа, если нет пользователя
    } else {
        document.getElementById('welcome-message').textContent = `Привет, ${username}. Ваша роль: ${role}`;

        // Показываем функции в зависимости от роли
        if (role === 'admin') {
            document.getElementById('admin-functions').style.display = 'block';
        } else if (role === 'teacher') {
            document.getElementById('teacher-functions').style.display = 'block';
        }
    }

    // Выход из системы
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = 'index.html'; // Перенаправляем на страницу входа
    });
}

// Добавление пользователя
document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const newRole = document.getElementById('role').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: newUsername, password: newPassword, role: newRole });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Пользователь добавлен!');
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('role').value = 'admin';
});

// Отображение списка пользователей
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Логин: ${user.username}, Роль: ${user.role}`;
        userList.appendChild(li);
    });
}

loadUsers();

// Выставление оценок
document.getElementById('grade-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const grade = document.getElementById('grade').value;

    let grades = JSON.parse(localStorage.getItem('grades')) || [];
    grades.push({ studentName, grade });

    localStorage.setItem('grades', JSON.stringify(grades));

    alert
