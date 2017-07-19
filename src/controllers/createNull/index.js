const settings = require('../../config/settings');

module.exports = function createNull() {
  app.beginUndoGroup('Create Null');
  const thisComp = app.project.activeItem;

  if (thisComp instanceof CompItem) {
    const nullTemp = thisComp.layers.addNull(thisComp.duration);
    nullTemp.transform.anchorPoint.setValue(settings.createNull.size);
    nullTemp.transform.scale.setValue(settings.createNull.size);
  }
  writeLn('Ready');
  app.endUndoGroup();
};
