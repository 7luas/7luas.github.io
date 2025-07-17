// Canvas JS project template v0.3 (2025/06/09)
 
if (1) {																	// About
	// This template should contain all useful core functions to create canvas+JS apps/games

	// Before using it, copy to the project's folder.
	// When using it, if there are any bugs or potential for improvement, apply to template too.
	// When upating the template, avoid feature creep (keep it simple), include simple demo/examples whenever possible and document well. GOAL: Should be quick to develop something from scratch using this.
	
	// There are multiple canvas, from bottom to top:
		// fakePixelsCanvas:  allows creating pixel-perfect art by drawing each pixel indiviually; disabled by default
		// mainCanvas: normal canvas (though can be drawn in lower resolutions by changing canvasRes (canvas multiplier)
		// debugCanvas: just for debug text
		// pointerCanvas: just to catch pointer events (has to be on top)
	// You always draw on the "context", not in the "canvas" (the context is defined based on the canvas, which is the html element).
	// NEVER use pixel values directly. All positions/sizes should be given as a proportion of the canvas (in the correspondent axis). This facilitates layout adjustments on the fly. 
		// Note: if you ever need to be able to use functions to draw pixels directly, add it as an exception
	// If local storage needed, change usingLocalStorage to true
	
	
	// Project-specific notes below
	
	// Card = single card; Deck = can be single, or group
 
	// NEXT
	// Fix/Simplify screen size/prop logic
		// Make sure intro text look good regardless of size.
		// Make sure layout always looks good regardless of size (ideed, when very small, text oveflows. Just make all text be prop to root.heightRel, like you did w Intro text)
	// Fix touchscreen bug
	// highlight group when reviewing individual
	// Beautify cards: some borders/shading?
	
	// NTH:
	// Might make more sense to limit to 2 proportions (portrait and landscape); anything inbetween gets a frame, and thre's a background (otherwise its too much to expect to cate to all possible screen proportions - I mean, its  possiible, just doesnt look great)
	// myReviewFeedbackText: have it be an array, allowing multiple reasons to show. Even better if include if essental or pref, to color code accordigly
	// updateLayoutElements: needs to be automated, and just cycle through all components (easier to not diffeentiate etweem layout and nonlayout elements). NOte this meas you need a nicer way of describing elements layout confirguations for each screen size
	// Changing canvasRes for some reason messses up lauoy of Graphics components
	// allAssetsLoaded: what happens if they're... not? does the code wait?
	// HIghilght family when reviewing (maybe grey out everyone else?) - careful the map is getting quite busy as it is already. .. Do not use the bobbing motion, as this indicated it can be moved!
	// avatar should say no if theres an attempt of dropping someone over them (I disabled it so it doesnt say no on click)
	// Refactor: have component be just about visual component on stage. Then added functionality (being a button, being draggable being a card - are added later somehow - but how? Are they propertie? Are they new objects within that object?
	// REF238947329 Initially I tried this.passenger.avatar instead, and it worked, but only created 1 instance of the avatarGraphic (sharing same properties, which led to wierd behaviour)
	// Smoother transition when this.componentType changes between card and passenger
	// Better flow management. Its nice that EVERYTHING is a component, but its also a bit messy. Can/should I remove most of the code in there, out into subcomponents/functions, which I can then add/aply/run as needed? To avoid every single thing being a comoonent with all the code that is used for everythiing else a well within it. By the way: see what I did with btnStart. Hacky, or useful? Note: Im doing lots of things in the updateAndDraw function of the component, because when Im not passing all parameters when I call the component , I pass right after. Thoug its nice to be able to change ANYTHIG on the fly. But then there could be a function (like the updateAndDraw one, but called "updateMeasurements", or smth) that can be called only when neede
	// Better flow management. Decide how to manage what gets updated/drawn. Maybe: have a morre streamlined workflow for creating nested stuff, (so that EVERYTHING ultimtely has a "screen" parent , meaning Intro, Game, Ending etc), then build one arrays for each  screen , dynamically based on hierarchy, . Then use that array to cycle through and draw only the relevant stuff
	// Fake Pixels: no rush, but might be worth reviewing how this is implemented. Isn't it easier to just make canvasRes super low?
	// Asset management: only preload what is needed at first, then load as needed (with load progress and fallback)
	// Creating a button with explicit Width/Height might not work (as the widthRel and heightRel vars dont seem to be used) 
	// Currently dragging INTO something counts as click and drag
	// Separate functions: ie, instead of a btn, its a text label that you can then add behaviours to (when clicked, change color, is draggable etc) - not sure best way to do it
	// Optimize: avoid all objects checking for clicks etc (probably there's a way to do smarter checkings, and not check what isnt needed)
	// Definitely can/should be further improved/optimized, including in terms of data model/structure
	// Differentiate: inheritPos from inheritDrag?
	// Make passengers get "cheeky" on hover again
	// Make card turn  to avatar if card goes over a bit (i.e. consider its width, not just pos)
	// Change parentComponents to only link them; then have specific variables for linking specific attribites . e,g inheritWidth, inheritPosX etc
		// IN PRACTICE: probably the best thing to do is: test out having one of the draggable child components be defined in proportion to parent; then have the root be simply the same 
		// To make sure it works, try out variations where some of the attribte arent iherited (ex: element changes pos , but keep size
	// REF28904820: make this show actual letters; note it has to invert, as letters are x axis 
	// If active group, moving one over another should swap them (either from othe seat, or from card area)
	// Better UI for dragging on mobile. Maybe have the avatar float slightly above the touch event?
	// Add hint below card "Just drag me towards the seat" (for decks: "Tap to flip through cards")
	// Avoiding having both currentDeckOfCards AND currentDeckOfPassengerInfo - I think first one is enough. I created the second one first, then the first because I needed access to the cards themselves too
	// Maybe figure out why .myPosInDeck is NOT working when I move it to where it should (ie. under .passenger, not directly under card (THOUGH DONT MESS W IT BECAUSE IT WORKS
	// REF7234732947 Shouldnt be repeating non stop
	// A lot of improvement in flow can be in understanding that an object can be created, but not used (ie, not called by the updateAndDraw)
		// The only reason all your components keep refreshing is because you add them all into an array , which is cycled every mainloop, to updateAndDraw
	
	// Minor bugs
	// Creashes if move avatar directly in seats via aisle..? quickly
	// Removing a button sometimes causes one of the other buttons to flicker
	// Changing canvasRes or resizing WHILE things are moving (ie targets are not met yet) lead to unexpected behaviour
	// Children dont retain position when canvasRes changes (and ww, wh?)
	// Bug if changing screen size or resolution mid game: ignore for now, as is edge case
		// This bugs out if screen resized in middle of game. Prbbly because chage in pos is interpreted as the avatars going into thedeck area. Prbbly enought to update them  to relative
		// REF2394802
		// Related: positions of placed avatars isnt kept relative (to reproduce: place a passenger, then resize screen). Again, probably easy t fix. 
		// But best not to address. Unliekely will need to change reoslution in mid of game

 }
if (1) { 																	// Define global vars (non-project specific only)
// This is for general global vars only. For project specific global vars, check next if

//For debug
var limitNumberOfPassengers=0; // 0 = full list

///Flow
var timeCounter = 0;	// TBD: clarify what exactly it's counting (probably not actual time)


// Useful
var newline = "\r\n";
var bulletPoint = "\u{2022}";
var practicallyZero = 0.1;	// How low is considered zero

// Debug
var debug = false;		// to show/hide debug info (key 'd)'
var debugText = []; 	// is rebuilt every frame
var moreDebugText = "";

// Display/Canvas
var ww; 	var wh; 														// window width/height *DO NOT USE THIS TO PLACE ELEMENTS, as this is resolution dependent*
var isPortrait; 															// if window height is bigger than width
var isMobile=false;	var mobileWidth=800; 									// if ww smaller than a certain amount, its considered mobile (causes font to go smaller
var cw;		var ch;															// canvas width/height (might be different to ww,wh, if canvasRes isn't 1)
var canvasRes = 1;															// canvas multiplier. 1 = same w,h as window; 0.5 = 50% resolution; CSS will always scale it to fill window
// There are 4 canvases; each has a context (ctx)
// Note: ctx is where things are acually drawn
var canvas; 		var ctx;												// canvas/context (main)
var canvasf; 		var ctxf;												// canvas/cotext (fake pixels)
var canvasd;		var ctxd;												// canvas/context (debug)
var canvasp;		var ctxp;												// canvas/context (pointer)
var minWidth = 450;
var minHeight = 710;

// To ensure layout always looks good, there will be 2 fixed layout types: portrait and landscape, always same proportion.
// Regardless of screen size, prop will always be either one of the other
var screenPropCurrent; var screenSizeAndPropSupported = true;
var canvasPropPortrait= 0.64; var canvasPropLandscape=1.52;

// When using the Fake Pixels canvas (default is false):					// TBD: check tasks at top
var usingFakePixelsCanvas = false;											// False: avoids many calculations
var widthInFakePixels=0;	var heightInFakePixels=0;						// width and height in fake pixels
var fakePixelW=0;			var fakePixelH=0;								// width and height that a fake pixel will have on screen (ideally square, but can't always be) 
var fakePixelGrid = new Array();
var totalPixels = 23000; 													// Used as reference to calculate fake pixel size. Based on a 480 x 270 resolution. Change as needed

// Setting up requestAnimationFrame (recommended, instead of "setInterval")
// Note: I'm  not fully sure how/why this works
// Request
window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
// Cancel
window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back

// Asset management
var assetCount = 0;				
var arrayOfAssets = [];				// Will point to all assets (to allow keeping track of load status)
var allAssetsLoaded = false;		// Becomes true once all assets are loaded (check Top for potential improvements)
// Example of loading svg images
// PS: actual project-specific assets should be loaded in the Project-specific global var declaration
//loadAsset("svgExample1","svg");
//loadAsset("svgExample2","svg");

// Storage
var usingLocalStorage = false;			// change to true if need to use localvars

// Examples of types of variables
var varToStoreLocally;	// just example; search for it to see how (super simple)
var varNumber = 10;
var varArray = ["A","B","C"];
var varArray2 = [[0,0],[1,1]];
var varArray3 = new Array(); // yes?
var varString = "TESTING";
var varBoolean = false;

// Mouse/pointer variables
var mouseX;		var mouseY;				// x,y pos of mouse on normal canvas (might be needed if canvas smaller  then resized to fit)
var mouseXlock;	var mouseYlock;			// x,y pos of mouse when locked to something
var mouseLockedToGrid=false;
var mouseXf;	var mouseYf;			// x,y pos of mouse on fake pixel canvas (i.e. in pixels)
// State
var pointerDown = false;				// Button is down
var pointerDragging = false;			// Button is down and mouse is moving
var pointerDownGlobalOneOffWarning = false;				// Click (on click, is true for one Main loop)
var pointerUpGlobalOneOffWarning = false;				//  is true for one Main loop)
var pointerPosWhenDown = [0,0]; var pointerPosWhenUp=[0,0];
var pointerClickedInPlaceGlobalOneOffWarning =false;

// Key vars (true when key is pressed)
var keySpace=false;
var keyShift=false;

// Colors
// (change according to project)
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
var colorReviewMode = colorOrange; // will change; used for review card and text


// Font(s)
// (change according to project)
// Note: font size is constant regardless of resolution, since needs to be readable (TBD: maybe vary a bit for very small/large situations)
var fontFamilyPrimary = "Arial";
var fontBaseSizePrimary;
var fontPrimary;
// Project specific
var fontUISize;
var fontUI;
var fontBigButtonSize;
var fontBigButton

// Animation constants
var easeSpeedNormal = 10; // these dont change with resolution ...
var easeSpeed = easeSpeedNormal;
var easeSpeedSlow = easeSpeedNormal*5;
var easeSpeedFast = easeSpeedNormal/4;

// Layout 
var paddingNormal;

// Arrays of objects
/// (this will vary based on project, but will usually include the following)
// Note: both arrays below keep same type of object (components); only difference is the arrayOfStages is used mainly for layout
var arrayOfComponents=[]; // all of them (rarely used really - best to have secondary arrays for context-specific sets of components)
var arrayOfSeatedComponents=[]; // stupid duplication... Just so I can show them on top later

// Interaction
var dragDelta; 					// how much the pointer needs to move after a click to be considered dragging
var topmostComponentOnLocationOfLastPointerDown= null; 

// Graphical constants
// (to facilitate keeping consistency)
var strokeBaseColor = "black";
var strokeBaseThickness;

}
if (1) {																	// Define global vars (project-specific)
// empty for now

// Deck = 1 passenger, or a group
var currentDeckOfPassengerInfo=[];	// array of passenger info (NOT cards!)
var currentDeckOfCards=[]; 			// array of cards
var currentSeatedDeck=[]; 			// array of cards

var seatMapGridActivePos=[0,0]; // [1 to 6 columns, 1 to 5 rows]
var seatMapGridPosOnPointerUpOrDown=[0,0];
var lastObjectWithPassengerClickedOrDragged; // 

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

var showWarning=""; // Message to show as warning above card
var showWarningDelay= 150;
var showWarningCutoff=20;
var showWarningCounter=showWarningDelay;
var warningSeatList=[]; // Optionally, list of seats to be highlighted alongside warning messae

var loneSeats = [];
var loneSeatsMsg = ""; // can be win, mid or both
											

// ASSETS
loadAsset("logo","png");
loadAsset("logoAcademy","png");
// Icons
loadAsset("iconReset","svg");
loadAsset("iconHelp","svg");
// Aircraft
loadAsset("seat","svg");
loadAsset("windowsLeft","svg");
loadAsset("windowsRight","svg");
// Avatars
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


var avatarWidth; var avatarHeight; // applies to all avatar related parts 

var totalPassengersOriginallyInCue=0;
var totalPassengersSeated=0;

var statPercent=0;
var targetStatPercentage=0;

var timerOn = false;
var gameTimer = 0;
}

function mainOnLoad(){									// First thing to be called (in the HTML). Runs these functions: readLocalVars, initializeGeneralStuff and defineInputFunctions

	if(usingLocalStorage){
		readLocalVars();
	}
	initializeGeneralStuff();
	initializeProjectSpecificStuff();
	defineInputFunctions(); 	// call this only once on start, otherwise there's a weird bug

}

function myReload(){
	location.reload();
}

function adjustToCanvasSizeAndRes(event){ 									// Function to adjust canvas and other vars based on changes to window size and/or resolution (runs rarely: on init...
	// This function checks for changes in window width/height and to resolution (canvasRes), then adjusts relevant vars accordingly

	
	// Grab new window width/height
	ww = window.innerWidth; 
	wh =  window.innerHeight;
	
	screenPropCurrent=ww/wh;
	console.log("screenPropCurrent:"+screenPropCurrent); 
	
	// Set main canvas size/proportion based on the window size and the canvas resolution (canvasRes)
	// Note: if canvasRes<1 (i.e. lower resolution), actual canvas will be smaller than window - but the CSS in the html makes it fill the window
	canvas.width = ww * canvasRes;
	canvas.height = wh * canvasRes;	
	// shorthand:
	cw = canvas.width;
	ch = canvas.height;

	// Update state variables
	//if(ww>wh){isPortrait = false;}else{isPortrait=true;}	// now this is tied to proportion rather than size
	//if(ww<mobileWidth){isMobile=true;}else{isMobile=false;} // now this is tied to proportion rather than size

	// adjust components based on change
	if(window.layoutSeatmap){ // THIS NEVER RUNS; optimize/tidy
		updateLayoutElements();
		console.log("*updateLayoutElements*"); 

	}

	// Repeating this here because updateLayoutElements function above can't run here  yet (messy)
	if(screenPropCurrent<1){
		isMobile=true;
		isPortrait=true;
	}else{
		isMobile=false;
		isPortrait=false;
		
	}

	// Set various vars based on it:
	// Font: note that font size is mostly always the same (just one exception if isMobile)
	fontBaseSizePrimary = 16*canvasRes*0.85; // This actually makes font size stay the same regardless of resolution (since canvas resolution is also smaller)
	console.log("*adjustToCanvasSizeAndRes*");
	if(isMobile){
		fontBaseSizePrimary=(fontBaseSizePrimary*0.5)+(fontBaseSizePrimary*0.5*(ww/mobileWidth));
 	}else{
		fontBaseSizePrimary = 16*canvasRes*0.75; // messy: should be coded properly above
	}
	fontPrimary = fontBaseSizePrimary + "px "+fontFamilyPrimary;
	// Projectspecific fonts
	fontUISize=fontBaseSizePrimary*1.4;
	fontUI = 600+" "+fontUISize+ "px "+fontFamilyPrimary;
	fontBigButtonSize = fontBaseSizePrimary*2;
	fontBigButton = 400+" "+fontBigButtonSize+ "px "+fontFamilyPrimary;
	// Other layout constants
	paddingNormal = fontBaseSizePrimary/1.5;
	strokeBaseThickness = 4*canvasRes;
	// Interaction constants
	dragDelta = 10*canvasRes;

	
	// set debug and pointer canvas size to it (NOTE: debug and pointer canvas DO NOT LOWER RESOLUTION)
	canvasd.width = ww;
	canvasd.height = wh;
	canvasp.width = ww;
	canvasp.height = wh;
	
	// If using the Fake Pixel canvas, do the same there
	if(usingFakePixelsCanvas){
		// Find size of fake Pixel (likely not square)
		// First, find first guess, assuming fake pixel will be square
		var fakePixelArea = (ww*wh)/totalPixels;	
		var fakePixelSide = Math.sqrt(fakePixelArea);
		// Find width and height in fake pixels assuming square pixels
		widthInFakePixels = ww/fakePixelSide;
		heightInFakePixels = wh/fakePixelSide;
		// Values above likely have decimals. They shouldn't. This can be fixed by considering that when finally defining fake pixel W and H
		fakePixelW = (widthInFakePixels/Math.floor(widthInFakePixels))*fakePixelSide;
		fakePixelH = (heightInFakePixels/Math.floor(heightInFakePixels))*fakePixelSide;
		// Now find proper width and height in fake pixels, assuming non-square pixels (Math.floor is needed because it still gets some tiny decimals)
		widthInFakePixels = Math.floor(ww/fakePixelW);
		heightInFakePixels = Math.floor(wh/fakePixelH);
		// Set canvas to that tiny size (CSS in index.html makes it fill the browser)
		canvasf.width  = widthInFakePixels;
		canvasf.height = heightInFakePixels;
		// Clear the grid
		clearFakePixelGrid("white");
	}

}
window.addEventListener('resize', myReload);				// ... on resize (and whenever canvasRes is changed - via number keys)

