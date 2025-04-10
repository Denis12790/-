document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const videoFile = document.getElementById('videoFile').files[0];
    if (videoFile) {
        const reader = new FileReader();

        // ����� ���� �������� � ������
        reader.onload = function(e) {
            const videoURL = e.target.result;  // URL ��� ��������� �����

            // ���������� ����� �� ������� ��������
            const videoPlayer = document.getElementById('mainVideo');
            videoPlayer.src = videoURL;

            // ��������� ����� � ������
            const videoListItems = document.getElementById('videoListItems');
            const listItem = document.createElement('li');
            const videoLink = document.createElement('a');
            videoLink.href = videoURL;
            videoLink.textContent = "�������� ����� �����";
            videoLink.target = "_blank";  // ��������� ����� � ����� �������
            listItem.appendChild(videoLink);
            videoListItems.appendChild(listItem);

            // �������� ����� ����� ��������
            document.getElementById('uploadForm').reset();
        };

        // ������ ����� ��� URL ��� �����
        reader.readAsDataURL(videoFile);
    } else {
        alert('����������, �������� ����� ��� ��������.');
    }
});
