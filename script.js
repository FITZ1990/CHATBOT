const videoPlayer = document.getElementById('videoPlayer');
const buttonsContainer = document.querySelector('.buttons');
const startButton = document.getElementById('startButton');

videoPlayer.controls = false;

function playVideo(videoName) {
  videoPlayer.classList.add('fade-out');
  setTimeout(() => {
    switch (videoName) {
      case 'VIDEOS/MAX.mp4':
        videoPlayer.src = 'VIDEOS/MAX.mp4';
        break;
      case 'VIDEOS/LUCHO.mp4':
        videoPlayer.src = 'VIDEOS/LUCHO.mp4';
        break;
      case 'VIDEOS/VELY.mp4':
        videoPlayer.src = 'VIDEOS/VELY.mp4';
        break;
      case 'VIDEOS/JUAN.mp4':
        videoPlayer.src = 'VIDEOS/JUAN.mp4';
        break;
      case 'VIDEOS/PABLO.mp4':
        videoPlayer.src = 'VIDEOS/PABLO.mp4';
        break;
      case 'VIDEOS/SOBRE QUIEN.mp4':
        videoPlayer.src = 'VIDEOS/SOBRE QUIEN.mp4';
        break;
      case 'VIDEOS/DESPEDIDA.mp4':
        videoPlayer.src = 'VIDEOS/DESPEDIDA.mp4';
        break;
      default:
        videoPlayer.src = 'VIDEOS/hola.mp4';
        break;
    }

    videoPlayer.play();
    videoPlayer.classList.remove('fade-out');
  }, 500); // Tiempo de espera de 500ms (0.5 segundos) antes de cambiar el video
}

function startVideo() {
  videoPlayer.play();
  startButton.style.display = 'none';

  setTimeout(() => {
    fadeInButtons();
  }, 7000);
}

function fadeInButtons() {
  buttonsContainer.classList.add('fade-in');
  const buttons = buttonsContainer.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.remove('hidden');
  });
}

function endVideo() {
  videoPlayer.src = 'videos/hola.mp4'; // Al finalizar el video, volvemos al video inicial
  fadeInButtons();
}