function initializeGeneralStuff(){													// Initializing (General)

	// Init canvas(es)
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

	// Create the root component
	// (all components are child to it by default, unless explicitly parented to something else)
	window.root = new component("root",0.5,0.5);
	// root.actionOnDrag = "drag";
	//root.color = "pink";
	root.fadeMeIn=false;

	// Create a prop warning object (proportion warning)
	window.propWarning = new component("Please use portrait or landscape",0.5,0.5);
	propWarning.widthRel = 1;
	propWarning.heightRel = 1;
	propWarning.color = colorBadLight;
	removeComponent(propWarning.id);

	// Create a size warning object
	window.sizeWarning = new component("Please increase screen size",0.5,0.5);
	sizeWarning.widthRel = 1;
	sizeWarning.heightRel = 1;
	sizeWarning.color = colorBadLight;
	removeComponent(sizeWarning.id);

	// Init canvas and related vars
	adjustToCanvasSizeAndRes();	

	// Initiate main loop (once all assets are loaded)
	// (Main loop loops because it calls itself)
		if (assetCount==arrayOfAssets.length){
		allAssetsLoaded=true;
		requestAnimationFrame(mainLoop);
		avatarWidth=faceWhite.width;
		avatarHeight=faceWhite.height;
	}
		
	
	
	// Store variable states on unload
	if(usingLocalStorage){
		window.addEventListener("unload",writeLocalVars,false);
		window.onunload = function(event) { writeLocalVars() };
		document.addEventListener("pause", writeLocalVars, false);
	}
}
function initializeProjectSpecificStuff(){											// Initializing (Project-specific)
	// HELPER: function component(label, posXRel, posYRel, type, alpha, widthRel, heightRel, color, targetx, targety, targetAlpha, disabled)

	// Initialize project-specific assets
	// these are automatically added to the arrayOfComponents

	// 
	

 	
	
	// Defining layout elements
	// label NEEDS to start with "layout" (messy)
	// Actual pos, size and parenting are defined in updateLayoutElements (so it can be updated whenever)
	window.layoutHeader = new component("layoutHeader");
	//layoutHeader.color="white";
	window.layoutBody = new component("layoutBody");
	window.layoutSeatmap = new component("layoutSeatmap");
	//layoutSeatmap.color=colorShadow10pct;
	window.layoutAreaForCards = new component("layoutAreaForCards");
	window.layoutDeckDropArea = new component("layoutDeckDropArea");
	//layoutDeckDropArea.color=colorShadow10pct;
	window.layoutFooter = new component("layoutFooter");
	//layoutFooter.color=colorShadow10pct;
	updateLayoutElements(); // eventually this should really update all components (incl ones below)
 
	// Seat Game vars
	// Required vars: id, name, age  (id: essential to distinguish if same name)
	// Optional vars: code, pref, group/groupType/groupLeader
	// Some useful vars (used later for checking too)
	window.prefWindow = "Prefers window seat.";
	window.prefAisle = "Prefers aisle seat.";
	window.prefTogether = "Prefers seating together.";
	window.elderlyFrail = "Frail elderly person.";
	window.elderyAble = "Able-bodied elderly person."
	// Pre-seated passenger
	window.passengerPreseat = {
		passport: 0,
		name: "Pre-Seated",
		age: 35,
		pref: ["Already booked a seat."]
	}
	// Others
	var tempPassenger;
	window.arrayOfPassengers = []; // simple linear array. DOES NOT include pre-seated
	// Adult
	tempPassenger = {
		passport: 0.2,
		name: "Bob Dangerfield",
		age: 35
	}
	arrayOfPassengers.push(tempPassenger);
	// Pregnant
	tempPassenger = {
		passport: 0.3,
		name: "Lorraine McFly",
		age: 23,
		code: "PREG"
	}
	arrayOfPassengers.push(tempPassenger);
	// Disabled
	tempPassenger = {
		passport: 0.8,
		name: "Jorge L. Borges",
		age: 25,
		code: "WCHC"
	}
	arrayOfPassengers.push(tempPassenger);
	// Infant on lap
	tempPassenger = {
		passport: 0.5,
		name: "Jess Law",
		age: 30,
		pref: ["Baby on lap"],
		code: "INF"
	}
	arrayOfPassengers.push(tempPassenger);
	// Unaccompanied minor
	tempPassenger = {
		passport: 0.32,
		name: "Frank Abagnale",
		age: 10,
		code: "UMNR"
	}
	arrayOfPassengers.push(tempPassenger);
	// CarinaAndScott 1/2
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
	// CarinaAndScott 2/2
	tempPassenger = {
		passport: 0.342,
		name: "Scott Cloud",
		age: 29,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple"
	}
	arrayOfPassengers.push(tempPassenger);	
	// Prefers aisle
	tempPassenger = {
		passport: 0.5221,
		name: "Heath Longlegs",
		age: 20,
		pref: [prefAisle]
	}
	arrayOfPassengers.push(tempPassenger);
	// CarlaAndCharlie 1/2 (Amanda: Nervous and AIsle preference)
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
	// CarlaAndCharlie 2/2
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
	// Elderly Frail
	tempPassenger = {
		passport: 0.1111,
		name: "Hilda Hilst",
		age: 88,
		pref: [elderlyFrail]
	}
	arrayOfPassengers.push(tempPassenger);
	// Elderly Able
	tempPassenger = {
		passport: 0.81142,
		name: "Howard Happy",
		age: 78,
		pref: [prefWindow,elderyAble]
	}
	arrayOfPassengers.push(tempPassenger);
	// Family 1/4
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
	// Family 2/4
	tempPassenger = {
		passport: 0.39002,
		name: "Jane Smith",
		age: 30,
		pref: [prefTogether],
		group: "smiths",
		groupType: "family"
	}
	arrayOfPassengers.push(tempPassenger);
	// Family 3/4
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
	// Family 4/4
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
	
	// Just Hilda
	if(0){
				// Elderly Frail
		var blabla = {
			passport: 0.1111,
			name: "Hilda Hilst",
			age: 88,
			pref: [elderlyFrail]
		}
		arrayOfPassengers=[blabla];
		
	}
	// Just family
	if(0){
		// Family 1/4
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
		// Family 2/4
		tempPassenger = {
			passport: 0.39002,
			name: "Jane Smith",
			age: 30,
			pref: [prefTogether],
			group: "smiths",
			groupType: "family"
		}
		arrayOfPassengers.push(tempPassenger);
		// Family 3/4
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
		// Family 4/4
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
	// Just Frank and few others
	if(0){
				arrayOfPassengers=[];

			// Unaccompanied minor
	tempPassenger = {
		passport: 0.32,
		name: "Frank Abagnale",
		age: 10,
		code: "UMNR"
	}
	arrayOfPassengers.push(tempPassenger);
	// CarinaAndScott 1/2
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
	// CarinaAndScott 2/2
	tempPassenger = {
		passport: 0.342,
		name: "Scott Cloud",
		age: 29,
		pref: [prefTogether],
		group: "CarinaAndScott",
		groupType: "couple"
	}
	arrayOfPassengers.push(tempPassenger);	
	// Prefers aisle
	tempPassenger = {
		passport: 0.5221,
		name: "Heath Longlegs",
		age: 20,
		pref: [prefAisle]
	}
	arrayOfPassengers.push(tempPassenger);

	}
	
	// TO MAKE DEBUG QUICKER, this makes the array shorter by an amount
	if(limitNumberOfPassengers>0){
		arrayOfPassengers.splice(limitNumberOfPassengers,arrayOfPassengers.length-limitNumberOfPassengers);
	}

	window.arrayOfPassengersUntouched = arrayOfPassengers.slice();
	
	totalPassengersOriginallyInCue=arrayOfPassengers.length;
	// End of Passengers


	// Flow
	window.gameState = "init"; // states are: init, intro, createNewCardDeck...


	// Array of Seats (and prepopulate)
	window.rowCount=5;
	window.columnCount=6;
	window.emergencyRows=[3]; // can be multiple
	window.aisleToRightOfColumn=[3]; // can be multiple
	window.columnCountWithAisle = columnCount+aisleToRightOfColumn.length; // <<<<
	
	// This array will keep current seating situation
	window.arrayOfSeatedPassengers=[]; // ignores aisles!
	//create it
	var tempColumn=[];
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			tempColumn.push(null);
		}
		arrayOfSeatedPassengers.push(tempColumn);
		tempColumn=[];
	}
	// Populate with preseated....
	// ...randomly: (might not allow solution!)
	if(0){
		var  copyOfarrayOfPassengers = arrayOfPassengers.slice();
		for(var i=0;i<columnCount;i++){		
			for(var j=0;j<rowCount;j++){
				if(Math.random()>0.7){
					// This used to be here for testing: adds other people as well // if(copyOfarrayOfPassengers.length>0){arrayOfSeatedPassengers[i][j]=copyOfarrayOfPassengers.splice(Math.floor(Math.random()*(copyOfarrayOfPassengers.length-1)),1)[0]; /// 
					arrayOfSeatedPassengers[i][j]= passengerPreseat;
				}
			}
		}
	}
	if(1){	//...according to known solution  - THE ONE FOR FINAL GAME
		//arrayOfSeatedPassengers[0][0]=passengerPreseat;
		//arrayOfSeatedPassengers[0][2]=passengerPreseat;
		arrayOfSeatedPassengers[0][4]=passengerPreseat;
		//arrayOfSeatedPassengers[1][0]=passengerPreseat;
		//arrayOfSeatedPassengers[1][2]=passengerPreseat;
		//arrayOfSeatedPassengers[2][3]=passengerPreseat;
		//arrayOfSeatedPassengers[3][4]=passengerPreseat;
		//arrayOfSeatedPassengers[4][3]=passengerPreseat;
		arrayOfSeatedPassengers[4][4]=passengerPreseat;
		//arrayOfSeatedPassengers[5][1]=passengerPreseat; 
		//arrayOfSeatedPassengers[5][3]=passengerPreseat;
		arrayOfSeatedPassengers[5][4]=passengerPreseat;
	}
	if(0){ // Populate with all passengers (for testing avatars)
		var copyOfarrayOfPassengers = arrayOfPassengers.slice();
		for(var i=0;i<columnCount;i++){		
			for(var j=0;j<rowCount;j++){
				if(copyOfarrayOfPassengers.length>0){
					arrayOfSeatedPassengers[i][j]=copyOfarrayOfPassengers.splice(0,1)[0];
					console.log(arrayOfSeatedPassengers[i][j].name);
				}
			}
		}	
	}
	
	var seatsVar = new seats();

 	// the tempComponentPointer... vars are just for assignin properties  here 
	var tempComponentPointer; // when I want to assign smth specific
	// HEADER
	tempComponentPointer=new component(logoAcademy,0.05,0.6); // logo	
	tempComponentPointer.anchorLeft=true;
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.85;
	//tempComponentPointer.graphicScale="fitDadHeight";	
	//tempComponentPointer.actionOnDrag="drag";
	parentComponents(tempComponentPointer,layoutHeader);
	window.componentIconReset =new component(iconReset,0.82,0.5);
	componentIconReset.color="none";
	componentIconReset.heightRel=0.75;
	componentIconReset.actionOnClick="reload";
	componentIconReset.anchorRight=true;
	componentIconReset.isButton=true;
	//tempComponentPointer.actionOnDrag="drag";
	parentComponents(componentIconReset,layoutHeader);
	tempComponentPointer=new component(iconHelp,0.95,0.5);
	tempComponentPointer.color="none";
	tempComponentPointer.heightRel=0.75;
	tempComponentPointer.actionOnClick="showHelp";
	tempComponentPointer.anchorRight=true;
	tempComponentPointer.isButton=true;
	parentComponents(tempComponentPointer,layoutHeader);
	// FOOTER
	// Pecentage
	statPercentage=new component("0%",0.12,0,"circle"); // logo	
	statPercentage.heightRel=0.8;
	statPercentage.color="green";
	statPercentage.anchorTop=true;
	statPercentage.alpha=0;
	statPercentage.targetAlpha=0;
	statPercentage.widthPropHeight=true;
	statPercentage.componentType="stat";
	parentComponents(statPercentage,layoutFooter);
	// Timer
	statTimer=new component("0s",0.88,0,"circle"); // logo	
	statTimer.heightRel=0.8;
	statTimer.color="orange";
	statTimer.anchorTop=true;
	statTimer.widthPropHeight=true;
	statTimer.componentType="stat";
	parentComponents(statTimer,layoutFooter);


	if(0){ // All placed within Main Seat for test - works
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

// Project-specific Functions
function seats(){
	
	// Create a layout object for the seats, parent it to layoutSeatmap
	// Force it to be perfectly square
 	window.layoutSeats = new component("layoutSeats",0.5,0.5);
 	parentComponents(layoutSeats,layoutSeatmap);
 	layoutSeats.widthRel=0.75;	
	layoutSeats.heightPropWidth=rowCount/columnCountWithAisle;
	layoutSeats.color="white";
	
	// Add seats
	var tempSeat;
	for(var i=0;i<columnCountWithAisle;i++){
		for(var j=0;j<rowCount;j++){
			// Add seat base
			tempSeat = new component("",(1/(columnCountWithAisle))*i,(1/(rowCount))*j);
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithAisle;
			tempSeat.componentType="seat";
			tempSeat.heightRel=1/rowCount;
			//tempSeat.actionOnDrag="drag";
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
					// Add seat outline
					tempSeat =new component(seat,(1/(columnCountWithAisle))*(i+0.5),(1/(rowCount))*(j+0.5));
					tempSeat.color="none";
					tempSeat.heightRel=0.18;
					parentComponents(tempSeat,layoutSeats);				}
				}
		}
	}
	// border on emergency row
	for(var r=0;r<emergencyRows.length;r++){
		for(var i=0;i<columnCountWithAisle;i++){
			tempSeat = new component("",(1/(columnCountWithAisle))*i,(1/(rowCount))*(emergencyRows[r]-1));
			tempSeat.anchorLeft=true;
			tempSeat.anchorTop=true;
			tempSeat.widthRel=1/columnCountWithAisle;
			//tempSeat.actionOnDrag="drag";			
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
	// ADD TEXT
	// Add letters
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
	// Add numbers
	// NTH: make it cycle to account for muliple aisles (right now its just 3)
	for(var i=0;i<rowCount;i++){		
		tempSeat = new component(i+1,1/(columnCountWithAisle*2)+(1/(columnCountWithAisle))*3,1/(rowCount*2)+(1/(rowCount))*i);	
		tempSeat.color="none";
		tempSeat.fontColor	= "black";	
		tempSeat.fontType	= "UI";	
		parentComponents(tempSeat,layoutSeats);
	}

	// Add windows
	// Left
	tempSeat =new component(windowsLeft,-0.05,0.5);
	tempSeat.color="none";
	tempSeat.heightRel=1;
	parentComponents(tempSeat,layoutSeats);
	// Right
	tempSeat =new component(windowsRight,1.05,0.5);
	tempSeat.color="none";
	tempSeat.heightRel=1;
	parentComponents(tempSeat,layoutSeats);



	// Add hint below seatmap
	window.posHint = new component("",0.5,1.11);	
	posHint.color="none";
	posHint.fontColor	= "black";	
	posHint.fontType	= "UI";	
	parentComponents(posHint,layoutSeats);	

	// add people
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

				console.log("> "+tempPerson.passenger.name);
				
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
	
	
	
	

	//window.rowCount=5;
	//window.columnCount=6;
	//window.emergencyRows=[3]; // can be multiple
	//window.aisleToRightOfColumn=[3]; // can be multiple
	//window.arrayOfSeatedPassengers=[];
	
}

function avatarGraphic(passport,x,y,sizePixels){	// size: h=w
	if(typeof passport==='undefined'){this.passport=0;}else{this.passport=passport;}
	if(typeof x==='undefined'){this.x=0;}else{this.x=x;}
	if(typeof y==='undefined'){this.y=0;}else{this.y=y;}
	if(typeof sizePixels==='undefined'){this.sizePixels=0;}else{this.sizePixels=sizePixels;}

	this.tagColor = "blue";

	// All of these are relative to sizePixels
	this.eyeHeight = this.sizePixels/2;
	this.eyeDist = this.sizePixels/3;	
	this.lineWeight = strokeBaseThickness/2;
	this.eyeOpeness = 1; // 0-1	
	this.smileSize = 0.3;
	this.smileSizeTarget = 0.3;
	this.headShakeAmountTarget = 0;
	this.headShakeAmount = 0;
	this.headShake;	
	
	this.updateAndDraw = function(){

		// If children, or Frank
		if(this.passport==0.39003 || this.passport==0.39004){this.sizePixels*=0.8;}
		if(this.passport==0.32){this.sizePixels*=0.9;}
	
		

		this.headShakeAmount+=(this.headShakeAmountTarget-this.headShakeAmount)/easeSpeedNormal;

		this.headShake = this.headShakeAmount*Math.sin(timeCounter/10)*this.eyeDist;

		ctx.globalAlpha=1;	
		if(this.passport==0){
			//ctx.globalAlpha=0.5;
		}

		this.eyeHeight = this.sizePixels/2;
		this.eyeDist = this.sizePixels/2.5;	
		this.lineWeight = (strokeBaseThickness/1.5)+this.sizePixels/25;

		ctx.lineWidth = this.lineWeight;

		if(this.passport!=0){
			this.tagColor= randomColor(this.passport); 
		}

		// face
		//console.log(avatarWidth+","+avatarHeight);
		// drawCircle(this.x,this.y,this.sizePixels,"white",true,"black",this.lineWeight); // Original one
		this.newAvatarRelSize = 3; // hack to make new avatar parts work with old avatar system
		this.newAvatarProp=avatarHeight/avatarWidth;
		this.newAvatarWidth=this.sizePixels * this.newAvatarRelSize;
		this.newAvatarHeight=this.newAvatarWidth*this.newAvatarProp;
		ctx.drawImage(faceWhite,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		ctx.globalAlpha=0.2+this.passport*0.8;
		if(this.passport>0){ // Some are orange
			ctx.globalAlpha=this.passport*2;
			ctx.drawImage(faceOrange,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		}
		if(this.passport>0.5){ // Some are brown
			ctx.globalAlpha=0.1+this.passport*0.35	;
			ctx.drawImage(faceBrown,this.x-this.newAvatarWidth/2,this.y-(this.newAvatarHeight*0.55),this.newAvatarWidth,this.newAvatarHeight);
		}
		ctx.globalAlpha=1;
		// faces
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
 	
		

		// mouth
		ctx.beginPath();
		ctx.lineCap = "round";
		if(this.smileSize!=this.smileSizeTarget){
			this.smileSize-=(this.smileSize-this.smileSizeTarget)/10
		}
		if(this.smileSizeTarget!=0.3){
			this.smileSizeTarget-=(this.smileSizeTarget-0.3)/2;
		}
		ctx.lineWidth = this.lineWeight*0.65;
		if(this.passport==0.5){this.smileSize=0.42;}// if Jess with baby, smaller mouth
		if(!this.isSad){
			ctx.arc(this.x+this.headShake,this.y-this.sizePixels/4,this.sizePixels/1.5, Math.PI*this.smileSize, Math.PI*(1-this.smileSize));
		}else{
			ctx.arc(this.x+this.headShake,this.y+this.sizePixels*0.9,this.sizePixels/1.5, 1*Math.PI*(1+this.smileSize), Math.PI*(2-this.smileSize));
		}
		ctx.strokeStyle = strokeBaseColor;
		ctx.stroke();

		// eyelids
		if(this.eyeOpeness<1){this.eyeOpeness+=(1-this.eyeOpeness)/5;}

		// eyes
		ctx.save();
		ctx.beginPath();
		ctx.rect(this.headShake+this.x-this.eyeDist*2, this.y-(this.eyeHeight/4)-this.eyeOpeness*(this.eyeHeight/2), this.eyeDist*4, this.eyeDist*1.5);
		ctx.clip();
		
		drawCircle(this.headShake+this.x+this.eyeDist,this.y-this.eyeHeight/2,this.sizePixels/8,"black");
		drawCircle(this.headShake+this.x-this.eyeDist,this.y-this.eyeHeight/2,this.sizePixels/8,"black");

		ctx.restore();
			
		ctx.globalAlpha=1;
		
		// tag (to diferentiate, while no faces)
		if(this.passport!=0){
			//	drawCircle(this.x-this.sizePixels*0.8,this.y-this.sizePixels*0.8,this.sizePixels/2,this.tagColor);
		}

		
	}

//				drawCircle(this.posxPixels, this.posyPixels, this.widthPixels/2,this.color, true, "black");
}
function pickPersonAndBuildDeck(){ // TBD: create array if group
	var returnArray = [];

	// Remove a random person from array
	var randomPerson = arrayOfPassengers.splice(Math.floor(Math.random()*arrayOfPassengers.length),1)[0];

	var tempGroup="none";
	
	if(typeof randomPerson.group==='undefined'){
		// If person is solo traveller, just return that
		returnArray[0]= randomPerson;		
	}else{
		tempGroup=randomPerson.group;
		// if part of group, build array (first element in array is the leader)
		returnArray[0]= randomPerson;
		for(var i=0; i<arrayOfPassengers.length; i+=1){
			if(typeof arrayOfPassengers[i].group!=='undefined'){
				if(arrayOfPassengers[i].group==tempGroup){
					// if leader, push to front, if not push to back
					if(typeof arrayOfPassengers[i].groupLeader!=='undefined'){
						returnArray.unshift(arrayOfPassengers.splice(i,1)[0]);
					}else{
						returnArray.push(arrayOfPassengers.splice(i,1)[0]);	
					}
					i-=1; // since the original array is now smaller
				}
			}
		}
	}
	
	return returnArray// and returns it
}
function checkPlacing(){ // returns "accept" or "occupied" (note the placement might still be challenged later if it leaves an empty seat) 
	if(arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]==null){
		return "accept";
	}else{
		// If seat not empty
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
	console.log("function notSeated concluded:");
	for(var i=0; i<currentSeatedDeck.length;i++){
		if(currentSeatedDeck[i].id==card.id){
			console.log("FALSE");
			return false;
		}
	}
	
	console.log("TRUE");	
	return true;
}
function highlightSeats(listOfSeats,hiColor){ // NTH: use this for other instances where you highlight stuff
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

		if(0){ // Writes a centered text
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
	// this will also update this string global var: loneSeatsMsg

	// For all empty window seats, check if any has non-empty seats next to them
	// Column A
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[0][j]==null){
			//console.log("In col A, row "+j+" is an empty window seat");
			if(arrayOfSeatedPassengers[1][j]!=null){		
				console.log("to its right is a non -empty window seat - so ADD ME TO LONE SEAT ARRAY");
				listOfLoneSeats.push([0,j]);
				foundLoneWindowSeat=true;
			}
		}
	}
	// Column F
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[5][j]==null){
			//console.log("In col F, row "+j+" is an empty window seat");
			if(arrayOfSeatedPassengers[4][j]!=null){		
				//console.log("to its left is a non -empty window seat - so ADD me TO LONE SEAT ARRAY");
				listOfLoneSeats.push([5,j]);
				foundLoneWindowSeat=true;
			}
		}
	}

	// For all empty middle seats, check if any is lone
	// Column B
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[1][j]==null){
			//console.log("In col B, row "+j+" is an empty window seat");
			if(arrayOfSeatedPassengers[0][j]!=null && arrayOfSeatedPassengers[2][j]!=null){		
				//console.log("it is lone - so ADD ME TO LONE SEAT ARRAY");
				listOfLoneSeats.push([1,j]);
				foundLoneMiddleSeat=true;
			}
		}
	}
	// Column E
	for(var j=0;j<rowCount;j++){
		if(arrayOfSeatedPassengers[4][j]==null){
			//console.log("In col E, row "+j+" is an empty window seat");
			if(arrayOfSeatedPassengers[3][j]!=null && arrayOfSeatedPassengers[5][j]!=null){		
				//console.log("it is lone - so ADD ME TO LONE SEAT ARRAY");
				listOfLoneSeats.push([4,j]);
				foundLoneMiddleSeat=true;
			}
		}
	}


	// delme later prbs
	for(var i=0;i<columnCount;i++){
		for(var j=0;j<rowCount;j++){
			if(arrayOfSeatedPassengers[i][j]==null){
				pointS = arrayOfSeatedPassengers[i][j];
				//console.log(i+","+j+" is empty");
			}
		}
	}
	
	
	if(foundLoneWindowSeat){loneSeatsMsg="Lone window seat";}
	if(foundLoneMiddleSeat){loneSeatsMsg="Lone middle seat";}
	if(foundLoneWindowSeat && foundLoneMiddleSeat){loneSeatsMsg="Lone middle/window seats";}
	
	return listOfLoneSeats; 	// MUST return empty array if none found
}

