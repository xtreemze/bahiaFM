window.offlineTrip = false;
window.radioString = 'http://192.30.164.78:8000/bahia';
document.getElementById('audioE')
  .src = window.radioString;
document.getElementById('audioE')
  .crossOrigin = 'anonymous';
window.buttonPlay = function addPlaying() {
  document.getElementById('button1')
    .className = ('playing');
  window.offlineTrip = false;
};
window.buttonPause = function addPlaying() {
  document.getElementById('button1')
    .className = ('paused');
  window.offlineTrip = false;
};
window.buttonError = function addError() {
  document.getElementById('button1')
    .className = ('error');
  window.offlineTrip = true;
};
window.checkPlay = function check() {
  if (!window.offlineTrip && document.getElementById('audioE')
    .paused) {
    document.getElementById('audioE')
      .play();
  } else if (!window.offlineTrip) {
    document.getElementById('audioE')
      .pause();
    window.buttonPlay();
  }
  if (!window.navigator.onLine && document.getElementById('audioE')
    .paused) {
    window.buttonError();
  } else if (window.offlineTrip && window.navigator.onLine && document.getElementById(
      'audioE')
    .paused) {
    document.getElementById('audioE')
      .src = window.radioString;
    document.getElementById('audioE')
      .play();
    window.offlineTrip = false;
  }
};
window.scaleDown = function smallButton() {
  document.getElementById('button1')
    .classList.add('scaleDown');
};
window.scaleNormal = function regularButton() {
  document.getElementById('button1')
    .classList.remove('scaleDown');
};
document.getElementById('button1')
  .addEventListener('click', window.checkPlay, false);
document.getElementById('button1')
  .addEventListener('mousedown', window.scaleDown, false);
document.getElementById('button1')
  .addEventListener('touchstart', window.scaleDown, { passive: true });
document.getElementById('button1')
  .addEventListener('mouseup', window.scaleNormal, false);
document.getElementById('button1')
  .addEventListener('touchend', window.scaleNormal, false);
document.getElementById('audioE')
  .addEventListener('stalled', window.buttonError, false);
document.getElementById('audioE')
  .addEventListener('paused', window.buttonPlay, false);
document.getElementById('audioE')
  .addEventListener('error', window.buttonError, false);
document.getElementById('audioE')
  .addEventListener('abort', window.buttonError, false);
document.getElementById('audioE')
  .addEventListener('playing', window.buttonPause, false);
document.getElementById('button1')
  .className = 'error';
document.getElementById('audioE')
  .play();
