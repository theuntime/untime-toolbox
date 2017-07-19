const settings = require('../../config/settings');

// create forward onion skin
module.exports = (thisComp) => {
  const tempSolid = thisComp.layers.addSolid([1, 1, 1], 'OnionSkin - forward', thisComp.width, thisComp.height, thisComp.pixelAspect, thisComp.duration);
  const echo = tempSolid.Effects.addProperty('ADBE Echo');
  echo.property('ADBE Echo-0001').expression = 'framesToTime(1)';
  echo.property('ADBE Echo-0002').setValue(settings.onionSkin.forwardFrames);
  echo.property('ADBE Echo-0004').setValue(0.75);
  echo.property('ADBE Echo-0005').setValue(7);
  const fill = tempSolid.Effects.addProperty('ADBE Fill');
  fill.property('ADBE Fill-0002').setValue(settings.onionSkin.forwardColor);
  tempSolid.opacity.setValue(35);
  tempSolid.adjustmentLayer = true;
  tempSolid.guideLayer = true;
  tempSolid.shy = true;
  tempSolid.moveToBeginning();
  tempSolid.locked = true;
};
