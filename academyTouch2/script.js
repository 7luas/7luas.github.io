
 
if (1) {																	
	

	
	
	
	
	
		
		
		
		
	
	
		
	
	
	
	
	
	
 
	
	
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
	
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
		
		
		
		

 }
if (1) { 																	



var limitNumberOfPassengers=0; 


var timeCounter = 0;	

var randomizePassengers = true;


var newline = "\r\n";
var bulletPoint = "\u{2022}";
var practicallyZero = 0.1;	


var debug = false;		
var debugText = []; 	
var moreDebugText = "";


var ww; 	var wh; 														
var isPortrait; 															
var isMobile=false;	var mobileWidth=800; 									
var cw;		var ch;															
var canvasRes = 1;															


var canvas; 		var ctx;												
var canvasf; 		var ctxf;												
var canvasd;		var ctxd;												
var canvasp;		var ctxp;												
var minWidth = 450;
var minHeight = 710;



var screenPropCurrent; var screenSizeAndPropSupported = true;
var canvasPropPortrait= 0.64; var canvasPropLandscape=1.52;


var usingFakePixelsCanvas = false;											
var widthInFakePixels=0;	var heightInFakePixels=0;						
var fakePixelW=0;			var fakePixelH=0;								
var fakePixelGrid = new Array();
var totalPixels = 23000; 													




window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} 

window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} 


var assetCount = 0;				
var arrayOfAssets = [];				
var allAssetsLoaded = false;		






var usingLocalStorage = false;			


var varToStoreLocally;	
var varNumber = 10;
var varArray = ["A","B","C"];
var varArray2 = [[0,0],[1,1]];
var varArray3 = new Array(); 
var varString = "TESTING";
var varBoolean = false;


var mouseX;		var mouseY;				
var mouseXlock;	var mouseYlock;			
var mouseLockedToGrid=false;
var mouseXf;	var mouseYf;			

var pointerDown = false;				
var pointerDragging = false;			
var pointerDownGlobalOneOffWarning = false;				
var pointerUpGlobalOneOffWarning = false;				
var pointerPosWhenDown = [0,0]; var pointerPosWhenUp=[0,0];
var pointerClickedInPlaceGlobalOneOffWarning =false;


var keySpace=false;
var keyShift=false;



var colorPrimary = "red";
var colorSecondary = "blue";
var colorShadow10pct = "rgba(0,0,0,0.1)";
var colorShadow20pct = "rgba(0,0,0,0.2)";
var colorShadow50pct = "rgba(0,0,0,0.5)";
var colorHighlight10pct = "rgba(255,255,255,0.1)";
var colorOrange = "orange";
var colorOrangeStrong = "#FF6D00";
var colorBadStrong = "#D70F0A";
var colorAcademyDarkRed = "#750707";
var colorBadLight = "tomato";
var colorReviewMode = colorOrange; 





var fontFamilyPrimary = "Arial";
var fontBaseSizePrimary;
var fontPrimary;
var fontHint;

var fontUISize;
var fontUI;
var fontBigButtonSize;
var fontBigButton


var easeSpeedNormal = 10; 
var easeSpeed = easeSpeedNormal;
var easeSpeedSlow = easeSpeedNormal*5;
var easeSpeedFast = easeSpeedNormal/4;


var paddingNormal;




var arrayOfComponents=[]; 
var arrayOfSeatedComponents=[]; 


var dragDelta; 					
var topmostComponentOnLocationOfLastPointerDown= null; 



var strokeBaseColor = "black";
var strokeBaseThickness;

}
if (1) {																	



var currentDeckOfPassengerInfo=[];	
var currentDeckOfCards=[]; 			
var currentSeatedDeck=[]; 			

var seatMapGridActivePos=[0,0]; 
var seatMapGridPosOnPointerUpOrDown=[0,0];
var lastObjectWithPassengerClickedOrDragged; 

var cardWidth; var cardHeight;
var cardHeightPropWidth=0.4;
var layoutDeckDropAreaPos=[0,0];

var reviewModeGlobal=false;

var isShowingHelp=false;

var isShowingResetConfirmation=false;

var checkPlacingVar ="";

var reviewFeedbackText="";

var lineDashOffset= 0;
var lineDashSize=5;

var ageAdultMin=21;

var showWarning=""; 
var showWarningDelay= 150;
var showWarningCutoff=20;
var showWarningCounter=showWarningDelay;
var warningSeatList=[]; 

var loneSeats = [];
var loneSeatsMsg = ""; 
											


loadAsset("logo","png");
loadAsset("logoAcademy","png");

loadAsset("iconReset","svg");
loadAsset("iconHelp","svg");

loadAsset("seat","svg");
loadAsset("windowsLeft","svg");
loadAsset("windowsRight","svg");

loadAsset("faceWhite","svg","faceBase");
loadAsset("faceOrange","svg","faceBase");
loadAsset("faceBrown","svg","faceBase");
loadAsset("Bob","svg","people");
loadAsset("Lorraine","svg","people");
loadAsset("Jorge","svg","people");
loadAsset("Jess","svg","people");
loadAsset("Frank","svg","people");
loadAsset("Carina","svg","people");
loadAsset("Scott","svg","people");
loadAsset("Heath","svg","people");
loadAsset("Carla","svg","people");
loadAsset("Charles","svg","people");
loadAsset("Hilda","svg","people");
loadAsset("Howard","svg","people");
loadAsset("Jon","svg","people");
loadAsset("Jane","svg","people");


var avatarWidth; var avatarHeight; 

var totalPassengersOriginallyInCue=0;
var totalPassengersSeated=0;

var statPercent=0;
var targetStatPercentage=0;

var timerOn = false;
var gameTimer = 0;
}

function mainOnLoad(){									

	if(usingLocalStorage){
		readLocalVars();
	}
	initializeGeneralStuff();
	initializeProjectSpecificStuff();
	defineInputFunctions(); 	

}

function myReload(){
	location.reload();
}

function adjustToCanvasSizeAndRes(event){ 									
	

	
	
	ww = window.innerWidth; 
	wh =  window.innerHeight;
	
	screenPropCurrent=ww/wh;
	
	
	
	
	canvas.width = ww * canvasRes;
	canvas.height = wh * canvasRes;	
	
	cw = canvas.width;
	ch = canvas.height;

	
	
	

	
	if(window.layoutSeatmap){ 
		updateLayoutElements();
		

	}

	
	if(screenPropCurrent<1){
		isMobile=true;
		isPortrait=true;
	}else{
		isMobile=false;
		isPortrait=false;
		
	}

	
	
	fontBaseSizePrimary = 16*canvasRes*0.85; 
	
	if(isMobile){
		fontBaseSizePrimary=(fontBaseSizePrimary*0.5)+(fontBaseSizePrimary*0.5*(ww/mobileWidth));
 	}else{
		fontBaseSizePrimary = 16*canvasRes*0.75; 
	}
	fontPrimary = fontBaseSizePrimary + "px "+fontFamilyPrimary;
	fontHint = fontBaseSizePrimary*1.2 + "px "+fontFamilyPrimary;
	
	fontUISize=fontBaseSizePrimary*1.4;
	fontUI = 600+" "+fontUISize+ "px "+fontFamilyPrimary;
	fontBigButtonSize = fontBaseSizePrimary*2;
	fontBigButton = 400+" "+fontBigButtonSize+ "px "+fontFamilyPrimary;
	
	paddingNormal = fontBaseSizePrimary/1.5;
	strokeBaseThickness = 4*canvasRes;
	
	dragDelta = 10*canvasRes;

	
	
	canvasd.width = ww;
	canvasd.height = wh;
	canvasp.width = ww;
	canvasp.height = wh;
	
	
	if(usingFakePixelsCanvas){
		
		
		var fakePixelArea = (ww*wh)/totalPixels;	
		var fakePixelSide = Math.sqrt(fakePixelArea);
		
		widthInFakePixels = ww/fakePixelSide;
		heightInFakePixels = wh/fakePixelSide;
		
		fakePixelW = (widthInFakePixels/Math.floor(widthInFakePixels))*fakePixelSide;
		fakePixelH = (heightInFakePixels/Math.floor(heightInFakePixels))*fakePixelSide;
		
		widthInFakePixels = Math.floor(ww/fakePixelW);
		heightInFakePixels = Math.floor(wh/fakePixelH);
		
		canvasf.width  = widthInFakePixels;
		canvasf.height = heightInFakePixels;
		
		clearFakePixelGrid("white");
	}

}
window.addEventListener('resize', myReload);				

function initializeGeneralStuff(){													

	
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    canvasd = document.getElementById("debugCanvas");
    ctxd = canvasd.getContext("2d");
    canvasp = document.getElementById("pointerCanvas");
    ctxp = canvasp.getContext("2d");	
	if(usingFakePixelsCanvas){
		canvasf = document.getElementById("fakePixelsCanvas");
		ctxf = canvasf.getContext("2d");
	}
	introText = document.getElementById("introText");

	
	
	window.root = new component("root",0.5,0.5);
	
	
	root.fadeMeIn=false;

	
	window.propWarning = new component("Please use portrait or landscape",0.5,0.5);
	propWarning.widthRel = 1;
	propWarning.heightRel = 1;
	propWarning.color = colorBadLight;
	removeComponent(propWarning.id);

	
	window.sizeWarning = new component("Please increase screen size",0.5,0.5);
	sizeWarning.widthRel = 1;
	sizeWarning.heightRel = 1;
	sizeWarning.color = colorBadLight;
	removeComponent(sizeWarning.id);

	
	adjustToCanvasSizeAndRes();	

	
	
		if (assetCount==arrayOfAssets.length){
		allAssetsLoaded=true;
		requestAnimationFrame(mainLoop);
		avatarWidth=faceWhite.width;
		avatarHeight=faceWhite.height;
	}
		
	
	
	
	if(usingLocalStorage){
		window.addEventListener("unload",writeLocalVars,false);
		window.onunload = function(event) { writeLocalVars() };
		document.addEventListener("pause", writeLocalVars, false);
	}
}
function initializeProjectSpecificStuff(){											
	

	
	

	
	

 	
	
	
	
	
	window.layoutHeader = new component("layoutHeader");
	
	window.layoutBody = new component("layoutBody");
	window.layoutSeatmap = new component("layoutSeatmap");
	
	window.layoutAreaForCards = new component("layoutAreaForCards");
	window.layoutDeckDropArea = new component("layoutDeckDropArea");
	
	window.layoutFooter = new component("layoutFooter");
	
	updateLayoutElements(); 
 
	
	
	
	
	window.prefWindow = "Prefers window seat.";
	window.prefAisle = "Prefers aisle seat.";
	window.prefTogether = "Prefers seating together.";
	window.elderlyFrail = "Frail elderly person.";
	window.elderyAble = "Able-bodied elderly person."
	
	window.passengerPreseat = {
		passport: 0,
		name: "Pre-Seated",
		age: 35,
		pref: ["Already booked a seat."]
	}
	
	var tempPassenger;
	window.arrayOfPassengers = []; 
	
	tempPassenger = {
		passport: 0.2,
		name: "Bob Dangerfield",
		age: 35
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.3,
		name: "Lorraine McFly",
		age: 23,
		code: "PREG"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.8,
		name: "Jorge L. Borges",
		age: 25,
		code: "WCHC"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.5,
		name: "Jess Law",
		age: 30,
		pref: ["Baby on lap"],
		code: "INF"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.32,
		name: "Frank Abagnale",
		age: 10,
		code: "UMNR"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.78,
		name: "Carina Nuvem",
		age: 37,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple",
		groupLeader: "true"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.342,
		name: "Scott Cloud",
		age: 29,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple"
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: 0.5221,
		name: "Heath Longlegs",
		age: 20,
		pref: [prefAisle]
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.21166,
		name: "Carla Horn",
		age: 42,
		group: "CarlaAndCharlie",
		groupType: "couple",
		pref: [prefTogether,prefAisle],
		code: "NERV"
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: 0.6666,
		name: "Charles Hunt",
		age: 29,
		group: "CarlaAndCharlie",
		pref: [prefTogether],
		groupType: "couple",
		groupLeader: "true"		
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.1111,
		name: "Hilda Hilst",
		age: 88,
		pref: [elderlyFrail]
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.81142,
		name: "Howard Happy",
		age: 78,
		pref: [prefWindow,elderyAble]
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.39001,
		name: "Jon Smith",
		age: 38,
		pref: [prefTogether],
		group: "smiths",
		groupType: "family",
		groupLeader: "true"
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: 0.39002,
		name: "Jane Smith",
		age: 30,
		pref: [prefTogether],
		group: "smiths",
		groupType: "family"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.39003,
		name: "Billy Smith",
		age: 4,
		pref: [prefTogether],		
		code: "CHD",
		group: "smiths",
		groupType: "family",		
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.39004,
		name: "Lilly Smith",
		age: 9,
		pref: [prefTogether],
		code: "CHD",
		group: "smiths",
		groupType: "family",		
	}
	arrayOfPassengers.push(tempPassenger);
	
	
	if(0){
				
		var blabla = {
			passport: 0.1111,
			name: "Hilda Hilst",
			age: 88,
			pref: [elderlyFrail]
		}
		arrayOfPassengers=[blabla];
		
	}
	
	if(0){
		
		arrayOfPassengers=[];
		tempPassenger = {
			passport: 0.39001,
			name: "Jon Smith",
			age: 38,
			pref: [prefTogether],
			group: "smiths",
			groupType: "family",
			groupLeader: "true"
		}
		arrayOfPassengers.push(tempPassenger);	
		
		tempPassenger = {
			passport: 0.39002,
			name: "Jane Smith",
			age: 30,
			pref: [prefTogether],
			group: "smiths",
			groupType: "family"
		}
		arrayOfPassengers.push(tempPassenger);
		
		tempPassenger = {
			passport: 0.39003,
			name: "Billy Smith",
			age: 4,
			pref: [prefTogether],		
			code: "CHD",
			group: "smiths",
			groupType: "family",		
		}
		arrayOfPassengers.push(tempPassenger);
		
		tempPassenger = {
			passport: 0.39004,
			name: "Lilly Smith",
			age: 9,
			pref: [prefTogether],
			code: "CHD",
			group: "smiths",
			groupType: "family",		
		}
		arrayOfPassengers.push(tempPassenger);
		
		
	}
	
	if(0){
				arrayOfPassengers=[];

			
	tempPassenger = {
		passport: 0.32,
		name: "Frank Abagnale",
		age: 10,
		code: "UMNR"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.78,
		name: "Carina Nuvem",
		age: 37,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple",
		groupLeader: "true"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: 0.342,
		name: "Scott Cloud",
		age: 29,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple"
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: 0.5221,
		name: "Heath Longlegs",
		age: 20,
		pref: [prefAisle]
	}
	arrayOfPassengers.push(tempPassenger);

	}
	
	
	if(limitNumberOfPassengers>0){
		arrayOfPassengers.splice(limitNumberOfPassengers,arrayOfPassengers.length-limitNumberOfPassengers);
	}

	window.arrayOfPassengersUntouched = arrayOfPassengers.slice();
	
	totalPassengersOriginallyInCue=arrayOfPassengers.length;
	


	
	window.gameState = "init"; 


	
	window.rowCount=5;
	window.columnCount=6;
	window.emergencyRows=[3]; 
	window.aisleToRightOfColumn=[3]; 
	window.columnCountWithAisle = columnCount+aisleToRightOfColumn.length; 
	
	
	window.arrayOfSeatedPassengers=[]; 
	
	var tempColumn=[];
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			tempColumn.push(null);
		}
		arrayOfSeatedPassengers.push(tempColumn);
		tempColumn=[];
	}
	
	
	if(0){
		var  copyOfarrayOfPassengers = arrayOfPassengers.slice();
		for(var i=0;i<columnCount;i++){		
			for(var j=0;j<rowCount;j++){
				if(Math.random()>0.7){
					
					arrayOfSeatedPassengers[i][j]= passengerPreseat;
				}
			}
		}
	}
	if(1){	
		
		
		arrayOfSeatedPassengers[0][4]=passengerPreseat;
		
		
		
		
		
		arrayOfSeatedPassengers[4][4]=passengerPreseat;
		
		
		arrayOfSeatedPassengers[5][4]=passengerPreseat;
	}
	if(0){ 
		var copyOfarrayOfPassengers = arrayOfPassengers.slice();
		for(var i=0;i<columnCount;i++){		
			for(var j=0;j<rowCount;j++){
				if(copyOfarrayOfPassengers.length>0){
					arrayOfSeatedPassengers[i][j]=copyOfarrayOfPassengers.splice(0,1)[0];
					
				}
			}
		}	
	}
	
	var seatsVar = new seats();

 	
	var tempComponentPointer; 
	
	tempComponentPointer=new component(logoAcademy,0.05,0.6); 
	tempComponentPointer.anchorLeft=true;
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.85;
	
	
	parentComponents(tempComponentPointer,layoutHeader);
	window.componentIconReset =new component(iconReset,0.82,0.5);
	componentIconReset.color="none";
	componentIconReset.heightRel=0.75;
	componentIconReset.actionOnClick="reload";
	componentIconReset.anchorRight=true;
	componentIconReset.isButton=true;
	
	parentComponents(componentIconReset,layoutHeader);
	tempComponentPointer=new component(iconHelp,0.95,0.5);
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.75;
	tempComponentPointer.actionOnClick="showHelp";
	tempComponentPointer.anchorRight=true;
	tempComponentPointer.isButton=true;
	parentComponents(tempComponentPointer,layoutHeader);
	
	
	statPercentage=new component("0%",0.12,0,"circle"); 
	statPercentage.heightRel=0.8;
	statPercentage.color="green";
	statPercentage.anchorTop=true;
	statPercentage.alpha=0;
	statPercentage.targetAlpha=0;
	statPercentage.widthPropHeight=true;
	statPercentage.componentType="stat";
	parentComponents(statPercentage,layoutFooter);
	
	statTimer=new component("0s",0.88,0,"circle"); 
	statTimer.heightRel=0.8;
	statTimer.color="orange";
	statTimer.anchorTop=true;
	statTimer.widthPropHeight=true;
	statTimer.componentType="stat";
	parentComponents(statTimer,layoutFooter);


	if(0){ 
		new component("Not a button",1/4,1/4);
		var tempComponentPointer2 = new component("Grandpa",0.5,0.5);			
		tempComponentPointer2.actionOnDrag="drag";
		tempComponentPointer2.widthRel=0.5;
		tempComponentPointer2.heightRel=0.5;
		parentComponents(tempComponentPointer2,layoutAreaForCards);
		var tempComponentPointer3 = new component("Papa fits within grandpa",0.25,0.25);										
		tempComponentPointer3.actionOnDrag="drag";
		tempComponentPointer3.widthRel=0.4;
		tempComponentPointer3.heightRel=0.4;
		tempComponentPointer3.inheritSize=true;
		tempComponentPointer3.inheritPos=true;
		parentComponents(tempComponentPointer3,tempComponentPointer2);
		tempComponentPointer = new component("Son follows papa",0.25,0.25);
		tempComponentPointer.widthRel=0.4;
		tempComponentPointer.heightRel=0.4;
		tempComponentPointer.actionOnDrag="drag";
		tempComponentPointer.inheritPos=true;
		parentComponents(tempComponentPointer,tempComponentPointer3);
		tempComponentPointer = new component("Fade and Remove",3/4,1/4); 					
		tempComponentPointer.actionOnClick="fadeOutAndRemove";
		parentComponents(tempComponentPointer,tempComponentPointer2);	
		tempComponentPointer = new component("Remove",1/4,3/4,"circle");			
		tempComponentPointer.actionOnClick="remove";
		parentComponents(tempComponentPointer,layoutSeatmap);
		tempComponentPointer = new component("Change Color",2/4,4/4,"circle");		
		tempComponentPointer.actionOnClick="changeColor";
		parentComponents(tempComponentPointer,tempComponentPointer2);	
		tempComponentPointer = new component("Chaos on my siblings",3/4,3/4,"circle");				
		tempComponentPointer.actionOnClick="chaos";
		parentComponents(tempComponentPointer,layoutSeatmap);
		
	}
}