function defineInputFunctions() { 											// Define pointer events (both mouse and touch use the same mouse function)
 
	// DOWN (click/touch)
	canvasp.addEventListener("mousedown", mouseDown, false);
	canvasp.addEventListener("touchstart", mouseDown, false);
	function mouseDown(event) {
		pointerDown = true;		
		pointerDownGlobalOneOffWarning=true; // true for one main loop (then it becomes false again)
		updatePointerCanvasPos(event);
	}

	// UP (unclick/untouch)
	canvasp.addEventListener("mouseup", mouseUp, false);
	canvasp.addEventListener("touchend", mouseUp, false);
	function mouseUp(event){
		
		event.preventDefault();		

		pointerUpGlobalOneOffWarning=true; // lasts 1 loop

		pointerDown = false;
		pointerDragging = false;			
 	
	}

	// MOVE
	canvasp.addEventListener("mousemove", mouseMove, false);
	canvasp.addEventListener("touchmove", mouseMove, false);	
	function mouseMove(event){
		updatePointerCanvasPos(event);
		
		if(pointerDown){
			pointerDragging=true;
		}
	}

	// MOUSE OUT (pointer leaves window)
	canvasp.addEventListener ("mouseout", mouseOut, false);
	function mouseOut(event){
		pointerDown = false;
		pointerDragging = false;
	
	}
	
}

function updateLayoutElements(){
	
	
	// ROOT
	// By default, fill screen
	root.heightRel = 1;
	root.widthRel = 1;
	var intendedWidth=(ch*canvasPropPortrait);
	var intendedHeight =(cw/canvasPropLandscape);
	
	introText.style.fontSize="0.9em";
	introText.style.lineHeight="1.5em";
	
	// If screenPropCurrent <1 (i.e. narrower than square)
	if(screenPropCurrent<1){
		isMobile=true;
		isPortrait=true;
		
		// If intended width smaller than available cw, then all good: make canvas width be proportional to ch, using canvasPropPortrait
		if(intendedWidth<cw){
			root.widthRel = intendedWidth/cw;		
 		// If bigger, then have height be prop to width instead
		}else{
			intendedHeight =(cw/canvasPropPortrait);
			root.heightRel = intendedHeight/ch;
			
			// Make sure Introtext is well aligned
			introText.style.top=(ch-intendedHeight)/2+"px";			
		}
		
		introText.style.fontSize=root.heightRel+"em";
		introText.style.lineHeight=root.heightRel*1.75+"em";


	// If screenPropCurrent =>1 (i.e. square or wider)
	}else{
		isMobile=false;
		isPortrait=false;
		
		// If intended height is smaller than available ch, then all good: make canvas height be proportional to cw, using canvasPropLandscape
		if(intendedHeight<ch){
			root.heightRel = intendedHeight/ch;		
			
			// Make sure Introtext is well aligned
			introText.style.top=(ch-intendedHeight)/2+"px";
			
		// If bigger, then have width be prop to height instead
		}else{
			intendedWidth=(ch*canvasPropLandscape);
			root.widthRel = intendedWidth/cw;
		}
	
	}	
	
	
	// Intro text
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
		//Header
		layoutHeader.posXRel=0.5;
		layoutHeader.posYRel=0;
		layoutHeader.anchorTop=true;
		layoutHeader.widthRel=1;
		layoutHeader.heightRel=0.075;
		//layoutHeader.actionOnDrag="drag";
		// Main
		layoutBody.posXRel=0.5;
		layoutBody.posYRel=0.075;
		layoutBody.widthRel=1;
		layoutBody.heightRel=0.8;
		layoutBody.anchorTop=true;
		//layoutBody.actionOnDrag="drag";
		// Main.Seats
		layoutSeatmap.posXRel=0.5;
		layoutSeatmap.posYRel=0;
		layoutSeatmap.anchorTop=true;
		layoutSeatmap.widthRel=1;
		layoutSeatmap.heightRel=0.6;
		//layoutSeatmap.actionOnDrag="drag";	
		parentComponents(layoutSeatmap,layoutBody);
		// Main.Cards
		layoutAreaForCards.posXRel=0.5;
		layoutAreaForCards.posYRel=1;
		layoutAreaForCards.anchorBottom=true;
		layoutAreaForCards.widthRel=1;
		layoutAreaForCards.heightRel=0.4;
		//layoutAreaForCards.actionOnDrag="drag";	
		parentComponents(layoutAreaForCards,layoutBody);
		// Main.Cards
		layoutDeckDropArea.posXRel=0.5;
		layoutDeckDropArea.posYRel=0.5;
		layoutDeckDropArea.widthRel=0.5;
		layoutDeckDropArea.heightRel=0.5;
		//layoutAreaForCards.actionOnDrag="drag";	
		parentComponents(layoutDeckDropArea,layoutAreaForCards);
		// Footer
		layoutFooter.posXRel=0.5;
		layoutFooter.posYRel=1;
		layoutFooter.anchorBottom=true;
		layoutFooter.widthRel=1;
		layoutFooter.heightRel=0.125;
		//layoutFooter.actionOnDrag="drag";		
		
	}else{
		//Header
		layoutHeader.posXRel=0.5;
		layoutHeader.posYRel=0;
		layoutHeader.anchorTop=true;
		layoutHeader.widthRel=1;
		layoutHeader.heightRel=0.1;
		//layoutHeader.actionOnDrag="drag";
		// Main
		layoutBody.posXRel=0.5;
		layoutBody.posYRel=0.1;
		layoutBody.anchorTop=true;
		layoutBody.widthRel=1;
		layoutBody.heightRel=0.75;
		//layoutBody.actionOnDrag="drag";
		// Main.Seats
		layoutSeatmap.posXRel=0;
		layoutSeatmap.posYRel=0.5;
		layoutSeatmap.anchorLeft=true;
		layoutSeatmap.widthRel=0.5;
		layoutSeatmap.heightRel=1;
		//layoutSeatmap.actionOnDrag="drag";	
		parentComponents(layoutSeatmap,layoutBody);
		// Main.Cards
		layoutAreaForCards.posXRel=1;
		layoutAreaForCards.posYRel=0.5;
		layoutAreaForCards.anchorRight=true;
		layoutAreaForCards.widthRel=0.5;
		layoutAreaForCards.heightRel=1;
		//layoutAreaForCards.actionOnDrag="drag";	
		parentComponents(layoutAreaForCards,layoutBody);
		// Main.Cards
		layoutDeckDropArea.posXRel=0.5;
		layoutDeckDropArea.posYRel=0.5;
		layoutDeckDropArea.widthRel=0.5;
		layoutDeckDropArea.heightRel=0.5;
		//layoutAreaForCards.actionOnDrag="drag";	
		parentComponents(layoutDeckDropArea,layoutAreaForCards);
		// Footer
		layoutFooter.posXRel=0.5;
		layoutFooter.posYRel=1;
		layoutFooter.anchorBottom=true;
		layoutFooter.widthRel=1;
		layoutFooter.heightRel=0.15;
		//layoutFooter.actionOnDrag="drag";		
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
	
	
	// First, get x,y position of mouse or touch
	if(theEvent.targetTouches="null"){ // IF MOUSE (ie., no touch events)
			mouseX = theEvent.x;
			mouseY = theEvent.y;
	}
	if(theEvent.targetTouches!="null"&&theEvent.targetTouches.length>0){   // NEEDED to get touch events
		mouseX = theEvent.targetTouches[0].pageX;
		mouseY = theEvent.targetTouches[0].pageY;	
	}

	// Adjust for canvasRed
	mouseX *=canvasRes;
	mouseY *=canvasRes;
}

