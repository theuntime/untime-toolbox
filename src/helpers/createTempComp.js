module.exports = function createTempComp() {
  const tempComp = app.project.items.addComp('Temp', 100, 100, 1, 1, 24);
  tempComp.openInViewer();
  return tempComp;
};
