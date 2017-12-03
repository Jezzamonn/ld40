(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tool2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("Ag8DhQgIiMgaiHQgciTgriJQgMglAUgQIACAGQAPAHAQADQASADATgCIADgCIAJgGIAGgOIAJACQBUBUALB3QANCTBOB8QBWCJhRB3QgRAZgWAcQiPgRgJiXg");
	this.shape.setTransform(20.1,63.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAGCBQgPgDgPgHIgCgGIgWgyQgSgtgDgwQgDgpAPglQAIgWATAAQA3AEAMA1QAKArAPAoQAQAsgQAyIgBAEIgGAOIgJAGIgDACIgRABQgKAAgKgCg");
	this.shape_1.setTransform(7,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tool2, new cjs.Rectangle(0,0,37.2,102.5), null);


(lib.Tool1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ACTG7QgKAAgLgDIgIgJIgJgJIgGgJIgDgJIgCgJIAAgIIgBgJQgzglgLhDQgVh3gOh6QgPh3gah1QgPhGgChJIgDgGIgDgCQgKgEgLgBQgZgCgZAAIgDAJIgFAJIgFAIIgMATQgLAPACAUQADAYgPATQgEAFgGAFIgOABQghgBgEgdQgGgoANgmQARgwAdgpQAOgSARgBQApAAApACIAyACQATACATAAQA5BEACBbQAECdAsCQQAsCQBDCJQAlBKg0A7QgDADgEABQgGADgIAAIgQAAIgfgBg");
	this.shape.setTransform(24.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tool1, new cjs.Rectangle(0,0,49,88.9), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*COMMENTED_FOR_DEV
		this.title = __CHARACTER__ + "at the Dentist";
		COMMENTED_FOR_DEV*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.titleText = new cjs.Text("Dog at the Dentist", "normal 400 48px 'Great Vibes'", "#200826");
	this.titleText.name = "titleText";
	this.titleText.textAlign = "center";
	this.titleText.lineHeight = 62;
	this.titleText.lineWidth = 544;
	this.titleText.parent = this;
	this.titleText.setTransform(0.9,-26.9);
	if(!lib.properties.webfonts['Great Vibes']) {
		lib.webFontTxtInst['Great Vibes'] = lib.webFontTxtInst['Great Vibes'] || [];
		lib.webFontTxtInst['Great Vibes'].push(this.titleText);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F1498").ss(6,1,1).p("EArRAAAQAADisrCfQsrCfx7AAQx6AAsrifQsrifAAjiQAAjhMrifQMrifR6AAQR7AAMrCfQMrCfAADhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C05BD1").s().p("A+lGAQsrifABjhQgBjhMrifQMrifR6AAQR7AAMrCfQMqCfAADhQAADhsqCfQsrCgx7AAQx6AAsrigg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.titleText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-279.8,-57.4,559.7,114.8), null);


(lib.dirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(100,82,17,0.498)").s().p("AglA7IgGgFQgNgNABguQAAgwAIgIQAHgHAoABQAnAAAHAIQAJAIABAqQABAtgHAMQgFAJgNAEQgKAGgQABIgGAAQgbAAgKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dirt, new cjs.Rectangle(-5.6,-6.8,11.2,13.6), null);


(lib.cavity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAhQghgOAKgkQADgKAJgDQAfgMAIAhQAJAigiAJIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cavity, new cjs.Rectangle(-2.8,-3.4,5.6,6.8), null);


(lib.BitmapHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BitmapHolder, new cjs.Rectangle(0,0,300,300), null);


(lib.Tooth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		
		this.fixed = false;
		this.dirtiness = 1;
		this.cavitiness = 1;
		
		//this.cavity.visible = false;
		//this.dirt.visible = false;
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		this.addEventListener("mouseover", onOver.bind(this));
		
		function onOver() {
			console.log(curToolIndex);
			switch (curToolIndex) {
				case 0:
					this.cavity.visible = false;
					break;
				case 1:
					this.dirt.visible = false;
					break;
				default:
					return;
			}
			if (!this.cavity.visible && !this.dirt.visible) {
				// we're clean, baby!	
				this.clean = true;
				globalGame.checkClean();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cavity
	this.cavity = new lib.cavity();
	this.cavity.name = "cavity";
	this.cavity.parent = this;
	this.cavity.setTransform(2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.cavity).wait(1));

	// Layer_5
	this.dirt = new lib.dirt();
	this.dirt.name = "dirt";
	this.dirt.parent = this;
	this.dirt.setTransform(0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.dirt).wait(1));

	// Tooth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E2DE").s().p("AgnA0QgLgNAAgrQABgsAGgIQAGgGAlAAQAoAAAHAJQAEAGgBAxQAAAfgFALQgJARgeACIgFAAQgdAAgLgLg");
	this.shape.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEB6A7").s().p("AgrA4QgNgOABguQAAgwAIgHQAHgHAoAAQAnABAHAIQAJAIABApQABAtgHANQgJAPgjACIgFAAQghAAgLgLg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tooth, new cjs.Rectangle(-5.5,-6.6,11.2,13.6), null);


(lib.image_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.holder = new lib.BitmapHolder();
	this.holder.name = "holder";
	this.holder.parent = this;
	this.holder.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.holder).wait(1));

}).prototype = getMCSymbolPrototype(lib.image_1, new cjs.Rectangle(-150,-150,300,300), null);


