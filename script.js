
 
if (1) {																	
	

	
	
	
	
	
		
		
		
		
	
	
		
	
	
	
	
	
	
	
	
	
	
	
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
		
	
	
					
	
	
	
	
	
	
 }
if (1) { 																	



var timeCounter = 0;	


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


loadAsset("svgExample1","svg");
loadAsset("svgExample2","svg");


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



var keySpace=false;
var keyShift=false;



var colorPrimary = "red";
var colorSecondary = "blue";
var colorShadow10pct = "rgba(0,0,0,0.1)";
var colorShadow20pct = "rgba(0,0,0,0.2)";
var colorShadow50pct = "rgba(0,0,0,0.5)";
var colorHighlight10pct = "rgba(255,255,255,0.1)";




var fontFamilyPrimary = "Arial";
var fontBaseSizePrimary;
var fontPrimary;

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


loadAsset("logo","png");
loadAsset("iconReset","svg");
loadAsset("iconHelp","svg");

var totalPassengersOriginallyInCue=0;
var totalPassengersSeated=0;

var statPercent=0;
var targetStatPercentage=0;

var timerOn = false;
var gameTimer = 0;
}

	
function onLoad(){															

	if(usingLocalStorage){
		readLocalVars();
	}
	initializeGeneralStuff();
	initializeProjectSpecificStuff();
	defineInputFunctions(); 	
}

function reload(){
	location.reload();
}

