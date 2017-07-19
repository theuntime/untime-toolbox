const settings = require('../../config/settings');

module.exports = function createFolders() {
  app.beginUndoGroup('Create Folders');
  for (let i = 0; i < settings.folders.length; i += 1) {
    const folder = app.project.items.addFolder(settings.folders[i].name);
    folder.label = settings.folders[i].color;
  }
  writeLn('Ready');
  app.endUndoGroup();
};
