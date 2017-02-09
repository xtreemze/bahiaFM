let offlineTrip = false;
const radioString = 'http://192.30.164.78:8000/bahia';
audioE.src = radioString;
audioE.crossOrigin = 'anonymous';
const buttonPlay = function addPlaying() {
  button1.className = ('playing');
  offlineTrip = false;
};
const buttonPause = function addPlaying() {
  button1.className = ('paused');
  offlineTrip = false;
};
const buttonError = function addError() {
  button1.className = ('error');
  offlineTrip = true;
};
const checkPlay = function check() {
  if (!offlineTrip && audioE.paused) {
    audioE.play();
  } else if (!offlineTrip) {
    audioE.pause();
    buttonPlay();
  }
  if (!window.navigator.onLine && audioE.paused) {
    buttonError();
  } else if (offlineTrip && window.navigator.onLine && audioE.paused) {
    audioE.src = radioString;
    audioE.play();
    offlineTrip = false;
  }
};
const scaleDown = function smallButton() {
  button1.classList.add('scaleDown');
};
const scaleNormal = function regularButton() {
  button1.classList.remove('scaleDown');
};
button1.addEventListener('click', checkPlay, false);
button1.addEventListener('mousedown', scaleDown, false);
button1.addEventListener('touchstart', scaleDown, false);
button1.addEventListener('mouseup', scaleNormal, false);
button1.addEventListener('touchend', scaleNormal, false);
audioE.addEventListener('stalled', buttonError, false);
audioE.addEventListener('paused', buttonPlay, false);
audioE.addEventListener('error', buttonError, false);
audioE.addEventListener('abort', buttonError, false);
audioE.addEventListener('playing', buttonPause, false);
button1.className = 'error';
audioE.play();