function seats(){
	
	
	
 	window.layoutSeats = new component("layoutSeats",0.5,0.5);
 	parentComponents(layoutSeats,layoutSeatmap);
 	layoutSeats.widthRel=0.75;	
	layoutSeats.heightPropWidth=rowCount/columnCountWithAisle;
	layoutSeats.color="white";
	
	
	var tempSeat;
	for(var i=0;i<columnCountWithAisle;i++){
		for(var j=0;j<rowCount;j++){
			
			tempSeat = new component("",(1/(columnCountWithAisle))*i,(1/(rowCount))*j);
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithAisle;
			tempSeat.componentType="seat";
			tempSeat.heightRel=1/rowCount;
			
			tempSeat.color="rgb(228,208,200)";
			tempSeat.strokeWidthRel = 4;
			tempSeat.strokeColor="white";
			for(var r=0;r<aisleToRightOfColumn.length;r++){
				if(i==aisleToRightOfColumn[r]){
					tempSeat.color="lightgrey";
				}
			}
			parentComponents(tempSeat,layoutSeats);
			for(var r=0;r<aisleToRightOfColumn.length;r++){
				if(i!=aisleToRightOfColumn[r]){
					
					tempSeat =new component(seat,(1/(columnCountWithAisle))*(i+0.5),(1/(rowCount))*(j+0.5));
					tempSeat.color="none";
					tempSeat.heightRel=0.18;
					parentComponents(tempSeat,layoutSeats);				}
				}
		}
	}
	
	for(var r=0;r<emergencyRows.length;r++){
		for(var i=0;i<columnCountWithAisle;i++){
			tempSeat = new component("",(1/(columnCountWithAisle))*i,(1/(rowCount))*(emergencyRows[r]-1));
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithAisle;
			
			tempSeat.color="none";			
			tempSeat.heightRel=1/rowCount;
			tempSeat.strokeWidthRel = 4;
			tempSeat.strokeColor="salmon";
			parentComponents(tempSeat,layoutSeats);
	
			for(var e=0;e<aisleToRightOfColumn.length;e++){
				if(i==aisleToRightOfColumn[e]){
					tempSeat.color="salmon";
				}
			}

	
		}
	}
	
	
	var letterCount=0;
	for(var i=0;i<columnCountWithAisle;i++){		
		for(var e=0;e<aisleToRightOfColumn.length;e++){
			if(i!=aisleToRightOfColumn[e]){
				tempSeat = new component(String.fromCharCode(65+letterCount),1/(columnCountWithAisle*2)+(1/(columnCountWithAisle))*i,-1/(2*columnCountWithAisle));
				tempSeat.color="none";
				tempSeat.fontColor	= "black";	
				tempSeat.fontType	= "UI";	
				parentComponents(tempSeat,layoutSeats);
				letterCount+=1;
			}
		}
	}
	
	
	for(var i=0;i<rowCount;i++){		
		tempSeat = new component(i+1,1/(columnCountWithAisle*2)+(1/(columnCountWithAisle))*3,1/(rowCount*2)+(1/(rowCount))*i);	
		tempSeat.color="none";
		tempSeat.fontColor	= "black";	
		tempSeat.fontType	= "UI";	
		parentComponents(tempSeat,layoutSeats);
	}

	
	
	tempSeat =new component(windowsLeft,-0.05,0.5);
	tempSeat.color="none";
	tempSeat.heightRel=1;
	parentComponents(tempSeat,layoutSeats);
	
	tempSeat =new component(windowsRight,1.05,0.5);
	tempSeat.color="none";
	tempSeat.heightRel=1;
	parentComponents(tempSeat,layoutSeats);



	
	window.posHint = new component("",0.5,1.11);	
	posHint.color="none";
	posHint.fontColor	= "black";	
	posHint.fontType	= "UI";	
	parentComponents(posHint,layoutSeats);	

	
	var fakeColumnCounter=0;
	var tempPerson;
	for(var i=0;i<columnCount;i++){
		for(var j=0;j<rowCount;j++){
			if(arrayOfSeatedPassengers[i][j]!=null){				
				
				tempPerson = new component("",(1/(columnCountWithAisle))*fakeColumnCounter,(1/(rowCount))*j);
				tempPerson.passenger = arrayOfSeatedPassengers[i][j];
				if(1){tempPerson.disabled=true;}
				tempPerson.mySeatPos=[i,j];
				tempPerson.anchorLeft=true;
				tempPerson.anchorTop=true;
				tempPerson.widthRel=1/columnCountWithAisle;
				tempPerson.heightRel=1/rowCount;
				tempPerson.actionOnDrag="drag";
				parentComponents(tempPerson,layoutSeats);	

				
				
				if(0){
					tempSeat = new component(arrayOfSeatedPassengers[i][j].name,(1/(columnCountWithAisle))*fakeColumnCounter,(1/(rowCount))*j);
					tempSeat.anchorLeft=true;
					tempSeat.anchorTop=true;
					tempSeat.color="none";
					tempSeat.fontColor	= "black";	
					tempSeat.fontType	= "normal";	
					parentComponents(tempSeat,layoutSeats);
				}
			}
		

		}
		fakeColumnCounter+=1;
		if(i==2){fakeColumnCounter+=1}
	}
	
	
	
	

	
	
	
	
	
	
}

