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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = {};\n\n// general settings >\nsettings.general = {\n  orientation: 'row',\n  buttonsSize: [20, 20]\n};\nif (settings.general.orientation === 'column') {\n  settings.general.separatorSize = [0, 0, settings.general.buttonsSize[0] * 3, 0.5];\n} else {\n  settings.general.separatorSize = [0, 0, 1, settings.general.buttonsSize[0]];\n}\n// general settings <\n\n// onion skin settings >\nsettings.onionSkin = {\n  forwardColor: [0 / 255, 150 / 255, 255 / 255, 1],\n  backwardColor: [255 / 255, 0 / 255, 0 / 255, 1],\n  forwardFrames: 1,\n  backwardFrames: 2\n};\n// onion skin settings <\n\n// create null >\nsettings.createNull = {\n  size: [50, 50]\n};\n// create null <\n\n// create folders >\nsettings.folders = [{\n  name: '00 Render',\n  color: 0\n}, {\n  name: '01 Comps',\n  color: 13\n}, {\n  name: '02 Pre-comps',\n  color: 10\n}, {\n  name: '03 Elements',\n  color: 3\n}, {\n  name: '04 Sound',\n  color: 1\n}];\n// create folders <\n\n// open window with settings >\nfunction openSettings() {\n  var settingsWindow = new Window('dialog', 'Settings');\n  settingsWindow.maximumSize = [500, 300];\n  settingsWindow.minimumSize = settingsWindow.maximumSize;\n  settingsWindow.orientation = 'column';\n\n  // settingsWindow.center();\n  // settingsWindow.show();\n}\n// open window with settings <\n\nmodule.exports = settings;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/config/settings.js\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/config/settings.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar openUrl = __webpack_require__(2);\n\nvar settings = __webpack_require__(0);\n\nvar changeBGcolor = __webpack_require__(3);\n\nvar launchOnionSkin = __webpack_require__(4);\nvar createNull = __webpack_require__(9);\nvar createFolders = __webpack_require__(10);\nvar setSameLabelColors = __webpack_require__(11);\nvar clearShape = __webpack_require__(12);\nvar separateShapesDifferentLayers = __webpack_require__(13);\nvar separateShapesSingleLayer = __webpack_require__(14);\n\nImage.prototype.onDraw = __webpack_require__(15);\n\nvar loadImage = __webpack_require__(16);\nvar untimeLogo = __webpack_require__(17);\n\nvar icons = __webpack_require__(18);\nvar loadImages = __webpack_require__(19);\n\nvar buttonIcons = loadImages(icons);\n\nvar myScriptBuildUI = function myScriptBuildUI(thisObj) {\n\tvar myPanel = thisObj instanceof Panel ? thisObj : new Window('palette', 'Untime Toolbox', undefined);\n\n\t// set groups >\n\tvar mainGrp = myPanel.add('group', undefined);\n\tmainGrp.orientation = settings.general.orientation;\n\tmainGrp.alignment = ['left', 'top'];\n\tmainGrp.alignChildren = ['left', 'top'];\n\n\tvar groupOne = mainGrp.add('group', undefined);\n\tgroupOne.orientation = 'row';\n\n\tvar separator01 = mainGrp.add('group', settings.general.separatorSize);\n\tchangeBGcolor(separator01, [0, 0, 0, 0.2]);\n\n\tvar groupTwo = mainGrp.add('group', undefined);\n\tgroupTwo.orientation = 'row';\n\n\tvar separator02 = mainGrp.add('group', settings.general.separatorSize);\n\tchangeBGcolor(separator02, [0, 0, 0, 0.2]);\n\n\tvar groupThree = mainGrp.add('group', undefined);\n\tgroupThree.orientation = 'row';\n\t// set groups  <\n\t// set buttons >\n\tvar createNullButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.createNull, { style: 'toolbutton', toggle: false });\n\tcreateNullButton.size = settings.general.buttonsSize;\n\tcreateNullButton.onClick = createNull;\n\tcreateNullButton.helpTip = 'Create a Null';\n\n\tonionSkinButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.onionSkin, { style: 'toolbutton', toggle: false });\n\tonionSkinButton.size = settings.general.buttonsSize;\n\tonionSkinButton.onClick = launchOnionSkin;\n\tonionSkinButton.helpTip = 'Enable/Disable Onion Skin';\n\n\tcreateFoldersButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.addFolder, { style: 'toolbutton', toggle: false });\n\tcreateFoldersButton.size = settings.general.buttonsSize;\n\tcreateFoldersButton.onClick = createFolders;\n\tcreateFoldersButton.helpTip = 'Create Folders';\n\n\tsetSameLabelColorsButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.labelFolder, { style: 'toolbutton', toggle: false });\n\tsetSameLabelColorsButton.size = settings.general.buttonsSize;\n\tsetSameLabelColorsButton.onClick = setSameLabelColors;\n\tsetSameLabelColorsButton.helpTip = 'Change label of Folders';\n\n\tclearShapeButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.clearShape, { style: 'toolbutton', toggle: false });\n\tclearShapeButton.size = settings.general.buttonsSize;\n\tclearShapeButton.onClick = clearShape;\n\tclearShapeButton.helpTip = 'Clear Shape';\n\n\tseparateShapesSingleLayerButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.separateShapesSingleLayer, { style: 'toolbutton', toggle: false });\n\tseparateShapesSingleLayerButton.size = settings.general.buttonsSize;\n\tseparateShapesSingleLayerButton.onClick = separateShapesSingleLayer;\n\tseparateShapesSingleLayerButton.helpTip = 'Separate shape into single layer';\n\n\tseparateShapesDifferentLayersButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.separateShapesDifferentLayers, { style: 'toolbutton', toggle: false });\n\tseparateShapesDifferentLayersButton.size = settings.general.buttonsSize;\n\tseparateShapesDifferentLayersButton.onClick = separateShapesDifferentLayers;\n\tseparateShapesDifferentLayersButton.helpTip = 'Separate shape into different layers';\n\n\tcreaditsButton = groupThree.add('iconbutton', [0, 0, 18, 18], loadImage(untimeLogo), { style: 'toolbutton', toggle: false });\n\tcreaditsButton.size = settings.general.buttonsSize;\n\tcreaditsButton.onClick = function () {\n\t\treturn openUrl('https://untimestudio.com');\n\t};\n\tcreaditsButton.helpTip = 'Untime Studio';\n\n\thelpButton = groupThree.add('button', undefined, '?');\n\thelpButton.size = settings.general.buttonsSize;\n\thelpButton.onClick = function () {\n\t\treturn openUrl('https://untimestudio.com');\n\t};\n\thelpButton.helpTip = 'Untime Studio';\n\t// set buttons <\n\n\t// Setup panel sizing and make panel resizable\n\tmyPanel.layout.layout(true);\n\tmyPanel.minimumSize = mainGrp.size;\n\tmyPanel.layout.resize();\n\tmyPanel.onResizing = myPanel.onResize = function () {\n\t\treturn thisObj.layout.resize();\n\t};\n\n\treturn myPanel;\n};\n\nvar myScript = function myScript(thisObj) {\n\tvar myScriptPal = myScriptBuildUI(thisObj);\n\n\tif (myScriptPal != null && myScriptPal instanceof Window) {\n\t\tmyScriptPal.center();\n\t\tmyScriptPal.show();\n\t}\n};\n\n// add script to global variable\n__global__.run = function (panel) {\n\treturn myScript(panel);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// CHECKS FOR USER OS\nvar getOS = function getOS() {\n  var op = $.os;\n  var match = op.indexOf('Windows');\n  if (match !== -1) return 'PC'; // User is on PC\n  return 'MAC';\n};\n\nvar getUrlLaunchCode = function getUrlLaunchCode() {\n  if (getOS() === 'MAC') return 'Open';\n  return 'Start';\n};\n\n// ONCLICK FUNCTION FOR YOUR URL BUTTON CONTROL\n// urlLaunchCode = Open or Start / ' ' = keeps a space character separator / 'http://myurl.com' = Defines the actual URL path\nmodule.exports = function (url) {\n  return system.callSystem(getUrlLaunchCode() + ' ' + url);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/openUrl.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/openUrl.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function changeBGcolor(button, color) {\n  button.graphics.backgroundColor = button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, color);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/changeBgColor.js\n// module id = 3\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/changeBgColor.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createOnionSkinForward = __webpack_require__(5);\nvar createOnionSkinBackward = __webpack_require__(6);\nvar clearOnionSkin = __webpack_require__(7);\nvar createTempComp = __webpack_require__(8);\n\nmodule.exports = function () {\n  var thisComp = app.project.activeItem;\n  if (thisComp instanceof CompItem) {\n    var layers = thisComp.selectedLayers;\n    var onionSkinEnabled = false;\n\n    if (thisComp instanceof CompItem) {\n      for (var i = 1; i <= thisComp.numLayers; i += 1) {\n        var k = thisComp.layer(i).name.split(' - ');\n        if (k[0] === 'OnionSkin') onionSkinEnabled = true;\n      }\n    }\n\n    if (thisComp instanceof CompItem) {\n      app.beginUndoGroup('Onion Skin');\n      var tempComp = createTempComp();\n      if (onionSkinEnabled === true) {\n        for (var _i = thisComp.numLayers; _i >= 1; _i -= 1) {\n          clearOnionSkin(thisComp.layer(_i));\n        }\n      } else {\n        if (layers.length > 0) {\n          createOnionSkinBackward(thisComp);\n          createOnionSkinForward(thisComp);\n        } else {\n          createOnionSkinBackward(thisComp);\n          createOnionSkinForward(thisComp);\n        }\n        thisComp.hideShyLayers = true;\n      }\n      tempComp.remove();\n      app.endUndoGroup();\n    }\n    writeLn('Ready');\n  } else {\n    alert('Please choose any compostion');\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/onionSkin/index.js\n// module id = 4\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/onionSkin/index.js?");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(0);\n\n// create forward onion skin\nmodule.exports = function (thisComp) {\n  var tempSolid = thisComp.layers.addSolid([1, 1, 1], 'OnionSkin - forward', thisComp.width, thisComp.height, thisComp.pixelAspect, thisComp.duration);\n  var echo = tempSolid.Effects.addProperty('ADBE Echo');\n  echo.property('ADBE Echo-0001').expression = 'framesToTime(1)';\n  echo.property('ADBE Echo-0002').setValue(settings.onionSkin.forwardFrames);\n  echo.property('ADBE Echo-0004').setValue(0.75);\n  echo.property('ADBE Echo-0005').setValue(7);\n  var fill = tempSolid.Effects.addProperty('ADBE Fill');\n  fill.property('ADBE Fill-0002').setValue(settings.onionSkin.forwardColor);\n  tempSolid.opacity.setValue(35);\n  tempSolid.adjustmentLayer = true;\n  tempSolid.guideLayer = true;\n  tempSolid.shy = true;\n  tempSolid.moveToBeginning();\n  tempSolid.locked = true;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/onionSkin/createForward.js\n// module id = 5\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/onionSkin/createForward.js?");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(0);\n\n// create backward onion skin\nmodule.exports = function (thisComp) {\n  var tempSolid = thisComp.layers.addSolid([1, 1, 1], 'OnionSkin - backward', thisComp.width, thisComp.height, thisComp.pixelAspect, thisComp.duration);\n  var echo = tempSolid.Effects.addProperty('ADBE Echo');\n  echo.property('ADBE Echo-0001').expression = '-framesToTime(1)';\n  echo.property('ADBE Echo-0002').setValue(settings.onionSkin.backwardFrames);\n  echo.property('ADBE Echo-0004').setValue(0.75);\n  echo.property('ADBE Echo-0005').setValue(7);\n  var fill = tempSolid.Effects.addProperty('ADBE Fill');\n  fill.property('ADBE Fill-0002').setValue(settings.onionSkin.backwardColor);\n  tempSolid.opacity.setValue(35);\n  tempSolid.adjustmentLayer = true;\n  tempSolid.guideLayer = true;\n  tempSolid.shy = true;\n  tempSolid.moveToBeginning();\n  tempSolid.locked = true;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/onionSkin/createBackward.js\n// module id = 6\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/onionSkin/createBackward.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// remove onion skin\nmodule.exports = function (l) {\n  var k = l.name.split(' - ');\n  if (k[0] === 'OnionSkin') {\n    l.locked = false;\n    l.remove();\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/onionSkin/clear.js\n// module id = 7\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/onionSkin/clear.js?");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function createTempComp() {\n  var tempComp = app.project.items.addComp('Temp', 100, 100, 1, 1, 24);\n  tempComp.openInViewer();\n  return tempComp;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/createTempComp.js\n// module id = 8\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/createTempComp.js?");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(0);\n\nmodule.exports = function createNull() {\n  app.beginUndoGroup('Create Null');\n  var thisComp = app.project.activeItem;\n\n  if (thisComp instanceof CompItem) {\n    var nullTemp = thisComp.layers.addNull(thisComp.duration);\n    nullTemp.transform.anchorPoint.setValue(settings.createNull.size);\n    nullTemp.transform.scale.setValue(settings.createNull.size);\n  }\n  writeLn('Ready');\n  app.endUndoGroup();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/createNull/index.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/createNull/index.js?");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar settings = __webpack_require__(0);\n\nmodule.exports = function createFolders() {\n  app.beginUndoGroup('Create Folders');\n  for (var i = 0; i < settings.folders.length; i += 1) {\n    var folder = app.project.items.addFolder(settings.folders[i].name);\n    folder.label = settings.folders[i].color;\n  }\n  writeLn('Ready');\n  app.endUndoGroup();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/createFolders/index.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/createFolders/index.js?");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function labelFolders() {\n  app.beginUndoGroup('Set same Label Colors');\n  for (var i = 1; i <= app.project.items.length; i += 1) {\n    if (app.project.item(i).parentFolder.name != 'Root') {\n      app.project.item(i).label = app.project.item(i).parentFolder.label;\n    }\n  }\n  app.endUndoGroup();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/setSameLabelColors/index.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/setSameLabelColors/index.js?");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function clearShape() {\n  app.beginUndoGroup('Clear Shape');\n  var thisComp = app.project.activeItem;\n  if (thisComp !== null) {\n    var selectedLayers = thisComp.selectedLayers;\n    if (selectedLayers != null) {\n      for (var l = 0; l < selectedLayers.length; l += 1) {\n        // start check selected layers\n        var layer = _thisComp.selectedLayers[l]; // set selected layer to  layer\n        if (layer.matchName === 'ADBE Vector Layer') {\n          // check if shape true\n          for (var i = 1; i <= layer.property(2).numProperties; i += 1) {\n            // then check contents items\n            for (var j = 1; j <= layer.property(2).property(i).property(2).numProperties; j += 1) {\n              // check every property\n              if (layer.property(2).property(i).property(2).property(j).matchName === 'ADBE Vector Filter - Merge') {\n                // if property = merge\n                if (layer.property(2).property(i).property(2).property(j).mode.value === 4) {\n                  layer.property(2).property(i).property(2).property(j).remove(); // delete merge\n                  layer.property(2).property(i).property(2).property(j - 1).remove(); // delete group\n                  var currentNum = l + i + j;\n                  var maxNum = selectedLayers.length + layer.property(2).numProperties + layer.property(2).property(i).property(2).numProperties;\n                  writeLn('Property - ' + currentNum + '/' + maxNum);\n                }\n              }\n            }\n          }\n        }\n      }\n\n      var _thisComp = app.project.activeItem;\n      if (_thisComp && _thisComp instanceof CompItem) {\n        for (var _i = 0; _i < _thisComp.selectedLayers.length; _i += 1) {\n          var _layer = _thisComp.selectedLayers[_i];\n          var split = _layer.name.split(' ');\n          if (split[split.length - 1] === 'Outlines') {\n            _layer.name = '';\n            for (var _j = 0; _j < split.length - 1; _j += 1) {\n              _layer.name = '' + _layer.name + split[_j] + ' ';\n            }\n          }\n        }\n      }\n\n      writeLn('Ready');\n    } else {\n      alert('Select some Shapes');\n    }\n  } else {\n    alert('Select some Shapes');\n  }\n  app.endUndoGroup();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/clearShape/index.js\n// module id = 12\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/clearShape/index.js?");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function separateShapesDifferentLayers() {\n\tapp.beginUndoGroup(\"Separate shapes\");\n\tvar comp = app.project.activeItem;\n\tvar layersAry = comp.selectedLayers;\n\tfor (var i = 0; i < layersAry.length; i++) {\n\t\twriteLn(\"Layer - \" + i + \"/\" + layersAry.length);\n\t\tseparateShapes_difLayers_full(layersAry[i]);\n\t}\n\twriteLn(\"Ready\");\n\tapp.endUndoGroup();\n\n\tfunction separateShapes_difLayers_full(layer) {\n\t\tvar oldLayer = layer;\n\t\tvar selectedPropertiesNames = [];\n\t\tif (oldLayer.selectedProperties[i] != \"\") {\n\t\t\tfor (var i = 0; i < oldLayer.selectedProperties.length; i++) {\n\t\t\t\tselectedPropertiesNames[selectedPropertiesNames.length] = oldLayer.selectedProperties[i].name;\n\t\t\t}\n\t\t}\n\t\tvar k = 0;\n\n\t\tfor (var i = 1; i <= oldLayer[\"Contents\"].numProperties; i++) {\n\t\t\tvar flag = false;\n\t\t\tif (selectedPropertiesNames.length != 0 && k >= selectedPropertiesNames.length) {\n\t\t\t\tbreak;\n\t\t\t} // break if have worked with all properties\n\t\t\twriteLn(\"Property - \" + i + \"/\" + oldLayer[\"Contents\"].numProperties);\n\t\t\tif (selectedPropertiesNames.length != 0) {\n\t\t\t\tfor (var l = 0; l < selectedPropertiesNames.length; l++) {\n\t\t\t\t\tif (oldLayer[\"Contents\"].property(i).name == selectedPropertiesNames[l]) {\n\t\t\t\t\t\tvar newLayer = layer.duplicate();\n\t\t\t\t\t\tvar disconnectedPropertyName = oldLayer[\"Contents\"].property(i).name;\n\t\t\t\t\t\tnewLayer.name = disconnectedPropertyName;\n\t\t\t\t\t\toldLayer[\"Contents\"].property(i).remove();\n\t\t\t\t\t\tk++;\n\t\t\t\t\t\tflag = true;\n\n\t\t\t\t\t\tfor (var j = 1; j <= newLayer[\"Contents\"].numProperties; j++) {\n\t\t\t\t\t\t\twriteLn(\"Clear property - \" + j + \"/\" + newLayer[\"Contents\"].numProperties);\n\t\t\t\t\t\t\tif (newLayer[\"Contents\"].property(j).name != disconnectedPropertyName) {\n\t\t\t\t\t\t\t\tnewLayer[\"Contents\"].property(j).remove();\n\t\t\t\t\t\t\t\tj--;\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (flag == true) {\n\t\t\t\t\ti--;\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\tvar newLayer = layer.duplicate();\n\t\t\t\tvar disconnectedPropertyName = oldLayer[\"Contents\"].property(i).name;\n\t\t\t\tnewLayer.name = disconnectedPropertyName;\n\t\t\t\toldLayer[\"Contents\"].property(i).remove();\n\t\t\t\ti--;\n\n\t\t\t\tfor (var j = 1; j <= newLayer[\"Contents\"].numProperties; j++) {\n\t\t\t\t\twriteLn(\"Clear roperty - \" + j + \"/\" + newLayer[\"Contents\"].numProperties);\n\t\t\t\t\tif (newLayer[\"Contents\"].property(j).name != disconnectedPropertyName) {\n\t\t\t\t\t\tnewLayer[\"Contents\"].property(j).remove();\n\t\t\t\t\t\tj--;\n\t\t\t\t\t};\n\t\t\t\t};\n\t\t\t}\n\t\t}\n\t\tif (selectedPropertiesNames.length == 0) {\n\t\t\toldLayer.remove();\n\t\t}\n\t}\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/extractShapeDifferentLayers/index.js\n// module id = 13\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/extractShapeDifferentLayers/index.js?");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function separateShapesSingleLayer() {\n  app.beginUndoGroup('Separate Shapes');\n  var thisComp = app.project.activeItem;\n  if (thisComp !== null) {\n    var activeLayer = thisComp.selectedLayers[0];\n    if (activeLayer !== null) {\n      var selectedShapes = activeLayer.selectedProperties;\n      if (selectedShapes === '') {\n        for (var _i = 1; _i <= activeLayer.property(2).numProperties; _i += 1) {\n          selectedShapes[_i - 1] = activeLayer.property(2).property(_i);\n        }\n      }\n\n      var duplicateLayer = activeLayer.duplicate();\n      duplicateLayer.selected = true;\n\n      var i = 1; // set counter for cycle\n      var flag = false; // set flag for checking\n      while (i <= duplicateLayer.property(2).numProperties) {\n        // check every group in shape\n        for (var j = 0; j < selectedShapes.length; j += 1) {\n          // check every selected group\n          if (duplicateLayer.property(2).property(i).name === selectedShapes[j].name) {\n            // if group of shape = selected group\n            flag = true; // set flag true\n          }\n        }\n\n        if (flag === false) {\n          duplicateLayer.property(2).property(i).remove(); // remove all items expect selected\n          i -= 1;\n        }\n\n        flag = false;\n        i += 1;\n\n        var maxNum = duplicateLayer.property(2).numProperties;\n        writeLn('Working with - ' + i + '/' + maxNum);\n      }\n\n      // clear source >\n      duplicateLayer = activeLayer.duplicate();\n      duplicateLayer.selected = true;\n      duplicateLayer.name = activeLayer.name;\n\n      i = 1; // set counter for cycle\n      flag = false; // set flag for checking\n      while (i <= duplicateLayer.property(2).numProperties) {\n        // check every group in shape\n        for (var _j = 0; _j < selectedShapes.length; _j += 1) {\n          // check every selected group\n          if (duplicateLayer.property(2).property(i).name === selectedShapes[_j].name) {\n            // if group of shape = selected group\n            flag = true; // set flag true\n          }\n        }\n\n        if (flag === true) {\n          duplicateLayer.property(2).property(i).remove(); // remove all items expect selected\n          i -= 1;\n        }\n\n        flag = false;\n        i += 1;\n\n        var _maxNum = duplicateLayer.property(2).numProperties;\n        writeLn('Working with - ' + i + '/' + _maxNum);\n      }\n\n      activeLayer.remove();\n      // clear source <\n    } else {\n      alert('Select some Group of Shapes');\n    }\n  } else {\n    alert('Select some Group of Shapes');\n  }\n  writeLn('Ready');\n  app.endUndoGroup();\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/extractShapeSingleLayer/index.js\n// module id = 14\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/extractShapeSingleLayer/index.js?");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// image resize prototype\nmodule.exports = function () {\n  // written by Marc Autret\n  // \"this\" is the container; \"this.image\" is the graphic if( !this.image ) return;\n  var WH = undefined.size,\n      wh = undefined.image.size,\n      k = Math.min(WH[0] / wh[0], WH[1] / wh[1]),\n      xy;\n  // Resize proportionally:\n  wh = [k * wh[0], k * wh[1]];\n  // Center:\n  xy = [(WH[0] - wh[0]) / 2, (WH[1] - wh[1]) / 2];\n  undefined.graphics.drawImage(undefined.image, xy[0], xy[1], wh[0], wh[1]);\n  WH = wh = xy = null;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/prototypes/imageDraw.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/prototypes/imageDraw.js?");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * try to load file if it fails create img file\n * @param  {array} arrayOfIcons\n * @return {object}\n */\nmodule.exports = function myTypeIcons(img) {\n  var newImg = void 0;\n  try {\n    newImg = ScriptUI.newImage(img);\n  } catch (err) {\n    var ScriptFolder = new Folder(Folder.userData.fsName + '/' + ScriptName + '/');\n    ScriptFolder.create();\n    var f = void 0;\n    f = new File(ScriptFolder.fsName + '/test.png');\n    f.encoding = 'BINARY';\n    f.open('w');\n    f.write(img);\n    f.close();\n    newImg = ScriptUI.newImage(f);\n    f.remove();\n    f = 0;\n  }\n\n  return newImg;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/loadImage.js\n// module id = 16\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/loadImage.js?");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000IDAT8\\u0011c` \\u0012`\\u0004ó\\u001f\\b(1\\u0011\\b(1\\u0000Yï¨AÈ¡=xÃè\\u000bv\\u0007\\u0013%\\nÖ\\u000bóÚ#¢´`W\\u0004Ö\\u000b3h7v5D\\\"ô\\u0002s\\u000e\\u0010ÿ\\u0005e\\u0015\\u0012\\u0001H\\u000eu@©$\\u001a\\u0002R>\\u0005Å\\u0010\\u0010\\u0007(È\\u0006Ä{A²D=@ul\\u0018\\u0006!\\u00196\\u0005¨\\u00007Arq\\u001al2P6\\u0010÷\\u0003ñU þ\\fÅ 6HL\\u001bY-ÕÙ\\u0000WýóNs¬\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/untime.png\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/untime.png?");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = [{\n  name: \"createNull\",\n  src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\0{IDAT8\\x8D\\xD5\\x93M\\x12\\x80 \\b\\x85\\x9FN\\x1D\\x8C\\x83\\x95Z\\x07\\xE3`-j\\x83F\\xF63jm\\xFAV\\x0F\\xF11\\x82\\x83a\\xE6\\x15\\x02\\x11\\x99\\xA8\\x99\\xD9\\x03p\\x12\\x06\\\"\\xF2*\\x97<F\\x07-t:hy\\xC1\\xF5A\\x01\\xD1ck\\x8D9\\xEF\\x0BH\\xAF\\xB1\\xE7\\\"\\xB4\\xC7b\\x1F\\x94\\xBBu\\x9CI\\x9EOf\\x10D\\x87\\xA7\\x8B\\x19G\\xCF\\xBF\\xBF1\\xDF\\x85^\\xE9\\x11\\xC0 z\\x060\\xA9\\xDCrW\\xA0\\x9A\\xD7\\xCB\\xB4\\x01\\xCF\\xB3F\\xF1\\x0E!\\xAE\\xD1\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"clearShape\",\n  src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\0\\xF4IDAT8\\x8D\\x9D\\xD1;NBQ\\x10\\x06\\xE0\\xCF\\x8B\\x95\\x9D\\x89\\x15\\xD1\\xD2\\x06\\xA9(\\xB0$CL\\xDC\\0\\x8D=\\r\\x85[p\\x13T\\xAC\\xC0=\\x10\\xE3,\\0z\\x0BK-M\\xEC-\\x88\\x85G\\x03\\xC8\\xBDA'\\x99\\x9C\\xC9\\xFC\\x8F\\x99\\x9C\\xA1!2s\\x98\\x99\\xC3&\\xCEa\\x13\\x88\\xBB\\xF2>\\xD6\\x11\\xAA\\x86\\xE9\\x03\\f0(\\xF5\\xDF\\f\\xD6\\xA6o\\xD7\\x1Bq\\xB0c\\xF2\\t\\xAEp\\xBF\\x05\\xDD\\xE0!\\\"\\xDE6\\f2\\xF3\\x12\\xB78/y\\xDC\\xB0\\x15\\xBC\\xE3\\xB9\\xE4\\xB4\\xC2\\x02\\x1F\\xE8\\xEF!V8\\xFD\\xA2YT\\x11\\xB1\\xC2\\x18\\xB3=\\xC4\\xDF1\\xC38\\\"V\\x15\\x14\\x93\\t\\xA6{\\x88\\xA7\\x98\\x14\\xCD\\xE6'f&\\xBC\\xE0\\xB4F\\xFC\\x8A\\xB3\\x88\\xF8il\\x9F\\xF1\\b\\xED\\x86\\xE9\\xED\\xC2\\xA95\\xE8\\xEC\\xE8m\\xF3;M\\x06\\x17k\\xF5\\x12\\xD7%\\x975\\x9C_\\x06]<a\\x84~D\\xCC#b\\xEE\\xEBl\\xA3\\x82uk\\xF7\\xCB\\xCC^f\\xB6\\x1A\\xF0Vf\\xF6j\\r\\xFE\\x13\\x9F\\xD4\\xF1?\\xD6\\x9EX:\\x9D\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"separateShapesSingleLayer\", src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\0\\xF7IDAT8\\x8D\\xB5\\xD3?.\\x84Q\\x14\\x05\\xF0\\x9F\\x89VD\\x86JC\\xA1\\xD3\\x1A\\xE5\\xE4\\x8A-L\\xA1Q\\xC8\\xB4\\n\\x1B\\xB0\\x05\\x85jZ\\x8DFb\\x03\\xE2.`\\xA2\\x97(,\\x80D\\xB4\\x12C\\xE1\\x91\\x99\\xCF|\\x9F\\x99\\xC2MN\\xDE}\\xEF\\x9Ds\\xEE\\xFBKCd\\xE6^f\\xEE5q\\x16\\x9B&qZ\\xDA\\xDB:B\\xAB\\xA1z\\x17]tK>\\x9F\\xC1X\\xF5j>\\x11\\x0BS*\\xAFb\\x1F\\x97\\x95\\xA9\\x03\\xDCD\\xC4\\xF3\\x84Af\\xEE\\xE2\\x18[\\x05+\\r\\xAB\\x82\\x17<\\x14\\x9C\\xB70\\xC4\\x1B:3\\x88\\x15N\\xA7h\\x86\\xAD\\x88\\x18\\xA1\\x8F\\xC1\\f\\xE2\\xEF\\x18\\xA0\\x1F\\x11\\xA3\\x9F3\\xC8\\xCC\\x05\\x9C`\\xF3\\x0F\\xF1#\\xCE\\\"\\xE2c\\x8E\\x82\\xFF\\x18\\x13\\xD7X\\xB6\\xF1\\x84\\xE5\\x1A\\xFE+\\xD6\\xC6\\x97_}H\\xEBh\\xFBz\\xE2\\xD3\\xD0.\\x1Cu\\x06\\xDB\\x95\\xFE]A-\\xA7\\xCE\\xE0\\x1E=\\xEC\\x14\\xF4\\xCA\\xD8/\\x83\\xEAo\\\\\\xC2\\x11.\\\"\\xE2}l\\xFC*3\\xAFq\\x88\\x8Dq\\xC1'tA;8\\x19%\\\\y\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"separateShapesDifferentLayers\", src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\x01BIDAT8\\x8D\\x95\\xD21kUA\\x14\\x04\\xE0/\\x8F'\\x98`\\xA1\\xAD`\\xA1h\\xA1<\\xA2\\x85\\xAD\\x81\\xC1B\\x14T,\\xAC,\\x04\\xB1\\xF0Gh\\n\\x1B\\x7F\\x82\\x90F!\\xD8\\x89\\x16V\\xB1\\xF0\\x14B\\n\\xBB\\x88\\x85(\\xF6A\\x1BA\\x12\\xC1\\xCA\\xC2}z}\\xB9\\xEF\\x8A\\x03\\xCB\\xDD=3s\\xE6\\xECr\\x19@U-W\\xD5\\xF2\\x90f<D\\xE2^\\xFB^\\x9F'X\\x18H\\x9F`\\xAB\\x1DO'y\\xD7\\xA7\\x1B\\r\\xA4\\xDFj\\xFC\\bw\\xE7\\x89\\x86\\x1A\\xAC\\xE1G[\\x8F\\xDBT{&^\\xA8\\xAA%\\x1C\\xC7\\t\\x1C\\xC1Z\\x92\\xDDf\\xB8\\x8F\\xB7I\\x9E6\\xF3#l\\xE3c[\\xEF\\xC78\\x87\\xE7XlM/U\\xD5\\xD5$\\xDF\\xB1\\x9Ad\\x1Av\\x1B7;\\xE1;\\xB82J\\xB2\\x81\\xCB\\xD8m\\xC4\\nn@\\xC7\\f\\x87[:|\\xC3\\xC5$\\xAF~\\xDF\\xA9\\xAAVp\\x1E\\x0F\\x93l\\xEBAU\\x8Dq\\x01_\\x92\\xBC\\xE9\\xD3\\xFC7\\xF6\\xBCjU\\xED\\xC3\\x04\\x8BI6[m\\x15\\x07\\xF1\\x01\\xCF\\x92|\\x9E\\xEA\\xC73\\xE6\\xB3x\\x8D\\xFDx\\x82\\xCDF\\x9D\\xC1\\xB5\\xB6\\x7F\\xD1\\xF5\\xCC\\xFE\\x07\\x93f\\x9E\\xC5Ng\\x7F\\xEA_\\r\\xE0+6:\\xF5u|\\x9A\\xD1\\xF468\\x8A\\x078\\x96d}ZL\\xF2\\x12'q\\x07\\x87z&\\xFC\\x85\\xAA:0\\x97\\xFC\\xA3\\xF9\\xEB\\xFC\\x13\\xC5DY\\x90\\x99\\x80\\x03\\xB5\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"addFolder\", src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\0\\xD1IDAT8\\x8D\\xAD\\x921\\x0E\\x820\\x14\\x86\\xBF\\x8A#&\\x8C0\\xC1\\x110\\xF1\\x02\\x9C\\xC2\\x98\\x18\\xF5h\\xC6\\xB8x\\x8A^\\x80D\\x8E\\x80.0\\x9A\\xC8(\\xA9\\x83Z$\\xFAp\\xA8\\xFF\\xD2\\xE6\\xF5\\xFD\\xDF\\xFB\\xDBTi\\xAD\\xE7\\xC0\\x14Y\\xC7,\\xCB\\x0E\\xD2\\xE1\\x18\\xD8?WI7@\\x04(\\xAD\\xB5\\x190\\xFFR>r0\\x03\\xCC\\xC4\\xE8I\\xB5#\\xAEw\\0\\x9C\\xC2\\x15e\\xB4\\xFA\\xDA7pw\\x832\\xAD\\xDDK\\xEA\\x01\\x94i\\x89\\xEB=\\0AS\\xD8z\\xD0\\x14$\\x15\\xCF4K\\x8C\\xF2\\x04\\0-I\\xB5\\xFD\\x98\\x12\\\\\\x0B\\x82\\xEB\\x03x\\x0E\\x17\\x18:\\x80\\xEB#\\xF6\\x13\\x18<\\xCAhcc\\xBF\\xA6^&)\\x17?\\xB5=2@y\\x94\\xD1\\x1A\\x80\\xA4\\xA2\\x03\\xF8\\xA9\\xAD\\x0F&\\xE8K\\xBD=\\x96\\x92\\xBB\\x1C\\x7F\\\"# w\\xF0\\xBBx\\xFF\\xA4;\\xE74?\\xEC\\xBF\\x1D\\xF36\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"labelFolder\", src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\0pIDAT8\\x8Dc\\xDC\\xBF\\x7F\\x7F8\\x03\\x03\\x83!\\x03np\\xDE\\xD1\\xD1q%.I\\x16\\x06\\x06\\x86%P\\x1A\\x17\\xF8\\xC3\\xC0\\xC0\\x80\\xD3\\0\\xC6\\xFD\\xFB\\xF7\\xFF\\xC7\\xA3\\x99\\x108\\xC3D\\x81f\\x06\\x06\\x06\\x06\\x13J\\r``|7\\xCB\\x98\\x12/0\\xB0\\b~>K\\x91\\x0B(\\xF6\\xC2\\xC0\\x1B\\xC0\\xB2\\xF4\\x9B\\x03E\\x0602\\x14n\\xA6(\\x16(\\x0F\\x03n\\x16\\xC6\\x9B\\xE4j\\xA6D/\\xF5\\0\\0R\\x13\\x16\\x03\\xDB\\xA7Ap\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}, {\n  name: \"onionSkin\",\n  src: \"\\x89PNG\\r\\n\\x1A\\n\\0\\0\\0\\rIHDR\\0\\0\\0\\x10\\0\\0\\0\\x10\\b\\x06\\0\\0\\0\\x1F\\xF3\\xFFa\\0\\0\\0\\tpHYs\\0\\0\\0\\x01\\0\\0\\0\\x01\\x018\\\"\\xF4@\\0\\0\\0$zTXtCreator\\0\\0\\b\\x99sL\\xC9OJUpL+I-RpMKKM.)\\x06\\0Az\\x06\\xCEjz\\x15\\xC5\\0\\0\\x01hIDAT8\\x8D\\xD5\\xD2\\xB1k\\x93a\\x10\\x06\\xF0\\xDF\\x9B&\\r\\x1D\\xAC\\x8AR\\xB0\\xB5\\xADu\\x10\\xB4\\xB8\\xF8\\x07Ttp\\xD1\\xC9E7\\xC1Ap.H\\x06G\\x87 |\\xB3\\x9B\\x88\\xFE\\r..\\xC1\\xA98\\xB4N\\xA5\\xE0P\\x1Ab\\x154\\xA8\\x95VICr\\x0E~\\t%~uq\\xF2\\xE0\\x1D\\xDE{\\xEE\\xB9\\xBB\\xE7\\xE1\\xF8\\xC7H\\x87\\x01\\x91\\xA9`1\\xFF\\xAE\\xA7e\\xDD\\xA2\\xBA\\xD2\\x1F\\xC4\\xE7Rdn\\xA3\\x85\\xB7\\xF9kE\\xE6\\xD6_7\\x88\\xCC\\x11\\\\\\xC3\\r\\xDC\\x19\\xDD.\\xA4\\xA8\\xED\\xD5\\x9F=\\xFE\\xF1\\xA0\\x81\\x86zz?l\\x10\\x99\\t\\xDC\\xC3\\t\\xDC\\xC5L\\xD1\\xB4fo~\\xFB\\xCC\\x97\\xAD\\xA7\\xE8\\xE2\\x85z\\xDA\\x1AH\\xB8*,\\ns\\x98.\\\"\\xC3\\xECXk\\x1As\\x98\\xC5MB)2\\x93\\xC2\\x12\\xC6\\xF3\\xBAB\\xB3\\xE0gL\\f\\xB0q\\\\Ts\\xAA\\x84\\xB3#z\\x9B\\x875x\\xDD\\xBD|\\x10KX(a\\x12\\x1F\\x86\\xE9\\xB0\\x8A\\x9DQ\\xF2v\\x7Ff\\xE7\\xFE\\xEE\\x93\\xD5\\x03\\xA9\\xEF\\xA8\\x94\\x11\\x92ua\\x01G\\xD1\\x11^J\\xCEc\\xEA]\\xEF\\xDC~\\xA3{\\xE5\\xDB\\xC3\\xBDG\\x1B\\xED\\xFE\\xC9\\x81\\x84\\xC0\\x1B\\xF4Sd.`\\nU\\xE1RnR\\x05m\\xC9\\xAB\\xF49vq\\x1D\\xA7\\xFD\\xBE\\x9B6\\xD6\\xF0\\x11\\x9F\\xCA\\xD8\\xC4\\xB1\\\\\\xD5\\nV\\xF2)\\xFBX\\xD3\\xC3\\x982\\xAA\\xB9\\xEE\\xFE\\x10\\xEF\\xD9\\x1C\\xDCA\\x15\\xF38\\x9E\\x83_\\xD1L\\xCB:\\xA0\\x16\\x85\\xB8z\\xEA\\x14\\xBA\\xFD\\x7F\\xC5/\\xA0\\x1FrD\\x98m)|\\0\\0\\0\\0IEND\\xAEB`\\x82\"\n}];\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/icons.js\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/icons.js?");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * try to load file if it fails create img file\n * @param  {array} arrayOfIcons\n * @return {object}\n */\nmodule.exports = function myTypeIcons(arrayOfIcons) {\n  var obj = {};\n  try {\n    for (var i = arrayOfIcons.length - 1; i >= 0; i -= 1) {\n      obj[arrayOfIcons[i].name] = ScriptUI.newImage(arrayOfIcons[i].src);\n    }\n  } catch (err) {\n    var ScriptFolder = new Folder(Folder.userData.fsName + '/' + ScriptName + '/');\n    ScriptFolder.create();\n    var f = void 0;\n    for (var _i = arrayOfIcons.length - 1; _i >= 0; _i -= 1) {\n      f = new File(ScriptFolder.fsName + '/' + arrayOfIcons[_i].name + '.png');\n      f.encoding = 'BINARY';\n      f.open('w');\n      f.write(arrayOfIcons[_i].src);\n      f.close();\n      obj[arrayOfIcons[_i].name] = ScriptUI.newImage(f);\n      f.remove();\n    }\n    f = 0;\n  }\n\n  arrayOfIcons = 0;\n  return obj;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/helpers/loadImages.js\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/helpers/loadImages.js?");

/***/ })
/******/ ]);