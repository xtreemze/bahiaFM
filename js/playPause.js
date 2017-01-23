var offlineTrip = false;
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
button1.addEventListener('click', function check() {
  if (!offlineTrip && audioE.paused) {
    audioE.play();
  } else if (!offlineTrip) {
    audioE.pause();
    buttonPlay();
  }
  if (!window.navigator.onLine && audioE.paused) {
    buttonError();
  } else if (offlineTrip && window.navigator.onLine && audioE.paused) {
    audioE.src = 'http://192.30.164.78:8000/bahia';
    audioE.play();
    offlineTrip = false;
  }
}, false);
audioE.addEventListener('stalled', buttonError, false);
audioE.addEventListener('paused', buttonPlay, false);
audioE.addEventListener('error', buttonError, false);
audioE.addEventListener('abort', buttonError, false);
audioE.addEventListener('playing', buttonPause, false);
audioE.play();
