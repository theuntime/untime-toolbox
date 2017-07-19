module.exports = function labelFolders() {
  app.beginUndoGroup('Set same Label Colors');
  for (let i = 1; i <= app.project.items.length; i += 1){
    if (app.project.item(i).parentFolder.name != 'Root') {
      app.project.item(i).label = app.project.item(i).parentFolder.label;
    }
  }
  app.endUndoGroup();
};
