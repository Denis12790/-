const video = document.querySelector('.video');
const playPauseBtn = document.querySelector('.play-pause');
const progress = document.querySelector('.progress');
const volume = document.querySelector('.volume');
const currentTimeEl = document.querySelector('.current-time');
const durationEl = document.querySelector('.duration');
const fullscreenBtn = document.querySelector('.fullscreen');
const settingsBtn = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settings-menu');
const playbackRateSelect = document.querySelector('.playback-rate');

// Обновление времени
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

video.addEventListener('loadedmetadata', () => {
  durationEl.textContent = formatTime(video.duration);
});

video.addEventListener('timeupdate', () => {
  currentTimeEl.textContent = formatTime(video.currentTime);
  progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener('input', () => {
  video.currentTime = (progress.value / 100) * video.duration;
});

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = '⏸️';
  } else {
    video.pause();
    playPauseBtn.textContent = '▶️';
  }
});

volume.addEventListener('input', () => {
  video.volume = volume.value;
});

fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

settingsBtn.addEventListener('click', () => {
  settingsMenu.classList.toggle('hidden');
});

playbackRateSelect.addEventListener('change', () => {
  video.playbackRate = playbackRateSelect.value;
});