function avatarGraphic(passport,x,y,sizePixels){	
	if(typeof passport==='undefined'){this.passport=0;}else{this.passport=passport;}
	if(typeof x==='undefined'){this.x=0;}else{this.x=x;}
	if(typeof y==='undefined'){this.y=0;}else{this.y=y;}
	if(typeof sizePixels==='undefined'){this.sizePixels=0;}else{this.sizePixels=sizePixels;}

	this.tagColor = "blue";

	
	this.eyeHeight = this.sizePixels/2;
	this.eyeDist = this.sizePixels/3;	
	this.lineWeight = strokeBaseThickness/2;
	this.eyeOpeness = 1; 
	this.smileSize = 0.3;
	this.smileSizeTarget = 0.3;
	this.headShakeAmountTarget = 0;
	this.headShakeAmount = 0;
	this.headShake;	
	
	this.updateAndDraw = function(){

		
		if(this.passport==0.39003 || this.passport==0.39004){this.sizePixels*=0.8;}
		if(this.passport==0.32){this.sizePixels*=0.9;}
	
		

		this.headShakeAmount+=(this.headShakeAmountTarget-this.headShakeAmount)/easeSpeedNormal;

		this.headShake = this.headShakeAmount*Math.sin(timeCounter/10)*this.eyeDist;

		ctx.globalAlpha=1;	
		if(this.passport==0){
			
		}

		this.eyeHeight = this.sizePixels/2;
		this.eyeDist = this.sizePixels/2.5;	
		this.lineWeight = (strokeBaseThickness/1.5)+this.sizePixels/25;

		ctx.lineWidth = this.lineWeight;

		if(this.passport!=0){
			this.tagColor= randomColor(this.passport); 
		}

		
		
		
		this.newAvatarRelSize = 3; 
		this.newAvatarProp=avatarHeight/avatarWidth;
		this.newAvatarWidth=this.sizePixels * this.newAvatarRelSize;
		this.newAvatarHeight=this.newAvatarWidth*this.newAvatarProp;
		ctx.drawImage(faceWhite,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		ctx.globalAlpha=0.2+this.passport*0.8;
		if(this.passport>0){ 
			ctx.globalAlpha=this.passport*2;
			ctx.drawImage(faceOrange,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		}
		if(this.passport>0.5){ 
			ctx.globalAlpha=0.1+this.passport*0.35	;
			ctx.drawImage(faceBrown,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		}
		ctx.globalAlpha=1;
		
		if(this.passport==0.2){ctx.drawImage(Bob,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.3){ctx.drawImage(Lorraine,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.8){ctx.drawImage(Jorge,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.5){ctx.drawImage(Jess,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.32){ctx.drawImage(Frank,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.78){ctx.drawImage(Carina,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.342){ctx.drawImage(Scott,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.5221){ctx.drawImage(Heath,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.21166){ctx.drawImage(Carla,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.6666){ctx.drawImage(Charles,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.1111){ctx.drawImage(Hilda,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.81142){ctx.drawImage(Howard,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.39001){ctx.drawImage(Jon,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.39002){ctx.drawImage(Jane,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.39003){ctx.drawImage(Jon,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
		if(this.passport==0.39004){ctx.drawImage(Jane,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);}
 	
		

		
		ctx.beginPath();
		ctx.lineCap = "round";
		if(this.smileSize!=this.smileSizeTarget){
			this.smileSize-=(this.smileSize-this.smileSizeTarget)/10
		}
		if(this.smileSizeTarget!=0.3){
			this.smileSizeTarget-=(this.smileSizeTarget-0.3)/2;
		}
		ctx.lineWidth = this.lineWeight*0.65;
		if(this.passport==0.5){this.smileSize=0.42;}
		if(!this.isSad){
			ctx.arc(this.x+this.headShake,this.y-this.sizePixels/4,this.sizePixels/1.5, Math.PI*this.smileSize, Math.PI*(1-this.smileSize));
		}else{
			ctx.arc(this.x+this.headShake,this.y+this.sizePixels*0.9,this.sizePixels/1.5, 1*Math.PI*(1+this.smileSize), Math.PI*(2-this.smileSize));
		}
		ctx.strokeStyle = strokeBaseColor;
		ctx.stroke();

		
		if(this.eyeOpeness<1){this.eyeOpeness+=(1-this.eyeOpeness)/5;}

		
		ctx.save();
		ctx.beginPath();
		ctx.rect(this.headShake+this.x-this.eyeDist*2, this.y-(this.eyeHeight/4)-this.eyeOpeness*(this.eyeHeight/2), this.eyeDist*4, this.eyeDist*1.5);
		ctx.clip();
		
		drawCircle(this.headShake+this.x+this.eyeDist,this.y-this.eyeHeight/2,this.sizePixels/8,"black");
		drawCircle(this.headShake+this.x-this.eyeDist,this.y-this.eyeHeight/2,this.sizePixels/8,"black");

		ctx.restore();
			
		ctx.globalAlpha=1;
		
		
		if(this.passport!=0){
			
		}

		
	}


}
function pickPersonAndBuildDeck(){ 
	var returnArray = [];
	var tempPerson;

	
	if(randomizePassengers){
		tempPerson = arrayOfPassengers.splice(Math.floor(Math.random()*arrayOfPassengers.length),1)[0];
	}else{
		tempPerson = arrayOfPassengers.splice(0,1)[0];		
	}
	
	var tempGroup="none";
	
	if(typeof tempPerson.group==='undefined'){
		
		returnArray[0]= tempPerson;		
	}else{
		tempGroup=tempPerson.group;
		
		returnArray[0]= tempPerson;
		for(var i=0; i<arrayOfPassengers.length; i+=1){
			if(typeof arrayOfPassengers[i].group!=='undefined'){
				if(arrayOfPassengers[i].group==tempGroup){
					
					if(typeof arrayOfPassengers[i].groupLeader!=='undefined'){
						returnArray.unshift(arrayOfPassengers.splice(i,1)[0]);
					}else{
						returnArray.push(arrayOfPassengers.splice(i,1)[0]);	
					}
					i-=1; 
				}
			}
		}
	}
	
	return returnArray
}
function checkPlacing(){ 
	if(arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]==null){
		return "accept";
	}else{
		
		return "occupied";
	}
}
function moveToTop(id){
	for(i=0;i<arrayOfComponents.length;i++){
		if(arrayOfComponents[i].id==id){
			arrayOfComponents.push(arrayOfComponents[i]);
			arrayOfComponents.splice(i,1);
			break;
		}						
	}
}
function notSeated(card){
	
	for(var i=0; i<currentSeatedDeck.length;i++){
		if(currentSeatedDeck[i].id==card.id){
			
			return false;
		}
	}
	
	
	return true;
}
function highlightSeats(listOfSeats,hiColor){ 
	if(typeof hiColor==='undefined'){
		this.hiColor = colorReviewMode;
	}else{
		this.hiColor = hiColor;
	}
	
	var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
	var highlightScale = 0.8;
	var highlightWidth = seatWidth*highlightScale;
	var highlightShift = (seatWidth/2)*highlightScale;
	var sx=0;
	var sy=0;


	for(var i=0;i<listOfSeats.length;i++){
		sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (listOfSeats[i][0]+0.5)*seatWidth;
		sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (listOfSeats[i][1]+0.5)*seatWidth;
		if(listOfSeats[i][0]>2){sx +=seatWidth;}

		if(0){ 
			ctx.fillStyle="black";
			ctx.textAlign = "center";
			ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
			
			ctx.fillText(arrayOfSeatedPassengers[i][j].name, sx,sy);
		}
		
		ctx.fillStyle=this.hiColor;
		ctx.fillRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);
	}
							
	
}
function checkForLoneSeats(){
	var pointS;
	var listOfLoneSeats = [];
	var foundLoneWindowSeat=false;
	var foundLoneMiddleSeat=false;
	

	
	
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[0][j]==null){
			
			if(arrayOfSeatedPassengers[1][j]!=null){		
				
				listOfLoneSeats.push([0,j]);
				foundLoneWindowSeat=true;
			}
		}
	}
	
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[5][j]==null){
			
			if(arrayOfSeatedPassengers[4][j]!=null){		
				
				listOfLoneSeats.push([5,j]);
				foundLoneWindowSeat=true;
			}
		}
	}

	
	
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[1][j]==null){
			
			if(arrayOfSeatedPassengers[0][j]!=null && arrayOfSeatedPassengers[2][j]!=null){		
				
				listOfLoneSeats.push([1,j]);
				foundLoneMiddleSeat=true;
			}
		}
	}
	
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[4][j]==null){
			
			if(arrayOfSeatedPassengers[3][j]!=null && arrayOfSeatedPassengers[5][j]!=null){		
				
				listOfLoneSeats.push([4,j]);
				foundLoneMiddleSeat=true;
			}
		}
	}


	
	for(var i=0;i<columnCount;i++){
		for(var j=0;j<rowCount;j++){
			if(arrayOfSeatedPassengers[i][j]==null){
				pointS = arrayOfSeatedPassengers[i][j];
				
			}
		}
	}
	
	
	if(foundLoneWindowSeat){loneSeatsMsg="Lone window seat";}
	if(foundLoneMiddleSeat){loneSeatsMsg="Lone middle seat";}
	if(foundLoneWindowSeat && foundLoneMiddleSeat){loneSeatsMsg="Lone middle/window seats";}
	
	return listOfLoneSeats; 	
}

function defineInputFunctions() { 											
 
	
	canvasp.addEventListener("mousedown", mouseDown, false);
	canvasp.addEventListener("touchstart", mouseDown, false);
	function mouseDown(event) {
		pointerDown = true;		
		pointerDownGlobalOneOffWarning=true; 
		updatePointerCanvasPos(event);
	}

	
	canvasp.addEventListener("mouseup", mouseUp, false);
	canvasp.addEventListener("touchend", mouseUp, false);
	function mouseUp(event){
		
		event.preventDefault();		

		pointerUpGlobalOneOffWarning=true; 

		pointerDown = false;
		pointerDragging = false;			
 	
	}

	
	canvasp.addEventListener("mousemove", mouseMove, false);
	canvasp.addEventListener("touchmove", mouseMove, false);	
	function mouseMove(event){
		updatePointerCanvasPos(event);
		
		if(pointerDown){
			pointerDragging=true;
		}
	}

	
	canvasp.addEventListener ("mouseout", mouseOut, false);
	function mouseOut(event){
		pointerDown = false;
		pointerDragging = false;
	
	}
	
}

function updateLayoutElements(){
	
	
	
	
	root.heightRel = 1;
	root.widthRel = 1;
	var intendedWidth=(ch*canvasPropPortrait);
	var intendedHeight =(cw/canvasPropLandscape);
	
	introText.style.fontSize="0.9em";
	introText.style.lineHeight="1.5em";
	
	
	if(screenPropCurrent<1){
		isMobile=true;
		isPortrait=true;
		
		
		if(intendedWidth<cw){
			root.widthRel = intendedWidth/cw;		
 		
		}else{
			intendedHeight =(cw/canvasPropPortrait);
			root.heightRel = intendedHeight/ch;
			
			
			introText.style.top=(ch-intendedHeight)/2+"px";			
		}
		
		introText.style.fontSize=root.heightRel+"em";
		introText.style.lineHeight=root.heightRel*1.75+"em";


	
	}else{
		isMobile=false;
		isPortrait=false;
		
		
		if(intendedHeight<ch){
			root.heightRel = intendedHeight/ch;		
			
			
			introText.style.top=(ch-intendedHeight)/2+"px";
			
		
		}else{
			intendedWidth=(ch*canvasPropLandscape);
			root.widthRel = intendedWidth/cw;
		}
	
	}	
	
	
	
	introText.style.width=root.widthRel*100*0.7+"%";
	
	
	
	
	
	
	
	
	
	
	layoutSeatmap.anchorLeft=false;
	layoutSeatmap.anchorRight=false;
	layoutSeatmap.anchorBottom=false;
	layoutSeatmap.anchorTop=false;
	layoutAreaForCards.anchorLeft=false;
	layoutAreaForCards.anchorRight=false;
	layoutAreaForCards.anchorBottom=false;
	layoutAreaForCards.anchorTop=false;
	layoutDeckDropArea.anchorLeft=false;
	layoutDeckDropArea.anchorRight=false;
	layoutDeckDropArea.anchorBottom=false;
	layoutDeckDropArea.anchorTop=false;
	if(isMobile){
		
		layoutHeader.posXRel=0.5;
		layoutHeader.posYRel=0;
		layoutHeader.anchorTop=true;
		layoutHeader.widthRel=1;
		layoutHeader.heightRel=0.075;
		
		
		layoutBody.posXRel=0.5;
		layoutBody.posYRel=0.075;
		layoutBody.widthRel=1;
		layoutBody.heightRel=0.8;
		layoutBody.anchorTop=true;
		
		
		layoutSeatmap.posXRel=0.5;
		layoutSeatmap.posYRel=0;
		layoutSeatmap.anchorTop=true;
		layoutSeatmap.widthRel=1;
		layoutSeatmap.heightRel=0.6;
		
		parentComponents(layoutSeatmap,layoutBody);
		
		layoutAreaForCards.posXRel=0.5;
		layoutAreaForCards.posYRel=1;
		layoutAreaForCards.anchorBottom=true;
		layoutAreaForCards.widthRel=1;
		layoutAreaForCards.heightRel=0.4;
		
		parentComponents(layoutAreaForCards,layoutBody);
		
		layoutDeckDropArea.posXRel=0.5;
		layoutDeckDropArea.posYRel=0.5;
		layoutDeckDropArea.widthRel=0.5;
		layoutDeckDropArea.heightRel=0.5;
		
		parentComponents(layoutDeckDropArea,layoutAreaForCards);
		
		layoutFooter.posXRel=0.5;
		layoutFooter.posYRel=1;
		layoutFooter.anchorBottom=true;
		layoutFooter.widthRel=1;
		layoutFooter.heightRel=0.125;
		
		
	}else{
		
		layoutHeader.posXRel=0.5;
		layoutHeader.posYRel=0;
		layoutHeader.anchorTop=true;
		layoutHeader.widthRel=1;
		layoutHeader.heightRel=0.1;
		
		
		layoutBody.posXRel=0.5;
		layoutBody.posYRel=0.1;
		layoutBody.anchorTop=true;
		layoutBody.widthRel=1;
		layoutBody.heightRel=0.75;
		
		
		layoutSeatmap.posXRel=0;
		layoutSeatmap.posYRel=0.5;
		layoutSeatmap.anchorLeft=true;
		layoutSeatmap.widthRel=0.5;
		layoutSeatmap.heightRel=1;
		
		parentComponents(layoutSeatmap,layoutBody);
		
		layoutAreaForCards.posXRel=1;
		layoutAreaForCards.posYRel=0.5;
		layoutAreaForCards.anchorRight=true;
		layoutAreaForCards.widthRel=0.5;
		layoutAreaForCards.heightRel=1;
		
		parentComponents(layoutAreaForCards,layoutBody);
		
		layoutDeckDropArea.posXRel=0.5;
		layoutDeckDropArea.posYRel=0.5;
		layoutDeckDropArea.widthRel=0.5;
		layoutDeckDropArea.heightRel=0.5;
		
		parentComponents(layoutDeckDropArea,layoutAreaForCards);
		
		layoutFooter.posXRel=0.5;
		layoutFooter.posYRel=1;
		layoutFooter.anchorBottom=true;
		layoutFooter.widthRel=1;
		layoutFooter.heightRel=0.15;
		
	}



 
 
	 

}

function parentComponents(me,dad,warnSon){
	if(typeof dadIsMyStage==='undefined'){
		this.dadIsMyStage=false;
	}else{this.dadIsMyStage=dadIsMyStage;}

	if(typeof warnSon==='undefined'){
		this.warnSon=false;
	}else{this.warnSon=warnSon;}

	me.pai = dad;
	
	me.stageIsPai = dadIsMyStage;
	
	if(this.warnSon){
		me.justGotaDad = true;
	}
 }

function updatePointerCanvasPos(theEvent){
	theEvent.preventDefault();
	
	if(usingFakePixelsCanvas){
		if(theEvent.targetTouches="null"){
			mouseXf = Math.floor(theEvent.x/fakePixelW);
			mouseYf = Math.floor((theEvent.y)/fakePixelH);
		}
		if(theEvent.targetTouches!="null"&&theEvent.targetTouches.length>0){
			mouseXf = Math.floor(theEvent.targetTouches[0].pageX/fakePixelW);
			mouseYf = Math.floor((wh-theEvent.targetTouches[0].pageY)/fakePixelH);
		}
	}
	
	
	
	if(theEvent.targetTouches="null"){ 
			mouseX = theEvent.x;
			mouseY = theEvent.y;
	}
	if(theEvent.targetTouches!="null"&&theEvent.targetTouches.length>0){   
		mouseX = theEvent.targetTouches[0].pageX;
		mouseY = theEvent.targetTouches[0].pageY;	
	}

	
	mouseX *=canvasRes;
	mouseY *=canvasRes;
}

function readLocalVars(){													
	if(localStorage.varToStoreLocally){
		varToStoreLocally = localStorage.varToStoreLocally;
	}
}
function writeLocalVars(){													
	localStorage.varToStoreLocally = varToStoreLocally;
}



function mainLoop(timestamp) { 												
	
	debugText = [];

	if(lineDashOffset<0){lineDashOffset=lineDashSize*3;}else{lineDashOffset-=1/4;}
	
	cardWidth = 0.8*layoutAreaForCards.widthPixels;
	cardHeight = cardHeightPropWidth * cardWidth;
	layoutDeckDropAreaPos=[layoutDeckDropArea.posxPixels,layoutDeckDropArea.posyPixels];
	
	
	if(pointerDownGlobalOneOffWarning){
		pointerPosWhenDown=[mouseX,mouseY];
	}

	
	
	if(pointerUpGlobalOneOffWarning){
		pointerPosWhenUp=[mouseX,mouseY];
		if(pointsAreCloserThan(pointerPosWhenDown,pointerPosWhenUp,dragDelta)){
			pointerClickedInPlaceGlobalOneOffWarning=true;
		}
	}

	

	timeCounter+= 1;
	

	targetStatPercentage=Math.round(100*(totalPassengersSeated/totalPassengersOriginallyInCue)); 

	clearCanvas();

	
	var demo = 0;
	if(usingFakePixelsCanvas){ 
		
	
	if(pointerDown){
		addFakePixel(mouseXf,mouseYf,"black");
	}		
		
	if(demo==0){	
	var decayVar = 1/10;
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	for(var rX=0; rX<widthInFakePixels; rX+=1){
		for(var rY=0; rY<heightInFakePixels; rY+=1){

			if(fakePixelGrid[rX][rY]=="white"){
				if(Math.random()<decayVar){
					
					addFakePixel(rX,rY,randomColor());
				}
			}else{
				var growDirection = Math.floor(Math.random()*4);
				
				if(growDirection==0){ 
					if(rX>0){
						if(fakePixelGrid[rX-1][rY]=="white"){
							addFakePixel(rX-1,rY,fakePixelGrid[rX][rY]);					
						}
					}
				}
				if(growDirection==1){ 
					if(rY>0){
						if(fakePixelGrid[rX][rY-1]=="white"){
							addFakePixel(rX,rY-1,fakePixelGrid[rX][rY]);											
						}
					}	
				}
				if(growDirection==2){ 
					if(rX<(widthInFakePixels-1)){
						if(fakePixelGrid[rX+1][rY]=="white"){
							addFakePixel(rX+1,rY,fakePixelGrid[rX][rY]);											
						}
					}
				}
				if(growDirection==3){
					if(rY<heightInFakePixels-1){
						if(fakePixelGrid[rX][rY+1]=="white"){
							addFakePixel(rX,rY+1,fakePixelGrid[rX][rY]);											
						}
					}
				}
			}


		}
	}

	}
	if(demo==1){	
	ctx.fillStyle = "blue";
	var tempX; var tempY;
	var rgbaColor;
	ctx.imageSmoothingEnabled = false;
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			
			rgbaColor = "rgba("+randomFromSeed(timeCounter+i+j*j)*255+", "+randomFromSeed(timeCounter+j+i*i)*255+", "+randomFromSeed(timeCounter+i*j)*255+", 0.1)"; 
			addFakePixel(i,j,rgbaColor);
			
			var t1 = Math.abs(i-mouseXf);
			var t2 = Math.abs(j-mouseYf);
			var tc = Math.sqrt((t1*t1)+(t2*t2));
			if(tc<12){
				addFakePixel(i,j,"rgba(0,0,0,"+1/((1+tc)/3)+")");			
			}
		}
	}
	}
	if(demo==2){	
	var heightDiv = 5;
	clearFakePixelGrid("white");
	
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			
			if(j>(Math.cos(timeCounter/0.5+i/120)*Math.cos(timeCounter)*(Math.sin(timeCounter/2.3+i/20)*heightInFakePixels/heightDiv)+heightInFakePixels*3/4)){
				addFakePixel(i,j,"pink");
			}
		}
	}

	
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			if(j>(Math.cos(timeCounter/1.1+i/20)*(Math.sin(timeCounter/1.3+i/70)*heightInFakePixels/heightDiv)+heightInFakePixels*3/4)){
				addFakePixel(i,j,"green");
			}
		}
	}

	
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			var delta=0;
			if(Math.abs(mouseXf-i)<20){
				delta = (j-mouseYf)*(20-Math.abs(mouseXf-i))/20;
			}

			if(j>-delta+(Math.cos(timeCounter/2.2+i/60)*(Math.sin(timeCounter/1+i/80)*heightInFakePixels/heightDiv)+heightInFakePixels*3/4*Math.cos(timeCounter/100))){
				addFakePixel(i,j,"blue");
			}
		}
	}

	}
	if(demo==3){	
		
		
		
		
		
		
		
			
		
		
		
		
	 
		
		var cameraViewWidth = 100;
		var cameraViewHeight = (cameraViewWidth*heightInFakePixels)/widthInFakePixels;
		var cameraHeight = 200; 
		var cameraPos = [0,0,cameraHeight];
		
		for(i=0;i<widthInFakePixels;i++){
			for(j=0;j<heightInFakePixels;j++){
				
				var viewY = (j/heightInFakePixels)*cameraViewHeight;
				var viewX = (i/widthInFakePixels)*cameraViewWidth;
				
				
				
				var rayCastPosInView = [100,viewX-(cameraViewWidth/2),viewY-(cameraViewHeight/2)+cameraHeight];

				
				var myRay = [cameraPos,rayCastPosInView];
				
				var tempOpacity = distanceBetween(cameraPos,rayCastPosInView)/160;
				addFakePixel(i,j,"rgba(0,0,0,"+tempOpacity+")");
			}
		}
		
	}
	}
	if(demo==4){
		ctx.fillStyle = "green";
		var ta = 20 * Math.PI / 180;
		ctx.rotate(ta);
		ctx.fillRect(cw/10,ch/10,cw/2.6,ch/2.4);
		ctx.rotate(-ta);
	}

	if(usingFakePixelsCanvas){
		drawFakePixelGrid();
	}


	
	root.updateAndDraw(); 
	
	if(gameState=="init"){ 
		
		
		window.introScreen = new component("",0.5,0.5);
		introScreen.heightRel=1;
		introScreen.widthRel=1;
		
		introScreen.color="white";
		parentComponents(introScreen,root);
 
		
		window.btnStart = new component("Let's go", 0.5, 0.85);
		btnStart.fontType="bigButton";
		btnStart.componentType="button";
	
		
		btnStart.actionOnClick="startGame";
		btnStart.color="green";
		parentComponents(btnStart,introScreen);		
 
		gameState="intro";
 
		
		
		window.btnResume = new component("Resume", 0.5, 0.85);
		btnResume.fontType="bigButton";
		btnResume.componentType="button";
		btnResume.actionOnClick="resumeGame";
		btnResume.color="green";
		parentComponents(btnResume,introScreen);

		
		window.transpOverlay = new component("",0.5,0.5);
		transpOverlay.heightRel=1;
		transpOverlay.widthRel=1;
		transpOverlay.color= "rgba(255,255,255,0.922)";
		parentComponents(transpOverlay,root);

		
		window.areYouSure = new component("Reset game?", 0.5, 0.4);
		areYouSure.fontType="bigButton";
		areYouSure.color="none";
		parentComponents(areYouSure,introScreen);	
		
		window.resetYes = new component("Yes", 0.35, 0.5);
		resetYes.fontType="bigButton";
		resetYes.componentType="button";
		resetYes.actionOnClick="resetYes";
		resetYes.color="green";
		parentComponents(resetYes,introScreen);
		
		window.resetNo = new component(" No ", 0.65, 0.5);
		resetNo.fontType="bigButton";
		resetNo.componentType="button";
		resetNo.actionOnClick="resetNo";
		resetNo.color=colorBadStrong;
		parentComponents(resetNo,introScreen);

		
		
		
		removeComponent(btnResume.id);
		removeComponent(transpOverlay.id);
		removeComponent(areYouSure.id);
		removeComponent(resetYes.id);
		removeComponent(resetNo.id);
		
	}
	if(gameState=="intro"){
		if(screenSizeAndPropSupported){
			introScreen.updateAndDraw();
			btnStart.updateAndDraw();
		}
		
		
	
		
		if (0){
			introText.style.opacity="0";
			gameState="beforeFirstPassenger";
		}		
		
  	}
	if(gameState!="intro"  && gameState!="init"){ 		
		for(var i=0;i<arrayOfComponents.length;i++){ 	
			arrayOfComponents[i].updateAndDraw();
		}
	}
	if(gameState=="beforeFirstPassenger"){
		
		if(typeof introScreen !=='undefined'){
			removeComponent(introScreen.id);
			removeComponent(btnStart.id);
			
		}
		
		
		window.btnCreateDeck = new component("I'm ready", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button";
		
		btnCreateDeck.actionOnClick="createNewCardDeck";
		btnCreateDeck.color="green";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToStart";
	}
	if(gameState=="waitingPlayerToStart"){
		
	}
	if(gameState=="createNewCardDeck"){
		
		removeComponent(btnCreateDeck.id);
 
		
		currentDeckOfPassengerInfo = pickPersonAndBuildDeck(); 
		var approachDelay;
		for(i=(currentDeckOfPassengerInfo.length-1); i>-1; i--){
			window["layoutCard_"+i] = new component(window["layoutCard_"+i],0.5,0.5);
			window["layoutCard_"+i].color="white";
			window["layoutCard_"+i].actionOnDrag="drag";
			window["layoutCard_"+i].componentType="card";
			window["layoutCard_"+i].passenger = currentDeckOfPassengerInfo[i]; 
			window["layoutCard_"+i].passenger.myPosInDeck=i; 
			window["layoutCard_"+i].passenger.myNumInDeck=i; 
			arrayOfSeatedComponents.push(window["layoutCard_"+i]);
			parentComponents(window["layoutCard_"+i],layoutDeckDropArea);		
			approachDelay = (currentDeckOfPassengerInfo.length - window["layoutCard_"+i].passenger.myPosInDeck)*2;
			if(isPortrait){ 
				window["layoutCard_"+i].posXRel=+1+approachDelay;
			}else{
				window["layoutCard_"+i].posXRel=2+approachDelay;
			}
			currentDeckOfCards.unshift(window["layoutCard_"+i]);
		}
	
		gameState="nextCardComesIn";
	}

	if(gameState=="nextCardComesIn"){
		layoutAreaForCards.updateAndDraw(); 
		layoutDeckDropArea.updateAndDraw(); 

		
		for(i=0; i<currentDeckOfPassengerInfo.length; i++){
			window["layoutCard_"+i].targetx= window["layoutCard_"+i].pai.pai.posxPixels;
		}
		gameState="waitingPlayerPlacePassenger";
	}
	if(gameState=="waitingPlayerPlacePassenger"){
		if(btnCreateDeck!== 'undefined'){
			removeComponent(btnCreateDeck.id);
		}
	}

	if(gameState=="showNextButton"){
 		
		
		window.btnCreateDeck = new component("Next, please!", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button"
		
		btnCreateDeck.actionOnClick="createNewCardDeck";
		btnCreateDeck.color="green";
		btnCreateDeck.hint = "Unsure? You can still reposition.";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToHitNext";
	}
	if(gameState=="waitingPlayerToHitNext"){
		
	}
	if(gameState=="showSubmitButton"){
		removeComponent(btnCreateDeck.id);
		
		
		window.btnCreateDeck = new component("I'm Done!", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button"
		
		btnCreateDeck.actionOnClick="submit"; 
		btnCreateDeck.hint = "Unsure? You can still change positions!";
		btnCreateDeck.color="green";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToSubmit";
	}
	if(gameState=="waitingPlayerToSubmit"){
		
	}

	if(gameState=="showFeedback"){
		if(typeof btnCreateDeck !== 'undefined'){
			removeComponent(btnCreateDeck.id);
		}
		
		timerOn=false;
			
		gameState="showingFeedback";
		
		window.feedbackAlpha = 0;
		
		
		
		
		
		

		
		
		
		
		
		
		
		
		window.globalEssentialRequirements = [0,0]; 
		window.globalPreferences = [0,0]; 
		window.globalEfficient=false; if(Math.round(gameTimer/60)<120){globalEfficient=true;} 
		
		var me; 
		var childAwayFromParents=true; var isNextToSoloTraveller=false;
		var UMNRtopRow=true; UMNRnextToSolo=false; UMNRnotInAisle=false;
		var isEmergencyRow=false; var isElderlyFrail; var isAisle=false; var isWindow=false;  var hasCode=false; var hasPref=false; var siblingOnMy="none"; 
		
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
					
					groupIsTogether(i,j); 
				}
			}
		}
		
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
					me = arrayOfSeatedPassengers[i][j];
					me.feedback="none";
					
					
					isEmergencyRow=false;
					isAisle=false;
					isWindow=false;
					childAwayFromParents=true;
					isElderlyFrail=false;
					hasCode=false;
					hasPref=false;
					siblingOnMy="false";
					
					if(i==aisleToRightOfColumn[0] || i==aisleToRightOfColumn[0]-1){
						isAisle=true;
						
					}
					if(i==0 || i==columnCount-1){
						isWindow=true;
						
					}
					if(j==emergencyRows[0]-1){
						isEmergencyRow=true;
						
					}
					if(typeof me.code !== 'undefined'){
						hasCode=true;
						
						globalEssentialRequirements[0]+=1;
					}	
					if(typeof me.pref !== 'undefined'){
						hasPref=true; 
					}
					if(hasPref){
						var prefTemp = me.pref;
						if(prefTemp.includes(prefAisle)||prefTemp.includes(prefWindow)||prefTemp.includes(prefTogether)){ 
							globalPreferences[0]+=1;
							
						}
						if(me.pref.includes(elderlyFrail)){
							isElderlyFrail=true;
							globalEssentialRequirements[0]+=1;
						}
					}
					
					
					if(isElderlyFrail){
						if(isEmergencyRow){
							me.feedback="essential";
							globalEssentialRequirements[1]+=1; 
							me.myReviewFeedbackText="Frail person in emergency row";
							
						}
					}
					
					if(typeof me.pref !== 'undefined'){
						
						if(me.pref.includes(prefAisle)){
							if(isAisle){
								
							}else{
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; 
								
							}
						}
						
						if(me.pref.includes(prefWindow)){
							if(isWindow){
								
							}else{
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; 
								
							}
						}
						
						if(me.pref.includes(prefTogether)){
							globalPreferences[0]+=1;
							
							if(!me.myGroupIsTogether){
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; 
								
							}else{
								
							}
						}
						
					}					
					
					
					if(hasCode){
						
						if(isEmergencyRow){
							me.feedback="essential";
							globalEssentialRequirements[1]+=1; 
							
							me.myReviewFeedbackText="\x22"+me.code+"\x22 in emergency row"
						}
						
						if(me.code == "CHD"){
							
							var pointerCHD;
							globalEssentialRequirements[0]+=1;
							
							if(i>0){
								
								if(arrayOfSeatedPassengers[i-1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i-1][j].group !== 'undefined'){
										if(arrayOfSeatedPassengers[i-1][j].group==me.group){
											if(arrayOfSeatedPassengers[i-1][j].age>ageAdultMin){
												
												
												childAwayFromParents=false;
											}else{
												
												
												pointerCHD = i;
												while(pointerCHD>0){
													pointerCHD-=1;
													if(arrayOfSeatedPassengers[pointerCHD][j]!=null){
														if(typeof arrayOfSeatedPassengers[pointerCHD][j].group !== 'undefined'){
															if(arrayOfSeatedPassengers[pointerCHD][j].group==me.group){
																if(arrayOfSeatedPassengers[pointerCHD][j].age>ageAdultMin){
																	
																	childAwayFromParents=false;
																	break;
																}
															}
														}
													}					
												}
											}

										}
									}
								}
							}
							
							if(childAwayFromParents && i<columnCount-1){ 
								if(arrayOfSeatedPassengers[i+1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i+1][j].group !== 'undefined'){
										if(arrayOfSeatedPassengers[i+1][j].group==me.group){
											if(arrayOfSeatedPassengers[i+1][j].age>ageAdultMin){
												
												
												childAwayFromParents=false;
											}else{
												
												
												pointerCHD = i;
												while(pointerCHD<columnCount-1){
													pointerCHD+=1;
													if(arrayOfSeatedPassengers[pointerCHD][j]!=null){
														if(typeof arrayOfSeatedPassengers[pointerCHD][j].group !== 'undefined'){
															if(arrayOfSeatedPassengers[pointerCHD][j].group==me.group){
																if(arrayOfSeatedPassengers[pointerCHD][j].age>ageAdultMin){
																	
																	childAwayFromParents=false;
																	break;
																}
															}
														}
													}					
												}												
											}
										}
									}
								}
							}
							
							if(childAwayFromParents){
								me.feedback="essential";
								if(typeof me.myReviewFeedbackText==='undefined'){
									
									me.myReviewFeedbackText="\x22"+me.code+"\x22 away from parent";									
								}else{
									
									me.myReviewFeedbackText+=" and alone";
								}
								globalEssentialRequirements[1]+=1; 
								
								
							}
						}
						if(me.code == "WCHC"){
							
							globalEssentialRequirements[0]+=1;
							if(Math.abs(j-2)<2){
								globalEssentialRequirements[1]+=1; 
								me.feedback="essential";
								me.myReviewFeedbackText="\x22"+me.code+"\x22 near emergency row";
							}							
						}
						if(me.code == "WCHC"|| me.code == "INF"){						
							
							globalEssentialRequirements[0]+=1;
							if(!isWindow){
								globalEssentialRequirements[1]+=1; 
								me.feedback="essential";
								me.myReviewFeedbackText="\x22"+me.code+"\x22 not in window seat";
							}
						}						
						if(me.code == "UMNR"){
							
							
							
							

							
							
							globalEssentialRequirements[0]+=1;
							isNextToSoloTraveller=false;
							
							if(i>0){
								if(arrayOfSeatedPassengers[i-1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i-1][j].group==='undefined'){ 
										if(typeof arrayOfSeatedPassengers[i-1][j].code !== 'undefined'){ 
											if(arrayOfSeatedPassengers[i-1][j].code!="UMNR"){
												
												isNextToSoloTraveller=true;												
											}
										}else{
												
												isNextToSoloTraveller=true;																							
										}
									}else{
										
										if(typeof arrayOfSeatedPassengers[i-1][j].myGroupIsTogether!=='undefined'){
											if(!arrayOfSeatedPassengers[i-1][j].myGroupIsTogether && !arrayOfSeatedPassengers[i-1][j].isNextToAtLeastOnePersonFromGroup){
												
												isNextToSoloTraveller=true;		
											}
										}
									}
								}
							}
							
							if(!isNextToSoloTraveller){ 
								if(i<columnCount-1){
									if(arrayOfSeatedPassengers[i+1][j]!=null){
										if(typeof arrayOfSeatedPassengers[i+1][j].group==='undefined'){ 
											if(typeof arrayOfSeatedPassengers[i+1][j].code !== 'undefined'){
												if(arrayOfSeatedPassengers[i+1][j].code!="UMNR"){
													
													isNextToSoloTraveller=true;
												}
											}else{
													
													isNextToSoloTraveller=true;												
											}
										}else{
											
											if(typeof arrayOfSeatedPassengers[i+1][j].myGroupIsTogether!=='undefined'){
												if(!arrayOfSeatedPassengers[i+1][j].myGroupIsTogether && !arrayOfSeatedPassengers[i+1][j].isNextToAtLeastOnePersonFromGroup){
													
													isNextToSoloTraveller=true;		
												}
											}
										}
									}
									
								}
							}
							if(isNextToSoloTraveller){
								globalEssentialRequirements[1]+=1;
								
								me.myReviewFeedbackText="\x22"+me.code+"\x22 near solo traveller";
								me.feedback="essential";
							}

							
							
							globalEssentialRequirements[0]+=1;
							if(!isAisle || j>0){
								globalEssentialRequirements[1]+=1;
								
								me.myReviewFeedbackText="\x22"+me.code+"\x22 must be in aisle, first row";
								me.feedback="essential";
							}
		

						}
					}

				}
			}
		}	
		
		
		
		
		
		
		window.feedbackTitle="Completed"; 
		window.feedbackItems = [];
		window.improvementItems = [];
		window.feedbackEnd = [];
		window.feedbackAccentColor;
		if(globalEssentialRequirements[1]>0){
			feedbackTitle="Try again";
			feedbackAccentColor=colorBadLight;
			feedbackItems.push("Airline policies were not followed.");
			feedbackEnd.push("Please try again.");
		}else{
			feedbackItems.push("Airline policies were followed.");
			if(globalPreferences[1]>0){
				feedbackTitle="You passed";
				feedbackAccentColor="orange";
				if(globalPreferences[1]>Math.floor(globalPreferences[0]/2)){
					improvementItems.push("Not everyone is happy with their seats.");
				}else{
					improvementItems.push("Some passengers are not happy with their seats.");
				}
			}else{
				feedbackTitle="Good job";				
				feedbackAccentColor="green";
				feedbackItems.push("Everyone is happy with their seats.");
			}
			if(globalEfficient){
				feedbackItems.push("You were efficient and quick.");
			}else{
				improvementItems.push("You took too long.");
			}
			feedbackEnd.push("Feel free to try again.");
		}
		if(globalEssentialRequirements[1]+globalPreferences[1]>0){
			feedbackEnd.push("Select passengers to learn more.");
		}else{
			feedbackEnd.push("Select passengers to review your choices.");			
		}

		
		
		
		
		
		
	}

	if(gameState=="showingFeedback"){
		
		

		if(!reviewModeGlobal){
			if(feedbackAlpha<1){
				feedbackAlpha+=0.01;			
			}
		}else{
			feedbackAlpha-=feedbackAlpha/2;		
		}
		
		
		ctx.globalAlpha = feedbackAlpha;
		var feedbackTitleY;
		if(isPortrait){
			feedbackTitleY=layoutAreaForCards.posyPixels-layoutAreaForCards.heightPixels/2;
		}else{
			feedbackTitleY=layoutAreaForCards.posyPixels-layoutAreaForCards.heightPixels/6;			
		}
		ctx.fillStyle=feedbackAccentColor;
		ctx.font = 700+" "+fontUISize*1.3	+ "px "+fontFamilyPrimary;			
		ctx.fillText(feedbackTitle, layoutAreaForCards.posxPixels,feedbackTitleY);

		
		var normalSize = fontUISize*0.9;
		ctx.font = 400+" "+normalSize+ "px "+fontFamilyPrimary;			
		var currentLine = 0;
		var lineHeight = normalSize*1.45;
		var feedbackTextY = feedbackTitleY+lineHeight*1.4;
		var textWidth = 0.7*layoutAreaForCards.widthPixels;
		ctx.fillStyle="black";
		ctx.textAlign="left";
		ctx.globalAlpha=feedbackAlpha-currentLine/100;
		
		
		for(var i=0;i<feedbackItems.length;i++){
			ctx.fillText(bulletPoint+" "+feedbackItems[i], layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
			currentLine+=1;
		}

		ctx.globalAlpha=feedbackAlpha-currentLine/100;


		
		if(improvementItems.length>0){
			currentLine+=0.5;
			ctx.font = 700+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
			ctx.fillText("What could be improved", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
			currentLine+=1;
			ctx.font = 400+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
			for(var i=0;i<improvementItems.length;i++){
				ctx.fillText(bulletPoint+" "+improvementItems[i], layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
				currentLine+=1;
			}
		}

		ctx.globalAlpha=feedbackAlpha-currentLine/100;
		
		
		currentLine+=0.5;
		ctx.fillStyle=feedbackAccentColor;
		ctx.font = 700+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
		for(var i=feedbackEnd.length-1;i>-1;i--){
			ctx.fillText(feedbackEnd[i], layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
			currentLine+=1;
		}



		
		ctx.globalAlpha=1;
		if(feedbackAccentColor!="green"){ 
			var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
			var highlightScale = 0.8;
			var highlightWidth = seatWidth*highlightScale;
			var highlightShift = (seatWidth/2)*highlightScale;
			var sx=0;
			var sy=0;
			ctx.save();
			for(var i=0;i<columnCount;i++){
				for(var j=0;j<rowCount;j++){
					if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat && arrayOfSeatedPassengers[i][j].feedback!="none"){
						sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (i+0.5)*seatWidth;
						sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (j+0.5)*seatWidth;
						if(i>2){sx +=seatWidth;}

						if(0){ 
							ctx.fillStyle="black";
							ctx.textAlign = "center";
							ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
							
							ctx.fillText(arrayOfSeatedPassengers[i][j].name, sx,sy);
						}
						
						
						if(arrayOfSeatedPassengers[i][j].reviewMode){
							ctx.fillStyle=colorReviewMode;
							ctx.fillRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);
						}
						
						
						ctx.strokeStyle=colorOrangeStrong; 
						if(arrayOfSeatedPassengers[i][j].feedback=="essential"){ctx.strokeStyle=colorBadStrong;} 
						if(arrayOfSeatedPassengers[i][j].reviewMode){ctx.strokeStyle="white";} 
						ctx.lineWidth=strokeBaseThickness;
						ctx.lineDashOffset= lineDashOffset;
						ctx.setLineDash([lineDashSize,lineDashSize*2]);
						ctx.strokeRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);
 
				
					}
				}
			}
			ctx.restore();
			
			
			for(var i=0;i<arrayOfSeatedComponents.length;i++){			
				arrayOfSeatedComponents[i].updateAndDraw();
			}
		}		

	}

	if(statPercent==0){
		statPercentage.targetAlpha=0;
	}else{
		statPercentage.targetAlpha=1;
	}
	statPercent+=Math.ceil((targetStatPercentage-statPercent)/10);
	statPercentage.label=statPercent+"%";
	

	
	
	if(gameState=="waitingPlayerPlacePassenger"){timerOn=true;}
	if(timerOn){gameTimer+=1;}
	statTimer.label= new Date(Math.round(gameTimer/60) * 1000).toISOString().substring(14, 19);


	
	
	
	if(debug){
	

	
	
	addToDebugText ("DEBUG MODE");
	addToDebugText ("-------------------");
	addToDebugText ("arrayOfComponents.length:"+arrayOfComponents.length);
	addToDebugText ("keySpace:"+keySpace);
	addToDebugText ("cw,ch:"+cw+","+ch);
	addToDebugText ("ww,wh:"+ww+","+wh);
	addToDebugText ("mouse:"+mouseX+","+mouseY);
	addToDebugText ("pointerDown:"+pointerDown);
	addToDebugText ("fontPrimary:"+fontPrimary);
	addToDebugText ("topmostComponentOnLocationOfLastPointerDown:"+topmostComponentOnLocationOfLastPointerDown);
	addToDebugText ("gameState:"+gameState);
	addToDebugText (moreDebugText);

	
	ctxd.fillStyle = "rgba(255,255,255,0.75)";
	ctxd.fillRect(0,0,400,400);

	
	var fb = fontBaseSizePrimary/canvasRes;  
	ctxd.font =  fb + "px "+fontFamilyPrimary;
	ctxd.fillStyle = "black";
	ctxd.textAlign = "left";
	var cursorHpos;
	var debugMargin = fb;
	var lineHeight = fb/18;
	for(var i=0;i<debugText.length;i++){
		cursorHpos = fb*2 + 24 * lineHeight*i;
		ctxd.fillText(debugText[i], fb*2, cursorHpos);	
	}

	}		 	

 
	
	if(0&&debug){
		
		
		
		
		
		
		
	
	
	}
	
	
	
	if(0){
		if(isMobile){
			addBorder(cw/100,"purple");
		}else{
			addBorder(cw/100,"orange");		
		}
	}
	

	
	if(!mouseLockedToGrid){
		mouseXlock=mouseX;
		mouseYlock=mouseY;
	}

 
	
	
	if(debug){
		drawCircle(mouseX,mouseY,4,"black");
		drawCircle(mouseXlock,mouseYlock,8,"none", true);
	}


	
	var msgAboveYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels/2;
	if(isPortrait){
		msgAboveYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels*0.8;
	}	
	
	
	if(gameState=="waitingPlayerPlacePassenger" || reviewModeGlobal){
		
		
		ctx.font=fontUI;
		ctx.fillStyle=colorShadow50pct;
		ctx.textAlign="center";
		if(pointerDragging){ctx.globalAlpha=0;}else{ctx.globalAlpha=0.8;}
		
		
		var cardType="passenger"; 
		if(!reviewModeGlobal){
			if((currentDeckOfCards.length+currentSeatedDeck.length)>1){
				cardType=currentDeckOfCards[0].passenger.groupType;	
			}
			ctx.fillText("SEAT THIS "+ cardType.toUpperCase(), layoutDeckDropArea.posxPixels, msgAboveYpos);
		}else{
			ctx.fillStyle=colorReviewMode;
			ctx.fillText("REVIEW MODE", layoutDeckDropArea.posxPixels, msgAboveYpos);			
		}
		
		
		var msgBelowYpos = layoutDeckDropArea.posyPixels+layoutDeckDropArea.heightPixels*0.5 + currentDeckOfCards.length*fontBaseSizePrimary/2;
		if(isPortrait){
			msgBelowYpos = layoutDeckDropArea.posyPixels+layoutDeckDropArea.heightPixels*0.75 + currentDeckOfCards.length*fontBaseSizePrimary/2;
		}
		ctx.font = 600+" "+fontUISize*0.85+ "px "+fontFamilyPrimary;		
		if(!reviewModeGlobal){
			ctx.fillText("DRAG PASSENGER TO A SEAT", layoutDeckDropArea.posxPixels, msgBelowYpos);		
			if(currentDeckOfPassengerInfo.length>1){
				ctx.fillText("(SELECT CARD TO CYCLE GROUP)", layoutDeckDropArea.posxPixels, msgBelowYpos+fontUISize*1.2);					
			}
		}else{
			ctx.font = 600+" "+fontUISize*0.8+ "px "+fontFamilyPrimary;		

			ctx.fillText(reviewFeedbackText, layoutDeckDropArea.posxPixels, msgBelowYpos);
		}

		ctx.globalAlpha=1;
	}


	
	
	
	if(0){

		var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
		var highlightScale = 0.8;
		var highlightWidth = seatWidth*highlightScale;
		var highlightShift = (seatWidth/2)*highlightScale;
		var sx=0;
		var sy=0;
		ctx.save();
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (i+0.5)*seatWidth;
				sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (j+0.5)*seatWidth;

				if(i>2){
					sx +=seatWidth;
				}

				ctx.strokeRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);

				ctx.fillStyle="black";
				ctx.textAlign = "center";

				ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
				
				
				if(arrayOfSeatedPassengers[i][j]!=null){
					
					ctx.fillText(arrayOfSeatedPassengers[i][j].name, sx,sy);
				}
			}
		}
		ctx.restore();
	
		
		ctx.fillStyle="black";
		ctx.font = fontUI;
		ctx.fillText("deck length:"+currentDeckOfCards.length, cw/2,20);

	
	}


	if(isShowingHelp){
		introScreen.updateAndDraw();
		btnResume.updateAndDraw();
	}

	if(isShowingResetConfirmation){
		transpOverlay.updateAndDraw();
		areYouSure.updateAndDraw();
		resetYes.updateAndDraw();
		resetNo.updateAndDraw();
		
 
	}

	pointerDownGlobalOneOffWarning=false;
	pointerUpGlobalOneOffWarning=false;
	pointerClickedInPlaceGlobalOneOffWarning=false;

	if(showWarning!=""){
		var pulseAlpha = Math.sin(timeCounter/5)/4;
		var pulseBeta = Math.sin(Math.PI+timeCounter/5)/4;
		if(showWarningCounter<showWarningCutoff){ctx.globalAlpha=showWarningCounter/showWarningCutoff;}
		ctx.globalAlpha = 0.5+pulseAlpha;
				
		
		if(warningSeatList.length>0){
			highlightSeats(warningSeatList,colorBadStrong);
		}
			
		
			
		
		ctx.font=fontUI;
		ctx.fillStyle=colorBadStrong;
		var warnWidth = layoutAreaForCards.widthPixels*0.8;
		ctx.globalAlpha= 1;
		ctx.fillRect(layoutDeckDropArea.posxPixels-warnWidth/2, msgAboveYpos-(fontUISize*1.25), warnWidth, fontUISize*2);
		ctx.fillStyle="white";
		ctx.globalAlpha= 1+pulseBeta;
		ctx.fillText(showWarning, layoutDeckDropArea.posxPixels, msgAboveYpos);
		if(showWarningCounter>0){
			showWarningCounter-=1;
		}else{
			showWarning=false;
			showWarningCounter=showWarningDelay;
		}
		
		
		for(var i=0;i<arrayOfSeatedComponents.length;i++){			
			arrayOfSeatedComponents[i].updateAndDraw();
		}

	}
	

	
	if(0){
 		if(ww<minWidth || wh<minHeight){
			screenSizeAndPropSupported=false;
			
			sizeWarning.updateAndDraw();
			introText.style.opacity="0";
 			
			ctx.font=fontUI;
			ctx.fillStyle="white";
 			ctx.globalAlpha= 1;
 			ctx.fillText(ww+"x"+wh, ww/2, wh*(2/3));
			
		}else{
			screenSizeAndPropSupported=true;
		}
	}
	
	
	if(0){
		
		if(screenPropCurrent>canvasPropPortrait && screenPropCurrent<canvasPropLandscape){
			screenSizeAndPropSupported=false;
			
			propWarning.updateAndDraw();
			introText.style.opacity="0";
		}else{
			screenSizeAndPropSupported=true;
		}
	}
	
	requestAnimationFrame(mainLoop); 
}




