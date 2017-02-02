/*
 ██████  █████  ███    ██ ██    ██  █████  ███████
██      ██   ██ ████   ██ ██    ██ ██   ██ ██
██      ███████ ██ ██  ██ ██    ██ ███████ ███████
██      ██   ██ ██  ██ ██  ██  ██  ██   ██      ██
 ██████ ██   ██ ██   ████   ████   ██   ██ ███████
*/
var canvasVisCtx = canvasVis.getContext('2d');
// Create Analyzer
var context = new(window.AudioContext || window.webkitAudioContext)();
var analyser = context.createAnalyser();
analyser.fftSize = 32;
analyser.smoothingTimeConstant = 0.6;
analyser.minDecibels = -64;
analyser.maxDecibels = -9;
// fix browser vender for AudioContext and requestAnimationFrame
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
// draw the analyser to the canvasVis
/*
██████  ██████   █████  ██     ██
██   ██ ██   ██ ██   ██ ██     ██
██   ██ ██████  ███████ ██  █  ██
██   ██ ██   ██ ██   ██ ██ ███ ██
██████  ██   ██ ██   ██  ███ ███
*/
function freqAnalyser() {
  var sum;
  var average;
  var barWidth;
  var scaledAverage;
  var numBars = 5;
  var data = new Uint8Array(5);
  var gradient = canvasVisCtx.createLinearGradient(0, canvasVis.height, 0, 0);
  var binSize = Math.floor((data.length) / numBars);
  window.requestAnimationFrame(freqAnalyser);
  analyser.getByteFrequencyData(data);
  if (!analyser) {
    canvasVis.html(data[0]);
  }
  // clear canvasVis
  canvasVisCtx.clearRect(0, 0, canvasVis.width, canvasVis.height);
  gradient.addColorStop(0.2, '#FFCB05');
  gradient.addColorStop(1, '#ff6105');
  canvasVisCtx.fillStyle = gradient;
  // DRAW Individual Bars
  for (i = 0; i < numBars; i++) {
    sum = 0;
    for (j = 0; j < binSize; j++) {
      sum += data[(i * binSize) + j];
    }
    average = sum / binSize;
    barWidth = canvasVis.width / numBars;
    scaledAverage = (average / 256) * canvasVis.height;
    canvasVisCtx.fillRect(i * barWidth, canvasVis.height, barWidth / 1.15, -scaledAverage);
  }
}
/*
██████   ██████   ██████     ██████  ███████  █████  ██████  ██    ██
██   ██ ██    ██ ██          ██   ██ ██      ██   ██ ██   ██  ██  ██
██   ██ ██    ██ ██          ██████  █████   ███████ ██   ██   ████
██   ██ ██    ██ ██          ██   ██ ██      ██   ██ ██   ██    ██
██████   ██████   ██████     ██   ██ ███████ ██   ██ ██████     ██
*/
// connect audioE to Analyzer via source1 variable then Analyzer to Destination
const source1 = context.createMediaElementSource(audioE);
source1.connect(analyser);
analyser.connect(context.destination);
freqAnalyser();
resizeCanvas = function resizeVis() {
  canvasVis.width = window.innerWidth;
  canvasVis.height = window.innerHeight;
};
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
// }
