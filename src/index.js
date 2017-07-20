const openUrl = require('./helpers/openUrl');

const settings = require('./config/settings');

const changeBGcolor = require('./helpers/changeBgColor');

const launchOnionSkin = require('./controllers/onionSkin');
const createNull = require('./controllers/createNull');
const createFolders = require('./controllers/createFolders');
const setSameLabelColors = require('./controllers/setSameLabelColors');
const clearShape = require('./controllers/clearShape');
const separateShapesDifferentLayers = require('./controllers/extractShapeDifferentLayers');
const separateShapesSingleLayer = require('./controllers/extractShapeSingleLayer');

Image.prototype.onDraw = require('./prototypes/imageDraw');

const loadImage = require('./helpers/loadImage');
const createNullIcon = require('./icons/createNull.png');
const onionSkinIcon = require('./icons/onionSkin.png');
const addFoldersIcon = require('./icons/addFolders.png');
const fillFoldersIcon = require('./icons/fillFolders.png');
const clearShapeIcon = require('./icons/clearShape.png');
const subpshapesToSingleIcon = require('./icons/subshapesToSingle.png');
const subpshapesToDifferentIcon = require('./icons/subshapesToDifferent.png');
const untimeLogoIcon = require('./icons/untime.png');

const myScriptBuildUI = (thisObj) => {
	const myPanel = (thisObj instanceof Panel) ?
		thisObj :
		new Window('palette', 'Untime Toolbox', undefined);

	// set groups >
	const mainGrp = myPanel.add('group', undefined);
	mainGrp.orientation = settings.general.orientation;
	mainGrp.alignment = ['left', 'top'];
	mainGrp.alignChildren = ['left', 'top'];

	const groupOne = mainGrp.add('group', undefined);
	groupOne.orientation = 'row';

	const separator01 = mainGrp.add('group', settings.general.separatorSize);
	changeBGcolor(separator01, [0, 0, 0, 0.2]);

	const groupTwo = mainGrp.add('group', undefined);
	groupTwo.orientation = 'row';

	const separator02 = mainGrp.add('group', settings.general.separatorSize);
	changeBGcolor(separator02, [0, 0, 0, 0.2]);

	const groupThree = mainGrp.add('group', undefined);
	groupThree.orientation = 'row';
	// set groups  <
	// set buttons >
	const createNullButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(createNullIcon), { style: 'toolbutton', toggle: false });
	createNullButton.size = settings.general.buttonsSize;
	createNullButton.onClick = createNull;
	createNullButton.helpTip = 'Create a Null';

	onionSkinButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(onionSkinIcon), { style: 'toolbutton', toggle: false });
	onionSkinButton.size = settings.general.buttonsSize;
	onionSkinButton.onClick = launchOnionSkin;
	onionSkinButton.helpTip = 'Enable or Disable Onion Skin';

	createFoldersButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(addFoldersIcon), { style: 'toolbutton', toggle: false });
	createFoldersButton.size = settings.general.buttonsSize;
	createFoldersButton.onClick = createFolders;
	createFoldersButton.helpTip = 'Create default Folders';

	setSameLabelColorsButton = groupOne.add('iconbutton', [0, 0, 24, 24], loadImage(fillFoldersIcon), { style: 'toolbutton', toggle: false });
	setSameLabelColorsButton.size = settings.general.buttonsSize;
	setSameLabelColorsButton.onClick = setSameLabelColors;
	setSameLabelColorsButton.helpTip = 'Change label colors of Folders';

	clearShapeButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(clearShapeIcon), { style: 'toolbutton', toggle: false });
	clearShapeButton.size = settings.general.buttonsSize;
	clearShapeButton.onClick = clearShape;
	clearShapeButton.helpTip = 'Remove additional groups from shapes after \'Create Shape Layers\' command';

	separateShapesSingleLayerButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(subpshapesToSingleIcon), { style: 'toolbutton', toggle: false });
	separateShapesSingleLayerButton.size = settings.general.buttonsSize;
	separateShapesSingleLayerButton.onClick = separateShapesSingleLayer;
	separateShapesSingleLayerButton.helpTip = 'Subshapes to single layer';

	separateShapesDifferentLayersButton = groupTwo.add('iconbutton', [0, 0, 24, 24], loadImage(subpshapesToDifferentIcon), { style: 'toolbutton', toggle: false });
	separateShapesDifferentLayersButton.size = settings.general.buttonsSize;
	separateShapesDifferentLayersButton.onClick = separateShapesDifferentLayers;
	separateShapesDifferentLayersButton.helpTip = 'Subshapes to different layers';

	creaditsButton = groupThree.add('iconbutton', [0, 0, 18, 18], loadImage(untimeLogoIcon), { style: 'toolbutton', toggle: false });
	creaditsButton.size = settings.general.buttonsSize;
	creaditsButton.onClick = () => openUrl('https://untimestudio.com');
	creaditsButton.helpTip = 'Untime Studio';

	helpButton = groupThree.add('button', undefined, '?');
	helpButton.size = settings.general.buttonsSize;
	helpButton.onClick = () => openUrl('https://github.com/tonypinkevych/untime-toolbox');
	helpButton.helpTip = 'Help';
	// set buttons <

	// Setup panel sizing and make panel resizable
	myPanel.layout.layout(true);
	myPanel.minimumSize = mainGrp.size;
	myPanel.layout.resize();
	myPanel.onResizing = myPanel.onResize = () => thisObj.layout.resize();

	return myPanel;
};

const myScript = (thisObj) => {
	const myScriptPal = myScriptBuildUI(thisObj);

	if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
		myScriptPal.center();
		myScriptPal.show();
	}
};

// add script to global variable
__global__.run = (panel) => myScript(panel);