function component(label, posXRel, posYRel, shape, alpha, widthRel, heightRel, color, targetx, targety, targetAlpha, disabled) {	
	

	

	arrayOfComponents.push(this);

	this.easeSpeed=easeSpeedNormal;

	this.goHome=true;

	this.isSeated = false;
	this.lift=0;
	this.liftGoal = 0;

	this.mySeatPos=[-1,-1];

	this.fadeMeIn=true; 

	this.pointerIsHoveringMe=false;

	this.componentType="text"; 

	this.fontType="normal"; 

	this.strokeColor="black";
	this.strokeWidthRel=0;
	this.fontColor="white";

	this.paiPosPixels=[0,0]; this.paiSizePixels=[0,0];

	
	if(label=="root"){
		this.pai = "god";
	}else{
		this.pai = root;
	}
	
	
	this.stageIsPai = false; 


	

	this.id = generateUniqueID();
	this.pointerCameDownOnMe=false;
	this.pointerIsDownOnMe=false;
	this.pointerIsDraggingOnMe=false;
	
	this.pointerHoverStateOnMe="no"; 
	
	this.graphicScale=1;
	
	this.pointerClickOffsetX; this.pointerClickOffsetY; 

	this.deltaX; this.deltaY; this.deltaAlpha;

	
	this.compX1; this.compY1; this.compX2; this.compY2; 
	 	
	
	if (typeof label === 'undefined') {
		this.label = "Default value";
	}else{this.label=label}
	if (typeof posXRel === 'undefined') {
		
		this.posXRel = Math.random()*cw;
	}else{this.posXRel=posXRel;}
	if (typeof posYRel === 'undefined') {
		
		this.posYRel = Math.random()*ch;
	}else{this.posYRel=posYRel;}
	if (typeof shape === 'undefined') {
		this.shape = "rectangle";
	}else{this.shape=shape}
	if (typeof alpha === 'undefined') {
		this.alpha = 1;
	}else{this.alpha=alpha}

	
	if(isGraphic(this.label)){this.componentType="graphic";}

	if(this.componentType!="graphic" && typeof this.label!="number"){
		this.isLayoutComponent = this.label.startsWith("layout") || this.label=="root";
	}
	
	
	ctx.font = fontPrimary;
	if (typeof widthRel === 'undefined') {
		if(this.componentType!="graphic"){
			this.widthPixels = ctx.measureText(this.label).width+paddingNormal*2; 
		}else{
			
			this.widthPixels=this.label.width; 
		}
		this.widthRel = "undefined";	
	}else{this.widthRel=widthRel}
	if (typeof heightRel === 'undefined') {
		this.heightPixels =fontBaseSizePrimary+paddingNormal*2; 
		this.heightRel = "undefined";	
	}else{this.heightRel=heightRel}
	if(this.componentType=="graphic"){
		this.heightPixels=this.label.height; 
	}


	
	if (typeof color === 'undefined') {
		
		this.color = randomColor();
	}else{
		this.color=color;
	}

	
	if (typeof disabled === 'undefined'){
		this.disabled=false;
	}else{this.disabled = disabled;}
	
	
    this.updateAndDraw = function() {
		

		
		if(this.passenger){
			this.passenger.id=this.id; 
			
			
			if(gameState=="showingFeedback"){
				if(this.passenger.feedback=="essential" || this.passenger.feedback=="preference" ){
					this.avatar.isSad=true;
				}
			}
		}
		
		
		if(!reviewModeGlobal){
			this.reviewMode=false;
			this.reviewAvatar=null;
		}
		if(this.passenger){ 
			if(this.reviewMode){
				this.passenger.reviewMode=true;
			}else{
				this.passenger.reviewMode=false;
			}
		}
		if(this.reviewMode){
			
			
			colorReviewMode=colorOrange;
			if(this.passenger.feedback=="essential"){
				colorReviewMode=colorBadLight;
			}
			
			
			
			drawCard(this.passenger,layoutDeckDropAreaPos,0,true);
			
			
			reviewFeedbackText="";
			if(this.passenger.feedback=="essential"||this.passenger.feedback=="preference"){
				if(typeof this.passenger.myReviewFeedbackText === 'undefined'){						
					reviewFeedbackText="PREFERENCE NOT SATISFIED"; 
				}else{
					reviewFeedbackText=this.passenger.myReviewFeedbackText.toUpperCase()
				}
			}
			
			
			if(!this.reviewAvatar){
				moveToTop(this.id);
				this.reviewAvatar = new avatarGraphic(0,layoutDeckDropAreaPos[0],layoutDeckDropAreaPos[1]); 
			}else{
				this.reviewAvatar.passport=this.passenger.passport;
				this.reviewAvatar.sizePixels = cardWidth/15;
				this.reviewAvatar.x = layoutDeckDropAreaPos[0]-(cardWidth/2)+(cardWidth/5);
				this.reviewAvatar.y = layoutDeckDropAreaPos[1]-(cardHeight/2)+(cardHeight/3);		
				if(this.avatar.isSad){this.reviewAvatar.isSad=true;}

				
				this.reviewAvatar.updateAndDraw();	
			}
			
			
			if(this.passenger.feedback!="essential" && this.passenger.feedback!="preference"){
				var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
				var highlightScale = 0.85;
				var highlightWidth = seatWidth*highlightScale;
				var highlightShift = (seatWidth/2)*highlightScale;
				var sx=0;
				var sy=0;
				ctx.save();
				
				sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (this.mySeatPos[0]+0.5)*seatWidth;
				sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (this.mySeatPos[1]+0.5)*seatWidth;

				if(this.mySeatPos[0]>2){
					sx +=seatWidth;
				}

				ctx.fillStyle=colorReviewMode;
				ctx.fillRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);

			

				ctx.fillStyle="black";
				ctx.textAlign = "center";

				ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
								
				ctx.restore();
			}
			
		}
			

			
		
		if(this.pointerIsHoveringMe){
			if(this.pointerHoverStateOnMe=="hovered"){this.pointerHoverStateOnMe="hovering";}
			if(this.pointerHoverStateOnMe=="no"){this.pointerHoverStateOnMe="hovered";}		
		}else{
			this.pointerHoverStateOnMe="no";
		}

		
		
		if(this.passenger && this.componentType!="card"){this.componentType="passenger";}


		

		if(this.pai=="god"){
			this.paiPosPixels=[cw/2,ch/2];
			this.paiSizePixels=[cw,ch];
		}else{
			this.paiPosPixels=[this.pai.posxPixels,this.pai.posyPixels];
			this.paiSizePixels=[this.pai.widthPixels,this.pai.heightPixels];
		}
		
		
		if(this.justGotaDad){
			if(this.posxPixels!=undefined && this.posyPixels!=undefined){
				this.posXRel = (this.posxPixels-(this.paiPosPixels[0]-this.paiSizePixels[0]/2))/this.paiSizePixels[0];
				this.posYRel = (this.posyPixels-(this.paiPosPixels[1]-this.paiSizePixels[1]/2))/this.paiSizePixels[1];
				
		}
			
			this.justGotaDad=false;
		}

	
		
		
		this.fontSize = fontBaseSizePrimary;
		this.font = fontPrimary;
		if(this.fontType=="UI" || this.componentType=="card"){
			this.fontSize = fontUISize;
			this.font = fontUI;		
		}
		if(this.componentType=="stat"){
			this.font = 600+" "+fontUISize*1.2	+ "px "+fontFamilyPrimary;			
		}
		if(this.fontType=="bigButton" ){
			this.fontSize = fontBigButtonSize;
			this.font = fontBigButton;		
		}
		ctx.font = this.font;
	
 
		
		this.posxPixels=this.paiPosPixels[0]-this.paiSizePixels[0]/2+(this.posXRel*this.paiSizePixels[0]);
		this.posyPixels=this.paiPosPixels[1]-this.paiSizePixels[1]/2+(this.posYRel*this.paiSizePixels[1]);
		
		
		if(this.anchorTop){this.posyPixels+=this.heightPixels/2;}
		if(this.anchorBottom){this.posyPixels-=this.heightPixels/2;}
		if(this.anchorLeft){this.posxPixels+=this.widthPixels/2;}
		if(this.anchorRight){this.posxPixels-=this.widthPixels/2;}

		if(this.componentType=="card" && !this.pointerIsDraggingOnMe){
			
			this.lift+=(this.liftGoal-this.lift)/easeSpeedNormal;

		}


		
		if(this.passenger && !this.avatar ){
			
			this.avatar = new avatarGraphic(0,this.posxPixels,this.posyPixels); 
			
 				
			this.avatar.targetx=this.posxPixels;
			this.avatar.targety=this.posyPixels;

			this.avatar.isSad=false;
			
			this.avatar.easeSpeed =1; 
		}
		
		
		
		if(this.componentType!="graphic"){ 
			if (this.widthRel == "undefined") {
				this.widthPixels = ctx.measureText(this.label).width+paddingNormal*2; 
				if(this.fontType=="bigButton"){this.widthPixels*=1.4;}
			}else{
				if(!this.widthPropHeight){	
					this.widthPixels = this.widthRel*this.paiSizePixels[0]; 
				}
			}
			if (this.heightRel == "undefined") {
				this.heightPixels =this.fontSize+paddingNormal*2;
				if(this.fontType=="bigButton"){this.heightPixels*=1.4;}
			}else{		
				if(!this.heightPropWidth){
					this.heightPixels = this.heightRel*this.paiSizePixels[1]; 
				}
			}
		}else{
			
			if(this.graphicScale=="fitDadHeight"){
				
				this.heightRel = 1;
			}
			this.heightPixels = this.heightRel*this.paiSizePixels[1];
			this.graphicScale=this.heightPixels/this.label.height;
			this.widthPixels = this.label.width*this.graphicScale; 
		}


		if(this.componentType=="card"){
			this.color="AliceBlue";
			this.widthPixels=cardWidth; 
			this.heightPropWidth=cardHeightPropWidth;
		}

		
		
		if(this.widthPropHeight){this.widthPixels = this.heightPixels*this.widthPropHeight;}
		if(this.heightPropWidth){this.heightPixels = this.widthPixels*this.heightPropWidth;}
		
		
		if(this.pointerIsDraggingOnMe){
			if(debug){
				ctx.fillStyle = "red";
				ctx.fillRect(this.compX1-this.fontSize*2, this.compY1-this.fontSize,this.fontSize,this.fontSize);
			}			

			
			if((this.actionOnDrag=="drag"||keyShift) && topmostComponentOnLocationOfLastPointerDown==this){
				addToDebugText(this.label+" being dragged. Random:"+Math.random());

				
				if(this.componentType=="passenger"){
					
					gameState="waitingPlayerPlacePassenger";
					
					
					
					
					this.targetx=mouseXlock;
					this.targety=mouseYlock;

					
					
					

				}else{
					
					this.targetx=mouseX+this.pointerClickOffsetX;
					this.targety=mouseY+this.pointerClickOffsetY;
				}

		
		}
		}

		
		
		if(this.componentType=="card" && !this.pointerIsDraggingOnMe && !this.goHome && !this.isSeated){
			
			this.goHome=true;
		}

 

		
		if(this.passenger && !this.disabled){

			
			
			this.nextToSeatMap =false;
			if(isPortrait){
				if(this.pointerIsDraggingOnMe){
					if(mouseY<(layoutSeatmap.posyPixels+layoutSeatmap.heightPixels/2)){this.nextToSeatMap =true;}
				}else{
					if(this.posyPixels<(layoutSeatmap.posyPixels+layoutSeatmap.heightPixels/2)){this.nextToSeatMap =true;}					
				}
			}else{
				if(this.pointerIsDraggingOnMe){
					if(mouseX<(layoutSeatmap.posxPixels+layoutSeatmap.widthPixels/2)){this.nextToSeatMap =true;}
				}else{
					if(this.posxPixels<(layoutSeatmap.posxPixels+layoutSeatmap.widthPixels/2)){this.nextToSeatMap =true;}					
				}
			}
			
			if(this.pointerIsDraggingOnMe && this.nextToSeatMap && this.componentType!="passenger" && topmostComponentOnLocationOfLastPointerDown==this){
 				this.componentType="passenger";
				this.anchorLeft=false;
				parentComponents(this,layoutSeatmap,true);
			}
			
			if((this.pointerIsDraggingOnMe && !this.nextToSeatMap  && this.componentType!="card" && topmostComponentOnLocationOfLastPointerDown==this)||this.goHome){
  
				if(this.goHome){
					
					var fanAmount = this.widthPixels/70; 
					this.targety=layoutDeckDropArea.posyPixels+this.passenger.myPosInDeck*fanAmount;
					this.targetx=layoutDeckDropArea.posxPixels+this.passenger.myPosInDeck*fanAmount;
				}else{							
					
					this.targety=layoutDeckDropArea.posyPixels;
					this.targetx=layoutDeckDropArea.posxPixels;
				}
				

				this.componentType="card";

				if((Math.abs(this.posxPixels-layoutDeckDropArea.posxPixels)<practicallyZero)&&(Math.abs(this.posyPixels-layoutDeckDropArea.posyPixels)<practicallyZero)){
					parentComponents(this,layoutDeckDropArea,true);	 
					this.goHome=false; 
					
				}
			}
		
		}

		
		
		if(this.pointerIsDraggingOnMe){this.easeSpeed=easeSpeedFast;} 
		if(typeof this.targetx !== 'undefined') {			
			this.deltaX = this.targetx-this.posxPixels;
			if (Math.abs(this.deltaX)<practicallyZero){
				this.posxPixels=this.targetx;
				this.targetx=undefined;
			}
			this.posxPixels += this.deltaX/this.easeSpeed;
 			
			
			
			this.posXRel = (this.posxPixels-(this.paiPosPixels[0]-this.paiSizePixels[0]/2))/this.paiSizePixels[0];
 			
			
			if(this.anchorLeft){this.posXRel -= (this.widthPixels/2)/this.paiSizePixels[0];}
			if(this.anchorRight){this.posXRel += (this.widthPixels/2)/this.paiSizePixels[0];}					
			
		}
		if(typeof this.targety !== 'undefined') {
			this.deltaY = this.targety-this.posyPixels;
			if (Math.abs(this.deltaY)<practicallyZero){
				this.posyPixels=this.targety;
				this.targety=undefined;
			}
			this.posyPixels += this.deltaY/this.easeSpeed;


			
			this.posYRel = (this.posyPixels-(this.paiPosPixels[1]-this.paiSizePixels[1]/2))/this.paiSizePixels[1];
			
			
			if(this.anchorTop){this.posYRel -= (this.heightPixels/2)/this.paiSizePixels[1];}
			if(this.anchorBottom){this.posYRel += (this.heightPixels/2)/this.paiSizePixels[1];}			
		}
		
		if(this.targetx==undefined && this.targety==undefined){
			this.easeSpeed=easeSpeedNormal;
		}
 
		
		
		if (typeof this.targetAlpha !== 'undefined') {
			this.deltaAlpha = this.targetAlpha-this.alpha;
			if (this.actionOnFade=="remove" && Math.abs(this.deltaAlpha)<practicallyZero){removeComponent(this.id);}
			this.alpha += this.deltaAlpha/this.easeSpeed;
		}

		
		if(pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
			
			
			this.pointerIsHoveringMe=true;

			if(this.componentType=="button" || this.isButton){this.highlight=true;}
			
			
			if(this.label=="layoutSeats"){
				mouseLockedToGrid=true;

				
				this.pixelsPerColumn = this.widthPixels/columnCountWithAisle;
				this.mouseXPosRelToThis = (mouseX+this.pixelsPerColumn/2-(this.posxPixels-this.widthPixels/2));
				this.mouseXPosInColumns = this.mouseXPosRelToThis/this.pixelsPerColumn;
				if(Math.round(this.mouseXPosInColumns)!=4){ 
					this.mouseXPosInColumnsRound = Math.round(this.mouseXPosInColumns);
				} else{
					this.mouseXPosInColumnsRound = 3;
				}
				mouseXlock=(this.posxPixels-this.widthPixels/2)+this.mouseXPosInColumnsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;

				
				this.pixelsPerRow = this.heightPixels/rowCount;
				this.mouseYPosRelToThis = (mouseY+this.pixelsPerRow/2-(this.posyPixels-this.heightPixels/2));
				this.mouseYPosInColumns = this.mouseYPosRelToThis/this.pixelsPerRow;
				this.mouseYPosInRowsRound = Math.round(this.mouseYPosInColumns);
				mouseYlock=(this.posyPixels-this.heightPixels/2)+this.mouseYPosInRowsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;
				
				
				
				
				if(this.mouseXPosInColumnsRound>3){this.mouseXPosInColumnsRound-=1;}
				
				
				if(typeof this.mouseXPosInColumnsRound !== 'undefined'){
					seatMapGridActivePos=[this.mouseXPosInColumnsRound,this.mouseYPosInRowsRound];
					
				}

			}

			if(this.componentType=="passenger"){
				this.avatar.smileSizeTarget=0.25;
 			}
			
			if(this.componentType=="card" && this.passenger.myPosInDeck==0){this.liftGoal=paddingNormal/2;}			
		}else{
			
			this.pointerIsHoveringMe=false;

			if(this.componentType=="button" || this.isButton){this.highlight=false;}
			
			if(this.componentType=="card"){
				this.liftGoal=0;
			}
			
			if(this.label=="layoutSeats"){
				mouseLockedToGrid=false;
			}
		}

		
		if(pointerDownGlobalOneOffWarning){
			if(showWarning!==""){
				showWarningCounter=showWarningCutoff;
			}
			
			if(!isShowingResetConfirmation||this==resetYes||this==resetNo){
				
				if(pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
					this.pointerIsDownOnMe=true;
					if(!this.disabled){
						this.pointerClickOffsetX = this.posxPixels-mouseX;
						this.pointerClickOffsetY = this.posyPixels-mouseY;
						
						
						topmostComponentOnLocationOfLastPointerDown=this;
						
						this.targetx=undefined;
						this.targety=undefined;

						if(this.passenger){
							lastObjectWithPassengerClickedOrDragged=this;
							
						}
					}				
					if(this.passenger){

					}
					if(this==layoutSeats){
						seatMapGridPosOnPointerUpOrDown=seatMapGridActivePos;
						
					}

				}			
			}
			
		}


		if(pointerClickedInPlaceGlobalOneOffWarning && this.pointerIsHoveringMe){
			if(!isShowingResetConfirmation){
				if(this.componentType=="passenger"){
					
					for(var i=0;i<arrayOfComponents.length;i++){
						arrayOfComponents[i].reviewMode=false;
					}
					this.reviewMode=true;
					reviewModeGlobal=true;
				}else{				
					if(reviewModeGlobal){ 
						this.reviewMode=false;
						reviewModeGlobal=false;
						btnCreateDeck.pointerIsDownOnMe=false; 
					}
				}
			}
		}


		
		if(this.pai!="root"){
			
			if(this.inheritPos){ 
			}			
			
			
			if(0 && this.pai!=root){
				ctx.beginPath();
				ctx.moveTo(this.posxPixels, this.posyPixels);
				ctx.lineTo(this.pai.posxPixels, this.pai.posyPixels);
				ctx.lineWidth=strokeBaseThickness/2;
				ctx.strokeStyle="black";
				ctx.globalAlpha=0.2;
				ctx.stroke();			
				ctx.globalAlpha=1;
			}
		}
		
	
		
		if(this.pointerIsDownOnMe && (!reviewModeGlobal||this==componentIconReset||this==resetYes||this==resetNo)){
			if(debug){
				ctx.fillStyle = "yellow";
				ctx.fillRect(this.compX1-this.fontSize, this.compY1-this.fontSize,this.fontSize,this.fontSize);
			}

			
			if(((Math.abs(mouseX-this.posxPixels+this.pointerClickOffsetX)>dragDelta)||(Math.abs(mouseY-this.posyPixels+this.pointerClickOffsetY)>dragDelta))&&!this.pointerIsDraggingOnMe){
				
				
				if(this.passenger && layoutSeatmap.pointerIsDraggingOnMe){
					
					
					for(var i=0; i<currentDeckOfCards.length;i++){
						
					}
					
					this.isSeated=false;
					this.mySeatPos=[-1.-1];
					
					currentDeckOfPassengerInfo.unshift(this.passenger);
					currentDeckOfCards.unshift(this);
					
					
					for(var i=0; i<currentSeatedDeck.length;i++){
						
					}
					
					for(var i=0; i<currentSeatedDeck.length;i++){
						if(currentSeatedDeck[i].id==this.id){
							currentSeatedDeck.splice(i,1);
						}
					}

					
					
					for(var i=0; i<currentDeckOfCards.length;i++){
						
					}
					


					moveToTop(this.id);
					for(i=1;i<currentDeckOfPassengerInfo.length;i++){
						currentDeckOfPassengerInfo[i].myPosInDeck+=1;
						currentDeckOfCards[i].myPosInDeck+=1;
					}					
					
					

					
					
					for(var i=0; i<currentDeckOfCards.length;i++){
						
					}
					


					
					
					for(var i=0; i<currentSeatedDeck.length;i++){
						
					}

					arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=null;					
					totalPassengersSeated-=1;
					
					
				}
				this.pointerIsDraggingOnMe=true;
			}
			
			
			if(!pointerDown){
		
 
				
				if(!this.pointerIsDraggingOnMe && pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
					
				
				
					
					if(this.componentType=="card" && this.passenger.myPosInDeck==0 && currentDeckOfCards.length>1){

						
								
						if(1){ 
					
							
							var tempCardArray = [];
							var tempCard;
							var tempCurrDeckLength = currentDeckOfCards.length;
							for(var i=0;i<tempCurrDeckLength;i++){
								tempCard = currentDeckOfCards[0]; 
								currentDeckOfPassengerInfo.splice(0,1);
								currentDeckOfCards.splice(0,1);		
								
								tempCardArray.push(tempCard);
							}

							
							currentDeckOfPassengerInfo.push(tempCardArray[0].passenger);
							currentDeckOfCards.push(tempCardArray[0]);
							currentDeckOfPassengerInfo[0].myPosInDeck=tempCurrDeckLength-1; 
							currentDeckOfCards[0].myPosInDeck=tempCurrDeckLength-1;  
			
							
							var newMyPos;
							for(var i=tempCardArray.length-1;i>0;i--){	
								tempCard=tempCardArray[i];
								currentDeckOfPassengerInfo.unshift(tempCard.passenger);
								currentDeckOfCards.unshift(tempCard);
								moveToTop(tempCard.id);
								newMyPos=tempCurrDeckLength-currentDeckOfCards.length;
								currentDeckOfPassengerInfo[0].myPosInDeck=newMyPos;
								currentDeckOfCards[0].myPosInDeck=newMyPos;
							}					
						}

						
					}
					
					
					if(this.actionOnClick=="fadeOutAndRemove"){
						this.actionOnFade="remove";
						this.fadeOut();
					}
					if(this.actionOnClick=="remove"){
						removeComponent(this.id);
					}
					if(this.actionOnClick=="changeColor"){
						this.color="green";
					}
					if(this.actionOnClick=="startGame"){
						introText.style.opacity="0";
						gameState="beforeFirstPassenger";
					}
					if(this.actionOnClick=="createNewCardDeck" || this.actionOnClick=="submit"){
						if(!reviewModeGlobal){
							loneSeats=checkForLoneSeats();
							if(loneSeats.length>0){
								
								warningSeatList=loneSeats;
								showWarning=loneSeatsMsg;
								showWarningCounter=showWarningDelay;	
							}else{
								
								for(i=0;i<currentSeatedDeck.length;i++){
									currentSeatedDeck[i].disabled=true;
								}
								currentSeatedDeck=[];								
								if(this.actionOnClick=="createNewCardDeck"){								
									
									
									gameState="createNewCardDeck";
								}
								if(this.actionOnClick=="submit"){
									
									gameState="showFeedback";						
								}
							}
						}
					}					

					if(this.actionOnClick=="reload"){
						
						isShowingResetConfirmation=true;
					}
					
					if(this.actionOnClick=="chaos"){
						for(var i=1;i<arrayOfComponents.length;i++){
							if(!arrayOfComponents[i].pointerIsDownOnMe && !arrayOfComponents[i].pointerIsDraggingOnMe && arrayOfComponents[i].pai==this.pai){
								arrayOfComponents[i].targetx=this.paiPosPixels[0]-this.paiSizePixels[0]/2+(Math.random()*this.paiSizePixels[0]);
								arrayOfComponents[i].targety=this.paiPosPixels[1]-this.paiSizePixels[0]/2+(Math.random()*this.paiSizePixels[1]);
							}
						}	
					}

					if(this.actionOnClick=="showHelp"){
						if(screenSizeAndPropSupported){
							introText.style.opacity="1";
						}else{
							introText.style.opacity="0";
							
						}
 						
						isShowingHelp=true;
						
					}
					if(this.actionOnClick=="resumeGame"){
						introText.style.opacity="0";
 						
						isShowingHelp=false;						
					}

					if(this.actionOnClick=="resetNo"){
 						
						isShowingResetConfirmation=false;
					}

					if(this.actionOnClick=="resetYes"){
						myReload();
					}

	
				}
				
				
				if(this.pointerIsDraggingOnMe && !this.isSeated){ 
					
					if(typeof lastObjectWithPassengerClickedOrDragged !== 'undefined'){
						if(this.passenger && lastObjectWithPassengerClickedOrDragged==this){
							
							if(layoutSeats.pointerIsHoveringMe){ 
								
								
								
								var tgx = seatMapGridPosOnPointerUpOrDown[0];
								var tgy = seatMapGridPosOnPointerUpOrDown[1];
								if(typeof tgx==='undefined' || tgx==0){
									seatMapGridPosOnPointerUpOrDown[0]=3;
									
								}
								if(typeof tgy==='undefined' || tgy==0){seatMapGridPosOnPointerUpOrDown[1]=5;}
								if(typeof tgx!=='undefined' && tgx!=0 && typeof tgy!=='undefined' && tgy!=0){
									checkPlacingVar = checkPlacing();
									if(checkPlacingVar=="accept"){
										
										
										totalPassengersSeated+=1;

										this.isSeated=true;
										this.componentType="passenger";

										
										
										
	 
										
										arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=lastObjectWithPassengerClickedOrDragged.passenger;
										this.mySeatPos=[(seatMapGridPosOnPointerUpOrDown[0]-1),(seatMapGridPosOnPointerUpOrDown[1]-1)];
										
										
										if(currentDeckOfPassengerInfo.length>1){						
											for(i=this.passenger.myPosInDeck+1;i<currentDeckOfPassengerInfo.length;i++){
												
												currentDeckOfPassengerInfo[i].myPosInDeck-=1;
												currentDeckOfCards[i].myPosInDeck-=1;
											}
										}
										currentDeckOfPassengerInfo.splice(this.passenger.myPosInDeck,1);
										currentDeckOfCards.splice(this.passenger.myPosInDeck,1);
										currentSeatedDeck.push(this);
																				
										
										if(currentDeckOfPassengerInfo.length==0){
											

											
											if(arrayOfPassengers.length>0){
												gameState="showNextButton";
											}else{
												gameState="showSubmitButton";
											}
										}
										
										var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
										if(seatMapGridPosOnPointerUpOrDown[0]<4){seatMapGridPosOnPointerUpOrDown[0]=seatMapGridPosOnPointerUpOrDown[0]-1;}
										this.targetx=layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (seatMapGridPosOnPointerUpOrDown[0]+0.5)*seatWidth;
										this.targety=layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (seatMapGridPosOnPointerUpOrDown[1]-1+0.5)*seatWidth;
										
										
										this.goHome=false;
										this.pointerIsDraggingOnMe=false;
									}
									if(checkPlacingVar=="occupied"){ 
										
										
										this.goHome=true;
										
										showWarning="Seat already occupied";
										showWarningCounter=showWarningDelay;
										warningSeatList=[[seatMapGridPosOnPointerUpOrDown[0]-1,seatMapGridPosOnPointerUpOrDown[1]-1]];
										
										this.mySeatPos=[-1,-1];
										
										
										
										
										for(var i=0;i<columnCount;i++){
											for(var j=0;j<rowCount;j++){
												if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
													if(arrayOfSeatedPassengers[i][j].name==this.passenger.name){													
														arrayOfSeatedPassengers[i][j]=null;
														
													}
												}
											}
										}
									}
								}else{
									this.goHome=true;
									
									lastObjectWithPassengerClickedOrDragged=undefined;									
								}
								
							}else{
									this.goHome=true;
									
							}
						}
					}
				}

				this.pointerIsDownOnMe=false;
				this.pointerIsDraggingOnMe=false;
				this.highlight=false;
				topmostComponentOnLocationOfLastPointerDown=null;
			}
		}
		
		if(this.disabled && this.componentType=="passenger"){
			this.avatar.headShakeAmountTarget*=0.98;
		}

		if(pointerUpGlobalOneOffWarning && this.pointerIsHoveringMe){
			if(this.passenger){
				if(this.disabled){
					
				}
			}
			if(this==layoutSeats){
				
				seatMapGridPosOnPointerUpOrDown=seatMapGridActivePos;
			}
			

		}





		
		if(this.passenger){		
			if(Math.random()<0.001){
				this.avatar.eyeOpeness=0;		
			}	
		}
	
		


		
		
		this.compX1 = this.posxPixels-(this.widthPixels/2);
		this.compY1 = this.posyPixels-(this.heightPixels/2);
		this.compX2 = this.compX1+this.widthPixels;
		this.compY2 = this.compY1+ this.heightPixels;
		
		
		



				
		
		ctx.globalAlpha = this.alpha;
		
		if(this.color!="none" && this.componentType!="passenger" && this.componentType!="card"){ 
			ctx.fillStyle = this.color;

			if(this.pointerHoverStateOnMe=="hovered"){ 

			}
						
			if(this.shape=="rectangle"){
				ctx.fillRect(this.compX1, this.compY1, this.widthPixels, this.heightPixels);
				
				if(this.highlight){ 
					ctx.save();
					ctx.fillStyle = colorHighlight10pct;
					ctx.fillRect(this.compX1, this.compY1, this.widthPixels, this.heightPixels);
					ctx.restore();
				}
			}
			ctx.shadowColor = "transparent";
		}
		if(this.strokeWidthRel>0){
			ctx.strokeStyle = this.strokeColor;
			ctx.lineWidth = this.strokeWidthRel*strokeBaseThickness*(this.widthRel*3);
			ctx.strokeRect(this.compX1, this.compY1, this.widthPixels, this.heightPixels);
		}else{
			ctx.lineWidth = 0;			
		}

		if(this.shape=="circle"){
			if(this==statTimer && timerOn){
				this.widthPixels+=Math.sin(timeCounter/5)*this.widthPixels/32;
			}
			var blimp = this.strokeWidthRel*strokeBaseThickness*(this.widthRel*3);
			if(this.componentType=="stat"){blimp=0;}
			drawCircle(this.posxPixels, this.posyPixels, this.widthPixels/2,this.color, true, "black", blimp);				
		}
		

		
		ctx.font = this.font;
		if(this.componentType=="text" || this.componentType=="button" || this.componentType=="stat"){
			ctx.fillStyle = this.fontColor;
			if(this.color=="none"){
					ctx.fillStyle="black";
			}
			ctx.textAlign = "center";
			
			var yp = this.posyPixels+this.fontSize/4;
			if(this.shape=="circle"){yp+=this.fontSize/2.5;}
			ctx.fillText(this.label, this.posxPixels, yp);
			ctx.globalAlpha=1;
			if(this.hint){
				
				ctx.font = fontHint;
				ctx.globalAlpha=0.5;
				ctx.fillStyle = colorShadow50pct;
				ctx.fillText(this.hint, this.posxPixels, yp+this.heightPixels*0.9);
				ctx.globalAlpha=1;
			}
		}
		
		
		
		if(this.componentType=="card"){
			
			drawCard(this.passenger,[this.posxPixels,this.posyPixels],this.lift,false	);
			
		}
		
		
		if(this.componentType=="graphic"){
			myDrawImage(this.label,this.compX1, this.compY1,this.graphicScale);
			
			if(this.highlight){ 
				ctx.save();
				ctx.filter = "contrast(1.2)";
				myDrawImage(this.label,this.compX1, this.compY1,this.graphicScale);
				ctx.restore();
			}
			
			
		}
		if(typeof this.passenger !== 'undefined'){ 


			this.avatar.passport = this.passenger.passport;
			if(this.componentType=="card"){
				this.avatar.targetx = this.posxPixels-(this.widthPixels/2)+(this.widthPixels/5)-this.lift;
				this.avatar.targety = this.posyPixels-(this.heightPixels/2)+(this.heightPixels/3)-this.lift;				
				this.avatar.sizePixels = this.widthPixels/15;
			}else{
				this.avatar.targetx = this.posxPixels;
				this.avatar.targety = this.posyPixels;		
				this.widthRel=1/columnCountWithAisle;
				this.widthPixels=this.widthRel*layoutSeats.widthPixels;
				this.avatar.sizePixels = this.widthPixels/3;
			}
			
			
			if(this.passenger!=passengerPreseat){
				this.avatar.x += (this.avatar.targetx-this.avatar.x)/this.avatar.easeSpeed;
				this.avatar.y += (this.avatar.targety-this.avatar.y)/this.avatar.easeSpeed;		
			}else{
				this.avatar.x += (this.avatar.targetx-this.avatar.x);
				this.avatar.y += (this.avatar.targety-this.avatar.y);	
			}

			if(!this.disabled && this.componentType!="card" && !this.pointerIsDraggingOnMe){
				
				this.avatar.y+=Math.sin((Math.PI)*this.id+timeCounter/6)*2;					
			}
			
			this.avatar.updateAndDraw();
		}
		

		
		if(0){
			
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(this.targetx, this.posxPixels, 100+this.posyPixels+this.fontSize*1.5);			
		}
		if(0){
			
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(this.id, this.posxPixels, this.posyPixels+this.fontSize*1.5);			
			
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("offset:"+this.pointerClickOffsetX+","+this.pointerClickOffsetY, this.posxPixels, this.posyPixels-this.fontSize*1.5);
			ctx.fillText("pos:"+this.posxPixels+","+this.posyPixels, this.posxPixels, this.posyPixels-this.fontSize*3);
			ctx.fillText("paiPosPixels[]:"+this.paiPosPixels[0]+","+this.paiPosPixels[1], this.posxPixels, this.posyPixels+this.fontSize*3);
			ctx.fillText("this.color:"+this.color, this.posxPixels, this.posyPixels+this.fontSize*6);
 
		}
		
		ctx.globalAlpha = 1;
		
		if(debug && this.disabled){
			ctx.fillStyle = "purple";
			ctx.fillRect(this.compX1, this.compY1, this.widthPixels/10, this.heightPixels/10);
		}



    }
	
	this.fade = function(finalAlpha,initialAlpha){				
		if (typeof initialAlpha === 'undefined') {this.initialAlpha=0;}else{this.initialAlpha=initialAlpha;}
		if (typeof finalAlpha === 'undefined') {this.finalAlpha=1;}else{this.finalAlpha=finalAlpha;}
		this.alpha = this.initialAlpha;
		this.targetAlpha = this.finalAlpha;
	}
	this.fadeIn = function(){this.fade(1,0);}
	this.fadeOut = function(){this.fade(0,1);}
	
	
	if(!this.isLayoutComponent || this.componentType=="card"){
		this.fadeIn();
	}else{
		this.color = "white";
	}
			
    this.crashWith = function(otherobj) { 
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}