(lib.AllTeeth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tooth();
	this.instance.parent = this;
	this.instance.setTransform(-6.6,-23.9,1.236,1.318,-177.6);

	this.instance_1 = new lib.Tooth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19.3,-23.9,1.054,1.224,0,178.6,-177.6);

	this.instance_2 = new lib.Tooth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-30.2,-22.7,0.959,1.112,0,177.8,-177.6,0.4,0.1);

	this.instance_3 = new lib.Tooth();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-40.3,-20.9,0.904,0.965,0,177.1,178.4,0.4,0.5);

	this.instance_4 = new lib.Tooth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-50.1,-18,0.844,0.813,0,177.1,178.4,0.4,0.5);

	this.instance_5 = new lib.Tooth();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.6,-23.7,1.236,1.318,0,-177.6,2.4,0.1,-0.1);

	this.instance_6 = new lib.Tooth();
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.7,-23.7,1.054,1.217,0,-173.8,2.4,0.2,0.1);

	this.instance_7 = new lib.Tooth();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30.1,-22.8,0.959,1.062,0,-172.9,2.4,0.4,0.2);

	this.instance_8 = new lib.Tooth();
	this.instance_8.parent = this;
	this.instance_8.setTransform(39.6,-20.9,0.904,0.965,0,-172.2,6.4,0.4,0.5);

	this.instance_9 = new lib.Tooth();
	this.instance_9.parent = this;
	this.instance_9.setTransform(49.2,-18.1,0.844,0.819,0,-172.2,6.4,0.6,0.5);

	this.instance_10 = new lib.Tooth();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.7,24.9,1.136,1.164,0,2.4,-177.6,0,0.1);

	this.instance_11 = new lib.Tooth();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.7,23.8,1.054,1.111,0,6.2,-177.6,0.1,0.2);

	this.instance_12 = new lib.Tooth();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-30.1,21,0.959,1.062,0,7.1,-177.6,0.5,0.2);

	this.instance_13 = new lib.Tooth();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-39.5,17.1,0.904,0.965,0,7.8,-173.6,0.4,0.4);

	this.instance_14 = new lib.Tooth();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-46.8,11.8,0.844,0.899,0,7.8,-173.6,0.5,0.5);

	this.instance_15 = new lib.Tooth();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-51.7,6,0.801,0.834,0,7.8,-173.6,0.6,0.4);

	this.instance_16 = new lib.Tooth();
	this.instance_16.parent = this;
	this.instance_16.setTransform(5.7,25.2,1.136,1.164,2.4,0,0,0.1,0.1);

	this.instance_17 = new lib.Tooth();
	this.instance_17.parent = this;
	this.instance_17.setTransform(18,23.9,1.054,1.111,0,-1.4,2.4,0.1,0.2);

	this.instance_18 = new lib.Tooth();
	this.instance_18.parent = this;
	this.instance_18.setTransform(29.2,20.8,0.959,1.062,0,-2.2,2.4,0.4,0.2);

	this.instance_19 = new lib.Tooth();
	this.instance_19.parent = this;
	this.instance_19.setTransform(38.5,17.1,0.904,0.965,0,-2.9,-1.6,0.4,0.4);

	this.instance_20 = new lib.Tooth();
	this.instance_20.parent = this;
	this.instance_20.setTransform(46.5,11.8,0.844,0.899,0,-2.9,-1.6,0.5,0.5);

	this.instance_21 = new lib.Tooth();
	this.instance_21.parent = this;
	this.instance_21.setTransform(52.2,6.2,0.801,0.834,0,-2.9,-1.6,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AllTeeth, new cjs.Rectangle(-56.4,-33.4,113,66.8), null);


