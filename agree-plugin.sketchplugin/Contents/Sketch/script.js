var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var document = __webpack_require__(/*! sketch/dom */ "sketch/dom").getSelectedDocument();

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  var selection = document.selectedLayers;

  for (var i = 0; i < selection.length; i++) {
    var layer = selection[i]; // const { bitmap } = exportLayerAsBitmap(document, layer, 1);
  }

  console.log(selection); // console.log(document.selectedPage);
  // var selection = context.selection,
  //     artboards = [];
  // for (var i = 0; i < selection.count(); i++) {
  //     try {
  //         // 取出选中的所有画板
  //         var artboard = selection[i].parentArtboard();
  //         if (artboards.indexOf(artboard) == -1) {
  //             // 过滤重复的画板
  //             artboards.push(artboard);
  //         }
  //     } catch (error) { }
  // }
  // if (artboards.length == 0) {
  //     // 并无选中的任何画板
  //     return;
  // }
  // // 此时 artboards 数组， 即为当前选中的所有画板
  // var selectionStrings = [];
  // artboards.forEach(artboard => {
  //     try {
  //         // 将画板转为JSON字符串，并保存在 selectionStrings 数组中
  //         selectionStrings.push(MSJSONDataArchiver.archiveStringWithRootObject_error_(artboard.immutableModelObject(), nil));
  //     } catch (error) { }
  // });
  // // 将selectionStrings数组转为数组JSON字符串
  // var selectionsString = '[' + selectionStrings.join(',') + ']';
});

function exportLayerAsBitmap(document, layer, scale) {
  var slice,
      result = {},
      rect = layer.absoluteRect(),
      path = NSTemporaryDirectory() + layer.objectID() + '.png';
  console.log("===========" + path);
  NSMakeRect(rect.x(), rect.y(), rect.width(), rect.height()), slice = MSExportRequest.exportRequestsFromExportableLayer(layer).firstObject(), slice.page = document.currentPage(), slice.format = 'png', slice.scale = scale, document.saveArtboardOrSlice_toFile(slice, path);
  var url = NSURL.fileURLWithPath(path),
      bitmap = NSData.alloc().initWithContentsOfURL(url),
      base64 = bitmap.base64EncodedStringWithOptions(0);
  NSFileManager.defaultManager().removeItemAtURL_error(url, nil);
  var imgRep = NSBitmapImageRep.imageRepWithData(bitmap);
  return result.bitmap = base64, result.width = imgRep.pixelsWide() / 4, result.height = imgRep.pixelsHigh() / 4, result;
}

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=script.js.map