function adjustToCanvasSizeAndRes(event){ 									
	

	
	
	ww = window.innerWidth; 
	wh = window.innerHeight;
	
	
	
	canvas.width = ww * canvasRes;
	canvas.height = wh * canvasRes;	
	
	cw = canvas.width;
	ch = canvas.height;

	
	if(ww>wh){isPortrait = false;}else{isPortrait=true;}	
	if(ww<mobileWidth){isMobile=true;}else{isMobile=false;}

	
	
	fontBaseSizePrimary = 16*canvasRes; 
	if(isMobile){fontBaseSizePrimary=(fontBaseSizePrimary*0.5)+(fontBaseSizePrimary*0.5*(ww/mobileWidth));} 
	fontPrimary = fontBaseSizePrimary + "px "+fontFamilyPrimary;
	
	fontUISize=fontBaseSizePrimary*1.4;
	fontUI = 600+" "+fontUISize+ "px "+fontFamilyPrimary;
	fontBigButtonSize = fontBaseSizePrimary*2;
	fontBigButton = 400+" "+fontBigButtonSize+ "px "+fontFamilyPrimary;
	
	paddingNormal = fontBaseSizePrimary/1.5;
	strokeBaseThickness = 4*canvasRes;
	
	dragDelta = 10*canvasRes;

	
	if(window.layoutSeatmap){ 
		updateLayoutElements();
	}
	
	
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
window.addEventListener('resize', reload);				

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

	
	adjustToCanvasSizeAndRes();	

	
	
		if (assetCount==arrayOfAssets.length){
		allAssetsLoaded=true;
		requestAnimationFrame(mainLoop);
	}
		
	
	
	
	window.root = new component("root",0.5,0.5);
	root.widthRel = 1;
	root.heightRel = 1;
	
	
	root.fadeMeIn=false;
	
	
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
 
	
	
	
	
	window.passengerPreseat = {
		passport: 0,
		name: "Pre-Seated",
		age: 35,
		pref: "Already booked a seat."
	}
	
	var tempPassenger;
	window.arrayOfPassengers = []; 
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Robert Bob",
		age: 36
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Mary Merry",
		age: 25,
		code: "PREG"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Carlos Domingos",
		age: 30,
		code: "PWD"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Ingrid Illy",
		age: 29,
		code: "INF"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Billy McCoy",
		age: 6,
		code: "UMNR"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Carla Torres",
		age: 32,
		pref: ["Couple seating together"],
		group: "CarlaAndCharles",
		groupType: "couple",
		groupLeader: "true"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Charles Towers",
		age: 29,
		pref: "Couple seating together",
		group: "CarlaAndCharles",
		groupType: "couple",
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Jorge Estaquio",
		age: 44,
		pref: "Prefers aisle seat"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Amanda Pepper",
		age: 22,
		pref: "Prefers window seat",
		code: "NERV"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Hilds Hilst",
		age: 82
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Howard Happy",
		age: 78
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Mr. Smith",
		age: 29,
		pref: "Family seating together",
		group: "smiths",
		groupType: "family",
		groupLeader: "true"
	}
	arrayOfPassengers.push(tempPassenger);	
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Mrs. Smith",
		age: 30,
		pref: "Family seating together",
		group: "smiths",
		groupType: "family"
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Chad Smith",
		age: 7,
		group: "smiths",
		groupType: "family",		
	}
	arrayOfPassengers.push(tempPassenger);
	
	tempPassenger = {
		passport: uniqueRandomNumber(),
		name: "Peggy Smith",
		age: 10,
		group: "smiths",
		groupType: "family",		
	}
	arrayOfPassengers.push(tempPassenger);

	
	

	totalPassengersOriginallyInCue=arrayOfPassengers.length;
	


	
	window.gameState = "beforeFirstPassenger"; 


	
	window.rowCount=5;
	window.columnCount=6;
	window.emergencyRows=[3]; 
	window.corridorToRightOfColumn=[3]; 
	window.columnCountWithcorridor = columnCount+corridorToRightOfColumn.length; 
	
	
	window.arrayOfSeatedPassengers=[]; 
	
	var tempColumn=[];
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			tempColumn.push(null);
		}
		arrayOfSeatedPassengers.push(tempColumn);
		tempColumn=[];
	}
	
	var  copyOfarrayOfPassengers = arrayOfPassengers.slice();
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			if(Math.random()>0.7){
				
				arrayOfSeatedPassengers[i][j]= passengerPreseat;
			}
		}
	}

	
	var seatsVar = new seats();

 	
	var tempComponentPointer; 
	
	tempComponentPointer=new component(logo,0.05,0.5); 
	tempComponentPointer.anchorLeft=true;
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.75;
	
	
	parentComponents(tempComponentPointer,layoutHeader);
	tempComponentPointer=new component(iconReset,0.82,0.5);
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.75;
	tempComponentPointer.actionOnClick="reload";
	tempComponentPointer.anchorRight=true;
	
	parentComponents(tempComponentPointer,layoutHeader);
	tempComponentPointer=new component(iconHelp,0.95,0.55);
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.87;
	tempComponentPointer.anchorRight=true;
	parentComponents(tempComponentPointer,layoutHeader);
	
	
	statPercentage=new component("0%",0.12,0,"circle"); 
	statPercentage.heightRel=0.8;
	statPercentage.color="green";
	statPercentage.anchorTop=true;
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
	layoutSeats.heightPropWidth=rowCount/columnCountWithcorridor;
	layoutSeats.color="white";
	
	
	var tempSeat;
	for(var i=0;i<columnCountWithcorridor;i++){
		for(var j=0;j<rowCount;j++){
			tempSeat = new component("",(1/(columnCountWithcorridor))*i,(1/(rowCount))*j);
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithcorridor;
			tempSeat.componentType="seat";
			tempSeat.heightRel=1/rowCount;
			
			tempSeat.color="rgb(228,208,200)";
			tempSeat.strokeWidthRel = 4;
			tempSeat.strokeColor="white";
			for(var r=0;r<corridorToRightOfColumn.length;r++){
				if(i==corridorToRightOfColumn[r]){
					tempSeat.color="lightgrey";
				}
			}
			parentComponents(tempSeat,layoutSeats);
		}
	}
	
	for(var r=0;r<emergencyRows.length;r++){
		for(var i=0;i<columnCountWithcorridor;i++){
			tempSeat = new component("",(1/(columnCountWithcorridor))*i,(1/(rowCount))*(emergencyRows[r]-1));
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithcorridor;
			
			tempSeat.color="none";			
			tempSeat.heightRel=1/rowCount;
			tempSeat.strokeWidthRel = 4;
			tempSeat.strokeColor="salmon";
			parentComponents(tempSeat,layoutSeats);
	
			for(var e=0;e<corridorToRightOfColumn.length;e++){
				if(i==corridorToRightOfColumn[e]){
					tempSeat.color="salmon";
				}
			}

	
		}
	}
	
	
	var letterCount=0;
	for(var i=0;i<columnCountWithcorridor;i++){		
		for(var e=0;e<corridorToRightOfColumn.length;e++){
			if(i!=corridorToRightOfColumn[e]){
				tempSeat = new component(String.fromCharCode(65+letterCount),1/(columnCountWithcorridor*2)+(1/(columnCountWithcorridor))*i,-1/(2*columnCountWithcorridor));
				tempSeat.color="none";
				tempSeat.fontColor	= "black";	
				tempSeat.fontType	= "UI";	
				parentComponents(tempSeat,layoutSeats);
				letterCount+=1;
			}
		}
	}
	
	
	for(var i=0;i<rowCount;i++){		
		tempSeat = new component(i+1,1/(columnCountWithcorridor*2)+(1/(columnCountWithcorridor))*3,1/(rowCount*2)+(1/(rowCount))*i);	
		tempSeat.color="none";
		tempSeat.fontColor	= "black";	
		tempSeat.fontType	= "UI";	
		parentComponents(tempSeat,layoutSeats);
	}

	
	seatMapGridActivePos
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
				
				tempPerson = new component("",(1/(columnCountWithcorridor))*fakeColumnCounter,(1/(rowCount))*j);
				tempPerson.passenger = arrayOfSeatedPassengers[i][j];
				if(tempPerson.passenger.passport==0){tempPerson.disabled=true;}
				tempPerson.anchorLeft=true;
				tempPerson.anchorTop=true;
				tempPerson.widthRel=1/columnCountWithcorridor;
				tempPerson.heightRel=1/rowCount;
				tempPerson.actionOnDrag="drag";
				parentComponents(tempPerson,layoutSeats);	
				
				if(0){
					tempSeat = new component(arrayOfSeatedPassengers[i][j].name,(1/(columnCountWithcorridor))*fakeColumnCounter,(1/(rowCount))*j);
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

		this.headShakeAmount+=(this.headShakeAmountTarget-this.headShakeAmount)/easeSpeedNormal;

		this.headShake = this.headShakeAmount*Math.sin(timeCounter/10)*this.eyeDist;

		if(this.passport==0){
			ctx.globalAlpha=0.5;
		}else{
			ctx.globalAlpha=1;
		}

		this.eyeHeight = this.sizePixels/2;
		this.eyeDist = this.sizePixels/3;	
		this.lineWeight = (strokeBaseThickness/1.5)+this.sizePixels/25;

		ctx.lineWidth = this.lineWeight;

		if(this.passport!=0){
			this.tagColor= randomColor(this.passport); 
		}

		
		drawCircle(this.x,this.y,this.sizePixels,"white",true,"black",this.lineWeight);

		
		ctx.beginPath();
		ctx.lineCap = "round";
		if(this.smileSize!=this.smileSizeTarget){
			this.smileSize-=(this.smileSize-this.smileSizeTarget)/10
		}
		if(this.smileSizeTarget!=0.3){
			this.smileSizeTarget-=(this.smileSizeTarget-0.3)/2;
		}

		ctx.arc(this.x+this.headShake,this.y-this.sizePixels/4,this.sizePixels/1.5, Math.PI*this.smileSize, Math.PI*(1-this.smileSize));
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
			drawCircle(this.x-this.sizePixels*0.8,this.y-this.sizePixels*0.8,this.sizePixels/2,this.tagColor);
		}

		
	}


}
function pickPersonAndBuildDeck(){ 
	var returnArray = [];

	
	var randomPerson = arrayOfPassengers.splice(Math.floor(Math.random()*arrayOfPassengers.length),1)[0];

	var tempGroup="none";
	
	if(typeof randomPerson.group==='undefined'){
		
		returnArray[0]= randomPerson;		
	}else{
		tempGroup=randomPerson.group;
		
		returnArray[0]= randomPerson;
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
	if(arrayOfSeatedPassengers[(seatMapGridActivePos[0]-1)][(seatMapGridActivePos[1]-1)]==null){
		return "accept";
	}else{
		return "reject";
	}
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
	}

	
	canvasp.addEventListener ("mouseout", mouseOut, false);
	function mouseOut(event){
		pointerDown = false;
		pointerDragging = false;
	
	}
	
}