function addFakePixel(fakeX, fakeY, rgba) {									

	if(isBetween(fakeX,0,widthInFakePixels)&&isBetween(fakeY,0,heightInFakePixels)){
		fakePixelGrid[Math.floor(fakeX)][Math.floor(fakeY)]=rgba;
	}
	
}
function clearFakePixelGrid(rgba){
	for(i=0;i<widthInFakePixels;i++){
		fakePixelGrid[i]= new Array();
		for(j=0;j<heightInFakePixels;j++){
			fakePixelGrid[i][j] = rgba;
		}
	}
}
function addBorder(borderWidth, rgba){
	ctx.lineWidth=borderWidth;
	ctx.strokeStyle = rgba;
	ctx.strokeRect(0,0,cw,ch);	
}
function addBorderToCanvasF(borderWidth, rgba){
	
	for(i=0;i<widthInFakePixels;i++){		
		for(j=0;j<heightInFakePixels;j++){
			if(i<(borderWidth)||(i>widthInFakePixels-borderWidth-1)){
				
				addFakePixel(i, j, rgba);
			}else{
				
				if(j<(borderWidth)||(j>heightInFakePixels-borderWidth-1)){
					addFakePixel(i, j, rgba);
				}
			}
		}
	}		
}


function clearCanvas(){														


	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctxd.clearRect(0, 0, canvasd.width, canvasd.height);
	if(usingFakePixelsCanvas){
		ctxf.clearRect(0, 0, canvasf.width, canvasf.height);
	}


	if(0){ 
		ctx.fillStyle = "purple";
		ctx.fillRect(0,0,ww,wh);	

		if(usingFakePixelsCanvas){
			ctxf.fillStyle = "pink";
			ctxf.fillRect(0,0,ww,wh);
		}
	}

	
	
}
function myDrawImage(img,x,y,scale,deg){	
	if(typeof scale==='undefined'){
		this.scale=1;
	}else{this.scale=scale;}
	
	if(typeof deg==='undefined'){
		this.deg=0;
	}else{this.deg=deg;}
	
	this.width = img.width*this.scale;
	this.height = img.height*this.scale;
	
	
    ctx.save()

    
    var rad = this.deg * Math.PI / 180;

    
    ctx.translate(x + this.width / 2, y + this.height / 2);

    
    ctx.rotate(rad);

    
    ctx.drawImage(img,this.width / 2 * (-1),this.height / 2 * (-1),this.width,this.height);

    
    ctx.restore();
	
	
}


