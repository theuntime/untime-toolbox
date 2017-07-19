module.exports = function separateShapesDifferentLayers(){
	app.beginUndoGroup("Separate shapes");
		var comp = app.project.activeItem;
		var layersAry = comp.selectedLayers;
		for (var i = 0; i < layersAry.length; i++){
			writeLn("Layer - " + i + "/" + layersAry.length);
			separateShapes_difLayers_full(layersAry[i]);
		}
		writeLn("Ready");
	app.endUndoGroup();

	function separateShapes_difLayers_full(layer){
		var oldLayer = layer;
		var selectedPropertiesNames = [];
		if (oldLayer.selectedProperties[i] != ""){
			for (var i = 0; i < oldLayer.selectedProperties.length; i++){
				selectedPropertiesNames[selectedPropertiesNames.length] = oldLayer.selectedProperties[i].name;
			}
		}
		var k = 0;

		for (var i = 1; i <= oldLayer["Contents"].numProperties; i++){
			var flag = false;
			if ((selectedPropertiesNames.length != 0) && (k >= selectedPropertiesNames.length)){break} // break if have worked with all properties
			writeLn("Property - " + i + "/" + oldLayer["Contents"].numProperties);
			if (selectedPropertiesNames.length != 0){
				for (var l = 0; l < selectedPropertiesNames.length; l++){
					if (oldLayer["Contents"].property(i).name == selectedPropertiesNames[l]){
						var newLayer = layer.duplicate();
						var disconnectedPropertyName = oldLayer["Contents"].property(i).name;
						newLayer.name = disconnectedPropertyName;
						oldLayer["Contents"].property(i).remove();
						k++;
						flag = true;

						for (var j = 1; j <= newLayer["Contents"].numProperties; j++){
							writeLn("Clear property - " + j + "/" + newLayer["Contents"].numProperties);
							if(newLayer["Contents"].property(j).name != disconnectedPropertyName){
								newLayer["Contents"].property(j).remove();
								j--;
							};
						};
					}
				}
				if (flag == true){i--};
			}else{
				var newLayer = layer.duplicate();
				var disconnectedPropertyName = oldLayer["Contents"].property(i).name;
				newLayer.name = disconnectedPropertyName;
				oldLayer["Contents"].property(i).remove();
				i--;

				for (var j = 1; j <= newLayer["Contents"].numProperties; j++){
					writeLn("Clear roperty - " + j + "/" + newLayer["Contents"].numProperties);
					if(newLayer["Contents"].property(j).name != disconnectedPropertyName){
						newLayer["Contents"].property(j).remove();
						j--;
					};
				};
			}
		}
		if (selectedPropertiesNames.length == 0){oldLayer.remove()}
	}
}
