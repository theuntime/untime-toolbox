module.exports = function clearShape() {
  app.beginUndoGroup('Clear Shape');
  const thisComp = app.project.activeItem;

  if (thisComp !== null) {
    const selectedLayers = thisComp.selectedLayers;
    if (selectedLayers != null) {
      for (let l = 0; l < selectedLayers.length; l += 1) { // start check selected layers
        const layer = thisComp.selectedLayers[l]; // set selected layer to  layer
        if (layer.matchName === 'ADBE Vector Layer') { // check if shape true
          for (let i = 1; i <= layer.property(2).numProperties; i += 1) { // then check contents items
            for (let j = 1; j <= layer.property(2).property(i).property(2).numProperties; j += 1) { // check every property
              if (layer.property(2).property(i).property(2).property(j).matchName === 'ADBE Vector Filter - Merge') { // if property = merge
                if (layer.property(2).property(i).property(2).property(j).mode.value === 4) {
                  layer.property(2).property(i).property(2).property(j)
                    .remove(); // delete merge
                  layer.property(2).property(i).property(2).property(j - 1)
                    .remove(); // delete group
                  const currentNum = l + i + j;
                  const maxNum = selectedLayers.length + layer.property(2).numProperties +
                    layer.property(2).property(i).property(2).numProperties;
                  writeLn(`Property - ${currentNum}/${maxNum}`);
                }
              }
            }
          }
        }
      }

      if (thisComp && thisComp instanceof CompItem) {
        for (let i = 0; i < thisComp.selectedLayers.length; i += 1) {
          const layer = thisComp.selectedLayers[i];
          const split = layer.name.split(' ');
          if (split[split.length - 1] === 'Outlines') {
            layer.name = '';
            for (let j = 0; j < split.length - 1; j += 1) {
              layer.name = `${layer.name}${split[j]} `;
            }
          }
        }
      }

      writeLn('Ready');
    } else {
      alert('Select some Shapes');
    }
  } else {
    alert('Select some Shapes');
  }
  app.endUndoGroup();
};