function drawFakePixelGrid(){														
	for(i=0;i<widthInFakePixels;i++){
		for(j=0;j<heightInFakePixels;j++){
			drawFakePixel(i,j,fakePixelGrid[i][j]);
		}
	}	
}
function drawFakePixel(fakeX, fakeY, rgba) {									
	ctxf.fillStyle = rgba;
	ctxf.fillRect(fakeX,fakeY,1,1);
	
}


function addToDebugText(line){
	debugText.push(line);
}
function randomFromSeed(seed) { 											

    var tempRandomCalc = Math.sin(seed) * 1000000;
	

    return tempRandomCalc - Math.floor(tempRandomCalc);

}
function toggle(targetVar){													
 
 	if(window[targetVar]){
		newValue = false;
	}else{
		newValue = true;
	}
 
	window[targetVar]=newValue;
}
function uniqueRandomNumber(){
	if(!window.alreadyGeneratedUniqueRandomNumbers){
		window.alreadyGeneratedUniqueRandomNumbers=[];
	}
	this.num=Math.random();
	while(alreadyGeneratedUniqueRandomNumbers.includes(this.num)){
		this.num= Math.random();
	}
	alreadyGeneratedUniqueRandomNumbers.push(this.num);
	return this.num;
}

function randomColor(seed,alpha){
 	if(typeof alpha==='undefined'){	this.alpha = 1;}else{this.alpha=alpha;}
	if(typeof seed==='undefined'){
		return "rgba("+Math.random()*255+", "+Math.random()*255+", "+Math.random()*255+", "+this.alpha+")"; 
	}else{
		this.seed=seed;
		return "rgba("+(randomFromSeed(this.seed)*255)+", "+(randomFromSeed(this.seed*2)*255)+", "+randomFromSeed(this.seed*3)*255+", "+this.alpha+")"; 		
	}
}



