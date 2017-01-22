checkPause = function checkPause() {
  if (audioE.paused) {
    audioE.play();
    button1.className = ('paused');
  } else {
    audioE.pause();
    button1.className = ('playing');
  }
};
checkPause();
