(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[124,936,30,64],[156,936,30,64],[188,936,30,64],[220,936,22,34],[0,234,410,232],[0,468,410,232],[412,468,410,232],[0,0,410,232],[412,234,410,232],[0,702,410,232],[412,0,410,232],[412,702,410,232],[62,936,60,58],[0,936,60,60]]}
];



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



(lib.checkpoint = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.checkpoint2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.checkpoint3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.checkpoint4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cutscene1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cutscene2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cutscene3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cutscene4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cutscene5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cutscene6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cutscene8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cutscene9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.knight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.poop = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.zoomoutbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiVCeQAAgEACgDIAEgLQAFgKACgKIABgKIAAgKIAAgKIAEgKIAFgLIAEgKIAAgKIAAgKIgEgKIgFgLIgEgKIAAg8IAAgLIgBgUQgDgRALgOQAvgDAugKQA3gNA3gPQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAXgCAXADQAEAAAEAEIACAKIABAKIAAALIAAAKIAHAKIAHAKIAAB6IAAA9IAAAzIgiAIIgRAGIj4AAgAhPAPQgGADgFAHIAAAEIgBAFIABAFQAFALANACQBKAMBMgJQADgBADgCIAEgFQAAgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgFIgBgFIgCgEIgGgFIgIgEIhagDIgIgDIguAAIgHACg");
	this.shape.setTransform(1.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHC6QgCAAgCgFQAAgGACgEQAFgLAHgKIAKgKIADgLIAEgKIAKgUQACgkgBgkQgBhGABhIQAAgKACgKQAEgFAEgDQASgLASgIQBigCBcghIAOgGQAlACAlAFQAGABAFAFIAJAMQAIANAAAQIAAAVIAEAKIAFAKIAEAKIAABcQAABRgBBSIgCAUQgFAFgGACQgrAMgtAIQiWgGiXgMgABcidQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQg3APg3ANQguAKgwADQgKAOACARIACAUIAAALIAAA8IAEAKIAFALIAEAKIAAAKIAAAKIgEAKIgFALIgEAKIAAAKIAAAKIgCAKQgCAKgEAKIgFALQgBADAAAEID4AAIARgGIAigIIAAgzIAAg9IAAh6IgHgKIgHgKIAAgKIAAgLIgBgKIgCgKQgEgEgEAAQgPgCgQAAIgQABgAg7AzQgMgCgGgLIAAgFIAAgFIABgEQAEgHAHgDIAHgCIAuAAIAIADIBZADIAIAEIAGAFIADAEIABAFIAAAFQAAABAAAAQAAABgBABQAAAAAAABQAAAAgBABIgDAFQgDACgDABQgiAEghAAQgqAAgqgHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoomoutbutton, new cjs.Rectangle(-20.4,-20.4,40.8,40.8), null);


(lib.zoominbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiVCeQAAgEACgDIAEgLQAFgKACgKIABgKIAAgKIAAgKIAEgKIAFgLIAEgKIAAgKIAAgKIgEgKIgFgLIgEgKIAAg8IAAgLIgBgUQgDgRALgOQAvgDAugKQA3gNA3gPQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAXgCAXADQAEAAAEAEIACAKIABAKIAAALIAAAKIAHAKIAHAKIAAB6IAAA9IAAAzIgiAIIgRAGIj4AAgAhcATQgGAFAAAKIABAFQAEAEAEABIAtADIAIBaQADAFADAAQAOgBAOgHQAEgqADgqIA2AAQAFAAAEgCIAEgDIADgKQACgCgBgDIgBgFIgDgEQgCgDgEgCIgHgEIg1AAQgCg2gQgwQgrAQAGA8IADAaIghAAQgGABgHAGg");
	this.shape.setTransform(1.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHC6QgCAAgCgFQAAgGACgEQAFgLAHgKIAKgKIADgLIAEgKIAKgUQACgkgBgkQgBhGABhIQAAgKACgKQAEgFAEgDQASgLASgIQBigCBcghIAOgGQAlACAlAFQAGABAFAFIAJAMQAIANAAAQIAAAVIAEAKIAFAKIAEAKIAABcQAABRgBBSIgCAUQgFAFgGACQgrAMgtAIQiWgGiXgMgABcidQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQg3APg3ANQguAKgwADQgKAOACARIACAUIAAALIAAA8IAEAKIAFALIAEAKIAAAKIAAAKIgEAKIgFALIgEAKIAAAKIAAAKIgCAKQgCAKgEAKIgFALQgBADAAAEID4AAIARgGIAigIIAAgzIAAg9IAAh6IgHgKIgHgKIAAgKIAAgLIgBgKIgCgKQgEgEgEAAQgPgCgQAAIgQABgAgXCIIgHhaIgtgDQgEgBgEgEIgBgFQgBgKAHgFQAGgGAHgBIAgAAIgCgaQgGg8ApgQQASAwACA2IA0AAIAIAEQAEACACADIADAEIABAFQAAADgBACIgEAKIgDADQgFACgFAAIg2AAQgCAqgGAqQgMAHgOABQgDAAgEgFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.zoominbutton, new cjs.Rectangle(-20.4,-20.4,40.8,40.8), null);


(lib.uploadbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNBtIAAgfIgfAAIAAhdIAfAAIAAgfIB8AAIAAg+IA+AAIAADZgAguBOIBdAAIAAhdIhdAAg");
	this.shape.setTransform(61.7,-2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfIC6AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_1.setTransform(36.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAgAAIAABdIggAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_2.setTransform(11.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag+BtIAAgfIAgAAIAAibIggAAIAAgfIBdAAIAAC6IAgAAIAAAfg");
	this.shape_3.setTransform(-11.7,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhsBeIAAi7IC6AAIAAAfIAfAAIAABdIgfAAIAAAfIh8AAIAAAggAguAfIBdAAIAAhdIhdAAg");
	this.shape_4.setTransform(-38.3,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhNBtIAAgfIggAAIAAi6IA/AAIAAC6IBdAAIAAi6IA+AAIAAC6IgfAAIAAAfg");
	this.shape_5.setTransform(-63.3,-2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#462C1B").s().p("A45FsIAAgGIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgFMAxzAAAQgHAUAAAXIADAYIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIMgxvAAAg");
	this.shape_6.setTransform(-0.5,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AY7GxIgEgFMgyLAAAIgMgGIgHgIIgBgIIgDgIIACgFIgCgFIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIADgIIABgIIAHgIIAMgCIAAgDIAKAFIAGAIIAEAIMAyXAAAIAKAFIAGAIIAFAIIAAAIIAAAIIgFAIIgGAIIgJAFIADAOQADALAAANIgBAFIAAADIAEAIQABAIAAAIIgBAIIgDAHIgBACIAAAEIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIgCAIIAAAIIgEAIIgGAIIgKAFIgMgFgA4+lgIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAFMAxvAAAIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIgDgYQAAgXAHgTMgxzAAAIAAAFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.uploadbutton, new cjs.Rectangle(-164.3,-43.8,328.8,87.7), null);


(lib.TreeShade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#21436B").s().p("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");
	this.shape.setTransform(-0.8,-116.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.TreeShade, new cjs.Rectangle(-75.9,-240.1,150.3,246.5), null);


(lib.Tooth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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


(lib.startButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkCDIAAjgIhLAAIAAglIDgAAIAAAlIhMAAIAADgg");
	this.shape.setTransform(220.6,14.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATCDIAAglIglAAIAAgmIglAAIAABLIhLAAIAAkFIDgAAIAAAlIAlAAIAABwIhLAAIAAAlIAmAAIAAAmIAlAAIAAAlgAg3ATIBKAAIAAglIAlAAIAAhLIhvAAg");
	this.shape_1.setTransform(188.7,14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4CDIAAhLIhvAAIAABLIhLAAIAAi6IAlAAIAAgmIAmAAIAAglIBvAAIAAAlIAmAAIAAAmIAlAAIAAC6gAg3ATIBvAAIAAhKIglAAIAAgmIglAAIAAAmIglAAg");
	this.shape_2.setTransform(158.7,14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkCDIAAjgIhLAAIAAglIDgAAIAAAlIhMAAIAADgg");
	this.shape_3.setTransform(130.6,14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhdCDIAAglIglAAIAAgmIBLAAIAAAmIBvAAIAAhLIiVAAIAAglIglAAIAAhLIAlAAIAAglICVAAIAAAlIAmAAIAAAmIhLAAIAAgmIhKAAIAABLICVAAIAAAlIAlAAIAABLIglAAIAAAlg");
	this.shape_4.setTransform(98.7,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhdCDIAAglIglAAIAAi7IAlAAIAAglIC7AAIAAAlIAlAAIAAC7IglAAIAAAlgAg3BeIBvAAIAAi7IhvAAg");
	this.shape_5.setTransform(38.7,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkCDIAAjgIhMAAIAAglIDgAAIAAAlIhKAAIAADgg");
	this.shape_6.setTransform(10.6,14.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATCDIAAglIglAAIAAgmIglAAIAABLIhLAAIAAkFIBLAAIAABwIAlAAIAAglIAlAAIAAgmIAlAAIAAglIBLAAIAAAlIglAAIAAAmIgmAAIAAAlIglAAIAAAlIAlAAIAAAlIAmAAIAAAmIAlAAIAAAlg");
	this.shape_7.setTransform(-51.3,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3CDIAAglIgmAAIAAgmIglAAIAAhvIAlAAIAAgmIAmAAIAAglICVAAIAAAlIAlAAIAAAmIhLAAIAAgmIhKAAIAAAmIglAAIAABvIAlAAIAAAmIBKAAIAAgmIBLAAIAAAmIglAAIAAAlg");
	this.shape_8.setTransform(-81.3,14.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhvCDIAAglIBKAAIAAi7IhKAAIAAglIDgAAIAAAlIhLAAIAAC7IBLAAIAAAlg");
	this.shape_9.setTransform(-109.4,14.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiCCDIAAkFIBLAAIAADgIC6AAIAAAlg");
	this.shape_10.setTransform(-141.3,14.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3CDIAAglIgmAAIAAgmIglAAIAAhvIAlAAIAAgmIAmAAIAAglICVAAIAAAlIAlAAIAAAmIhLAAIAAgmIhKAAIAAAmIglAAIAABvIAlAAIAAAmIBKAAIAAgmIBLAAIAAAmIglAAIAAAlg");
	this.shape_11.setTransform(-171.3,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},13).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.4,-0.4,424.2,34);


(lib.Sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38C0FC").s().p("Eg14AlLMAAAhKVMBrxAAAMAAABKVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sky, new cjs.Rectangle(-344.9,-237.9,689.8,475.9), null);


(lib.rotaterightbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiVCeQAAgEACgDIAEgLQAFgKACgKIABgKIAAgKIAAgKIAEgKIAFgLIAEgKIAAgKIAAgKIgEgKIgFgLIgEgKIAAg8IAAgLIgBgUQgDgRALgOQAvgDAugKQA3gNA3gPQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAXgCAXADQAEAAAEAEIACAKIABAKIAAALIAAAKIAHAKIAHAKIAAB6IAAA9IAAAzIgiAIIgRAGIj4AAgAAogMIgOAJIgEADIgBAJIgCAoQgCAcAJAaQAQAPAYgHQAiABAagOIACgFIACgKIgBgFIgJgIQgDgDgEgCIgFAAQAagggFgnQgCgPgGgPIgRgUQgQgRgUgJIgIgDIg0AAIgJADIgRAFIgDACIgSASIgZAZIgFAFIgBAEIgCAFIgDAGIgCAEIAAAFIgBAnQgBAPAFAOIACAFIAFAEQAIACAIAAIAEgBIACgDQALgSgCgWQgCgOABgPIABgEIAPgPQAIgGAFgIIAFgGIALgDIAIgDIAoAAIAKAFIAGAJIAJAKIAGAFIABAFIABAFIADAJIABAFIgJAKIgJAKIgFAFQgCAJgDAHIgFAIIABgaQABgUgHgSIgHgFIgHgEIgBABg");
	this.shape.setTransform(1.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHC6QgCAAgCgFQAAgGACgEQAFgLAHgKIAKgKIADgLIAEgKIAKgUQACgkgBgkQgBhGABhIQAAgKACgKQAEgFAEgDQASgLASgIQBigCBcghIAOgGQAlACAlAFQAGABAFAFIAJAMQAIANAAAQIAAAVIAEAKIAFAKIAEAKIAABcQAABRgBBSIgCAUQgFAFgGACQgrAMgtAIQiWgGiXgMgABcidQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQg3APg3ANQguAKgwADQgKAOACARIACAUIAAALIAAA8IAEAKIAFALIAEAKIAAAKIAAAKIgEAKIgFALIgEAKIAAAKIAAAKIgCAKQgCAKgEAKIgFALQgBADAAAEID4AAIARgGIAigIIAAgzIAAg9IAAh6IgHgKIgHgKIAAgKIAAgLIgBgKIgCgKQgEgEgEAAQgPgCgQAAIgQABgAAnBmQgIgaACgcIACgoIABgIIAEgEIAOgJIAAgBIAIAEIAHAFQAHASgBAUIgBAaIAFgIQADgHACgJIAFgFIAJgKIAJgKIgBgFIgDgJIgBgFIgCgFIgFgFIgJgKIgGgJIgKgFIgpAAIgIADIgLADIgFAGQgFAIgHAGIgPAPIgBAEQgBAPABAOQACAWgKASIgDADIgDABQgIAAgIgCIgFgEIgDgFQgEgOABgPIABgnIAAgFIACgEIADgGIACgFIABgEIAFgFIAYgZIATgSIADgCIAPgFIAKgDIA1AAIAIADQAUAJAPARIASAUQAGAPACAPQAFAngaAgIAEAAQAFACADADIAJAIIABAFIgCAKIgCAFQgbAOghgBQgIACgHAAQgOAAgMgKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rotaterightbutton, new cjs.Rectangle(-20.4,-20.4,40.8,40.8), null);


(lib.rotateleftbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiVCeQAAgEACgDIAEgLQAFgKACgKIABgKIAAgKIAAgKIAEgKIAFgLIAEgKIAAgKIAAgKIgEgKIgFgLIgEgKIAAg8IAAgLIgBgUQgDgRALgOQAvgDAugKQA3gNA3gPQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAXgCAXADQAEAAAEAEIACAKIABAKIAAALIAAAKIAHAKIAHAKIAAB6IAAA9IAAAzIgiAIIgRAGIj4AAgAgVhgQgMADgKAFIgLAGIgFAFIgKAJIgFAFIgBAFIgCAFIgFAFIgFAFIgCAFIgCAFIgEAFIgBAFQgCAMAAAMIACATIABAFIADAFIACAFIABAFIAGAFIAEAFIAFAFIAKADIABACIAAABQgLADgJAHIgFAGQgCAEAAAFIABAFQAVAaAlgPIAFgDQANgHAOgDIAFgDIADgFIADgFQAAgNgEgMIgHgOIgBgeQAAgJgDgKIgHgEIgIgEIAAABIgOAIIgEAEQgDAQABARIgFgEIgIgEIgCgBIAAgDIgCgFIgCgFIAAgEIAAgFIAGgPQALgbAdgGIAIgDQAcgFAZAMIAEADIAHAKQADAFABAFIABAEIAAAFIAAAKIAAAJIAAAFIgBAFIgEAKIgGAKIgBAFIAAAFIAAAEIABAFIAEAFIAFAEIAJAFIAIgEIAHgFIABgFIACgEIAFgFIAFgFQAHgTABgUQABgdgLgaQgEgIgHgGIgQgLQgLgIgNgFIgHgEIg0AAIgKADg");
	this.shape.setTransform(1.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjHC6QgCAAgCgFQAAgGACgEQAFgLAHgKIAKgKIADgLIAEgKIAKgUQACgkgBgkQgBhGABhIQAAgKACgKQAEgFAEgDQASgLASgIQBigCBcghIAOgGQAlACAlAFQAGABAFAFIAJAMQAIANAAAQIAAAVIAEAKIAFAKIAEAKIAABcQAABRgBBSIgCAUQgFAFgGACQgrAMgtAIQiWgGiXgMgABcidQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQg3APg3ANQguAKgwADQgKAOACARIACAUIAAALIAAA8IAEAKIAFALIAEAKIAAAKIAAAKIgEAKIgFALIgEAKIAAAKIAAAKIgCAKQgCAKgEAKIgFALQgBADAAAEID4AAIARgGIAigIIAAgzIAAg9IAAh6IgHgKIgHgKIAAgKIAAgLIgBgKIgCgKQgEgEgEAAQgPgCgQAAIgQABgAhLBaIgBgFQAAgFACgEIAEgGQAKgHALgDIAAgBIgBgCIgKgDIgFgFIgFgFIgFgFIgBgFIgCgFIgDgFIgBgFIgCgTQAAgMACgMIABgFIAEgFIACgFIACgFIAFgFIAFgFIABgFIACgFIAFgFIAKgJIAFgFIALgGQAKgFALgDIAJgDIA1AAIAIAEQANAFALAIIAQALQAHAGAEAIQALAagBAdQgBAUgHATIgFAFIgFAFIgCAEIgBAFIgHAFIgIAEIgJgFIgGgEIgDgFIgBgFIgBgEIAAgFIACgFIAGgKIAEgKIABgFIAAgFIAAgJIAAgKIAAgFIgBgEQgCgFgDgFIgHgKIgDgDQgZgMgdAFIgJADQgbAGgLAbIgHAPIAAAFIAAAEIACAFIADAFIAAADIACABIAIAEIAFAEQgBgRADgQIAEgEIANgIIABgBIAHAEIAHAEQAEAKAAAJIABAeIAGAOQAFAMAAANIgDAFIgEAFIgEADQgPADgMAHIgFADQgNAFgMAAQgUAAgNgQg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rotateleftbutton, new cjs.Rectangle(-20.4,-20.4,40.8,40.8), null);


(lib.PoopKnight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{stand:0,walk:10,create:20});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_18 = function() {
		this.gotoAndPlay("walk");
	}
	this.frame_24 = function() {
		this.gotoAndPlay("walk");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(6).call(this.frame_24).wait(1));

	// Sparkles
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AC8062").s().p("AmrCOQgHgHgFgJIgLgVIgCgIQABgLAEgKQADgIAHgFQACgCADgBIAKgDQALAGAKAIIAOALQAegCAaAVQACACACAEIABAIQABADgBAEIgGAPQgYAQgaAAQgWAAgXgLgAFrBZQgIgEgGgIIgBgHIAAgIIABgHIAHgIIADgHIADgIIAHgHIAIgIIAFgFIARgHIARgFIABgCQALACAJAFQAIAFAHAHIABAIQABADgBAEIgGAPIgTAOIgOAJIgCAHIgDAIIgKAGIgMAGQgNgCgLgGgAi7g6IgIgGQgEgIgBgIQgBgMgIgLQgCgDgBgDIAAgIIAAgHIACgIQADgEADgCIAVgMIABgCIALAGIATAOQAHAKACANQADATgHASIgDAIIgKAGIgMAGQgIgCgHgEg");
	this.shape.setTransform(-1.9,-75.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC8062").s().p("An2CzIgPgEIgOgQQgFgHgEgHIgCgIIADgHIAEgHIAIgIIAOgDIABgCQALACAKAFQAPAGAJAOIABAIQABAEgBADIgBAIIgDAIIgKAGIgMAGIgKgBgAHBBkIgBgIQgBgOAKgIQAKgJAKgBIAoAAIAMAFQAFAEAEAEQACADACAEIABAIQABADgBAEIgGAPIgLAGQgSAHgPAAQgaAAgSgXgAjohdQgMgDgLgFQgMgVAEgYQAFgdAagEIAMAGIAKAHQAIASAAATQAAAVgPAOQgFACgFAAIgFgBg");
	this.shape_1.setTransform(0.1,-82.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AC8062").s().p("ApnDEQgDgLAFgKQAIgSARAAIAAgBQAGADAFAEQAIAGAGAHIABAIQAAAHgDAHQgDAHgFAGQgHADgIAAQgTAAgIgSgAI0CcQgDgLAFgKQAHgSASAAIAAgBQAGADAFAEQAIAGAGAHIABAIQAAAHgDAHQgDAHgFAGQgHADgIAAQgTAAgIgSgAkxitQgDgLAFgKQAIgSARAAIAAgBQAGADAFAEQAIAGAGAHIABAIQAAAHgDAHQgDAHgFAGQgHADgIAAQgTAAgIgSg");
	this.shape_2.setTransform(0.7,-85.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},20).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.poop();
	this.instance.parent = this;
	this.instance.setTransform(-30,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({scaleY:0.9,y:-54},0).wait(5).to({scaleY:1.15,y:-78},0).wait(2).to({scaleY:1.1,y:-74},0).wait(3).to({scaleY:1.13,y:-68},0).wait(1).to({scaleX:1.13,scaleY:0.95,x:-34,y:-57},0).wait(1).to({scaleX:1,scaleY:1,x:-30,y:-60},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30,-60,60,60);


(lib.PlayerKnight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"stand":0,"walk":13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.gotoAndPlay("walk");
	}
	this.frame_22 = function() {
		this.gotoAndPlay("walk");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(9).call(this.frame_22).wait(1));

	// Layer_4
	this.instance = new lib.knight();
	this.instance.parent = this;
	this.instance.setTransform(-31,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({scaleY:0.9,y:-52},0).wait(2).to({scaleY:1.15,y:-78},0).wait(2).to({scaleY:1.1,y:-74},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-58,60,58);


(lib.nextbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkoCeQAAgEADgDIAJgLQAJgKAEgKQADgFAAgFIAAgKIAAgKQADgFAFgFIALgLIAIgKIAAgKIAAgKIgIgKIgLgLQgFgFgDgFIAAg8IAAgLQAAgKgDgKQgFgRAVgOQBfgDBbgKQBtgNBsgPQADgBAEAAQAvgCAuADQAIAAAHAEIAFAKIABAKIAAALIAAAKIAOAKIAOAKIAAB6IAAA9IAAAzIhDAIIgiAGInsAAgAglgiIgGAFIgCADIgCAIIgDAHIgBAEIAAAqIAAASIAAASIAAAHIABAEIACAEIACADIAAAHIAAAIIABADIAEAEIAFAEIA4gDIAEgBIACgDIACgDIABgEIgCgCIg0gIIAAgBIgCgGIgDgHIgCgDIAAgkQAgADAeACIADgBIADgCIACgEIAAgDQgDgEgDAAQgggEgggBIAAgFIAAgUIAAgEIACgEIACgDIACgEIAkgDIAEAAIACgDIACgEIABgDQgDgEgEAAQgVgEgXgBIgFAEgAjAgFIgDACQgCAXAAAXQgBAjAEAiIAIADIAFgDIADgDQACgSgBgTQgBgbAEgOQADAFAAAGIACAHQAFAFADAHQAGAMAIAJQATALAPgKQAFgKADgLQADgQACgRQAFgGAAgJIAAgRIACgDIACgEIABgDQgBgMAEgJQAHgQgMgKQgLgCgBAKQgBAIgEAGIAAALIAAALIgCAEIgCADIgBAEIAAAKIAAAHIgBAEIgCADIgCAEIAAAEIAAADIAAAEQgDAFgBAGIgBAHIgCAEIgDAHIgBACQgHgBgEgHQgEgKgIgIQABgGgDgFQgFgLgIgHIgBgEIgCgEIgEgCIgJgHIgIACgAA7gPQAEAUANAQQACALAFALIAEAJIgDADIgBAEIgBAEIAAADIgFAEIgDAEQAAAHgEAHQgDAFADAGIABADIAHADIAGgDIAEgDQAEgHACgIIADgJIAAADIABAEIAAAEIAGAGIAEAEQAEAAADgCQADgCACgEQgBgTgIgSIgCgGIACgEIAOgkIAHgHIAEgHQABgFgDgFIgFgIQgPADgGATQgEAOgHAOIgNgWIgDgNQgCgMgIgGQgPAAADAPgADzgkIgDACIgCAEIhIAHIgBAHIAAAEIABADQAXAGATAAIAAADIAAAEIAAADIACAEIACAEIABADIAAAWIgBAdQAAANADAMIAIACIAFgDIADgDQACgHAAgHIgBgkIAAgdIgBgEIgDgHIgBgDIABgCIAOgEQALgFAIgJQADgDABgDQgDgEgEgCIgLgDIgEACg");
	this.shape.setTransform(2.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmLC6QgEAAgEgFQAAgGAEgEQAKgLAPgKIATgKIAHgLIAGgKIAVgUQADgkgCgkQgBhGAChIQABgKADgKQAHgFAJgDQAigLAlgIQDCgCC2ghIAbgGQBLACBIAFQAMABAKAFQAKAGAIAGQARANgCAQIAAAVIAIAKIAMAKIAHAKIAABcQAABRgDBSQAAAKgCAKQgMAFgMACQhUAMhYAIQkrgGkrgMgAC3idQgFAAgDABQhsAPhtANQhbAKhfADQgUAOAEARQAEAKAAAKIAAALIAAA8QACAFAGAFIAKALIAIAKIAAAKIAAAKIgIAKIgKALQgGAFgCAFIAAAKIAAAKQAAAFgEAFQgDAKgJAKIgJALQgDADAAAEIHrAAIAigGIBDgIIAAgzIAAg9IAAh6IgOgKIgOgKIAAgKIAAgLIgBgKIgEgKQgIgEgIAAQgfgCgfAAIgeABgAgOBuIgEgEIgBgDIAAgIIAAgHIgCgDIgBgEIgCgEIAAgHIAAgSIAAgSIAAgqIACgEIACgHIACgIIADgDIAFgFIAGgEQAVABAXAEQADAAADAEIAAADIgDAEIgCADIgDAAIglADIgCAEIgCADIgBAEIAAAEIAAAUIAAAFQAfABAgAEQAEAAADAEIgBADIgCAEIgDACIgDABQgfgCgegDIAAAkIABADIADAHIACAGIAAABIA1AIIABACIgBAEIgCADIgCADIgDABIg5ADIgFgEgAimBvQgEgiAAgjQABgXACgXIACgCIAIgCIAJAHIAEACIACAEIABAEQAJAHAEALQADAFgBAGQAIAIAFAKQADAHAHABIABgCIADgHIADgEIAAgHQABgGADgFIAAgEIAAgDIAAgEIACgEIACgDIACgEIAAgHIAAgKIABgEIABgDIACgEIAAgLIAAgLQAEgGACgIQAAgKALACQAMAKgGAQQgFAJABAMIgBADIgCAEIgBADIAAARQAAAJgGAGQgCARgDAQQgDALgEAKQgQAKgTgLQgHgJgGgMQgDgHgGgFIgCgHQAAgGgDgFQgEAOACAbQABATgCASIgEADIgFADIgHgDgABiBlIgBgDQgDgGADgFQAEgHABgHIACgEIAFgEIABgDIABgEIAAgEIADgDIgEgJQgEgLgDgLQgNgQgEgUQgDgPAPAAQAJAGABAMIADANIAOAWQAHgOAEgOQAFgTAPgDIAFAIQADAFgBAFIgEAHIgHAHIgOAkIgCAEIADAGQAHASACATQgCAEgEACQgCACgEAAIgFgEIgGgGIAAgEIgBgEIAAgDIgDAJQgCAIgEAHIgEADIgGADIgHgDgADyBdQgDgMAAgNIABgdIAAgWIgBgDIgCgEIgBgEIAAgDIAAgDIAAgEQgUAAgXgGIAAgDIgBgEIABgHIBIgHIACgEIAEgCIADgCIALADQAEACADAEQgBADgCADQgJAJgLAFIgNAEIgBACIABAEIACAGIABAEIAAAdIABAkQAAAHgCAHIgCADIgGADIgIgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.nextbutton, new cjs.Rectangle(-40.4,-20.4,80.8,40.8), null);


(lib.MuteButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiA9IAAgRIAiAAIAAhXIgiAAIAAgRIBFAAIAAB5g");
	this.shape.setTransform(93.3,23.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag8A0IAAhnIBoAAIAAARIARAAIAAA0IgRAAIAAARIhFAAIAAARgAgZASIAzAAIAAg0IgzAAg");
	this.shape_1.setTransform(78.4,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBoAAIAABXgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_2.setTransform(64.4,25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA9IAAgRIARAAIAAhXIgRAAIAAgRIA0AAIAABoIARAAIAAARg");
	this.shape_3.setTransform(51.3,23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag8AsIAAhXIBoAAIAAASIARAAIAAARIgjAAIAAgRIgzAAIAABFg");
	this.shape_4.setTransform(36.4,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAiIhWAAIAAARIBFAAIAAASgAgZgIIAzAAIAAgRIgzAAg");
	this.shape_5.setTransform(22.4,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAsIAAgSIgRAAIAAgRIgSAAIAAgRIgRAAIAAgjIAjAAIAAAjIARAAIAAARIARAAIAAgRIARAAIAAgjIAjAAIAAAjIgRAAIAAARIgSAAIAAARIgRAAIAAASg");
	this.shape_6.setTransform(8.4,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAzIgRAAIAAASgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_7.setTransform(-5.6,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgrA9IAAgRIgRAAIAAg0IARAAIAAgRIBFAAIAAgjIAjAAIAAB5gAgZAsIAzAAIAAg0IgzAAg");
	this.shape_8.setTransform(-33.6,23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgiA9IAAgRIARAAIAAg0IgRAAIAAgRIAzAAIAABFIASAAIAAARgAgRgrIAAgRIAiAAIAAARg");
	this.shape_9.setTransform(-46.7,23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAzIgRAAIAAASgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_10.setTransform(-61.6,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAsIAAgSIgRAAIAAgRIgSAAIAAgRIgRAAIAAgjIAjAAIAAAjIARAAIAAARIARAAIAAgRIARAAIAAgjIAjAAIAAAjIgRAAIAAARIgSAAIAAARIgRAAIAAASg");
	this.shape_11.setTransform(-75.6,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBoAAIAABXgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_12.setTransform(-89.6,25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAzIgRAAIAAASgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_13.setTransform(-117.6,25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIA0IAAgRIgRAAIAAg0IgjAAIAAgRIAjAAIAAgSIAiAAIAAASIAjAAIAAARIgjAAIAAA0IARAAIAAgSIAjAAIAAASIgRAAIAAARg");
	this.shape_14.setTransform(-131.6,24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAiIhWAAIAAARIBFAAIAAASgAgZgIIAzAAIAAgRIgzAAg");
	this.shape_15.setTransform(99.4,9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaAsIAAg0IgRAAIAAARIgRAAIAAgRIgRAAIAAA0IgjAAIAAhXIA0AAIAAASIARAAIAAgSIAjAAIAAASIARAAIAABFg");
	this.shape_16.setTransform(85.4,9.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBoAAIAABXgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_17.setTransform(71.4,9.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgrA1IAAgSIBFAAIAAgRIhFAAIAAgSIgRAAIAAgiIARAAIAAgSIBoAAIAABXIgRAAIAAASgAgZAAIAzAAIAAgiIgzAAg");
	this.shape_18.setTransform(57.4,10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgrA9IAAgRIgRAAIAAgSIAjAAIAAASIAzAAIAAgjIhFAAIAAgRIgRAAIAAgjIARAAIAAgRIBFAAIAAARIASAAIAAASIgjAAIAAgSIgiAAIAAAjIBFAAIAAARIARAAIAAAjIgRAAIAAARg");
	this.shape_19.setTransform(29.4,7.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag0A9IAAgRIAjAAIAAhXIgjAAIAAgRIBpAAIAAARIgjAAIAABXIAjAAIAAARg");
	this.shape_20.setTransform(16.3,7.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAaA9IAAg0IgzAAIAAA0IgjAAIAAh5IAjAAIAAA0IAzAAIAAg0IAjAAIAAB5g");
	this.shape_21.setTransform(1.4,7.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRA9IAAhoIgjAAIAAgRIBpAAIAAARIgjAAIAABog");
	this.shape_22.setTransform(-11.7,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaAsIAAhFIgzAAIAABFIgjAAIAAhXIBoAAIAAASIARAAIAABFg");
	this.shape_23.setTransform(-40.6,9.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiA9IAAgRIARAAIAAg0IgRAAIAAgRIAzAAIAABFIASAAIAAARgAgRgrIAAgRIAiAAIAAARg");
	this.shape_24.setTransform(-53.7,7.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgrA9IAAgRIgRAAIAAg0IARAAIAAgRIBFAAIAAgjIAjAAIAAB5gAgZAsIAzAAIAAg0IgzAAg");
	this.shape_25.setTransform(-82.6,7.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaAsIAAhFIgzAAIAABFIgjAAIAAhXIBoAAIAAASIARAAIAABFg");
	this.shape_26.setTransform(-96.6,9.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAhFIAjAAIAABFIAzAAIAAhFIAjAAIAABXg");
	this.shape_27.setTransform(-110.6,9.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAzIgRAAIAAASgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_28.setTransform(-124.6,9.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag8AsIAAgSIBFAAIAAgRIg0AAIAAgRIgRAAIAAgRIARAAIAAgSIBXAAIAAASIg0AAIAAARIA0AAIAAARIARAAIAAARIgRAAIAAASg");
	this.shape_29.setTransform(-138.6,9.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAiIhWAAIAAARIBFAAIAAASgAgZgIIAzAAIAAgRIgzAAg");
	this.shape_30.setTransform(106.4,-6.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgIA0IAAgRIgRAAIAAgzIgjAAIAAgSIAjAAIAAgRIAiAAIAAARIAjAAIAAASIgjAAIAAAzIARAAIAAgRIAjAAIAAARIgRAAIAAARg");
	this.shape_31.setTransform(92.4,-7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAhFIAjAAIAABFIAzAAIAAhFIAjAAIAABXg");
	this.shape_32.setTransform(78.4,-6.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAaAsIAAg0IgRAAIAAARIgRAAIAAgRIgRAAIAAA0IgjAAIAAhXIA0AAIAAASIARAAIAAgSIAjAAIAAASIARAAIAABFg");
	this.shape_33.setTransform(64.4,-6.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAzIgRAAIAAASgAgZAaIAzAAIAAgzIgzAAg");
	this.shape_34.setTransform(36.4,-6.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgIA0IAAgRIgRAAIAAgzIgjAAIAAgSIAjAAIAAgRIAiAAIAAARIAjAAIAAASIgjAAIAAAzIARAAIAAgRIAjAAIAAARIgRAAIAAARg");
	this.shape_35.setTransform(22.4,-7.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAiIhWAAIAAARIBFAAIAAASgAgZgIIAzAAIAAgRIgzAAg");
	this.shape_36.setTransform(-5.6,-6.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag8AsIAAhXIBoAAIAAASIARAAIAAARIgjAAIAAgRIgzAAIAABFg");
	this.shape_37.setTransform(-19.6,-6.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAAiIhWAAIAAARIBFAAIAAASgAgZgIIAzAAIAAgRIgzAAg");
	this.shape_38.setTransform(-33.6,-6.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAaA9IAAhFIgzAAIAABFIgjAAIAAh5IAjAAIAAAjIBFAAIAAARIARAAIAABFg");
	this.shape_39.setTransform(-47.6,-8.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AARA9IAAgRIgRAAIAAgSIgQAAIAAAjIgjAAIAAh5IAjAAIAABFIAQAAIAAgRIARAAIAAgRIAjAAIAAARIgRAAIAAARIgSAAIAAARIASAAIAAASIARAAIAAARg");
	this.shape_40.setTransform(-76.5,-8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAARIgjAAIAAgRIgzAAIAAAzIBWAAIAAASg");
	this.shape_41.setTransform(-89.6,-6.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgiA9IAAgRIASAAIAAg0IgSAAIAAgRIA0AAIAABFIARAAIAAARgAgQgrIAAgRIAiAAIAAARg");
	this.shape_42.setTransform(-102.7,-8.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgiA9IAAgRIARAAIAAhXIgRAAIAAgRIAzAAIAABoIASAAIAAARg");
	this.shape_43.setTransform(-116.7,-8.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgrAsIAAgSIgRAAIAAgzIARAAIAAgSIBXAAIAAASIARAAIAAARIgjAAIAAgRIgzAAIAAAzIBWAAIAAASg");
	this.shape_44.setTransform(-131.6,-6.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiA9IAAh5IBFAAIAAARIgjAAIAABXIAjAAIAAARg");
	this.shape_45.setTransform(-144.7,-8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AY7GxIgEgFMgyLAAAIgMgGIgHgIIgBgIIgDgIIACgFIgCgFIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIADgIIABgIIAHgIIAMgCIAAgDIAKAFIAGAIIAEAIMAyXAAAIAKAFIAGAIIAFAIIAAAIIAAAIIgFAIIgGAIIgJAFIADAOQADALAAANIgBAFIAAADIAEAIQABAIAAAIIgBAIIgDAHIgBACIAAAEIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIgCAIIAAAIIgEAIIgGAIIgKAFIgMgFgA4+lgIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAFMAxvAAAIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIgDgYQAAgXAHgTMgxzAAAIAAAFg");
	this.shape_46.setTransform(-12,6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#462C1B").s().p("A45FsIAAgGIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgFMAxzAAAQgHAUABAXIACAYIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIMgxvAAAg");
	this.shape_47.setTransform(-12.5,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MuteButton, new cjs.Rectangle(-176.3,-37.8,328.8,87.7), null);


(lib.Ground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#432D01").s().p("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gHASgFQAygOAyAQQAFADADAFIAKANQAKgLANgDIAAAFQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAIAAAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIAOgFIADgBQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgGAFIgCACIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADIAuglQAbgXAagYQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHIATAMIAEACIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANQAKgLANgDIALgCIAKAAQAJACAIAEIAJAFIACABQALAfAEAhQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIARgGQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgIAHIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADQAzgnAwgtQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHQALAIAMAGIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANQAKgLANgDIAAAFQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIARgGQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgIAHIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADQAzgnAwgtQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHQALAIAMAGIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANIABgBIAKgIQAGgEAGgBIAAACIAAADQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIARgGQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgIAHIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADQAzgnAwgtQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHQALAIAMAGIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANQAKgLANgDIAAAFQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAIAAAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIAKgEIAEgBIADgBQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgGAFIgCACIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADIADgCIArgjIATgQIAigfQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIARAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHIAGAEIAGAEIAHAEIAEACIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANQAKgLANgDIALgCIAKAAQAJACAIAEIAJAFIACABQALAfAEAhQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIARgGQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgIAHIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADQAzgnAwgtQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHQALAIAMAGIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANIABgBIAKgIQAGgEAGgBIAAAFQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQAFADADAFIAIAMIAEAKQAIAUAMAQQAcgOAggVIgFgDIgIgEIgCgCQgEgEgCgEQgHgSADgTQAEgXAGgWQABgEACgCQAOgQAQgOQAKgJAMgHIACgIIABgHQAAgIADgHIAEgIIAIgHQANgIAOgGIARgGQAjAAAjAEQAOACAOAGIAEAIIAFAPQADAMgHAKIgEAHIgCACIgGAGIgBAAIgHAFIgNACIgyAGIgCAHIgBAHQgDAIgFAHIgGAIIgIAHIgPAIIgMAIQgEADgDAFQgGAKgDAMIgBADQAzgnAwgtQAEgDAGgBQANgDAMABQAmAAAfAXIAQAOQAOANALARIACAHIABAIQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQAmgNAoACIASAEIAJAIIAGAGIAFAGIAFABIAlgBIAAgIIAAgWQAAgQAGgNIgDgCIgKgHQgMgIgCgOQgBgTAFgTIACgHIAIgIQAFgEAFgCIARgGIAbAGIASAJIAJgOQAMgVAYABIAAgBIAKAAIARAGQAGACAFAEIAEAIIADAHIADAIIACAHIgCAIIgBAHIgCAIIgLAOIgQAQIgCADIgFAEIAGACIABABIAKAHIAMAHIANAGQAMAGANAEIAKAHQALAIAMAGIARAJIA0AAIAIgIIAHgHIAIgFQARgHASgFQAygOAyAQQAFADADAFIAKANIABgBIAKgIQAGgEAGgBIAAAFQgCAYALAVIAHAIIAIAHIAKAIIARAFIAMgEIABAAIAAAAQADATAAAUIAEgBIABgIQAAgEACgDIAHgOIADgDIAEgCQADgXAPgRIAIgFIAFgCIAMgDIASAFQ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Qg4AZg9gXIgVgOIgWgQQhFgYhRAYIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgSgOQgNgJABgOQhOADhXAsIgFADQhgAWhYgaIgBAJQAcAHAgABQAnABAfAVIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFQhaAPhLgvQgSgLgPgPIgCgHIgDgIQgLgJgKgLIgCADIgIAOIgLANQgJADgJAAQgTAAgSgDQgSgNgNgSIAAgBIgCACIgKAIQg4AZg9gXIgVgOIgWgQQhFgYhRAYIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgSgOQgNgJABgOQhOADhXAsIgFADQhgAWhYgaIgBAJQAcAHAgABQAnABAfAVIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFQhaAPhLgvQgSgLgPgPIgCgHIgDgIQgLgJgKgLIgCADIgIAOIgLANQgJADgJAAQgTAAgSgDQgSgNgNgSIAAgBIgCACIgKAIQg4AZg9gXIgVgOIgWgQQhFgYhRAYIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgSgOQgNgJABgOQhOADhXAsIgFADQhgAWhYgaIgBAJQAcAHAgABQAnABAfAVIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFQhaAPhLgvQgSgLgPgPIgCgHIgDgIQgLgJgKgLIgCADIgIAOIgLANQgJADgJAAQgTAAgSgDQgSgNgNgSIAAgBIgBABIgBABIgKAIQg4AZg9gXIgVgOIgWgQQhFgYhRAYIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgSgOQgNgJABgOQhOADhXAsIgFADQhgAWhYgaIgBAJQAcAHAgABQAnABAfAVIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFQhaAPhLgvQgSgLgPgPIgCgHIgDgIQgLgJgKgLIgCADIgIAOIgLANQgJADgJAAQgTAAgSgDQgSgNgNgSIAAgBIgBABIgBABIgKAIQg4AZg9gXIgVgOIgWgQQhFgYhRAYIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgSgOQgNgJABgOQhOADhXAsIgFADQhgAWhYgaIgBAJQAcAHAgABQAnABAfAVIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFQhaAPhLgvQgSgLgPgPIgCgHIgDgIQgLgJgKgLIgCADIgIAOIgLANQgJADgJAAQgTAAgSgDQgSgNgNgSIAAgBIgCACIgKAIQg4AZg9gXIgVgOIgWgQQhCgXhNAVIgDABIgEABIgKAIIgHAFIgNACIgKAAQgJgCgIgEQgFgCgFgEQgEgEgDgEQgCgDgBgEIgBgHIgCgGQhhAihkgJIgRgOQgNgJABgOQhOADhXAsIgFADIhaAKIgGAAIgFAAIhTgOIgBAJQAcAHAgABQAPAAAOAEIADABIAmARIAEAIIADAHIACAIQABAHgCAHQgBAEgCAEIgEAHIgJAIIgHAFIgaADIgSAAQhBAAg4gjgEBlyAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEBTCAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEBASAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEAtiAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgAayAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgAICAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgAqtAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgA9dAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEgwNAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEhC9AAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEhVtAAqQgMAIAFANQADAJAGAHIAXgHQgLgJgFgMQgCgGgGgEIgBABgEBYdAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEBFtAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEAy9AAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEAgNAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgANdAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgAlSAbIgDAHIgFAIIgHAIIgEAFIARAHIAvgBIAUAAIAmgBIAPAAIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgBAAIgDACIgBAAIgNADQgJgDgIgEIgKgGIgEgHIgEACgA4CAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEgqyAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEg9iAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEhQSAAbIgDAHIgFAIIgHAIIgEAFIARAHIA2gBIBCgBIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgBAAIgEACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEhjCAAbIgDAHIgFAIIgHAIIgEAFIARAHIB4gCIAlgPIgRgDQgEgEgCgEIgEgJQgaABgbgGIgHAHIgIAHIgHAGIgFACIgNADQgJgDgIgEIgKgGIgEgHIgEACgEBgMgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEBNcgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEA6sgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEAn8gA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgAVMg0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgACcg0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgAwTg0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEgjDgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEg1zgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEhIjgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEhbTgA0IAAAIIAAAHIAAAIQAIAJAIAEQAQAJAPgJQAHgEAGgHQgagYgigCgEBaigBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEBHygBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEA1CgBFIgJAGIAGABIAKgDIANgGIAAAAQgKAAgKACgEAiSgBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgAPihFIgJAGIAGABIAKgDIANgGIAAAAIgUACgAjNhFIgJAGIAGABIAKgDIANgGIAAAAQgKAAgKACgA19hFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEgotgBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEg7dgBFIgJAGIAGABIAKgDIANgGIAAAAQgKAAgKACgEhONgBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEhg9gBFIgJAGIAGABIAKgDIANgGIAAAAIgUACgEBnngB4IgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIALADIAGADQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQIgJANQgKAMgNAJIgFACIgNADIgPgGgEBU3gB4IgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgPgGgEBCHgB4IgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgPgGgEAvXgB4IgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgPgGgAcvh1IgFgBIgDgCIgBgBIgBAAIgKgGQgFgHgDgJQgEgKAAgLQAAgIACgHIATgdIAAgBQAHgJAHgGIAPgIIAJgCIAAAAIAKAAIALADIAGADQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQIgJANQgKAMgNAJIgFACIgNADIgHgDgAKDhzIgFgCIgHgDIgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgDgBgAo4h4IgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgPgGgA7dhzIgMgFIgBgBIgKgGQgFgHgDgJQgEgKAAgLQAAgIACgHIATgdIAZgXQAEgCAFAAIAEgBIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADgEguVgB2IgDgCIgBgBIgBAAIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdIAAgBQANgSAQgFIAJgCIAAAAIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADgEhBBgB1IgHgDIgCgBIgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADgEhT4gB4IgCgBIgKgGQgFgHgDgJQgEgKAAgLQAAgIACgHIATgdQAMgTARgFIAJgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADIgPgGgEhmqgB5IgKgGQgFgHgDgJQgEgKAAgLIACgPIATgdQAQgYAWgCIAKAAIARAGQAGACAFAEIAEAIIADAHIACAPIABAIQgKAPgIAQQgMAVgUANIgFACIgNADQgJgDgIgEgEBljgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEBSzgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEBADgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEAtTgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgAajiTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgAHziTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgAq8iTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgA9siTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEgwcgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEhDMgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEhV8gCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQgEhosgCTQgEgEgCgEIgFgOQgEgMAHgLIAGgHQADgEAFgCIAVgIIAAgBIARAAIAXADQAOADAOAGIAEAIIAFAPQAEAMgIAKIgEAHIgJAIIgHAFIgNADIgFABIgQACQgZAAgVgQg");
	this.shape.setTransform(551.3,41.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("EBVVADZIgFgPIgIAFIgHAEIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgHAEQgEghgLgfIgCgBIgJgFQgIgEgJgCIgKAAIgLACQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgBABIgBABIgFACIAAAAIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgGABgGAEIgKAIIgBABIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgBABIgCABIgEACIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgGABgGAEIgKAIIgBABIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgHAEQgEghgLgfIgCgBIgJgFQgIgEgJgCIgKAAIgLACQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJIgEgCIgHgEIgGgEIgGgEIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgngCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgDABIgEABIgKAEQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgBABIgBABIgCABIgDABIAAAAIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIAAABIgCABIgBAAIgEACIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgDIAAgCQgGABgGAEIgKAIIgBABIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgBABIgCABIgEACIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgHAEQgEghgLgfIgCgBIgJgFQgIgEgJgCIgKAAIgLACQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJIgEgCIgTgMIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgDABIgOAFQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgBABIgBABIgFACIAAAAIgBAAIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYIAAgFQgNADgKALIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACIAAAAIgFgPIgIAFIgIAEIgMAEIgRgFIgKgIIgIgHIgHgIQgLgVACgYQABgWgFgWIAAgCIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgMgcQgJgagFgcQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIASAFIAJAHIAJAGQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAIAAgIIAAgPQgBgMADgLIABgHQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAAAAIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQASAJAQAKIAbATQAfAMAhACIAaAAQALAAALgEQATgRAVgMQBFgnBaAOQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgBABIgGAGIgRANQATAFASAHIAwAQIAJAHIAAABIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAAAAIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQASAJAQAKIAbATQAsARAugDQALAAALgEQATgRAVgMQBFgnBaAOQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAbgLAcAIIAKADQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgCIAAgBQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgDIgDgMIgCgLIgCgJQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABAAIAAABIAFgKIAHgJQAFgEAFgCIARgGIADAAIAAgCIAAgBQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIACgBIABgCIAFgEIAAAAIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZIAWAMIAMAHIALAIIAKAHIAGAEQAfAMAhACIAFABIAVgBQALAAALgEQATgRAVgMQBFgnBaAOQAbAEAcgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgBABIgCACIgEAEIgRANQATAFASAHIAwAQIAJAHIAAABIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIACgBIABgCIAFgEIAAAAIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZIAWAMIAMAHIALAIIAKAHIAGAEQAsARAugDQALAAALgEQATgRAVgMQBFgnBaAOQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIIADgBIABgBIAAAAIACAAIAYgFQAOAAAPAFIAFABIABABQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABABIAFgKIAHgJQAFgEAFgCIARgGIADAAIAAgCIAAgBQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABABIAFgKIAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIADgEQgEgPgDgQQgDgXAIgWIAEgHIAIgHIAKgFIAMgDIAKAAIABABQAFgKAHgJQAFgEAFgCIARgGIADAAIAAgDQAFgOALgKQANgNAQgHQAGgCAGgBIAUABIASAEQAlAnAvAZQAgAQAdAWQAsARAugDQALAAALgEQBRhIB2ASQAbAEAdgGQAkgIAlgGQABgEACgDIAOgQQAKgLANgIQAggNAhANQATAHANAPIAFAIIACAHIABAHIACAIIgCAIIgDAHIgCAIIgGAHIgHAHIgRANQATAFASAHIAwAQIAJAIIAGAGIARAQIADAHIAEAIIADAPIAAAPQABADADABIANAKIAQAMQAMAEALAHQAUANAYABQASgLAUgJQAWgKAUgMIAFgHIADgHIAFgPIACgIIAGgHIAGgIIAGgHIAKgeIANgmQAGgRALgNQAFgEAFgCIARgGIAKAAQAJACAIAEQAGACAFAEQASAmgDAtQgDAhABAiQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIgIAPQgGALgFALIgJgFQgIgEgJgCIgKAAQgUABgOAPIgKgNQgDgFgFgDQgygQgyAOQgSAFgRAHIgIAFIgHAHIgIAIIg0AAIgRgJQgMgGgLgIIgKgHQgNgEgMgGIgNgGIAFgCQgOgKgMgLIgBgBIAQgQIALgOIACgIIABgHIACgIIgCgHIgDgIIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAABQgYgBgMAUIgJAOIgSgJIgbgGIgRAGQgFACgFAEIgIAIIgCAHQgFATABATQACAOAMAIIAKAHIADACQgGANAAAQIAAAWIAAAIIglABIgFgBIgFgGIgGgGIgJgIIgSgEQgogCgmANQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgIIgCgHQgLgRgOgNIAXAAQgcgUgggKQgOgKgLgNQgEgEgFgBIgCgBIACgCIAEgHQAHgKgDgMIgFgPIgEgHQgOgGgOgCQgjgEgjAAIgRAGQgOAGgNAHIgIAHIgEAIQgDAHAAAIIgBAHIgCAIQgMAHgKAJQgQAOgOAQQgCACgBAEQgGAWgEAXQgDATAHASQACAEAEAEIACACQghgEgmAAIgIgMQgDgFgFgDIgSgFIgMADIgFACIgIAFQgPARgDAXIgEACgEBVdgACQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAPAGIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgEBCtgACQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAPAGIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgEAv9gACQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAPAGIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgAdNgCIgPAHQgHAGgHAJIAAABIgTAdQgCAHAAAIQAAALAEAKQADAJAFAHIAKAGIABAAIABABIADACIAFABIAHADIANgDIAFgCQANgJAKgMIAJgNQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgGgCIgLgDIgKAAIAAAAIgJACgAKdgCQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAHADIAFACIADABIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgAoSgCQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAPAGIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgA69gDQgFAAgEACIgZAWIgTAdQgCAHAAAIQAAALAEAKQADAJAFAHIAKAGIABABIAMAFIAEABIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAgEgtygACQgQAEgNASIAAABIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIABAAIABABIADACIAMAEIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIAAAAIgJACgEhAigACQgRAEgMATIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGIACABIAHADIAIADIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgEhTSgACQgRAEgMATIgTAdQgCAHAAAIQAAALAEAKQADAJAFAHIAKAGIACABIAPAGIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAIgJACgEhmfAAVIgTAdIgCAPQAAALAEAKQADAJAFAHIAKAGQAIAEAJADIANgDIAFgCQAUgNAMgVQAIgQAKgPIgBgIIgCgPIgDgHIgEgIQgFgEgGgCIgRgFIgKAAQgWACgQAXgEBmKAAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEBTaAAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEBAqAAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEAt6AAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgAbKAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgAIaAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgAqVAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgA9FAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEgv1AAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEhClAAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEhVVAAQIgVAIQgFACgDAEIgGAHQgHALAEAMIAFAOQACAEAEAEQAbAUAjgGIAFgBIANgDIAHgFIAJgIIAEgHQAIgKgEgMIgFgPIgEgIQgOgGgOgDIgXgDIgRAAIAAABgEBhQgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEBOggANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEA7wgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEApAgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgAWQgNIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgADggNIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgAvPgNIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEgh/gANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEg0vgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEhHfgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEhaPgANIACABIAOAPQALAPAHgLIgNgNQgJgIgJAAIgDABgEBdsgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEBK8gA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEA4MgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEAlcgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgASsg7IgSADIgZAEIA5gHIACAAIgIgBIgIABgAgDg7IgSADIgZAEIA4gHIACAAIgIgBIgHABgAyzg7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEgljgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEg4TgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEhLDgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEhdzgA7IgSADIgZAEIA5gHIACAAIgIgBIgIABgEBgYADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEBNoADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEA64ADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEAoIADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgAVYDIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgACoDIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgAwHDIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEgi3ADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEg1nADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEhIXADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEhbHADIIAAgIIAAgHIAAgIIAAgBQAiACAaAYQgGAHgHAEIgfAAQgIgEgIgJgEBalACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEBH1ACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEA1FACmIAJgGQAKgCAKAAIAAAAIgNAGIgKADIgGgBgEAiVACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgAPlCmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgAjKCmIAJgGQAKgCAKAAIAAAAIgNAGIgKADIgGgBgA16CmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEgoqACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEg7aACmIAJgGQAKgCAKAAIAAAAIgNAGIgKADIgGgBgEhOKACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEhg6ACmIAJgGIAUgCIAAAAIgNAGIgKADIgGgBgEBYwACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEBGAACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEAzQACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEAggACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgANwCgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgAk/CgQADgMAGgKQADgFAEgDIAMgIIAPgIIACgCIAGgFIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADIgiAfIgTAQIgrAjIgDACIABgDgA3vCgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEgqfACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEg9PACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEhP/ACgQADgMAGgKQADgFAEgDIAMgIIAPgIIACgCIAGgFIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgaAYgbAXIguAlIABgDgEhivACgQADgMAGgKQADgFAEgDIAMgIIAPgIIAIgHIAGgIQAFgHADgIIABgHIACgHIAygGIANgCIAHgFIABAAIgCACIgEAJIAAAFQgMgBgNADQgGABgEADQgwAtgzAnIABgDgEBhBABhIAFgEIABAGIgGgCgEBORABhIAFgEIABAGIgGgCgEA7hABhIAFgEIABAGIgGgCgEAoxABhIAFgEIABAGIgGgCgAWBBhIAFgEIABAGIgGgCgADRBhIAFgEIABAGIgGgCgAveBhIAFgEIABAGIgGgCgEgiOABhIAFgEIABAGIgGgCgEg0+ABhIAFgEIABAGIgGgCgEhHuABhIAFgEIABAGIgGgCgEhaeABhIAFgEIABAGIgGgCg");
	this.shape_1.setTransform(550.1,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A5D81D").s().p("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IgGAHIgHAGIgEACIgNADIgKgBQgnAIgmgOQgFgCgGgEQgEgEgBgEQgFgMgGgKIgEgHIAAgBIgCABQgngHgpgFQgJgBgJgCIgKgIIAAgBIgTAGIgIAIIgIAHIgKAGIgJAEQgFAOgLALIgHAIQgRATgVAQIgEACIgNADIgUAFIgCAHIgBAHIgEAIIgDAIIgKAHIgIAEIgMAEQgJgDgIgEIgKgGIgFgFIgBgDQgJgZABgbIABgeIAAgHIAAg1QAAgPACgPQACgEACgDIADgDIADgEIAFgHIACgIIABgWIAAgeQgBgRALgNIAIgHIAJgFIANgDIAFAAIAAAAIAHgIQAFgEAGgCIARgGIARAGQAFACAFAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIASAEQAMAJAHANQApgFAlgUIAEgIIADgHIADgHIAIgHQAMgIANgGIACAAIAUgIIAAgBQA8gJAxAjIABABQAaATATAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIAogCIASAAQCNgDCBApIAEAFIgCBFIADgEIAFgHIACgIIABgWIAAgEIAAgaQAAgRAKgNIAIgHIAKgFIAMgDIAFAAIAAAAIAIgIQAFgEAFgCIADgBIAOgFIARAGQAFACAGAEIAEAIIADAHIADAHIABAEIADABIAFgDQADgDACgEIAIgOQADgEAFgDQAMgHANgFIARgGQAPAAAPABIARAEQAMAJAIANQApgFAlgUIAEgIIAEgHIACgHIAIgHIAEgDQAKgGAMgFIABAAIATgIIABgBQA8gJAxAjIABABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIApgCIAlAAQCBAAB6AmIACAFIACADIADAHIACAIIABAHIACgBIAFgCIANgGQAMgFANgDIARgFIAJADQgGgUgDgSIADgIIADgIIACgHIgCgHIAOgFIARAGQAGACAEAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIARAEQANAJAHANQApgFAlgUIAFgIIACgHIADgHIAIgHQAMgIANgGIABAAIAUgIIABgBQA8gJAyAjIAAABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBHAcIAHADQARAGAPAJIAogCQCWgFCKArIADAFIgBBFIADgEIAFgHIACgIIABgWIAAgEIAAgaQgBgRALgNIAIgHIAJgFIANgDIAFAAIAAAAIAHgIQAFgEAGgCIADgBIAOgFIARAGQAFACAFAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIASAEQAMAJAHANQApgFAlgUIAEgIIADgHIADgHIAIgHQAMgIANgGIACAAIAUgIIAAgBQA8gJAxAjIABABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIAogCQCWgFCKArIAEAFIAAALIgCA6IADgEIAFgHIACgIIABgWIAAgEIAAgaQAAgRAKgNIAIgHIAKgFIAMgDIAFAAIAAAAIAIgIQAFgEAFgCIAJgEIACAAIAGgCIARAGQAFACAGAEIAEAIIADAHIADAHIABAEIADABIAFgDQADgDACgEIAIgOQADgEAFgDQAMgHANgFIARgGQAPAAAPABIARAEQAMAJAIANQApgFAlgUIAEgIIAEgHIACgHIAIgHQAMgIAOgGIABAAIATgIIABgBQA8gJAxAjIABABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIApgCIASAAQCLgDCDApIACAFIgBBFIADgEIAGgHIABgIIABgWIAAgEIAAgaQgBgRALgNIAIgHIAJgFIANgDIAFAAIAAAAIAIgIQAEgEAGgCIADgBIAOgFIARAGQAGACAEAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQADgEAFgDQAMgHANgFIARgGQAPAAAPABIARAEQANAJAHANQApgFAlgUIAFgIIACgHIADgHIAIgHIAEgCIAAgBQAKgGALgFIABAAIAUgIIABgBQA8gJAyAjIAAABQAbATASAZQAvgGAvgCQAKgBAKgCQBPgUBHAcQAVAHASALIAogCIAlAAQCCAAB6AmIACAFIACADIADAHIACAIIAAAHIADgBIAFgCIANgGQAMgFAMgDIASgFIAJADQgGgUgDgSIADgIIAEgIIABgHIgCgHIAOgFIARAGQAFACAFAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIASAEQAMAJAHANQApgFAlgUIAEgIIADgHIADgHIAIgHQAMgIANgGIACAAIAUgIIAAgBQA8gJAxAjIABABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBIAcIAGADIANAFIATAKIAogCQCWgFCKArIAEAFIgCBFIADgEIAFgHIACgIIABgWIAAgEIAAgaQAAgRAKgNIAIgHIAKgFIAMgDIAFAAIAAAAIAIgIQAFgEAFgCIADgBIAOgFIARAGQAFACAGAEIAEAIIADAHIADAHIABAEIADABIAFgDQADgDACgEIAIgOQADgEAFgDQAMgHANgFIARgGQAPAAAPABIARAEQAMAJAIANQApgFAlgUIAEgIIAEgHIACgHIAIgHQAMgIAOgGIABAAIATgIIABgBQA8gJAxAjIABABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIApgCQCVgFCLArIACAFIgBBFIADgEIAGgHIABgIIABgWIAAgEIAAgaQAAgRAKgNIAIgHIAJgFIANgDIAFAAIAAAAIAIgIQAEgEAGgCIADgBIAOgFIARAGQAGACAFAEIAEAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIARAEQANAJAHANQApgFAlgUIAFgIIACgHIADgHIAIgHQAMgIANgGIABAAIAUgIIABgBQA8gJAyAjIAAABQAbATASAZQAvgGAwgCQAKgBAKgCQBPgUBHAcQAVAHASALIAogCQCWgFCLArIACAFIACADIADAHIACAIIAAAHIADgBIAFgCIANgGQAMgFAMgDIASgFIAJADQgGgUgDgSIADgIIAEgIIABgHIgCgHIAOgFIARAGQAFACAFAEIAFAIIADAHIACAHIACAEIADABIAEgDQAEgDACgEIAIgOQAEgEAEgDQAMgHANgFIARgGQAPAAAPABIASAEQAMAJAHANQApgFAlgUIAEgIIADgHIADgHIAIgHQAMgIANgGIACAAIAUgIIAAgBQA8gJAyAjIAAABQAaATATAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIAogCQCWgFCKArIAEAFIgCBFIADgEIAFgHIACgIIABgWIAAgEIAAgaQAAgRAKgNIAIgHIAKgFIAMgDIAFAAIAAAAIAHgIQAGgEAFgCIADgBIAOgFIARAGQAFACAGAEIAEAIIADAHIADAHIABAEIADABIAFgDQADgDACgEIAIgOQADgEAFgDQAMgHANgFIARgGQAPAAAPABIARAEQAMAJAIANQApgFAlgUIAEgIIAEgHIACgHIAIgHQAMgIAOgGIABAAIATgIIABgBQA8gJAxAjIABABQAaATATAZQAvgGAwgCQAKgBAKgCQBPgUBIAcQATAHATALIApgCQCVgFCLArIAEAIIADAHIACAIIABAHIAHgDIANgGQAMgFANgDIARgFIAJADIAIADQAFACAGAEQAGAKAEANQAHAhgKAhIgDAHQgOAmgDAmQgCAggNAcIgKAHIgIAEIgGACIgGACQgJgDgIgEIgLgGQgDgEgCgEQgEgHgBgHIgBgFIgfAFIgCAHIgCAHIgDAIIgDAIIgKAHIgIAEIgMAEQgJgDgIgEgEBaPgBxIgEAGIAYADIAYgGIgCgBIgogEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEBHfgBxIgEAGIAYADIAYgGIgCgBIgngEQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEA0vgBxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEAh/gBxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgAPPhxIgEAGIAYADIAYgGIgCgBIgngEQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgAjghxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgA2QhxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEgpAgBxIgEAGIAYADIAYgGIgCgBIgngEQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEg7wgBxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEhOggBxIgEAGIAXADIAZgGIgBgBIgpgEQAAAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABgEhhQgBxIgEAGIAYADIAYgGIgCgBIgngEQgBAAAAAAQgBABAAAAQAAAAAAAAQgBAAAAABg");
	this.shape_2.setTransform(551,-46);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#267B0E").s().p("EBj5AFoQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGIgMgkIgDgNIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgZgCgZgHIgegKIgKgEIgBgBIgBAAIgDgBQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgMAFIgFABIgKgBIgDAAQgHgCgHgDIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgEgYgGgVIgCgEQgEgNgFgNIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhYAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgVgEIgHgBIgFgBIgMgDIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgMAFIgFABIgKgBIgDAAQgHgCgHgDIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGIAAgBIAAgBIgMgjIgDgMIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGIgMgkIgDgNIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgsgDgugUIgFgCQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgMAFIgFABIgKgBIgDAAQgHgCgHgDIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgEgZgIgYQgEgNgFgNIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgcgFIgRgEIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgLgXgEgaIgPAEIgMAPIgQAWIgGAIIgGAHQgHAYgKAWIgNAdIgIAPIgEAIQgSAbgJAgIgGAQIgKAGIgMAFIgFABIgKgBIgDAAQgHgCgHgDIgLgGQgPgUgIgZQgFgQgHgOIgHgQQgCgDAAgEQgGgngPgkIgKgWQgvgDgwgWQgMgMAAgSIAAgPIAAgPIAAgPIgBgPIgCgFIgTAtQgHAPgJAOIgKAQIgFAHIgxBKQgDAFgFAEQhZAbhdALQgdAEgWAUIgRAFIgKgBIgSgEIgJgIIgPgPIgNgOIgtgJIgSgEIgKgIIgHgHIgNgPIgBgEIgBgBIgcgFQgNgKgLgNQgHgLgGgLQgCgEAAgEQgCgHgBgIIAAgHIgLgPQgIgKgFgMIgGgIIgFgHIgDgDQgVgBgVABQgPAPgOAQQgFAHgEAHIgHAPIgHAPIgDAPIgFAIIgGAHIgHAIIgKAGIgRAGIgKgBQgJgBgIgEIgLgGQgTgpADgyIACg2IAEAFIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgFIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQAcAGAbADQBWAKBNgGIACAGIABAHQAAAEADADQACAFAEAEIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDQACANAFANIABAEIAEAFIALAGQAIAEAJACIAMgDIABgBIAFgCIACgCIAKgHIAAgBIABgDIACgDIADgIIACgHIACgHIAJgCIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACIAEACQAkAMAlgIIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQAmAHAkAEQBMAHBEgFIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDIALgCIABAFQABAHADAGQACAFAEAEIALAGQAIAEAJACIAGgBIgCAGIgBABIAHgEIAKgHIABgDIAAgBIAJgGIAJgVIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAcAMAcAIIAEABQADAGAEAGQAHAIAIAHIAJAIQB1AVBlgIIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDIABAGIAGAUIABAEIAEAFIALAGQAIAEAJACIAMgDIAAAAIABgBIADgBIADgCIABgBIAKgHIABgDIACgEIADgIIACgHIACgHIAEgBIAKgCIAGgCIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQB1AVBlgIIACAGIABAHQAAAEADADQACAFAEAEIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAKgBIAKgCQACANAFANIABAEIAEAFIALAGQAIAEAJACIAMgDIABgBIAHgEIAKgHIACgFIABgCIADgIIACgHIACgHIAUgFIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIIAqAHIANACIARACIAwADQAyACAwgDIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDQACANAFANIABAEIAEAFIALAGQAIAEAJACIAMgDIABgBIAFgCIACgCIAKgHIAAgBIABgDIACgDIADgIIACgHIACgHIAJgCIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACIAEACQAkAMAlgIIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA5gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQAmAHAkAEQBMAHBEgFIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDIALgCIABAFQABAHADAGQACAFAEAEIALAGQAIAEAJACIAGgBIgCAGIgBABIAHgEIAKgHIABgDIAAgBIABAAIAIgGIAJgVIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAcAMAcAIIAEABQADAGAEAGQAHAIAIAHIAJAIQB1AVBlgIIACAGIABAHQAAAEADADQACAFAEAEIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAKgBIAKgCIABAGIAGAUIABAEIAEAFIALAGQAIAEAJACIAMgDIAAAAIABgBIADgBIADgCIABgBIAKgHIABgDIABgBIABgDIADgIIACgHIACgHIAEgBIAFgBIAFgBIAGgCIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQB1AVBlgIIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAKgBIAKgCQACANAFANIABAEIAEAFIALAGQAIAEAJACIAMgDIABgBIAFgCIACgCIAKgHIAAgBIABgDIACgDIADgIIACgHIACgHIAIgCIABAAIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAAIAAAAIADAHQAHALAFALQABAFAEAEQAFADAGACQAmAPAngJIAKABIAMgDIAFgCIAHgGIAGgGIAEgIIADgHIAFgFIAUgGIAIgEIARgIQAaADAagEQA6gJA3AKIAAAAQAPAFAQACIAEABQAWAGAWAKQAeANAeAIQADAGAEAGQAHAIAIAHIAJAIQB1AVBlgIIACAGIABAHQAAAEADADIAGAJIALAGQAIAEAJACIAMgDIAIgFIAKgHIADgHIADgIIACgHIACgHIAUgDIALgCIABAFQABAHADAGQACAFAEAEIALAGQAIAEAJACIAGgBIgCAGIgBABIAHgEIAKgHIABgDIAAgBIAJgGIAJgVIALgDIAMgDIAFgCQAUgQASgTIAHgHQALgLAEgOIAKgEIAKgGIAIgIIAHgHIATgHIABABIAKAIQAJADAJABQAoAEAoAHIACAA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ACABIgZAFIgXgDgEBHogELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEA04gELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEAiIgELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgAPYkLIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgAjXkLIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgA2HkLIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEgo3gELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEg7ngELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEhOXgELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDgEhhHgELIAEgGQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIAoAEIACABIgZAFIgXgDg");
	this.shape_3.setTransform(549.7,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("EhmuALuIAA3bMDNcAAAIAAXbg");
	this.shape_4.setTransform(549.9,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ground, new cjs.Rectangle(-120,-67.7,1342.7,150), null);


(lib.empty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.empty, null, null);


(lib.downloadbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AZyB/IAAgkIglAAIAAhsIAlAAIAAgkIC1AAIAAAkIAkAAIAABHIi1AAIAAAlICRAAIAAAkgAaWASIBtAAIAAgjIhtAAgAXhB/IAAhtIglAAIAAAkIgkAAIAAgkIglAAIAABtIhIAAIAAi0IBtAAIAAAkIAkAAIAAgkIBJAAIAAAkIAkAAIAACQgAQtB/IAAgkIgkAAIAAhsIAkAAIAAgkIDaAAIAAC0gARRBbIBtAAIAAhsIhtAAgAMvB/IAAgkIgjAAIAAglIglAAIAAhrIAlAAIAAglIAjAAIAAgkIC2AAIAAAkIiRAAIAAAlIglAAIAABrIAlAAIAAAlIBIAAIAAhJIgkAAIAAgjIBtAAIAACQgADIB/IAAgkIglAAIAAhsIAlAAIAAgkIC1AAIAAAkIAkAAIAABHIi1AAIAAAlICRAAIAAAkgADsASIBtAAIAAgjIhtAAgAgRB/IAAgkIglAAIAAhsIhIAAIAAgkIBIAAIAAglIBIAAIAAAlIBIAAIAAAkIhIAAIAABsIAkAAIAAglIBJAAIAAAlIglAAIAAAkgAl8B/IAAgkIgkAAIAAhsIAkAAIAAgkIDaAAIAAC0gAlYBbIBtAAIAAhsIhtAAgArCB/IAAi0IDZAAIAAAkIAlAAIAAAjIhJAAIAAgjIhsAAIAACQgAu/B/IAAgkIglAAIAAhsIAlAAIAAgkIC1AAIAAAkIAkAAIAABHIi1AAIAAAlICRAAIAAAkgAubASIBtAAIAAgjIhtAAgAxQB/IAAiQIhuAAIAACQIhIAAIAAi0IDaAAIAAAkIAkAAIAACQgA4EB/IAAgkIgkAAIAAhsIAkAAIAAgkIC1AAIAAAkIAlAAIAABHIi2AAIAAAlICRAAIAAAkgA3gASIBtAAIAAgjIhtAAgA8CB/IAAgkIgkAAIAAglIgkAAIAAhrIAkAAIAAglIAkAAIAAgkIC2AAIAAAkIiRAAIAAAlIglAAIAABrIAlAAIAAAlIBIAAIAAhJIgkAAIAAgjIBtAAIAACQg");
	this.shape.setTransform(-17.2,-5.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#462C1B").s().p("EggrAFsIAAgGIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgFMBBXAAAQgJAUABAXQABAMADAMIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIMhBTAAAg");
	this.shape_1.setTransform(-14.3,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EAguAGxIgFgFMhB4AAAIgQgGIgIgIIgDgIIgDgIIACgFIgCgFIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIADgIIADgIIAIgIIAQgCIAAgDIANAFIAIAIIAFAIMBCIAAAIANAFIAIAIIAGAIIAAAIIAAAIIgGAIIgIAIIgMAFIAEAOQAEALgBANIAAAFIAAADQADAEABAEQADAIAAAIIgCAIIgEAHIgBACIAAAEIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIgDAIIAAAIIgFAIIgIAIIgNAFIgQgFgEggygFgIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAFMBBTAAAIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIQgDgMgBgMQgBgXAJgTMhBXAAAIAAAFg");
	this.shape_2.setTransform(-13.6,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.downloadbutton, new cjs.Rectangle(-229.4,-47.8,431.6,87.7), null);


(lib.DoneButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAfAAIAAA+IibAAIAAAfIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape.setTransform(36.7,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvBOIAAh8IhdAAIAAB8Ig/AAIAAibIC7AAIAAAfIAgAAIAAB8g");
	this.shape_1.setTransform(11.7,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAgAAIAABdIggAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_2.setTransform(-13.3,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhsBtIAAjZICbAAIAAAfIAfAAIAAAfIAfAAIAABdIgfAAIAAAfIgfAAIAAAfgAguBOIA+AAIAAgfIAfAAIAAhdIgfAAIAAgfIg+AAg");
	this.shape_3.setTransform(-38.3,-2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#462C1B").s().p("A45FsIAAgGIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgFMAxzAAAQgHAUAAAXIADAYIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIMgxvAAAg");
	this.shape_4.setTransform(-0.5,0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AY7GxIgEgFMgyLAAAIgMgGIgHgIIgBgIIgDgIIACgFIgCgFIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIADgIIABgIIAHgIIAMgCIAAgDIAKAFIAGAIIAEAIMAyXAAAIAKAFIAGAIIAFAIIAAAIIAAAIIgFAIIgGAIIgJAFIADAOQADALAAANIgBAFIAAADIAEAIQABAIAAAIIgBAIIgDAHIgBACIAAAEIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIgCAIIAAAIIgEAIIgGAIIgKAFIgMgFgA4+lgIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAHIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAIIAAAFMAxvAAAIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgHIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIAAgIIgDgYQAAgXAHgTMgxzAAAIAAAFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.DoneButton, new cjs.Rectangle(-164.3,-43.8,328.8,87.7), null);


(lib.craftbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj/EQQhVgdhbAKQivBHi+gyIgEgHIgCgHIAAgHIABgHIADgGIAGgHQAFgEABgEQABgDgCgDQgMhGADhKQACgmAAglIAAgNQAAgVgDgUQgPiEA0hzIGFgpQBRgJBKgRQCMAOCJAkQBOAUBMAdQEUAIETgCIAIAHIAIAIIAFAGIAHAHQALAggCAlQgCBBAABBIAAAUIAAAOIgBAGQgHA4gLA2QAAANgCAOQgEAfABAfQABArgLAoQgEAOgIANQjdA4jbAAQkgAAkahhgAj5DPQHWCeHohpQAIgegDggQgDgZAJgXIACgHIABgGQgDgeAMgZQgDguAKgrQACgNAAgOIAAgHIAAiJQABgNgDgMQklAckZg9QhrgXhpgbQhYgXhcADQhsAYhuAMQh2AMh3AGQgQABgQACIgHAOIgHAOIgHANIAAB1IAAAVIABEDQAAAPgIANQDHgBDagSIARgBQAeAAAdAKgAH9CXQgEgCgEgDQgLghADgkQABgfgCgeQgCgaANgWIAAgGIAAgHIAAgHIAAgFQglADgogOQgEgBgDgEIgEgHIgBgGIgCgOIACgHIADgHIAEgHQBhgHBYgUIAcABQARABAIAQIACAHIAAAHIgEAOQgPAQgWAEQgcAFgbAJQgEAKABAKQACAZgFAXQgCAGgDAHIAAAwIABApQABAXgJASIgHAHIgFAEIgLADIgPgGgAgnCXQgEgCgEgDQgLg1ABg5QAChZAGhYIACgOQAEgEAEgBQAZgKAagEIAAgCQAgAAAgACIAOADIAHAHIAJAHQAMAaAJAbQAUA6AMA7QACAKAAALIADAHQAFANABAOQAAATgJAPIgHAFIgDABIgLADQgIgCgHgEQgEgCgEgDQgIgbgEgcIgCgJQgjALgmAKQgEAAgEgCIgQgGQAAAngCAnQAAAMgHAJIgHAFIgCABIgMADIgPgGgAAHhpQgEApACAqIAAAbQAmgWAsgIIACgBQgIgagLgaIgKgbQgBAAAAgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQgPgDgQAAIgTAHgAD9B8QgEgCgEgEQgIgvgLgvQgRhOAQhQQAJgNAPgFIAugPQAOAAAOACQARABAIAQIACAHIAAAGIgEAOQgGAGgHACIgzAUIgCAHIAAAUIgBAiIAEAJIAegUQAEgDAGgCIAbABQASACAHAQIACAHIAAAGIgEAOQgGAFgGADQgdALgbAMIgJgBIgBAAIAAABQADAigCAjQgBALgGAJQgEAEgEACIgNAGIgPgGgAioB0IgHgHIgGgHIgFgHIgCgGIgCgHIgBgHIAAgHIgEgHIgEgOQgCgKgFgKIgDgHIgXgMQgagKgagJIgCAFQgBAMABAOQAAARgEARIgDAHIgHAHIgFADIgLAEQgIgCgIgEQgEgCgDgEQgMg7gBg/QgBhfBSgfQATAAARADQARADAQAIIAGAHIAJANIAPAVIACAHQAEAKAAALQAAARgEARIgCAHIgFAGIgHAHQAAABgBABQAAABAAAAQgBABAAAAQAAABABAAQAHAJAKAHIAJAHQADADABAEQADALAGAJQAHAMgBAPIADAHIAGAUIAGAcIABAGIgDAHIgEAHIgHAHIgOAFIgQgFgAj8h6IgFABIgQAHIgEAHIgHAOIgDAHIAAAGIAAAHIAAAHIADABIAigFIAJgIIAMgNIgDgOQgDgRgPAAIgCAAgApfBZIgHgHQgKgIgFgMQgDgIgEgHIgBgGQgDgfABgeIAAgHIAAgHQgDgdAMgaIAAgHIABgGIACgHIACgHQADgEAFgCIAggTIANgHQAyAAAyACQASAAAHAQIACAHIAAAHIgEAOIgHAFQgsAbg7gOIgLAHIgCAHIgBAGIgGAOIAAAHIAAAiIABAhIABAFIAEABQA6gQAgAmIACAHIgBAHIgEANQgDAEgEACQgcAPgfAAQgbAAgcgLg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("Aj4DRQglgMgnADQjaATjHAAQAHgMAAgPIAAkEIAAgVIAAh0IAHgOIAGgOIAHgNQAQgDAQAAQB3gGB2gNQBugLBsgYQBcgDBZAWQBpAcBqAXQEZA8ElgcQADANAAANIAACJIAAAHQAAANgDANQgJArADAuQgNAaADAdIAAAHIgCAHQgJAXACAZQADAggHAeQjDAqjAAAQkhAAkahggAH4gyIAAAHIAAAHIAAAHQgNAWACAZQACAfgCAfQgCAkALAgQADAEAEACIAQAGIALgEIAFgDIAGgHQAKgTgCgWIgBgpIAAgwQAEgHABgIQAFgWgBgYQgBgLAEgKQAbgJAcgFQAWgEAOgQIAEgOIAAgGIgCgHQgHgQgSgCIgbgBQhZAVhgAHIgEAHIgDAGIgCAHIABAOIACAHIADAHQAEADAEACQAnANAmgCIAAAEgAAMisQgZAEgZAKQgFACgDADIgDAOQgGBZgBBYQgCA5AMA1QADAEAFACIAPAGIALgDIADgCIAGgEQAHgJABgMQABgnAAgoIAQAHQAEABAFAAQAlgJAkgLIABAIQAFAdAIAaQADAEAEACQAHAEAIACIAMgDIACgBIAHgFQAKgQgBgTQAAgNgFgOIgEgHQAAgKgCgKQgLg7gUg6QgKgbgMgbIgJgHIgHgHIgOgCQgggCggAAIAAABgAD5iVQgOAEgKANQgQBQASBOQAKAwAJAvQADADAEACIAPAGIAOgGQAEgCADgDQAHgJAAgMQACgigCgiIAAgBIAAAAIAJABQAbgNAdgLQAHgDAGgFIADgNIABgHIgCgHQgIgQgRgBIgcgBQgFABgFADIgdAVIgEgJIAAgiIABgVIABgHIA0gTQAGgDAGgFIAEgOIAAgHIgBgHQgIgQgSgBQgNgBgOAAIgvAPgAjoAKIAYAMIACAHQAGAKACALIAEANIAEAHIAAAHIAAAHIACAHIACAHIAFAHIAHAHIAHAHIAQAEIAOgEIAGgIIAEgGIADgHIgBgHIgGgbIgFgVIgEgHQACgOgHgNQgGgJgEgKQgBgEgCgEIgJgGQgLgHgHgKQAAAAAAAAQAAgBAAAAQABgBAAgBQAAAAABgBIAGgHIAFgHIACgHQAEgQAAgSQAAgLgDgKIgDgGIgPgWIgIgMIgHgIQgPgHgRgDQgSgDgSAAQhTAfACBeQABA/ALA8QAEADAEACQAHAEAIACIALgDIAFgEIAHgGIADgIQAEgQAAgSQAAgNABgNIABgFQAbAJAZAKgApIiLIghAUQgEACgDADIgDAHIgBAHIgBAHIAAAHQgMAZACAeIABAGIAAAHQgCAfAEAeIAAAHQAFAHADAHQAFAMAKAJIAHAGQA9AXA0gbQAFgCADgDIAEgOIAAgHIgCgHQgfgmg6AQIgEAAIgCgFIgBghIAAgjIAAgGIAGgOIACgHIABgHIAMgHQA7AOArgaIAIgGIADgOIABgGIgCgHQgIgQgRgBQgzgCgyAAIgMAHgAAFgUQgBgqAEgoIASgHQAQAAAQADQAAAAABAAQAAABAAAAQABABAAAAQAAABAAABIALAbQAKAaAIAaIgBAAQgtAJglAVIgBgbgAkeg/IAAgHIAAgHIAAgHIADgHIAGgNIAFgHIAQgHIAEgCQASgBADATIACANIgMAOIgJAHIgiAGIgCgBg");
	this.shape_1.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.craftbutton, new cjs.Rectangle(-80.3,-36.8,160.6,73.7), null);


(lib.Cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJMHXQgIgIgEgJQgGgNgEgPQgGgWACgXIABgeIACgFQgbgNgdgKQgLgFgKgHQheAOhfAEIgBACQhVBChoAkQgQAFgPAHQidBKiYgwQgHgIgEgJQgGgNgEgPQgFgWAGgXQgKgIgLgFQg7ggg8geQngAvnVhMQhlgRhZgxQj2AhjhhaQgbgLgbAAQjLAAjAggQgIgIgFgIQgFgHgBgHIgBgPIiqAAQgUAHgQANQgEACgCAHQgDAIgFAIQgCAHgFAGQgIAJgKAIIgPAKIgZAFIgUgCQgRgDgRgIQgLgFgKgHQgKgPgFgRQgMgqACguIAAgOQACglAcgXQD8g5EHgPIBzgFQAZAAAZgJQAegKAUgEQAoAAAnAEIAGAAQAPACAPAEIATAQIALAJQAHgCAHgFIARgMIATgLQEkgCElAHQBMACBEAhQAKAFALADQBHAXAhg4QBEgqBQAXQBDATBGAKIAVAPIArAgQAOALAMAMQAPAFAPAHIBQAmQD4gJDqBBIArANQAPAEAMAHQAXAIAYALIAUAPIAUAOQBLAiBSAQQA9ABA/gEIBPgIQBQgJgPgnQgFgIgEgIQgGgOgDgOIAAgBQgFgXAJgWIAOgdQAHgIAJgFIAwghIAVgOIDxhZQBBgYBEgNQA5gLA7gDIAJgPIAGgPQAHgOAFgPIAAgCQADgGAAgIQACgHAEgHQAGgIAIgIIAegeQA3ADA3AAQFXgBE3iJIAjAKIAUAQIAKAJIAUgFQBVgZBVgRIAZgFIAAgDQBQAABQAEQASABARAFIATAQIAgAcQAWAVARAZIAGAPQAJAWAAAXQgBAWgHAUQgDAJgFAJIgJAPQAKAIALAGIA1AhQAJAGAHAHQAIAIAFAIQAFAHACAHIAFAPIAPgKIAKgDIAZgEIAAgDQA8AAA8AEQASABARAFIATAQQAIAHAHAIIAVAdIAEAPIABAPIAAAPIgGAPIgFAIIgEAHIgIALIgDADIgOALIgKAEQgaAJgZADIgBADQgDAPgGAOQgEAIgFAIQkpBXk0gRIgGAOQgEAIgHAGQgXARgZAPIFxAzQALABAKAIIAJAPIAGAPIAFAPIAFAPIgEAPIgCAPIgEAPIgKAPQgFAHgGAHQgGAGgIAFQgRAFgSAAQnbAKnZAeQieAKibATQgaADgbgMQgIgIgEgJIgLgbQgJgYAJgXQAFgOADgPIgFgPIgEgPIgBgPQgDgIgFgDQgMgJgPgFIgZAPQgIAHgGAJIgIANQgGAIgHAIIgQAOIgYAQQgIAHgGAJQgVAhgdAbIggAeIgOAOQgKAHgLAFIgTAHQgoAOgmAAQg7AAg1ghgAhWDxIgGAOIgJAQQAUAPAWAMQALAFAMADQAigKAigHIgFgIIgJgPQgKgIgKgGQgMgIgNgGIgEgCIgHgEIgOgDQgMgDgNAAIgEAAIgFAPgA+ogcQAFAPAKAIQARANAXAIIgPgPIgPgOQgKgKgMgHIgDACgAeMiFIAEAPIABAPIAAAPICCAPQgvgcg1gMQgPgMgQgKIgBAAIgDACgAYajVIgoAJQgeAGgWANIAHAHQAZgCAYgHQAOgDANgHQAggQgSAAIgFAAg");
	this.shape.setTransform(-14.1,-14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4E8FC").s().p("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");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cloud, new cjs.Rectangle(-327.6,-68.7,655.2,137.4), null);


(lib.CheckPoint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
		
		this.updateFrame = function() {
			// requires health to be set
			var healthAmt = this.health / this.maxHealth;
			if (healthAmt < 0) {
				this.gotoAndStop(3);
				this.dead = true;
			}
			else if (healthAmt < 0.3) {
				this.gotoAndStop(2);
			}
			else if (healthAmt < 0.7) {
				this.gotoAndStop(1);
			}
			else {
				this.gotoAndStop(0);
			}
		}.bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_1
	this.instance = new lib.checkpoint();
	this.instance.parent = this;
	this.instance.setTransform(-15,-64);

	this.instance_1 = new lib.checkpoint2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-15,-64);

	this.instance_2 = new lib.checkpoint3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-15,-64);

	this.instance_3 = new lib.checkpoint4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-11,-34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-64,30,64);


(lib.BlackShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg1GAptMAAAhTZMBqNAAAMAAABTZg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlackShadow, new cjs.Rectangle(-339.8,-266.9,679.8,533.8), null);


(lib.Tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.treeShade = new lib.TreeShade();
	this.treeShade.name = "treeShade";
	this.treeShade.parent = this;
	this.treeShade.setTransform(0,-114.7,1,1,0,0,0,0,-114.7);

	this.timeline.addTween(cjs.Tween.get(this.treeShade).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(1.4,-110.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D560D").s().p("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");
	this.shape_1.setTransform(-2.6,-130.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tree, new cjs.Rectangle(-75.9,-240.1,150.3,246.5), null);


(lib.Mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AB6349").ss(4.1,1,1).p("AqAg/QgDgUAFgpQAEgoBbhiQBbhiG9gDQG9gECKB1QBHA7gGCBQgFCDhoB0QihCwlGADQllADiph2QiUhngLjRg");
	this.shape.setTransform(-0.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Top Teeth
	this.instance = new lib.Tooth();
	this.instance.parent = this;
	this.instance.setTransform(-6.2,-22.7,1.236,1.318,-177.6);

	this.instance_1 = new lib.Tooth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.9,-22.7,1.054,1.224,0,178.6,-177.6);

	this.instance_2 = new lib.Tooth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.8,-21.5,0.959,1.112,0,177.8,-177.6,0.4,0.1);

	this.instance_3 = new lib.Tooth();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-39.9,-19.6,0.904,0.965,0,177.1,178.4,0.4,0.5);

	this.instance_4 = new lib.Tooth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-49.7,-16.7,0.844,0.813,0,177.1,178.4,0.4,0.5);

	this.instance_5 = new lib.Tooth();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7,-22.5,1.236,1.318,0,-177.6,2.4,0.1,-0.1);

	this.instance_6 = new lib.Tooth();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.1,-22.5,1.054,1.217,0,-173.8,2.4,0.2,0.1);

	this.instance_7 = new lib.Tooth();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30.5,-21.6,0.959,1.062,0,-172.9,2.4,0.4,0.2);

	this.instance_8 = new lib.Tooth();
	this.instance_8.parent = this;
	this.instance_8.setTransform(40,-19.7,0.904,0.965,0,-172.2,6.4,0.4,0.5);

	this.instance_9 = new lib.Tooth();
	this.instance_9.parent = this;
	this.instance_9.setTransform(49.6,-16.8,0.844,0.819,0,-172.2,6.4,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Teeth
	this.instance_10 = new lib.Tooth();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.3,26.2,1.136,1.164,0,2.4,-177.6,0,0.1);

	this.instance_11 = new lib.Tooth();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.3,25.1,1.054,1.111,0,6.2,-177.6,0.1,0.2);

	this.instance_12 = new lib.Tooth();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-29.7,22.2,0.959,1.062,0,7.1,-177.6,0.5,0.2);

	this.instance_13 = new lib.Tooth();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-39.1,18.4,0.904,0.965,0,7.8,-173.6,0.4,0.4);

	this.instance_14 = new lib.Tooth();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-46.4,13,0.844,0.899,0,7.8,-173.6,0.5,0.5);

	this.instance_15 = new lib.Tooth();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-51.3,7.2,0.801,0.834,0,7.8,-173.6,0.6,0.4);

	this.instance_16 = new lib.Tooth();
	this.instance_16.parent = this;
	this.instance_16.setTransform(6.1,26.4,1.136,1.164,2.4,0,0,0.1,0.1);

	this.instance_17 = new lib.Tooth();
	this.instance_17.parent = this;
	this.instance_17.setTransform(18.4,25.1,1.054,1.111,0,-1.4,2.4,0.1,0.2);

	this.instance_18 = new lib.Tooth();
	this.instance_18.parent = this;
	this.instance_18.setTransform(29.6,22,0.959,1.062,0,-2.2,2.4,0.4,0.2);

	this.instance_19 = new lib.Tooth();
	this.instance_19.parent = this;
	this.instance_19.setTransform(38.9,18.4,0.904,0.965,0,-2.9,-1.6,0.4,0.4);

	this.instance_20 = new lib.Tooth();
	this.instance_20.parent = this;
	this.instance_20.setTransform(46.9,13,0.844,0.899,0,-2.9,-1.6,0.5,0.5);

	this.instance_21 = new lib.Tooth();
	this.instance_21.parent = this;
	this.instance_21.setTransform(52.6,7.5,0.801,0.834,0,-2.9,-1.6,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

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


(lib.Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function resume(evt) {
			if (this.paused) {
				this.play();
			}
			else {
				// fast forward
				// will this work? Who knows
				var newFrame = this.currentFrame + 48 - 24;
				newFrame -= newFrame % 48;
				newFrame += 24;
				if (newFrame >= this.totalFrames) {
					// just do nothing. Safer.
				}
				else {
					this.gotoAndStop(newFrame);
				}
			}
		}
		
		this.addEventListener("click", resume.bind(this));
		
		this.sound = createjs.Sound.play("IntroSong", {loop: -1});
	}
	this.frame_24 = function() {
		this.stop();
	}
	this.frame_72 = function() {
		this.stop();
	}
	this.frame_120 = function() {
		this.stop();
	}
	this.frame_168 = function() {
		this.stop();
	}
	this.frame_216 = function() {
		this.stop();
	}
	this.frame_264 = function() {
		this.stop();
	}
	this.frame_312 = function() {
		this.stop();
	}
	this.frame_360 = function() {
		this.stop();
	}
	this.frame_408 = function() {
		this.stop();
	}
	this.frame_432 = function() {
		this.sound.paused = true;
		this.parent.gotoAndStop(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(48).call(this.frame_72).wait(48).call(this.frame_120).wait(48).call(this.frame_168).wait(48).call(this.frame_216).wait(48).call(this.frame_264).wait(48).call(this.frame_312).wait(48).call(this.frame_360).wait(48).call(this.frame_408).wait(24).call(this.frame_432).wait(1));

	// Blackness
	this.instance = new lib.BlackShadow();
	this.instance.parent = this;
	this.instance.setTransform(323.9,243);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).to({alpha:0},24).wait(1).to({alpha:1},23).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUBKIAAgVIAqAAIAAAVgAgUAgIAAgVIgWAAIAAg/IAWAAIAAgVIAqAAIAAAVIAVAAIAAA/IgVAAIAAAVg");
	this.shape.setTransform(572.1,385.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAgVIArAAIAAAVIA/AAIAAgqIhUAAIAAgVIgWAAIAAgqIAWAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAqIBUAAIAAAVIAWAAIAAAqIgWAAIAAAVg");
	this.shape_1.setTransform(554.1,385.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgUAAIAAgVIgWAAIAAAqIgrAAIAAiTIB/AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_2.setTransform(537.1,385.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_3.setTransform(520.1,385.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgWAAIAAAVIgTAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIATAAIAAgVIAWAAIAAgVIAqAAIAACTg");
	this.shape_4.setTransform(503.1,385.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgTAAIAAAVIgWAAg");
	this.shape_5.setTransform(486.1,385.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBpAAIAAAVIhUAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgqIgWAAIAAgVIBAAAIAABUg");
	this.shape_6.setTransform(469.1,385.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUBKIAAg/IgWAAIAAgVIgVAAIAAg/IArAAIAAA/IApAAIAAg/IArAAIAAA/IgWAAIAAAVIgVAAIAAA/g");
	this.shape_7.setTransform(436.1,385.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgVAAIAAgVIgVAAIAAAqIgrAAIAAiTIB/AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_8.setTransform(418.1,385.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgVAAIAAAVIgVAAg");
	this.shape_9.setTransform(401.1,385.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAVAAIAAA/IgVAAIAAAVIgVAAIAAAVgAgfA1IAqAAIAAgVIAVAAIAAg/IgVAAIAAgVIgqAAg");
	this.shape_10.setTransform(384.1,385.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIAUAAIAAAVIAVAAIAAg/IAqAAIAACTg");
	this.shape_11.setTransform(367.1,385.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_12.setTransform(350.1,385.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBpAAIAAAVIhTAAIAAAVIgWAAIAAA/IAWAAIAAAVIApAAIAAgqIgWAAIAAgVIBAAAIAABUg");
	this.shape_13.setTransform(333.1,385.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_14.setTransform(316.1,385.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIAqAAIAAB+IBqAAIAAAVg");
	this.shape_15.setTransform(299.1,385.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUBKIAAg/IgWAAIAAgVIgVAAIAAg/IArAAIAAA/IApAAIAAg/IArAAIAAA/IgWAAIAAAVIgVAAIAAA/g");
	this.shape_16.setTransform(266.1,385.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIB/AAIAAAVIAWAAIAAAqIgWAAIAAAVIAWAAIAAAqIgWAAIAAAVgAgfA1IA/AAIAAgqIg/AAgAgfgKIA/AAIAAgqIg/AAg");
	this.shape_17.setTransform(248.1,385.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIBpAAIAAAVIAVAAIAAAVIAVAAIAAA/IgVAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_18.setTransform(214.1,385.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_19.setTransform(197.1,385.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgWAAIAAAVIgTAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIATAAIAAgVIAWAAIAAgVIAqAAIAACTg");
	this.shape_20.setTransform(180.1,385.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgUAAIAAAVIgVAAg");
	this.shape_21.setTransform(163.1,385.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAhpIAWAAIAAgVIBpAAIAAAVIAWAAIAABpIgWAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_22.setTransform(146.1,385.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgVAAIAAgVIgVAAIAAAqIgrAAIAAiTIB/AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_23.setTransform(129.1,385.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IAqAAIAAgVIAVAAIAAg/IgVAAIAAgVIgqAAg");
	this.shape_24.setTransform(95.1,385.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAgVIgWAAIAAA/IgrAAIAAiTIArAAIAAAVIAWAAIAAAVIAUAAIAAAVIAVAAIAAg/IArAAIAACTg");
	this.shape_25.setTransform(78.1,385.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgTAAIAAAVIgWAAg");
	this.shape_26.setTransform(61.1,385.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgfAgIAAgVIAWAAIAAgqIApAAIAAAqIgWAAIAAAVg");
	this.shape_27.setTransform(596.6,373.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIBpAAIAAAVIAVAAIAAAVIAVAAIAAA/IgVAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_28.setTransform(579.6,366.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_29.setTransform(562.6,366.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgWAAIAAAVIgTAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIATAAIAAgVIAWAAIAAgVIAqAAIAACTg");
	this.shape_30.setTransform(545.6,366.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgUAAIAAAVIgVAAg");
	this.shape_31.setTransform(528.6,366.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_32.setTransform(512.6,366.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAVAAIAAAVIAVAAIAAg/IArAAIAACTg");
	this.shape_33.setTransform(494.6,366.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAh+IArAAIAAB+IA/AAIAAh+IArAAIAAB+IgWAAIAAAVg");
	this.shape_34.setTransform(477.6,366.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_35.setTransform(443.6,366.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgTAAIAAgVIgWAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_36.setTransform(426.6,366.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_37.setTransform(409.6,366.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAAVIgVAAIAAAVIgVAAIAAgqIgVAAIAAhpIAqAAIAAA/IAVAAIAAgVIAUAAIAAAVIAWAAIAAg/IAqAAIAABpIgVAAIAAAqg");
	this.shape_38.setTransform(392.6,366.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAgVIArAAIAAAVIA/AAIAAgqIhUAAIAAgVIgWAAIAAgqIAWAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAqIBUAAIAAAVIAWAAIAAAqIgWAAIAAAVg");
	this.shape_39.setTransform(358.6,366.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_40.setTransform(341.6,366.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgVAAIAAAVIgVAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAVAAIAAgVIAVAAIAAgVIArAAIAACTg");
	this.shape_41.setTransform(324.6,366.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgUAAIAAAVIgWAAg");
	this.shape_42.setTransform(307.6,366.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBpAAIAAAVIhTAAIAAAVIgWAAIAAA/IAWAAIAAAVIApAAIAAgqIgVAAIAAgVIA/AAIAABUg");
	this.shape_43.setTransform(290.6,366.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_44.setTransform(273.6,366.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_45.setTransform(256.6,366.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIBpAAIAAAVIAVAAIAAAVIAVAAIAAA/IgVAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_46.setTransform(239.6,366.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_47.setTransform(223.6,366.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgKBKIAAgVIgVAAIAAgVIgVAAIAAgVIgWAAIAAhUIArAAIAABUIAVAAIAAAVIAVAAIAAgVIAVAAIAAhUIArAAIAABUIgWAAIAAAVIgVAAIAAAVIgVAAIAAAVg");
	this.shape_48.setTransform(205.6,366.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgfAgIAAgVIAVAAIAAgqIAqAAIAAAqIgVAAIAAAVg");
	this.shape_49.setTransform(171.6,373.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAhpIAWAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_50.setTransform(154.6,366.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBpAAIAAAVIhTAAIAAAVIgWAAIAAA/IAWAAIAAAVIApAAIAAgqIgWAAIAAgVIBAAAIAABUg");
	this.shape_51.setTransform(137.6,366.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgTAAIAAAVIgWAAg");
	this.shape_52.setTransform(120.6,366.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBpAAIAAAVIhTAAIAAAVIgWAAIAAA/IAWAAIAAAVIApAAIAAgqIgWAAIAAgVIBAAAIAABUg");
	this.shape_53.setTransform(86.6,366.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IArAAIAACTg");
	this.shape_54.setTransform(69.6,366.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAhpIAWAAIAAgVIBpAAIAAAVIAWAAIAABpIgWAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_55.setTransform(52.6,366.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIArAAIAAB+IBqAAIAAAVg");
	this.shape_56.setTransform(35.6,366.9);

	this.instance_1 = new lib.cutscene1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(113,52);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgqAAIAAiTIAqAAIAAA/IA/AAIAAg/IArAAIAACTg");
	this.shape_57.setTransform(452.1,385.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgWAAIAAg/IAWAAIAAgVIAVAAIAAgVIBqAAIAAAVIhVAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgqIgVAAIAAgVIBAAAIAABUg");
	this.shape_58.setTransform(435.1,385.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgUAAIAAgVIgWAAIAAAqIgrAAIAAiTIArAAIAAA/IAWAAIAAgVIAUAAIAAgVIAVAAIAAgVIAqAAIAAAVIgVAAIAAAVIgVAAIAAAVIgVAAIAAAVIAVAAIAAAVIAVAAIAAAVIAVAAIAAAVg");
	this.shape_59.setTransform(384.1,385.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgJBKIAAgVIgWAAIAAgVIgVAAIAAgVIgVAAIAAhUIAqAAIAABUIAWAAIAAAVIATAAIAAgVIAWAAIAAhUIAqAAIAABUIgVAAIAAAVIgVAAIAAAVIgWAAIAAAVg");
	this.shape_60.setTransform(350.1,385.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICUAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_61.setTransform(299.1,385.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgWAAIAAg/IAWAAIAAgVIAVAAIAAgVIBqAAIAAAVIhVAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgqIgVAAIAAgVIBAAAIAABUg");
	this.shape_62.setTransform(248.1,385.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgTAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIATAAIAAAVIAWAAIAAg/IAqAAIAACTg");
	this.shape_63.setTransform(214.1,385.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgqAAIAAiTIAqAAIAAA/IA/AAIAAg/IAqAAIAACTg");
	this.shape_64.setTransform(180.1,385.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_65.setTransform(164.1,385.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_66.setTransform(563.6,366.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgqAAIAAiTIAqAAIAAA/IA/AAIAAg/IAqAAIAACTg");
	this.shape_67.setTransform(545.6,366.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgWAAIAAg/IAWAAIAAgVIAVAAIAAgVIBqAAIAAAVIhVAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgqIgWAAIAAgVIBBAAIAABUg");
	this.shape_68.setTransform(528.6,366.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_69.setTransform(512.6,366.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgTAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIATAAIAAAVIAWAAIAAg/IAqAAIAACTg");
	this.shape_70.setTransform(426.6,366.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgqAAIAAiTIAqAAIAAA/IA/AAIAAg/IAqAAIAACTg");
	this.shape_71.setTransform(392.6,366.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAgVIAqAAIAAAVIA/AAIAAgqIhUAAIAAgVIgVAAIAAgqIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgrAAIAAgVIgpAAIAAAqIBUAAIAAAVIAWAAIAAAqIgWAAIAAAVg");
	this.shape_72.setTransform(375.6,366.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAVAAIAAAVIAVAAIAAg/IArAAIAACTg");
	this.shape_73.setTransform(324.6,366.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAgVIAqAAIAAAVIA/AAIAAgqIhUAAIAAgVIgVAAIAAgqIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgrAAIAAgVIgpAAIAAAqIBUAAIAAAVIAVAAIAAAqIgVAAIAAAVg");
	this.shape_74.setTransform(239.6,366.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgUAAIAAgVIgVAAIAAAqIgrAAIAAiTIB/AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_75.setTransform(222.6,366.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_76.setTransform(205.6,366.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgVAAIAAAVIgVAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAVAAIAAgVIAVAAIAAgVIArAAIAACTg");
	this.shape_77.setTransform(188.6,366.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgVAAIAAAVIgVAAg");
	this.shape_78.setTransform(171.6,366.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgWAAIAAg/IAWAAIAAgVIAVAAIAAgVIBpAAIAAAVIhTAAIAAAVIgWAAIAAA/IAWAAIAAAVIApAAIAAgqIgVAAIAAgVIA/AAIAABUg");
	this.shape_79.setTransform(154.6,366.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIAqAAIAAB+IBpAAIAAAVg");
	this.shape_80.setTransform(120.6,366.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIAqAAIAAB+IBpAAIAAAVg");
	this.shape_81.setTransform(103.6,366.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAA/g");
	this.shape_82.setTransform(52.6,366.9);

	this.instance_2 = new lib.cutscene2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(113,52);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgWAAIAAg/IAWAAIAAgVIAVAAIAAgVIBUAAIAAAVIAWAAIAAAVIgrAAIAAgVIgqAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgVIArAAIAAAVIgWAAIAAAVg");
	this.shape_83.setTransform(511.6,424);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgVAAIAAAVIgUAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIAUAAIAAgVIAVAAIAAgVIAqAAIAACTg");
	this.shape_84.setTransform(443.6,424);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIB+AAIAAAVIAWAAIAAAqIgWAAIAAAVIAWAAIAAAqIgWAAIAAAVgAgfA1IA/AAIAAgqIg/AAgAgfgKIA/AAIAAgqIg/AAg");
	this.shape_85.setTransform(375.6,424);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICUAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_86.setTransform(307.6,424);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgrAAIAAiTIArAAIAAA/IA/AAIAAg/IArAAIAACTg");
	this.shape_87.setTransform(205.6,424);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgTAAIAAAVIgWAAIAAAVIgVAAIAAgqIgVAAIAAhpIAqAAIAAA/IAWAAIAAgVIATAAIAAAVIAWAAIAAg/IAqAAIAABpIgVAAIAAAqg");
	this.shape_88.setTransform(120.6,424);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgVIAqAAIAAAVIgVAAIAAAVg");
	this.shape_89.setTransform(469.1,405);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgUAAIAAgVIgVAAIAAAqIgqAAIAAiTIB+AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_90.setTransform(452.1,405);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAh+IArAAIAAB+IA/AAIAAh+IArAAIAAB+IgWAAIAAAVg");
	this.shape_91.setTransform(435.1,405);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIB/AAIAAAVIAWAAIAAA/IgWAAIAAAVIhUAAIAAAqgAgfALIA/AAIAAg/Ig/AAg");
	this.shape_92.setTransform(418.1,405);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICUAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_93.setTransform(384.1,405);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgVAAIAAAVIgUAAIAAgVIgWAAIAAA/IgqAAIAAiTIAqAAIAAAVIAWAAIAAAVIAUAAIAAgVIAVAAIAAgVIAqAAIAACTg");
	this.shape_94.setTransform(367.1,405);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgqAAIAAiTIAqAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IArAAIAACTg");
	this.shape_95.setTransform(299.1,405);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_96.setTransform(283.1,405);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICUAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_97.setTransform(231.1,405);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAgVIAqAAIAAAVIA/AAIAAgqIhUAAIAAgVIgVAAIAAgqIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgrAAIAAgVIgpAAIAAAqIBUAAIAAAVIAVAAIAAAqIgVAAIAAAVg");
	this.shape_98.setTransform(214.1,405);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgTAAIAAgVIgWAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_99.setTransform(197.1,405);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAh+IAqAAIAAB+IA/AAIAAh+IAqAAIAAB+IgVAAIAAAVg");
	this.shape_100.setTransform(180.1,405);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgVIAqAAIAAAVIgVAAIAAAVg");
	this.shape_101.setTransform(163.1,405);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgrAAIAAiTIArAAIAAA/IA/AAIAAg/IArAAIAACTg");
	this.shape_102.setTransform(95.1,405);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAAVIgWAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAWAAIAAgVIAUAAIAAAVIAVAAIAAg/IArAAIAABpIgWAAIAAAqg");
	this.shape_103.setTransform(78.1,405);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgTAAIAAAVIgWAAg");
	this.shape_104.setTransform(486.1,385.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAh+IArAAIAAB+IA/AAIAAh+IArAAIAAB+IgWAAIAAAVg");
	this.shape_105.setTransform(418.1,385.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_106.setTransform(402.1,385.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgVAAIAAAVIgUAAIAAgVIgWAAIAAA/IgrAAIAAiTIArAAIAAAVIAWAAIAAAVIAUAAIAAgVIAVAAIAAgVIAqAAIAACTg");
	this.shape_107.setTransform(384.1,385.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgTAAIAAgVIgWAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_108.setTransform(333.1,385.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhJBKIAAiTICTAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAA/g");
	this.shape_109.setTransform(316.1,385.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgUAAIAAgVIgWAAIAAAqIgrAAIAAiTIB/AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_110.setTransform(231.1,385.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgTAAIAAAVIgWAAIAAAVIgVAAIAAgqIgVAAIAAhpIAqAAIAAA/IAWAAIAAgVIATAAIAAAVIAWAAIAAg/IAqAAIAABpIgVAAIAAAqg");
	this.shape_111.setTransform(197.1,385.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_112.setTransform(129.1,385.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgrAAIAAiTIArAAIAAA/IA/AAIAAg/IArAAIAACTg");
	this.shape_113.setTransform(112.1,385.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_114.setTransform(96.1,385.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_115.setTransform(453.1,366.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IAqAAIAAgVIAVAAIAAg/IgVAAIAAgVIgqAAg");
	this.shape_116.setTransform(401.1,366.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICUAAIAAAVIhpAAIAAAqIBUAAIAAAVIhUAAIAAAqIBpAAIAAAVg");
	this.shape_117.setTransform(384.1,366.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIBpAAIAAAVIAVAAIAAAVIAVAAIAAA/IgVAAIAAAVIgVAAIAAAVgAgfA1IAqAAIAAgVIAVAAIAAg/IgVAAIAAgVIgqAAg");
	this.shape_118.setTransform(367.1,366.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_119.setTransform(283.1,366.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgrAAIAAiTIArAAIAAA/IA/AAIAAg/IArAAIAACTg");
	this.shape_120.setTransform(265.1,366.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_121.setTransform(249.1,366.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgUBKIAAh+IgrAAIAAgVIB/AAIAAAVIgrAAIAAB+g");
	this.shape_122.setTransform(215.1,366.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAh+IAqAAIAAB+IA/AAIAAh+IAqAAIAAB+IgVAAIAAAVg");
	this.shape_123.setTransform(197.1,366.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIB+AAIAAAVIAVAAIAAAqIgVAAIAAAVIAVAAIAAAqIgVAAIAAAVgAgfA1IA/AAIAAgqIg/AAgAgfgKIA/AAIAAgqIg/AAg");
	this.shape_124.setTransform(180.1,366.9);

	this.instance_3 = new lib.cutscene3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(113,52);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAAVIgVAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAVAAIAAgVIAVAAIAAAVIAVAAIAAg/IArAAIAABpIgWAAIAAAqg");
	this.shape_125.setTransform(418.1,405);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAgVIArAAIAAAVIA/AAIAAgqIhUAAIAAgVIgWAAIAAgqIAWAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAqIBUAAIAAAVIAVAAIAAAqIgVAAIAAAVg");
	this.shape_126.setTransform(384.1,405);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAWAAIAABpIgWAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_127.setTransform(299.1,405);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgJBKIAAgVIgWAAIAAgVIgVAAIAAgVIgWAAIAAhUIArAAIAABUIAWAAIAAAVIAUAAIAAgVIAVAAIAAhUIAqAAIAABUIgVAAIAAAVIgVAAIAAAVIgVAAIAAAVg");
	this.shape_128.setTransform(231.1,405);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_129.setTransform(180.1,405);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_130.setTransform(163.1,405);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgUAAIAAAVIgWAAg");
	this.shape_131.setTransform(78.1,405);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgTAAIAAAVIgWAAIAAAVIgqAAIAAgqIAVAAIAAgVIAVAAIAAgVIgVAAIAAgVIgVAAIAAgqIAqAAIAAAVIAWAAIAAAVIATAAIAAgVIAWAAIAAgVIAqAAIAAAqIgVAAIAAAVIgVAAIAAAVIAVAAIAAAVIAVAAIAAAqg");
	this.shape_132.setTransform(545.6,385.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAAVIgVAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAVAAIAAgVIAVAAIAAAVIAVAAIAAg/IArAAIAABpIgWAAIAAAqg");
	this.shape_133.setTransform(358.6,385.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IAqAAIAAgVIAVAAIAAg/IgVAAIAAgVIgqAAg");
	this.shape_134.setTransform(324.6,385.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIAqAAIAAB+IBpAAIAAAVg");
	this.shape_135.setTransform(273.6,385.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_136.setTransform(205.6,385.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_137.setTransform(171.6,385.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAAVIgWAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAWAAIAAgVIAUAAIAAAVIAVAAIAAg/IAqAAIAABpIgVAAIAAAqg");
	this.shape_138.setTransform(154.6,385.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgfAgIAAgVIAVAAIAAgqIAqAAIAAAqIgWAAIAAAVg");
	this.shape_139.setTransform(528.6,373.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_140.setTransform(511.6,366.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgVAAIAAgVIgVAAIAAAqIgrAAIAAiTIArAAIAAA/IAVAAIAAgVIAVAAIAAgVIAVAAIAAgVIArAAIAAAVIgWAAIAAAVIgVAAIAAAVIgVAAIAAAVIAVAAIAAAVIAVAAIAAAVIAWAAIAAAVg");
	this.shape_141.setTransform(494.6,366.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAhpIAWAAIAAgVIBpAAIAAAVIAWAAIAABpIgWAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_142.setTransform(477.6,366.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAAVIgWAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAWAAIAAgVIAUAAIAAAVIAVAAIAAg/IAqAAIAABpIgVAAIAAAqg");
	this.shape_143.setTransform(460.6,366.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgUAAIAAAVIgWAAg");
	this.shape_144.setTransform(443.6,366.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgfBKIAAgVIgVAAIAAgVIgVAAIAAg/IAVAAIAAgVIAVAAIAAgVIBqAAIAAAVIhVAAIAAAVIgVAAIAAA/IAVAAIAAAVIAqAAIAAgqIgWAAIAAgVIBBAAIAABUg");
	this.shape_145.setTransform(375.6,366.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgVAAIAAgVIgVAAIAAAqIgrAAIAAiTIArAAIAAA/IAVAAIAAgVIAVAAIAAgVIAVAAIAAgVIArAAIAAAVIgWAAIAAAVIgVAAIAAAVIgVAAIAAAVIAVAAIAAAVIAVAAIAAAVIAWAAIAAAVg");
	this.shape_146.setTransform(324.6,366.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgJBKIAAgVIgWAAIAAgVIgVAAIAAgVIgVAAIAAhUIAqAAIAABUIAWAAIAAAVIAUAAIAAgVIAVAAIAAhUIAqAAIAABUIgVAAIAAAVIgVAAIAAAVIgVAAIAAAVg");
	this.shape_147.setTransform(290.6,366.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgWAAIAAAVIgUAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAUAAIAAgVIAWAAIAAgVIArAAIAACTg");
	this.shape_148.setTransform(222.6,366.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgUAAIAAgVIgWAAIAAA/IgrAAIAAiTIArAAIAAAVIAWAAIAAAVIAUAAIAAAVIAVAAIAAg/IAqAAIAACTg");
	this.shape_149.setTransform(154.6,366.9);

	this.instance_4 = new lib.cutscene4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(113,52);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_150.setTransform(528.6,405);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIArAAIAAB+IBpAAIAAAVg");
	this.shape_151.setTransform(460.6,405);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_152.setTransform(181.1,385.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgUAAIAAgVIgVAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_153.setTransform(163.1,385.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgTAAIAAgVIgWAAIAAAqIgqAAIAAiTIAqAAIAAA/IAWAAIAAgVIATAAIAAgVIAWAAIAAgVIAqAAIAAAVIgVAAIAAAVIgVAAIAAAVIgWAAIAAAVIAWAAIAAAVIAVAAIAAAVIAVAAIAAAVg");
	this.shape_154.setTransform(426.6,366.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgUAAIAAgVIgVAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIApAAIAAgVIAWAAIAAgqIg/AAg");
	this.shape_155.setTransform(392.6,366.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_156.setTransform(325.6,366.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_157.setTransform(291.6,366.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIB+AAIAAAVIAVAAIAAA/IgVAAIAAAVIhUAAIAAAqgAgfALIA/AAIAAg/Ig/AAg");
	this.shape_158.setTransform(273.6,366.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("Ag/BKIAAgVIArAAIAAhpIgrAAIAAgVIB/AAIAAAVIgrAAIAABpIArAAIAAAVg");
	this.shape_159.setTransform(206.6,366.9);

	this.instance_5 = new lib.cutscene5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(113,52);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgUAAIAAgVIgWAAIAAAqIgqAAIAAiTIB+AAIAAAVIAVAAIAAA/IgqAAIAAAVIAVAAIAAAVIAVAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_160.setTransform(443.6,405);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAgVIArAAIAAAVIA/AAIAAgqIhUAAIAAgVIgWAAIAAgqIAWAAIAAgVIBUAAIAAAVIAVAAIAAAVIgqAAIAAgVIgqAAIAAAqIBUAAIAAAVIAVAAIAAAqIgVAAIAAAVg");
	this.shape_161.setTransform(307.6,405);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAKBKIAAgVIgUAAIAAgVIgVAAIAAAqIgrAAIAAiTIArAAIAAA/IAVAAIAAgVIAUAAIAAgVIAWAAIAAgVIArAAIAAAVIgWAAIAAAVIgVAAIAAAVIgWAAIAAAVIAWAAIAAAVIAVAAIAAAVIAWAAIAAAVg");
	this.shape_162.setTransform(222.6,405);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIArAAIAAB+IBqAAIAAAVg");
	this.shape_163.setTransform(205.6,405);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgVAAIAAAVIgVAAg");
	this.shape_164.setTransform(188.6,405);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgUA1IAAgrIApAAIAAArgAgUgKIAAgqIApAAIAAAqg");
	this.shape_165.setTransform(538.1,388.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIB+AAIAAAVIAWAAIAAA/IgWAAIAAAVIhUAAIAAAqgAgfALIA/AAIAAg/Ig/AAg");
	this.shape_166.setTransform(452.1,385.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIArAAIAAB+IBqAAIAAAVg");
	this.shape_167.setTransform(401.1,385.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AhJBKIAAgqIAVAAIAAgVIAVAAIAAgVIAWAAIAAgVIATAAIAAgVIhTAAIAAgVICTAAIAAAqIgVAAIAAAVIgVAAIAAAVIgWAAIAAAVIgTAAIAAAVIBTAAIAAAVg");
	this.shape_168.setTransform(214.1,385.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgVAAIAAAVIgVAAg");
	this.shape_169.setTransform(112.1,385.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIBqAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_170.setTransform(605.1,366.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAVAAIAAAVIAVAAIAAg/IArAAIAACTg");
	this.shape_171.setTransform(588.1,366.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgVAAIAAAVIgVAAg");
	this.shape_172.setTransform(571.1,366.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AhKBKIAAiTIArAAIAAB+IBqAAIAAAVg");
	this.shape_173.setTransform(554.1,366.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgVAAIAAgVIgVAAIAAAVIgVAAIAAAVIgVAAIAAgqIgWAAIAAhpIArAAIAAA/IAVAAIAAgVIAVAAIAAAVIAVAAIAAg/IArAAIAABpIgWAAIAAAqg");
	this.shape_174.setTransform(95.1,366.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgUA1IAAgqIApAAIAAAqgAgUgKIAAgqIApAAIAAAqg");
	this.shape_175.setTransform(563.6,369);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgKBKIAAgVIgVAAIAAgVIgVAAIAAgVIgVAAIAAhUIAqAAIAABUIAVAAIAAAVIAUAAIAAgVIAWAAIAAhUIAqAAIAABUIgVAAIAAAVIgVAAIAAAVIgWAAIAAAVg");
	this.shape_176.setTransform(239.6,366.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgrAAIAAhpIAWAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgVAAIAAgVIgUAAIAAAVIgWAAg");
	this.shape_177.setTransform(154.6,366.9);

	this.instance_6 = new lib.cutscene6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(113,52);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgqAAIAAiTIAqAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IAqAAIAACTg");
	this.shape_178.setTransform(316.1,405);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAWAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgUAAIAAAVIgVAAg");
	this.shape_179.setTransform(299.1,405);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgKBKIAAgVIgVAAIAAgVIgVAAIAAgVIgWAAIAAhUIArAAIAABUIAVAAIAAAVIAUAAIAAgVIAWAAIAAhUIArAAIAABUIgWAAIAAAVIgVAAIAAAVIgWAAIAAAVg");
	this.shape_180.setTransform(146.1,405);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IArAAIAACTg");
	this.shape_181.setTransform(528.6,385.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAgBKIAAg/Ig/AAIAAA/IgrAAIAAiTIArAAIAAA/IA/AAIAAg/IAqAAIAACTg");
	this.shape_182.setTransform(460.6,385.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAgBKIAAgqIg/AAIAAAqIgqAAIAAhpIAVAAIAAgVIAVAAIAAgVIA/AAIAAAVIAVAAIAAAVIAVAAIAABpgAgfALIA/AAIAAgqIgWAAIAAgVIgUAAIAAAVIgVAAg");
	this.shape_183.setTransform(392.6,385.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgUBKIAAg/IgWAAIAAgVIgVAAIAAg/IArAAIAAA/IApAAIAAg/IArAAIAAA/IgWAAIAAAVIgVAAIAAA/g");
	this.shape_184.setTransform(342.6,385.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_185.setTransform(273.6,385.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgqAAIAAiTIAqAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IAqAAIAACTg");
	this.shape_186.setTransform(239.6,385.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_187.setTransform(137.6,385.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAhpIAVAAIAAgVIBpAAIAAAVIAVAAIAABpIgVAAIAAAVgAgfA1IA/AAIAAhpIg/AAg");
	this.shape_188.setTransform(562.6,366.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgWAAIAAgVIArAAIAAAVIA/AAIAAgqIhUAAIAAgVIgWAAIAAgqIAWAAIAAgVIBUAAIAAAVIAVAAIAAAVIgrAAIAAgVIgpAAIAAAqIBUAAIAAAVIAWAAIAAAqIgWAAIAAAVg");
	this.shape_189.setTransform(528.6,366.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAh+IAqAAIAAB+IA/AAIAAh+IAqAAIAAB+IgVAAIAAAVg");
	this.shape_190.setTransform(426.6,366.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AhJBKIAAiTIBpAAIAAAVIAVAAIAAAVIAWAAIAAA/IgWAAIAAAVIgVAAIAAAVgAgfA1IApAAIAAgVIAWAAIAAg/IgWAAIAAgVIgpAAg");
	this.shape_191.setTransform(375.6,366.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAgBKIAAgVIgWAAIAAgVIgUAAIAAgVIgVAAIAAA/IgrAAIAAiTIArAAIAAAVIAVAAIAAAVIAUAAIAAAVIAWAAIAAg/IArAAIAACTg");
	this.shape_192.setTransform(222.6,366.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("Ag0BKIAAgVIgVAAIAAgVIAqAAIAAAVIA/AAIAAgqIhUAAIAAgVIgVAAIAAgqIAVAAIAAgVIBUAAIAAAVIAVAAIAAAVIgrAAIAAgVIgpAAIAAAqIBUAAIAAAVIAVAAIAAAqIgVAAIAAAVg");
	this.shape_193.setTransform(137.6,366.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AhKBKIAAiTICVAAIAAAVIhqAAIAAAqIBUAAIAAAVIhUAAIAAAqIBqAAIAAAVg");
	this.shape_194.setTransform(69.6,366.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AALBKIAAgVIgVAAIAAgVIgVAAIAAAqIgrAAIAAiTIB/AAIAAAVIAWAAIAAA/IgrAAIAAAVIAVAAIAAAVIAWAAIAAAVgAgfALIAqAAIAAgVIAVAAIAAgqIg/AAg");
	this.shape_195.setTransform(52.6,366.9);

	this.instance_7 = new lib.cutscene8();
	this.instance_7.parent = this;
	this.instance_7.setTransform(113,52);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_196.setTransform(478.6,372.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_197.setTransform(461.6,372.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_198.setTransform(444.6,372.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_199.setTransform(427.6,372.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AAgBKIAAg/IgWAAIAAAVIgUAAIAAgVIgVAAIAAA/IgqAAIAAiTIAqAAIAAAVIAVAAIAAAVIAUAAIAAgVIAWAAIAAgVIAqAAIAACTg");
	this.shape_200.setTransform(392.6,366.9);

	this.instance_8 = new lib.cutscene9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(113,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_56,p:{x:35.6,y:366.9}},{t:this.shape_55,p:{x:52.6,y:366.9}},{t:this.shape_54,p:{x:69.6,y:366.9}},{t:this.shape_53},{t:this.shape_52,p:{x:120.6,y:366.9}},{t:this.shape_51,p:{x:137.6,y:366.9}},{t:this.shape_50,p:{x:154.6,y:366.9}},{t:this.shape_49,p:{x:171.6}},{t:this.shape_48,p:{x:205.6,y:366.9}},{t:this.shape_47,p:{x:223.6,y:366.9}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:273.6,y:366.9}},{t:this.shape_43},{t:this.shape_42,p:{x:307.6,y:366.9}},{t:this.shape_41,p:{x:324.6,y:366.9}},{t:this.shape_40,p:{x:341.6,y:366.9}},{t:this.shape_39,p:{x:358.6,y:366.9}},{t:this.shape_38},{t:this.shape_37,p:{x:409.6}},{t:this.shape_36,p:{x:426.6,y:366.9}},{t:this.shape_35,p:{x:443.6}},{t:this.shape_34,p:{x:477.6,y:366.9}},{t:this.shape_33,p:{x:494.6,y:366.9}},{t:this.shape_32,p:{x:512.6,y:366.9}},{t:this.shape_31,p:{x:528.6,y:366.9}},{t:this.shape_30},{t:this.shape_29,p:{x:562.6,y:366.9}},{t:this.shape_28,p:{x:579.6,y:366.9}},{t:this.shape_27,p:{x:596.6}},{t:this.shape_26,p:{x:61.1,y:385.9}},{t:this.shape_25,p:{x:78.1,y:385.9}},{t:this.shape_24,p:{x:95.1,y:385.9}},{t:this.shape_23,p:{x:129.1,y:385.9}},{t:this.shape_22,p:{x:146.1,y:385.9}},{t:this.shape_21,p:{x:163.1,y:385.9}},{t:this.shape_20,p:{x:180.1}},{t:this.shape_19,p:{x:197.1,y:385.9}},{t:this.shape_18,p:{x:214.1,y:385.9}},{t:this.shape_17,p:{x:248.1,y:385.9}},{t:this.shape_16,p:{x:266.1,y:385.9}},{t:this.shape_15,p:{x:299.1,y:385.9}},{t:this.shape_14,p:{x:316.1,y:385.9}},{t:this.shape_13,p:{y:385.9,x:333.1}},{t:this.shape_12,p:{x:350.1,y:385.9}},{t:this.shape_11,p:{x:367.1,y:385.9}},{t:this.shape_10,p:{y:385.9,x:384.1}},{t:this.shape_9,p:{x:401.1,y:385.9}},{t:this.shape_8,p:{x:418.1,y:385.9}},{t:this.shape_7,p:{x:436.1,y:385.9}},{t:this.shape_6,p:{x:469.1,y:385.9}},{t:this.shape_5,p:{x:486.1,y:385.9}},{t:this.shape_4,p:{x:503.1,y:385.9}},{t:this.shape_3,p:{x:520.1,y:385.9}},{t:this.shape_2},{t:this.shape_1,p:{y:385.9,x:554.1}},{t:this.shape}]}).to({state:[{t:this.instance_2},{t:this.shape_22,p:{x:35.6,y:366.9}},{t:this.shape_82,p:{x:52.6,y:366.9}},{t:this.shape_26,p:{x:86.6,y:366.9}},{t:this.shape_81,p:{x:103.6,y:366.9}},{t:this.shape_80,p:{x:120.6,y:366.9}},{t:this.shape_79,p:{x:154.6}},{t:this.shape_78,p:{x:171.6,y:366.9}},{t:this.shape_77},{t:this.shape_76,p:{x:205.6,y:366.9}},{t:this.shape_75,p:{y:366.9}},{t:this.shape_74,p:{x:239.6,y:366.9}},{t:this.shape_27,p:{x:256.6}},{t:this.shape_11,p:{x:290.6,y:366.9}},{t:this.shape_50,p:{x:307.6,y:366.9}},{t:this.shape_73,p:{x:324.6,y:366.9}},{t:this.shape_40,p:{x:341.6,y:366.9}},{t:this.shape_72,p:{x:375.6}},{t:this.shape_71,p:{x:392.6}},{t:this.shape_44,p:{x:409.6,y:366.9}},{t:this.shape_70},{t:this.shape_14,p:{x:443.6,y:366.9}},{t:this.shape_17,p:{x:477.6,y:366.9}},{t:this.shape_8,p:{x:494.6,y:366.9}},{t:this.shape_69,p:{x:512.6,y:366.9}},{t:this.shape_68,p:{x:528.6,y:366.9}},{t:this.shape_67,p:{x:545.6,y:366.9}},{t:this.shape_66,p:{x:563.6,y:366.9}},{t:this.shape_12,p:{x:579.6,y:366.9}},{t:this.shape_36,p:{x:596.6,y:366.9}},{t:this.shape_65,p:{x:164.1,y:385.9}},{t:this.shape_64,p:{x:180.1,y:385.9}},{t:this.shape_5,p:{x:197.1,y:385.9}},{t:this.shape_63,p:{x:214.1,y:385.9}},{t:this.shape_62,p:{x:248.1,y:385.9}},{t:this.shape_9,p:{x:265.1,y:385.9}},{t:this.shape_41,p:{x:282.1,y:385.9}},{t:this.shape_61},{t:this.shape_18,p:{x:316.1,y:385.9}},{t:this.shape_3,p:{x:333.1,y:385.9}},{t:this.shape_60,p:{x:350.1}},{t:this.shape_59},{t:this.shape_33,p:{x:401.1,y:385.9}},{t:this.shape_47,p:{x:419.1,y:385.9}},{t:this.shape_58,p:{x:435.1,y:385.9}},{t:this.shape_57},{t:this.shape_32,p:{x:470.1,y:385.9}}]},48).to({state:[{t:this.instance_3},{t:this.shape_124,p:{x:180.1}},{t:this.shape_123,p:{x:197.1,y:366.9}},{t:this.shape_122,p:{x:215.1}},{t:this.shape_121,p:{x:249.1}},{t:this.shape_120},{t:this.shape_119,p:{x:283.1,y:366.9}},{t:this.shape_72,p:{x:299.1}},{t:this.shape_35,p:{x:333.1}},{t:this.shape_63,p:{x:350.1,y:366.9}},{t:this.shape_118,p:{y:366.9,x:367.1}},{t:this.shape_117},{t:this.shape_116,p:{x:401.1,y:366.9}},{t:this.shape_9,p:{x:435.1,y:366.9}},{t:this.shape_115,p:{x:453.1}},{t:this.shape_114,p:{x:96.1,y:385.9}},{t:this.shape_113},{t:this.shape_112,p:{x:129.1,y:385.9}},{t:this.shape_66,p:{x:164.1,y:385.9}},{t:this.shape_44,p:{x:180.1,y:385.9}},{t:this.shape_111},{t:this.shape_29,p:{x:214.1,y:385.9}},{t:this.shape_110,p:{x:231.1,y:385.9}},{t:this.shape_22,p:{x:265.1,y:385.9}},{t:this.shape_82,p:{x:282.1,y:385.9}},{t:this.shape_109,p:{x:316.1,y:385.9}},{t:this.shape_108},{t:this.shape_19,p:{x:350.1,y:385.9}},{t:this.shape_14,p:{x:367.1,y:385.9}},{t:this.shape_107},{t:this.shape_106,p:{x:402.1,y:385.9}},{t:this.shape_105},{t:this.shape_41,p:{x:435.1,y:385.9}},{t:this.shape_6,p:{x:469.1,y:385.9}},{t:this.shape_104},{t:this.shape_4,p:{x:503.1,y:385.9}},{t:this.shape_12,p:{x:520.1,y:385.9}},{t:this.shape_39,p:{x:537.1,y:385.9}},{t:this.shape_103},{t:this.shape_102,p:{x:95.1,y:405}},{t:this.shape_76,p:{x:112.1,y:405}},{t:this.shape_33,p:{x:129.1,y:405}},{t:this.shape_101},{t:this.shape_100,p:{y:405,x:180.1}},{t:this.shape_99,p:{x:197.1,y:405}},{t:this.shape_98,p:{x:214.1,y:405}},{t:this.shape_97},{t:this.shape_24,p:{x:248.1,y:405}},{t:this.shape_96,p:{x:283.1,y:405}},{t:this.shape_95,p:{x:299.1,y:405}},{t:this.shape_13,p:{y:405,x:333.1}},{t:this.shape_52,p:{x:350.1,y:405}},{t:this.shape_94},{t:this.shape_93,p:{x:384.1,y:405}},{t:this.shape_92,p:{x:418.1,y:405}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_64,p:{x:486.1,y:405}},{t:this.shape_26,p:{x:503.1,y:405}},{t:this.shape_74,p:{x:520.1,y:405}},{t:this.shape_40,p:{x:537.1,y:405}},{t:this.shape_1,p:{y:405,x:554.1}},{t:this.shape_88,p:{x:120.6,y:424}},{t:this.shape_36,p:{x:137.6,y:424}},{t:this.shape_50,p:{x:154.6,y:424}},{t:this.shape_34,p:{x:171.6,y:424}},{t:this.shape_62,p:{x:188.6,y:424}},{t:this.shape_87,p:{x:205.6,y:424}},{t:this.shape_65,p:{x:223.6,y:424}},{t:this.shape_5,p:{x:256.6,y:424}},{t:this.shape_32,p:{x:291.6,y:424}},{t:this.shape_86,p:{y:424,x:307.6}},{t:this.shape_23,p:{x:324.6,y:424}},{t:this.shape_8,p:{x:341.6,y:424}},{t:this.shape_69,p:{x:359.6,y:424}},{t:this.shape_85,p:{y:424}},{t:this.shape_80,p:{x:392.6,y:424}},{t:this.shape_3,p:{x:409.6,y:424}},{t:this.shape_84},{t:this.shape_42,p:{x:460.6,y:424}},{t:this.shape_58,p:{x:477.6,y:424}},{t:this.shape_47,p:{x:495.6,y:424}},{t:this.shape_83,p:{x:511.6,y:424}}]},48).to({state:[{t:this.instance_4},{t:this.shape_88,p:{x:103.6,y:366.9}},{t:this.shape_71,p:{x:120.6}},{t:this.shape_37,p:{x:137.6}},{t:this.shape_149,p:{x:154.6}},{t:this.shape_62,p:{x:188.6,y:366.9}},{t:this.shape_9,p:{x:205.6,y:366.9}},{t:this.shape_148},{t:this.shape_35,p:{x:239.6}},{t:this.shape_28,p:{x:256.6,y:366.9}},{t:this.shape_29,p:{x:273.6,y:366.9}},{t:this.shape_147,p:{x:290.6,y:366.9}},{t:this.shape_146},{t:this.shape_73,p:{x:341.6,y:366.9}},{t:this.shape_106,p:{x:359.6,y:366.9}},{t:this.shape_145,p:{x:375.6,y:366.9}},{t:this.shape_67,p:{x:392.6,y:366.9}},{t:this.shape_66,p:{x:410.6,y:366.9}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:477.6}},{t:this.shape_141,p:{x:494.6,y:366.9}},{t:this.shape_140,p:{x:511.6}},{t:this.shape_139,p:{x:528.6}},{t:this.shape_58,p:{x:52.6,y:385.9}},{t:this.shape_31,p:{x:69.6,y:385.9}},{t:this.shape_20,p:{x:86.6}},{t:this.shape_19,p:{x:103.6,y:385.9}},{t:this.shape_98,p:{x:120.6,y:385.9}},{t:this.shape_138},{t:this.shape_137,p:{x:171.6}},{t:this.shape_8,p:{x:188.6,y:385.9}},{t:this.shape_136,p:{x:205.6}},{t:this.shape_109,p:{x:239.6,y:385.9}},{t:this.shape_96,p:{x:257.6,y:385.9}},{t:this.shape_135},{t:this.shape_81,p:{x:290.6,y:385.9}},{t:this.shape_86,p:{y:385.9,x:307.6}},{t:this.shape_134,p:{x:324.6,y:385.9}},{t:this.shape_133,p:{x:358.6}},{t:this.shape_69,p:{x:376.6,y:385.9}},{t:this.shape_65,p:{x:393.6,y:385.9}},{t:this.shape_64,p:{x:409.6,y:385.9}},{t:this.shape_80,p:{x:443.6,y:385.9}},{t:this.shape_50,p:{x:460.6,y:385.9}},{t:this.shape_55,p:{x:477.6,y:385.9}},{t:this.shape_32,p:{x:495.6,y:385.9}},{t:this.shape_17,p:{x:511.6,y:385.9}},{t:this.shape_22,p:{x:528.6,y:385.9}},{t:this.shape_132},{t:this.shape_14,p:{x:562.6,y:385.9}},{t:this.shape_74,p:{x:579.6,y:385.9}},{t:this.shape_131,p:{x:78.1}},{t:this.shape_33,p:{x:95.1,y:405}},{t:this.shape_116,p:{x:112.1,y:405}},{t:this.shape_68,p:{x:146.1,y:405}},{t:this.shape_130,p:{y:405,x:163.1}},{t:this.shape_129,p:{x:180.1,y:405}},{t:this.shape_18,p:{x:197.1,y:405}},{t:this.shape_128},{t:this.shape_47,p:{x:249.1,y:405}},{t:this.shape_24,p:{x:265.1,y:405}},{t:this.shape_112,p:{x:282.1,y:405}},{t:this.shape_127,p:{x:299.1,y:405}},{t:this.shape_6,p:{x:316.1,y:405}},{t:this.shape_5,p:{x:333.1,y:405}},{t:this.shape_4,p:{x:350.1,y:405}},{t:this.shape_12,p:{x:367.1,y:405}},{t:this.shape_126,p:{x:384.1,y:405}},{t:this.shape_125,p:{x:418.1}},{t:this.shape_76,p:{x:435.1,y:405}},{t:this.shape_90},{t:this.shape_3,p:{x:469.1,y:405}},{t:this.shape_13,p:{y:405,x:503.1}},{t:this.shape_44,p:{x:520.1,y:405}},{t:this.shape_25,p:{x:537.1,y:405}},{t:this.shape_40,p:{x:554.1,y:405}}]},48).to({state:[{t:this.instance_5},{t:this.shape_121,p:{x:155.6}},{t:this.shape_87,p:{x:171.6,y:366.9}},{t:this.shape_76,p:{x:188.6,y:366.9}},{t:this.shape_159},{t:this.shape_75,p:{y:366.9}},{t:this.shape_98,p:{x:256.6,y:366.9}},{t:this.shape_158,p:{x:273.6,y:366.9}},{t:this.shape_157},{t:this.shape_110,p:{x:307.6,y:366.9}},{t:this.shape_156},{t:this.shape_115,p:{x:342.6}},{t:this.shape_85,p:{y:366.9}},{t:this.shape_155},{t:this.shape_129,p:{x:409.6,y:366.9}},{t:this.shape_154,p:{x:426.6}},{t:this.shape_29,p:{x:443.6,y:366.9}},{t:this.shape_149,p:{x:460.6}},{t:this.shape_49,p:{x:477.6}},{t:this.shape_9,p:{x:112.1,y:385.9}},{t:this.shape_68,p:{x:146.1,y:385.9}},{t:this.shape_153},{t:this.shape_152,p:{x:181.1,y:385.9}},{t:this.shape_19,p:{x:197.1,y:385.9}},{t:this.shape_60,p:{x:214.1}},{t:this.shape_119,p:{x:232.1,y:385.9}},{t:this.shape_73,p:{x:248.1,y:385.9}},{t:this.shape_58,p:{x:265.1,y:385.9}},{t:this.shape_145,p:{x:299.1,y:385.9}},{t:this.shape_21,p:{x:316.1,y:385.9}},{t:this.shape_4,p:{x:333.1,y:385.9}},{t:this.shape_14,p:{x:350.1,y:385.9}},{t:this.shape_118,p:{y:385.9,x:367.1}},{t:this.shape_86,p:{y:385.9,x:384.1}},{t:this.shape_48,p:{x:401.1,y:385.9}},{t:this.shape_141,p:{x:435.1,y:385.9}},{t:this.shape_95,p:{x:452.1,y:385.9}},{t:this.shape_106,p:{x:470.1,y:385.9}},{t:this.shape_13,p:{y:385.9,x:486.1}},{t:this.shape_64,p:{x:503.1,y:385.9}},{t:this.shape_114,p:{x:521.1,y:385.9}},{t:this.shape_88,p:{x:86.6,y:405}},{t:this.shape_12,p:{x:103.6,y:405}},{t:this.shape_63,p:{x:120.6,y:405}},{t:this.shape_66,p:{x:138.6,y:405}},{t:this.shape_96,p:{x:172.6,y:405}},{t:this.shape_33,p:{x:188.6,y:405}},{t:this.shape_65,p:{x:206.6,y:405}},{t:this.shape_22,p:{x:222.6,y:405}},{t:this.shape_5,p:{x:256.6,y:405}},{t:this.shape_80,p:{x:290.6,y:405}},{t:this.shape_69,p:{x:308.6,y:405}},{t:this.shape_82,p:{x:324.6,y:405}},{t:this.shape_40,p:{x:341.6,y:405}},{t:this.shape_127,p:{x:375.6,y:405}},{t:this.shape_109,p:{x:392.6,y:405}},{t:this.shape_74,p:{x:426.6,y:405}},{t:this.shape_44,p:{x:443.6,y:405}},{t:this.shape_151,p:{x:460.6}},{t:this.shape_47,p:{x:478.6,y:405}},{t:this.shape_32,p:{x:495.6,y:405}},{t:this.shape_34,p:{x:511.6,y:405}},{t:this.shape_150},{t:this.shape_3,p:{x:545.6,y:405}}]},48).to({state:[{t:this.instance_2},{t:this.shape_124,p:{x:27.1}},{t:this.shape_123,p:{x:44.1,y:366.9}},{t:this.shape_122,p:{x:62.1}},{t:this.shape_174},{t:this.shape_152,p:{x:113.1,y:366.9}},{t:this.shape_121,p:{x:130.1}},{t:this.shape_87,p:{x:146.1,y:366.9}},{t:this.shape_130,p:{y:366.9,x:163.1}},{t:this.shape_100,p:{y:366.9,x:180.1}},{t:this.shape_115,p:{x:198.1}},{t:this.shape_79,p:{x:231.1}},{t:this.shape_142,p:{x:248.1}},{t:this.shape_55,p:{x:265.1,y:366.9}},{t:this.shape_116,p:{x:282.1,y:366.9}},{t:this.shape_6,p:{x:316.1,y:366.9}},{t:this.shape_52,p:{x:333.1,y:366.9}},{t:this.shape_4,p:{x:350.1,y:366.9}},{t:this.shape_37,p:{x:367.1}},{t:this.shape_10,p:{y:366.9,x:384.1}},{t:this.shape_76,p:{x:401.1,y:366.9}},{t:this.shape_48,p:{x:418.1,y:366.9}},{t:this.shape_39,p:{x:435.1,y:366.9}},{t:this.shape_139,p:{x:452.1}},{t:this.shape_114,p:{x:487.1,y:366.9}},{t:this.shape_71,p:{x:503.1}},{t:this.shape_35,p:{x:520.1}},{t:this.shape_173},{t:this.shape_172,p:{x:571.1}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_133,p:{x:95.1}},{t:this.shape_169,p:{x:112.1}},{t:this.shape_1,p:{y:385.9,x:129.1}},{t:this.shape_74,p:{x:163.1,y:385.9}},{t:this.shape_29,p:{x:180.1,y:385.9}},{t:this.shape_119,p:{x:198.1,y:385.9}},{t:this.shape_168},{t:this.shape_93,p:{x:231.1,y:385.9}},{t:this.shape_24,p:{x:248.1,y:385.9}},{t:this.shape_17,p:{x:282.1,y:385.9}},{t:this.shape_16,p:{x:300.1,y:385.9}},{t:this.shape_26,p:{x:333.1,y:385.9}},{t:this.shape_147,p:{x:367.1,y:385.9}},{t:this.shape_106,p:{x:385.1,y:385.9}},{t:this.shape_167},{t:this.shape_40,p:{x:418.1,y:385.9}},{t:this.shape_166},{t:this.shape_129,p:{x:469.1,y:385.9}},{t:this.shape_88,p:{x:486.1,y:385.9}},{t:this.shape_19,p:{x:503.1,y:385.9}},{t:this.shape_99,p:{x:520.1,y:385.9}},{t:this.shape_165},{t:this.shape_66,p:{x:104.6,y:405}},{t:this.shape_67,p:{x:120.6,y:405}},{t:this.shape_14,p:{x:137.6,y:405}},{t:this.shape_125,p:{x:171.6}},{t:this.shape_164,p:{x:188.6,y:405}},{t:this.shape_163,p:{x:205.6,y:405}},{t:this.shape_162},{t:this.shape_96,p:{x:240.6,y:405}},{t:this.shape_63,p:{x:256.6,y:405}},{t:this.shape_51,p:{x:273.6,y:405}},{t:this.shape_161,p:{y:405}},{t:this.shape_69,p:{x:325.6,y:405}},{t:this.shape_41,p:{x:341.6,y:405}},{t:this.shape_34,p:{x:358.6,y:405}},{t:this.shape_15,p:{x:375.6,y:405}},{t:this.shape_21,p:{x:392.6,y:405}},{t:this.shape_65,p:{x:410.6,y:405}},{t:this.shape_44,p:{x:426.6,y:405}},{t:this.shape_160},{t:this.shape_126,p:{x:460.6,y:405}},{t:this.shape_78,p:{x:494.6,y:405}},{t:this.shape_73,p:{x:511.6,y:405}},{t:this.shape_150},{t:this.shape_32,p:{x:104.6,y:424}},{t:this.shape_64,p:{x:120.6,y:424}},{t:this.shape_12,p:{x:137.6,y:424}},{t:this.shape_47,p:{x:155.6,y:424}},{t:this.shape_8,p:{x:171.6,y:424}},{t:this.shape_22,p:{x:205.6,y:424}},{t:this.shape_75,p:{y:424}},{t:this.shape_18,p:{x:239.6,y:424}},{t:this.shape_3,p:{x:256.6,y:424}},{t:this.shape_36,p:{x:273.6,y:424}},{t:this.shape_50,p:{x:307.6,y:424}},{t:this.shape_82,p:{x:324.6,y:424}},{t:this.shape_33,p:{x:358.6,y:424}},{t:this.shape_127,p:{x:375.6,y:424}},{t:this.shape_13,p:{y:424,x:409.6}},{t:this.shape_5,p:{x:426.6,y:424}},{t:this.shape_84},{t:this.shape_86,p:{y:424,x:460.6}},{t:this.shape_92,p:{x:477.6,y:424}},{t:this.shape_56,p:{x:494.6,y:424}},{t:this.shape_9,p:{x:511.6,y:424}},{t:this.shape_7,p:{x:529.6,y:424}}]},48).to({state:[{t:this.instance_6},{t:this.shape_17,p:{x:69.6,y:366.9}},{t:this.shape_100,p:{y:366.9,x:86.6}},{t:this.shape_65,p:{x:104.6,y:366.9}},{t:this.shape_13,p:{y:366.9,x:137.6}},{t:this.shape_177},{t:this.shape_41,p:{x:171.6,y:366.9}},{t:this.shape_76,p:{x:188.6,y:366.9}},{t:this.shape_24,p:{x:205.6,y:366.9}},{t:this.shape_40,p:{x:222.6,y:366.9}},{t:this.shape_176},{t:this.shape_154,p:{x:273.6}},{t:this.shape_11,p:{x:290.6,y:366.9}},{t:this.shape_47,p:{x:308.6,y:366.9}},{t:this.shape_58,p:{x:324.6,y:366.9}},{t:this.shape_87,p:{x:341.6,y:366.9}},{t:this.shape_32,p:{x:359.6,y:366.9}},{t:this.shape_64,p:{x:392.6,y:366.9}},{t:this.shape_5,p:{x:409.6,y:366.9}},{t:this.shape_18,p:{x:426.6,y:366.9}},{t:this.shape_42,p:{x:460.6,y:366.9}},{t:this.shape_92,p:{x:494.6,y:366.9}},{t:this.shape_56,p:{x:511.6,y:366.9}},{t:this.shape_31,p:{x:528.6,y:366.9}},{t:this.shape_63,p:{x:545.6,y:366.9}},{t:this.shape_175}]},48).to({state:[{t:this.instance_7},{t:this.shape_195},{t:this.shape_194},{t:this.shape_80,p:{x:86.6,y:366.9}},{t:this.shape_19,p:{x:103.6,y:366.9}},{t:this.shape_5,p:{x:120.6,y:366.9}},{t:this.shape_193},{t:this.shape_86,p:{y:366.9,x:154.6}},{t:this.shape_102,p:{x:188.6,y:366.9}},{t:this.shape_34,p:{x:205.6,y:366.9}},{t:this.shape_192},{t:this.shape_46},{t:this.shape_99,p:{x:256.6,y:366.9}},{t:this.shape_14,p:{x:273.6,y:366.9}},{t:this.shape_118,p:{y:366.9,x:290.6}},{t:this.shape_161,p:{y:366.9}},{t:this.shape_172,p:{x:341.6}},{t:this.shape_33,p:{x:358.6,y:366.9}},{t:this.shape_191},{t:this.shape_64,p:{x:409.6,y:366.9}},{t:this.shape_190},{t:this.shape_11,p:{x:443.6,y:366.9}},{t:this.shape_10,p:{y:366.9,x:460.6}},{t:this.shape_23,p:{x:477.6,y:366.9}},{t:this.shape_140,p:{x:494.6}},{t:this.shape_134,p:{x:511.6,y:366.9}},{t:this.shape_189,p:{x:528.6}},{t:this.shape_188},{t:this.shape_109,p:{x:579.6,y:366.9}},{t:this.shape_62,p:{x:18.6,y:385.9}},{t:this.shape_169,p:{x:35.6}},{t:this.shape_41,p:{x:52.6,y:385.9}},{t:this.shape_137,p:{x:69.6}},{t:this.shape_98,p:{x:86.6,y:385.9}},{t:this.shape_74,p:{x:120.6,y:385.9}},{t:this.shape_187},{t:this.shape_87,p:{x:171.6,y:385.9}},{t:this.shape_55,p:{x:188.6,y:385.9}},{t:this.shape_8,p:{x:205.6,y:385.9}},{t:this.shape_136,p:{x:222.6}},{t:this.shape_186},{t:this.shape_28,p:{x:256.6,y:385.9}},{t:this.shape_185},{t:this.shape_123,p:{x:290.6,y:385.9}},{t:this.shape_126,p:{x:307.6,y:385.9}},{t:this.shape_163,p:{x:324.6,y:385.9}},{t:this.shape_184},{t:this.shape_85,p:{y:385.9}},{t:this.shape_183},{t:this.shape_18,p:{x:409.6,y:385.9}},{t:this.shape_65,p:{x:444.6,y:385.9}},{t:this.shape_182},{t:this.shape_164,p:{x:477.6,y:385.9}},{t:this.shape_32,p:{x:495.6,y:385.9}},{t:this.shape_181},{t:this.shape_130,p:{y:385.9,x:545.6}},{t:this.shape_129,p:{x:579.6,y:385.9}},{t:this.shape_63,p:{x:596.6,y:385.9}},{t:this.shape_112,p:{x:613.6,y:385.9}},{t:this.shape_88,p:{x:27.1,y:405}},{t:this.shape_44,p:{x:44.1,y:405}},{t:this.shape_100,p:{y:405,x:61.1}},{t:this.shape_56,p:{x:78.1,y:405}},{t:this.shape_116,p:{x:95.1,y:405}},{t:this.shape_76,p:{x:129.1,y:405}},{t:this.shape_180},{t:this.shape_12,p:{x:163.1,y:405}},{t:this.shape_36,p:{x:180.1,y:405}},{t:this.shape_158,p:{x:214.1,y:405}},{t:this.shape_151,p:{x:231.1}},{t:this.shape_78,p:{x:248.1,y:405}},{t:this.shape_16,p:{x:266.1,y:405}},{t:this.shape_179,p:{x:299.1,y:405}},{t:this.shape_178},{t:this.shape_7,p:{x:334.1,y:405}},{t:this.shape_147,p:{x:367.1,y:405}},{t:this.shape_69,p:{x:385.1,y:405}},{t:this.shape_24,p:{x:401.1,y:405}},{t:this.shape_40,p:{x:418.1,y:405}},{t:this.shape_22,p:{x:435.1,y:405}},{t:this.shape_145,p:{x:452.1,y:405}},{t:this.shape_21,p:{x:469.1,y:405}},{t:this.shape_4,p:{x:486.1,y:405}},{t:this.shape_3,p:{x:503.1,y:405}},{t:this.shape_131,p:{x:537.1}},{t:this.shape_58,p:{x:554.1,y:405}},{t:this.shape_9,p:{x:571.1,y:405}},{t:this.shape_47,p:{x:589.1,y:405}},{t:this.shape_54,p:{x:605.1,y:405}}]},48).to({state:[{t:this.instance_8},{t:this.shape_42,p:{x:154.6,y:366.9}},{t:this.shape_33,p:{x:171.6,y:366.9}},{t:this.shape_24,p:{x:188.6,y:366.9}},{t:this.shape_189,p:{x:222.6}},{t:this.shape_44,p:{x:239.6,y:366.9}},{t:this.shape_64,p:{x:273.6,y:366.9}},{t:this.shape_12,p:{x:290.6,y:366.9}},{t:this.shape_17,p:{x:324.6,y:366.9}},{t:this.shape_40,p:{x:341.6,y:366.9}},{t:this.shape_83,p:{x:358.6,y:366.9}},{t:this.shape_179,p:{x:375.6,y:366.9}},{t:this.shape_200},{t:this.shape_3,p:{x:409.6,y:366.9}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},48).wait(49));

	// Layer_3
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("Eg1GAptMAAAhTZMBqNAAAMAAABTZg");
	this.shape_201.setTransform(323.9,243);

	this.timeline.addTween(cjs.Tween.get(this.shape_201).wait(433));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-23.9,679.8,533.8);


(lib.GameManager = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		// Who doesn't love Global Variables?
		globalGameManager = this;
		
		this.reputation = 100;
		this.moveSpeed = 10;
		
		this.atCheckPoint = false;
		var checkPointPos = 100;
		
		this.background = new lib.Background();
		this.player = new lib.PlayerKnight();
		this.player.gotoAndPlay('walk');
		this.player.x = -100;
		this.bots = [];
		
		this.checkPoint = null;
		
		this.bgLaya.addChild(this.background);
		this.background.playaLaya.addChild(this.player);
		
		this.addCheckPoint = function() {
			this.checkPoint = new lib.CheckPoint();
			this.checkPoint.x = 1000;
			this.checkPoint.health = 100;
			this.checkPoint.maxHealth = 100;
			this.checkPoint.stop();
			this.background.checkPointLaya.addChild(this.checkPoint);
		}.bind(this);
		
		// Bind functions here so we can remove them if needed.
		this.onCraftClick = function(evt) {
			this.editor = new lib.Editor();
			this.addChild(this.editor);
		}.bind(this);
		
		
		this.everyFrame = function(evt) {
			if (this.editor) {
				// don't do anything if we're in the editor
				return;
			}
			
			if (this.atCheckPoint) {
				this.checkPoint.health -= this.bots.length;
				this.checkPoint.updateFrame();
				if (this.checkPoint.dead) {
					this.addCheckPoint();
					this.atCheckPoint = false;
					
					// (Start walking)
					this.reputation -= Math.round(40 + 30 * Math.random());
					this.reputationText.text = "REPUTATION: " + this.reputation;
					this.moveSpeed += 2;
					
					for (var i = 0; i < this.bots.length; i ++) {
						// some random amount from walking to desynchronise
						this.bots[i].gotoAndPlay(10 - Math.floor(6 * Math.random()));
					}
					this.player.gotoAndPlay(10 - Math.floor(6 * Math.random()));
				}
			}
			else {
				if (this.checkPoint && this.checkPoint.x - checkPointPos < this.moveSpeed) {
					this.background.move(-this.checkPoint.x + checkPointPos);
					this.atCheckPoint = true;
					
					// TODO: instructions etc for the first one
					
					//for (var i = 0; i < this.bots.length; i ++) {
						//this.bots[i].gotoAndStop('stand');
					//}
					this.player.gotoAndStop('stand');
				}
				else {
					this.background.move(-this.moveSpeed);
				}
			}
		}.bind(this);
		
		
		this.exitEditor = function(evt) {
			this.removeChild(this.editor);
			this.editor = null;
		}.bind(this);
		
		
		this.addNewBot = function(evt) {
			var bot = new lib.PoopKnight();
			bot.gotoAndPlay('create');
			
			bot.x = 90;
			if (this.bots.length > 0) {
				bot.x -= Math.round(150 * Math.random());
			}
			this.background.playaLaya.addChild(bot);
			this.bots.push(bot);
		}.bind(this);
		
		
		this.addCheckPoint();
		
		this.craftButton.addEventListener('click', this.onCraftClick);
		this.addEventListener('tick', this.everyFrame);
		
		// Play song
		createjs.Sound.play('OverworldSong', createjs.Sound.INTERRUPT_NONE, 0, 20, -1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.craftButton = new lib.craftbutton();
	this.craftButton.name = "craftButton";
	this.craftButton.parent = this;
	this.craftButton.setTransform(361.2,45.6);

	this.reputationText = new cjs.Text("REPUTATION: 100", "normal 400 29px 'VT323'");
	this.reputationText.name = "reputationText";
	this.reputationText.lineHeight = 39;
	this.reputationText.lineWidth = 239;
	this.reputationText.parent = this;
	this.reputationText.setTransform(6.4,4.8);
	if(!lib.properties.webfonts['VT323']) {
		lib.webFontTxtInst['VT323'] = lib.webFontTxtInst['VT323'] || [];
		lib.webFontTxtInst['VT323'].push(this.reputationText);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reputationText},{t:this.craftButton}]}).wait(1));

	// Where Backrgound Goes
	this.bgLaya = new lib.empty();
	this.bgLaya.name = "bgLaya";
	this.bgLaya.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.bgLaya).wait(1));

}).prototype = getMCSymbolPrototype(lib.GameManager, new cjs.Rectangle(4.4,2.8,437.2,79.7), null);


(lib.Editor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		this.selectedThing = null;
		
		this.image = null;
		this.mouth.addEventListener("pressmove", onThingDrag.bind(this));
		this.mouth.addEventListener("mousedown", onThingSelect.bind(this));
		this.zoomInButton.addEventListener("click", doZoomIn.bind(this));
		this.zoomOutButton.addEventListener("click", doZoomOut.bind(this));
		this.turnLeftButton.addEventListener("click", doTurnLeft.bind(this));
		this.turnRightButton.addEventListener("click", doTurnRight.bind(this));
		this.downloadButton.addEventListener("click", doSave.bind(this));
		this.uploadButton.addEventListener("click", doUpload.bind(this));
		this.nextButton.addEventListener("click", nextStep.bind(this));
		this.doneButton.addEventListener("click", done.bind(this));
		this.muteButton.addEventListener("click", function() {
			createjs.Sound.muted = !createjs.Sound.muted;
		});
		
		// Dragging / Selecting
		
		function onThingDrag(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
			if (evt.currentTarget.hasOwnProperty("mouseStartX")) {
				evt.currentTarget.x -= evt.currentTarget.mouseStartX;
				evt.currentTarget.y -= evt.currentTarget.mouseStartY;
			}
			//this.selectedThing = evt.currentTarget;
		}
		
		function onThingSelect(evt) {
			evt.currentTarget.mouseStartX = evt.stageX - evt.currentTarget.x;
			evt.currentTarget.mouseStartY = evt.stageY - evt.currentTarget.y;
			//this.selectedThing = evt.currentTarget;
		}
		
		
		// Image moving
		
		function doZoomIn(evt) {
			if (this.selectedThing == null) return;
			centerBitmap(this.image);
			
			this.selectedThing.scaleX *= 1.1;
			this.selectedThing.scaleY *= 1.1;
		}
		
		function doZoomOut(evt) {
			if (this.selectedThing == null) return;
			centerBitmap(this.image);
			
			this.selectedThing.scaleX /= 1.1;
			this.selectedThing.scaleY /= 1.1;
		}
		
		function doTurnLeft(evt) {
			if (this.selectedThing == null) return;
			centerBitmap(this.image);
			
			this.selectedThing.rotation -= 3;
		}
		
		function doTurnRight(evt) {
			if (this.selectedThing == null) return;
			centerBitmap(this.image);
			
			this.selectedThing.rotation += 3;
		}
		
		function nextStep(evt) {
			this.gotoAndStop(this.currentFrame + 1);
		}
		
		// Image uploading
		
		function doUpload(evt) {
			console.log('upload?');
			var inp = document.createElement("input");
			inp.setAttribute("type", "file");
			inp.onchange = onSelectEnd.bind(this);
			inp.click();
		}
		
		function onSelectEnd(evt) {
			console.log("onSelectEnd");
			var inp = event.currentTarget;
			// We want just one file. TODO: Handle other alternatives here
			if (inp.files.length != 1) return;
			
			// Read the file
			reader = new FileReader();
			reader.onload = onLoad.bind(this);
			reader.readAsDataURL(inp.files[0]);
		}
		
		function onLoad(evt) {
			var url = evt.currentTarget.result;
			if (this.hasOwnProperty('image') && this.contains(this.image)) {
				this.imageLayer.removeChild(this.image);
			}
			
			var container = new createjs.MovieClip();
			container.mouseEnabled = true;
			var bitmap = new createjs.Bitmap(url);
			container.addChild(bitmap);
			container.bitmap = bitmap;
			// Center it a little at least
			container.x = 100;
			container.y = 100;
			
			this.image = container;
			this.image.addEventListener("pressmove", onThingDrag.bind(this));
			this.image.addEventListener("mousedown", onThingSelect.bind(this));
			// TODO: default positioning. Maybe copy from old thing?
			this.imageLayer.addChild(this.image);
			
			this.gotoAndStop(1);
		}
		
		function centerBitmap(image) {
			if (image == null) return;
			
			var bitmap = image.bitmap;
			var newX = -bitmap.image.width / 2;
			var newY = -bitmap.image.height / 2;
			var xDiff = bitmap.x - newX;
			var yDiff = bitmap.y - newY;
			
			bitmap.x = newX;
			bitmap.y = newY;
			image.x += xDiff;
			image.y += yDiff;
		}
		
		// Try save, but don't if there's no image
		
		function doSave(evt) {
			if (this.image == null || this.mouth == null) {
				console.log('not saving that crap');
				return;
			}
			// Package into Zip!
			generateGame(this.image, this.mouth, {
				name: document.getElementById("nameInput").value
			});
			
			this.gotoAndStop(this.currentFrame + 1);
		}
		
		function done(evt) {
			globalGameManager.exitEditor();
			globalGameManager.addNewBot();
			createjs.Sound.muted = false;
		}
	}
	this.frame_1 = function() {
		this.selectedThing = this.image;
	}
	this.frame_2 = function() {
		this.selectedThing = this.mouth;
	}
	this.frame_3 = function() {
		this.image.visible = false;
		this.mouth.visible = false;
		
		document.getElementById("secretForm").style.display = "block";
	}
	this.frame_4 = function() {
		this.image.visible = true;
		this.mouth.visible = true;
		
		document.getElementById("secretForm").style.display = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(2));

	// Words
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#200826").s().p("AAvBtIAAh8IhdAAIAAB8Ig/AAIAAjZIA/AAIAAA+IB8AAIAAAfIAfAAIAAB8g");
	this.shape.setTransform(364.7,189.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#200826").s().p("AgOBeIAAgfIggAAIAAhdIg/AAIAAgfIA/AAIAAggIA9AAIAAAgIA/AAIAAAfIg/AAIAABdIAgAAIAAggIA/AAIAAAgIggAAIAAAfg");
	this.shape_1.setTransform(339.7,190.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAh8IA/AAIAAB8IBdAAIAAh8IA/AAIAACbg");
	this.shape_2.setTransform(314.7,192.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAgAAIAABdIggAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_3.setTransform(289.7,192.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#200826").s().p("AAvBOIAAhcIgfAAIAAAdIgfAAIAAgdIgfAAIAABcIg+AAIAAibIBdAAIAAAfIAfAAIAAgfIA+AAIAAAfIAfAAIAAB8g");
	this.shape_4.setTransform(264.7,192.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfIC6AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_5.setTransform(502.2,165.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#200826").s().p("AAvBtIAAh8IhdAAIAAB8Ig/AAIAAjZIA/AAIAAA+IB8AAIAAAfIAgAAIAAB8g");
	this.shape_6.setTransform(452.2,162.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#200826").s().p("AgOBeIAAgfIggAAIAAhdIg/AAIAAgfIA/AAIAAggIA9AAIAAAgIA/AAIAAAfIg/AAIAABdIAgAAIAAggIA/AAIAAAgIggAAIAAAfg");
	this.shape_7.setTransform(427.2,163.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#200826").s().p("Ag+BtIAAgfIAgAAIAAhdIggAAIAAgfIBeAAIAAB8IAeAAIAAAfgAgehNIAAgfIA+AAIAAAfg");
	this.shape_8.setTransform(403.7,162.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#200826").s().p("AAQBOIAAgfIgfAAIAAAfIg+AAIAAgfIgfAAIAAh8IA+AAIAABdIAfAAIAAgfIAfAAIAAAfIAfAAIAAhdIA+AAIAAB8IgfAAIAAAfg");
	this.shape_9.setTransform(377.2,165.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#200826").s().p("AhNBeIAAggIB8AAIAAgfIh8AAIAAgfIggAAIAAg+IAgAAIAAgfIC7AAIAACbIggAAIAAAggAguAAIBdAAIAAg+IhdAAg");
	this.shape_10.setTransform(327.2,166.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#200826").s().p("AAvBOIAAh8IhdAAIAAB8Ig+AAIAAibIC6AAIAAAfIAgAAIAAB8g");
	this.shape_11.setTransform(302.2,165.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#200826").s().p("Ag+BtIAAgfIAgAAIAAhdIggAAIAAgfIBeAAIAAB8IAeAAIAAAfgAgehNIAAgfIA+AAIAAAfg");
	this.shape_12.setTransform(278.7,162.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#200826").s().p("AAvBtIAAh8IhdAAIAAB8Ig/AAIAAjZIA/AAIAAA+IB8AAIAAAfIAfAAIAAB8g");
	this.shape_13.setTransform(252.2,162.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#200826").s().p("AgOBeIAAgfIggAAIAAhdIg/AAIAAgfIA/AAIAAggIA9AAIAAAgIA/AAIAAAfIg/AAIAABdIAgAAIAAggIA/AAIAAAgIggAAIAAAfg");
	this.shape_14.setTransform(227.2,163.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAgAAIAAA+IicAAIAAAfIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape_15.setTransform(202.2,165.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#200826").s().p("AAvBOIAAhdIgfAAIAAAfIgfAAIAAgfIgfAAIAABdIg+AAIAAibIBdAAIAAAfIAfAAIAAgfIA+AAIAAAfIAfAAIAAB8g");
	this.shape_16.setTransform(177.2,165.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAfAAIAABdIgfAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_17.setTransform(152.2,165.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#200826").s().p("AhtBOIAAgfIB8AAIAAgfIhcAAIAAgfIggAAIAAgfIAgAAIAAgfICbAAIAAAfIhcAAIAAAfIBcAAIAAAfIAfAAIAAAfIgfAAIAAAfg");
	this.shape_18.setTransform(127.2,165.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#200826").s().p("AhtBOIAAibIC7AAIAAAfIAgAAIAAAgIg/AAIAAggIhdAAIAAB8g");
	this.shape_19.setTransform(539.7,138.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAfAAIAABdIgfAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_20.setTransform(514.7,138.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAfAAIAAA9IibAAIAAAgIB8AAIAAAfgAgugOIBdAAIAAggIhdAAg");
	this.shape_21.setTransform(464.7,138.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#200826").s().p("AAvBOIAAh8IhdAAIAAB8Ig/AAIAAibIC7AAIAAAfIAgAAIAAB8g");
	this.shape_22.setTransform(439.7,138.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAgAAIAABdIggAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_23.setTransform(414.7,138.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAfAAIAAA9IibAAIAAAgIB8AAIAAAfgAgugOIBdAAIAAggIhdAAg");
	this.shape_24.setTransform(389.7,138.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#200826").s().p("AAvBOIAAhcIgfAAIAAAdIgfAAIAAgdIgfAAIAABcIg/AAIAAibIBeAAIAAAfIAfAAIAAgfIA+AAIAAAfIAfAAIAAB8g");
	this.shape_25.setTransform(364.7,138.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAgAAIAABdIggAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_26.setTransform(339.7,138.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#200826").s().p("AhtBOIAAgfIB8AAIAAggIhcAAIAAgdIggAAIAAggIAgAAIAAgfICbAAIAAAfIhcAAIAAAgIBcAAIAAAdIAgAAIAAAgIggAAIAAAfg");
	this.shape_27.setTransform(314.7,138.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#200826").s().p("Ag+BtIAAhdIgfAAIAAgfIAfAAIAAg+IAgAAIAAgfIBcAAIAAAfIAgAAIAAAfIg/AAIAAgfIgfAAIAAA+IA+AAIAAAfIg+AAIAABdg");
	this.shape_28.setTransform(266.2,135);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAfAAIAABdIgfAAIAAAfgAguAvIBdAAIAAhdIhdAAg");
	this.shape_29.setTransform(239.7,138.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAgAAIAAA9IicAAIAAAgIB8AAIAAAfgAgugOIBdAAIAAggIhdAAg");
	this.shape_30.setTransform(189.7,138.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#200826").s().p("AhNBeIAAggIB8AAIAAgfIh8AAIAAgfIgfAAIAAg+IAfAAIAAgfIC6AAIAACbIgfAAIAAAggAguAAIBdAAIAAg+IhdAAg");
	this.shape_31.setTransform(164.7,139.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfIC6AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_32.setTransform(139.7,138.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#200826").s().p("AAvBOIAAhcIggAAIAAAdIgdAAIAAgdIggAAIAABcIg/AAIAAibIBfAAIAAAfIAdAAIAAgfIA/AAIAAAfIAgAAIAAB8g");
	this.shape_33.setTransform(114.7,138.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#200826").s().p("Ag9BtIAAgfIAfAAIAAhdIgfAAIAAgfIBcAAIAAB8IAgAAIAAAfgAgehNIAAgfIA9AAIAAAfg");
	this.shape_34.setTransform(91.2,135);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#200826").s().p("AAvBOIAAh8IhdAAIAAB8Ig+AAIAAibIC6AAIAAAfIAfAAIAAB8g");
	this.shape_35.setTransform(514.7,111.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfIC6AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_36.setTransform(489.7,111.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#200826").s().p("AhNBtIAAgfIggAAIAAhdIAgAAIAAgfIB8AAIAAg+IA/AAIAADZgAguBOIBdAAIAAhdIhdAAg");
	this.shape_37.setTransform(439.7,108);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAgAAIAAA+IicAAIAAAfIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape_38.setTransform(414.7,111.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAfAAIAAA+IibAAIAAAfIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape_39.setTransform(389.7,111.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#200826").s().p("AAvBOIAAh8IhdAAIAAB8Ig/AAIAAibIC7AAIAAAfIAfAAIAAB8g");
	this.shape_40.setTransform(364.7,111.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfICbAAIAAAfIAgAAIAAA+IicAAIAAAfIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape_41.setTransform(314.7,111.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#200826").s().p("AAQBOIAAgfIgfAAIAAAfIg+AAIAAgfIgfAAIAAh8IA+AAIAABdIAfAAIAAgfIAfAAIAAAfIAfAAIAAhdIA/AAIAAB8IggAAIAAAfg");
	this.shape_42.setTransform(289.7,111.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#200826").s().p("AguAvIAAggIAgAAIAAg9IA9AAIAAA9IggAAIAAAgg");
	this.shape_43.setTransform(239.7,117.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#200826").s().p("AgOBeIAAgfIggAAIAAhdIg/AAIAAgfIA/AAIAAggIA9AAIAAAgIA/AAIAAAfIg/AAIAABdIAgAAIAAggIA/AAIAAAgIggAAIAAAfg");
	this.shape_44.setTransform(214.7,109.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#200826").s().p("AhsBOIAAgfIB7AAIAAgfIhcAAIAAgfIgfAAIAAgfIAfAAIAAgfICbAAIAAAfIhdAAIAAAfIBdAAIAAAfIAgAAIAAAfIggAAIAAAfg");
	this.shape_45.setTransform(189.7,111.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#200826").s().p("AhsBOIAAibIC6AAIAAAfIAfAAIAAAfIg+AAIAAgfIhdAAIAAB8g");
	this.shape_46.setTransform(164.7,111.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#200826").s().p("Ag+BtIAAgfIAgAAIAAhdIggAAIAAgfIBeAAIAAB8IAeAAIAAAfgAgehNIAAgfIA+AAIAAAfg");
	this.shape_47.setTransform(141.2,108);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#200826").s().p("AhtBtIAAjZIDbAAIAAAfIicAAIAAA+IB8AAIAAAfIh8AAIAABdg");
	this.shape_48.setTransform(114.7,108);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#200826").s().p("AglAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhJAAIAAAPIA6AAIAAAOgAgVgHIAsAAIAAgOIgsAAg");
	this.shape_49.setTransform(578.9,62.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#200826").s().p("AgHAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAeAAIAAAPIAdAAIAAAPIgdAAIAAAsIAOAAIAAgPIAfAAIAAAPIgQAAIAAAPg");
	this.shape_50.setTransform(566.9,61.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBZAAIAABJgAgWAXIAsAAIAAgsIgsAAg");
	this.shape_51.setTransform(554.9,62.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#200826").s().p("AgHAtIAAgPIgOAAIAAgsIgfAAIAAgPIAfAAIAAgPIAcAAIAAAPIAeAAIAAAPIgeAAIAAAsIAQAAIAAgPIAdAAIAAAPIgPAAIAAAPg");
	this.shape_52.setTransform(542.9,61.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAsIgQAAIAAAOgAgWAXIAsAAIAAgsIgsAAg");
	this.shape_53.setTransform(530.9,62.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#200826").s().p("AgzAlIAAhJIBZAAIAAAPIAOAAIAAAOIgeAAIAAgOIgsAAIAAA6g");
	this.shape_54.setTransform(518.9,62.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#200826").s().p("AgsA0IAAgdIAPAAIAAgQIAPAAIAAgNIAOAAIAAgPIAPAAIAAgQIAPAAIAAgOIAPAAIAAAeIgPAAIAAAPIgPAAIAAANIgPAAIAAAQIgOAAIAAAPIgPAAIAAAOg");
	this.shape_55.setTransform(507.6,61.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#200826").s().p("AgkAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhLAAIAAAPIA8AAIAAAOgAgWgHIAsAAIAAgOIgsAAg");
	this.shape_56.setTransform(494.9,62.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#200826").s().p("AgdA0IAAgOIAPAAIAAhLIgPAAIAAgOIAsAAIAABZIAPAAIAAAOg");
	this.shape_57.setTransform(483.6,61.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAgsIAQAAIAAgPIBZAAIAABJgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_58.setTransform(470.9,62.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#200826").s().p("AgkAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAOIgfAAIAAgOIgsAAIAAAsIBLAAIAAAOg");
	this.shape_59.setTransform(458.9,62.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#200826").s().p("AgzAlIAAgOIA6AAIAAgPIgsAAIAAgPIgOAAIAAgOIAOAAIAAgPIBLAAIAAAPIgsAAIAAAOIAsAAIAAAPIAOAAIAAAPIgOAAIAAAOg");
	this.shape_60.setTransform(446.9,62.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#200826").s().p("AgkAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAsIgPAAIAAAOgAgWAXIAsAAIAAgsIgsAAg");
	this.shape_61.setTransform(422.9,62.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#200826").s().p("AgGAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAcAAIAAAPIAfAAIAAAPIgfAAIAAAsIAQAAIAAgPIAdAAIAAAPIgOAAIAAAPg");
	this.shape_62.setTransform(410.9,61.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#200826").s().p("AgzAlIAAgOIA7AAIAAgPIgsAAIAAgPIgPAAIAAgOIAPAAIAAgPIBKAAIAAAPIgsAAIAAAOIAsAAIAAAPIAPAAIAAAPIgPAAIAAAOg");
	this.shape_63.setTransform(386.9,62.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#200826").s().p("AAXAlIAAg6IgsAAIAAA6IgeAAIAAhJIBZAAIAAAPIAOAAIAAA6g");
	this.shape_64.setTransform(374.9,62.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAsIgQAAIAAAOgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_65.setTransform(362.9,62.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#200826").s().p("AgGAtIAAgPIgQAAIAAgsIgdAAIAAgPIAdAAIAAgPIAeAAIAAAPIAeAAIAAAPIgeAAIAAAsIAOAAIAAgPIAfAAIAAAPIgPAAIAAAPg");
	this.shape_66.setTransform(350.9,61.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#200826").s().p("AgGAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAcAAIAAAPIAfAAIAAAPIgfAAIAAAsIAQAAIAAgPIAdAAIAAAPIgOAAIAAAPg");
	this.shape_67.setTransform(338.9,61.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAg7IAfAAIAAA7IAsAAIAAg7IAeAAIAABJg");
	this.shape_68.setTransform(326.9,62.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#200826").s().p("AgzA0IAAhnIAdAAIAAAeIA8AAIAAAPIAPAAIAAAsIgPAAIAAAOgAgWAmIAsAAIAAgsIgsAAg");
	this.shape_69.setTransform(314.9,61.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAdIhKAAIAAAPIA6AAIAAAOgAgVgHIAsAAIAAgOIgsAAg");
	this.shape_70.setTransform(290.9,62.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#200826").s().p("AgzAlIAAgOIA7AAIAAgPIgsAAIAAgPIgPAAIAAgOIAPAAIAAgPIBKAAIAAAPIgsAAIAAAOIAsAAIAAAPIAPAAIAAAPIgPAAIAAAOg");
	this.shape_71.setTransform(278.9,62.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAg7IAeAAIAAA7IAsAAIAAg7IAdAAIAABJg");
	this.shape_72.setTransform(266.9,62.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#200826").s().p("AgWAXIAAgQIAPAAIAAgcIAdAAIAAAcIgOAAIAAAQg");
	this.shape_73.setTransform(242.9,65.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhKAAIAAAPIA8AAIAAAOgAgWgHIAsAAIAAgOIgsAAg");
	this.shape_74.setTransform(230.9,62.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#200826").s().p("Ag0AlIAAgOIA7AAIAAgPIgsAAIAAgPIgPAAIAAgOIAPAAIAAgPIBKAAIAAAPIgsAAIAAAOIAsAAIAAAPIAPAAIAAAPIgPAAIAAAOg");
	this.shape_75.setTransform(218.9,62.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAg7IAeAAIAAA7IAsAAIAAg7IAfAAIAABJg");
	this.shape_76.setTransform(206.9,62.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAsIgOAAIAAAOgAgWAXIAsAAIAAgsIgsAAg");
	this.shape_77.setTransform(194.9,62.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#200826").s().p("AAXAlIAAgsIgQAAIAAAPIgOAAIAAgPIgOAAIAAAsIgfAAIAAhJIAtAAIAAAPIAOAAIAAgPIAeAAIAAAPIAPAAIAAA6g");
	this.shape_78.setTransform(182.9,62.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhKAAIAAAPIA8AAIAAAOgAgWgHIAsAAIAAgOIgsAAg");
	this.shape_79.setTransform(158.9,62.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#200826").s().p("AAXA0IAAg6IgsAAIAAA6IgfAAIAAhnIAfAAIAAAeIA6AAIAAAPIAPAAIAAA6g");
	this.shape_80.setTransform(146.9,61.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#200826").s().p("AgHAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAeAAIAAAPIAdAAIAAAPIgdAAIAAAsIAOAAIAAgPIAfAAIAAAPIgQAAIAAAPg");
	this.shape_81.setTransform(134.9,61.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#200826").s().p("AAXA0IAAg6IgsAAIAAA6IgfAAIAAhnIAfAAIAAAeIA6AAIAAAPIAPAAIAAA6g");
	this.shape_82.setTransform(110.9,61.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#200826").s().p("AgHAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAeAAIAAAPIAdAAIAAAPIgdAAIAAAsIAOAAIAAgPIAfAAIAAAPIgQAAIAAAPg");
	this.shape_83.setTransform(98.9,61.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#200826").s().p("AgdA0IAAgOIAPAAIAAgsIgPAAIAAgPIAsAAIAAA7IAPAAIAAAOgAgOglIAAgOIAdAAIAAAOg");
	this.shape_84.setTransform(87.6,61.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#200826").s().p("AAHAlIAAgOIgOAAIAAAOIgeAAIAAgOIgPAAIAAg7IAfAAIAAAsIAOAAIAAgPIAOAAIAAAPIAQAAIAAgsIAdAAIAAA7IgPAAIAAAOg");
	this.shape_85.setTransform(74.9,62.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#200826").s().p("AglAtIAAgPIA8AAIAAgPIg8AAIAAgPIgPAAIAAgdIAPAAIAAgPIBZAAIAABKIgPAAIAAAPgAgVAAIAsAAIAAgdIgsAAg");
	this.shape_86.setTransform(560.9,49.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#200826").s().p("AAWAmIAAg8IgsAAIAAA8IgeAAIAAhLIBZAAIAAAPIAQAAIAAA8g");
	this.shape_87.setTransform(548.9,48.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAgsIgPAAIAAgPIAsAAIAAA7IAPAAIAAAQgAgOgkIAAgQIAdAAIAAAQg");
	this.shape_88.setTransform(537.6,47.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#200826").s().p("AglAtIAAgPIA8AAIAAgPIg8AAIAAgPIgPAAIAAgdIAPAAIAAgPIBZAAIAABKIgPAAIAAAPgAgVAAIAsAAIAAgdIgsAAg");
	this.shape_89.setTransform(524.9,49.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#200826").s().p("AgkAtIAAgPIA6AAIAAgPIg6AAIAAgPIgPAAIAAgdIAPAAIAAgPIBZAAIAABKIgQAAIAAAPgAgWAAIAsAAIAAgdIgsAAg");
	this.shape_90.setTransform(512.9,49.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBZAAIAABLgAgVAWIAsAAIAAgsIgsAAg");
	this.shape_91.setTransform(500.9,48.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#200826").s().p("Ag0AmIAAhLIBZAAIAAAPIAQAAIAAAQIgeAAIAAgQIgsAAIAAA8g");
	this.shape_92.setTransform(488.9,48.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#200826").s().p("AgkA1IAAgQIgPAAIAAgsIAPAAIAAgPIA6AAIAAgeIAfAAIAABpgAgWAlIAsAAIAAgsIgsAAg");
	this.shape_93.setTransform(476.9,47.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#200826").s().p("AgkAtIAAgPIA7AAIAAgPIg7AAIAAgPIgQAAIAAgsIAfAAIAAAsIAsAAIAAgsIAeAAIAABKIgQAAIAAAPg");
	this.shape_94.setTransform(452.9,49.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#200826").s().p("AgzA1IAAhpIAdAAIAAAeIA8AAIAAAPIAPAAIAAAsIgPAAIAAAQgAgWAlIAsAAIAAgsIgsAAg");
	this.shape_95.setTransform(440.9,47.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAdIhKAAIAAAPIA6AAIAAAQgAgVgGIAsAAIAAgQIgsAAg");
	this.shape_96.setTransform(416.9,48.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#200826").s().p("AgGAmIAAgQIgQAAIAAgPIgOAAIAAgNIgPAAIAAgfIAdAAIAAAfIAQAAIAAANIAOAAIAAgNIAOAAIAAgfIAfAAIAAAfIgPAAIAAANIgQAAIAAAPIgOAAIAAAQg");
	this.shape_97.setTransform(404.9,48.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAsIgOAAIAAAQgAgVAWIAsAAIAAgsIgsAAg");
	this.shape_98.setTransform(392.9,48.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#200826").s().p("AAXA1IAAgtIgPAAIAAAOIgPAAIAAgOIgOAAIAAAtIgfAAIAAhpIAfAAIAAAQIAOAAIAAAOIAPAAIAAgOIAPAAIAAgQIAeAAIAABpg");
	this.shape_99.setTransform(380.9,47.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#200826").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape_100.setTransform(357.6,50.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#200826").s().p("Ag0AmIAAhLIBZAAIAAAPIAQAAIAAAQIgeAAIAAgQIgsAAIAAA8g");
	this.shape_101.setTransform(344.9,48.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#200826").s().p("AgkAmIAAgQIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhLAAIAAAPIA8AAIAAAQgAgWgGIAsAAIAAgQIgsAAg");
	this.shape_102.setTransform(332.9,48.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#200826").s().p("AgGAtIAAgPIgPAAIAAgsIgeAAIAAgPIAeAAIAAgPIAcAAIAAAPIAfAAIAAAPIgfAAIAAAsIAQAAIAAgPIAdAAIAAAPIgOAAIAAAPg");
	this.shape_103.setTransform(320.9,47.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAQIgeAAIAAgQIgsAAIAAAsIBKAAIAAAQg");
	this.shape_104.setTransform(308.9,48.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#200826").s().p("AgkAmIAAgQIgPAAIAAgsIAPAAIAAgPIBZAAIAABLgAgWAWIAsAAIAAgsIgsAAg");
	this.shape_105.setTransform(296.9,48.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#200826").s().p("AgzAmIAAhLIBZAAIAAAPIAOAAIAAAQIgdAAIAAgQIgsAAIAAA8g");
	this.shape_106.setTransform(284.9,48.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBZAAIAABLgAgVAWIAsAAIAAgsIgsAAg");
	this.shape_107.setTransform(272.9,48.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#200826").s().p("AAWA1IAAg8IgsAAIAAA8IgdAAIAAhpIAdAAIAAAeIA8AAIAAAPIAPAAIAAA8g");
	this.shape_108.setTransform(260.9,47.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAQIgdAAIAAgQIgtAAIAAAsIBKAAIAAAQg");
	this.shape_109.setTransform(248.9,48.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAdIhLAAIAAAPIA7AAIAAAQgAgWgGIAsAAIAAgQIgsAAg");
	this.shape_110.setTransform(224.9,48.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#200826").s().p("AAWA1IAAg8IgsAAIAAA8IgdAAIAAhpIAdAAIAAAeIA8AAIAAAPIAOAAIAAA8g");
	this.shape_111.setTransform(212.9,47.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#200826").s().p("AgHAtIAAgPIgOAAIAAgsIgfAAIAAgPIAfAAIAAgPIAcAAIAAAPIAeAAIAAAPIgeAAIAAAsIAQAAIAAgPIAdAAIAAAPIgPAAIAAAPg");
	this.shape_112.setTransform(200.9,47.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#200826").s().p("AAWAmIAAg8IgsAAIAAA8IgdAAIAAhLIBZAAIAAAPIAOAAIAAA8g");
	this.shape_113.setTransform(176.9,48.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#200826").s().p("AglAmIAAgQIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAsIgPAAIAAAQgAgVAWIAsAAIAAgsIgsAAg");
	this.shape_114.setTransform(164.9,48.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAgsIgPAAIAAgPIAsAAIAAA7IAPAAIAAAQgAgOgkIAAgQIAdAAIAAAQg");
	this.shape_115.setTransform(153.6,47.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#200826").s().p("AgGAtIAAgPIgQAAIAAgsIgdAAIAAgPIAdAAIAAgPIAdAAIAAAPIAfAAIAAAPIgfAAIAAAsIAPAAIAAgPIAeAAIAAAPIgOAAIAAAPg");
	this.shape_116.setTransform(140.9,47.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAgsIgPAAIAAgPIAsAAIAAA7IAPAAIAAAQgAgOgkIAAgQIAdAAIAAAQg");
	this.shape_117.setTransform(129.6,47.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#200826").s().p("Ag0AmIAAgQIA8AAIAAgPIgsAAIAAgNIgQAAIAAgQIAQAAIAAgPIBJAAIAAAPIgsAAIAAAQIAsAAIAAANIAQAAIAAAPIgQAAIAAAQg");
	this.shape_118.setTransform(116.9,48.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAsIgOAAIAAAQgAgWAWIAsAAIAAgsIgsAAg");
	this.shape_119.setTransform(104.9,48.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#200826").s().p("Ag0A1IAAhpIBZAAIAAAQIAPAAIAAAsIgPAAIAAAOIg6AAIAAAfgAgVAIIAsAAIAAgsIgsAAg");
	this.shape_120.setTransform(92.9,47.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#200826").s().p("AgkAlIAAgOIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAdIhLAAIAAAPIA7AAIAAAOgAgWgHIAsAAIAAgOIgsAAg");
	this.shape_121.setTransform(548.9,62.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#200826").s().p("AglAlIAAgOIgPAAIAAgsIAPAAIAAgPIBZAAIAABJgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_122.setTransform(524.9,62.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#200826").s().p("AgHAtIAAgPIgPAAIAAgsIgdAAIAAgPIAdAAIAAgPIAeAAIAAAPIAdAAIAAAPIgdAAIAAAsIAOAAIAAgPIAfAAIAAAPIgQAAIAAAPg");
	this.shape_123.setTransform(512.9,61.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAsIgOAAIAAAOgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_124.setTransform(500.9,62.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#200826").s().p("Ag0AlIAAhJIBZAAIAAAPIAQAAIAAAOIgeAAIAAgOIgsAAIAAA6g");
	this.shape_125.setTransform(488.9,62.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhJAAIAAAPIA7AAIAAAOgAgVgHIAsAAIAAgOIgsAAg");
	this.shape_126.setTransform(464.9,62.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#200826").s().p("AgkAlIAAgOIgPAAIAAgsIAPAAIAAgPIBZAAIAABJgAgWAXIAsAAIAAgsIgsAAg");
	this.shape_127.setTransform(440.9,62.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAOIgdAAIAAgOIgsAAIAAAsIBJAAIAAAOg");
	this.shape_128.setTransform(428.9,62.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#200826").s().p("Ag0AlIAAgOIA8AAIAAgPIgsAAIAAgPIgQAAIAAgOIAQAAIAAgPIBJAAIAAAPIgsAAIAAAOIAsAAIAAAPIAQAAIAAAPIgQAAIAAAOg");
	this.shape_129.setTransform(416.9,62.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAsIgOAAIAAAOgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_130.setTransform(392.9,62.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#200826").s().p("AgHAtIAAgPIgOAAIAAgsIgfAAIAAgPIAfAAIAAgPIAdAAIAAAPIAdAAIAAAPIgdAAIAAAsIAPAAIAAgPIAeAAIAAAPIgQAAIAAAPg");
	this.shape_131.setTransform(380.9,61.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#200826").s().p("AAXAlIAAg6IgsAAIAAA6IgfAAIAAhJIBZAAIAAAPIAQAAIAAA6g");
	this.shape_132.setTransform(344.9,62.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#200826").s().p("AgHAtIAAgPIgOAAIAAgsIgfAAIAAgPIAfAAIAAgPIAdAAIAAAPIAdAAIAAAPIgdAAIAAAsIAPAAIAAgPIAeAAIAAAPIgQAAIAAAPg");
	this.shape_133.setTransform(308.9,61.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#200826").s().p("AgkAlIAAgOIgPAAIAAg7IAdAAIAAA7IAsAAIAAg7IAfAAIAABJg");
	this.shape_134.setTransform(296.9,62.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#200826").s().p("AgzA0IAAhnIAeAAIAAAeIA7AAIAAAPIAOAAIAAAsIgOAAIAAAOgAgVAmIAsAAIAAgsIgsAAg");
	this.shape_135.setTransform(284.9,61.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#200826").s().p("AgzAlIAAgOIA6AAIAAgPIgsAAIAAgPIgOAAIAAgOIAOAAIAAgPIBLAAIAAAPIgsAAIAAAOIAsAAIAAAPIAOAAIAAAPIgOAAIAAAOg");
	this.shape_136.setTransform(248.9,62.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#200826").s().p("AglAlIAAgOIgPAAIAAg7IAfAAIAAA7IAsAAIAAg7IAdAAIAABJg");
	this.shape_137.setTransform(236.9,62.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#200826").s().p("AgWAXIAAgQIAQAAIAAgcIAcAAIAAAcIgPAAIAAAQg");
	this.shape_138.setTransform(212.9,65.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#200826").s().p("Ag0AlIAAgOIA8AAIAAgPIgsAAIAAgPIgQAAIAAgOIAQAAIAAgPIBJAAIAAAPIgsAAIAAAOIAsAAIAAAPIAQAAIAAAPIgQAAIAAAOg");
	this.shape_139.setTransform(188.9,62.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#200826").s().p("AglAlIAAgOIgOAAIAAg7IAdAAIAAA7IAsAAIAAg7IAeAAIAABJg");
	this.shape_140.setTransform(176.9,62.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#200826").s().p("AglAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAsIgPAAIAAAOgAgVAXIAsAAIAAgsIgsAAg");
	this.shape_141.setTransform(164.9,62.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#200826").s().p("AAWAlIAAgsIgOAAIAAAPIgPAAIAAgPIgPAAIAAAsIgeAAIAAhJIAtAAIAAAPIAPAAIAAgPIAdAAIAAAPIAQAAIAAA6g");
	this.shape_142.setTransform(152.9,62.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#200826").s().p("AglAlIAAgOIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhJAAIAAAPIA6AAIAAAOgAgVgHIAsAAIAAgOIgsAAg");
	this.shape_143.setTransform(128.9,62.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#200826").s().p("AAWA0IAAg6IgsAAIAAA6IgeAAIAAhnIAeAAIAAAeIA7AAIAAAPIAQAAIAAA6g");
	this.shape_144.setTransform(116.9,61.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#200826").s().p("AgGAtIAAgPIgQAAIAAgsIgdAAIAAgPIAdAAIAAgPIAdAAIAAAPIAfAAIAAAPIgfAAIAAAsIAPAAIAAgPIAeAAIAAAPIgOAAIAAAPg");
	this.shape_145.setTransform(104.9,61.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#200826").s().p("AAWA1IAAg8IgsAAIAAA8IgeAAIAAhpIAeAAIAAAeIA7AAIAAAPIAQAAIAAA8g");
	this.shape_146.setTransform(566.9,47.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#200826").s().p("AgGAtIAAgPIgQAAIAAgsIgdAAIAAgPIAdAAIAAgPIAdAAIAAAPIAfAAIAAAPIgfAAIAAAsIAPAAIAAgPIAeAAIAAAPIgOAAIAAAPg");
	this.shape_147.setTransform(554.9,47.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#200826").s().p("AAIAmIAAgQIgPAAIAAAQIgdAAIAAgQIgQAAIAAg7IAeAAIAAAsIAPAAIAAgNIAPAAIAAANIAOAAIAAgsIAfAAIAAA7IgQAAIAAAQg");
	this.shape_148.setTransform(530.9,48.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#200826").s().p("AgkAtIAAgPIA7AAIAAgPIg7AAIAAgPIgQAAIAAgdIAQAAIAAgPIBYAAIAABKIgPAAIAAAPgAgVAAIAsAAIAAgdIgsAAg");
	this.shape_149.setTransform(506.9,49.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#200826").s().p("AAWAmIAAg8IgsAAIAAA8IgdAAIAAhLIBZAAIAAAPIAPAAIAAA8g");
	this.shape_150.setTransform(494.9,48.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#200826").s().p("AgkAtIAAgPIA7AAIAAgPIg7AAIAAgPIgQAAIAAgdIAQAAIAAgPIBZAAIAABKIgQAAIAAAPgAgVAAIAsAAIAAgdIgsAAg");
	this.shape_151.setTransform(470.9,49.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#200826").s().p("AgkAtIAAgPIA6AAIAAgPIg6AAIAAgPIgPAAIAAgdIAPAAIAAgPIBZAAIAABKIgPAAIAAAPgAgWAAIAsAAIAAgdIgsAAg");
	this.shape_152.setTransform(458.9,49.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#200826").s().p("AAXA1IAAg8IgsAAIAAA8IgfAAIAAhpIAfAAIAAAeIA6AAIAAAPIAQAAIAAA8g");
	this.shape_153.setTransform(290.9,47.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAg7IAeAAIAAA7IAsAAIAAg7IAdAAIAABLg");
	this.shape_154.setTransform(266.9,48.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAsIgQAAIAAAQgAgVAWIAsAAIAAgsIgsAAg");
	this.shape_155.setTransform(254.9,48.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#200826").s().p("AAWAmIAAgsIgOAAIAAANIgPAAIAAgNIgPAAIAAAsIgeAAIAAhLIAtAAIAAAPIAPAAIAAgPIAdAAIAAAPIAQAAIAAA8g");
	this.shape_156.setTransform(242.9,48.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#200826").s().p("AglAmIAAgQIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhJAAIAAAPIA6AAIAAAQgAgVgGIAsAAIAAgQIgsAAg");
	this.shape_157.setTransform(218.9,48.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#200826").s().p("AAWA1IAAg8IgsAAIAAA8IgeAAIAAhpIAeAAIAAAeIA7AAIAAAPIAQAAIAAA8g");
	this.shape_158.setTransform(206.9,47.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#200826").s().p("AgGAtIAAgPIgQAAIAAgsIgdAAIAAgPIAdAAIAAgPIAdAAIAAAPIAfAAIAAAPIgfAAIAAAsIAPAAIAAgPIAeAAIAAAPIgOAAIAAAPg");
	this.shape_159.setTransform(194.9,47.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAgsIgPAAIAAgPIAsAAIAAA7IAPAAIAAAQgAgOgkIAAgQIAdAAIAAAQg");
	this.shape_160.setTransform(123.6,47.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#200826").s().p("Ag0AmIAAgQIA7AAIAAgPIgsAAIAAgNIgPAAIAAgQIAPAAIAAgPIBKAAIAAAPIgsAAIAAAQIAsAAIAAANIAPAAIAAAPIgPAAIAAAQg");
	this.shape_161.setTransform(110.9,48.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#200826").s().p("AgkAmIAAgQIgQAAIAAgsIAQAAIAAgPIBJAAIAAAPIAQAAIAAAsIgQAAIAAAQgAgWAWIAsAAIAAgsIgsAAg");
	this.shape_162.setTransform(98.9,48.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#200826").s().p("AgzA1IAAhpIBZAAIAAAQIAOAAIAAAsIgOAAIAAAOIg8AAIAAAfgAgWAIIAsAAIAAgsIgsAAg");
	this.shape_163.setTransform(86.9,47.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhKAAIAAAPIA8AAIAAAQgAgWgGIAsAAIAAgQIgsAAg");
	this.shape_164.setTransform(518.9,48.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#200826").s().p("AAXAmIAAgsIgPAAIAAANIgPAAIAAgNIgOAAIAAAsIgfAAIAAhLIAtAAIAAAPIAPAAIAAgPIAdAAIAAAPIAPAAIAAA8g");
	this.shape_165.setTransform(506.9,48.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#200826").s().p("AglAtIAAgPIA8AAIAAgPIg8AAIAAgPIgOAAIAAgdIAOAAIAAgPIBZAAIAABKIgOAAIAAAPgAgVAAIAsAAIAAgdIgsAAg");
	this.shape_166.setTransform(482.9,49.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#200826").s().p("AAXA1IAAg8IgsAAIAAA8IgeAAIAAhpIAeAAIAAAeIA7AAIAAAPIAOAAIAAA8g");
	this.shape_167.setTransform(446.9,47.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhJAAIAAAPIA7AAIAAAQgAgVgGIAsAAIAAgQIgsAAg");
	this.shape_168.setTransform(410.9,48.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#200826").s().p("AAPA1IAAgQIgPAAIAAgPIgOAAIAAAfIgeAAIAAhpIAeAAIAAA8IAOAAIAAgPIAPAAIAAgPIAeAAIAAAPIgPAAIAAAPIgPAAIAAAOIAPAAIAAAPIAPAAIAAAQg");
	this.shape_169.setTransform(398.1,47.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#200826").s().p("AgkAmIAAgQIgPAAIAAgsIAPAAIAAgPIBZAAIAABLgAgWAWIAsAAIAAgsIgsAAg");
	this.shape_170.setTransform(386.9,48.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#200826").s().p("AAXAmIAAgsIgQAAIAAANIgNAAIAAgNIgPAAIAAAsIgeAAIAAhLIAtAAIAAAPIANAAIAAgPIAfAAIAAAPIAOAAIAAA8g");
	this.shape_171.setTransform(374.9,48.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#200826").s().p("AgkAmIAAgQIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAsIgPAAIAAAQgAgWAWIAsAAIAAgsIgsAAg");
	this.shape_172.setTransform(350.9,48.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhJAAIAAAPIA7AAIAAAQgAgVgGIAsAAIAAgQIgsAAg");
	this.shape_173.setTransform(302.9,48.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#200826").s().p("AgkA1IAAgQIgQAAIAAgsIAQAAIAAgPIA7AAIAAgeIAeAAIAABpgAgVAlIAsAAIAAgsIgsAAg");
	this.shape_174.setTransform(290.9,47.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#200826").s().p("AgkAmIAAgQIgPAAIAAgsIAPAAIAAgPIBKAAIAAAPIAPAAIAAAdIhLAAIAAAPIA8AAIAAAQgAgWgGIAsAAIAAgQIgsAAg");
	this.shape_175.setTransform(278.9,48.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#200826").s().p("AglAmIAAgQIgOAAIAAgsIAOAAIAAgPIBLAAIAAAPIAOAAIAAAdIhJAAIAAAPIA7AAIAAAQgAgVgGIAsAAIAAgQIgsAAg");
	this.shape_176.setTransform(266.9,48.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#200826").s().p("AAXAmIAAg8IgsAAIAAA8IgfAAIAAhLIBZAAIAAAPIAQAAIAAA8g");
	this.shape_177.setTransform(254.9,48.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#200826").s().p("AgdA1IAAgtIgPAAIAAgPIAPAAIAAgdIAPAAIAAgQIAsAAIAAAQIAPAAIAAAOIgeAAIAAgOIgPAAIAAAdIAeAAIAAAPIgeAAIAAAtg");
	this.shape_178.setTransform(219.6,47.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAhJIgPAAIAAgQIAsAAIAABZIAPAAIAAAQg");
	this.shape_179.setTransform(171.6,47.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#200826").s().p("AgdA1IAAgQIAPAAIAAhJIgPAAIAAgQIAsAAIAABZIAPAAIAAAQg");
	this.shape_180.setTransform(159.6,47.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#200826").s().p("Ag0A1IAAhpIBpAAIAAAQIhLAAIAAAdIA7AAIAAAPIg7AAIAAAtg");
	this.shape_181.setTransform(134.9,47.1);

	this.muteButton = new lib.MuteButton();
	this.muteButton.name = "muteButton";
	this.muteButton.parent = this;
	this.muteButton.setTransform(317.5,231.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#200826").s().p("Ag9BtIAAgfIAfAAIAAibIgfAAIAAgfIBcAAIAAC6IAgAAIAAAfg");
	this.shape_182.setTransform(428.7,150.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#200826").s().p("AAvBOIAAhdIgfAAIAAAeIgfAAIAAgeIgfAAIAABdIg+AAIAAibIBdAAIAAAfIAfAAIAAgfIA+AAIAAAfIAgAAIAAB8g");
	this.shape_183.setTransform(402.2,153.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#200826").s().p("AgPBeIAAgfIgfAAIAAhdIg+AAIAAgfIA+AAIAAggIA+AAIAAAgIA+AAIAAAfIg+AAIAABdIAfAAIAAggIA+AAIAAAgIgfAAIAAAfg");
	this.shape_184.setTransform(377.2,151.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#200826").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape_185.setTransform(328.7,157.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#200826").s().p("AAvBOIAAgfIggAAIAAggIgdAAIAAAgIggAAIAAAfIg+AAIAAgfIAfAAIAAggIAfAAIAAgeIgfAAIAAgfIgfAAIAAgfIA+AAIAAAfIAgAAIAAAfIAdAAIAAgfIAgAAIAAgfIA/AAIAAAfIggAAIAAAfIgfAAIAAAeIAfAAIAAAgIAgAAIAAAfg");
	this.shape_186.setTransform(302.2,153.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfICbAAIAAAfIAfAAIAAA9IibAAIAAAgIB8AAIAAAfgAgugPIBdAAIAAgfIhdAAg");
	this.shape_187.setTransform(277.2,153.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#200826").s().p("AhNBtIAAgfIggAAIAAhdIAgAAIAAgfIB8AAIAAg+IA+AAIAADZgAguBOIBdAAIAAhdIhdAAg");
	this.shape_188.setTransform(252.2,150.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#200826").s().p("AhtBeIAAi7IC7AAIAAAfIAgAAIAABdIggAAIAAAfIh8AAIAAAggAguAfIBdAAIAAhdIhdAAg");
	this.shape_189.setTransform(427.2,127.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#200826").s().p("AhNBtIAAgfIggAAIAAhdIAgAAIAAgfIB8AAIAAg+IA+AAIAADZgAguBOIBdAAIAAhdIhdAAg");
	this.shape_190.setTransform(352.2,123);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#200826").s().p("AAvBOIAAh8IhdAAIAAB8Ig/AAIAAibIC7AAIAAAfIAgAAIAAB8g");
	this.shape_191.setTransform(327.2,126.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAhdIAfAAIAAgfIC7AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_192.setTransform(302.2,126.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#200826").s().p("AhtBeIAAi7IC7AAIAAAfIAfAAIAABdIgfAAIAAAfIh8AAIAAAggAguAfIBdAAIAAhdIhdAAg");
	this.shape_193.setTransform(252.2,127.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#200826").s().p("Ag9BtIAAgfIAfAAIAAhdIgfAAIAAgfIBcAAIAAB8IAgAAIAAAfgAgehNIAAgfIA9AAIAAAfg");
	this.shape_194.setTransform(228.7,123);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#200826").s().p("AhtBOIAAgfIAgAAIAAgfIAfAAIAAgfIAgAAIAAgfIhfAAIAAgfIDbAAIAAAfIggAAIAAAfIgfAAIAAAfIggAAIAAAfIBfAAIAAAfg");
	this.shape_195.setTransform(202.2,126.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#200826").s().p("AhNBOIAAgfIgfAAIAAh8IA+AAIAAB8IBdAAIAAh8IA+AAIAACbg");
	this.shape_196.setTransform(152.2,126.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#200826").s().p("AguAvIAAgfIAfAAIAAg+IA+AAIAAA+IggAAIAAAfg");
	this.shape_197.setTransform(527.2,105.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfIC7AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_198.setTransform(452.2,99.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#200826").s().p("AhsBOIAAibIC6AAIAAAfIAfAAIAAAgIg+AAIAAggIhdAAIAAB8g");
	this.shape_199.setTransform(377.2,99.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAh8IA/AAIAAB8IBdAAIAAh8IA+AAIAACbg");
	this.shape_200.setTransform(352.2,99.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#200826").s().p("AhNBeIAAggIB8AAIAAgfIh8AAIAAgfIgfAAIAAhdIA+AAIAABdIBdAAIAAhdIA/AAIAACbIggAAIAAAgg");
	this.shape_201.setTransform(302.2,100.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#200826").s().p("AhNBeIAAggIB8AAIAAgfIh8AAIAAgfIggAAIAAhdIA/AAIAABdIBdAAIAAhdIA+AAIAACbIgfAAIAAAgg");
	this.shape_202.setTransform(252.2,100.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#200826").s().p("AhNBOIAAgfIggAAIAAhdIAgAAIAAgfIC7AAIAACbgAguAvIBdAAIAAhdIhdAAg");
	this.shape_203.setTransform(227.2,99.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#200826").s().p("Ag9BtIAAgfIAfAAIAAibIgfAAIAAgfIBcAAIAAC6IAgAAIAAAfg");
	this.shape_204.setTransform(203.7,96);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#200826").s().p("AhsBeIAAi7IC6AAIAAAfIAfAAIAABdIgfAAIAAAfIh8AAIAAAggAguAfIBdAAIAAhdIhdAAg");
	this.shape_205.setTransform(177.2,100.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#200826").s().p("AgeBtIAAi6Ig/AAIAAgfIC7AAIAAAfIg/AAIAAC6g");
	this.shape_206.setTransform(103.7,96);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:364.7,y:111.1}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:514.7,y:111.1}},{t:this.shape_34,p:{x:91.2,y:135}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:239.7,y:138.2}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:339.7,y:138.2}},{t:this.shape_25,p:{x:364.7,y:138.2}},{t:this.shape_24,p:{x:389.7,y:138.2}},{t:this.shape_23},{t:this.shape_22,p:{x:439.7,y:138.2}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:202.2,y:165.2}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:327.2,y:166.8}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:289.7,y:192.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:364.7,y:189.1}}]}).to({state:[{t:this.shape_120},{t:this.shape_119,p:{x:104.9}},{t:this.shape_118},{t:this.shape_117,p:{x:129.6}},{t:this.shape_116,p:{x:140.9,y:47.9}},{t:this.shape_115,p:{x:153.6}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:296.9}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:332.9}},{t:this.shape_101},{t:this.shape_100,p:{x:357.6}},{t:this.shape_99,p:{x:380.9}},{t:this.shape_98,p:{x:392.9}},{t:this.shape_97,p:{x:404.9}},{t:this.shape_96,p:{x:416.9}},{t:this.shape_95,p:{x:440.9}},{t:this.shape_94,p:{x:452.9}},{t:this.shape_93,p:{x:476.9}},{t:this.shape_92,p:{x:488.9}},{t:this.shape_91,p:{x:500.9}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:537.6}},{t:this.shape_87,p:{x:548.9}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:350.9,y:61.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:410.9,y:61.9}},{t:this.shape_61,p:{x:422.9}},{t:this.shape_60,p:{x:446.9}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:483.6}},{t:this.shape_56,p:{x:494.9}},{t:this.shape_55,p:{x:507.6}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:566.9,y:61.9}},{t:this.shape_49,p:{x:578.9}}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_50,p:{x:134.9,y:47.9}},{t:this.shape_117,p:{x:147.6}},{t:this.shape_119,p:{x:158.9}},{t:this.shape_87,p:{x:170.9}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_66,p:{x:278.9,y:47.9}},{t:this.shape_153},{t:this.shape_100,p:{x:303.6}},{t:this.shape_99,p:{x:326.9}},{t:this.shape_98,p:{x:338.9}},{t:this.shape_97,p:{x:350.9}},{t:this.shape_96,p:{x:362.9}},{t:this.shape_95,p:{x:386.9}},{t:this.shape_94,p:{x:398.9}},{t:this.shape_93,p:{x:422.9}},{t:this.shape_92,p:{x:434.9}},{t:this.shape_91,p:{x:446.9}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_115,p:{x:483.6}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_88,p:{x:543.6}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_49,p:{x:200.9}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_56,p:{x:260.9}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_62,p:{x:320.9,y:61.9}},{t:this.shape_61,p:{x:332.9}},{t:this.shape_132},{t:this.shape_60,p:{x:356.9}},{t:this.shape_131,p:{x:380.9,y:61.9}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_57,p:{x:453.6}},{t:this.shape_126},{t:this.shape_55,p:{x:477.6}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_116,p:{x:536.9,y:61.9}},{t:this.shape_121}]},1).to({state:[{t:this.shape_181},{t:this.shape_115,p:{x:147.6}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_88,p:{x:195.6}},{t:this.shape_87,p:{x:206.9}},{t:this.shape_178},{t:this.shape_119,p:{x:230.9}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_93,p:{x:314.9}},{t:this.shape_62,p:{x:338.9,y:47.9}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_131,p:{x:434.9,y:47.9}},{t:this.shape_167},{t:this.shape_102,p:{x:458.9}},{t:this.shape_166},{t:this.shape_105,p:{x:494.9}},{t:this.shape_165},{t:this.shape_164}]},1).to({state:[]},1).to({state:[{t:this.shape_206},{t:this.shape_29,p:{x:127.2,y:99.1}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_26,p:{x:327.2,y:99.1}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_10,p:{x:427.2,y:100.7}},{t:this.shape_198},{t:this.shape_25,p:{x:477.2,y:99.1}},{t:this.shape_24,p:{x:502.2,y:99.1}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_35,p:{x:177.2,y:126.2}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_3,p:{x:402.2,y:126.2}},{t:this.shape_189},{t:this.shape_15,p:{x:452.2,y:126.2}},{t:this.shape_40,p:{x:477.2,y:126.2}},{t:this.shape_34,p:{x:203.7,y:150.1}},{t:this.shape_22,p:{x:227.2,y:153.2}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape,p:{x:352.2,y:150.1}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.muteButton}]},1).wait(1));

	// Buttons
	this.uploadButton = new lib.uploadbutton();
	this.uploadButton.name = "uploadButton";
	this.uploadButton.parent = this;
	this.uploadButton.setTransform(329.8,314.1);

	this.turnLeftButton = new lib.rotateleftbutton();
	this.turnLeftButton.name = "turnLeftButton";
	this.turnLeftButton.parent = this;
	this.turnLeftButton.setTransform(436.6,385.5);

	this.turnRightButton = new lib.rotaterightbutton();
	this.turnRightButton.name = "turnRightButton";
	this.turnRightButton.parent = this;
	this.turnRightButton.setTransform(482.6,384.1);

	this.zoomInButton = new lib.zoominbutton();
	this.zoomInButton.name = "zoomInButton";
	this.zoomInButton.parent = this;
	this.zoomInButton.setTransform(388.5,386.7);

	this.zoomOutButton = new lib.zoomoutbutton();
	this.zoomOutButton.name = "zoomOutButton";
	this.zoomOutButton.parent = this;
	this.zoomOutButton.setTransform(333.5,387.4);

	this.downloadButton = new lib.downloadbutton();
	this.downloadButton.name = "downloadButton";
	this.downloadButton.parent = this;
	this.downloadButton.setTransform(317,362.9);

	this.doneButton = new lib.DoneButton();
	this.doneButton.name = "doneButton";
	this.doneButton.parent = this;
	this.doneButton.setTransform(303.3,358.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.uploadButton}]}).to({state:[{t:this.zoomOutButton},{t:this.zoomInButton},{t:this.turnRightButton},{t:this.turnLeftButton}]},1).to({state:[]},2).to({state:[{t:this.downloadButton}]},1).to({state:[{t:this.doneButton}]},1).wait(1));

	// Next button
	this.nextButton = new lib.nextbutton();
	this.nextButton.name = "nextButton";
	this.nextButton.parent = this;
	this.nextButton.setTransform(552.7,384.1);
	this.nextButton._off = true;

	this.timeline.addTween(cjs.Tween.get(this.nextButton).wait(1).to({_off:false},0).to({_off:true},3).wait(2));

	// Frame
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#462C1B").s().p("EgH9AkAQgogKgpgEQoQg1oTghQg3gKg3gIQg+gJg+gIQgfASgxAGQgPABgQAEQglAJglAHQgZAFgaACQh+ALh7AbQlbAFlaAQQAPmlgMmoQgUrtA8rfIgJgPIgGgPIAAksIAAnRQAPgUACgZQADgWAAgXIAOgeIAGgPIAAgPIAAgPIAAgPQAghNgFhYQgHhwAAhwIgOgfIgGgOQAAiPAJiOQAQjzhBjeIAAgFQN3BDNygqIAZgKILLgKIAZgKIFPgKQA1gPA1gMQAkgIAlgHQHIhQHHBmQDLAtDNAPQAegKAegBQM9gTM8gWQgmGkAEGwQAHLtAALtIgPAeIgFAPIAWIOQASHBAAHBIAOAfIAGAOIAAC0IAAEOIgPAfIgFAOQAAAmgCAlIAAAPQy9gEy+AYIgZAKIkTAKQlgA5lpAAIhvgCgEgs8ggAIgHAAIgUAKIgKAPIAFAPIAKAPIAKAAQgCAaADAeQAOCNAACPIAKAPIAKAPIAAClIAAD/IgOAeIgGAOIAABLIAABaIgKAPIgKAPQAAB4gLB3QgRC6AIC+IgOAeIgGAPQgRENgBEOQgCG6AAG7IAOAeIAGAPQAAAlACAmQABAmgIAlIgTAeIgQAeIAAAPIAAAPIgKAPIgKAPIgCDCQgCCQAJCNQAMAFANAAQAKAAAKgFQAOhJABhNMBYtAAKIAFAFIAKAKIAPAPIAeAAIAtgPIAKgGIAAALIAFAPIAKAPIAZAAIAPgPIAFgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIgFgPIgPgPIgKAAIgPAAIgFAFIgFAKIgFAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPMhO3gAFIAAAFIgZAAIgZAFIgZAFIj1AFIgZAFIgZAFIgZAFIhBAFIgeAKIiUAHQgFgagHgaQgdAUgOAjg");
	this.shape_207.setTransform(317.9,239.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("EgWTAjlQkjgrkfAnIhLAMQieAbidAdQlUgKlTgQIgBAfQgKAFgKAAQgMAAgMgFIgBghQgCgBgCgGIAEgEQgIrXAHrZIAP3pQAChaAAhaIAFgPIAOgeQgBgnAOglQALgcgEgfIAGgPIAOgeIAAi0IAAiHIgFgPIgPgeIAAmGIAAkOIgKgPIgKgPIAAgPIAAgPIgKgPIgJgPIABg8QAAgJACgGIACgFIADgDIADgDQAdgZAlAEQGhAlGkAIQBgABBUApQCAgCB9gQQD0ggD9AFIAZgKILLgKIAZgKIFOgKQANgFANgDQBMgVBNgMQBGgMA3gRIH+AFQANAFAMACQCvARCtAeQBjASBdAmQBiAIBYgDQNJgeNKASIAAAHQgMANgNAAIgKAAQAjLrgSL9QgSL7AbLvQAOF+AAF+QAjCugBC6QAAB2giBrQAAAlACAmQACAfgJAdQgUAHgUAAQgFAAgFgHQgFgVgBgVQy0BOzXgGIgZAKIkTAKQk7Abk7AAQofAAoehRgEgbqAiWQA3AIA3AKQISAgIRA2QApAEAoAKQGhAKGWhBIETgKIAZgKQS/gZS8AEIABgOQABgmAAglIAGgPIAOgeIAAkOIAAi0IgFgPIgPgeQAAnCgSnBIgWoNIAGgPIAOgeQAArtgHruQgEmvAmmkQs8AVs8AUQgeAAgeAKQjOgOjKgtQnHhmnJBQQgkAGglAJQg1ALg1APIlOAKIgZAKIrLAKIgZAKQtzAqt3hCIAAAEQBBDegPD0QgKCOAACOIAGAPIAOAeQAABxAHBwQAGBYghBNIAAAPIAAAPIAAAPIgFAPIgPAeQAAAWgCAXQgDAZgPAUIAAHRIAAEsIAGAOIAJAQQg8LeAVLtQALGogPGlQFagQFbgEQB7gcB/gKQAZgCAZgFQAmgIAlgJQAPgDAPgCQAxgFAfgSQA/AHA+AKgEgu4AeGQgIiOACiPIABjDIAKgPIAKgPIAAgPIAAgPIAQgdIATgfQAJgkgCgnQgCglAAgmIgFgPIgPgeQAAm6ADm7QABkOAQkMIAGgPIAOgeQgHi/ARi5QAKh3AAh4IAKgPIAKgPIAAhaIAAhLIAGgPIAOgeIAAj/IAAilIgKgPIgKgPQAAiOgOiNQgDgfACgaIgKAAIgKgPIgFgPIAKgPIAUgKIAHAAQAOgjAdgUQAHAaAFAaICUgHIAegKIBBgFIAZgFIAZgFIAZgFID1gFIAZgFIAZgFIAZAAIAAgFMBO3AAFIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAFgPIAFgKIAFgFIAPAAIAKAAIAPAPIAFAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIgFAPIgPAPIgZAAIgKgPIgFgPIAAgLIgKAGIgtAPIgeAAIgPgPIgKgKIgFgFMhYtgAKQgBBMgOBKQgKAFgKAAQgMAAgNgFgEArAAa+IAUAPIAPAKIAjgFIAUgPIAKgCIAAgNIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgFMhPQAAFIgZAFIgZAFIgZAFIj1AFIgZAFIgZAFIgZAFIhGAKIgeAKIhsgDQAJBNgFBSQgGBSAABSQAjCfgBCrQgBBughBkQAAA0ADA1QACApgZAiQgkKEgPKEQgJF/AAF+QAeA3gGBBQgEAtAAAtQgCAIgEAGQgLAQgNAPQgKAWgCAXQgDAZgPAUQAACFAECFIAGgBIAAgFMBY3AAFg");
	this.shape_208.setTransform(319.1,238.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_208},{t:this.shape_207}]}).wait(6));

	// Mouth
	this.mouth = new lib.Mouth();
	this.mouth.name = "mouth";
	this.mouth.parent = this;
	this.mouth.setTransform(309.4,221.3,1,1,0,0,0,-0.8,2.1);
	this.mouth._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(2).to({_off:false},0).to({_off:true},3).wait(1));

	// Image Layer
	this.imageLayer = new lib.empty();
	this.imageLayer.name = "imageLayer";
	this.imageLayer.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.imageLayer).to({_off:true},5).wait(1));

	// BG
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#CFB2A0").s().p("EAsDAdcIgUgPMhY3gAFIAAAFIgGACQgEiFAAiFQAPgVADgZQACgXAKgVQAMgPAMgRQAEgGACgHQAAgtAEgtQAGhBgeg3QAAl/AJl+QAPqFAkqEQAYghgCgqQgCg0AAg1QAhhjABhuQAAirgiifQAAhTAGhSQAFhSgJhMIBsADIAegKIBGgKIAZgFIAZgFIAZgFID1gFIAZgFIAZgFIAZgFMBPQgAFIAAAFIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAOIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAAPIAAANIgKACIgUAPIgjAFIgPgKg");
	this.shape_209.setTransform(314.4,223.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#462C1B").s().p("EgWTAjlQkjgrkfAnIhLAMQieAbidAdQlUgKlTgQIgBAfQgKAFgKAAQgMAAgMgFIgBghQgCgBgCgGIAEgEQgIrXAHrZIAP3pQAChaAAhaIAFgPIAOgeQgBgnAOglQALgcgEgfIAGgPIAOgeIAAi0IAAiHIgFgPIgPgeIAAmGIAAkOIgKgPIgKgPIAAgPIAAgPIgKgPIgJgPIABg8QAAgJACgGIACgFIADgDIADgDQAdgZAlAEQGhAlGkAIQBgABBUApQCAgCB9gQQD0ggD9AFIAZgKILLgKIAZgKIFOgKQANgFANgDQBMgVBNgMQBGgMA3gRIH+AFQANAFAMACQCvARCtAeQBjASBdAmQBiAIBYgDQNJgeNKASIAAAHQgMANgNAAIgKAAQAjLrgSL9QgSL7AbLvQAOF+AAF+QAjCugBC6QAAB2giBrQAAAlACAmQACAfgJAdQgUAHgUAAQgFAAgFgHQgFgVgBgVQy0BOzXgGIgZAKIkTAKQk7Abk7AAQofAAoehRgEArAAa+IAUAPIAPAKIAjgFIAUgPIAKgCIAAgNIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgOIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgPIAAgFMhPQAAFIgZAFIgZAFIgZAFIj1AFIgZAFIgZAFIgZAFIhGAKIgeAKIhsgDQAJBNgFBSQgGBSAABSQAjCfgBCrQgBBughBkQAAA0ADA1QACApgZAiQgkKEgPKEQgJF/AAF+QAeA3gGBBQgEAtAAAtQgCAIgEAGQgLAQgNAPQgKAWgCAXQgDAZgPAUQAACFAECFIAGgBIAAgFMBY3AAFg");
	this.shape_210.setTransform(319.1,238.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,2.5,625.1,471.6);


(lib.Background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var groundMult = 1;
		var diffTreeMult = 0.2;
		var minTreeMult = 0.5;
		var cloudMult = 0.3;
		
		this.move = function(amount) {
			this.ground.x += groundMult * amount;
			this.ground.x %= 120;
			if (this.ground.x < 0) {
				this.ground.x += 120;
			}
			
			for (var i = 0; i < this.treeHolder.children.length; i ++) {
				var tree = this.treeHolder.children[i];
				tree.x += ((1 - tree.treeShade.alpha) * diffTreeMult + minTreeMult) * amount;
			}
			
			for (var i = 0; i < this.cloudHolder.children.length; i ++) {
				this.cloudHolder.children[i].x += cloudMult * amount;
			}
			
			for (var i = 0; i < this.checkPointLaya.children.length; i ++) {
				this.checkPointLaya.children[i].x += groundMult * amount;
			}
			
			this.clearOffscreen(this.treeHolder, 0);
			this.clearOffscreen(this.cloudHolder, 0);
			this.clearOffscreen(this.checkPointLaya, -350);
			
			this.fillTrees();
			this.fillClouds();
		}
		
		this.clearOffscreen = function(holder, cutoff) {
			var toRemove = [];
			for (var i = 0; i < holder.children.length; i ++) {
				var child = holder.children[i];
				if (child.x < cutoff) {
					toRemove.push(child);
				}
			}
			
			for (var i = 0; i < toRemove.length; i ++) {
				holder.removeChild(toRemove[i]);
			}
		}
		
		this.fillClouds = function() {
			if (Math.random() < 0.007) {
				var cloud = new lib.Cloud();
				cloud.x = 640 + 700;
				this.cloudHolder.addChild(cloud);
			}
		}.bind(this);
		
		this.fillTrees = function() {
			if (Math.random() < 0.1) {
				var tree = new lib.Tree();
				tree.x = 640 + 300;
				
				var alphaAmt = Math.random();
				tree.treeShade.alpha = alphaAmt;
				var insertPos = Math.floor((1 - alphaAmt) * this.treeHolder.children.length);
				
				tree.scaleY = 1 + 0.5 * Math.random();
				tree.scaleX = 1 + 0.3 * Math.random();
				this.treeHolder.addChildAt(tree, insertPos);
			}
		}.bind(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Playa
	this.playaLaya = new lib.empty();
	this.playaLaya.name = "playaLaya";
	this.playaLaya.parent = this;
	this.playaLaya.setTransform(320,350);

	this.timeline.addTween(cjs.Tween.get(this.playaLaya).wait(1));

	// Checkpoints & Misc
	this.checkPointLaya = new lib.empty();
	this.checkPointLaya.name = "checkPointLaya";
	this.checkPointLaya.parent = this;
	this.checkPointLaya.setTransform(320,350);

	this.timeline.addTween(cjs.Tween.get(this.checkPointLaya).wait(1));

	// Ground
	this.ground = new lib.Ground();
	this.ground.name = "ground";
	this.ground.parent = this;
	this.ground.setTransform(431.4,417.7,1,1,0,0,0,431.4,0);

	this.timeline.addTween(cjs.Tween.get(this.ground).wait(1));

	// Tree
	this.treeHolder = new lib.empty();
	this.treeHolder.name = "treeHolder";
	this.treeHolder.parent = this;
	this.treeHolder.setTransform(-75.8,356.6);

	this.timeline.addTween(cjs.Tween.get(this.treeHolder).wait(1));

	// Cloud
	this.cloudHolder = new lib.empty();
	this.cloudHolder.name = "cloudHolder";
	this.cloudHolder.parent = this;
	this.cloudHolder.setTransform(-361.7,140.4);

	this.timeline.addTween(cjs.Tween.get(this.cloudHolder).wait(1));

	// Sky
	this.sky = new lib.Sky();
	this.sky.name = "sky";
	this.sky.parent = this;
	this.sky.setTransform(321.4,226.6);

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(1));

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-120,-11.3,1342.7,511.3), null);


// stage content:
(lib.ShovelwareKnight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		
		this.addEventListener("click", function() {
			if (this.currentFrame == 1) {
				this.gotoAndStop(2);
			}
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6));

	// Layer_1
	this.instance = new lib.Intro();
	this.instance.parent = this;

	this.startText = new lib.startButton();
	this.startText.name = "startText";
	this.startText.parent = this;
	this.startText.setTransform(294.5,314.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("AhEDwIAAmbIiJAAIAAhFIGbAAIAABFIiJAAIAAGbg");
	this.shape.setTransform(465.6,141.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("ABnDwIAAjNIjNAAIAADNIiKAAIAAngICKAAIAADPIDNAAIAAjPICKAAIAAHgg");
	this.shape_1.setTransform(407.1,141.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AhmDwIAAhEIhFAAIAAhFIhFAAIAAjNIBFAAIAAhFIBFAAIAAhFIFXAAIAABFIkSAAIAABFIhFAAIAADNIBFAAIAABFICIAAIAAiJIhFAAIAAhEIDPAAIAAERg");
	this.shape_2.setTransform(352.1,141.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AjNDwIAAhEICJAAIAAlXIiJAAIAAhFIGbAAIAABFIiJAAIAAFXICJAAIAABEg");
	this.shape_3.setTransform(300.6,141.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("ABnDwIAAhEIhFAAIAAhFIhDAAIAAhEIhFAAIAADNIiKAAIAAngICKAAIAABFIBFAAIAABFIBDAAIAABFIBFAAIAAjPICKAAIAAHgg");
	this.shape_4.setTransform(242.1,141.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AAiDwIAAhEIhDAAIAAhFIhFAAIAACJIiKAAIAAngICKAAIAADPIBFAAIAAhFIBDAAIAAhFIBFAAIAAhFICKAAIAABFIhFAAIAABFIhFAAIAABFIhFAAIAABEIBFAAIAABEIBFAAIAABFIBFAAIAABEg");
	this.shape_5.setTransform(187.1,141.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AjwDxIAAnhIHhAAIAABFIlXAAIAACJIESAAIAABFIkSAAIAACJIFXAAIAABFg");
	this.shape_6.setTransform(572.1,84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AAiDxIAAhFIhDAAIAAhFIhFAAIAACKIiKAAIAAnhIGcAAIAABFIBFAAIAADOIiKAAIAABEIBFAAIAABFIBFAAIAABFgAhmAjICIAAIAAhFIBFAAIAAiJIjNAAg");
	this.shape_7.setTransform(517.1,84);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("ABnDxIAAiKIjNAAIAACKIiKAAIAAlXIBFAAIAAhFIBFAAIAAhFIDNAAIAABFIBFAAIAABFIBFAAIAAFXgAhmAjIDNAAIAAiJIhFAAIAAhFIhDAAIAABFIhFAAg");
	this.shape_8.setTransform(462.1,84);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("ABnDxIAAhFIhFAAIAAhFIhDAAIAABFIhFAAIAABFIhFAAIAAiKIhFAAIAAlXICKAAIAADOIBFAAIAAhEIBDAAIAABEIBFAAIAAjOICKAAIAAFXIhFAAIAACKg");
	this.shape_9.setTransform(407.1,84);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AjwDxIAAnhICKAAIAAGcIFXAAIAABFg");
	this.shape_10.setTransform(352.1,84);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AjwDxIAAnhIHhAAIAABFIlXAAIAACJIESAAIAABFIkSAAIAACJIFXAAIAABFg");
	this.shape_11.setTransform(297.1,84);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AghDxIAAhFIhFAAIAAhFIhFAAIAAhEIhFAAIAAkTICKAAIAAETIBFAAIAABEIBDAAIAAhEIBFAAIAAkTICKAAIAAETIhFAAIAABEIhFAAIAABFIhFAAIAABFg");
	this.shape_12.setTransform(242.1,84);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AirDxIAAhFIhFAAIAAlXIBFAAIAAhFIFXAAIAABFIBFAAIAAFXIhFAAIAABFgAhmCsIDNAAIAAlXIjNAAg");
	this.shape_13.setTransform(187.1,84);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("ABnDxIAAjOIjNAAIAADOIiKAAIAAnhICKAAIAADOIDNAAIAAjOICKAAIAAHhg");
	this.shape_14.setTransform(132.1,84);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AirDxIAAhFIhFAAIAAhFICKAAIAABFIDNAAIAAiJIkSAAIAAhFIhFAAIAAiJIBFAAIAAhFIESAAIAABFIBFAAIAABFIiKAAIAAhFIiIAAIAACJIESAAIAABFIBFAAIAACJIhFAAIAABFg");
	this.shape_15.setTransform(77.1,84);

	this.instance_1 = new lib.GameManager();
	this.instance_1.parent = this;

	this.instance_2 = new lib.Editor();
	this.instance_2.parent = this;
	this.instance_2.setTransform(327.9,245.9,1,1,0,0,0,327.9,245.9);

	this.instance_3 = new lib.PoopKnight();
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.9,323.9,1,1,0,0,0,0,-30);

	this.instance_4 = new lib.PlayerKnight();
	this.instance_4.parent = this;
	this.instance_4.setTransform(166,273.9,1,1,0,0,0,-1,-29);

	this.instance_5 = new lib.Cloud();
	this.instance_5.parent = this;
	this.instance_5.setTransform(273.9,108.1);

	this.instance_6 = new lib.CheckPoint();
	this.instance_6.parent = this;
	this.instance_6.setTransform(361.9,297.9,1,1,0,0,0,0,-32);

	this.instance_7 = new lib.Background();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.startText}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(3));

	// Layer_3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Eg22AoZMAAAhQxMBttAAAMAAABQxg");
	this.shape_16.setTransform(331.2,238.7);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(304.1,216.1,679.8,533.8);
// library properties:
lib.properties = {
	id: 'D42CE693D01346F0B0617E35B8588BF1',
	width: 640,
	height: 480,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png?1512348711730", id:"index_atlas_"},
		{src:"sounds/IntroSong.mp3?1512348712048", id:"IntroSong"},
		{src:"sounds/OverworldSong.mp3?1512348712048", id:"OverworldSong"}
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
an.compositions['D42CE693D01346F0B0617E35B8588BF1'] = {
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