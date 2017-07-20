window.offlineTrip = false;
window.radioString = 'http://192.30.164.78:8000/bahia';
// window.radioString = 'http://192.30.164.78:8000/stream';
window.audioElement = document.getElementById('audioE');
window.button = document.getElementById('button1');
window.audioElement.src = window.radioString;
window.audioElement.crossOrigin = 'anonymous';
window.buttonPlay = function addPlaying() {
  window.button.className = ('playing');
  window.offlineTrip = false;
};
window.buttonPause = function addPlaying() {
  window.button.className = ('paused');
  window.offlineTrip = false;
};
window.buttonError = function addError() {
  window.button.className = ('error');
  window.offlineTrip = true;
};
window.checkPlay = function check() {
  window.navigator.vibrate(10);
  if (!window.offlineTrip && window.audioElement.paused) {
    window.audioElement.play();
  } else if (!window.offlineTrip) {
    window.audioElement.pause();
    window.buttonPlay();
  }
  if (!window.navigator.onLine && window.audioElement.paused) {
    window.buttonError();
  } else if (window.offlineTrip && window.navigator.onLine && window.audioElement
    .paused) {
    window.audioElement.src = window.radioString;
    window.audioElement.play();
    window.offlineTrip = false;
  }
};
window.scaleDown = function smallButton() {
  window.button.classList.add('scaleDown');
  window.navigator.vibrate(10);
};
window.scaleNormal = function regularButton() {
  window.button.classList.remove('scaleDown');
  window.navigator.vibrate(10);
};
window.button.addEventListener('click', window.checkPlay, false);
window.button.addEventListener('mousedown', window.scaleDown, false);
window.button.addEventListener('touchstart', window.scaleDown, { passive: true });
window.button.addEventListener('mouseup', window.scaleNormal, false);
window.button.addEventListener('touchend', window.scaleNormal, false);
window.audioElement.addEventListener('stalled', window.buttonError, false);
window.audioElement.addEventListener('paused', window.buttonPlay, false);
window.audioElement.addEventListener('error', window.buttonError, false);
window.audioElement.addEventListener('abort', window.buttonError, false);
window.audioElement.addEventListener('playing', window.buttonPause, false);
window.button.className = 'error';
window.audioElement.play();
