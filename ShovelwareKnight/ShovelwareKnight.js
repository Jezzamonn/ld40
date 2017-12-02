(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
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


(lib.testdrag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AB6349").ss(4.1,1,1).p("AMqAAQAAEijtDNQjtDNlQAAQlPAAjtjNQjtjNAAkiQAAkhDtjNQDtjNFPAAQFQAADtDNQDtDNAAEhg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("Ao8HvQjtjNAAkiQAAkhDtjNQDujNFOAAQFQAADsDNQDuDNAAEhQAAEijuDNQjsDNlQAAQlOAAjujNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.testdrag, new cjs.Rectangle(-83,-72,166,144), null);


// stage content:
(lib.ShovelwareKnight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.circle.on("pressmove", dragCircle.bind(this));
		
		function dragCircle (evt) {
			this.circle.x = evt.stageX;
			this.circle.y = evt.stageY;
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.circle = new lib.testdrag();
	this.circle.name = "circle";
	this.circle.parent = this;
	this.circle.setTransform(233,327.9);

	this.timeline.addTween(cjs.Tween.get(this.circle).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("Ag+DgIAAl/IiBAAIAAhAIF/AAIAABAIiAAAIAAF/g");
	this.shape.setTransform(345.2,144.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000099").s().p("ABgDgIAAjAIi/AAIAADAIiAAAIAAm/ICAAAIAADAIC/AAIAAjAICAAAIAAG/g");
	this.shape_1.setTransform(292.3,144.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000099").s().p("AhfDgIAAhAIhBAAIAAg/Ig/AAIAAjBIA/AAIAAg/IBBAAIAAhAIE/AAIAABAIkAAAIAAA/Ig/AAIAADBIA/AAIAAA/IB/AAIAAiAIg/AAIAAg/IDAAAIAAD/g");
	this.shape_2.setTransform(239.3,144.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AjCDgIAAhAICBAAIAAk/IiBAAIAAhAIGFAAIAABAIiGAAIAAE/IB/AAIAABAg");
	this.shape_3.setTransform(186.4,144.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000099").s().p("ABgDgIAAhBIhAAAIAAg/Ig/AAIAAhAIhAAAIAADAIiAAAIAAm/ICAAAIAABAIBAAAIAAA/IA/AAIAABBIBAAAIAAjAICAAAIAAG/g");
	this.shape_4.setTransform(133.5,144.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000099").s().p("AAgDgIAAhAIg/AAIAAg/IhAAAIAAB/IiAAAIAAm/ICAAAIAADAIBAACIAAhDIA/AAIAAg/IBAAAIAAhAICAAAIAABAIhAAAIAAA/IhAAAIAABDIhAgCIAAA/IBAAAIAABBIBAAAIAAA/IBAAAIAABAg");
	this.shape_5.setTransform(80.5,144.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000099").s().p("AjfDgIAAm/IG/AAIAABAIlAAAIAACAIEAAAIAAA/IkAAAIAACAIFAAAIAABAg");
	this.shape_6.setTransform(557.1,65.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000099").s().p("AAgDgIAAhAIg/AAIAAg/IhAgBIAACAIiAAAIAAm/IF/AAIAABAIBAAAIAAC/IiBAAIAABBIBBAAIAAA/IBAAAIAABAgAhfAgIB/AAIAAg+IA/AAIAAiBIi+AAg");
	this.shape_7.setTransform(504.1,65.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000099").s().p("ABgDgIAAiAIi7AAIAACAIiEAAIAAlAIA/AAIAAg/IBBAAIAAhAIC/AAIAABAIBAAAIAAA/IBAAAIAAFAgAhbAgIC7AAIAAiAIg/AAIAAg/IhAAAIAAA/Ig8AAg");
	this.shape_8.setTransform(451.2,65.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000099").s().p("ABgDgIAAhBIhAAAIAAg/Ig/AAIAAA/IhBAAIAABBIh/AAIAAm/IB/AAIAADAIBBAAIAAhBIA/AAIAABBIBAAAIAAjAICAAAIAAG/g");
	this.shape_9.setTransform(398.2,65.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000099").s().p("AjfDgIAAm/ICAAAIAAF/IE/AAIAABAg");
	this.shape_10.setTransform(345.3,65.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000099").s().p("AjfDgIAAm/IG/AAIAABAIk/AAIAACAID/AAIAAA/Ij/AAIAACAIE/AAIAABAg");
	this.shape_11.setTransform(292.3,65.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000099").s().p("AgfDgIAAhBIhAAAIAAg/IhAAAIAAhAIhAAAIAAj/ICAAAIAADAIBAAAIAAA/IA/AAIAAg/IA/AAIAAjAICBAAIAAD/IhAAAIAABAIhBAAIAAA/Ig/AAIAABBg");
	this.shape_12.setTransform(239.3,65.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000099").s().p("AifDgIAAhAIhAAAIAAk/IBAAAIAAhAIE/AAIAABAIBAAAIAAE/IhAAAIAABAgAhfCgIC+AAIAAk/Ii+AAg");
	this.shape_13.setTransform(186.4,65.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000099").s().p("ABgDgIAAjAIi/AAIAADAIiAAAIAAm/ICAAAIAADAIC/AAIAAjAICAAAIAAG/g");
	this.shape_14.setTransform(133.5,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000099").s().p("AigDgIAAhAIg/gBIAAg+IB/AAIAAA/IDAgBIAAh/IkAAAIAAg/Ig/AAIAAiAIA/AAIAAhAIEAAAIAABAIBAAAIAAA/IiAAAIAAg/IiAAAIAACAIEAAAIAAA/IBAAAIAACAIhAAAIAABAg");
	this.shape_15.setTransform(80.5,65.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(372,262,533.7,377.9);
// library properties:
lib.properties = {
	id: 'D42CE693D01346F0B0617E35B8588BF1',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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