function isBetween(numberToTest,numA,numB){									
	
	var smallerNum = numA;
	var biggerNum = numB;
	
	if(numA>numB){
		smallerNum=numB; 
		biggerNum=numA;
	}

	if(numberToTest==smallerNum||numberToTest==biggerNum||(numberToTest>smallerNum && numberToTest<biggerNum)){
		return true;
	}else{
		return false;
	}
	
	
}
function pointIsWithinArea(point,shape,posx,posy,width,height){								
	if (typeof shape === 'undefined') {
		this.shape = "rectangle";
	}else{this.shape=shape}


	if(this.shape=="rectangle"){
		if((point[0]>(posx-width/2))&&(point[0]<(posx+width/2))&&(point[1]>(posy-height/2))&&(point[1]<(posy+height/2))){return true;}
	}

	if(this.shape=="circle"){
		if((Math.pow((point[0]-posx), 2)+Math.pow((point[1]-posy), 2))<Math.pow((width/2),2)){return true;}
	}	

	
	return false;
}
function pointsAreCloserThan(point1,point2,distance){	
	if((Math.abs(point1[0]-point2[0])<distance) && (Math.abs(point1[1]-point2[1])<distance)){
		return true;
	}
	return false;
}
function isGraphic(thing){
	if(typeof thing != "string" && typeof thing != "number"){
		return true;
	}else{
		return false;
	}
}
function drawCard(pass,pos,lift,reviewModeTemp){
	if(typeof reviewModeTemp==='undefined'){
		this.reviewModeTemp=false;
	}else{
		this.reviewModeTemp=reviewModeTemp;
	}
	
 
		
	
	var actualX = pos[0]-lift;
	var actualY = pos[1]-lift;
	
	
	
	
	
	
	var compX1 = actualX-(cardWidth/2);
	var compY1 = actualY-(cardHeight/2);
	var compX2 = compX1+cardWidth;
	var compY2 = compY1+ cardHeight;
 
	ctx.fillStyle="AliceBlue";
	ctx.globalAlpha=1;
	ctx.shadowColor = colorShadow10pct;	
	ctx.shadowBlur = paddingNormal;
	ctx.shadowOffsetX = +paddingNormal;
	ctx.shadowOffsetY = paddingNormal;		
 
 	ctx.fillRect(compX1, compY1, cardWidth, cardHeight);
 
	ctx.shadowColor = "transparent";

	if(this.reviewModeTemp){
 		ctx.fillStyle=colorReviewMode;
		ctx.fillRect(compX1, compY1, cardWidth, cardHeight);
 	}

 
	
	
	ctx.fillStyle = "black";			
	ctx.textAlign = "left";
	var fontSize = fontUISize;
	ctx.font = fontUI;				
	var lineHeightRel = 1.5;		
	
	ctx.fillText(pass.name, actualX-cardWidth/8, actualY-cardHeight/2+fontSize*2);
	ctx.globalAlpha=0.8;
	
	ctx.font = 400+" "+fontSize*0.9	+ "px "+fontFamilyPrimary;
	ctx.fillText(pass.age+"yo", actualX-cardWidth/8, actualY-cardHeight/2+fontSize*(2+lineHeightRel*1));
	
	if(typeof pass.pref !== 'undefined'){
		for(var i=0; i<pass.pref.length; i+=1){
			ctx.fillText(bulletPoint+" "+pass.pref[i], actualX-cardWidth/8, actualY-cardHeight/2+fontSize*(2+lineHeightRel*(2+i)));
		}
	}
	
	if(typeof pass.code !== 'undefined'){
		ctx.font = 600+" "+fontSize*0.7 + "px "+fontFamilyPrimary;
		
		var codeTextBoxWidth = ctx.measureText(pass.code).width+paddingNormal*2;
		ctx.fillRect(actualX+(cardWidth/2)-(cardWidth/7)-codeTextBoxWidth+paddingNormal, actualY-cardHeight/2+fontSize*(2+lineHeightRel/2), codeTextBoxWidth,fontSize);
		
		ctx.textAlign = "right";
		ctx.fillStyle="white";
		ctx.fillText(pass.code, actualX+(cardWidth/2)-cardWidth/7, actualY-cardHeight/2+fontSize*(2+lineHeightRel*1));
	}			
	ctx.globalAlpha=1;	

	
	if(typeof pass.group !== 'undefined'){
		ctx.globalAlpha=0.6;
		ctx.font = 400+" "+fontSize*0.8	+ "px "+fontFamilyPrimary;
		ctx.fillStyle="black";
		ctx.textAlign="left";
		ctx.fillText((pass.myNumInDeck+1)+"/"+(currentDeckOfCards.length+currentSeatedDeck.length), actualX-cardWidth/2+paddingNormal*1.5, actualY+cardHeight/2-paddingNormal*1.5);
		ctx.globalAlpha=1;
		
	}
	
	
	if(this.reviewModeTemp){
		var glowAmount=0.5;
		ctx.globalAlpha=(1-glowAmount)+glowAmount*Math.sin(timeCounter/8);
		ctx.fillStyle="black";
		if(pass.feedback=="essential"){ctx.fillStyle="white";}
		ctx.font = 900+" "+fontSize*0.9	+ "px "+fontFamilyPrimary;
		ctx.fillText("X", actualX+cardWidth/2-fontSize, actualY-cardHeight/2+fontSize*1.1);
		
	}
	
}

						
function groupIsTogether(i,j){
	
	var isTogLeft=false;
	var isTogRight=false;
	var groupCounter = 1;
	var tempPerson = arrayOfSeatedPassengers[i][j];
	var tempLine = [];
	tempLine.push(tempPerson);
	
	var pointer = i;
	
	
	
	
	
	while(pointer>0){
		pointer-=1;
		if(arrayOfSeatedPassengers[pointer][j]!=null){
			if(typeof arrayOfSeatedPassengers[pointer][j].group !== 'undefined'){
				if(arrayOfSeatedPassengers[pointer][j].group==tempPerson.group){
					groupCounter+=1;
					
				}else{					
					
					break;
				}
			}else{
				
				break; 
			}
		}else{
			
			break;
		}
	}
	pointer = i;
	
	
	while(pointer<columnCount-1){
		pointer+=1;
		if(arrayOfSeatedPassengers[pointer][j]!=null){
			if(typeof arrayOfSeatedPassengers[pointer][j].group !== 'undefined'){
				if(arrayOfSeatedPassengers[pointer][j].group==tempPerson.group){
					
					groupCounter+=1;
				}else{
					
					break;
				}
			}else{
				
				break; 
			}
		}else{
			
			break;
		}
	}
	
	
	var actualGroupCount=0;
	for(var a=0;a<arrayOfPassengersUntouched.length;a++){
		if(arrayOfPassengersUntouched[a].group==tempPerson.group){
			actualGroupCount+=1;
		}
	}
	
	
	
	
	if(groupCounter>1){
		tempPerson.isNextToAtLeastOnePersonFromGroup=true;
	}else{
		tempPerson.isNextToAtLeastOnePersonFromGroup=false;		
	}
	
	
	var result = groupCounter==actualGroupCount;

	
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			if(arrayOfSeatedPassengers[i][j]!=null){
				if(typeof arrayOfSeatedPassengers[i][j].group !== 'undefined'){
					if(arrayOfSeatedPassengers[i][j].group==tempPerson.group){
						arrayOfSeatedPassengers[i][j].myGroupIsTogether=result;
						
					}
				}
			}
		}
	}
	
	
	return result;
	
}

