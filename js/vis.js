// fix browser vender for AudioContext and requestAnimationFrame
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;

/*
 ██████  █████  ███    ██ ██    ██  █████  ███████
██      ██   ██ ████   ██ ██    ██ ██   ██ ██
██      ███████ ██ ██  ██ ██    ██ ███████ ███████
██      ██   ██ ██  ██ ██  ██  ██  ██   ██      ██
 ██████ ██   ██ ██   ████   ████   ██   ██ ███████
*/
const canvasVisCtx = canvasVis.getContext('2d');
// Create Analyzer
const context = new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext)();
const analyser = context.createAnalyser();
analyser.fftSize = 256;
analyser.smoothingTimeConstant = 0.7;
analyser.minDecibels = -160;
analyser.maxDecibels = -35;
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
  var numBars = 92;
  var data = new Uint8Array(92);
  var gradient = canvasVisCtx.createLinearGradient(0, canvasVis.height, 0, 0);
  var binSize = Math.floor((data.length) / numBars);
  window.requestAnimationFrame(freqAnalyser);
  analyser.getByteFrequencyData(data);
  if (!analyser) {
    canvasVis.html(data[0]);
  }
  // clear canvasVis
  canvasVisCtx.clearRect(0, 0, canvasVis.width, canvasVis.height);
  gradient.addColorStop(0.98, '#FFCB05');
  gradient.addColorStop(0.3, '#00aeef');
  gradient.addColorStop(0.1, '#FFCB05');
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
    canvasVisCtx.fillRect(i * barWidth, canvasVis.height, barWidth / 1.2, -scaledAverage);
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
