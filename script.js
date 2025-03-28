// Скрыть/показать формы при нажатии на кнопки
document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('createChannelForm').style.display = 'none';
});

document.getElementById('createChannelBtn').addEventListener('click', function() {
    document.getElementById('createChannelForm').style.display = 'block';
    document.getElementById('registrationForm').style.display = 'none';
});
