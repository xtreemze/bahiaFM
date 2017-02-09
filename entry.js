const content = '<audio controls="" id="audioE"></audio> <img class="logo" src="css/img/bahia.svg" alt="BahiaFM"><div id="button1" class="preload"></div><img class="muelle" alt="BahiaFM" src="css/img/muelle.svg"> <img class="birds" alt="BahiaFM" src="css/img/birds.svg"><div id="visualizer"><canvas id="canvasVis" height="500" width="400"></canvas></div>';
document.write(content);
document.close();
require('./css/style.css');
require('./js/playPause.js');
require('./js/vis.js');
require('offline-plugin/runtime').install();