(lib.Mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AB6349").ss(4.1,1,1).p("AqAg/QgDgUAFgpQAEgoBbhiQBbhiG9gDQG9gECKB1QBHA7gGCBQgFCDhoB0QihCwlGADQllADiph2QiUhngLjRg");
	this.shape.setTransform(-0.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Teeth
	this.teeth = new lib.AllTeeth();
	this.teeth.name = "teeth";
	this.teeth.parent = this;
	this.teeth.setTransform(0.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.teeth).wait(1));

	// Gums
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D42F43").s().p("AniEAIgIgGIgGgDIhYhiIgEgIIABgIQAKg9AagFQAogEAeAeQA0A3AQAKQC3B2DogDQCIgCBkgoQBlgoBMg5QBLg6AUgRQATgSAWgBQAVgBAEAZQAGAdgWAxQgTAqhrBZIgBABIgBAAIgMAIIgFACIkpBUIgEAAIgNABIgGAAIgLABIgDAAIgVAAIgDABIgLAAIgCAAIgPAAQlaAAilhzgAoqi4QgFgFgGgIQgIgLgCgLQCXifGmAJQG3AICKB2IAOAMQgHALgOALQAEAKgIAMQgnA9hLgoQhHgmhOgTQiAgeiAgGQi1gHijA0QgZAHgaAEQhCAMg4AcQggAQgUAAQgdAAgBglg");
	this.shape_1.setTransform(-0.6,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Tongue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A91921").s().p("AnXBXQgfgWgZgbQAOgiAWgfQARgbAUgNQAQgZApgUQDnhvEFAbQAiAEAhgBQDSgUBqCeQAPAXAAAPQAUAZAPAdQigCik4ADIgPAAQlaAAimhzg");
	this.shape_2.setTransform(-1.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Mouth Hole
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#370B0B").s().p("AgZCXQhHABhIgoQgdgQgFgjQgTh4BghFQAlgbAvAHQgKAQgCAYQgEAkAXAVQAzAvAWhBQARgzgZghIAlADQARACAQAGQAPAGAbASQAiAWAGAQQAQAtAGAtQAJBHg0AsQgNALgMADQgVAOgdgBQgjACgaAAQghAAgSgDg");
	this.shape_3.setTransform(-0.6,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Mouth BG2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B0E0E").s().p("AguD9IingWQiJgTgfh1QgJgLgFgNQgUgzACg4QAFihCsgfQBugVBuAAQAJgFALgDQAIAEAHAGQAvADAwAGIBWALQAKACBLAIQBJAMAPATQAqA3gBBCQgCBSgTBQQgFASgoAgQgXASgbARQh8BMiRAAQgkAAgngFg");
	this.shape_4.setTransform(-0.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Mouth BG
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#651616").s().p("AnTEJIgOgJIgIgGIgGgDIhYhiIgEgIIgBgBIAAgBIAAgBIgGgKIgui5QgDgUAHgeQAOg9AvgyIABgBQAyg1BQgiQChhFEaAGQG3AICKB2IAOAMQA4A8gFBzQgEBcg0BWQgXAjgeAjIgCACIgFAFIhNBBIgBABIgCACIgBAAIgCABIgGAEIgBABIgBABIgBAAIgNAIIgEACIAAAAIkpBUIgEAAIgNABIgGAAIgLABIgDAAIgVAAIgDABIgLAAIgCAAIgOAAQlMAAimhqg");
	this.shape_5.setTransform(-0.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouth, new cjs.Rectangle(-66.9,-36.3,132.4,76.9), null);


// stage content:
(lib.DentistGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.nextFrame = function (evt) {
			var gameFrame = 1;
			this.gotoAndStop(this.currentFrame + 1);
			if (this.currentFrame == 1) {
				stage.removeEventListener("stagemousedown", this.nextFrame);
			}
		}.bind(this);
		
		stage.addEventListener("stagemousedown", this.nextFrame);
		
		createjs.Sound.play('Song', createjs.Sound.INTERRUPT_NONE, 0, 20, -1);
	}
	this.frame_1 = function() {
		// SET POSITION OF STUFF. These lines are set when the game is built >:)
		/*COMMENTED_FOR_DEV
		this.image.x = __IMAGE_X__;
		this.image.y = __IMAGE_Y__;
		this.image.scaleX = __IMAGE_SCALEX__;
		this.image.scaleY = __IMAGE_SCALEY__;
		this.image.rotation = __IMAGE_ROTATION__;
		// Center the bitmap. Getting image sizes is iffy so just hardcode it during 'compilation'.
		this.image.holder.x = __BITMAP_X__;
		this.image.holder.y = __BITMAP_Y__;
		
		this.mouth.x = __MOUTH_X__;
		this.mouth.y = __MOUTH_Y__;
		this.mouth.scaleX = __MOUTH_SCALEX__;
		this.mouth.scaleY = __MOUTH_SCALEY__;
		this.mouth.rotation = __MOUTH_ROTATION__;
		COMMENTED_FOR_DEV*/
		
		var tools = [this.tool1, this.tool2];
		
		// aw yeah global variable
		curToolIndex = -1;
		// excure me while I set up more global variables
		globalGame = this;
		
		for (var i = 0; i < tools.length; i++) {
			var tool = tools[i];
			tool.toolIndex = i;
			tool.startX = tool.x;
			tool.startY = tool.y;
			
			tool.addEventListener("pressmove", onToolDrag.bind(this));
			tool.addEventListener("pressup", onToolDrop.bind(this));
		}
		
		function onToolDrag(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
			evt.currentTarget.mouseEnabled = false;
			
			curToolIndex = evt.currentTarget.toolIndex;
			//console.log(currentToolIndex);
		}
		
		function onToolDrop(evt) {
			evt.currentTarget.x = evt.currentTarget.startX;
			evt.currentTarget.y = evt.currentTarget.startY;
			evt.currentTarget.mouseEnabled = true;
			
			curToolIndex = -1;
			//console.log(currentToolIndex);
		}
		
		function checkClean() {
			if (this.currentFrame != 1) {
				// We only care if we're on the game page.
				return;
			}
			for (var i = 0; i < this.mouth.teeth.children.length; i ++) {
				var tooth = this.mouth.teeth.children[i];
				if (!tooth.clean) {
					// Not ALL clean. Not good enough.
					return;
				}
			}
			// All must be clean :)
			this.gotoAndStop(2);
		}
		this.checkClean = checkClean.bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Title
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(326.6,90.4);

	this.text = new cjs.Text("Thanks!", "normal 400 48px 'Great Vibes'", "#C05BD1");
	this.text.textAlign = "center";
	this.text.lineHeight = 62;
	this.text.lineWidth = 188;
	this.text.parent = this;
	this.text.setTransform(194.8,372.1,1,1,15);
	if(!lib.properties.webfonts['Great Vibes']) {
		lib.webFontTxtInst['Great Vibes'] = lib.webFontTxtInst['Great Vibes'] || [];
		lib.webFontTxtInst['Great Vibes'].push(this.text);
	}

	this.text_1 = new cjs.Text("Great job!", "normal 400 48px 'Great Vibes'", "#C05BD1");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 62;
	this.text_1.lineWidth = 185;
	this.text_1.parent = this;
	this.text_1.setTransform(133.4,63.3,1,1,-15);
	if(!lib.properties.webfonts['Great Vibes']) {
		lib.webFontTxtInst['Great Vibes'] = lib.webFontTxtInst['Great Vibes'] || [];
		lib.webFontTxtInst['Great Vibes'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("You did it!", "normal 400 48px 'Great Vibes'", "#C05BD1");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 62;
	this.text_2.lineWidth = 274;
	this.text_2.parent = this;
	this.text_2.setTransform(482.5,69.1,1,1,8.5);
	if(!lib.properties.webfonts['Great Vibes']) {
		lib.webFontTxtInst['Great Vibes'] = lib.webFontTxtInst['Great Vibes'] || [];
		lib.webFontTxtInst['Great Vibes'].push(this.text_2);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]},1).wait(1));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7F1498").ss(2.1,1,1).p("Egu4ggYQgEAjAAAiQA3AbAqAjQAAAFgDAFQgHANgJALQgSAMgRANQgGAEgFAGQgOAbgKAeQgKAcACAeQgCAGgDAGQgCAGgDAGQgDAFgCAGQAAAdACAdQABAXgKAWQgDACgDACQAdCygFDEQgLGlAAGkQAAAdAAAdQAZASAZASQAGAFAGAGQAPAZgCAgQAAAYgHAWQgYAZgdAUQgLAHgLAGQgMA3ADA8QAAAEABAEQgBADAAAEQgDA8AMA3QALAGALAGQAdAUAYAZQAHAXAAAXQACAggPAaQgGAGgGAFQgZASgZARQAAAdAAAdQAAGlALGlQAFDDgdCzQADABADACQAKAWgBAYQgCAdAAAdQACAFADAGQADAGACAGQADAFACAGQgCAeAKAdQAKAeAOAbQAFAFAGAFQARANASALQAJAMAHANQADAEAAAGQgqAig3AbQAAAjAEAiQAGAugWAhQADAOABAPQAEAugVAgQAqgNA5ADQAUABATACQAsgQA/AEQAvADAuAAQAlgoAugfQAHAAAHACQARAFAQAGQAPANASANQAGAEAHAFQAlAKApAHQAmAHAogBQAIACAIABQAIACAJADQAHABAIACQAnAAAmgBQAhgBAeAHQACADACACQDygWEIAEQI5AII5AAQAnAAAoAAQAXgTAYgSQAHgEAIgEQAjgMArABQAgABAeAFQAiASAbAWQAJAHAIAIQBLAJBRgCQAGAAADAAQAFAAAGAAQBRACBLgJQAIgIAJgHQAbgWAigSQAegFAggBQArgBAjAMQAIAEAGAEQAZASAXATQAoAAAnAAQI5AAI5gIQEIgEDyAWQACgCACgDQAegHAgABQAnABAnAAQAIgCAHgBQAIgDAJgCQAHgBAIgCQApABAmgHQApgHAkgKQAIgFAGgEQARgNAQgNQAQgGARgFQAGgCAIAAQAuAfAlAoQAuAAAvgDQA+gEAtAQQATgCATgBQA3gCAqALQgVggAEgtQABgPADgOQgVghAFguQAEgiAAgjQg3gbgpgiQAAgGACgEQAHgNAJgMQASgLARgNQAGgFAFgFQAOgbAKgeQAKgdgCgeQACgGADgFQACgGADgGQADgGACgFQAAgdgCgdQgBgYAKgWQADgCAEgBQgeizAFjDQALmlAAmlQAAgdAAgdQgZgRgZgSQgGgFgFgGQgQgaACggQABgXAGgXQAYgZAegUQAKgGALgGQAMg3gDg8QAAgEAAgDQAAgEAAgEQADg8gMg3QgLgGgKgHQgegUgYgZQgGgWgBgYQgCggAQgZQAFgGAGgFQAZgSAZgSQAAgdAAgdQAAmkgLmlQgFjEAeiyQgEgCgDgCQgKgWABgXQACgdAAgdQgCgGgDgFQgDgGgCgGQgDgGgCgGQACgegKgcQgKgegOgbQgFgGgGgEQgRgNgSgMQgJgLgHgNQgCgFAAgFQApgjA3gbQAAgigEgjQgFguAVghQgDgOgBgOQgCgcAHgXQgmAJgvgCQgTgBgTgCQgtAQg+gEQgvgDguAAQglApguAeQgIAAgGgCQgRgEgQgHQgQgNgRgNQgGgEgIgEQgkgLgpgHQgmgHgpABQgIgBgHgCQgJgCgIgCQgHgCgIgCQgnAAgnABQggABgegHQgCgCgCgDQjyAWkIgEQo5gIo5AAQgnAAgoAAQgXATgZASQgGAEgIAEQgjAMgrgBQgggBgegFQgigSgbgVQgJgIgIgIQhLgJhRACQgGAAgFAAQgDAAgGAAQhRgChLAJQgIAIgJAIQgbAVgiASQgeAFggABQgrABgjgMQgIgEgHgEQgYgSgXgTQgoAAgnAAQo5AAo5AIQkIAEjygWQgCADgCACQgeAHghgBQgmgBgnAAQgIACgHACQgJACgIACQgIACgIABQgogBgmAHQgpAHglALQgHAEgGAEQgSANgPANQgQAHgRAEQgHACgHAAQgugeglgpQguAAgvADQg/AEgsgQQgTACgUABQgxACgmgJQAHAXgCAcQgBAOgDAOQAWAhgGAug");
	this.shape.setTransform(321.7,240.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4.1,1,1).p("Eg1agoEMBq1AAAMAAABQJMhq1AAAg");
	this.shape_1.setTransform(321.4,242.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D28DE4").s().p("Eg1aAoEMAAAhQIMBq1AAAMAAABQIgEgELAipQAoAbA4ARIBsAAIBDAAIBEAAIBsAAQA4gRAogbQANgKARgJQAwAIATAfQACAGAIAFQI4AFI7AAQFJAAFFgEQAsADAuAAIBdgCIAQgCIARgFIAOgDQAZACAWgFQAegHAggDIAggLIAfgKQAcAFAVAMQANAIAQAHQBVAEBVADIAIAAIAEADQA1AFA4gBQAwABAugFQAHgDAEgDQAGgJAEgJIgCAAIAHgDQAFgDAEgFQAGgiAAgkQAAgpgGgnIgEgDIAAgGQgEg/gHg/QgIgLgLgKQgQgQgHgVIAOgXIAOgWQAEgYAKgXQAGgQgCgSIAEgLIAGgNIAEgLIAChFQABgigGggQAGjxAAjzQAAmmgGmkQgHgGgIgCQgqgOgLgkQAMgLAOgKQAlgeAXgpIAAhRIAAgwIAAgzIAAhQQgXgpglgeQgOgKgMgLQALgkAqgOQAIgCAHgGQAGmkAAmmQAAjzgGjxQAGgggBgiIgChFIgEgLIgGgNIgEgLQACgSgGgQQgKgXgEgYIgOgWIgOgYQAHgUAQgQQALgJAIgMQAHg/AEg/IAAgGIAEgDQAGgoAAgoQAAgkgGgiQgEgGgFgCQgLgFgMgDIgEAGQgugFgvAAQg4AAg1AFIgEACIgIAAQhVADhVAFQgQAGgNAJQgVALgcAGIgfgLIgggLQgggCgegIQgWgEgZACIgOgEIgRgEIgQgDIhdgBQgugBgsAEQlFgFlJAAQo7ABo4AFQgIAFgCAFQgTAfgwAIQgRgIgNgLQgogbg4gRIhsAAIhEAAIhDAAIhsAAQg4ARgoAbQgNALgRAIQgwgIgTgfQgCgFgIgFQo4gFo7gBQlJAAlFAFQgsgEguABIhdABIgQADIgRAEIgOAEQgZgCgWAEQgeAIggACIggALIgfALQgcgGgVgLQgNgJgQgGQhVgFhVgDIgIAAIgEgCQg1gFg4AAQgwAAguAFIgBAAIgEgGQgNADgLAFQgFACgDAGQgGAiAAAkQAAAoAGAoIAEADIAAAGQAEA/AGA/QAJAMAKAJQARAQAHAUIgOAYIgPAWQgEAYgJAXQgHAQACASIgEALIgGANIgEALIgBBFQgBAiAFAgQgGDxAADzQAAGmAHGkQAHAGAIACQAqAOALAkQgNALgNAKQglAegXApIAABQIAAAzIAAAwIAABRQAXApAlAeQANAKANALQgLAkgqAOQgIACgHAGQgHGkAAGmQAADzAGDxQgFAgABAiIABBFIAEALIAGANIAEALQgCASAHAQQAJAXAEAYIAPAWIAOAXQgHAVgRAQQgKAKgJALQgGA/gEA/IAAAGIgEADQgGAnAAApQAAAkAGAiQADAFAFADIAJADIgBAAQAEAJAGAJQAEADAHADQAuAFAwgBQA4ABA1gFIAEgDIAIAAQBVgDBVgEQAQgHANgIQAVgMAcgFIAfAKIAgALQAgADAeAHQAWAFAZgCIAOADIARAFIAQACIBdACQAuAAAsgDQFFAEFJAAQI7AAI4gFQAIgFACgGQATgfAwgIQARAJANAKg");
	this.shape_2.setTransform(321.4,242.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C25CDD").s().p("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");
	this.shape_3.setTransform(321.7,240.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(3));

	// Tools
	this.tool2 = new lib.Tool2();
	this.tool2.name = "tool2";
	this.tool2.parent = this;
	this.tool2.setTransform(506.8,352.2,1,1,0,0,0,3.6,4.2);

	this.tool1 = new lib.Tool1();
	this.tool1.name = "tool1";
	this.tool1.parent = this;
	this.tool1.setTransform(451.1,370.7,1,1,0,0,0,-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tool1},{t:this.tool2}]},1).wait(2));

	// Mouth
	this.mouth = new lib.Mouth();
	this.mouth.name = "mouth";
	this.mouth.parent = this;
	this.mouth.setTransform(290,266.9,1,1,0,0,0,-0.3,2.6);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(3));

	// JB
	this.image = new lib.image_1();
	this.image.name = "image";
	this.image.parent = this;
	this.image.setTransform(336.2,285.8);

	this.timeline.addTween(cjs.Tween.get(this.image).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.5,223.8,687.8,516.9);
// library properties:
lib.properties = {
	id: '11D9FCE18AE34DA1B54ACEF141F167BF',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/image.jpg?1512327650715", id:"image"},
		{src:"sounds/Song.mp3?1512327650715", id:"Song"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['11D9FCE18AE34DA1B54ACEF141F167BF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;