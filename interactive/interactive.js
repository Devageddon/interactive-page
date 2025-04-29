(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"interactive_atlas_1", frames: [[0,606,272,90],[274,606,245,90],[521,606,191,90],[0,0,250,200],[252,0,250,200],[504,0,250,200],[756,0,250,200],[0,202,250,200],[252,202,250,200],[504,202,250,200],[756,202,250,200],[0,404,250,200],[252,404,250,200],[504,404,250,200],[756,404,250,200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.African_American_Female_sm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Amirasm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Asian_Business_Malesm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Blank_World_Map_in_the_year_2024_and_with_borders_and_blue_oceans = function() {
	this.initialize(img.Blank_World_Map_in_the_year_2024_and_with_borders_and_blue_oceans);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4500,2234);


(lib.Businesses_Mansm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Indian_Malesm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Inuit_Female_sm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Middle_Eastern_Malesm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Parentsm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Professor_sm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Sikh_Malesm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.South_American_Female_sm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Workersm = function() {
	this.initialize(ss["interactive_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.reset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-68,-22.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s().p("Ap/DTQgyAAAAgyIAAlBQAAgyAyAAIT/AAQAyAAAAAyIAAFBQAAAygyAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3399FF").s().p("Ap/DTQgyAAAAgyIAAlBQAAgyAyAAIT/AAQAyAAAAAyIAAFBQAAAygyAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-22.9,138.1,45);


(lib.Worker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Workersm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Worker, new cjs.Rectangle(-125,-100,250,200), null);


(lib.South_American_Female = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.South_American_Female_sm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.South_American_Female, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Sikh_Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sikh_Malesm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sikh_Male, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Professor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Professor_sm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Professor, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Parent = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Parentsm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Parent, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Middle_Eastern_Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Middle_Eastern_Malesm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Middle_Eastern_Male, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Inuit_Female = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Inuit_Female_sm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Inuit_Female, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Indian_Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Indian_Malesm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Indian_Male, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Businesses_Man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Businesses_Mansm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Businesses_Man, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Asian_Business_Male = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asian_Business_Malesm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Asian_Business_Male, new cjs.Rectangle(-125,-100,250,200), null);


(lib.Amira = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Amirasm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Amira, new cjs.Rectangle(-125,-100,250,200), null);


(lib.African_American_Female_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.African_American_Female_sm();
	this.instance.setTransform(-125,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.African_American_Female_, new cjs.Rectangle(-125,-100,250,200), null);


(lib._5_points_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-61.15,-22.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._5_points_mc, new cjs.Rectangle(-61.1,-22.5,122.5,45), null);


(lib.item_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Worker();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Sikh_Male();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.South_American_Female();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_09 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Parent();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_08 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Middle_Eastern_Male();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_07 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Inuit_Female();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Asian_Business_Male();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_05 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Indian_Male();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_04 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Businesses_Man();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Professor();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.Amira();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib.item_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_36 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(36).call(this.frame_36).wait(1));

	// Layer_2
	this.instance = new lib.African_American_Female_();
	this.instance.setTransform(0,0,0.1279,0.1279);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.1557,scaleY:0.1557},0).wait(1).to({scaleX:0.1836,scaleY:0.1836},0).wait(1).to({scaleX:0.2114,scaleY:0.2114},0).wait(1).to({scaleX:0.2392,scaleY:0.2392},0).wait(1).to({scaleX:0.2671,scaleY:0.2671},0).wait(1).to({scaleX:0.2949,scaleY:0.2949},0).wait(1).to({scaleX:0.3227,scaleY:0.3227},0).wait(1).to({scaleX:0.3505,scaleY:0.3505},0).wait(1).to({scaleX:0.3784,scaleY:0.3784},0).wait(1).to({scaleX:0.4062,scaleY:0.4062},0).wait(1).to({scaleX:0.434,scaleY:0.434},0).wait(1).to({scaleX:0.4619,scaleY:0.4619},0).wait(1).to({scaleX:0.4897,scaleY:0.4897},0).wait(1).to({scaleX:0.5175,scaleY:0.5175},0).wait(1).to({scaleX:0.5453,scaleY:0.5453},0).wait(1).to({scaleX:0.5732,scaleY:0.5732},0).wait(1).to({scaleX:0.601,scaleY:0.601},0).wait(1).to({scaleX:0.6288,scaleY:0.6288},0).wait(1).to({scaleX:0.6567,scaleY:0.6567},0).wait(1).to({scaleX:0.6845,scaleY:0.6845},0).wait(1).to({scaleX:0.7123,scaleY:0.7123},0).wait(1).to({scaleX:0.7401,scaleY:0.7401},0).wait(1).to({scaleX:0.768,scaleY:0.768},0).wait(1).to({scaleX:0.7575,scaleY:0.7575},0).wait(1).to({scaleX:0.747,scaleY:0.747},0).wait(1).to({scaleX:0.7366,scaleY:0.7366},0).wait(1).to({scaleX:0.7261,scaleY:0.7261},0).wait(1).to({scaleX:0.7156,scaleY:0.7156},0).wait(1).to({scaleX:0.7052,scaleY:0.7052},0).wait(1).to({scaleX:0.6947,scaleY:0.6947},0).wait(1).to({scaleX:0.6842,scaleY:0.6842},0).wait(1).to({scaleX:0.6737,scaleY:0.6737},0).wait(1).to({scaleX:0.6633,scaleY:0.6633},0).wait(1).to({scaleX:0.6528,scaleY:0.6528},0).wait(1).to({scaleX:0.6423,scaleY:0.6423},0).wait(1).to({scaleX:0.6319,scaleY:0.6319},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-76.7,192,153.60000000000002);


(lib._5_points = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer_1
	this.instance = new lib._5_points_mc();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-108,alpha:1},9).to({y:-107.65,alpha:0},7).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.1,-130.5,122.5,153);


// stage content:
(lib.interactive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		
		// ── 0. enable TweenJS ticker for auto‑rendering ─────────────────
		createjs.Ticker.framerate = 60;
		createjs.Ticker.on("tick", this.stage);
		
		// ── 1. setup containers & state ────────────────────────────────
		const NUM_ITEMS      = 12;
		const linesContainer = new createjs.Container();
		this.addChild(linesContainer);
		linesContainer.mouseEnabled  = false;
		linesContainer.mouseChildren = false;
		
		const dynLine = new createjs.Shape();
		this.addChild(dynLine);
		dynLine.mouseEnabled = false;
		
		// drag state
		let startClip = null,
		    startPos  = null;
		
		// scoring state
		let score       = 0;
		const connections = {};                  // track unique pairs
		this.points.text = score.toString();     // init dynamic text
		
		// a palette of 12 distinct colors
		const colors = [
		  "#e6194b","#3cb44b","#ffe119","#4363d8","#f58231",
		  "#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe",
		  "#008080","#800000"
		];
		
		// ── 2. drag handlers ────────────────────────────────────────────
		function onMouseMove(evt) {
		  if (!startClip) return;
		  dynLine.graphics
		    .clear()
		    .setStrokeStyle(2)
		    .beginStroke(startClip.color)
		    .moveTo(startPos.x, startPos.y);
		  const cpX = (startPos.x + evt.stageX) / 2,
		        cpY = Math.min(startPos.y, evt.stageY) - 50;
		  dynLine.graphics.quadraticCurveTo(cpX, cpY, evt.stageX, evt.stageY);
		  this.stage.update();
		}
		
		function onMouseUp(evt) {
		  if (!startClip) return;   // guard
		
		  // unhook listeners
		  this.stage.off("stagemousemove", onMouseMove);
		  this.stage.off("stagemouseup",   onMouseUp);
		
		  // clear live preview
		  dynLine.graphics.clear();
		  this.stage.update();
		
		  // find the clip under release point
		  const hits = this.stage.getObjectsUnderPoint(evt.stageX, evt.stageY) || [];
		  let targetClip = null;
		  for (let h of hits) {
		    let obj = h;
		    while (obj && obj !== this) {
		      if (
		        obj instanceof createjs.MovieClip &&
		        obj.name &&
		        obj !== startClip
		      ) {
		        targetClip = obj;
		        break;
		      }
		      obj = obj.parent;
		    }
		    if (targetClip) break;
		  }
		
		  if (targetClip) {
		    // 1️⃣ scoring logic
		    const key = [startClip.name, targetClip.name].sort().join("-");
		    if (!connections[key]) {
		      connections[key] = true;
		      score += 5;
		      this.points.text = score.toString();
		
		      // animate +5 popup over each clip
		      const PopClass = lib["5_points"];
		      if (PopClass) {
		        [startClip, targetClip].forEach(clip => {
		          const pt = clip.localToGlobal(0,0);
		          const pop = new PopClass();
		          pop.x = pt.x;
		          pop.y = pt.y;
		          this.addChild(pop);
		          pop.gotoAndPlay();
		          pop.on("complete", () => this.removeChild(pop));
		        });
		      } else {
		        console.warn("Symbol '5_points' not found in lib");
		      }
		    }
		
		    // 2️⃣ draw the permanent, styled arc
		    const center = targetClip.localToGlobal(0,0),
		          endX   = center.x,
		          endY   = center.y,
		          cpx    = (startPos.x + endX) / 2,
		          cpy    = Math.min(startPos.y, endY) - 50;
		
		    const perm = new createjs.Shape();
		    perm.mouseEnabled = false;
		    perm.graphics
		      .setStrokeStyle(2)
		      .beginStroke(startClip.color)
		      .moveTo(startPos.x, startPos.y)
		      .quadraticCurveTo(cpx, cpy, endX, endY);
		
		    perm.alpha  = 0;
		    perm.shadow = new createjs.Shadow(startClip.color, 0, 0, 10);
		
		    linesContainer.addChild(perm);
		
		    // fade‑in + glow pulse
		    createjs.Tween.get(perm).to({alpha:1}, 500);
		    createjs.Tween.get(perm.shadow, {loop:true})
		      .to({blur:20}, 1000)
		      .to({blur:10}, 1000);
		
		    this.stage.update();
		  }
		
		  // reset drag state
		  startClip = null;
		  startPos  = null;
		}
		
		// ── 3. wire up each item ────────────────────────────────────────
		for (let i = 1; i <= NUM_ITEMS; i++) {
		  const clip = this[`item${i}_mc`];
		  if (!clip) {
		    console.warn(`item${i}_mc not found`);
		    continue;
		  }
		  clip.cursor = "pointer";
		  clip.name   = `item${i}_mc`;
		  clip.color  = colors[(i-1) % colors.length];
		
		  clip.on("mousedown", evt => {
		    startClip = clip;
		    startPos  = { x: evt.stageX, y: evt.stageY };
		    this.stage.on("stagemousemove", onMouseMove.bind(this));
		    this.stage.on("stagemouseup",   onMouseUp.bind(this));
		  });
		}
		
		// ── 4. wire up your reset button ────────────────────────────────
		if (this.btn_reset) {
		  this.btn_reset.cursor = "pointer";
		  this.btn_reset.on("click", () => {
		    // clear all saved lines
		    linesContainer.removeAllChildren();
		    // clear any live preview
		    dynLine.graphics.clear();
		    // clear score and connections
		    score = 0;
		    this.points.text = score.toString();
		    for (let k in connections) delete connections[k];
		    // unhook any stray listeners
		    this.stage.off("stagemousemove", onMouseMove);
		    this.stage.off("stagemouseup",   onMouseUp);
		    startClip = null;
		    startPos  = null;
		    this.stage.update();
		  });
		} else {
		  console.warn("btn_reset not found on stage");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.points = new cjs.Text("", "bold 30px 'Avenir Next'");
	this.points.name = "points";
	this.points.lineHeight = 43;
	this.points.lineWidth = 151;
	this.points.parent = this;
	this.points.setTransform(804.85,6.05);

	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(707.35,4.05,0.5,0.5);

	this.points_5 = new lib._5_points();
	this.points_5.name = "points_5";
	this.points_5.setTransform(119.2,348.95);

	this.btn_reset = new lib.reset();
	this.btn_reset.name = "btn_reset";
	this.btn_reset.setTransform(914.75,725.85);
	new cjs.ButtonHelper(this.btn_reset, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_reset},{t:this.points_5},{t:this.instance},{t:this.points}]}).wait(1));

	// characters
	this.item12_mc = new lib.item_12();
	this.item12_mc.name = "item12_mc";
	this.item12_mc.setTransform(878.9,609.7);

	this.item11_mc = new lib.item_11();
	this.item11_mc.name = "item11_mc";
	this.item11_mc.setTransform(754.85,595.1);

	this.item8_mc = new lib.item_08();
	this.item8_mc.name = "item8_mc";
	this.item8_mc.setTransform(624.95,443.3);

	this.item9_mc = new lib.item_09();
	this.item9_mc.name = "item9_mc";
	this.item9_mc.setTransform(550.9,664);

	this.item10_mc = new lib.item_10();
	this.item10_mc.name = "item10_mc";
	this.item10_mc.setTransform(826.9,465.05);

	this.item7_mc = new lib.item_07();
	this.item7_mc.name = "item7_mc";
	this.item7_mc.setTransform(571.3,309.4);

	this.item6_mc = new lib.item_06();
	this.item6_mc.name = "item6_mc";
	this.item6_mc.setTransform(216.6,494.15);

	this.item5_mc = new lib.item_05();
	this.item5_mc.name = "item5_mc";
	this.item5_mc.setTransform(536.3,197.65);

	this.item4_mc = new lib.item_04();
	this.item4_mc.name = "item4_mc";
	this.item4_mc.setTransform(245.65,678.6);

	this.item3_mc = new lib.item_03();
	this.item3_mc.name = "item3_mc";
	this.item3_mc.setTransform(834.15,247);

	this.item2_mc = new lib.item_02();
	this.item2_mc.name = "item2_mc";
	this.item2_mc.setTransform(282,324);

	this.item1_mc = new lib.item_01();
	this.item1_mc.name = "item1_mc";
	this.item1_mc.setTransform(135.65,131.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1_mc},{t:this.item2_mc},{t:this.item3_mc},{t:this.item4_mc},{t:this.item5_mc},{t:this.item6_mc},{t:this.item7_mc},{t:this.item10_mc},{t:this.item9_mc},{t:this.item8_mc},{t:this.item11_mc},{t:this.item12_mc}]}).wait(1));

	// map
	this.instance_1 = new lib.Blank_World_Map_in_the_year_2024_and_with_borders_and_blue_oceans();
	this.instance_1.setTransform(0,139,0.2358,0.2358);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(512,388.1,549,359.9);
// library properties:
lib.properties = {
	id: '2B129B7BF27C45388D35B0C949BD1D3D',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Blank_World_Map_in_the_year_2024_and_with_borders_and_blue_oceans.png?1745144036845", id:"Blank_World_Map_in_the_year_2024_and_with_borders_and_blue_oceans"},
		{src:"images/interactive_atlas_1.png?1745144036799", id:"interactive_atlas_1"}
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
an.compositions['2B129B7BF27C45388D35B0C949BD1D3D'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;