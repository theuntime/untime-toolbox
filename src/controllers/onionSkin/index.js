const createOnionSkinForward = require('./createForward');
const createOnionSkinBackward = require('./createBackward');
const clearOnionSkin = require('./clear');
const createTempComp = require('../../helpers/createTempComp');

module.exports = () => {
  const thisComp = app.project.activeItem;
  if (thisComp instanceof CompItem) {
    const layers = thisComp.selectedLayers;
    let onionSkinEnabled = false;

    if (thisComp instanceof CompItem) {
      for (let i = 1; i <= thisComp.numLayers; i += 1) {
        const k = thisComp.layer(i).name.split(' - ');
        if (k[0] === 'OnionSkin') onionSkinEnabled = true;
      }
    }

    if (thisComp instanceof CompItem) {
      app.beginUndoGroup('Onion Skin');
      const tempComp = createTempComp();
      if (onionSkinEnabled === true) {
        for (let i = thisComp.numLayers; i >= 1; i -= 1) {
          clearOnionSkin(thisComp.layer(i));
        }
      } else {
        if (layers.length > 0) {
          createOnionSkinBackward(thisComp);
          createOnionSkinForward(thisComp);
        } else {
          createOnionSkinBackward(thisComp);
          createOnionSkinForward(thisComp);
        }
        thisComp.hideShyLayers = true;
      }
      tempComp.remove();
      app.endUndoGroup();
    }
    writeLn('Ready');
  } else {
    alert('Please choose any compostion');
  }
};
