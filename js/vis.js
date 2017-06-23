// fix browser vender for AudioContext and requestAnimationFrame
window.AudioContext = window.AudioContext || window.webkitAudioContext ||
  window.mozAudioContext || window.msAudioContext;
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
/*
 ██████  █████  ███    ██ ██    ██  █████  ███████
██      ██   ██ ████   ██ ██    ██ ██   ██ ██
██      ███████ ██ ██  ██ ██    ██ ███████ ███████
██      ██   ██ ██  ██ ██  ██  ██  ██   ██      ██
 ██████ ██   ██ ██   ████   ████   ██   ██ ███████
*/
window.canvasVisCtx = window.canvasVis.getContext('2d');
// Create Analyzer
window.context = new(window.AudioContext || window.webkitAudioContext ||
  window.mozAudioContext || window.msAudioContext)();
window.analyser = window.context.createAnalyser();
window.analyser.fftSize = 256;
window.analyser.smoothingTimeConstant = 0.7;
window.analyser.minDecibels = -160;
window.analyser.maxDecibels = -35;
// draw the analyser to the canvasVis
/*
██████  ██████   █████  ██     ██
██   ██ ██   ██ ██   ██ ██     ██
██   ██ ██████  ███████ ██  █  ██
██   ██ ██   ██ ██   ██ ██ ███ ██
██████  ██   ██ ██   ██  ███ ███
*/
window.freqAnalyser = () => {
  let sum;
  let average;
  let barWidth;
  let scaledAverage;
  const numBars = 92;
  const data = new Uint8Array(92);
  const gradient = window.canvasVisCtx.createLinearGradient(0, window.canvasVis
    .height, 0, 0);
  const binSize = Math.floor((data.length) / numBars);
  window.requestAnimationFrame(window.freqAnalyser);
  window.analyser.getByteFrequencyData(data);
  if (!window.analyser) {
    window.canvasVis.html(data[0]);
  }
  // clear canvasVis
  window.canvasVisCtx.clearRect(0, 0, window.canvasVis.width, window.canvasVis
    .height);
  gradient.addColorStop(0.98, '#FFCB05');
  gradient.addColorStop(0.3, '#00aeef');
  gradient.addColorStop(0.1, '#FFCB05');
  window.canvasVisCtx.fillStyle = gradient;
  // DRAW Individual Bars
  for (let i = 0; i < numBars; i += 1) {
    sum = 0;
    for (let j = 0; j < binSize; j += 1) {
      sum += data[(i * binSize) + j];
    }
    window.average = sum / binSize;
    window.barWidth = window.canvasVis.width / numBars;
    window.scaledAverage = (average / 256) * window.canvasVis.height;
    window.canvasVisCtx.fillRect(i * barWidth, window.canvasVis.height,
      barWidth / 1.2, -scaledAverage);
  }
};
// connect audioE to Analyzer via source1 variable then Analyzer to Destination
window.source1 = window.context.createMediaElementSource(window.audioE);
window.source1.connect(window.analyser);
window.analyser.connect(window.context.destination);
window.freqAnalyser();
window.resizeCanvas = function resizeVis() {
  window.canvasVis.width = window.innerWidth;
  window.canvasVis.height = window.innerHeight;
};
window.addEventListener('resize', window.resizeCanvas, false);
window.resizeCanvas();
// }
