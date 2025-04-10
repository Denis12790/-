// ������ �����
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // ������������� ����������� ��������� �����

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ����������� ������� ������
    const validUser = { username: 'admin', password: 'admin', role: 'admin' };

    if (username === validUser.username && password === validUser.password) {
        localStorage.setItem('username', username);
        localStorage.setItem('role', validUser.role);
        window.location.href = 'dashboard.html'; // �������������� �� ������� ��������
    } else {
        alert('�������� ����� ��� ������!');
    }
});

// ��������� ���������� � ������������
window.onload = function() {
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (!username) {
        window.location.href = 'index.html'; // �������������� �� �������� �����, ���� ��� ������������
    } else {
        document.getElementById('welcome-message').textContent = `������, ${username}. ���� ����: ${role}`;

        // ���������� ������� � ����������� �� ����
        if (role === 'admin') {
            document.getElementById('admin-functions').style.display = 'block';
        } else if (role === 'teacher') {
            document.getElementById('teacher-functions').style.display = 'block';
        }
    }

    // ����� �� �������
    document.getElementById('logout').addEventListener('click', function() {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        window.location.href = 'index.html'; // �������������� �� �������� �����
    });
}

// ���������� ������������
document.getElementById('add-user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const newRole = document.getElementById('role').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username: newUsername, password: newPassword, role: newRole });

    localStorage.setItem('users', JSON.stringify(users));

    alert('������������ ��������!');
    document.getElementById('new-username').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('role').value = 'admin';
});

// ����������� ������ �������������
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `�����: ${user.username}, ����: ${user.role}`;
        userList.appendChild(li);
    });
}

loadUsers();

// ����������� ������
document.getElementById('grade-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const grade = document.getElementById('grade').value;

    let grades = JSON.parse(localStorage.getItem('grades')) || [];
    grades.push({ studentName, grade });

    localStorage.setItem('grades', JSON.stringify(grades));

    alert('������ ����������!');
    document.getElementById('student-name').value = '';
    document.getElementById('grade').value = '';
});
