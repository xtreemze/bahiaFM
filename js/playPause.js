checkPause = function checkPause() {
  if (audioE.paused) {
    audioE.play();
    button1.className = ('button paused');
  } else {
    audioE.pause();
    button1.className = ('button playing');
  }
};