function updateLayoutElements(){
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
	
	mouseX = theEvent.x*canvasRes;
	mouseY = theEvent.y*canvasRes;
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

	console.log("currentSeatedDeck:"+currentSeatedDeck.length + " / currentDeckOfCards:"+currentDeckOfCards.length);

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
 
		
		window.btnStart = new component("Let's go", 0.5, 0.8);
		btnStart.fontType="bigButton";
		btnStart.componentType="button";
		
		btnStart.actionOnClick="startGame";
		btnStart.color="green";
		parentComponents(btnStart,introScreen);		

 
		gameState="intro";
	}
	if(gameState=="intro"){
		introScreen.updateAndDraw();
		btnStart.updateAndDraw();
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
			parentComponents(window["layoutCard_"+i],layoutDeckDropArea);		
			approachDelay = (currentDeckOfPassengerInfo.length - window["layoutCard_"+i].passenger.myPosInDeck)*2;
			if(isPortrait){ 
				window["layoutCard_"+i].posXRel=+1+approachDelay;
			}else{
				window["layoutCard_"+i].posXRel=2+approachDelay;
			}
			currentDeckOfCards.push(window["layoutCard_"+i]);
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
		btnCreateDeck.hint = "Unsure? You can still change positions!";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToHitNext";
	}
	if(gameState=="waitingPlayerToHitNext"){
		
	}
	if(gameState=="showSubmitButton"){
		removeComponent(btnCreateDeck.id);
		
		
		window.btnCreateDeck = new component("Submit", 0.5, 0.5);
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
		
		
	}

	if(gameState=="showingFeedback"){
		
		

		if(feedbackAlpha<1){
			feedbackAlpha+=0.005;			
		}
		
		
		var feedbackTitleY;
		if(isPortrait){
			feedbackTitleY=layoutAreaForCards.posyPixels-layoutAreaForCards.heightPixels/2;
		}else{
			feedbackTitleY=layoutAreaForCards.posyPixels-layoutAreaForCards.heightPixels/6;			
		}
		ctx.fillStyle="green";
		ctx.font = 700+" "+fontUISize*1.3	+ "px "+fontFamilyPrimary;			
		ctx.fillText("Your Feedback", layoutAreaForCards.posxPixels,feedbackTitleY);

		var normalSize = fontUISize*0.9;
		ctx.font = 400+" "+normalSize+ "px "+fontFamilyPrimary;			
		var currentLine = 0;
		var lineHeight = normalSize*1.45;
		var feedbackTextY = feedbackTitleY+lineHeight*1.4;
		var textWidth = 0.7*layoutAreaForCards.widthPixels;
		ctx.fillStyle="black";
		ctx.textAlign="left";

		ctx.globalAlpha=feedbackAlpha-currentLine/100;
		
		
		ctx.fillText(bulletPoint+" First line for this feedback", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
		currentLine+=1;
		ctx.fillText(bulletPoint+" Second line for this feedback", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
		currentLine+=1;

		ctx.globalAlpha=feedbackAlpha-currentLine/100;

		
		currentLine+=0.5;
		ctx.font = 700+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
		ctx.fillText("What could be improved", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
		currentLine+=1;
		ctx.font = 400+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
		ctx.fillText(bulletPoint+" Suggestion for improvement", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
		currentLine+=1;
		
		ctx.globalAlpha=feedbackAlpha-currentLine/100;
		
		
		currentLine+=0.5;
		ctx.fillStyle="green";
		ctx.font = 700+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
		ctx.fillText("If you want, you can try again.", layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
		currentLine+=1;


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
		var tw = svgExample1.width*canvasRes;
		var th = svgExample1.height*canvasRes; 
		var flow = Math.sin(timeCounter/40)*cw/6;
		var tx = flow+(cw-tw)/2;
		var ty = (ch-th)/2;
		myDrawImage(svgExample1,tx,ty,1.5+Math.sin(timeCounter/100),Math.sin(timeCounter/200)*360);
		myDrawImage(svgExample2,tx,ty,1.5+Math.sin(timeCounter/50),Math.sin(timeCounter/100)*360);
	
	
	}
	
	
	
	if(0){
		if(isMobile){
			addBorder(cw/100,"purple");
		}else{
			addBorder(cw/100,"orange");		
		}
	}
	
	pointerDownGlobalOneOffWarning=false;
	pointerUpGlobalOneOffWarning=false;


	
	if(!mouseLockedToGrid){
		mouseXlock=mouseX;
		mouseYlock=mouseY;
	}

 
	
	
	if(debug){
		drawCircle(mouseX,mouseY,4,"black");
		drawCircle(mouseXlock,mouseYlock,8,"none", true);
	}
	
	
	if(gameState=="waitingPlayerPlacePassenger"){
		if(currentDeckOfPassengerInfo.length>0){
			
		}
		ctx.font=fontUI;
		ctx.fillStyle=colorShadow50pct;
		if(pointerDown	){
			ctx.globalAlpha=0;			
		}else{
			ctx.globalAlpha=0.8;			
		}
		ctx.textAlign="center";
		var cardType="passenger";
		var msgYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels/2;
		if(isPortrait){
			msgYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels*0.8;
		}
		
		if((currentDeckOfCards.length+currentSeatedDeck.length)>1){
			cardType=currentDeckOfCards[0].passenger.groupType;	
		}
		ctx.fillText("SEAT THIS "+ cardType.toUpperCase(), layoutDeckDropArea.posxPixels, msgYpos);
		ctx.globalAlpha=1;
	}


	
	
	
	if(0){
		var seatWidth = layoutSeats.widthPixels/columnCountWithcorridor;
		var sx=0;
		var sy=0;
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (i+0.5)*seatWidth;
				sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (j+0.5)*seatWidth;

				if(i>2){
					sx +=seatWidth;
				}


		
				ctx.fillStyle="black";
				ctx.textAlign = "center";

				ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
				
				
				if(arrayOfSeatedPassengers[i][j]!=null){
					
					ctx.fillText(arrayOfSeatedPassengers[i][j].name, sx,sy);
				}
			}
		}
	}
	
	requestAnimationFrame(mainLoop); 
}




function component(label, posXRel, posYRel, shape, alpha, widthRel, heightRel, color, targetx, targety, targetAlpha, disabled) {	
	

	

	arrayOfComponents.push(this);

	this.easeSpeed=easeSpeedNormal;

	this.goHome=true;


	this.lift=0;
	this.liftGoal = 0;

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
		
		
			
		
		if(this.pointerIsHoveringMe){
			if(this.pointerHoverStateOnMe=="hovered"){this.pointerHoverStateOnMe="hovering";}
			if(this.pointerHoverStateOnMe=="no"){this.pointerHoverStateOnMe="hovered";}
		}else{
			this.pointerHoverStateOnMe="no";
		}
		
		
		
		
		if(this.passenger && this.componentType!="card"){this.componentType="passenger";}

		
		if(this.passenger && !this.avatar){
			
			
			this.avatar =  new avatarGraphic(0,0,0); 
			
		}
		

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
			this.font = 600+" "+fontUISize*1.4	+ "px "+fontFamilyPrimary;			
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
			this.posxPixels+=this.lift;
			this.posyPixels-=this.lift;
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
			this.widthPixels=0.8*layoutAreaForCards.widthPixels; 
			this.heightPropWidth=0.4;
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

		
		
		if(this.componentType=="card" && !this.pointerIsDraggingOnMe){
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


		
		if(pointerDownGlobalOneOffWarning){
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
						console.log("Attr Last:"+lastObjectWithPassengerClickedOrDragged.passenger.name);
					}
				}				
				if(this.passenger){
					
				}
				if(this==layoutSeats){
					seatMapGridPosOnPointerUpOrDown=seatMapGridActivePos;
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
		
	
		
		if(this.pointerIsDownOnMe){
			if(debug){
				ctx.fillStyle = "yellow";
				ctx.fillRect(this.compX1-this.fontSize, this.compY1-this.fontSize,this.fontSize,this.fontSize);
			}

			
			
			if(((Math.abs(mouseX-this.posxPixels+this.pointerClickOffsetX)>dragDelta)||(Math.abs(mouseY-this.posyPixels+this.pointerClickOffsetY)>dragDelta))&&!this.pointerIsDraggingOnMe){
				
				
				if(this.passenger && layoutSeatmap.pointerIsDraggingOnMe){
					
					currentDeckOfPassengerInfo.unshift(this.passenger);
					currentDeckOfCards.unshift(this);
					currentSeatedDeck.splice(currentSeatedDeck.length-1,1);
					for(i=0;i<arrayOfComponents.length;i++){
						if(arrayOfComponents[i]==this){
							arrayOfComponents.push(arrayOfComponents[i]);
							arrayOfComponents.splice(i,1);
							break;
						}						
					}
					for(i=1;i<currentDeckOfPassengerInfo.length;i++){
						currentDeckOfPassengerInfo[i].myPosInDeck+=1;
					}					
					
					console.log("REMOVED "+this.passenger.name+" FROM SEAT AT "+seatMapGridPosOnPointerUpOrDown);
					arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=null;					
					totalPassengersSeated-=1;
					
					
				}
				this.pointerIsDraggingOnMe=true;
			}
			
			
			if(!pointerDown){
				
				
				if(!this.pointerIsDraggingOnMe && pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
					
					if(this.componentType=="card" && this.passenger.myPosInDeck==0){

							
						
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
						gameState="beforeFirstPassenger";
					}
					if(this.actionOnClick=="createNewCardDeck"){
						for(i=0;i<currentSeatedDeck.length;i++){
							currentSeatedDeck[i].disabled=true;
						}
						currentSeatedDeck=[];

						gameState="createNewCardDeck";
					}					
					if(this.actionOnClick=="submit"){
						for(i=0;i<currentSeatedDeck.length;i++){
							currentSeatedDeck[i].disabled=true;
						}
						currentSeatedDeck=[];
						
						gameState="showFeedback";						
					}

					if(this.actionOnClick=="reload"){
						reload();
					}
					
					if(this.actionOnClick=="chaos"){
						for(var i=1;i<arrayOfComponents.length;i++){
							if(!arrayOfComponents[i].pointerIsDownOnMe && !arrayOfComponents[i].pointerIsDraggingOnMe && arrayOfComponents[i].pai==this.pai){
								arrayOfComponents[i].targetx=this.paiPosPixels[0]-this.paiSizePixels[0]/2+(Math.random()*this.paiSizePixels[0]);
								arrayOfComponents[i].targety=this.paiPosPixels[1]-this.paiSizePixels[0]/2+(Math.random()*this.paiSizePixels[1]);
							}
						}	
					}
				}
				
				
				if(this.pointerIsDraggingOnMe){
					
					if(this.passenger && typeof lastObjectWithPassengerClickedOrDragged !== undefined && lastObjectWithPassengerClickedOrDragged==this){
						
						if(layoutSeats.pointerIsHoveringMe){ 
							if(checkPlacing()=="accept"){
								
								totalPassengersSeated+=1;
								
								
								
								

								
								arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=lastObjectWithPassengerClickedOrDragged.passenger;
								
								console.log(this.passenger.name +": this.passenger.myPosInDeck:"+this.passenger.myPosInDeck);
								console.log(this.passenger.name +": OLD currentDeckOfPassengerInfo.length:"+currentDeckOfPassengerInfo.length);
								if(currentDeckOfPassengerInfo.length>1){
									console.log("currentDeckOfPassengerInfo.length>1");
									for(i=this.passenger.myPosInDeck+1;i<currentDeckOfPassengerInfo.length;i++){
										console.log("Update deck pos for "+currentDeckOfPassengerInfo[i].name);
										currentDeckOfPassengerInfo[i].myPosInDeck-=1;
									}
								}
								currentDeckOfPassengerInfo.splice(this.passenger.myPosInDeck,1);
								currentDeckOfCards.splice(this.passenger.myPosInDeck,1);
								currentSeatedDeck.push(this);
								console.log(this.passenger.name +":NEW currentDeckOfPassengerInfo.length:"+currentDeckOfPassengerInfo.length);
								
								if(currentDeckOfPassengerInfo.length>0){
								}else{
									if(arrayOfPassengers.length>0){
										gameState="showNextButton";
									}else{
										gameState="showSubmitButton";
									}
								}
								this.pointerIsDraggingOnMe=false;
							}else{
								
								console.log(this.passenger.name+" timeCounter:"+timeCounter);
 								console.log("reject:"+this.passenger.name);
								this.goHome=true;
							}
							
						}else{
								this.goHome=true;
 								console.log("go home");							
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
			if(this.disabled && this.passenger){
				this.avatar.headShakeAmountTarget=1;
			}
			if(this==layoutSeats){
				seatMapGridPosOnPointerUpOrDown=seatMapGridActivePos;
			}
		}


		
		if(pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
			
			
			
			this.pointerIsHoveringMe=true;

			if(this.componentType=="button"){this.highlight=true;}
			
			
			if(this.label=="layoutSeats"){
				mouseLockedToGrid=true;

				
				this.pixelsPerColumn = this.widthPixels/columnCountWithcorridor;
				this.mouseXPosRelToThis = (mouseX+this.pixelsPerColumn/2-(this.posxPixels-this.widthPixels/2));
				this.mouseXPosInColumns = this.mouseXPosRelToThis/this.pixelsPerColumn;
				if(Math.round(this.mouseXPosInColumns)!=4){this.mouseXPosInColumnsRound = Math.round(this.mouseXPosInColumns)}; 
				mouseXlock=(this.posxPixels-this.widthPixels/2)+this.mouseXPosInColumnsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;

				
				this.pixelsPerRow = this.heightPixels/rowCount;
				this.mouseYPosRelToThis = (mouseY+this.pixelsPerRow/2-(this.posyPixels-this.heightPixels/2));
				this.mouseYPosInColumns = this.mouseYPosRelToThis/this.pixelsPerRow;
				this.mouseYPosInRowsRound = Math.round(this.mouseYPosInColumns);
				mouseYlock=(this.posyPixels-this.heightPixels/2)+this.mouseYPosInRowsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;
				
				
				if(this.mouseXPosInColumnsRound>3){this.mouseXPosInColumnsRound-=1;} 
				seatMapGridActivePos=[this.mouseXPosInColumnsRound,this.mouseYPosInRowsRound];

				
			}

			if(this.componentType=="passenger"){
				this.avatar.smileSizeTarget=0.25;
 			}
			
			if(this.componentType=="card"){
				if(!this.goHome && this.pointerHoverStateOnMe!="hovering"){
					this.liftGoal=paddingNormal/2;
				}else{
					this.liftGoal=0;
				}
			}			
		}else{
			this.pointerIsHoveringMe=false;

			if(this.componentType=="button"){this.highlight=false;}
			
			if(this.componentType=="card"){
				this.liftGoal=0;
			}
			
			if(this.label=="layoutSeats"){
				mouseLockedToGrid=false;
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
		
		if(this.color!="none" && this.componentType!="passenger"){
			ctx.fillStyle = this.color;

			if(this.pointerHoverStateOnMe=="hovered"){ 

			}
						
			if(this.componentType=="card"){
				
				ctx.shadowColor = colorShadow10pct;	
				ctx.shadowBlur = paddingNormal;
				ctx.shadowOffsetX = +paddingNormal-this.lift;
				ctx.shadowOffsetY = paddingNormal+this.lift;		

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
			ctx.textAlign = "center";
			
			var yp = this.posyPixels+this.fontSize/4;
			if(this.shape=="circle"){yp+=this.fontSize/2.5;}
			ctx.fillText(this.label, this.posxPixels, yp);
			ctx.globalAlpha=1;
			if(this.hint){
				
				ctx.font = fontPrimary;
				ctx.globalAlpha=0.5;
				ctx.fillStyle = colorShadow50pct;
				ctx.fillText(this.hint, this.posxPixels, yp+this.heightPixels*0.9);
				ctx.globalAlpha=1;
			}
		}
		
		
		
		if(this.componentType=="card"){
			
			ctx.fillStyle = "black";			
			ctx.textAlign = "left";
			this.lineHeightRel = 1.5;		
			
			ctx.fillText(this.passenger.name, this.posxPixels-this.widthPixels/8, this.posyPixels-this.heightPixels/2+this.fontSize*2);
			ctx.globalAlpha=0.8;
			
			ctx.font = 400+" "+this.fontSize*0.9	+ "px "+fontFamilyPrimary;
			ctx.fillText(this.passenger.age+"yo", this.posxPixels-this.widthPixels/8, this.posyPixels-this.heightPixels/2+this.fontSize*(2+this.lineHeightRel*1));
			
			if(this.passenger.pref){
				if(Array.isArray(this.passenger.pref)){
					for(var i=0; i<this.passenger.pref.length; i+=1){
						ctx.fillText(bulletPoint+" "+this.passenger.pref[i], this.posxPixels-this.widthPixels/8, this.posyPixels-this.heightPixels/2+this.fontSize*(2+this.lineHeightRel*(2+i)));
					}
				}else{
					ctx.fillText(bulletPoint+" "+this.passenger.pref, this.posxPixels-this.widthPixels/8, this.posyPixels-this.heightPixels/2+this.fontSize*(2+this.lineHeightRel*2));
				}
			}
			
			if(this.passenger.code){
				ctx.font = 600+" "+this.fontSize*0.7	+ "px "+fontFamilyPrimary;
				
				this.codeTextBoxWidth = ctx.measureText(this.passenger.code).width+paddingNormal*2;
				ctx.fillRect(this.posxPixels+(this.widthPixels/2)-(this.widthPixels/7)-this.codeTextBoxWidth+paddingNormal, this.posyPixels-this.heightPixels/2+this.fontSize*(2+this.lineHeightRel/2), this.codeTextBoxWidth,this.fontSize);
				
				ctx.textAlign = "right";
				ctx.fillStyle="white";
				ctx.fillText(this.passenger.code, this.posxPixels+(this.widthPixels/2)-this.widthPixels/7, this.posyPixels-this.heightPixels/2+this.fontSize*(2+this.lineHeightRel*1));
			}			
			ctx.globalAlpha=1;
			
		}
		
		
		if(this.componentType=="graphic"){
			myDrawImage(this.label,this.compX1, this.compY1,this.graphicScale);
		}
		if(this.passenger){ 
			this.avatar.passport = this.passenger.passport;
			if(this.componentType=="card"){
				this.avatar.x = this.posxPixels-(this.widthPixels/2)+this.widthPixels/5;
				this.avatar.y = this.posyPixels-(this.heightPixels/2)+this.heightPixels/3;				
				this.avatar.sizePixels = this.widthPixels/15;
			}else{
				this.avatar.x = this.posxPixels;
				this.avatar.y = this.posyPixels;		
				this.widthRel=1/columnCountWithcorridor;
				this.widthPixels=this.widthRel*layoutSeats.widthPixels;
				this.avatar.sizePixels = this.widthPixels/3;
			}

			if(!this.disabled && this.componentType!="card" && !this.pointerIsDraggingOnMe){
				
				this.avatar.y+=Math.sin(timeCounter/6)*2;					
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
		return "rgba("+(randomFromSeed(this.seed)*155+100)+", "+(randomFromSeed(1-this.seed)*155+100)+", "+randomFromSeed(1-this.seed)*255+", "+this.alpha+")"; 		
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
function isGraphic(thing){
	if(typeof thing != "string" && typeof thing != "number"){
		return true;
	}else{
		return false;
	}
}

function loadAsset(name,ext){												
	assetCount+=1;

	window[name] = new Image();
	window[name].src="assets/"+name+"."+ext;
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

