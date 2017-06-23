window.offlineTrip = false;
window.radioString = 'http://192.30.164.78:8000/bahia';
window.audioE.src = window.radioString;
window.audioE.crossOrigin = 'anonymous';
window.buttonPlay = function addPlaying() {
  window.button1.className = ('playing');
  window.offlineTrip = false;
};
window.buttonPause = function addPlaying() {
  window.button1.className = ('paused');
  window.offlineTrip = false;
};
window.buttonError = function addError() {
  window.button1.className = ('error');
  window.offlineTrip = true;
};
window.checkPlay = function check() {
  if (!window.offlineTrip && window.audioE.paused) {
    window.audioE.play();
  } else if (!window.offlineTrip) {
    window.audioE.pause();
    window.buttonPlay();
  }
  if (!window.navigator.onLine && window.audioE.paused) {
    window.buttonError();
  } else if (window.offlineTrip && window.navigator.onLine && window.audioE
    .paused) {
    window.audioE.src = window.radioString;
    window.audioE.play();
    window.offlineTrip = false;
  }
};
window.scaleDown = function smallButton() {
  window.button1.classList.add('scaleDown');
};
window.scaleNormal = function regularButton() {
  window.button1.classList.remove('scaleDown');
};
window.button1.addEventListener('click', window.checkPlay, false);
window.button1.addEventListener('mousedown', window.scaleDown, false);
window.button1.addEventListener('touchstart', window.scaleDown, { passive: true });
window.button1.addEventListener('mouseup', window.scaleNormal, false);
window.button1.addEventListener('touchend', window.scaleNormal, false);
window.audioE.addEventListener('stalled', window.buttonError, false);
window.audioE.addEventListener('paused', window.buttonPlay, false);
window.audioE.addEventListener('error', window.buttonError, false);
window.audioE.addEventListener('abort', window.buttonError, false);
window.audioE.addEventListener('playing', window.buttonPause, false);
window.button1.className = 'error';
window.audioE.play();
