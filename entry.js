require('file-loader?name=[path][name].[ext]?[hash]!./index.html');
require('./css/style.css');
require('./js/playPause.js');
require('./js/vis.js');
require('offline-plugin/runtime').install();
