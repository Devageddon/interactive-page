(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgyAzQgWgVAAgeQAAgdAWgVQAVgWAdAAQAeAAAVAWQAWAVAAAdQAAAegWAVQgVAWgeAAQgdAAgVgWg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.item_01, new cjs.Rectangle(-7.3,-7.3,14.6,14.6), null);


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
		const NUM_ITEMS      = 10;
		const linesContainer = new createjs.Container();
		this.addChild(linesContainer);
		// ensure your lines don’t block mouse tests
		linesContainer.mouseEnabled  = false;
		linesContainer.mouseChildren = false;
		
		const dynLine = new createjs.Shape();
		this.addChild(dynLine);
		dynLine.mouseEnabled = false;
		
		let startClip = null,
		    startPos  = null;
		
		// a palette of 10 distinct colors
		const colors = [
		  "#e6194b","#3cb44b","#ffe119","#4363d8","#f58231",
		  "#911eb4","#46f0f0","#f032e6","#bcf60c","#fabebe"
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
		  // stop listening
		  this.stage.off("stagemousemove", onMouseMove);
		  this.stage.off("stagemouseup",   onMouseUp);
		
		  // clear the live preview so it won’t block hit‑testing
		  dynLine.graphics.clear();
		  this.stage.update();
		
		  // 1) raw hit‑test at release point
		  const hits = this.stage.getObjectsUnderPoint(evt.stageX, evt.stageY) || [];
		  let targetClip = null;
		  for (let h of hits) {
		    let obj = h;
		    while (obj && obj !== this) {
		      if (obj instanceof createjs.MovieClip
		          && obj.name
		          && obj !== startClip) {
		        targetClip = obj;
		        break;
		      }
		      obj = obj.parent;
		    }
		    if (targetClip) break;
		  }
		
		  if (targetClip) {
		    // 2) determine the exact end‐point: use target’s center
		    const pt = targetClip.localToGlobal(0,0);
		    const endX = pt.x, endY = pt.y;
		
		    // 3) draw the permanent, styled arc
		    const perm = new createjs.Shape();
		    perm.mouseEnabled = false;
		    perm.graphics
		      .setStrokeStyle(2)
		      .beginStroke(startClip.color)
		      .moveTo(startPos.x, startPos.y);
		
		    const cpx = (startPos.x + endX) / 2,
		          cpy = Math.min(startPos.y, endY) - 50;
		
		    perm.graphics.quadraticCurveTo(cpx, cpy, endX, endY);
		
		    // initial fade‑in
		    perm.alpha = 0;
		    // matching glow
		    perm.shadow = new createjs.Shadow(startClip.color, 0, 0, 10);
		
		    linesContainer.addChild(perm);
		
		    // animate fade‑in
		    createjs.Tween.get(perm)
		      .to({alpha:1}, 500);
		
		    // pulse the glow blur
		    createjs.Tween.get(perm.shadow, {loop:true})
		      .to({blur:20}, 1000)
		      .to({blur:10}, 1000);
		  }
		
		  // reset for the next drag
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
		  clip.color  = colors[(i-1) % colors.length];  // assign its unique color
		
		  clip.on("mousedown", evt => {
		    startClip = clip;
		    startPos  = { x: evt.stageX, y: evt.stageY };
		    // begin listening on the stage for move & up
		    this.stage.on("stagemousemove", onMouseMove.bind(this));
		    this.stage.on("stagemouseup",   onMouseUp.bind(this));
		  });
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.item8_mc = new lib.item_01();
	this.item8_mc.name = "item8_mc";
	this.item8_mc.setTransform(624.95,443.3);

	this.item9_mc = new lib.item_01();
	this.item9_mc.name = "item9_mc";
	this.item9_mc.setTransform(550.9,664);

	this.item10_mc = new lib.item_01();
	this.item10_mc.name = "item10_mc";
	this.item10_mc.setTransform(826.9,465.05);

	this.item7_mc = new lib.item_01();
	this.item7_mc.name = "item7_mc";
	this.item7_mc.setTransform(571.3,309.4);

	this.item6_mc = new lib.item_01();
	this.item6_mc.name = "item6_mc";
	this.item6_mc.setTransform(216.6,494.15);

	this.item5_mc = new lib.item_01();
	this.item5_mc.name = "item5_mc";
	this.item5_mc.setTransform(536.3,197.65);

	this.item4_mc = new lib.item_01();
	this.item4_mc.name = "item4_mc";
	this.item4_mc.setTransform(245.65,678.6);

	this.item3_mc = new lib.item_01();
	this.item3_mc.name = "item3_mc";
	this.item3_mc.setTransform(834.15,247);

	this.item2_mc = new lib.item_01();
	this.item2_mc.name = "item2_mc";
	this.item2_mc.setTransform(282,324);

	this.item1_mc = new lib.item_01();
	this.item1_mc.name = "item1_mc";
	this.item1_mc.setTransform(43.65,130.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1_mc},{t:this.item2_mc},{t:this.item3_mc},{t:this.item4_mc},{t:this.item5_mc},{t:this.item6_mc},{t:this.item7_mc},{t:this.item10_mc},{t:this.item9_mc},{t:this.item8_mc}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(548.4,507.5,293.1,178.39999999999998);
// library properties:
lib.properties = {
	id: '2B129B7BF27C45388D35B0C949BD1D3D',
	width: 1024,
	height: 768,
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