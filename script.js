document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const videoFile = document.getElementById('videoFile').files[0];
    if (videoFile) {
        const reader = new FileReader();

        // Когда файл загружен в память
        reader.onload = function(e) {
            const videoURL = e.target.result;  // URL для просмотра видео

            // Отображаем видео на главной странице
            const videoPlayer = document.getElementById('mainVideo');
            videoPlayer.src = videoURL;

            // Добавляем видео в список
            const videoListItems = document.getElementById('videoListItems');
            const listItem = document.createElement('li');
            const videoLink = document.createElement('a');
            videoLink.href = videoURL;
            videoLink.textContent = "Смотреть новое видео";
            videoLink.target = "_blank";  // Открывать видео в новой вкладке
            listItem.appendChild(videoLink);
            videoListItems.appendChild(listItem);

            // Очистить форму после загрузки
            document.getElementById('uploadForm').reset();
        };

        // Чтение файла как URL для видео
        reader.readAsDataURL(videoFile);
    } else {
        alert('Пожалуйста, выберите видео для загрузки.');
    }
});
