/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d0e66e64b13ce7b6d6f72c77d9e85c6e.svg";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "56b91b927490cfe7334d95b8d5eb3887.svg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64e6144d2fdf4efe6626f2607322d206.svg";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var a=!1;audioE.src="http://192.30.164.78:8000/bahia";audioE.crossOrigin="anonymous";function b(){button1.className="playing";a=!1}function c(){button1.className="error";a=!0}function d(){button1.classList.add("scaleDown")}function e(){button1.classList.remove("scaleDown")}
button1.addEventListener("click",function(){!a&&audioE.paused?audioE.play():a||(audioE.pause(),b());!window.navigator.onLine&&audioE.paused?c():a&&window.navigator.onLine&&audioE.paused&&(audioE.src="http://192.30.164.78:8000/bahia",audioE.play(),a=!1)},!1);button1.addEventListener("mousedown",d,!1);button1.addEventListener("touchstart",d,!1);button1.addEventListener("mouseup",e,!1);button1.addEventListener("touchend",e,!1);audioE.addEventListener("stalled",c,!1);
audioE.addEventListener("paused",b,!1);audioE.addEventListener("error",c,!1);audioE.addEventListener("abort",c,!1);audioE.addEventListener("playing",function(){button1.className="paused";a=!1},!1);button1.className="error";audioE.play();


/***/ }),
/* 4 */
/***/ (function(module, exports) {

window.AudioContext=window.AudioContext||window.webkitAudioContext||window.a||window.b;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.msCancelAnimationFrame;
var d=canvasVis.getContext("2d"),g=new (window.AudioContext||window.webkitAudioContext||window.a||window.b),k=g.createAnalyser();k.fftSize=256;k.smoothingTimeConstant=.7;k.minDecibels=-160;k.maxDecibels=-35;
function m(){var f,e,h=new Uint8Array(92),c=d.createLinearGradient(0,canvasVis.height,0,0),l=Math.floor(h.length/92);window.requestAnimationFrame(m);k.getByteFrequencyData(h);k||canvasVis.c(h[0]);d.clearRect(0,0,canvasVis.width,canvasVis.height);c.addColorStop(.98,"#FFCB05");c.addColorStop(.3,"#00aeef");c.addColorStop(.1,"#FFCB05");d.fillStyle=c;for(c=0;92>c;c+=1){for(e=f=0;e<l;e+=1)f+=h[c*l+e];e=f/l;f=canvasVis.width/92;e=e/256*canvasVis.height;d.fillRect(c*f,canvasVis.height,f/1.2,-e)}}g.createMediaElementSource(audioE).connect(k);
k.connect(g.destination);m();resizeCanvas=function(){canvasVis.width=window.innerWidth;canvasVis.height=window.innerHeight};window.addEventListener("resize",resizeCanvas,!1);resizeCanvas();


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var appCacheIframe;

function hasSW() {
  return 'serviceWorker' in navigator &&
    // This is how I block Chrome 40 and detect Chrome 41, because first has
    // bugs with history.pustState and/or hashchange
    (window.fetch || 'imageRendering' in document.documentElement.style) &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')
}

function install(options) {
  options || (options = {});

  
    if (hasSW()) {
      var registration = navigator.serviceWorker
        .register(
          "sw.js"
          
        );

      

      return;
    }
  

  
    if (window.applicationCache) {
      var directory = "appcache/";
      var name = "manifest";

      var doLoad = function() {
        var page = directory + name + '.html';
        var iframe = document.createElement('iframe');

        

        iframe.src = page;
        iframe.style.display = 'none';

        appCacheIframe = iframe;
        document.body.appendChild(iframe);
      };

      if (document.readyState === 'complete') {
        setTimeout(doLoad);
      } else {
        window.addEventListener('load', doLoad);
      }

      return;
    }
  
}

function applyUpdate(callback, errback) {
  

  
}

function update() {
  
    if (hasSW()) {
      navigator.serviceWorker.getRegistration().then(function(registration) {
        if (!registration) return;
        return registration.update();
      });
    }
  

  
    if (appCacheIframe) {
      appCacheIframe.contentWindow.applicationCache.update();
    }
  
}



exports.install = install;
exports.applyUpdate = applyUpdate;
exports.update = update;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(11)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./style.min.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./style.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#audioE,#visualizer{width:100%;bottom:0}#button1,.birds,.muelle{background-repeat:no-repeat}#audioE{z-index:16;height:32px;display:none}#visualizer{height:100%;z-index:8}#audioE,#visualizer,.birds,.muelle{position:fixed}.birds{top:28px;right:36px;height:12vh;min-width:84px;width:25vw;background-image:url(" + __webpack_require__(9) + ")}.muelle{max-width:110vw;bottom:-30vh;z-index:10;min-height:42vh;max-height:80vh;min-width:104vw;left:-4vw;background-image:url(" + __webpack_require__(10) + ")}.playing{background-image:url(" + __webpack_require__(1) + ")}.paused{background-image:url(" + __webpack_require__(0) + ")}.error{background-image:url(" + __webpack_require__(2) + ")}.preload{background-image:url(" + __webpack_require__(2) + "),url(" + __webpack_require__(1) + "),url(" + __webpack_require__(0) + ")}#button1{height:52vw;width:52vw;min-width:48px;margin:0 auto;position:relative;background-size:cover;z-index:25;cursor:pointer;background-color:rgba(255,203,5,0);border:0;color:rgba(255,203,5,0);padding:0;text-align:center;text-decoration:none;outline:0;-webkit-highlight:none;highlight:none;-webkit-tap-highlight-color:rgba(255,203,5,0);transition:72ms}.scaleDown{transform:scale(.9)}::selection{background:rgba(255,203,5,0)}@media only screen and (min-width:1124px) and (max-width:1440px){.logo{width:62vw;max-width:90vh;margin:9vh 19vw 0}#button1{height:18vw;width:18vw;min-width:48px;margin:0 auto}.muelle{max-width:110vw;bottom:-30vh;min-height:45vh;max-height:80vh;min-width:104vw;left:-4vw}}@media only screen and (min-width:601px)and (max-width:1123px){.logo{margin:22vh 14vw 0}.muelle{min-height:56vh}#button1{height:34vh;width:34vh;margin:0 auto}}@media only screen and (min-width:1441px){.muelle{max-width:110vw;bottom:-30vh;min-height:45vh;max-height:80vh;min-width:104vw;left:-4vw}.logo{width:30vw;max-width:90vh;margin:12vh 14vw 0}#button1{height:20vw;width:20vw;min-width:48px;margin:0 auto}}@media only screen and (min-height:20px)and (max-height:500px){#button1{height:42vh;width:42vh;margin:24vh auto 0;float:left}.logo{width:42vw;max-width:90vh;margin:38vh 9vw 0;float:left}}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "68cefef783b63c3cb9f2b157bad061df.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a6242f19cef42484d8f8423c75a2e6e4.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5).install();


/***/ })
/******/ ]);