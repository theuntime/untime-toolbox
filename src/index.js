// Prototypes >>>
	// image resize prototype >
		Image.prototype.onDraw = function(){ // written by Marc Autret
		// "this" is the container; "this.image" is the graphic if( !this.image ) return;
		var WH = this.size,
		wh = this.image.size,
		k = Math.min(WH[0]/wh[0], WH[1]/wh[1]), xy;
		// Resize proportionally:
		wh = [k*wh[0],k*wh[1]];
		// Center:
		xy = [(WH[0]-wh[0])/2, (WH[1]-wh[1])/2];
		this.graphics.drawImage(this.image, xy[0], xy[1], wh[0], wh[1]);
		WH=wh=xy=null;
		}
	// image resize prototype <
// Prototypes <<<
// files >>>
	var buttonIcons = [
	["createNull", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x00{IDAT8\u008D\u00D5\u0093M\x12\u0080 \b\u0085\u009FN\x1D\u008C\u0083\u0095Z\x07\u00E3`-j\u0083F\u00F63jm\u00FAV\x0F\u00F11\u0082\u0083a\u00E6\x15\x02\x11\u0099\u00A8\u0099\u00D9\x03p\x12\x06\"\u00F2*\u0097<F\x07-t:hy\u00C1\u00F5A\x01\u00D1ck\u008D9\u00EF\x0BH\u00AF\u00B1\u00E7\"\u00B4\u00C7b\x1F\u0094\u00BBu\u009CI\u009EOf\x10D\u0087\u00A7\u008B\x19G\u00CF\u00BF\u00BF1\u00DF\u0085^\u00E9\x11\u00C0 z\x060\u00A9\u00DCrW\u00A0\u009A\u00D7\u00CB\u00B4\x01\u00CF\u00B3F\u00F1\x0E!\u00AE\u00D1\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["clearShape", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x00\u00F4IDAT8\u008D\u009D\u00D1;NBQ\x10\x06\u00E0\u00CF\u008B\u0095\u009D\u0089\x15\u00D1\u00D2\x06\u00A9(\u00B0$CL\u00DC\x00\u008D=\r\u0085[p\x13T\u00AC\u00C0=\x10\u00E3,\x00z\x0BK-M\u00EC-\u0088\u0085G\x03\u00C8\u00BDA'\u0099\u009C\u00C9\u00FC\u008F\u0099\u009C\u00A1!2s\u0098\u0099\u00C3&\u00CEa\x13\u0088\u00BB\u00F2>\u00D6\x11\u00AA\u0086\u00E9\x03\f0(\u00F5\u00DF\f\u00D6\u00A6o\u00D7\x1Bq\u00B0c\u00F2\t\u00AEp\u00BF\x05\u00DD\u00E0!\"\u00DE6\f2\u00F3\x12\u00B78/y\u00DC\u00B0\x15\u00BC\u00E3\u00B9\u00E4\u00B4\u00C2\x02\x1F\u00E8\u00EF!V8\u00FD\u00A2YT\x11\u00B1\u00C2\x18\u00B3=\u00C4\u00DF1\u00C38\"V\x15\x14\u0093\t\u00A6{\u0088\u00A7\u0098\x14\u00CD\u00E6'f&\u00BC\u00E0\u00B4F\u00FC\u008A\u00B3\u0088\u00F8il\u009F\u00F1\b\u00ED\u0086\u00E9\u00ED\u00C2\u00A95\u00E8\u00EC\u00E8m\u00F3;M\x06\x17k\u00F5\x12\u00D7%\u00975\u009C_\x06]<a\u0084~D\u00CC#b\u00EE\u00EBl\u00A3\u0082uk\u00F7\u00CB\u00CC^f\u00B6\x1A\u00F0Vf\u00F6j\r\u00FE\x13\u009F\u00D4\u00F1?\u00D6\u009EX:\u009D\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["separateShapesSingleLayer", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x00\u00F7IDAT8\u008D\u00B5\u00D3?.\u0084Q\x14\x05\u00F0\u009F\u0089VD\u0086JC\u00A1\u00D3\x1A\u00E5\u00E4\u008A-L\u00A1Q\u00C8\u00B4\n\x1B\u00B0\x05\u0085jZ\u008DFb\x03\u00E2.`\u00A2\u0097(,\u0080D\u00B4\x12C\u00E1\u0091\u0099\u00CF|\u009F\u0099\u00C2MN\u00DE}\u00EF\u009Ds\u00EE\u00FBKCd\u00E6^f\u00EE5q\x16\u009B&qZ\u00DA\u00DB:B\u00AB\u00A1z\x17]tK>\u009F\u00C1X\u00F5j>\x11\x0BS*\u00AFb\x1F\u0097\u0095\u00A9\x03\u00DCD\u00C4\u00F3\u0084Af\u00EE\u00E2\x18[\x05+\r\u00AB\u0082\x17<\x14\u009C\u00B70\u00C4\x1B:3\u0088\x15N\u00A7h\u0086\u00AD\u0088\x18\u00A1\u008F\u00C1\f\u00E2\u00EF\x18\u00A0\x1F\x11\u00A3\u009F3\u00C8\u00CC\x05\u009C`\u00F3\x0F\u00F1#\u00CE\"\u00E2c\u008E\u0082\u00FF\x18\x13\u00D7X\u00B6\u00F1\u0084\u00E5\x1A\u00FE+\u00D6\u00C6\u0097_}H\u00EBh\u00FBz\u00E2\u00D3\u00D0.\x1Cu\x06\u00DB\u0095\u00FE]A-\u00A7\u00CE\u00E0\x1E=\u00EC\x14\u00F4\u00CA\u00D8/\u0083\u00EAo\\\u00C2\x11.\"\u00E2}l\u00FC*3\u00AFq\u0088\u008Dq\u00C1'tA;8\x19%\\y\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["separateShapesDifferentLayers", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x01BIDAT8\u008D\u0095\u00D21kUA\x14\x04\u00E0/\u008F'\u0098`\u00A1\u00AD`\u00A1h\u00A1<\u00A2\u0085\u00AD\u0081\u00C1B\x14T,\u00AC,\x04\u00B1\u00F0Gh\n\x1B\x7F\u0082\u0090F!\u00D8\u0089\x16V\u00B1\u00F0\x14B\n\u00BB\u0088\u0085(\u00F6A\x1BA\x12\u00C1\u00CA\u00C2}z}\u00B9\u00EF\u008A\x03\u00CB\u00DD=3s\u00E6\u00ECr\x19@U-W\u00D5\u00F2\u0090f<D\u00E2^\u00FB^\u009F'X\x18H\u009F`\u00AB\x1DO'y\u00D7\u00A7\x1B\r\u00A4\u00DFj\u00FC\bw\u00E7\u0089\u0086\x1A\u00AC\u00E1G[\u008F\u00DBT{&^\u00A8\u00AA%\x1C\u00C7\t\x1C\u00C1Z\u0092\u00DDf\u00B8\u008F\u00B7I\u009E6\u00F3#l\u00E3c[\u00EF\u00C78\u0087\u00E7XlM/U\u00D5\u00D5$\u00DF\u00B1\u009Ad\x1Av\x1B7;\u00E1;\u00B82J\u00B2\u0081\u00CB\u00D8m\u00C4\nn@\u00C7\f\u0087[:|\u00C3\u00C5$\u00AF~\u00DF\u00A9\u00AAVp\x1E\x0F\u0093l\u00EBAU\u008Dq\x01_\u0092\u00BC\u00E9\u00D3\u00FC7\u00F6\u00BCjU\u00ED\u00C3\x04\u008BI6[m\x15\x07\u00F1\x01\u00CF\u0092|\u009E\u00EA\u00C73\u00E6\u00B3x\u008D\u00FDx\u0082\u00CDF\u009D\u00C1\u00B5\u00B6\x7F\u00D1\u00F5\u00CC\u00FE\x07\u0093f\u009E\u00C5Ng\x7F\u00EA_\r\u00E0+6:\u00F5u|\u009A\u00D1\u00F468\u008A\x078\u0096d}ZL\u00F2\x12'q\x07\u0087z&\u00FC\u0085\u00AA:0\u0097\u00FC\u00A3\u00F9\u00EB\u00FC\x13\u00C5DY\u0090\u0099\u0080\x03\u00B5\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["addFolder", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x00\u00D1IDAT8\u008D\u00AD\u00921\x0E\u00820\x14\u0086\u00BF\u008A#&\u008C0\u00C1\x110\u00F1\x02\u009C\u00C2\u0098\x18\u00F5h\u00C6\u00B8x\u008A^\u0080D\u008E\u0080.0\u009A\u00C8(\u00A9\u0083Z$\u00FAp\u00A8\u00FF\u00D2\u00E6\u00F5\u00FD\u00DF\u00FB\u00DBTi\u00AD\u00E7\u00C0\x14Y\u00C7,\u00CB\x0E\u00D2\u00E1\x18\u00D8?WI7@\x04(\u00AD\u00B5\x190\u00FFR>r0\x03\u00CC\u00C4\u00E8I\u00B5#\u00AEw\x00\u009C\u00C2\x15e\u00B4\u00FA\u00DA7pw\u00832\u00AD\u00DDK\u00EA\x01\u0094i\u0089\u00EB=\x00AS\u00D8z\u00D0\x14$\x15\u00CF4K\u008C\u00F2\x04\x00-I\u00B5\u00FD\u0098\x12\\\x0B\u0082\u00EB\x03x\x0E\x17\x18:\u0080\u00EB#\u00F6\x13\x18<\u00CAhcc\u00BF\u00A6^&)\x17?\u00B5=2@y\u0094\u00D1\x1A\u0080\u00A4\u00A2\x03\u00F8\u00A9\u00AD\x0F&\u00E8K\u00BD=\u0096\u0092\u00BB\x1C\x7F\"# w\u00F0\u00BBx\u00FF\u00A4;\u00E74?\u00EC\u00BF\x1D\u00F36\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["labelFolder", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x00pIDAT8\u008Dc\u00DC\u00BF\x7F\x7F8\x03\x03\u0083!\x03np\u00DE\u00D1\u00D1q%.I\x16\x06\x06\u0086%P\x1A\x17\u00F8\u00C3\u00C0\u00C0\u0080\u00D3\x00\u00C6\u00FD\u00FB\u00F7\u00FF\u00C7\u00A3\u0099\x108\u00C3D\u0081f\x06\x06\x06\x06\x13J\r``|7\u00CB\u0098\x12/0\u00B0\b~>K\u0091\x0B(\u00F6\u00C2\u00C0\x1B\u00C0\u00B2\u00F4\u009B\x03E\x0602\x14n\u00A6(\x16(\x0F\x03n\x16\u00C6\u009B\u00E4j\u00A6D/\u00F5\x00\x00R\x13\x16\x03\u00DB\u00A7Ap\x00\x00\x00\x00IEND\u00AEB`\u0082"))],
	["onionSkin", (("\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x00\x01\x00\x00\x00\x01\x018\"\u00F4@\x00\x00\x00$zTXtCreator\x00\x00\b\u0099sL\u00C9OJUpL+I-RpMKKM.)\x06\x00Az\x06\u00CEjz\x15\u00C5\x00\x00\x01hIDAT8\u008D\u00D5\u00D2\u00B1k\u0093a\x10\x06\u00F0\u00DF\u009B&\r\x1D\u00AC\u008AR\u00B0\u00B5\u00ADu\x10\u00B4\u00B8\u00F8\x07Ttp\u00D1\u00C9E7\u00C1Ap.H\x06G\u0087 |\u00B3\u009B\u0088\u00FE\r..\u00C1\u00A98\u00B4N\u00A5\u00E0P\x1Ab\x154\u00A8\u0095VICr\x0E~\t%~uq\u00F2\u00E0\x1D\u00DE{\u00EE\u00B9\u00BB\u00E7\u00E1\u00F8\u00C7H\u0087\x01\u0091\u00A9`1\u00FF\u00AE\u00A7e\u00DD\u00A2\u00BA\u00D2\x1F\u00C4\u00E7Rdn\u00A3\u0085\u00B7\u00F9kE\u00E6\u00D6_7\u0088\u00CC\x11\\\u00C3\r\u00DC\x19\u00DD.\u00A4\u00A8\u00ED\u00D5\u009F=\u00FE\u00F1\u00A0\u0081\u0086zz?l\x10\u0099\t\u00DC\u00C3\t\u00DC\u00C5L\u00D1\u00B4fo~\u00FB\u00CC\u0097\u00AD\u00A7\u00E8\u00E2\u0085z\u00DA\x1AH\u00B8*,\ns\u0098.\"\u00C3\u00ECXk\x1As\u0098\u00C5MB)2\u0093\u00C2\x12\u00C6\u00F3\u00BAB\u00B3\u00E0gL\f\u00B0q\\Ts\u00AA\u0084\u00B3#z\u009B\u00875x\u00DD\u00BD|\x10KX(a\x12\x1F\u0086\u00E9\u00B0\u008A\u009DQ\u00F2v\x7Ff\u00E7\u00FE\u00EE\u0093\u00D5\x03\u00A9\u00EF\u00A8\u0094\x11\u0092ua\x01G\u00D1\x11^J\u00CEc\u00EA]\u00EF\u00DC~\u00A3{\u00E5\u00DB\u00C3\u00BDG\x1B\u00ED\u00FE\u00C9\u0081\u0084\u00C0\x1B\u00F4Sd.`\nU\u00E1RnR\x05m\u00C9\u00AB\u00F49vq\x1D\u00A7\u00FD\u00BE\u009B6\u00D6\u00F0\x11\u009F\u00CA\u00D8\u00C4\u00B1\\\u00D5\nV\u00F2)\u00FBX\u00D3\u00C3\u00982\u00AA\u00B9\u00EE\u00FE\x10\u00EF\u00D9\x1C\u00DCA\x15\u00F38\u009E\u0083_\u00D1L\u00CB:\u00A0\x16\u0085\u00B8z\u00EA\x14\u00BA\u00FD\x7F\u00C5/\u00A0\x1FrD\u0098m)|\x00\x00\x00\x00IEND\u00AEB`\u0082"))]
	];

	var buttonIcons = (function myTypeIcons(){

		var obg = {};
		try{
			for (var i = buttonIcons.length-1; i>=0;i--){
				obg[buttonIcons[i][0]] = ScriptUI.newImage(buttonIcons[i][1]);
			}
		}catch(err){
			var ScriptFolder = new Folder(Folder.userData.fsName + "/"+ScriptName+"/");
				ScriptFolder.create();
			var f;
			for (var i = buttonIcons.length-1; i>=0;i--){
				f = new File(ScriptFolder.fsName + "/" + buttonIcons[i][0] + ".png/");
				f.encoding = 'BINARY';
				f.open('w');
				f.write(buttonIcons[i][1]);
				f.close ();
				obg[buttonIcons[i][0]] = ScriptUI.newImage(f);
				f.remove();
			}
			f = 0;
		}
		buttonIcons = 0;
		return obg;
	}());
// files <<<
// classes >>>

// classes <<<

// settings >
	var settings = {};
	// general settings >
		settings.general = {
			orientation: "row",
			buttonsSize: [20, 20]
		}
		if (settings.general.orientation == "column"){
			settings.general.separatorSize = [0, 0, settings.general.buttonsSize[0]*3, 0.5];
		}else{
			settings.general.separatorSize = [0, 0, 1, settings.general.buttonsSize[0]];
		}
	// general settings <

	// onion skin settings >
		settings.onionSkin = {
			forwardColor: [0/255, 150/255, 255/255, 1],
			backwardColor: [255/255, 0/255, 0/255, 1],
			forwardFrames: 1,
			backwardFrames: 2
		}
	// onion skin settings <

	// create null >
		settings.createNull = {
			size: [50, 50]
		}
	// create null <

	// create folders >
		settings.folders = [
			{name: "00 Render", color: 0},
			{name: "01 Comps", color: 13},
			{name: "02 Pre-comps", color: 10},
			{name: "03 Elements", color: 3},
			{name: "04 Sound", color: 1},
		];
	// create folders <
	// open window with settings >
		function openSettings(){
			var settingsWindow = new Window("dialog", "Settings");
				settingsWindow.minimumSize = settingsWindow.maximumSize = [500, 300];
				settingsWindow.orientation = "column";

				// settingsWindow.center();
				// settingsWindow.show();
		}
	// open window with settings <
// settings <

// global functions >>>
	// create temp comp >
		function createTempComp(){
			var tempComp = app.project.items.addComp("Temp", 100, 100, 1, 1, 24);
			tempComp.openInViewer();
			return tempComp;
		}
	// create temp comp <
	// change BG color >
		function changeBGcolor(button, color){
		  button.graphics.backgroundColor = button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, color);
		}
	// change BG color <
	// change FG color >
		function changeFGcolor(button, color){
		  button.graphics.foregroundColor = button.graphics.newPen(button.graphics.PenType.SOLID_COLOR, color, 1);
		}
	// change FG color <
// global functions <<<

// script body >
{
function myScript(thisObj) {
          function myScript_buildUI(thisObj) {
                    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Untime Toolbox", undefined);

//add UI >
			// set groups >
				mainGrp = myPanel.add("group", undefined);
					mainGrp.orientation = settings.general.orientation;
					mainGrp.alignment = ["left","top"];
					mainGrp.alignChildren = ["left","top"];

				groupOne = mainGrp.add("group", undefined);
					groupOne.orientation = "row";

				var separator01 = mainGrp.add("group", settings.general.separatorSize);
					changeBGcolor(separator01, [0, 0, 0, .2]);

				groupTwo = mainGrp.add("group", undefined);
					groupTwo.orientation = "row";

				var separator02 = mainGrp.add("group", settings.general.separatorSize);
					changeBGcolor(separator02, [0, 0, 0, .2]);

				groupThree = mainGrp.add("group", undefined);
					groupThree.orientation = "row";
			// set groups  <
			// set buttons >
				createNullButton = groupOne.add("iconbutton", [0, 0, 24, 24], buttonIcons["createNull"], {style: "toolbutton", toggle: false});
					createNullButton.size = settings.general.buttonsSize;
					createNullButton.onClick = function(){createNull()};
					createNullButton.helpTip = "Create a Null";

				onionSkinButton = groupOne.add("iconbutton", [0, 0, 24, 24], buttonIcons["onionSkin"], {style: "toolbutton", toggle: false});
					onionSkinButton.size = settings.general.buttonsSize;
					onionSkinButton.onClick = function(){launchOnionSkin()};
					onionSkinButton.helpTip = "Enable/Disable Onion Skin";

				createFoldersButton = groupOne.add("iconbutton", [0, 0, 24, 24], buttonIcons["addFolder"], {style: "toolbutton", toggle: false});
					createFoldersButton.size = settings.general.buttonsSize;
					createFoldersButton.onClick = function(){createFolders()};
					createFoldersButton.helpTip = "Create Folders";

				labelFoldersButton = groupOne.add("iconbutton", [0, 0, 24, 24], buttonIcons["labelFolder"], {style: "toolbutton", toggle: false});
					labelFoldersButton.size = settings.general.buttonsSize;
					labelFoldersButton.onClick = function(){labelFolders()};
					labelFoldersButton.helpTip = "Change label of Folders";

				clearShapeButton = groupTwo.add("iconbutton", [0, 0, 24, 24], buttonIcons["clearShape"], {style: "toolbutton", toggle: false});
					clearShapeButton.size = settings.general.buttonsSize;
					clearShapeButton.onClick = function(){clearShape()};
					clearShapeButton.helpTip = "Clear Shape";

				separateShapesSingleLayerButton = groupTwo.add("iconbutton", [0, 0, 24, 24], buttonIcons["separateShapesSingleLayer"], {style: "toolbutton", toggle: false});
					separateShapesSingleLayerButton.size = settings.general.buttonsSize;
					separateShapesSingleLayerButton.onClick = function(){separateShapesSingleLayer()};
					separateShapesSingleLayerButton.helpTip = "Separate shape into single layer";

				separateShapesDifferentLayersButton = groupTwo.add("iconbutton", [0, 0, 24, 24], buttonIcons["separateShapesDifferentLayers"], {style: "toolbutton", toggle: false});
					separateShapesDifferentLayersButton.size = settings.general.buttonsSize;
					separateShapesDifferentLayersButton.onClick = function(){separateShapesDifferentLayers()};
					separateShapesDifferentLayersButton.helpTip = "Separate shape into different layers";

				settingsButton = groupThree.add("button", undefined, "S");
					settingsButton.size = settings.general.buttonsSize;
					settingsButton.onClick = function(){openSettings()};
					settingsButton.helpTip = "Settings";
					settingsButton.enabled = false;
			// set buttons <
// add UI <

// onionskin >
function launchOnionSkin(){
	var thisComp = app.project.activeItem;
	if (thisComp instanceof CompItem){
		var layers = thisComp.selectedLayers;
		var onionSkinEnabled = false;

		if (thisComp instanceof CompItem){
			for (var i = 1; i <= thisComp.numLayers; i++){
				var k = thisComp.layer(i).name.split(" - ");
				if (k[0] == "OnionSkin"){
					onionSkinEnabled = true;
				}
			}
		}

		if (thisComp instanceof CompItem){
			app.beginUndoGroup("Onion Skin");
			var tempComp = createTempComp();
			if (onionSkinEnabled == true){
				for (var i = thisComp.numLayers; i >= 1; i--){
					clearOnionSkin(thisComp.layer(i));
				}
			}else{
				if (layers.length > 0){
					createOnionSkinBackward(thisComp);
					createOnionSkinForward(thisComp);
				}else{
					createOnionSkinBackward(thisComp);
					createOnionSkinForward(thisComp);
				}
				thisComp.hideShyLayers = true;
			}
			tempComp.remove();
			app.endUndoGroup();
		}
		writeLn("Ready");
	}else{
		alert("Please choose any compostion");
	}
}

	// create onion skin forward >
	function createOnionSkinForward(thisComp){
		var tempSolid = thisComp.layers.addSolid([1, 1, 1], "OnionSkin - forward", thisComp.width, thisComp.height, thisComp.pixelAspect, thisComp.duration);
		var echo = tempSolid.Effects.addProperty("ADBE Echo");
			echo.property("ADBE Echo-0001").expression = "framesToTime(1)";
			echo.property("ADBE Echo-0002").setValue(settings.onionSkin.forwardFrames);
			echo.property("ADBE Echo-0004").setValue(0.75);
			echo.property("ADBE Echo-0005").setValue(7);
		var fill = tempSolid.Effects.addProperty("ADBE Fill");
			fill.property("ADBE Fill-0002").setValue(settings.onionSkin.forwardColor);
		tempSolid.opacity.setValue(35);
		tempSolid.adjustmentLayer = true;
		tempSolid.guideLayer = true;
		tempSolid.shy = true;
		tempSolid.moveToBeginning();
		tempSolid.locked = true;
	}
	// create onion skin forward <
	// create onion skin backward >
	function createOnionSkinBackward(thisComp){
		var tempSolid = thisComp.layers.addSolid([1, 1, 1], "OnionSkin - backward", thisComp.width, thisComp.height, thisComp.pixelAspect, thisComp.duration);
		var echo = tempSolid.Effects.addProperty("ADBE Echo");
			echo.property("ADBE Echo-0001").expression = "-framesToTime(1)";
			echo.property("ADBE Echo-0002").setValue(settings.onionSkin.backwardFrames);
			echo.property("ADBE Echo-0004").setValue(0.75);
			echo.property("ADBE Echo-0005").setValue(7);
		var fill = tempSolid.Effects.addProperty("ADBE Fill");
			fill.property("ADBE Fill-0002").setValue(settings.onionSkin.backwardColor);
		tempSolid.opacity.setValue(35);
		tempSolid.adjustmentLayer = true;
		tempSolid.guideLayer = true;
		tempSolid.shy = true;
		tempSolid.moveToBeginning();
		tempSolid.locked = true;
	}
	// create onion skin backward <
	// clear onion skin >
	function clearOnionSkin(l){
		var k = l.name.split(" - ");
		if (k[0] == "OnionSkin"){
			l.locked = false;
			l.remove();
		}
	}
	// clear onion skin <
// onionskin <

// create a null >
function createNull(){
	app.beginUndoGroup("Create Null");
		var thisComp = app.project.activeItem;

		if (thisComp instanceof CompItem){
			var nullTemp = thisComp.layers.addNull(thisComp.duration);
			nullTemp.transform.anchorPoint.setValue(settings.createNull.size);
			nullTemp.transform.scale.setValue(settings.createNull.size);
		}
		writeLn("Ready");
	app.endUndoGroup();
}
// create a null <

// create folders >
function createFolders(){
	app.beginUndoGroup("Create Folders");
		for (var i = 0; i < settings.folders.length; i++){
			var folder = app.project.items.addFolder(settings.folders[i].name);
			folder.label = settings.folders[i].color;
		}
		writeLn("Ready");
	app.endUndoGroup();
}
// create folders <

//SET SAME LABEL COLORS >
function labelFolders(){
	app.beginUndoGroup("Set same Label Colors");
		for (i = 1; i <= app.project.items.length; i++){
			if (app.project.item(i).parentFolder.name != "Root"){
				app.project.item(i).label = app.project.item(i).parentFolder.label;
			}
		}
	app.endUndoGroup();
}
//SET SAME LABEL COLORS <

// clear shape >
function clearShape(){
	app.beginUndoGroup("Clear Shape");
		thisComp = app.project.activeItem;
		if (thisComp != null){
			selectedLayers = thisComp.selectedLayers;
			if (selectedLayers != null){

				for (l = 0; l < selectedLayers.length; l++){ // start check selected layers
					layer = thisComp.selectedLayers[l]; // set selected layer to  layer
					if (layer.matchName == "ADBE Vector Layer"){ // check if shape true
						for (i = 1; i <= layer.property(2).numProperties; i++){ // then check contents items
							for (j = 1; j <= layer.property(2).property(i).property(2).numProperties; j++){ // check every property
								if (layer.property(2).property(i).property(2).property(j).matchName == "ADBE Vector Filter - Merge"){ // if property = merge
									if (layer.property(2).property(i).property(2).property(j).mode.value == 4){
										layer.property(2).property(i).property(2).property(j).remove(); // delete merge
										layer.property(2).property(i).property(2).property(j-1).remove(); // delete group
										var currentNum = l+i+j;
										var maxNum = selectedLayers.length+layer.property(2).numProperties+layer.property(2).property(i).property(2).numProperties;
										writeLn("Property - " + currentNum + "/" + maxNum);
									}
								}
							}
						}
					}
				}

			thisComp = app.project.activeItem;
			if (thisComp && thisComp instanceof CompItem){
				for (i=0; i<thisComp.selectedLayers.length; i++){
					var _layer = thisComp.selectedLayers[i];
					var _split = _layer.name.split(" ");
					if (_split[_split.length-1] == "Outlines"){
						_layer.name = "";
						for (j=0; j<_split.length-1; j++){
							_layer.name = _layer.name + _split[j] + " ";
						}
					}
				}
			}

			writeLn("Ready");

			}else{alert("Select some Shapes")};
		}else{alert("Select some Shapes")};
	app.endUndoGroup();
}
// clear shape <

//EXTRACT SHAPES SINGLE LAYER >
function separateShapesSingleLayer(){
	app.beginUndoGroup("Separate Shapes");
		var thisComp = app.project.activeItem;
		if (thisComp != null){
		var activeLayer = thisComp.selectedLayers[0];
		if (activeLayer != null){
			var selectedShapes = activeLayer.selectedProperties;
			if (selectedShapes == ""){
				for (i = 1; i <= activeLayer.property(2).numProperties; i++){
					selectedShapes[i-1] = activeLayer.property(2).property(i);
				}
			};

			var duplicateLayer = activeLayer.duplicate();
			duplicateLayer.selected = true;

			i = 1; // set counter for cycle
			var flag = false; // set flag for checking
			while (i <= duplicateLayer.property(2).numProperties){ // check every group in shape
				for (j = 0; j < selectedShapes.length; j++){ // check every selected group
					if (duplicateLayer.property(2).property(i).name == selectedShapes[j].name){ // if group of shape = selected group
						flag = true; // set flag true
					}
				}
				if (flag == false){
					duplicateLayer.property(2).property(i).remove(); // remove all items expect selected
					i--;
				}
				flag = false;
				i++;

				var maxNum = duplicateLayer.property(2).numProperties;
				writeLn("Working with - " + i + "/" + maxNum);
			}

			//clear source >
			duplicateLayer = activeLayer.duplicate();
			duplicateLayer.selected = true;
			duplicateLayer.name = activeLayer.name;

			i = 1; // set counter for cycle
			var flag = false; // set flag for checking
			while (i <= duplicateLayer.property(2).numProperties){ // check every group in shape
				for (j = 0; j < selectedShapes.length; j++){ // check every selected group
					if (duplicateLayer.property(2).property(i).name == selectedShapes[j].name){ // if group of shape = selected group
						flag = true; // set flag true
					}
				}
				if (flag == true){
					duplicateLayer.property(2).property(i).remove(); // remove all items expect selected
					i--;
				}
				flag = false;
				i++;

				var maxNum = duplicateLayer.property(2).numProperties;
				writeLn("Working with - " + i + "/" + maxNum);
			}

			activeLayer.remove();
			//clear source <

			}else{alert("Select some Group of Shapes")};
		}else{alert("Select some Group of Shapes")};
		writeLn("Ready");
	app.endUndoGroup();
}
//EXTRACT SHAPES SINGLE LAYER <

//EXTRACT SHAPES DIFFERENT LAYERS >
	function separateShapesDifferentLayers(){
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
//EXTRACT SHAPES DIFFERENT LAYERS <

//Setup panel sizing and make panel resizable
                    myPanel.layout.layout(true);
                    myPanel.minimumSize = mainGrp.size;
                    myPanel.layout.resize();
                    myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}

                    return myPanel;
          }

          var myScriptPal = myScript_buildUI(thisObj);

          if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
                    myScriptPal.center();
                    myScriptPal.show();
                    }
          }

          myScript(this);
}
// script body <
