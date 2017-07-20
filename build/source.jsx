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
eval("\n\nvar openUrl = __webpack_require__(2);\n\nvar settings = __webpack_require__(0);\n\nvar changeBGcolor = __webpack_require__(3);\n\nvar launchOnionSkin = __webpack_require__(4);\nvar createNull = __webpack_require__(9);\nvar createFolders = __webpack_require__(10);\nvar setSameLabelColors = __webpack_require__(11);\nvar clearShape = __webpack_require__(12);\nvar separateShapesDifferentLayers = __webpack_require__(13);\nvar separateShapesSingleLayer = __webpack_require__(14);\n\nImage.prototype.onDraw = __webpack_require__(15);\n\nvar loadImage = __webpack_require__(16);\nvar createNullIcon = __webpack_require__(17);\nvar onionSkinIcon = __webpack_require__(18);\nvar addFoldersIcon = __webpack_require__(19);\nvar fillFoldersIcon = __webpack_require__(20);\nvar clearShapeIcon = __webpack_require__(21);\nvar subpshapesToSingleIcon = __webpack_require__(22);\nvar subpshapesToDifferentIcon = __webpack_require__(23);\nvar untimeLogoIcon = __webpack_require__(24);\n\nvar myScriptBuildUI = function myScriptBuildUI(thisObj) {\n\tvar myPanel = thisObj instanceof Panel ? thisObj : new Window('palette', 'Untime Toolbox', undefined);\n\n\t// set groups >\n\tvar mainGrp = myPanel.add('group', undefined);\n\tmainGrp.orientation = settings.general.orientation;\n\tmainGrp.alignment = ['left', 'top'];\n\tmainGrp.alignChildren = ['left', 'top'];\n\n\tvar groupOne = mainGrp.add('group', undefined);\n\tgroupOne.orientation = 'row';\n\n\tvar separator01 = mainGrp.add('group', settings.general.separatorSize);\n\tchangeBGcolor(separator01, [0, 0, 0, 0.2]);\n\n\tvar groupTwo = mainGrp.add('group', undefined);\n\tgroupTwo.orientation = 'row';\n\n\tvar separator02 = mainGrp.add('group', settings.general.separatorSize);\n\tchangeBGcolor(separator02, [0, 0, 0, 0.2]);\n\n\tvar groupThree = mainGrp.add('group', undefined);\n\tgroupThree.orientation = 'row';\n\t// set groups  <\n\t// set buttons >\n\tvar createNullButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(createNullIcon), { style: 'toolbutton', toggle: false });\n\tcreateNullButton.size = settings.general.buttonsSize;\n\tcreateNullButton.onClick = createNull;\n\tcreateNullButton.helpTip = 'Create a Null';\n\n\tonionSkinButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(onionSkinIcon), { style: 'toolbutton', toggle: false });\n\tonionSkinButton.size = settings.general.buttonsSize;\n\tonionSkinButton.onClick = launchOnionSkin;\n\tonionSkinButton.helpTip = 'Enable or Disable Onion Skin';\n\n\tcreateFoldersButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(addFoldersIcon), { style: 'toolbutton', toggle: false });\n\tcreateFoldersButton.size = settings.general.buttonsSize;\n\tcreateFoldersButton.onClick = createFolders;\n\tcreateFoldersButton.helpTip = 'Create default Folders';\n\n\tsetSameLabelColorsButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(fillFoldersIcon), { style: 'toolbutton', toggle: false });\n\tsetSameLabelColorsButton.size = settings.general.buttonsSize;\n\tsetSameLabelColorsButton.onClick = setSameLabelColors;\n\tsetSameLabelColorsButton.helpTip = 'Change label colors of Folders';\n\n\tclearShapeButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(clearShapeIcon), { style: 'toolbutton', toggle: false });\n\tclearShapeButton.size = settings.general.buttonsSize;\n\tclearShapeButton.onClick = clearShape;\n\tclearShapeButton.helpTip = 'Remove additional groups from shapes after \\'Create Shape Layers\\' command';\n\n\tseparateShapesSingleLayerButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(subpshapesToSingleIcon), { style: 'toolbutton', toggle: false });\n\tseparateShapesSingleLayerButton.size = settings.general.buttonsSize;\n\tseparateShapesSingleLayerButton.onClick = separateShapesSingleLayer;\n\tseparateShapesSingleLayerButton.helpTip = 'Subshapes to single layer';\n\n\tseparateShapesDifferentLayersButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(subpshapesToDifferentIcon), { style: 'toolbutton', toggle: false });\n\tseparateShapesDifferentLayersButton.size = settings.general.buttonsSize;\n\tseparateShapesDifferentLayersButton.onClick = separateShapesDifferentLayers;\n\tseparateShapesDifferentLayersButton.helpTip = 'Subshapes to different layers';\n\n\tcreaditsButton = groupThree.add('iconbutton', [0, 0, 18, 18], loadImage(untimeLogoIcon), { style: 'toolbutton', toggle: false });\n\tcreaditsButton.size = settings.general.buttonsSize;\n\tcreaditsButton.onClick = function () {\n\t\treturn openUrl('https://untimestudio.com');\n\t};\n\tcreaditsButton.helpTip = 'Untime Studio';\n\n\thelpButton = groupThree.add('button', undefined, '?');\n\thelpButton.size = settings.general.buttonsSize;\n\thelpButton.onClick = function () {\n\t\treturn openUrl('https://github.com/tonypinkevych/untime-toolbox');\n\t};\n\thelpButton.helpTip = 'Help';\n\t// set buttons <\n\n\t// Setup panel sizing and make panel resizable\n\tmyPanel.layout.layout(true);\n\tmyPanel.minimumSize = mainGrp.size;\n\tmyPanel.layout.resize();\n\tmyPanel.onResizing = myPanel.onResize = function () {\n\t\treturn thisObj.layout.resize();\n\t};\n\n\treturn myPanel;\n};\n\nvar myScript = function myScript(thisObj) {\n\tvar myScriptPal = myScriptBuildUI(thisObj);\n\n\tif (myScriptPal != null && myScriptPal instanceof Window) {\n\t\tmyScriptPal.center();\n\t\tmyScriptPal.show();\n\t}\n};\n\n// add script to global variable\n__global__.run = function (panel) {\n\treturn myScript(panel);\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/index.js?");

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

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000þIDAT8\\u0011Ý¿\\u000e\\u0001A\\u0010ÆïD¡Ò(¼DOÉ\\u0013h¼\\\"¢8/@T4Bx\\nBT¢á÷mn²KDü¹Ê$ßÎì7nv7sQ¥\\\\½$uqmR÷<ôÁ%&>Ö\\\"B\\u001aÙµ³üRÃ,#Xz:ªb´|ê\\u0018¢0\\u0001ý3uÁ(\\u001dè\\u001an\\u0006\\u0006ëjDcÍ;òÅØ\\u0006\\u0018[HÎ_uf\\\\#´8\\u0007\\u00070x·3Å¦9þ5!Lf\\u001f\\u0014Zrìh[ì38|S\\u0014«\\u001cåz¡ú½Ý?ã\\u001b\\u0011îGÃZ\\u0001mìÇR\\u001d\\b.µ\\u001785\\\"Uå2j­gC»\\neÖ\\rí\\\"ðéÃeí5´§ªÉ×¿\\u0011W(å\\u0006.½¹`¬\\\"Ú1\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/createNull.png\n// module id = 17\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/createNull.png?");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000øIDAT8\\u0011Ý1\\nÂ0\\u0014\\u001b¡@O \\u0014ÅÅ;7p(ÞJ'o!èÜAÑ\\u000eÁ\\u001b8\\tõûÛ¦F¨XÁ©?|$yyù¼¤×Z\\u0019÷dYùg0-ãgÚ\\t0\\u0006é\\n\\u001bX\\u001bc2\\u0005¤Ê\\b\\u0011ã\\u001dÜA\\u0006]XB\\u001fêt ¸ÂìVMb\\u0012\\u0014+Hk`¯À\\u0017)§Ø\\f\\u001d\\u001fR¬3ý\\u0018*ÿ¸¾>£5)w4u!/Ñ\\u000e¨©\\u0006laÐÇn+£¿HF\\u0017Ð®\\\\é*ÏÑ\\tzµ(Z±\\\\ï¤©^¹\\fËâFZMÿçëw\\u001fdÇ\\u0016\\u001e ãêA.`\\u0000uz{2ÙýElÍlýB¦íMÖþ\\\"ZßR=\\u0001\\u0015\\bXõ<=\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/onionSkin.png\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/onionSkin.png?");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000²IDAT8\\u0011ÕSA\\n0\\u00104Òcñÿï\\u0010ô\\u0013½ö\\u001b-ç\\u0018g¤#1\\u001e\\nº0dwfvÝ\\u0004¬ªÛs®\\u0003RÑº\\u0014'¤\\u001aÄ×\\u0014Qì}¾%RC\\\"Î<H¨wÙ(×\\u0003c\\u0003<sUÓÔð\\u0012h_àíQT½Å6]¥BS}\\u001f¸\\u00170RCXyë{SäÛhþ\\u0001&Àþò\\u0011ç~hjÊ\\u0001í\\\"o¤í°Q\\r\\u0018Õá©Û<B!¬1|£bhP¯ÉÅØpî§ûÿÄÌú­»kñ\\fZ\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/addFolders.png\n// module id = 19\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/addFolders.png?");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000YIDAT8\\u0011c`\\u0018²àÿÿÿ[\\u0018\\u001bØJ§@&`Ó\\u0000\\u0013g\\u0002I\\u00029¸l\\u0003©\\u0003\\u0003l`Tb\\b\\u0012)\\u0000Ó\\u000bv\\u0011zð*\\u001b|\\u0006±ÀÜ\\u000bó+O*=ø¼6\\u0002\\\\ôÔXBRÿ\\u0012=\\u0000\\u001f3Tºçÿhn\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/fillFolders.png\n// module id = 20\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/fillFolders.png?");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0001@IDAT8\\u0011Õ½N\\u0002A\\u0014Fw\\u0014ú\\u000evB£ÁÂÊ\\n\\u001a\\u0012H°ÁJÖø\\u00046\\u0016¶&¼\\u0003\\u0005!¡²²¢ \\\"PiXÐØÐ`±oK²qÙ\\u0010´ñ&gïß7wfw'þÅqì`\\b=ØÞøð,®l\\u0004õß\\f\\u001a0 \\u0011\\u0018l4Å5ÐIôzb\\fÕUÃïè\\u0000Ñ\\u001eä\\u0003gøKç\\\\èßáîñ=ü3<Á\\u0014ÞÐ|:\\u0002nq×ð\\u0000\\u0012}À\\u0014A\\u000bï\\rM \\u0002¶Q!äèÊÄ~Ð\\tÂ/8ò5\\u001eÒÂ\\f\\u0013r\\nUxÿÑH¨\\u00164AÛHiûéwkØnª¢zA}\\u001d\\u0010C;cP¾>|Â¶\\u0012Ù\\\")â^RêV\\u001a\\u0011Ì-16èfß\\u0004ì~*,Ç\\u000fAlcÑ\\u0004òP>èR\\nÅ%ØIæ\\u0014\\u0004; ëÀ+\\\\ÝlÅªuA¶òøM\\u0010ÜÀ\\u0015,o½í®\\u001a4ÕþÜ\\u0003ÛU\\u0015bj\\r\\u001c\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/clearShape.png\n// module id = 21\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/clearShape.png?");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000ÒIDAT8\\u0011Õ½\\nÂ0\\u0014\\u0013]\\u001c\\u001cì\\u0003è.¸:u\\u0015g\\u0007E\\u001f¥ï\\\"8\\u000bÎ¾«£Ôï@\\u0002IÚÚj\\u0017½pÈMÎÉG~ù»*Ër&õ>8£Ô\\u000b\\u0004 G¾ò¯a\\u0010\\u000e¢þc\\u00102´\\r ¾ÕZö\\u0016H @'tCm¥²\\u000e|ãÆ%ã\\u0004=[¤²\\u0016ýhÕ\\u001e»ë¦\\rg¾Zk×©W\\u0001\\u0001\\u0019\\u0011º£a\\u001avs½ß\\u0018Ø#ôÓÇ7GM\\u0010ùòª\\u000e´\\b\\u0012gúz_aÆ¯Å#WÛ£\\u000bÚÄ1ZsÞ.õ*swKC]2éÎó\\u0017\\u0006L¯ïéRG\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/subshapesToSingle.png\n// module id = 22\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/subshapesToSingle.png?");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0001?IDAT8\\u0011½=O\\u0002A\\u0014E\\u0019\\u0001ñ£ ¡P+ML@ VÚÊÐZ\\u0011ùQ4Úù36`aE\\u0014ö\\u0004\\u000b\\u0003\\u0005¬çíÎ3Ãº»$nâKNæÎ}oîÂîd2ÿUç\\u001dÃiêç\\u0011Òaª \\u0002.@ëòÏa$ô4µ\\u0014´Ô¤7vú/þ%:<q\\u001f]¶L1c¼,û\\u0007Ø\\u0016Þ\\u0017Þ9º\\u0002¯ð·b\\ræ5¸5cS.k\\u0016òV\\u0017ÑSÐZ!:AJ0Ç¸×®]ï~\\u0006¬À¿\\tÍÈ;Ü]ÃØ\\u0006\\r{F_­\\r°ÁkÃ\\b¤\\u001e¡\\u0010ñ÷4r°ñò1S\\u0006ÿïF\\u0006¹&ò>jêÙÃ{ºß¸rà\\b@¾Ð»\\u001e@/`\\t\\u00038P?ve¨\\u0003Z\\u0012f@¾[íp@Ô{¢5Gä@îÓ¬UGû2*¨Nç\\u0013ºP\\u000b\\u0007K´ø· ú\\fßßÃ¸)z'Ðë§ö¿\\u0001¡ò.×4\\u0013*\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/subshapesToDifferent.png\n// module id = 23\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/subshapesToDifferent.png?");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

eval("module.exports = \"PNG\\r\\n\\u001a\\n\\u0000\\u0000\\u0000\\rIHDR\\u0000\\u0000\\u0000\\u0012\\u0000\\u0000\\u0000\\u0012\\b\\u0006\\u0000\\u0000\\u0000VÎW\\u0000\\u0000\\u0000\\u0004gAMA\\u0000\\u0000±\\u000büa\\u0005\\u0000\\u0000\\u0000IDAT8\\u0011c` \\u0012`\\u0004ó\\u001f\\b(1\\u0011\\b(1\\u0000Yï¨AÈ¡=xÃè\\u000bv\\u0007\\u0013%\\nÖ\\u000bóÚ#¢´`W\\u0004Ö\\u000b3h7v5D\\\"ô\\u0002s\\u000e\\u0010ÿ\\u0005e\\u0015\\u0012\\u0001H\\u000eu@©$\\u001a\\u0002R>\\u0005Å\\u0010\\u0010\\u0007(È\\u0006Ä{A²D=@ul\\u0018\\u0006!\\u00196\\u0005¨\\u00007Arq\\u001al2P6\\u0010÷\\u0003ñU þ\\fÅ 6HL\\u001bY-ÕÙ\\u0000WýóNs¬\\u0000\\u0000\\u0000\\u0000IEND®B`\"\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/icons/untime.png\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/icons/untime.png?");

/***/ })
/******/ ]);