export default function visualizer() {
  const test = false;
  if ("AudioContext" in window) {
    window.supportsAudioContext = true;
  }
  // fix browser vender for AudioContext and requestAnimationFrame
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.cancelAnimationFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame;
  /*
 ██████  █████  ███    ██ ██    ██  █████  ███████
██      ██   ██ ████   ██ ██    ██ ██   ██ ██
██      ███████ ██ ██  ██ ██    ██ ███████ ███████
██      ██   ██ ██  ██ ██  ██  ██  ██   ██      ██
 ██████ ██   ██ ██   ████   ████   ██   ██ ███████
*/
  window.canvasVis = document.getElementById("canvasVisualizer");
  window.canvasVisCtx = window.canvasVis.getContext("2d");
  // Create analyser
  window.context = new (window.AudioContext || window.webkitAudioContext)();
  // window.context = new window.AudioContext();
  window.analyser = window.context.createAnalyser();
  window.analyser.fftSize = 512;
  window.analyser.smoothingTimeConstant = 0.65;
  window.analyser.minDecibels = -96;
  window.analyser.maxDecibels = -10;
  window.number = 45;
  window.agregate = 0.005;
  window.upDown = -window.agregate;
  window.downUp = window.agregate;
  // draw the analyser to the canvasVis
  /*
██████  ██████   █████  ██     ██
██   ██ ██   ██ ██   ██ ██     ██
██   ██ ██████  ███████ ██  █  ██
██   ██ ██   ██ ██   ██ ██ ███ ██
██████  ██   ██ ██   ██  ███ ███
*/
  window.freqanalyser = function freqanalyser() {
    window.numBars = Math.floor(window.innerWidth / 24);
    window.data = new Uint8Array(92);
    window.gradient = window.canvasVisCtx.createLinearGradient(
      0,
      window.canvasVis.height,
      0,
      0
    );
    window.binSize = Math.floor(window.data.length / window.numBars);
    window.requestAnimationFrame(window.freqanalyser);
    if (test) {
      for (let b = window.data.length; b > -1; b -= 1) {
        if (window.number < 70) {
          window.agregate = window.downUp;
        }
        if (window.number > 220) {
          window.agregate = window.upDown;
        }
        if (!document.getElementById("audioE").paused === false) {
          window.number += window.agregate;
        }
        window.data[b] = window.number;
      }
      window.number += window.agregate;
    } else if (window.supportsAudioContext) {
      window.analyser.getByteFrequencyData(window.data);
    } else {
      for (let b = window.data.length; b > -1; b -= 1) {
        if (window.number < 70) {
          window.agregate = window.downUp;
        }
        if (window.number > 220) {
          window.agregate = window.upDown;
        }
        if (document.getElementById("audioE").paused === false) {
          window.number += window.agregate;
        }
        window.data[b] = window.number;
      }
    }
    // if (!window.analyser) {
    //   window.canvasVis.html(window.data[0]);
    // }
    // clear canvasVis
    window.canvasVisCtx.clearRect(
      0,
      0,
      window.canvasVis.width,
      window.canvasVis.height
    );
    // window.gradient.addColorStop(0.98, '#FFCB05');
    // window.gradient.addColorStop(0.3, '#00aeef');
    // window.gradient.addColorStop(0.1, '#FFCB05');
    // window.gradient.addColorStop(0.99, '#FFf');
    window.gradient.addColorStop(0.9999, "rgba(0, 0, 0, 0.54)");
    // window.gradient.addColorStop(0.1, '#00aeef');
    window.gradient.addColorStop(0.2, "rgba(0, 0, 0, 0.65)");
    window.gradient.addColorStop(0.06, "rgba(0, 0, 0, 0.82)");
    window.gradient.addColorStop(0.059999, "rgba(0, 0, 0, 0.0)");
    window.gradient.addColorStop(0.00001, "rgba(0, 0, 0, 0.6)");
    // window.gradient.addColorStop(0.01, '#fff');
    window.canvasVisCtx.fillStyle = window.gradient;
    // DRAW Individual Bars
    for (let i = 0; i < window.numBars; i += 1) {
      window.sum = 0;
      for (let j = 0; j < window.binSize; j += 1) {
        window.sum += window.data[i * window.binSize + j];
      }
      window.average = window.sum / window.binSize;
      window.barWidth = window.canvasVis.width / window.numBars;
      window.scaledAverage = window.average / 256 * window.canvasVis.height;
      window.canvasVisCtx.fillRect(
        i * window.barWidth,
        window.canvasVis.height,
        window.barWidth / 1.6,
        -window.scaledAverage
      );
    }
  };
  // connect audioE to analyser via source1 variable then analyser to Destination
  window.source1 = window.context.createMediaElementSource(window.audioE);
  window.source1.connect(window.analyser);
  window.analyser.connect(window.context.destination);
  window.freqanalyser();
  window.resizeCanvas = function resizeVis() {
    window.canvasVis.width = window.innerWidth;
    window.canvasVis.height = window.innerHeight / 2;
  };
  window.addEventListener("resize", window.resizeCanvas, false);
  window.resizeCanvas();
  // }
}
