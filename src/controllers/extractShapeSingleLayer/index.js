module.exports = function separateShapesSingleLayer() {
  app.beginUndoGroup('Separate Shapes');
  const thisComp = app.project.activeItem;
  if (thisComp !== null) {
    const activeLayer = thisComp.selectedLayers[0];
    if (activeLayer !== null) {
      const selectedShapes = activeLayer.selectedProperties;
      if (selectedShapes === '') {
        for (let i = 1; i <= activeLayer.property(2).numProperties; i += 1) {
          selectedShapes[i - 1] = activeLayer.property(2).property(i);
        }
      }

      let duplicateLayer = activeLayer.duplicate();
      duplicateLayer.selected = true;

      let i = 1; // set counter for cycle
      let flag = false; // set flag for checking
      while (i <= duplicateLayer.property(2).numProperties) { // check every group in shape
        for (let j = 0; j < selectedShapes.length; j += 1) { // check every selected group
          if (duplicateLayer.property(2).property(i).name === selectedShapes[j].name) { // if group of shape = selected group
            flag = true; // set flag true
          }
        }

        if (flag === false) {
          duplicateLayer.property(2).property(i).remove(); // remove all items expect selected
          i -= 1;
        }

        flag = false;
        i += 1;

        const maxNum = duplicateLayer.property(2).numProperties;
        writeLn(`Working with - ${i}/${maxNum}`);
      }

      // clear source >
      duplicateLayer = activeLayer.duplicate();
      duplicateLayer.selected = true;
      duplicateLayer.name = activeLayer.name;

      i = 1; // set counter for cycle
      flag = false; // set flag for checking
      while (i <= duplicateLayer.property(2).numProperties) { // check every group in shape
        for (let j = 0; j < selectedShapes.length; j += 1) { // check every selected group
          if (duplicateLayer.property(2).property(i).name === selectedShapes[j].name) { // if group of shape = selected group
            flag = true; // set flag true
          }
        }

        if (flag === true) {
          duplicateLayer.property(2).property(i).remove(); // remove all items expect selected
          i -= 1;
        }

        flag = false;
        i += 1;

        const maxNum = duplicateLayer.property(2).numProperties;
        writeLn(`Working with - ${i}/${maxNum}`);
      }

      activeLayer.remove();
      // clear source <

    } else {
      alert('Select some Group of Shapes');
    }
  } else {
    alert('Select some Group of Shapes');
  }
  writeLn('Ready');
  app.endUndoGroup();
};
