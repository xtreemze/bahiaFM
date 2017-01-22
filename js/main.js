const audioElement = new Audio();
audioElement.controls = false;
audioElement.autoplay = false;
audioElement.crossOrigin = 'anonymous';
audioElement.id = 'a';
/*
 ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ███████
██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██
██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ███████
██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██           ██
 ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████
*/

$('#pause')
  .click(function () {
    audioElement.pause();
    $('#pause')
      .addClass('btn-warning');
    $('#play')
      .removeClass('btn-success');
    $('#bar')
      .removeClass('active');
  });
$('#reconnect')
  .click(function () {
    $('#bar')
      .removeClass('active')
      .removeClass('progress-bar-success')
      .addClass('progress-bar-warning');
    $('#pause')
      .removeClass('btn-warning');
    smartSource();
    checkSource();
    $('#play')
      .removeClass('btn-success');
    play();
  });
const play = function () {
  audioElement.play();
  $('#pause')
    .removeClass('btn-warning');
  $('#bar')
    .addClass('active');
  $('#play')
    .addClass('btn-success');
};
$('#play')
  .click(function () {
    play();
  });
play();
audioElement.addEventListener('stalled', function () {
  // console.log("Audio Element Stall");
  redZone();
});
audioElement.addEventListener('loadstart', function () {
  // console.log("Audio Element Loading...");
  $('#bar')
    .addClass('progress-bar-info')
    .removeClass('progress-bar-danger')
    .removeClass('progress-bar-warning')
    .addClass('active');
  $('#play')
    .removeClass('btn-danger')
    .removeClass('btn-success');
  $('#pause')
    .removeClass('btn-danger');
});
audioElement.addEventListener('canplay', function () {
  // console.log("Audio Element Ready to Play");
  $('#bar')
    .addClass('progress-bar-success')
    .removeClass('progress-bar-info')
    .removeClass('progress-bar-danger')
    .removeClass('progress-bar-warning');
  $('#play')
    .removeClass('btn-danger')
    .removeClass('btn-success');
  $('#pause')
    .removeClass('btn-danger');
  if (audioElement.paused) {
    // console.log("Can play but paused");
  } else {
    $('#play')
      .addClass('btn-success');
    $('#pause')
      .removeClass('btn-warning');
  }
});
