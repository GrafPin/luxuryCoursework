(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"banner_atlas_1", frames: [[0,1082,438,89],[738,1082,183,59],[440,1082,296,61],[0,0,1920,1080]]},
		{name:"banner_atlas_2", frames: [[0,0,1920,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.CachedBmp_3 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.photo1 = function() {
	this.initialize(ss["banner_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.photo2 = function() {
	this.initialize(ss["banner_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.text = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,219,44.5), null);


(lib.photo2_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.photo2();
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo2_1, new cjs.Rectangle(0,0,1228.8,691.2), null);


(lib.photo1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.photo1();
	this.instance.setTransform(0,0,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.photo1_1, new cjs.Rectangle(0,0,1228.8,768), null);


(lib.buttonAnim = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-45.7,-16.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-74,-14.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.buttonAnim, new cjs.Rectangle(-74,-16,148,32.3), null);


(lib.button = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#01CCFF").s().p("ApMCXQg/AAgsgsQgsgsAAg/QAAg+AsgsQAsgtA/ABISZAAQA/gBAsAtQAsAsAAA+QAAA/gsAsQgsAsg/AAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-15.1,148.1,30.299999999999997);


// stage content:
(lib.banner = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [329];
	// timeline functions:
	this.frame_329 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_6.addEventListener("click", fl_ClickToGoToWebPage_8);
		
		function fl_ClickToGoToWebPage_8() {
			window.open("http://www.adobe.com", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(329).call(this.frame_329).wait(6));

	// button
	this.button_6 = new lib.button();
	this.button_6.name = "button_6";
	this.button_6.setTransform(759.5,80.3);
	this.button_6.alpha = 0.0117;
	this.button_6._off = true;
	new cjs.ButtonHelper(this.button_6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.button_6).wait(329).to({_off:false},0).wait(6));

	// buttonAnim
	this.instance = new lib.buttonAnim();
	this.instance.setTransform(759.5,158.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(279).to({_off:false},0).to({y:80.3,alpha:1},50,cjs.Ease.quadOut).wait(6));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.setTransform(759.5,111.1,1,1,0,0,0,109.5,22.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(259).to({_off:false},0).wait(1).to({y:108.2,alpha:0.0357},0).wait(1).to({y:105.35,alpha:0.0713},0).wait(1).to({y:102.55,alpha:0.1068},0).wait(1).to({y:99.7,alpha:0.1419},0).wait(1).to({y:96.95,alpha:0.1767},0).wait(1).to({y:94.2,alpha:0.2109},0).wait(1).to({y:91.5,alpha:0.2446},0).wait(1).to({y:88.85,alpha:0.2776},0).wait(1).to({y:86.25,alpha:0.3099},0).wait(1).to({y:83.75,alpha:0.3413},0).wait(1).to({y:81.3,alpha:0.3719},0).wait(1).to({y:78.95,alpha:0.4015},0).wait(1).to({y:76.65,alpha:0.4302},0).wait(1).to({y:74.4,alpha:0.4578},0).wait(1).to({y:72.3,alpha:0.4845},0).wait(1).to({y:70.25,alpha:0.5101},0).wait(1).to({y:68.25,alpha:0.5346},0).wait(1).to({y:66.4,alpha:0.5582},0).wait(1).to({y:64.6,alpha:0.5807},0).wait(1).to({y:62.85,alpha:0.6023},0).wait(1).to({y:61.2,alpha:0.6228},0).wait(1).to({y:59.65,alpha:0.6425},0).wait(1).to({y:58.15,alpha:0.6613},0).wait(1).to({y:56.7,alpha:0.6792},0).wait(1).to({y:55.35,alpha:0.6962},0).wait(1).to({y:54.05,alpha:0.7125},0).wait(1).to({y:52.8,alpha:0.728},0).wait(1).to({y:51.6,alpha:0.7428},0).wait(1).to({y:50.5,alpha:0.7568},0).wait(1).to({y:49.4,alpha:0.7702},0).wait(1).to({y:48.4,alpha:0.783},0).wait(1).to({y:47.4,alpha:0.7951},0).wait(1).to({y:46.5,alpha:0.8067},0).wait(1).to({y:45.6,alpha:0.8177},0).wait(1).to({y:44.8,alpha:0.8281},0).wait(1).to({y:43.75,alpha:0.8411},0).wait(1).to({y:42.75,alpha:0.8533},0).wait(1).to({y:41.85,alpha:0.8647},0).wait(1).to({y:41,alpha:0.8755},0).wait(1).to({y:40.2,alpha:0.8856},0).wait(1).to({y:39.45,alpha:0.895},0).wait(1).to({y:38.75,alpha:0.9039},0).wait(1).to({y:38.05,alpha:0.9122},0).wait(1).to({y:37.45,alpha:0.92},0).wait(1).to({y:36.85,alpha:0.9273},0).wait(1).to({y:36.3,alpha:0.9342},0).wait(1).to({y:35.8,alpha:0.9405},0).wait(1).to({y:35.35,alpha:0.9465},0).wait(1).to({y:34.9,alpha:0.952},0).wait(1).to({y:34.5,alpha:0.9572},0).wait(1).to({y:34.1,alpha:0.9619},0).wait(1).to({y:33.75,alpha:0.9663},0).wait(1).to({y:33.45,alpha:0.9704},0).wait(1).to({y:33.15,alpha:0.9742},0).wait(1).to({y:32.85,alpha:0.9776},0).wait(1).to({y:32.6,alpha:0.9808},0).wait(1).to({y:32.4,alpha:0.9837},0).wait(1).to({y:32.15,alpha:0.9863},0).wait(1).to({y:32,alpha:0.9886},0).wait(1).to({y:31.8,alpha:0.9907},0).wait(1).to({y:31.65,alpha:0.9926},0).wait(1).to({y:31.55,alpha:0.9942},0).wait(1).to({y:31.4,alpha:0.9956},0).wait(1).to({y:31.35,alpha:0.9968},0).wait(1).to({y:31.25,alpha:0.9978},0).wait(1).to({y:31.2,alpha:0.9986},0).wait(1).to({y:31.15,alpha:0.9992},0).wait(1).to({y:31.1,alpha:0.9997},0).wait(1).to({alpha:0.9999},0).wait(1).to({alpha:1},0).wait(6));

	// mask2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_199 = new cjs.Graphics().p("EAj5AJAIgBgCIABgCIACgBIACABIAAACIAAACIgCAAIgCAAg");
	var mask_graphics_200 = new cjs.Graphics().p("EAgBAJqQg9g9AAhWQAAhWA9g9QA9g9BWAAQBWAAA9A9QA9A9AABWQAABWg9A9Qg9A9hWAAQhWAAg9g9g");
	var mask_graphics_201 = new cjs.Graphics().p("AcJKUQh5h5AAirQAAirB5h5QB5h4CrAAQCrAAB5B4QB5B5AACrQAACrh5B5Qh5B5irAAQirAAh5h5g");
	var mask_graphics_202 = new cjs.Graphics().p("AYQK+Qi1i1AAkAQAAkAC1i1QC2i1EAAAQEAAAC1C1QC1C1AAEAQAAEAi1C1Qi1C1kAAAQkAAAi2i1g");
	var mask_graphics_203 = new cjs.Graphics().p("AUYLoQjxjxAAlVQAAlUDxjyQDyjxFVAAQFVAADxDxQDyDyAAFUQAAFVjyDxQjxDylVAAQlVAAjyjyg");
	var mask_graphics_204 = new cjs.Graphics().p("AQgMSQktktAAmqQAAmpEtkuQEuktGqAAQGqAAEtEtQEuEuAAGpQAAGqkuEtQktEumqAAQmqAAkukug");
	var mask_graphics_205 = new cjs.Graphics().p("AMoNpQlplqAAn/QAAn+FplqQFqlpH/AAQH/AAFqFpQFpFqAAH+QAAH/lpFqQlqFpn/AAQn/AAlqlpg");
	var mask_graphics_206 = new cjs.Graphics().p("AIwP6QmmmmAApUQAApTGmmmQGmmmJUAAQJUAAGmGmQGmGmAAJTQAAJUmmGmQmmGmpUAAQpUAAmmmmg");
	var mask_graphics_207 = new cjs.Graphics().p("AE3SLQngnhAAqqQAAqpHgniQHinhKqAAQKqAAHhHhQHiHiAAKpQAAKqniHhQnhHiqqAAQqqAAninig");
	var mask_graphics_208 = new cjs.Graphics().p("AA/UcQocodAAr/QAAr+IcoeQIeodL/AAQL/AAIdIdQIeIeAAL+QAAL/oeIdQodIer/AAQr/AAoeoeg");
	var mask_graphics_209 = new cjs.Graphics().p("Ai4WtQpZpZAAtUQAAtTJZpaQJZpaNUAAQNUAAJZJaQJbJaAANTQAANUpbJZQpZJbtUAAQtUAApZpbg");
	var mask_graphics_210 = new cjs.Graphics().p("AmwY+QqWqVAAupQAAuoKWqWQKVqWOpAAQOpAAKVKWQKXKWAAOoQAAOpqXKVQqVKXupAAQupAAqVqXg");
	var mask_graphics_211 = new cjs.Graphics().p("AqobPQrSrRAAv+QAAv9LSrTQLRrRP+AAQP+AALSLRQLSLTAAP9QAAP+rSLRQrSLTv+AAQv+AArRrTg");
	var mask_graphics_212 = new cjs.Graphics().p("AuhdhQsNsOAAxTQAAxSMNsPQMPsORSAAQRTAAMOMOQMPMPAARSQAARTsPMOQsOMPxTAAQxSAAsPsPg");
	var mask_graphics_213 = new cjs.Graphics().p("AyZfyQtKtKAAyoQAAynNKtLQNLtKSnAAQSoAANKNKQNLNLAASnQAASotLNKQtKNLyoAAQynAAtLtLg");
	var mask_graphics_214 = new cjs.Graphics().p("EgWRAiDQuGuGAAz9QAAz8OGuHQOHuGT8AAQT9AAOGOGQOHOHAAT8QAAT9uHOGQuGOHz9AAQz8AAuHuHg");
	var mask_graphics_215 = new cjs.Graphics().p("EgaJAkUQvCvCAA1SQAA1RPCvDQPDvCVRAAQVSAAPCPCQPEPDAAVRQAAVSvEPCQvCPD1SAAQ1RAAvDvDg");
	var mask_graphics_216 = new cjs.Graphics().p("EgeBAmlQv+v+AA2nQAA2mP+wAQP/v+WmAAQWnAAP+P+QQAQAAAWmQAAWnwAP+Qv+QA2nAAQ2mAAv/wAg");
	var mask_graphics_217 = new cjs.Graphics().p("Egh6Ao2Qw6w6AA38QAA37Q6w8QQ8w6X7AAQX9AAQ6Q6QQ7Q8AAX7QAAX8w7Q6Qw6Q839AAQ37AAw8w8g");
	var mask_graphics_218 = new cjs.Graphics().p("EglyArHQx2x2AA5RQAA5QR2x4QR4x2ZQAAQZSAAR2R2QR4R4AAZQQAAZRx4R2Qx2R45SAAQ5QAAx4x4g");
	var mask_graphics_219 = new cjs.Graphics().p("EgpqAtZQyyyzAA6mQAA6lSyy0QS0yzalAAQanAASySzQS0S0AAalQAAamy0SzQyyS06nAAQ6lAAy0y0g");
	var mask_graphics_220 = new cjs.Graphics().p("EgtiAvqQzvzvAA77QAA76TvzxQTwzub6AAQb8AATuTuQTwTxAAb6QAAb7zwTvQzuTw78AAQ76AAzwzwg");
	var mask_graphics_221 = new cjs.Graphics().p("EgxaAx7Q0r0rAA9QQAA9PUr0tQUs0qdPAAQdRAAUqUqQUtUtAAdPQAAdQ0tUrQ0qUs9RAAQ9PAA0s0sg");
	var mask_graphics_222 = new cjs.Graphics().p("Eg0NA0MQ1n1nAA+lQAA+kVn1pQVp1nekAAQelAAVnVnQVpVpAAekQAAel1pVnQ1nVp+lAAQ+kAA1p1pg");
	var mask_graphics_223 = new cjs.Graphics().p("Eg2eA2dQ2j2iAA/7QAA/6Wj2kQWk2jf6AAQf7AAWiWjQWlWkAAf6QAAf72lWiQ2iWl/7AAQ/6AA2k2lg");
	var mask_graphics_224 = new cjs.Graphics().p("Eg4vA4uUgXfgXeAAAghQUAAAghPAXfgXgUAXggXfAhPAAAUAhQAAAAXeAXfUAXhAXgAAAAhPUAAAAhQgXhAXeUgXeAXhghQAAAUghPAAAgXggXhg");
	var mask_graphics_225 = new cjs.Graphics().p("Eg7BA6/UgYbgYaAAAgilUAAAgikAYbgYdUAYdgYbAikAAAUAilAAAAYaAYbUAYeAYdAAAAikUAAAAilgYeAYaUgYaAYegilAAAUgikAAAgYdgYeg");
	var mask_graphics_226 = new cjs.Graphics().p("Eg9SA9RUgZXgZXAAAgj6UAAAgj5AZXgZZUAZZgZXAj5AAAUAj6AAAAZXAZXUAZZAZZAAAAj5UAAAAj6gZZAZXUgZXAZZgj6AAAUgj5AAAgZZgZZg");
	var mask_graphics_227 = new cjs.Graphics().p("Eg/jA/iUgaTgaTAAAglPUAAAglOAaTgaVUAaVgaTAlOAAAUAlPAAAAaTAaTUAaVAaVAAAAlOUAAAAlPgaVAaTUgaTAaVglPAAAUglOAAAgaVgaVg");
	var mask_graphics_228 = new cjs.Graphics().p("EhB0BBzUgbPgbPAAAgmkUAAAgmjAbPgbRUAbRgbPAmjAAAUAmkAAAAbPAbPUAbRAbRAAAAmjUAAAAmkgbRAbPUgbPAbRgmkAAAUgmjAAAgbRgbRg");
	var mask_graphics_229 = new cjs.Graphics().p("EhEGBEEUgcLgcLAAAgn5UAAAgn4AcLgcOUAcOgcLAn4AAAUAn5AAAAcLAcLUAcOAcOAAAAn4UAAAAn5gcOAcLUgcLAcOgn5AAAUgn4AAAgcOgcOg");
	var mask_graphics_334 = new cjs.Graphics().p("EhEGBEEUgcLgcLAAAgn5UAAAgn4AcLgcOUAcOgcLAn4AAAUAn5AAAAcLAcLUAcOAcOAAAAn4UAAAAn5gcOAcLUgcLAcOgn5AAAUgn4AAAgcOgcOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(199).to({graphics:mask_graphics_199,x:230.1243,y:57.6243}).wait(1).to({graphics:mask_graphics_200,x:240.3586,y:67.8586}).wait(1).to({graphics:mask_graphics_201,x:250.5928,y:78.0928}).wait(1).to({graphics:mask_graphics_202,x:260.8271,y:88.3271}).wait(1).to({graphics:mask_graphics_203,x:271.0613,y:98.5613}).wait(1).to({graphics:mask_graphics_204,x:281.2956,y:108.7956}).wait(1).to({graphics:mask_graphics_205,x:291.5298,y:114.625}).wait(1).to({graphics:mask_graphics_206,x:301.7641,y:114.5626}).wait(1).to({graphics:mask_graphics_207,x:311.9983,y:114.5002}).wait(1).to({graphics:mask_graphics_208,x:322.2326,y:114.4379}).wait(1).to({graphics:mask_graphics_209,x:332.4668,y:114.3755}).wait(1).to({graphics:mask_graphics_210,x:342.7011,y:114.3131}).wait(1).to({graphics:mask_graphics_211,x:352.9353,y:114.2507}).wait(1).to({graphics:mask_graphics_212,x:363.1696,y:114.1883}).wait(1).to({graphics:mask_graphics_213,x:373.4038,y:114.126}).wait(1).to({graphics:mask_graphics_214,x:383.6381,y:114.0636}).wait(1).to({graphics:mask_graphics_215,x:393.8723,y:114.0012}).wait(1).to({graphics:mask_graphics_216,x:404.1066,y:113.9388}).wait(1).to({graphics:mask_graphics_217,x:414.3408,y:113.8764}).wait(1).to({graphics:mask_graphics_218,x:424.5751,y:113.8141}).wait(1).to({graphics:mask_graphics_219,x:434.8093,y:113.7517}).wait(1).to({graphics:mask_graphics_220,x:445.0436,y:113.6893}).wait(1).to({graphics:mask_graphics_221,x:455.2778,y:113.6269}).wait(1).to({graphics:mask_graphics_222,x:458.5645,y:113.5645}).wait(1).to({graphics:mask_graphics_223,x:458.5021,y:113.5021}).wait(1).to({graphics:mask_graphics_224,x:458.4398,y:113.4398}).wait(1).to({graphics:mask_graphics_225,x:458.3774,y:113.3774}).wait(1).to({graphics:mask_graphics_226,x:458.315,y:113.315}).wait(1).to({graphics:mask_graphics_227,x:458.2526,y:113.2526}).wait(1).to({graphics:mask_graphics_228,x:458.1902,y:113.1902}).wait(1).to({graphics:mask_graphics_229,x:459.9759,y:114.9759}).wait(105).to({graphics:mask_graphics_334,x:459.9759,y:114.9759}).wait(1));

	// photo1again
	this.instance_2 = new lib.photo1_1();
	this.instance_2.setTransform(460.05,-93.35,1,1,0,0,0,614.4,384);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(199).to({_off:false},0).to({y:208},135).wait(1));

	// mask1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_99 = new cjs.Graphics().p("EAj5AJAIgBgCIABgCIACgBIACABIAAACIAAACIgCAAIgCAAg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EAgEAJpQg8g8AAhVQAAhVA8g8QA8g8BVAAQBVAAA8A8QA8A8AABVQAABVg8A8Qg8A8hVAAQhVAAg8g8g");
	var mask_1_graphics_101 = new cjs.Graphics().p("AcPKTQh3h4AAioQAAipB3h4QB4h2CpAAQCoAAB4B2QB3B4AACpQAACoh3B4Qh4B3ioAAQipAAh4h3g");
	var mask_1_graphics_102 = new cjs.Graphics().p("AYaK8QiyiyAAj9QAAj9CyiyQCziyD9AAQD9AACyCyQCzCyAAD9QAAD9izCyQiyCzj9AAQj9AAizizg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AUlLmQjujuABlRQgBlPDujvQDvjuFQAAQFRAADuDuQDuDvAAFPQAAFRjuDuQjuDulRAAQlQAAjvjug");
	var mask_1_graphics_104 = new cjs.Graphics().p("AQwMQQkpkqAAmkQAAmkEpkqQEqkpGlAAQGkAAEqEpQEpEqAAGkQAAGkkpEqQkqEpmkAAQmlAAkqkpg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AM8NdQlllkAAn5QAAn4FlllQFklkH5AAQH5AAFkFkQFlFlAAH4QAAH5llFkQlkFln5AAQn5AAlkllg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AJHPsQmgmfAApNQAApMGgmgQGgmgJNAAQJMAAGgGgQGgGgAAJMQAAJNmgGfQmgGhpMAAQpNAAmgmhg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AFSR7QnanbAAqgQAAqfHancQHbnbKhAAQKgAAHbHbQHcHcAAKfQAAKgncHbQnbHcqgAAQqhAAnbncg");
	var mask_1_graphics_108 = new cjs.Graphics().p("ABdULQoVoXAAr0QAArzIVoXQIXoXL0AAQL1AAIWIXQIXIXAALzQAAL0oXIXQoWIXr1AAQr0AAoXoXg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AiXWaQpSpSAAtIQAAtHJSpTQJRpRNJAAQNIAAJSJRQJSJTAANHQAANIpSJSQpSJStIAAQtJAApRpSg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AmMYpQqNqNAAucQAAubKNqOQKNqNOcAAQOcAAKNKNQKOKOAAObQAAOcqOKNQqNKOucAAQucAAqNqOg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AqBa4QrIrIAAvwQAAvvLIrJQLIrJPxAAQPwAALILJQLJLJAAPvQAAPwrJLIQrILKvwAAQvxAArIrKg");
	var mask_1_graphics_112 = new cjs.Graphics().p("At2dIQsDsEAAxEQAAxDMDsFQMFsDRDAAQREAAMDMDQMFMFAARDQAAREsFMEQsDMExEAAQxDAAsFsEg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AxrfXQs+s/AAyYQAAyXM+tAQNAs/SXAAQSYAAM/M/QNANAAASXQAASYtAM/Qs/NAyYAAQyXAAtAtAg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgVgAhmQt6t6AAzsQAAzrN6t7QN8t6TrAAQTsAAN6N6QN7N7AATrQAATst7N6Qt6N7zsAAQzrAAt8t7g");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgZVAj1Qu1u1AA1AQAA0/O1u3QO3u1U/AAQVAAAO1O1QO3O3AAU/QAAVAu3O1Qu1O31AAAQ0/AAu3u3g");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgdJAmEQvxvwAA2UQAA2TPxvyQPyvwWSAAQWUAAPxPwQPyPyAAWTQAAWUvyPwQvxPy2UAAQ2SAAvyvyg");
	var mask_1_graphics_117 = new cjs.Graphics().p("Egg+AoUQwswsAA3oQAA3nQswtQQtwsXnAAQXoAAQsQsQQtQtAAXnQAAXowtQsQwsQt3oAAQ3nAAwtwtg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgkzAqjQxnxnAA48QAA47RnxpQRpxnY6AAQY8AARnRnQRpRpAAY7QAAY8xpRnQxnRp48AAQ46AAxpxpg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgooAsyQyjyiAA6QQAA6PSjykQSkyiaPAAQaPAASjSiQSkSkAAaPQAAaQykSiQyjSk6PAAQ6PAAykykg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgsdAvBQzezdAA7kQAA7jTezfQTfzebjAAQbkAATdTeQTgTfAAbjQAAbkzgTdQzdTg7kAAQ7jAAzfzgg");
	var mask_1_graphics_121 = new cjs.Graphics().p("EgwSAxRQ0Z0ZAA84QAA83UZ0aQUb0Zc2AAQc4AAUZUZQUbUaAAc3QAAc40bUZQ0ZUa84AAQ82AA0b0ag");
	var mask_1_graphics_122 = new cjs.Graphics().p("EgzhAzgQ1U1UAA+MQAA+KVU1XQVX1UeKAAQeLAAVVVUQVWVXAAeKQAAeM1WVUQ1VVW+LAAQ+KAA1X1Wg");
	var mask_1_graphics_123 = new cjs.Graphics().p("Eg1wA1vQ2Q2QAA/fQAA/eWQ2SQWS2QfeAAQffAAWQWQQWSWSAAfeQAAff2SWQQ2QWS/fAAQ/eAA2S2Sg");
	var mask_1_graphics_124 = new cjs.Graphics().p("Eg3/A3+UgXLgXLAAAggzUAAAggyAXLgXNUAXNgXLAgyAAAUAgzAAAAXLAXLUAXNAXNAAAAgyUAAAAgzgXNAXLUgXLAXNggzAAAUggyAAAgXNgXNg");
	var mask_1_graphics_125 = new cjs.Graphics().p("Eg6PA6NUgYGgYGAAAgiHUAAAgiGAYGgYJUAYJgYGAiGAAAUAiHAAAAYGAYGUAYJAYJAAAAiGUAAAAiHgYJAYGUgYGAYJgiHAAAUgiGAAAgYJgYJg");
	var mask_1_graphics_126 = new cjs.Graphics().p("Eg8eA8dUgZBgZCAAAgjbUAAAgjaAZBgZEUAZEgZBAjaAAAUAjbAAAAZCAZBUAZDAZEAAAAjaUAAAAjbgZDAZCUgZCAZDgjbAAAUgjaAAAgZEgZDg");
	var mask_1_graphics_127 = new cjs.Graphics().p("Eg+tA+sUgZ9gZ9AAAgkvUAAAgkuAZ9gZ/UAZ/gZ9AkuAAAUAkvAAAAZ9AZ9UAZ/AZ/AAAAkuUAAAAkvgZ/AZ9UgZ9AZ/gkvAAAUgkuAAAgZ/gZ/g");
	var mask_1_graphics_128 = new cjs.Graphics().p("EhA9BA7Uga3ga4AAAgmDUAAAgmCAa3ga7UAa7ga3AmCAAAUAmDAAAAa4Aa3UAa6Aa7AAAAmCUAAAAmDga6Aa4Uga4Aa6gmDAAAUgmCAAAga7ga6g");
	var mask_1_graphics_129 = new cjs.Graphics().p("EhDMBDKUgbzgbzAAAgnXUAAAgnWAbzgb2UAb2gbzAnWAAAUAnXAAAAbzAbzUAb2Ab2AAAAnWUAAAAnXgb2AbzUgbzAb2gnXAAAUgnWAAAgb2gb2g");
	var mask_1_graphics_229 = new cjs.Graphics().p("EhDMBDKUgbzgbzAAAgnXUAAAgnWAbzgb2UAb2gbzAnWAAAUAnXAAAAbzAbzUAb2Ab2AAAAnWUAAAAnXgb2AbzUgbzAb2gnXAAAUgnWAAAgb2gb2g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_1_graphics_99,x:230.1243,y:57.6243}).wait(1).to({graphics:mask_1_graphics_100,x:240.2225,y:67.7225}).wait(1).to({graphics:mask_1_graphics_101,x:250.3206,y:77.8206}).wait(1).to({graphics:mask_1_graphics_102,x:260.4188,y:87.9188}).wait(1).to({graphics:mask_1_graphics_103,x:270.517,y:98.017}).wait(1).to({graphics:mask_1_graphics_104,x:280.6151,y:108.1151}).wait(1).to({graphics:mask_1_graphics_105,x:290.7133,y:114.6259}).wait(1).to({graphics:mask_1_graphics_106,x:300.8115,y:114.5637}).wait(1).to({graphics:mask_1_graphics_107,x:310.9096,y:114.5015}).wait(1).to({graphics:mask_1_graphics_108,x:321.0078,y:114.4393}).wait(1).to({graphics:mask_1_graphics_109,x:331.106,y:114.377}).wait(1).to({graphics:mask_1_graphics_110,x:341.2041,y:114.3148}).wait(1).to({graphics:mask_1_graphics_111,x:351.3023,y:114.2526}).wait(1).to({graphics:mask_1_graphics_112,x:361.4004,y:114.1904}).wait(1).to({graphics:mask_1_graphics_113,x:371.4986,y:114.1281}).wait(1).to({graphics:mask_1_graphics_114,x:381.5968,y:114.0659}).wait(1).to({graphics:mask_1_graphics_115,x:391.6949,y:114.0037}).wait(1).to({graphics:mask_1_graphics_116,x:401.7931,y:113.9414}).wait(1).to({graphics:mask_1_graphics_117,x:411.8913,y:113.8792}).wait(1).to({graphics:mask_1_graphics_118,x:421.9894,y:113.817}).wait(1).to({graphics:mask_1_graphics_119,x:432.0876,y:113.7548}).wait(1).to({graphics:mask_1_graphics_120,x:442.1858,y:113.6925}).wait(1).to({graphics:mask_1_graphics_121,x:452.2839,y:113.6303}).wait(1).to({graphics:mask_1_graphics_122,x:458.5681,y:113.5681}).wait(1).to({graphics:mask_1_graphics_123,x:458.5059,y:113.5059}).wait(1).to({graphics:mask_1_graphics_124,x:458.4436,y:113.4436}).wait(1).to({graphics:mask_1_graphics_125,x:458.3814,y:113.3814}).wait(1).to({graphics:mask_1_graphics_126,x:458.3192,y:113.3192}).wait(1).to({graphics:mask_1_graphics_127,x:458.257,y:113.257}).wait(1).to({graphics:mask_1_graphics_128,x:458.1947,y:113.1947}).wait(1).to({graphics:mask_1_graphics_129,x:459.956,y:114.956}).wait(100).to({graphics:mask_1_graphics_229,x:459.956,y:114.956}).wait(106));

	// photo2
	this.instance_3 = new lib.photo2_1();
	this.instance_3.setTransform(460.4,-55.4,1,1,0,0,0,614.4,345.6);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({y:247.6},130).to({_off:true},1).wait(105));

	// photo1
	this.instance_4 = new lib.photo1_1();
	this.instance_4.setTransform(460.4,-93,1,1,0,0,0,614.4,384);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:268},129).to({_off:true},1).wait(205));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(295.7,-387,779.0999999999999,1039);
// library properties:
lib.properties = {
	id: '3F4DE1EAB69B074E98FC9025FAFDD9A8',
	width: 900,
	height: 180,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/banner_atlas_1.png?1613235553988", id:"banner_atlas_1"},
		{src:"images/banner_atlas_2.png?1613235553988", id:"banner_atlas_2"}
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
an.compositions['3F4DE1EAB69B074E98FC9025FAFDD9A8'] = {
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
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;