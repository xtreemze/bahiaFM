/*
db    db d8888b. d8888b.  .d8b.  d888888b d88888b .d8888. 
88    88 88  `8D 88  `8D d8' `8b `~~88~~' 88'     88'  YP 
88    88 88oodD' 88   88 88ooo88    88    88ooooo `8bo.   
88    88 88~~~   88   88 88~~~88    88    88~~~~~   `Y8b. 
88b  d88 88      88  .8D 88   88    88    88.     db   8D 
~Y8888P' 88      Y8888D' YP   YP    YP    Y88888P `8888Y' 
                                                          
                                                          
*/
const runtime = require("offline-plugin/runtime");
runtime.install({
  onUpdating: () => {
    console.log("SW Event:", "onUpdating");
  },
  onUpdateReady: () => {
    console.log("SW Event:", "onUpdateReady");
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    console.log("SW Event:", "onUpdated");
    // Reload the webpage to load into the new version
    window.location.reload();
  },
  onUpdateFailed: () => {
    console.log("SW Event:", "onUpdateFailed");
  }
});

window.offlineTrip = false;
window.radioString = "http://192.30.164.78:8000/bahia";
// window.radioString = 'http://192.30.164.78:8000/bahiaCabina';
// window.radioString = 'http://192.30.164.78:8000/stream';
window.audioElement = document.getElementById("audioE");
window.button = document.getElementById("button1");
window.audioElement.src = window.radioString;
window.audioElement.crossOrigin = "anonymous";
window.buttonPlay = function addPlaying() {
  window.button.className = "playing";
  window.offlineTrip = false;
};
window.buttonPause = function addPlaying() {
  window.button.className = "paused";
  window.offlineTrip = false;
};
window.buttonError = function addError() {
  window.button.className = "error";
  window.offlineTrip = true;
};
window.checkPlay = function check() {
  if (window.navigator.vibrate) window.navigator.vibrate(10);
  if (!window.offlineTrip && window.audioElement.paused) {
    window.audioElement.play();
  } else if (!window.offlineTrip) {
    window.audioElement.pause();
    window.buttonPlay();
  }
  if (!window.navigator.onLine && window.audioElement.paused) {
    window.buttonError();
  } else if (
    window.offlineTrip &&
    window.navigator.onLine &&
    window.audioElement.paused
  ) {
    window.audioElement.src = window.radioString;
    window.audioElement.play();
    window.offlineTrip = false;
  }
};
window.scaleDown = function smallButton() {
  window.button.classList.add("scaleDown");
  if (window.navigator.vibrate) window.navigator.vibrate(10);
};
window.scaleNormal = function regularButton() {
  window.button.classList.remove("scaleDown");
  if (window.navigator.vibrate) window.navigator.vibrate(10);
};
window.button.addEventListener("click", window.checkPlay, false);
window.button.addEventListener("mousedown", window.scaleDown, false);
window.button.addEventListener("touchstart", window.scaleDown, {
  passive: true
});
window.button.addEventListener("mouseup", window.scaleNormal, false);
window.button.addEventListener("touchend", window.scaleNormal, false);
window.audioElement.addEventListener("stalled", window.buttonError, false);
window.audioElement.addEventListener("paused", window.buttonPlay, false);
window.audioElement.addEventListener("error", window.buttonError, false);
window.audioElement.addEventListener("abort", window.buttonError, false);
window.audioElement.addEventListener("playing", window.buttonPause, false);
window.button.className = "error";
window.audioElement.play();
