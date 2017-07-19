const settings = {};

// general settings >
settings.general = {
  orientation: 'row',
  buttonsSize: [20, 20],
};
if (settings.general.orientation === 'column') {
  settings.general.separatorSize = [0, 0, settings.general.buttonsSize[0] * 3, 0.5];
} else {
  settings.general.separatorSize = [0, 0, 1, settings.general.buttonsSize[0]];
}
// general settings <

// onion skin settings >
settings.onionSkin = {
  forwardColor: [0 / 255, 150 / 255, 255 / 255, 1],
  backwardColor: [255 / 255, 0 / 255, 0 / 255, 1],
  forwardFrames: 1,
  backwardFrames: 2,
};
// onion skin settings <

// create null >
settings.createNull = {
  size: [50, 50],
};
// create null <

// create folders >
settings.folders = [
  {
    name: '00 Render',
    color: 0,
  },
  {
    name: '01 Comps',
    color: 13,
  },
  {
    name: '02 Pre-comps',
    color: 10,
  },
  {
    name: '03 Elements',
    color: 3,
  },
  {
    name: '04 Sound',
    color: 1,
  },
];
// create folders <

// open window with settings >
function openSettings() {
  let settingsWindow = new Window('dialog', 'Settings');
  settingsWindow.maximumSize = [500, 300];
  settingsWindow.minimumSize = settingsWindow.maximumSize;
  settingsWindow.orientation = 'column';

  // settingsWindow.center();
  // settingsWindow.show();
}
// open window with settings <

module.exports = settings;