function readLocalVars(){													// To read variables from the device...
	if(localStorage.varToStoreLocally){
		varToStoreLocally = localStorage.varToStoreLocally;
	}
}
function writeLocalVars(){													// ... and write variables to device.
	localStorage.varToStoreLocally = varToStoreLocally;
}


// MAIN LOOP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
function mainLoop(timestamp) { 												// The main loop (calls itself at end)
	// Clear debug text 
	debugText = [];

	if(lineDashOffset<0){lineDashOffset=lineDashSize*3;}else{lineDashOffset-=1/4;}
	
	cardWidth = 0.8*layoutAreaForCards.widthPixels;
	cardHeight = cardHeightPropWidth * cardWidth;
	layoutDeckDropAreaPos=[layoutDeckDropArea.posxPixels,layoutDeckDropArea.posyPixels];
	
	// Hacky, to use below
	if(pointerDownGlobalOneOffWarning){
		pointerPosWhenDown=[mouseX,mouseY];
	}

	// If click with no drag
	// (hacky; lazy to fix this elsewhere)
	if(pointerUpGlobalOneOffWarning){
		pointerPosWhenUp=[mouseX,mouseY];
		if(pointsAreCloserThan(pointerPosWhenDown,pointerPosWhenUp,dragDelta)){
			pointerClickedInPlaceGlobalOneOffWarning=true;
		}
	}

	

	timeCounter+= 1;
	//ctx.scale(2, 2);

	targetStatPercentage=Math.round(100*(totalPassengersSeated/totalPassengersOriginallyInCue)); 

	clearCanvas();

	// Pick one demo to run (set to -1 for none)
	var demo = 0;
	if(usingFakePixelsCanvas){ // Haven't been updated for a while. Will prbbly break
		
	// Draw to canvas on click (demo)
	if(pointerDown){
		addFakePixel(mouseXf,mouseYf,"black");
	}		
		
	if(demo==0){	// Weed grows (uwaga: this one requires multiple passes; the way its currently implemented, these passes occur at every new frame (ie, takes a few frames to draw)
	var decayVar = 1/10;
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	if(Math.random()<0.5){decayVar*=1/10;}
	for(var rX=0; rX<widthInFakePixels; rX+=1){
		for(var rY=0; rY<heightInFakePixels; rY+=1){

			if(fakePixelGrid[rX][rY]=="white"){
				if(Math.random()<decayVar){
					//decayVar *= 0.95;
					addFakePixel(rX,rY,randomColor());
				}
			}else{
				var growDirection = Math.floor(Math.random()*4);
				
				if(growDirection==0){ // LEFT
					if(rX>0){
						if(fakePixelGrid[rX-1][rY]=="white"){
							addFakePixel(rX-1,rY,fakePixelGrid[rX][rY]);					
						}
					}
				}
				if(growDirection==1){ // DOWN
					if(rY>0){
						if(fakePixelGrid[rX][rY-1]=="white"){
							addFakePixel(rX,rY-1,fakePixelGrid[rX][rY]);											
						}
					}	
				}
				if(growDirection==2){ // RIGHT
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
	if(demo==1){	// Test: noise
	ctx.fillStyle = "blue";
	var tempX; var tempY;
	var rgbaColor;
	ctx.imageSmoothingEnabled = false;
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			//ctx.fillStyle = "rgba("+(255*Math.abs(Math.sin((Math.cos(timeCounter)+i)/20)))+", "+(255*Math.abs(Math.sin(Math.sin(timeCounter)+i/10)))+", "+(255*Math.abs(Math.sin(timeCounter+i/j*15)))+", 1)"; 
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
	if(demo==2){	// Test waves
	var heightDiv = 5;
	clearFakePixelGrid("white");
	//Test, wave
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			
			if(j>(Math.cos(timeCounter/0.5+i/120)*Math.cos(timeCounter)*(Math.sin(timeCounter/2.3+i/20)*heightInFakePixels/heightDiv)+heightInFakePixels*3/4)){
				addFakePixel(i,j,"pink");
			}
		}
	}

	//Test, wave
	for(var i=0; i<widthInFakePixels; i+=1){
		for(var j=0; j<heightInFakePixels; j+=1){
			if(j>(Math.cos(timeCounter/1.1+i/20)*(Math.sin(timeCounter/1.3+i/70)*heightInFakePixels/heightDiv)+heightInFakePixels*3/4)){
				addFakePixel(i,j,"green");
			}
		}
	}

	//Test, wave
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
	if(demo==3){	// 3D Test
		//addFakePixel(100+Math.sin(timeCounter/10)*20,50+Math.cos(timeCounter/11)*20,"pink");
		
		// Assuming: (locking in many vars for this test)
		// 1. Unit is cm
		// 2. Cameraman is standing on 0,0,0 and is 2m tall
		// 3. Camera is pointing straight along x axis
		// 4. Camera view (ie, a rectangle/square, where the light impressions will be) has exact same proportions as browser window, is located 1m from camera, on x axis and has 1m width
			// 
		// 5. Topography is an infinite cos/siny terrain averaging on z=0, with no bump taller than 1m
		
		// For all the below, you assume the screen view matches the cameraView
		// ie, for every pixel on screen, a ray will be cast from where the camera would be (0,0,200) towards the location of that pixel in the cameraView, then extended , and check if hits terrain
	 
		
		var cameraViewWidth = 100;
		var cameraViewHeight = (cameraViewWidth*heightInFakePixels)/widthInFakePixels;
		var cameraHeight = 200; // 200cm tall
		var cameraPos = [0,0,cameraHeight];
		//moreDebugText=cameraViewHeight;
		for(i=0;i<widthInFakePixels;i++){
			for(j=0;j<heightInFakePixels;j++){
				// Temp vars containing distance in camera view that matches the distance in the fake pixel grid
				var viewY = (j/heightInFakePixels)*cameraViewHeight;
				var viewX = (i/widthInFakePixels)*cameraViewWidth;
				
				// This is where the ray touches the camera viewport
				// Note that viewport WIDTH goes along world Y axis, and viewport HEIGHT goes along Z axis
				var rayCastPosInView = [100,viewX-(cameraViewWidth/2),viewY-(cameraViewHeight/2)+cameraHeight];

				// Ray going from camera to that point in the camera view			
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


	// FLOW
	root.updateAndDraw(); // always add the root
	//gameState="bla";
	if(gameState=="init"){ // Creates components; but the update happens in the next gameState
		// INTRO SCREEN
		
		window.introScreen = new component("",0.5,0.5);
		introScreen.heightRel=1;
		introScreen.widthRel=1;
		//introScreen.actionOnDrag="drag";
		introScreen.color="white";
		parentComponents(introScreen,root);
 
		// Button to Start game
		window.btnStart = new component("Let's go", 0.5, 0.85);
		btnStart.fontType="bigButton";
		btnStart.componentType="button";
	//	btnStart.hint=ww+"x"+wh;
		//btnStart.actionOnDrag="drag";
		btnStart.actionOnClick="startGame";
		btnStart.color="green";
		parentComponents(btnStart,introScreen);		
 
		gameState="intro";
 
		// All the below is only used later (should have been defined in the start really)
		// Button to resume game  
		window.btnResume = new component("Resume", 0.5, 0.85);
		btnResume.fontType="bigButton";
		btnResume.componentType="button";
		btnResume.actionOnClick="resumeGame";
		btnResume.color="green";
		parentComponents(btnResume,introScreen);

		// Transparent white overlay
		window.transpOverlay = new component("",0.5,0.5);
		transpOverlay.heightRel=1;
		transpOverlay.widthRel=1;
		transpOverlay.color= "rgba(255,255,255,0.922)";
		parentComponents(transpOverlay,root);

		// Are you sure? message
		window.areYouSure = new component("Reset game?", 0.5, 0.4);
		areYouSure.fontType="bigButton";
		areYouSure.color="none";
		parentComponents(areYouSure,introScreen);	
		// YES
		window.resetYes = new component("Yes", 0.35, 0.5);
		resetYes.fontType="bigButton";
		resetYes.componentType="button";
		resetYes.actionOnClick="resetYes";
		resetYes.color="green";
		parentComponents(resetYes,introScreen);
		// NO
		window.resetNo = new component(" No ", 0.65, 0.5);
		resetNo.fontType="bigButton";
		resetNo.componentType="button";
		resetNo.actionOnClick="resetNo";
		resetNo.color=colorBadStrong;
		parentComponents(resetNo,introScreen);

		
		
		// Remove from main component array (ie, what is looped and shown every frame) all the above items that wont be used yet
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
		
		
	
		// Skip intro (for debugging)
		if (0){
			introText.style.opacity="0";
			gameState="beforeFirstPassenger";
		}		
		
  	}
	if(gameState!="intro"  && gameState!="init"){ 		// Note THIS REPEATS for all screens that show the seat map
		for(var i=0;i<arrayOfComponents.length;i++){ 	// i=1 because no need to update root again
			arrayOfComponents[i].updateAndDraw();
		}
	}
	if(gameState=="beforeFirstPassenger"){
		// Remove intro screen and button
		if(typeof introScreen !=='undefined'){
			removeComponent(introScreen.id);
			removeComponent(btnStart.id);
			
		}
		
		// Show a button to Start
		window.btnCreateDeck = new component("I'm ready", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button";
		//btnCreateDeck.actionOnDrag="drag";
		btnCreateDeck.actionOnClick="createNewCardDeck";
		btnCreateDeck.color="green";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToStart";
	}
	if(gameState=="waitingPlayerToStart"){
		//
	}
	if(gameState=="createNewCardDeck"){
		
		removeComponent(btnCreateDeck.id);
 
		// Create the cards object based on currentDeckOfPassengerInfo (can be one card, or a group of cards)		
		currentDeckOfPassengerInfo = pickPersonAndBuildDeck(); // deck = currrent card(s) being shown; usually 1 person, but can be group; Pos 0 in original array is always the group leader 
		var approachDelay;
		for(i=(currentDeckOfPassengerInfo.length-1); i>-1; i--){
			window["layoutCard_"+i] = new component(window["layoutCard_"+i],0.5,0.5);
			window["layoutCard_"+i].color="white";
			window["layoutCard_"+i].actionOnDrag="drag";
			window["layoutCard_"+i].componentType="card";
			window["layoutCard_"+i].passenger = currentDeckOfPassengerInfo[i]; 
			window["layoutCard_"+i].passenger.myPosInDeck=i; // changes as deck is shuffled
			window["layoutCard_"+i].passenger.myNumInDeck=i; // doesnt change (unless deck is changed)
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
		layoutAreaForCards.updateAndDraw(); // This is needed, otherwise layoutCard doesnt get the proper posxPixels from its dad (layoutAreaForCards)
		layoutDeckDropArea.updateAndDraw(); // This is needed, otherwise layoutCard doesnt get the proper posxPixels from its dad (layoutAreaForCards)

		// The below can probably go eventually, since pos is being defined later?
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
 		
		// Show a button to SHOW NEXT PASSENGER
		window.btnCreateDeck = new component("Next, please!", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button"
		//btnCreateDeck.actionOnDrag="drag";
		btnCreateDeck.actionOnClick="createNewCardDeck";
		btnCreateDeck.color="green";
		btnCreateDeck.hint = "Unsure? You can still reposition.";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToHitNext";
	}
	if(gameState=="waitingPlayerToHitNext"){
		//
	}
	if(gameState=="showSubmitButton"){
		removeComponent(btnCreateDeck.id);
		
		// Show a button to SUBMIT
		window.btnCreateDeck = new component("I'm Done!", 0.5, 0.5);
		btnCreateDeck.fontType="bigButton";
		btnCreateDeck.componentType="button"
		//btnCreateDeck.actionOnDrag="drag";
		btnCreateDeck.actionOnClick="submit"; 
		btnCreateDeck.hint = "Unsure? You can still change positions!";
		btnCreateDeck.color="green";
		parentComponents(btnCreateDeck,layoutAreaForCards);	
		
		gameState="waitingPlayerToSubmit";
	}
	if(gameState=="waitingPlayerToSubmit"){
		//
	}

	if(gameState=="showFeedback"){
		if(typeof btnCreateDeck !== 'undefined'){
			removeComponent(btnCreateDeck.id);
		}
		
		timerOn=false;
			
		gameState="showingFeedback";
		
		window.feedbackAlpha = 0;
		
		// Calculate feedback
		// Errors that lead to fail
		// If has any CODE (except CHD) and is in emergency row: CODE in emergency row
		// If is elderly (age>65) and is in emergency row: Elderly in emergency row
		// If a CHD is not seating next to at least one parent from their group

		// Could be improved
		// If any pref not fullfilled (prefTogether, prefAisle, prefWindow): just show the correspondent strings (note: across aisle = together)
		
		// If under 2min, quick and efficient (if over, dont mention it)
		
		// Cycle through arrayOfSeatedPassengers:
		// ASSUMES ONLY ONE EMERGENCY ROW AND AISLE (if expand for more, adjust below - and elsewhere as well)
		// Vars below are global
		window.globalEssentialRequirements = [0,0]; //[total,unmet] // having any CODE, being elderlyFrail, essential requirements specific to a code
		window.globalPreferences = [0,0]; // [total,unmet] // Note its on an individual basis. If a familu is broken in two, but some memebers are still together, they count
		window.globalEfficient=false; if(Math.round(gameTimer/60)<120){globalEfficient=true;} // if less than 2 min, its efficient	
		// Vars below reset for each passenger.
		var me; // just to make things simpler below
		var childAwayFromParents=true; var isNextToSoloTraveller=false;
		var UMNRtopRow=true; UMNRnextToSolo=false; UMNRnotInAisle=false;
		var isEmergencyRow=false; var isElderlyFrail; var isAisle=false; var isWindow=false;  var hasCode=false; var hasPref=false; var siblingOnMy="none"; // can be right or left too
		// First, mark all people who strayed from groups (useful for UMNR)
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
					// This used to be here; but I actually need to run for all, since I need to know who is solo: if(typeof me.myGroupIsTogether==='undefined'){
					groupIsTogether(i,j); // runs once per group;  checks entire array, and sets var myGroupIsTogether to all accordingly					
				}
			}
		}
		// Below loop will also add vars to some passengers, to be used later for the review
		for(var i=0;i<columnCount;i++){
			for(var j=0;j<rowCount;j++){
				if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
					me = arrayOfSeatedPassengers[i][j];
					me.feedback="none";
					console.log(i+","+j+" Checking "+me.name);
					// Init useful reusable vars
					isEmergencyRow=false;
					isAisle=false;
					isWindow=false;
					childAwayFromParents=true;
					isElderlyFrail=false;
					hasCode=false;
					hasPref=false;
					siblingOnMy="false";
					// Define
					if(i==aisleToRightOfColumn[0] || i==aisleToRightOfColumn[0]-1){
						isAisle=true;
						console.log("Is in aisle seat. ");
					}
					if(i==0 || i==columnCount-1){
						isWindow=true;
						console.log("Is in window seat. ");
					}
					if(j==emergencyRows[0]-1){
						isEmergencyRow=true;
						console.log("Is in emergency row. ");
					}
					if(typeof me.code !== 'undefined'){
						hasCode=true;
						console.log("Has code:"+ me.code);
						globalEssentialRequirements[0]+=1;
					}	
					if(typeof me.pref !== 'undefined'){
						hasPref=true; // But note it can mean anything; below checks for stuff really count
					}
					if(hasPref){
						var prefTemp = me.pref;
						if(prefTemp.includes(prefAisle)||prefTemp.includes(prefWindow)||prefTemp.includes(prefTogether)){ // since not all items there actually count
							globalPreferences[0]+=1;
							console.log("Has pref:"+ me.pref.length);
						}
						if(me.pref.includes(elderlyFrail)){
							isElderlyFrail=true;
							globalEssentialRequirements[0]+=1;
						}
					}
					// SPECIFIC
					// Elderly frail
					if(isElderlyFrail){
						if(isEmergencyRow){
							me.feedback="essential";
							globalEssentialRequirements[1]+=1; // add to counter of unmet essential requirements
							me.myReviewFeedbackText="Frail person in emergency row";
							console.log("Elder frail in emergency row!"); // !!!
						}
					}
					// PREF BASED
					if(typeof me.pref !== 'undefined'){
						// prefAisle
						if(me.pref.includes(prefAisle)){
							if(isAisle){
								console.log("Satified:"+me.pref); // !!!										
							}else{
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; // add to counter of unmet preferences
								console.log("Not satified:"+me.pref); // !!!
							}
						}
						// prefWindow
						if(me.pref.includes(prefWindow)){
							if(isWindow){
								console.log("Satified:"+me.pref); // !!!
							}else{
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; // add to counter of unmet preferences
								console.log("Not satified:"+me.pref); // !!!
							}
						}
						// prefTogether
						if(me.pref.includes(prefTogether)){
							globalPreferences[0]+=1;
							// All passegers should already have been labeled accordingly earlier 
							if(!me.myGroupIsTogether){
								if(me.feedback!="essential"){me.feedback="preference";}
								globalPreferences[1]+=1; // add to counter of unmet preferences
								//console.log(me.name+" NOT with full group +++++++++++++++++"); // !!!							
							}else{
								//console.log(me.name+" YES with full group +++++++++++++++++"); // !!!															
							}
						}
						
					}					
					// CODE BASED (PREG, NERV etc)
					// If has Code
					if(hasCode){
						// General
						if(isEmergencyRow){
							me.feedback="essential";
							globalEssentialRequirements[1]+=1; // add to counter of unmet essential requirements
							console.log(me.code+" in emergency row!"); // !!!
							me.myReviewFeedbackText="\x22"+me.code+"\x22 in emergency row"
						}
						// Specifics
						if(me.code == "CHD"){
							// Note this differs from being together w family, as the full family might not be together, but if they're next to at least a parent, its ok
							var pointerCHD;
							globalEssentialRequirements[0]+=1;
							// Look to the left
							if(i>0){
								// If there's someone from their group
								if(arrayOfSeatedPassengers[i-1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i-1][j].group !== 'undefined'){
										if(arrayOfSeatedPassengers[i-1][j].group==me.group){
											if(arrayOfSeatedPassengers[i-1][j].age>ageAdultMin){
												// if it's an adult, done
												console.log(me.code+" has a parent on the left"); // !!!
												childAwayFromParents=false;
											}else{
												// if its a sibling, check if evenutally there is a parent
												console.log(me.code+" has a sibling on the left"); // !!!
												pointerCHD = i;
												while(pointerCHD>0){
													pointerCHD-=1;
													if(arrayOfSeatedPassengers[pointerCHD][j]!=null){
														if(typeof arrayOfSeatedPassengers[pointerCHD][j].group !== 'undefined'){
															if(arrayOfSeatedPassengers[pointerCHD][j].group==me.group){
																if(arrayOfSeatedPassengers[pointerCHD][j].age>ageAdultMin){
																	console.log(me.code+" eventually has a parent on the left"); // !!!
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
							// Look to the right
							if(childAwayFromParents && i<columnCount-1){ // no point in checking if already has one parent
								if(arrayOfSeatedPassengers[i+1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i+1][j].group !== 'undefined'){
										if(arrayOfSeatedPassengers[i+1][j].group==me.group){
											if(arrayOfSeatedPassengers[i+1][j].age>ageAdultMin){
												// if it's an adult, done
												console.log(me.code+" has a parent on the right"); // !!!
												childAwayFromParents=false;
											}else{
												// if its a sibling, check if evenutally there is a parent
												console.log(me.code+" has a sibling on the right"); // !!!
												pointerCHD = i;
												while(pointerCHD<columnCount-1){
													pointerCHD+=1;
													if(arrayOfSeatedPassengers[pointerCHD][j]!=null){
														if(typeof arrayOfSeatedPassengers[pointerCHD][j].group !== 'undefined'){
															if(arrayOfSeatedPassengers[pointerCHD][j].group==me.group){
																if(arrayOfSeatedPassengers[pointerCHD][j].age>ageAdultMin){
																	console.log(me.code+" eventually has a parent on the right"); // !!!
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
							// If child away from family
							if(childAwayFromParents){
								me.feedback="essential";
								if(typeof me.myReviewFeedbackText==='undefined'){
									// If no other message already exists
									me.myReviewFeedbackText="\x22"+me.code+"\x22 away from parent";									
								}else{
									// If one already does, add to it
									me.myReviewFeedbackText+=" and alone";
								}
								globalEssentialRequirements[1]+=1; // add to counter of unmet essential requirements
								console.log(me.code+" away from family!"); // !!!							
								// Note : If next to another CHD, if they're fine, I'm fine too - but this will be checked in the next cycle below REF23894739
							}
						}
						if(me.code == "WCHC"){
							// WCHC cant be adjacent to emergency row
							globalEssentialRequirements[0]+=1;
							if(Math.abs(j-2)<2){
								globalEssentialRequirements[1]+=1; // add to counter of unmet essential requirements
								me.feedback="essential";
								me.myReviewFeedbackText="\x22"+me.code+"\x22 near emergency row";
							}							
						}
						if(me.code == "WCHC"|| me.code == "INF"){						
							// They can only be in window seat
							globalEssentialRequirements[0]+=1;
							if(!isWindow){
								globalEssentialRequirements[1]+=1; // add to counter of unmet essential requirements
								me.feedback="essential";
								me.myReviewFeedbackText="\x22"+me.code+"\x22 not in window seat";
							}
						}						
						if(me.code == "UMNR"){
							// Essential: needs to be in top row and aisle; can't be next to single traveller (or emergency row - covered above already)
							// Preference: to be next to another UMNR or family, or on their own (hm, not really a reasonable "preferece" - just covers all cases which are not bad.. so ignore;
							
							// ESSENTIALS

							
							// next to solo traveller
							globalEssentialRequirements[0]+=1;
							isNextToSoloTraveller=false;
							// check left
							if(i>0){
								if(arrayOfSeatedPassengers[i-1][j]!=null){
									if(typeof arrayOfSeatedPassengers[i-1][j].group==='undefined'){ // ie. solo
										if(typeof arrayOfSeatedPassengers[i-1][j].code !== 'undefined'){ 
											if(arrayOfSeatedPassengers[i-1][j].code!="UMNR"){
												console.log(me.name+" UMNR has solo traveller on left");
												isNextToSoloTraveller=true;												
											}
										}else{
												console.log(me.name+" UMNR has solo traveller on left");
												isNextToSoloTraveller=true;																							
										}
									}else{
										// if person to left is part of group, but is far from entire group
										if(typeof arrayOfSeatedPassengers[i-1][j].myGroupIsTogether!=='undefined'){
											if(!arrayOfSeatedPassengers[i-1][j].myGroupIsTogether && !arrayOfSeatedPassengers[i-1][j].isNextToAtLeastOnePersonFromGroup){
												console.log(me.name+" UMNR has solo traveller on left (debanded from group):"+arrayOfSeatedPassengers[i-1][j].name);
												isNextToSoloTraveller=true;		
											}
										}
									}
								}
							}
							// check right
							if(!isNextToSoloTraveller){ // if already next to one, fail already
								if(i<columnCount-1){
									if(arrayOfSeatedPassengers[i+1][j]!=null){
										if(typeof arrayOfSeatedPassengers[i+1][j].group==='undefined'){ // ie. solo
											if(typeof arrayOfSeatedPassengers[i+1][j].code !== 'undefined'){
												if(arrayOfSeatedPassengers[i+1][j].code!="UMNR"){
													console.log(me.name+" UMNR has solo traveller on right");
													isNextToSoloTraveller=true;
												}
											}else{
													console.log(me.name+" UMNR has solo traveller on right");
													isNextToSoloTraveller=true;												
											}
										}else{
											// if person to right is part of group, but is far from group
											if(typeof arrayOfSeatedPassengers[i+1][j].myGroupIsTogether!=='undefined'){
												if(!arrayOfSeatedPassengers[i+1][j].myGroupIsTogether && !arrayOfSeatedPassengers[i+1][j].isNextToAtLeastOnePersonFromGroup){
													console.log(me.name+" UMNR has solo traveller on right (debanded from group):"+arrayOfSeatedPassengers[i+1][j].name);
													isNextToSoloTraveller=true;		
												}
											}
										}
									}
									
								}
							}
							if(isNextToSoloTraveller){
								globalEssentialRequirements[1]+=1;
								console.log(me.name+" UMNR is next to solo traveller indeed.");
								me.myReviewFeedbackText="\x22"+me.code+"\x22 near solo traveller";
								me.feedback="essential";
							}

							
							// in aisle AND top row (bunching together, otherwise too complex)
							globalEssentialRequirements[0]+=1;
							if(!isAisle || j>0){
								globalEssentialRequirements[1]+=1;
								console.log(me.name+" UMNR not in top row and aisle");
								me.myReviewFeedbackText="\x22"+me.code+"\x22 must be in aisle, first row";
								me.feedback="essential";
							}
		

						}
					}

				}
			}
		}	
		
		// Right now, there should be 11 essential requirements, and 9 preferences
		console.log("Unmet "+ globalEssentialRequirements[1] +" out of "+globalEssentialRequirements[0]+" essential requirements");
		console.log("Unmet "+ globalPreferences[1] +" out of "+globalPreferences[0]+" preferences");
		
		// Define title
		window.feedbackTitle="Completed"; // shouldn't show,  but just in case
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

		
		// NEXT: Implement click-to-review; which will also be used in the end to review what went wrong
		// NEXT: Need to deal with  REF23894739
		// NEXT: ability to cycle through group on click . Otherwise hard to plan
		// NTH: card actually remains greyed out in pile while they place avatar, so they arent lookking at someone elses card as they place
		
	}

	if(gameState=="showingFeedback"){
		
		// Display feedback

		if(!reviewModeGlobal){
			if(feedbackAlpha<1){
				feedbackAlpha+=0.01;			
			}
		}else{
			feedbackAlpha-=feedbackAlpha/2;		
		}
		
		// Title
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

		// Items
		var normalSize = fontUISize*0.9;
		ctx.font = 400+" "+normalSize+ "px "+fontFamilyPrimary;			
		var currentLine = 0;
		var lineHeight = normalSize*1.45;
		var feedbackTextY = feedbackTitleY+lineHeight*1.4;
		var textWidth = 0.7*layoutAreaForCards.widthPixels;
		ctx.fillStyle="black";
		ctx.textAlign="left";
		ctx.globalAlpha=feedbackAlpha-currentLine/100;
		
		// Main text
		for(var i=0;i<feedbackItems.length;i++){
			ctx.fillText(bulletPoint+" "+feedbackItems[i], layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
			currentLine+=1;
		}

		ctx.globalAlpha=feedbackAlpha-currentLine/100;


		// What could be improved
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
		
		// Final text
		currentLine+=0.5;
		ctx.fillStyle=feedbackAccentColor;
		ctx.font = 700+" "+normalSize*1	+ "px "+fontFamilyPrimary;			
		for(var i=feedbackEnd.length-1;i>-1;i--){
			ctx.fillText(feedbackEnd[i], layoutAreaForCards.posxPixels-textWidth/2,feedbackTextY+currentLine*lineHeight);
			currentLine+=1;
		}



		// Show Highlights
		ctx.globalAlpha=1;
		if(feedbackAccentColor!="green"){ // ha, lazy
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

						if(0){ // Writes a centered text
							ctx.fillStyle="black";
							ctx.textAlign = "center";
							ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
							
							ctx.fillText(arrayOfSeatedPassengers[i][j].name, sx,sy);
						}
						
						// Draw highlight
						if(arrayOfSeatedPassengers[i][j].reviewMode){
							ctx.fillStyle=colorReviewMode;
							ctx.fillRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);
						}
						
						// Draw highlight
						ctx.strokeStyle=colorOrangeStrong; // default color is orange
						if(arrayOfSeatedPassengers[i][j].feedback=="essential"){ctx.strokeStyle=colorBadStrong;} // if FAIL, red
						if(arrayOfSeatedPassengers[i][j].reviewMode){ctx.strokeStyle="white";} // if Review Mode, White (since bg will be orange)
						ctx.lineWidth=strokeBaseThickness;
						ctx.lineDashOffset= lineDashOffset;
						ctx.setLineDash([lineDashSize,lineDashSize*2]);
						ctx.strokeRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);
 
				
					}
				}
			}
			ctx.restore();
			
			// Make sure avatars are drawn on top
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


	
	
	// Show debug text
	if(debug){
	// Needs to be rebuilt every time, to update values

	// Create debug text 
	//(it was reset at top of Main loop)
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

	// base
	ctxd.fillStyle = "rgba(255,255,255,0.75)";
	ctxd.fillRect(0,0,400,400);

	// Show debug text
	var fb = fontBaseSizePrimary/canvasRes;  // because debug canvas doesnt lower res, so needs to compensate for 
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

 
	// Example placing image
	if(0&&debug){
		//var tw = svgExample1.width*canvasRes;
		//var th = svgExample1.height*canvasRes; 
		//var flow = Math.sin(timeCounter/40)*cw/6;
		//var tx = flow+(cw-tw)/2;
		//var ty = (ch-th)/2;
		//myDrawImage(svgExample1,tx,ty,1.5+Math.sin(timeCounter/100),Math.sin(timeCounter/200)*360);
		//myDrawImage(svgExample2,tx,ty,1.5+Math.sin(timeCounter/50),Math.sin(timeCounter/100)*360);
	//	myDrawImage(svgExample,cw/2,ch/2);
	//	myDrawImage(svgExample,cw/3,ch/3);
	}
	
	// Add border
	//addBorderToCanvasF(1,"orange");
	if(0){
		if(isMobile){
			addBorder(cw/100,"purple");
		}else{
			addBorder(cw/100,"orange");		
		}
	}
	

	// Default mouseLock position
	if(!mouseLockedToGrid){
		mouseXlock=mouseX;
		mouseYlock=mouseY;
	}

 
	
	// Show location of mouseX,mouseY and locked ones too
	if(debug){
		drawCircle(mouseX,mouseY,4,"black");
		drawCircle(mouseXlock,mouseYlock,8,"none", true);
	}


	// Used in a couple places lower
	var msgAboveYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels/2;
	if(isPortrait){
		msgAboveYpos = layoutDeckDropArea.posyPixels-layoutDeckDropArea.heightPixels*0.8;
	}	
	
	// Message above and below cards
	if(gameState=="waitingPlayerPlacePassenger" || reviewModeGlobal){
		
		// General setup
		ctx.font=fontUI;
		ctx.fillStyle=colorShadow50pct;
		ctx.textAlign="center";
		if(pointerDragging){ctx.globalAlpha=0;}else{ctx.globalAlpha=0.8;}
		
		// Above
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
		
		// Below
		var msgBelowYpos = layoutDeckDropArea.posyPixels+layoutDeckDropArea.heightPixels*0.5 + currentDeckOfCards.length*fontBaseSizePrimary/2;
		if(isPortrait){
			msgBelowYpos = layoutDeckDropArea.posyPixels+layoutDeckDropArea.heightPixels*0.75 + currentDeckOfCards.length*fontBaseSizePrimary/2;
		}
		ctx.font = 600+" "+fontUISize*0.7+ "px "+fontFamilyPrimary;		
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


	
	
	// Add layer (overlay) showing arrayOfSeatedPassengers against the seat map (to make sure the avatars are reflecting it correctly) - for debugging
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
	
		// also show currentDeckOfCards
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
				
		// HIghlight seat (if any)
		if(warningSeatList.length>0){
			highlightSeats(warningSeatList,colorBadStrong);
		}
			
		//console.log("SHOWING WARNING:"+layoutDeckDropArea.posxPixels	);
			
		// Message
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
		
		// Make sure avatars are drawn on top
		for(var i=0;i<arrayOfSeatedComponents.length;i++){			
			arrayOfSeatedComponents[i].updateAndDraw();
		}

	}
	

	// Cover screen if too small
	if(0){
 		if(ww<minWidth || wh<minHeight){
			screenSizeAndPropSupported=false;
			console.log("Unsupported screen size (w or h)");
			sizeWarning.updateAndDraw();
			introText.style.opacity="0";
 			// Show res
			ctx.font=fontUI;
			ctx.fillStyle="white";
 			ctx.globalAlpha= 1;
 			ctx.fillText(ww+"x"+wh, ww/2, wh*(2/3));
			//			
		}else{
			screenSizeAndPropSupported=true;
		}
	}
	
	// Cover screen if proportion not ideal
	if(0){
		// screenProp: must be bigger than 1.42, smaller than 0.64
		if(screenPropCurrent>canvasPropPortrait && screenPropCurrent<canvasPropLandscape){
			screenSizeAndPropSupported=false;
			console.log("Unsupported proportion");
			propWarning.updateAndDraw();
			introText.style.opacity="0";
		}else{
			screenSizeAndPropSupported=true;
		}
	}
	
	requestAnimationFrame(mainLoop); // Repeat mainLoop
}


// Objects
// (New instances should be created from these, then properties and functions can be accessed easily)
function component(label, posXRel, posYRel, shape, alpha, widthRel, heightRel, color, targetx, targety, targetAlpha, disabled) {	// Note: Rel = means its relative to parent's size/pos! (e.g. 0.5 = 50%)
	/// All code below (until the updateAndDraw function) runs only once, when the instance is created <<<

	// shapes: "rectangle", "circle"

	arrayOfComponents.push(this);

	this.easeSpeed=easeSpeedNormal;

	this.goHome=true;

	this.isSeated = false;
	this.lift=0;
	this.liftGoal = 0;

	this.mySeatPos=[-1,-1];

	this.fadeMeIn=true; // fade in by default

	this.pointerIsHoveringMe=false;

	this.componentType="text"; // default

	this.fontType="normal"; // to simplify, this var will determine what type of font (if smalll, or UI)

	this.strokeColor="black";
	this.strokeWidthRel=0;
	this.fontColor="white";

	this.paiPosPixels=[0,0]; this.paiSizePixels=[0,0];

	// All component instances are initially either child of root by default (or they are root (label="root"), then your dad is god)
	if(label=="root"){
		this.pai = "god";
	}else{
		this.pai = root;
	}
	// If after creation the instance is parented, then the parent changes accordingly
	
	this.stageIsPai = false; // when true, this then acts as the Stage


	// NOT JUST BUTTON: this is a general purpose component. Can be just a shape with text,  a button etc.

	this.id = generateUniqueID();
	this.pointerCameDownOnMe=false;
	this.pointerIsDownOnMe=false;
	this.pointerIsDraggingOnMe=false;
	
	this.pointerHoverStateOnMe="no"; // no, hovered, hovering
	
	this.graphicScale=1;
	
	this.pointerClickOffsetX; this.pointerClickOffsetY; // to tracj when click+drag

	this.deltaX; this.deltaY; this.deltaAlpha;

	//useful
	this.compX1; this.compY1; this.compX2; this.compY2; // actual canvas positions of start 1 and end 2 of rectangle
	 	
	// Required values fallback (just in case) 
	if (typeof label === 'undefined') {
		this.label = "Default value";
	}else{this.label=label}
	if (typeof posXRel === 'undefined') {
		//this.posXRel = cw/2;
		this.posXRel = Math.random()*cw;
	}else{this.posXRel=posXRel;}
	if (typeof posYRel === 'undefined') {
		//this.posYRel = ch/2;
		this.posYRel = Math.random()*ch;
	}else{this.posYRel=posYRel;}
	if (typeof shape === 'undefined') {
		this.shape = "rectangle";
	}else{this.shape=shape}
	if (typeof alpha === 'undefined') {
		this.alpha = 1;
	}else{this.alpha=alpha}

	// Define component type as needed
	if(isGraphic(this.label)){this.componentType="graphic";}

	if(this.componentType!="graphic" && typeof this.label!="number"){
		this.isLayoutComponent = this.label.startsWith("layout") || this.label=="root";
	}
	
	// Calculate width and height based on label (if none explicitly given) --- DO NOT REMOVE; seemingly doesnt make a diff, but does in some cases
	ctx.font = fontPrimary;
	if (typeof widthRel === 'undefined') {
		if(this.componentType!="graphic"){
			this.widthPixels = ctx.measureText(this.label).width+paddingNormal*2; 
		}else{
			// Means its a graphic
			this.widthPixels=this.label.width; // OK WORKS
		}
		this.widthRel = "undefined";	
	}else{this.widthRel=widthRel}
	if (typeof heightRel === 'undefined') {
		this.heightPixels =fontBaseSizePrimary+paddingNormal*2; 
		this.heightRel = "undefined";	
	}else{this.heightRel=heightRel}
	if(this.componentType=="graphic"){
		this.heightPixels=this.label.height; // OK WORKS
	}


	// Default Color
	if (typeof color === 'undefined') {
		// Fallback
		this.color = randomColor();
	}else{
		this.color=color;
	}

	// Disabled is false by default
	if (typeof disabled === 'undefined'){
		this.disabled=false;
	}else{this.disabled = disabled;}
	
	// Update and draw button on screen <<<<<<<<<<<<<<<<<<<<<<<<<<
    this.updateAndDraw = function() {
		//works: this.posXRel+=0.1;

		
		if(this.passenger){
			this.passenger.id=this.id; // hacky, just to be used here REF238048290
			
			
			if(gameState=="showingFeedback"){
				if(this.passenger.feedback=="essential" || this.passenger.feedback=="preference" ){
					this.avatar.isSad=true;
				}
			}
		}
		
		//console.log("reviewMode:"+reviewMode);
		if(!reviewModeGlobal){
			this.reviewMode=false;
			this.reviewAvatar=null;
		}
		if(this.passenger){ // hacky; repeats property on card as well
			if(this.reviewMode){
				this.passenger.reviewMode=true;
			}else{
				this.passenger.reviewMode=false;
			}
		}
		if(this.reviewMode){
			//console.log("REVIEW MODE -"+this.passenger.name);
			
			colorReviewMode=colorOrange;
			if(this.passenger.feedback=="essential"){
				colorReviewMode=colorBadLight;
			}
			
			
			// Draw review card
			drawCard(this.passenger,layoutDeckDropAreaPos,0,true);
			
			// update message to show below the card
			reviewFeedbackText="";
			if(this.passenger.feedback=="essential"||this.passenger.feedback=="preference"){
				if(typeof this.passenger.myReviewFeedbackText === 'undefined'){						
					reviewFeedbackText="PREFERENCE NOT SATISFIED"; // generic
				}else{
					reviewFeedbackText=this.passenger.myReviewFeedbackText.toUpperCase()
				}
			}
			
			// Draw avatar on it (create it if non existent)
			if(!this.reviewAvatar){
				moveToTop(this.id);
				this.reviewAvatar = new avatarGraphic(0,layoutDeckDropAreaPos[0],layoutDeckDropAreaPos[1]); // REF238947329 
			}else{
				this.reviewAvatar.passport=this.passenger.passport;
				this.reviewAvatar.sizePixels = cardWidth/15;
				this.reviewAvatar.x = layoutDeckDropAreaPos[0]-(cardWidth/2)+(cardWidth/5);
				this.reviewAvatar.y = layoutDeckDropAreaPos[1]-(cardHeight/2)+(cardHeight/3);		
				if(this.avatar.isSad){this.reviewAvatar.isSad=true;}

				
				this.reviewAvatar.updateAndDraw();	
			}
			
			// Draw  highlight
			if(this.passenger.feedback!="essential" && this.passenger.feedback!="preference"){
				var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
				var highlightScale = 0.85;
				var highlightWidth = seatWidth*highlightScale;
				var highlightShift = (seatWidth/2)*highlightScale;
				var sx=0;
				var sy=0;
				ctx.save();
				//this.mySeatPos
				sx = layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (this.mySeatPos[0]+0.5)*seatWidth;
				sy = layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (this.mySeatPos[1]+0.5)*seatWidth;

				if(this.mySeatPos[0]>2){
					sx +=seatWidth;
				}

				ctx.fillStyle=colorReviewMode;
				ctx.fillRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);

			//	ctx.strokeRect(sx-highlightShift, sy-highlightShift, highlightWidth, highlightWidth);

				ctx.fillStyle="black";
				ctx.textAlign = "center";

				ctx.font = 100+" "+fontUISize/2	+ "px "+fontFamilyPrimary;			
								
				ctx.restore();
			}
			
		}
			

			
		// Updates this.pointerHoverStateOnMe
		if(this.pointerIsHoveringMe){
			if(this.pointerHoverStateOnMe=="hovered"){this.pointerHoverStateOnMe="hovering";}
			if(this.pointerHoverStateOnMe=="no"){this.pointerHoverStateOnMe="hovered";}		
		}else{
			this.pointerHoverStateOnMe="no";
		}

		
		// Define component type as needed
		if(this.passenger && this.componentType!="card"){this.componentType="passenger";}


		

		if(this.pai=="god"){
			this.paiPosPixels=[cw/2,ch/2];
			this.paiSizePixels=[cw,ch];
		}else{
			this.paiPosPixels=[this.pai.posxPixels,this.pai.posyPixels];
			this.paiSizePixels=[this.pai.widthPixels,this.pai.heightPixels];
		}
		
		// If changed dads, recalculate relative positions immediatelly based on new dad
		if(this.justGotaDad){
			if(this.posxPixels!=undefined && this.posyPixels!=undefined){
				this.posXRel = (this.posxPixels-(this.paiPosPixels[0]-this.paiSizePixels[0]/2))/this.paiSizePixels[0];
				this.posYRel = (this.posyPixels-(this.paiPosPixels[1]-this.paiSizePixels[1]/2))/this.paiSizePixels[1];
				//adjustToCanvasSizeAndRes();
		}
			
			this.justGotaDad=false;
		}

	
		// UPDATE FONT
		// Default
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
	
 
		// Update pixels vars, from proportional ones // TBD: make this run only once, when it changes (in a scalable way, as every single element will ggo through this)
		this.posxPixels=this.paiPosPixels[0]-this.paiSizePixels[0]/2+(this.posXRel*this.paiSizePixels[0]);
		this.posyPixels=this.paiPosPixels[1]-this.paiSizePixels[1]/2+(this.posYRel*this.paiSizePixels[1]);
		
		
		if(this.anchorTop){this.posyPixels+=this.heightPixels/2;}
		if(this.anchorBottom){this.posyPixels-=this.heightPixels/2;}
		if(this.anchorLeft){this.posxPixels+=this.widthPixels/2;}
		if(this.anchorRight){this.posxPixels-=this.widthPixels/2;}

		if(this.componentType=="card" && !this.pointerIsDraggingOnMe){
			// Adjust card Lift animation
			this.lift+=(this.liftGoal-this.lift)/easeSpeedNormal;

		}


		// if has passenger, add avatar to it (if hasnt yet)
		if(this.passenger && !this.avatar ){
			
			this.avatar = new avatarGraphic(0,this.posxPixels,this.posyPixels); // REF238947329 
			console.log("New avatar for "+ this.passenger.name);
 				
			this.avatar.targetx=this.posxPixels;
			this.avatar.targety=this.posyPixels;

			this.avatar.isSad=false;
			
			this.avatar.easeSpeed =1; // always the same; NTH: make it change when transitioning from card to avatar
		}
		
		
		// Adjust width and height
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
			// If its a graphic
			if(this.graphicScale=="fitDadHeight"){
				// If image should fit Dad
				this.heightRel = 1;
			}
			this.heightPixels = this.heightRel*this.paiSizePixels[1];
			this.graphicScale=this.heightPixels/this.label.height;
			this.widthPixels = this.label.width*this.graphicScale; 
		}


		if(this.componentType=="card"){
			this.color="AliceBlue";
			this.widthPixels=cardWidth; // hacky (because I later changed its parent to be the Drop area instead
			this.heightPropWidth=cardHeightPropWidth;
		}

		
		// if any of them is square, use the other's measurement
		if(this.widthPropHeight){this.widthPixels = this.heightPixels*this.widthPropHeight;}
		if(this.heightPropWidth){this.heightPixels = this.widthPixels*this.heightPropWidth;}
		
		// If pointer is dragging on top of me
		if(this.pointerIsDraggingOnMe){
			if(debug){
				ctx.fillStyle = "red";
				ctx.fillRect(this.compX1-this.fontSize*2, this.compY1-this.fontSize,this.fontSize,this.fontSize);
			}			

			// If I am draggable (and on top), move me
			if((this.actionOnDrag=="drag"||keyShift) && topmostComponentOnLocationOfLastPointerDown==this){
				addToDebugText(this.label+" being dragged. Random:"+Math.random());

				// If this component is just a passenger (i.e. not in a card), lock to grid
				if(this.componentType=="passenger"){
					
					gameState="waitingPlayerPlacePassenger";
					
					
					// lock to grid
					//console.log("Target = mouse Lock -"+this.passenger.name);
					this.targetx=mouseXlock;
					this.targety=mouseYlock;

					// show hint
					//posHint.label=seatMapGridActivePos; // REF28904820
					//Useful: tempSeat = new component(String.fromCharCode(65+letterCount),1/(columnCountWithAisle*2)+(1/(columnCountWithAisle))*i,-1/(2*columnCountWithAisle));

				}else{
					//console.log("Target = mouse+offset -"+this.passenger.name);
					this.targetx=mouseX+this.pointerClickOffsetX;
					this.targety=mouseY+this.pointerClickOffsetY;
				}

		
		}
		}

		// If is card and not being dragged, goHome
		// (if works, them the gohome from when STOPPING dragging can be deleted?)
		if(this.componentType=="card" && !this.pointerIsDraggingOnMe && !this.goHome && !this.isSeated){
			//console.log("GO HOME (ANOTHER) - "+ this.passenger.name);
			this.goHome=true;
		}

 

		// Change component type between passenger and card, depending on location/situation
		if(this.passenger && !this.disabled){

			// Card <> Avatar
			// PS: the below used to be based on drop area; changed to be simply x/y (portrait/landscape)
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
			// Card turns into avatar (and parents to layoutSeatmap) if: card dragged out of droparea
			if(this.pointerIsDraggingOnMe && this.nextToSeatMap && this.componentType!="passenger" && topmostComponentOnLocationOfLastPointerDown==this){
 				this.componentType="passenger";
				this.anchorLeft=false;
				parentComponents(this,layoutSeatmap,true);
			}
			// Avatar turns into card (and parents to layoutDeckDropArea) if: card dragged into droparea, or reject
			if((this.pointerIsDraggingOnMe && !this.nextToSeatMap  && this.componentType!="card" && topmostComponentOnLocationOfLastPointerDown==this)||this.goHome){
  
				if(this.goHome){
					//console.log("Send home: "+this.passenger.name);
					var fanAmount = this.widthPixels/70; // NEXT: Make this be just the inner graphics, so its not a factor affecting position instability.
					this.targety=layoutDeckDropArea.posyPixels+this.passenger.myPosInDeck*fanAmount;
					this.targetx=layoutDeckDropArea.posxPixels+this.passenger.myPosInDeck*fanAmount;
				}else{							
					//console.log("Send home too?: "+this.passenger.name);
					this.targety=layoutDeckDropArea.posyPixels;
					this.targetx=layoutDeckDropArea.posxPixels;
				}
				

				this.componentType="card";

				if((Math.abs(this.posxPixels-layoutDeckDropArea.posxPixels)<practicallyZero)&&(Math.abs(this.posyPixels-layoutDeckDropArea.posyPixels)<practicallyZero)){
					parentComponents(this,layoutDeckDropArea,true);	 
					this.goHome=false; // REF7234732947 This shouldnt be repeating so often
					// console.log("gohome fALSE"); 
				}
			}
		
		}

		
		// Update position (if needed)  
		if(this.pointerIsDraggingOnMe){this.easeSpeed=easeSpeedFast;} // otherwise moving things feels too floaty; resets only once target is met
		if(typeof this.targetx !== 'undefined') {			
			this.deltaX = this.targetx-this.posxPixels;
			if (Math.abs(this.deltaX)<practicallyZero){
				this.posxPixels=this.targetx;
				this.targetx=undefined;
			}
			this.posxPixels += this.deltaX/this.easeSpeed;
 			//if(this.componentType=="card"){	alert(this.easeSpeed);}
			
			// Update Rel pos as well, based on the new pixel one
			this.posXRel = (this.posxPixels-(this.paiPosPixels[0]-this.paiSizePixels[0]/2))/this.paiSizePixels[0];
 			
			// Adjust if aligned
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


			// Update Rel pos as well, based on the new pixel one
			this.posYRel = (this.posyPixels-(this.paiPosPixels[1]-this.paiSizePixels[1]/2))/this.paiSizePixels[1];
			
			// Adjust if aligned
			if(this.anchorTop){this.posYRel -= (this.heightPixels/2)/this.paiSizePixels[1];}
			if(this.anchorBottom){this.posYRel += (this.heightPixels/2)/this.paiSizePixels[1];}			
		}
		// reset easespeed once target is reached
		if(this.targetx==undefined && this.targety==undefined){
			this.easeSpeed=easeSpeedNormal;
		}
 
		// Update alpha (if needed)
		// Also takes actionOnFade once fade done (if any)
		if (typeof this.targetAlpha !== 'undefined') {
			this.deltaAlpha = this.targetAlpha-this.alpha;
			if (this.actionOnFade=="remove" && Math.abs(this.deltaAlpha)<practicallyZero){removeComponent(this.id);}
			this.alpha += this.deltaAlpha/this.easeSpeed;
		}


		// Runs once, when pointer goes down (NOT when clicked , which is down+up)
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
						// This runs for full stack of components
						// But also useful to know what is the topmost one:
						topmostComponentOnLocationOfLastPointerDown=this;
						
						this.targetx=undefined;
						this.targety=undefined;

						if(this.passenger){
							lastObjectWithPassengerClickedOrDragged=this;
							//	console.log("Passenger last clicked/dragged:"+lastObjectWithPassengerClickedOrDragged.passenger.name);
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
					console.log("$$ CLICKED "+this.passenger.name);
					for(var i=0;i<arrayOfComponents.length;i++){
						arrayOfComponents[i].reviewMode=false;
					}
					this.reviewMode=true;
					reviewModeGlobal=true;
				}else{				
					if(reviewModeGlobal){ // tapping anywhere but a passenger disables review Mode
						this.reviewMode=false;
						reviewModeGlobal=false;
						btnCreateDeck.pointerIsDownOnMe=false; // hacky; to avoid clicking the "NEXT, PLEASE" button
					}
				}
			}
		}


		// Inheritances
		if(this.pai!="root"){
			// make my pos relative to it, if stageIsPai
			if(this.inheritPos){ // TBD: this is redundant, as its already having dad as stage
			}			
			
			// draw a line to it (except if pai is root)
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
		
	
		// (includes CLICKS) If pointer is down on me (runs every frame; but only for stuff that has been clicked) // TBD: confirm this
		if(this.pointerIsDownOnMe && (!reviewModeGlobal||this==componentIconReset||this==resetYes||this==resetNo)){
			if(debug){
				ctx.fillStyle = "yellow";
				ctx.fillRect(this.compX1-this.fontSize, this.compY1-this.fontSize,this.fontSize,this.fontSize);
			}

			// If click and move a bit, it's dragging
			if(((Math.abs(mouseX-this.posxPixels+this.pointerClickOffsetX)>dragDelta)||(Math.abs(mouseY-this.posyPixels+this.pointerClickOffsetY)>dragDelta))&&!this.pointerIsDraggingOnMe){
				// RUNS ONCE
				// If it's a passenger, and it's being dragged out of the seat...
				if(this.passenger && layoutSeatmap.pointerIsDraggingOnMe){
					// Log currentDeckOfCards
					console.log("A currentDeckOfCards:");
					for(var i=0; i<currentDeckOfCards.length;i++){
						console.log(i+":"+currentDeckOfCards[i].passenger.name);
					}
					//
					this.isSeated=false;
					this.mySeatPos=[-1.-1];
					// ...add it back to current deck (make sure to update myPosInDeck for all others), THEN BRING IT TO END OF MASTER arrayOfComponents[i], so it renders on  top
					currentDeckOfPassengerInfo.unshift(this.passenger);
					currentDeckOfCards.unshift(this);
					// Log currentSeatedDeck
					console.log("currentSeatedDeck:");
					for(var i=0; i<currentSeatedDeck.length;i++){
						console.log(i+":"+currentSeatedDeck[i].passenger.name);
					}
					// Remove from currentSeatedDeck
					for(var i=0; i<currentSeatedDeck.length;i++){
						if(currentSeatedDeck[i].id==this.id){
							currentSeatedDeck.splice(i,1);
						}
					}

					// Log currentDeckOfCards
					console.log("B currentDeckOfCards:");
					for(var i=0; i<currentDeckOfCards.length;i++){
						console.log(i+":"+currentDeckOfCards[i].passenger.name);
					}
					//


					moveToTop(this.id);
					for(i=1;i<currentDeckOfPassengerInfo.length;i++){
						currentDeckOfPassengerInfo[i].myPosInDeck+=1;
						currentDeckOfCards[i].myPosInDeck+=1;
					}					
					//..., and remove it from array of seated passengers
					console.log("REMOVED "+this.passenger.name+" FROM SEAT AT "+seatMapGridPosOnPointerUpOrDown);

					// Log currentDeckOfCards
					console.log("C currentDeckOfCards:");
					for(var i=0; i<currentDeckOfCards.length;i++){
						console.log(i+":"+currentDeckOfCards[i].passenger.name);
					}
					//


					// Log currentSeatedDeck
					console.log("currentSeatedDeck:");
					for(var i=0; i<currentSeatedDeck.length;i++){
						console.log(i+":"+currentSeatedDeck[i].passenger.name);
					}

					arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=null;					
					totalPassengersSeated-=1;
					
					//lastObjectWithPassengerClickedOrDragged=this.passenger;
				}
				this.pointerIsDraggingOnMe=true;
			}
			
			// ie. IF CLICKED ON ME (ie. If pointer is released after being down on me)
			if(!pointerDown){
		
 
				// If the release happens on me, and Im not being dragged, it's a click
				if(!this.pointerIsDraggingOnMe && pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
					//console.log("IT'S A CLICK. this.componentType="+this.componentType);
				
				
					// If the click is on a card that is on a deck, shuffle it
					if(this.componentType=="card" && this.passenger.myPosInDeck==0 && currentDeckOfCards.length>1){

						// for(var i=currentDeckOfCards.length-1;i>0;i--){		} // REF839823948903 
								
						if(1){ 
					
							// Remove all into a temp array
							var tempCardArray = [];
							var tempCard;
							var tempCurrDeckLength = currentDeckOfCards.length;
							for(var i=0;i<tempCurrDeckLength;i++){
								tempCard = currentDeckOfCards[0]; // changes , because deck keeps getting smaller
								currentDeckOfPassengerInfo.splice(0,1);
								currentDeckOfCards.splice(0,1);		
								// 
								tempCardArray.push(tempCard);
							}

							// Get top one from tempCardArray, and add it back to (now empty) deck (note: // It wont stay in pos 0!)
							currentDeckOfPassengerInfo.push(tempCardArray[0].passenger);
							currentDeckOfCards.push(tempCardArray[0]);
							currentDeckOfPassengerInfo[0].myPosInDeck=tempCurrDeckLength-1; // because this will become its new pos below
							currentDeckOfCards[0].myPosInDeck=tempCurrDeckLength-1;  // because this will become its new pos below
			
							// Add back all others, inverted (skip first, as that was added above already)
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
								// if there are lone seats, don't allow
								warningSeatList=loneSeats;
								showWarning=loneSeatsMsg;
								showWarningCounter=showWarningDelay;	
							}else{
								// otherwise..
								for(i=0;i<currentSeatedDeck.length;i++){
									currentSeatedDeck[i].disabled=true;
								}
								currentSeatedDeck=[];								
								if(this.actionOnClick=="createNewCardDeck"){								
									// next, please							
									console.log("NEXT DECK!");
									gameState="createNewCardDeck";
								}
								if(this.actionOnClick=="submit"){
									// Submit									
									gameState="showFeedback";						
								}
							}
						}
					}					

					if(this.actionOnClick=="reload"){
						//myReload();
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
 						console.log("showHelp");
						isShowingHelp=true;
						
					}
					if(this.actionOnClick=="resumeGame"){
						introText.style.opacity="0";
 						console.log("resumeGame");
						isShowingHelp=false;						
					}

					if(this.actionOnClick=="resetNo"){
 						console.log("resetNo");
						isShowingResetConfirmation=false;
					}

					if(this.actionOnClick=="resetYes"){
						myReload();
					}

	
				}
				
				// If the release is from dragged
				if(this.pointerIsDraggingOnMe && !this.isSeated){ // note: if already seated, drag+release is ignored
					// When release after dragging a passenger
					if(typeof lastObjectWithPassengerClickedOrDragged !== 'undefined'){
						if(this.passenger && lastObjectWithPassengerClickedOrDragged==this){
							// When the release happens on the seatmap 
							if(layoutSeats.pointerIsHoveringMe){ 
								//console.log("None of these can ever be zero")
								//console.log("seatMapGridPosOnPointerUpOrDown[0]:"+seatMapGridPosOnPointerUpOrDown[0])
								//console.log("seatMapGridPosOnPointerUpOrDown[1]:"+seatMapGridPosOnPointerUpOrDown[1])
								var tgx = seatMapGridPosOnPointerUpOrDown[0];
								var tgy = seatMapGridPosOnPointerUpOrDown[1];
								if(typeof tgx==='undefined' || tgx==0){
									seatMapGridPosOnPointerUpOrDown[0]=3;
									console.log("Fake pos to avoid glitch");
								}
								if(typeof tgy==='undefined' || tgy==0){seatMapGridPosOnPointerUpOrDown[1]=5;}
								if(typeof tgx!=='undefined' && tgx!=0 && typeof tgy!=='undefined' && tgy!=0){
									checkPlacingVar = checkPlacing();
									if(checkPlacingVar=="accept"){
										// ACCEPT
										// (might still be an invalid position, which won't allow continuing once all group is placed - see below)
										totalPassengersSeated+=1;

										this.isSeated=true;
										this.componentType="passenger";

										console.log("Accepted: "+this.passenger.name);
										console.log("seatMapGridActivePos:"+seatMapGridActivePos);
										console.log("seatMapGridPosOnPointerUpOrDown:"+seatMapGridPosOnPointerUpOrDown);
	 
										// Add this passeger to the correct location in the arrayOfSeatedPassengers								
										arrayOfSeatedPassengers[(seatMapGridPosOnPointerUpOrDown[0]-1)][(seatMapGridPosOnPointerUpOrDown[1]-1)]=lastObjectWithPassengerClickedOrDragged.passenger;
										this.mySeatPos=[(seatMapGridPosOnPointerUpOrDown[0]-1),(seatMapGridPosOnPointerUpOrDown[1]-1)];
										
										// Remove this passenger from the currentDeckOfPassengerInfo (first, update myPosInDeck for the ones after them)
										if(currentDeckOfPassengerInfo.length>1){						
											for(i=this.passenger.myPosInDeck+1;i<currentDeckOfPassengerInfo.length;i++){
												
												currentDeckOfPassengerInfo[i].myPosInDeck-=1;
												currentDeckOfCards[i].myPosInDeck-=1;
											}
										}
										currentDeckOfPassengerInfo.splice(this.passenger.myPosInDeck,1);
										currentDeckOfCards.splice(this.passenger.myPosInDeck,1);
										currentSeatedDeck.push(this);
																				
										// If current deck is empty, show NEXT/SUBMIT 
										if(currentDeckOfPassengerInfo.length==0){
											// I used to have a lone warning here; but was too busy

											// Show buttons
											if(arrayOfPassengers.length>0){
												gameState="showNextButton";
											}else{
												gameState="showSubmitButton";
											}
										}
										//
										var seatWidth = layoutSeats.widthPixels/columnCountWithAisle;
										if(seatMapGridPosOnPointerUpOrDown[0]<4){seatMapGridPosOnPointerUpOrDown[0]=seatMapGridPosOnPointerUpOrDown[0]-1;}
										this.targetx=layoutSeats.posxPixels-layoutSeats.widthPixels/2 + (seatMapGridPosOnPointerUpOrDown[0]+0.5)*seatWidth;
										this.targety=layoutSeats.posyPixels-layoutSeats.heightPixels/2 + (seatMapGridPosOnPointerUpOrDown[1]-1+0.5)*seatWidth;
										console.log("Making sure "+this.passenger.name+" stays where they were seated. PS: this.goHome ="+ this.goHome);
										console.log("---------------------------------------------------");
										this.goHome=false;
										this.pointerIsDraggingOnMe=false;
									}
									if(checkPlacingVar=="occupied"){ // Temp removed REF37989: ||checkPlacingVar=="loneWindowSeat"||checkPlacingVar=="loneMiddleSeat"
										// REJECT
										console.log("reject:"+this.passenger.name +" timeCounter:"+timeCounter);
										this.goHome=true;
										// Show warning message, highlight relevant seat
										showWarning="Seat already occupied";
										showWarningCounter=showWarningDelay;
										warningSeatList=[[seatMapGridPosOnPointerUpOrDown[0]-1,seatMapGridPosOnPointerUpOrDown[1]-1]];
										//
										this.mySeatPos=[-1,-1];
										// If still found in seat array, remove
										// (hack to avoid bug where moving avatar quickly from seated into a reject seat wouuld lead them to be sent home but not removed from seat
										// (Hopefully the below should have no bad side effecs)
										console.log("Confirm they didnt remain in array of seated");
										for(var i=0;i<columnCount;i++){
											for(var j=0;j<rowCount;j++){
												if(arrayOfSeatedPassengers[i][j]!=null && arrayOfSeatedPassengers[i][j]!=passengerPreseat){
													if(arrayOfSeatedPassengers[i][j].name==this.passenger.name){													
														arrayOfSeatedPassengers[i][j]=null;
														console.log("Found. Removed");
													}
												}
											}
										}
									}
								}else{
									this.goHome=true;
									console.log("go home due to glitch:"+this.passenger.name);
									lastObjectWithPassengerClickedOrDragged=undefined;									
								}
								//lastObjectWithPassengerClickedOrDragged=undefined; // not needed, it seems
							}else{
									this.goHome=true;
									console.log("go home");							
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
					// this.avatar.headShakeAmountTarget=1; // shouldnt shake just by clicking 
				}
			}
			if(this==layoutSeats){
				console.log("pointer Up at: "+seatMapGridActivePos);
				seatMapGridPosOnPointerUpOrDown=seatMapGridActivePos;
			}
			

		}


		// On hover (very ineficient?)
		if(pointIsWithinArea([mouseX,mouseY],this.shape,this.posxPixels,this.posyPixels,this.widthPixels,this.heightPixels)){
			//addToDebugText("hover");
			
			this.pointerIsHoveringMe=true;

			if(this.componentType=="button" || this.isButton){this.highlight=true;}
			
			// Calculate mouseLock x,y positions
			if(this.label=="layoutSeats"){
				mouseLockedToGrid=true;

				// X
				this.pixelsPerColumn = this.widthPixels/columnCountWithAisle;
				this.mouseXPosRelToThis = (mouseX+this.pixelsPerColumn/2-(this.posxPixels-this.widthPixels/2));
				this.mouseXPosInColumns = this.mouseXPosRelToThis/this.pixelsPerColumn;
				if(Math.round(this.mouseXPosInColumns)!=4){ // Dont allow aisle
					this.mouseXPosInColumnsRound = Math.round(this.mouseXPosInColumns);
				} else{
					this.mouseXPosInColumnsRound = 3;
				}
				mouseXlock=(this.posxPixels-this.widthPixels/2)+this.mouseXPosInColumnsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;

				// Y
				this.pixelsPerRow = this.heightPixels/rowCount;
				this.mouseYPosRelToThis = (mouseY+this.pixelsPerRow/2-(this.posyPixels-this.heightPixels/2));
				this.mouseYPosInColumns = this.mouseYPosRelToThis/this.pixelsPerRow;
				this.mouseYPosInRowsRound = Math.round(this.mouseYPosInColumns);
				mouseYlock=(this.posyPixels-this.heightPixels/2)+this.mouseYPosInRowsRound*this.pixelsPerColumn-this.pixelsPerColumn/2;
				
				
				
				// Update the grid pos var
				if(this.mouseXPosInColumnsRound>3){this.mouseXPosInColumnsRound-=1;}
				//console.log("this.mouseXPosInColumns:"+this.mouseXPosInColumns);
				//console.log("this.mouseXPosInColumnsRound:"+this.mouseXPosInColumnsRound);
				if(typeof this.mouseXPosInColumnsRound !== 'undefined'){
					seatMapGridActivePos=[this.mouseXPosInColumnsRound,this.mouseYPosInRowsRound];
					//seatMapGridActivePos=[this.mouseXPosInColumnsRound,this.mouseYPosInRowsRound]; // Changed from this to one above
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


		// Random blinks
		if(this.passenger){		
			if(Math.random()<0.001){
				this.avatar.eyeOpeness=0;		
			}	
		}
	
		// head shake


		// Useful area vars
		// Start and End points of rectangle
		this.compX1 = this.posxPixels-(this.widthPixels/2);
		this.compY1 = this.posyPixels-(this.heightPixels/2);
		this.compX2 = this.compX1+this.widthPixels;
		this.compY2 = this.compY1+ this.heightPixels;
		
		// test
		//this.width += (this.posx/100)*Math.sin(timeCounter/(this.posx/100));



				
		// Draw
		ctx.globalAlpha = this.alpha;
		// Draw base
		if(this.color!="none" && this.componentType!="passenger" && this.componentType!="card"){ 
			ctx.fillStyle = this.color;

			if(this.pointerHoverStateOnMe=="hovered"){ // Runs once

			}
						
			if(this.shape=="rectangle"){
				ctx.fillRect(this.compX1, this.compY1, this.widthPixels, this.heightPixels);
				
				if(this.highlight){ // hacky
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
		//function drawCircle(posx,posy,rad,fillColor, strokeAdd, strokeColor, strokeThickness){					// Draw circle

		// Draw text content
		ctx.font = this.font;
		if(this.componentType=="text" || this.componentType=="button" || this.componentType=="stat"){
			ctx.fillStyle = this.fontColor;
			if(this.color=="none"){
					ctx.fillStyle="black";
			}
			ctx.textAlign = "center";
			//ctx.globalAlpha=0.5;
			var yp = this.posyPixels+this.fontSize/4;
			if(this.shape=="circle"){yp+=this.fontSize/2.5;}
			ctx.fillText(this.label, this.posxPixels, yp);
			ctx.globalAlpha=1;
			if(this.hint){
				// If btnCreateDeck, add hint
				ctx.font = fontPrimary;
				ctx.globalAlpha=0.5;
				ctx.fillStyle = colorShadow50pct;
				ctx.fillText(this.hint, this.posxPixels, yp+this.heightPixels*0.9);
				ctx.globalAlpha=1;
			}
		}
		
		
		// Draw card content
		if(this.componentType=="card"){
			
			drawCard(this.passenger,[this.posxPixels,this.posyPixels],this.lift,false	);
			
		}
		
		// Draw Graphic
		if(this.componentType=="graphic"){
			myDrawImage(this.label,this.compX1, this.compY1,this.graphicScale);
			
			if(this.highlight){ // hacky
				ctx.save();
				ctx.filter = "contrast(1.2)";
				myDrawImage(this.label,this.compX1, this.compY1,this.graphicScale);
				ctx.restore();
			}
			
			
		}
		if(typeof this.passenger !== 'undefined'){ // i.e. if there's a passenger associated with this component


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
			
			// move towards target
			if(this.passenger!=passengerPreseat){
				this.avatar.x += (this.avatar.targetx-this.avatar.x)/this.avatar.easeSpeed;
				this.avatar.y += (this.avatar.targety-this.avatar.y)/this.avatar.easeSpeed;		
			}else{
				this.avatar.x += (this.avatar.targetx-this.avatar.x);
				this.avatar.y += (this.avatar.targety-this.avatar.y);	
			}

			if(!this.disabled && this.componentType!="card" && !this.pointerIsDraggingOnMe){
				// bobs head
				this.avatar.y+=Math.sin((Math.PI)*this.id+timeCounter/6)*2;					
			}
			
			this.avatar.updateAndDraw();
		}
		

		
		if(0){
			// Draw id text
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(this.targetx, this.posxPixels, 100+this.posyPixels+this.fontSize*1.5);			
		}
		if(0){
			// Draw id text
			ctx.fillStyle = "white";
			ctx.textAlign = "center";
			ctx.fillText(this.id, this.posxPixels, this.posyPixels+this.fontSize*1.5);			
			// Draw offset
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText("offset:"+this.pointerClickOffsetX+","+this.pointerClickOffsetY, this.posxPixels, this.posyPixels-this.fontSize*1.5);
			ctx.fillText("pos:"+this.posxPixels+","+this.posyPixels, this.posxPixels, this.posyPixels-this.fontSize*3);
			ctx.fillText("paiPosPixels[]:"+this.paiPosPixels[0]+","+this.paiPosPixels[1], this.posxPixels, this.posyPixels+this.fontSize*3);
			ctx.fillText("this.color:"+this.color, this.posxPixels, this.posyPixels+this.fontSize*6);
 
		}
		// Reset alpha
		ctx.globalAlpha = 1;
		//
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
	
	// 	Fadein by default (if not layout component)
	if(!this.isLayoutComponent || this.componentType=="card"){
		this.fadeIn();
	}else{
		this.color = "white";
	}
			
    this.crashWith = function(otherobj) { // NOT BEING USED; probably usable for droping in hotspot
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

// Functions that act on the fake grid array
function addFakePixel(fakeX, fakeY, rgba) {									// Adds a "fake" pixel to the stage (ignores out of bounds, applies Math.floor)

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
				// If far left or far right, draw full vertical line
				addFakePixel(i, j, rgba);
			}else{
				// Otherwise, only draw borders on top and bottom
				if(j<(borderWidth)||(j>heightInFakePixels-borderWidth-1)){
					addFakePixel(i, j, rgba);
				}
			}
		}
	}		
}

// Functions that affect output
function clearCanvas(){														// Fill stage white (called at top of each mainLoop


	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctxd.clearRect(0, 0, canvasd.width, canvasd.height);
	if(usingFakePixelsCanvas){
		ctxf.clearRect(0, 0, canvasf.width, canvasf.height);
	}


	if(0){ // this clear by painting
		ctx.fillStyle = "purple";
		ctx.fillRect(0,0,ww,wh);	

		if(usingFakePixelsCanvas){
			ctxf.fillStyle = "pink";
			ctxf.fillRect(0,0,ww,wh);
		}
	}

	// ctx.fillStyle = "white";
	// ctx.fillRect(0,0,ww,wh);
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
	
	// Store the current context state (i.e. rotation, translation etc..)
    ctx.save()

    //Convert degrees to radian 
    var rad = this.deg * Math.PI / 180;

    //Set the origin to the center of the image
    ctx.translate(x + this.width / 2, y + this.height / 2);

    //Rotate the canvas around the origin
    ctx.rotate(rad);

    //draw the image    
    ctx.drawImage(img,this.width / 2 * (-1),this.height / 2 * (-1),this.width,this.height);

    // Restore canvas state as saved from above
    ctx.restore();
	
	// Source: https://stackoverflow.com/questions/2677671/how-do-i-rotate-a-single-object-on-an-html-5-canvas
}

// When using fake pixel canvas
function drawFakePixelGrid(){														// Draws to screen whatever is in fakePixelGrid (using the drawFakePixel function below)
	for(i=0;i<widthInFakePixels;i++){
		for(j=0;j<heightInFakePixels;j++){
			drawFakePixel(i,j,fakePixelGrid[i][j]);
		}
	}	
}
function drawFakePixel(fakeX, fakeY, rgba) {									// Draw a "fake" pixel (which really maps to a rectangle once stage is resized to fit screen)
	ctxf.fillStyle = rgba;
	ctxf.fillRect(fakeX,fakeY,1,1);
	
}

// Useful functions
function addToDebugText(line){
	debugText.push(line);
}
function randomFromSeed(seed) { 											// Use this for whatever random you want to give same result given seed

    var tempRandomCalc = Math.sin(seed) * 1000000;
	//alert(tempRandomCalc);

    return tempRandomCalc - Math.floor(tempRandomCalc);

}
function toggle(targetVar){													// Var name must be within "quotes"! 
 
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


// Checker functions
function isBetween(numberToTest,numA,numB){									// Test if numberToTest is between numA and numB (including). Returns true or false
	
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
	
	// Later you might add inlA and inclB, to allow choosing include or not
}
function pointIsWithinArea(point,shape,posx,posy,width,height){								// Test if point (x,y) is within a rectangular area (x1,y1,x2,y2), or circle (x,y,radius)
	if (typeof shape === 'undefined') {
		this.shape = "rectangle";
	}else{this.shape=shape}


	if(this.shape=="rectangle"){
		if((point[0]>(posx-width/2))&&(point[0]<(posx+width/2))&&(point[1]>(posy-height/2))&&(point[1]<(posy+height/2))){return true;}
	}

	if(this.shape=="circle"){
		if((Math.pow((point[0]-posx), 2)+Math.pow((point[1]-posy), 2))<Math.pow((width/2),2)){return true;}
	}	

	// Fallback (shouldnt ever happen)
	return false;
}
function pointsAreCloserThan(point1,point2,distance){	// lazy, doesn't calculate sincos dist
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
	
 
		
	// lift
	var actualX = pos[0]-lift;
	var actualY = pos[1]-lift;
	//console.log("lift:"+lift);
	
	// BASE
	
	// Useful area vars
	// Start and End points of rectangle
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

 
	
	// TEXT
	ctx.fillStyle = "black";			
	ctx.textAlign = "left";
	var fontSize = fontUISize;
	ctx.font = fontUI;				
	var lineHeightRel = 1.5;		
	// Name
	ctx.fillText(pass.name, actualX-cardWidth/8, actualY-cardHeight/2+fontSize*2);
	ctx.globalAlpha=0.8;
	// Age
	ctx.font = 400+" "+fontSize*0.9	+ "px "+fontFamilyPrimary;
	ctx.fillText(pass.age+"yo", actualX-cardWidth/8, actualY-cardHeight/2+fontSize*(2+lineHeightRel*1));
	// Preference
	if(typeof pass.pref !== 'undefined'){
		for(var i=0; i<pass.pref.length; i+=1){
			ctx.fillText(bulletPoint+" "+pass.pref[i], actualX-cardWidth/8, actualY-cardHeight/2+fontSize*(2+lineHeightRel*(2+i)));
		}
	}
	// Code
	if(typeof pass.code !== 'undefined'){
		ctx.font = 600+" "+fontSize*0.7 + "px "+fontFamilyPrimary;
		// Black base
		var codeTextBoxWidth = ctx.measureText(pass.code).width+paddingNormal*2;
		ctx.fillRect(actualX+(cardWidth/2)-(cardWidth/7)-codeTextBoxWidth+paddingNormal, actualY-cardHeight/2+fontSize*(2+lineHeightRel/2), codeTextBoxWidth,fontSize);
		// Code
		ctx.textAlign = "right";
		ctx.fillStyle="white";
		ctx.fillText(pass.code, actualX+(cardWidth/2)-cardWidth/7, actualY-cardHeight/2+fontSize*(2+lineHeightRel*1));
	}			
	ctx.globalAlpha=1;	

	// If Group, pagination
	if(typeof pass.group !== 'undefined'){
		ctx.globalAlpha=0.6;
		ctx.font = 400+" "+fontSize*0.8	+ "px "+fontFamilyPrimary;
		ctx.fillStyle="black";
		ctx.textAlign="left";
		ctx.fillText((pass.myNumInDeck+1)+"/"+(currentDeckOfCards.length+currentSeatedDeck.length), actualX-cardWidth/2+paddingNormal*1.5, actualY+cardHeight/2-paddingNormal*1.5);
		ctx.globalAlpha=1;
		
	}
	
	// If review mode, show an X
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
	// pos in arrayOfSeatedPassengers[i][j] of someone with a group
	var isTogLeft=false;
	var isTogRight=false;
	var groupCounter = 1;
	var tempPerson = arrayOfSeatedPassengers[i][j];
	var tempLine = [];
	tempLine.push(tempPerson);
	
	var pointer = i;
	
	console.log("Checking if group is Together for "+tempPerson.name);
	
	// Check left
	console.log("Check to left");
	while(pointer>0){
		pointer-=1;
		if(arrayOfSeatedPassengers[pointer][j]!=null){
			if(typeof arrayOfSeatedPassengers[pointer][j].group !== 'undefined'){
				if(arrayOfSeatedPassengers[pointer][j].group==tempPerson.group){
					groupCounter+=1;
					console.log("Person to left is of my group:"+arrayOfSeatedPassengers[pointer][j].name);
				}else{					
					console.log("BREAK: Person to left is not of my group:"+arrayOfSeatedPassengers[pointer][j].name);
					break;
				}
			}else{
				console.log("BREAK: Person to left is not my group, as has no group:"+arrayOfSeatedPassengers[pointer][j].name);
				break; 
			}
		}else{
			console.log("BREAK: Nobody further left.");
			break;
		}
	}
	pointer = i;
	// Check right
	console.log("Check to right");
	while(pointer<columnCount-1){
		pointer+=1;
		if(arrayOfSeatedPassengers[pointer][j]!=null){
			if(typeof arrayOfSeatedPassengers[pointer][j].group !== 'undefined'){
				if(arrayOfSeatedPassengers[pointer][j].group==tempPerson.group){
					console.log("Person to right is of my group:"+arrayOfSeatedPassengers[pointer][j].name);
					groupCounter+=1;
				}else{
					console.log("BREAK: Person to right is not of my group:"+arrayOfSeatedPassengers[pointer][j].name);
					break;
				}
			}else{
				console.log("BREAK: Person to right is not my group, as has no group:"+arrayOfSeatedPassengers[pointer][j].name);
				break; 
			}
		}else{
			console.log("BREAK: Nobody further right.");
			break;
		}
	}
	
	// Count how many there actually is for this group
	var actualGroupCount=0;
	for(var a=0;a<arrayOfPassengersUntouched.length;a++){
		if(arrayOfPassengersUntouched[a].group==tempPerson.group){
			actualGroupCount+=1;
		}
	}
	
	console.log(groupCounter+": groupCounter x actualGroupCount :"+actualGroupCount);
	
	// Add a var indicating if at least their not fully alone (REF73893)
	if(groupCounter>1){
		tempPerson.isNextToAtLeastOnePersonFromGroup=true;
	}else{
		tempPerson.isNextToAtLeastOnePersonFromGroup=false;		
	}
	
	// Decide if group together or not, attribute variables accordingly
	var result = groupCounter==actualGroupCount;

	// Count how many there actually is for this group // NTH: no need to redo the below for every person from group (the above , yes REF73893)
	for(var i=0;i<columnCount;i++){		
		for(var j=0;j<rowCount;j++){
			if(arrayOfSeatedPassengers[i][j]!=null){
				if(typeof arrayOfSeatedPassengers[i][j].group !== 'undefined'){
					if(arrayOfSeatedPassengers[i][j].group==tempPerson.group){
						arrayOfSeatedPassengers[i][j].myGroupIsTogether=result;
						console.log(arrayOfSeatedPassengers[i][j].name+" got var myGroupIsTogether as:"+result);
					}
				}
			}
		}
	}
	
	//
	return result;
	
}

function loadAsset(name,ext,subFolder){												// loads asset (adds it to an array, that can later be checked to make sure its all loaded)
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

// Basic draw functions
function drawCircle(posx,posy,rad,fillColor, strokeAdd, strokeColor, strokeThickness){					// Draw circle
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

function generateUniqueID() {			// numbers from 0 to 1
  return Date.now().toString()+Math.random();
}

function removeComponent(id){													// TBD: have a single function for this, that knows which array to look for?
	for(i=0;i<arrayOfComponents.length;i++){
		if(arrayOfComponents[i].id==id){
			arrayOfComponents.splice(i,1);
			break;
		}
	}
}

// Project specific functions (examples)


// 3d functions
function distanceBetween(pointA,pointB){													// distance between two 3d points
    var x1 = pointA[0];
    var x2 = pointB[0];
    var y1 = pointA[1];
    var y2 = pointB[1];	
    var z1 = pointA[2];
    var z2 = pointB[2];
	
	return Math.pow(Math.pow(x2 - x1,2) + Math.pow(y2 - y1,2) + Math.pow(z2 - z1,2), 1/2);
}

function onKeyUp(e) {

	if(e.keyCode == 16) { 		// SHIFT
		keyShift=false;
	}
	
	
	if(e.keyCode == 49){ // 1
		canvasRes=1;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 50){ // 2
		canvasRes=0.5;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 51){ // 3
		canvasRes=0.25;
		adjustToCanvasSizeAndRes();
	}
	if(e.keyCode == 32) { //Space-bar		
		keySpace=false;
		
	}	
}

function onKeyDown(e) {														// This function is called by the HTML whenever there is a keydown event;
//Responds to a key press event

	if(e.keyCode == 16) { 		// SHIFT
		keyShift=true;
	}
	
	if(e.keyCode == 82) { 		//r = reset (limpa vars da urk)
			//var tempURL = window.location.href;
			//var tempURL2 = tempURL.split('index.html');
			//window.location.href = tempURL2[0]+'index.html';
		}
    if(e.keyCode == 37) { 		//Left arrow
    }
    else if(e.keyCode == 38) { //Up arrow

    }
    else if(e.keyCode == 39) { //Right arrow
    }
    else if(e.keyCode == 40) { //Down arrow

    }
	else if(e.keyCode == 32) { //Space-bar		
		keySpace=true;
	}
    	
	if(e.keyCode == 85) { //u = undo
		}

	if(e.keyCode == 68) { //d = debug toggle
		toggle("debug");
	}

	
	// IGNORE BELOW (remove?)
	// Editor keys
	if(e.keyCode == 67) { //c = clear grid
		if(editor){
	//	initGrid(0);
		}
	}
    if(e.keyCode > 47 && e.keyCode < 58) { //Numbers 0:48, 1:49, 2:50 .. 9:57;

		if(e.keyCode==48){
			paintColor=100;
		}else{
			paintColor = Math.floor(((e.keyCode-49+1)/9)*360);
		}

		
	} 
}

// End