function loadAsset(name,ext,subFolder){												
	if(typeof subFolder==='undefined'){
		this.subFolder="";
	}else{
		this.subFolder=subFolder+"/";
	}

	assetCount+=1;

	window[name] = new Image();
	window[name].src="assets/"+this.subFolder+name+"."+ext;
	window[name].onload=function(){
		arrayOfAssets.push(this);
	}


}


function drawCircle(posx,posy,rad,fillColor, strokeAdd, strokeColor, strokeThickness){					
	if (typeof fillColor === 'undefined'){
		fillColor="none";
	}else{this.fillColor=fillColor;}

	if (typeof strokeAdd === 'undefined'){
		this.strokeAdd=false;
	}else{this.strokeAdd=strokeAdd;}
		
	ctx.beginPath();
	ctx.arc(posx, posy, rad, 0, 2 * Math.PI);
	if(fillColor!="none"){
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
	if(this.strokeAdd){
		if (typeof strokeThickness === 'undefined'){this.strokeThickness=strokeBaseThickness;}else{this.strokeThickness=strokeThickness;}
		if (typeof strokeColor === 'undefined'){this.strokeColor=strokeBaseColor;}else{this.strokeColor=strokeColor;}
		ctx.lineWidth = this.strokeThickness;
		ctx.strokeStyle = strokeColor;
		if(this.strokeThickness!=0){
			ctx.stroke();
		}
	}
}

function generateUniqueID() {			
  return Date.now().toString()+Math.random();
}

function removeComponent(id){													
	for(i=0;i<arrayOfComponents.length;i++){
		if(arrayOfComponents[i].id==id){
			arrayOfComponents.splice(i,1);
			break;
		}
	}
}





function distanceBetween(pointA,pointB){													
    var x1 = pointA[0];
    var x2 = pointB[0];
    var y1 = pointA[1];
    var y2 = pointB[1];	
    var z1 = pointA[2];
    var z2 = pointB[2];
	
	return Math.pow(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2) + Math.pow(z2 - z1,2), 1/2);
}

function onKeyUp(e) {

	if(e.keyCode == 16) { 		
		keyShift=false;
	}
	
	
	if(e.keyCode == 49){ 
		canvasRes=1;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 50){ 
		canvasRes=0.5;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 51){ 
		canvasRes=0.25;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 32) { 
		keySpace=false;
		
	}	
}

function onKeyDown(e) {														


	if(e.keyCode == 16) { 		
		keyShift=true;
	}
	
	if(e.keyCode == 82) { 		
			
			
			
		}
    if(e.keyCode == 37) { 		
    }
    else if(e.keyCode == 38) { 

    }
    else if(e.keyCode == 39) { 
    }
    else if(e.keyCode == 40) { 

    }
	else if(e.keyCode == 32) { 
		keySpace=true;
	}
    	
	if(e.keyCode == 85) { 
		}

	if(e.keyCode == 68) { 
		toggle("debug");
	}

	
	
	
	if(e.keyCode == 67) { 
		if(editor){
	
		}
	}
    if(e.keyCode > 47 && e.keyCode < 58) { 

		if(e.keyCode==48){
			paintColor=100;
		}else{
			paintColor = Math.floor(((e.keyCode-49+1)/9)*360);
		}

		
	} 
}

