(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 320,
	height: 480,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_57.png", id:"_57"},
		{src:"images/arr.png", id:"arr"},
		{src:"images/bgr_300x600.jpg", id:"bgr_300x600"},
		{src:"images/cta.png", id:"cta"},
		{src:"images/disc.png", id:"disc"},
		{src:"images/ladowanie.png", id:"ladowanie"},
		{src:"images/loader.jpg", id:"loader"},
		{src:"images/next_is_now.png", id:"next_is_now"},
		{src:"images/next_is_now_black.png", id:"next_is_now_black"},
		{src:"images/packshot_l.png", id:"packshot_l"},
		{src:"images/phone_blank_all.png", id:"phone_blank_all"},
		{src:"images/s6_black.png", id:"s6_black"},
		{src:"images/s6_white.png", id:"s6_white"},
		{src:"images/samsung_black.png", id:"samsung_black"},
		{src:"images/samsung_white.png", id:"samsung_white"}
	]
};



// symbols:



(lib._57 = function() {
	this.initialize(img._57);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,24);


(lib.arr = function() {
	this.initialize(img.arr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,9,12);


(lib.bgr_300x600 = function() {
	this.initialize(img.bgr_300x600);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,750);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,50);


(lib.disc = function() {
	this.initialize(img.disc);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.ladowanie = function() {
	this.initialize(img.ladowanie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,55);


(lib.loader = function() {
	this.initialize(img.loader);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,216);


(lib.next_is_now = function() {
	this.initialize(img.next_is_now);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,14);


(lib.next_is_now_black = function() {
	this.initialize(img.next_is_now_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,14);


(lib.packshot_l = function() {
	this.initialize(img.packshot_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,275);


(lib.phone_blank_all = function() {
	this.initialize(img.phone_blank_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,112,227);


(lib.s6_black = function() {
	this.initialize(img.s6_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,26);


(lib.s6_white = function() {
	this.initialize(img.s6_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,21);


(lib.samsung_black = function() {
	this.initialize(img.samsung_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,15);


(lib.samsung_white = function() {
	this.initialize(img.samsung_white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,12);


(lib.wave = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AZgAAQAAKkneHdQneHfqkAAQqjAAnenfQnendAAqkQAAqjHeneQHeneKjAAQKkAAHeHeQHeHeAAKjg");
	this.shape.setTransform(207.5,207.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(42.8,42.8,329.5,329.5);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.packshot_l();
	this.instance.setTransform(-393,65);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-393,65,238,275);


(lib.text = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ladowanie();
	this.instance.setTransform(-5,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,20,231,55);


(lib.Shape8 = function() {
	this.initialize();

	// Shape sublayer 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg6lAPnIAA/OMB1KAAAIAAfOg");
	this.shape.setTransform(375,100);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,750,200);


(lib.samsungwhite = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.samsung_white();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,12);


(lib.s6white = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s6_white();
	this.instance.setTransform(0,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2,168,21);


(lib.loaderanim = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.loader();
	this.instance.setTransform(0,0,0.5,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,108);


(lib.inch = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._57();
	this.instance.setTransform(-2,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,20,257,24);


(lib.disc_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.disc();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,140);


(lib.bgr = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgr_300x600();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,750);


(lib.bgwhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().dr(-149.95,-300,299.9,600);
	this.shape.setTransform(150,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bat = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333139").s().p("AiLEIIAAnyIBVAAIAAgdIBtAAIAAAdIBUAAIAAHyg");
	this.shape.setTransform(14,26.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,52.9);


(lib.arr_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arr();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,12);


(lib.wavesloop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.wave("synched",0);
	this.instance.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(64));

	// Layer 8
	this.instance_1 = new lib.wave("synched",0);
	this.instance_1.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(74));

	// Layer 9
	this.instance_2 = new lib.wave("synched",0);
	this.instance_2.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(83));

	// Layer 10
	this.instance_3 = new lib.wave("synched",0);
	this.instance_3.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(93));

	// Layer 11
	this.instance_4 = new lib.wave("synched",0);
	this.instance_4.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(104));

	// Layer 4
	this.instance_5 = new lib.wave("synched",0);
	this.instance_5.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(113));

	// Layer 5
	this.instance_6 = new lib.wave("synched",0);
	this.instance_6.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(123));

	// Layer 3
	this.instance_7 = new lib.wave("synched",0);
	this.instance_7.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.951},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.937},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.9},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.875},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.844},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.805},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.753},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.683},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.586},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.466},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.359},0).wait(1).to({regX:207.6,regY:207.6,scaleX:0.83,scaleY:0.83,x:207.6,y:207.6,alpha:0.281},0).wait(1).to({regX:207.5,regY:207.5,scaleX:0.88,scaleY:0.88,x:207.5,y:207.5,alpha:0.223},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.179},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.144},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.117},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.094},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.075},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.06},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.047},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.028},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.01},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(132));

	// Layer 2
	this.instance_8 = new lib.wave("synched",0);
	this.instance_8.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(142));

	// Layer 1
	this.instance_9 = new lib.wave("synched",0);
	this.instance_9.setTransform(207.5,207.5,0.268,0.268,0,0,0,207.5,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.999},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.997},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0.994},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.99},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.985},0).wait(1).to({scaleX:0.28,scaleY:0.28,alpha:0.979},0).wait(1).to({scaleX:0.29,scaleY:0.29,alpha:0.971},0).wait(1).to({scaleX:0.3,scaleY:0.3,alpha:0.962},0).wait(1).to({scaleX:0.31,scaleY:0.31,alpha:0.95},0).wait(1).to({scaleX:0.32,scaleY:0.32,alpha:0.936},0).wait(1).to({scaleX:0.33,scaleY:0.33,alpha:0.92},0).wait(1).to({scaleX:0.35,scaleY:0.35,alpha:0.899},0).wait(1).to({scaleX:0.37,scaleY:0.37,alpha:0.874},0).wait(1).to({scaleX:0.39,scaleY:0.39,alpha:0.843},0).wait(1).to({scaleX:0.42,scaleY:0.42,alpha:0.804},0).wait(1).to({scaleX:0.46,scaleY:0.46,alpha:0.752},0).wait(1).to({scaleX:0.52,scaleY:0.52,alpha:0.681},0).wait(1).to({scaleX:0.59,scaleY:0.59,alpha:0.583},0).wait(1).to({scaleX:0.69,scaleY:0.69,alpha:0.463},0).wait(1).to({scaleX:0.77,scaleY:0.77,alpha:0.356},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.277},0).wait(1).to({scaleX:0.88,scaleY:0.88,alpha:0.22},0).wait(1).to({scaleX:0.91,scaleY:0.91,alpha:0.176},0).wait(1).to({scaleX:0.94,scaleY:0.94,alpha:0.142},0).wait(1).to({scaleX:0.96,scaleY:0.96,alpha:0.115},0).wait(1).to({scaleX:0.98,scaleY:0.98,alpha:0.093},0).wait(1).to({scaleX:0.99,scaleY:0.99,alpha:0.074},0).wait(1).to({scaleX:1,scaleY:1,x:207.6,y:207.6,alpha:0.059},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.046},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.036},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.5,y:207.5,alpha:0.027},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:207.6,y:207.6,alpha:0.02},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.014},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.009},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.006},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.003},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.001},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0},0).wait(1).to({x:207.5,y:207.5},0).to({_off:true},1).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(162.8,162.8,89.4,89.4);


(lib.loader_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.loaderanim();
	this.instance.setTransform(48.5,54,1,1,0,0,0,48.5,54);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10,cjs.Ease.get(1)).to({alpha:0},9,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97,108);


(lib.cta_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arr_1();
	this.instance.setTransform(121.5,24,1,1,0,0,0,4.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:131.5},10,cjs.Ease.get(1)).to({x:121.5},9,cjs.Ease.get(-1)).wait(1));

	// Layer 1
	this.instance_1 = new lib.cta();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153,50);


(lib.Button9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Shape8("single",0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bankphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgkQwIAApwIGuAAIAAJwg");
	var mask_graphics_2 = new cjs.Graphics().p("AgkQwIAApwIGuAAIAAJwg");
	var mask_graphics_3 = new cjs.Graphics().p("AgkQwIAApwIGuAAIAAJwg");
	var mask_graphics_4 = new cjs.Graphics().p("AgkQwIAApwIGuAAIAAJwg");
	var mask_graphics_5 = new cjs.Graphics().p("AgkQvIAApwIGuAAIAAJwg");
	var mask_graphics_6 = new cjs.Graphics().p("AgkQvIAApwIGuAAIAAJwg");
	var mask_graphics_7 = new cjs.Graphics().p("AgkQvIAApwIGuAAIAAJwg");
	var mask_graphics_8 = new cjs.Graphics().p("AgkQuIAApwIGuAAIAAJwg");
	var mask_graphics_9 = new cjs.Graphics().p("AgkQuIAApwIGuAAIAAJwg");
	var mask_graphics_10 = new cjs.Graphics().p("AgkQuIAApwIGuAAIAAJwg");
	var mask_graphics_11 = new cjs.Graphics().p("AgkQtIAApwIGuAAIAAJwg");
	var mask_graphics_12 = new cjs.Graphics().p("AgkQsIAApwIGuAAIAAJwg");
	var mask_graphics_13 = new cjs.Graphics().p("AgkQsIAApwIGuAAIAAJwg");
	var mask_graphics_14 = new cjs.Graphics().p("AgkQrIAApwIGuAAIAAJwg");
	var mask_graphics_15 = new cjs.Graphics().p("AgkQqIAApwIGuAAIAAJwg");
	var mask_graphics_16 = new cjs.Graphics().p("AgkQpIAApwIGuAAIAAJwg");
	var mask_graphics_17 = new cjs.Graphics().p("AgkQoIAApwIGuAAIAAJwg");
	var mask_graphics_18 = new cjs.Graphics().p("AgkQnIAApwIGuAAIAAJwg");
	var mask_graphics_19 = new cjs.Graphics().p("AgkQmIAApwIGuAAIAAJwg");
	var mask_graphics_20 = new cjs.Graphics().p("AgkQlIAApwIGuAAIAAJwg");
	var mask_graphics_21 = new cjs.Graphics().p("AgkQjIAApwIGuAAIAAJwg");
	var mask_graphics_22 = new cjs.Graphics().p("AgkQiIAApwIGuAAIAAJwg");
	var mask_graphics_23 = new cjs.Graphics().p("AgkQgIAApwIGuAAIAAJwg");
	var mask_graphics_24 = new cjs.Graphics().p("AgkQeIAApwIGuAAIAAJwg");
	var mask_graphics_25 = new cjs.Graphics().p("AgkQcIAApwIGuAAIAAJwg");
	var mask_graphics_26 = new cjs.Graphics().p("AgkQaIAApwIGuAAIAAJwg");
	var mask_graphics_27 = new cjs.Graphics().p("AgkQYIAApwIGuAAIAAJwg");
	var mask_graphics_28 = new cjs.Graphics().p("AgkQWIAApwIGuAAIAAJwg");
	var mask_graphics_29 = new cjs.Graphics().p("AgkQTIAApwIGuAAIAAJwg");
	var mask_graphics_30 = new cjs.Graphics().p("AgkQQIAApwIGuAAIAAJwg");
	var mask_graphics_31 = new cjs.Graphics().p("AgkQNIAApwIGuAAIAAJwg");
	var mask_graphics_32 = new cjs.Graphics().p("AgkQKIAApwIGuAAIAAJwg");
	var mask_graphics_33 = new cjs.Graphics().p("AgkQHIAApwIGuAAIAAJwg");
	var mask_graphics_34 = new cjs.Graphics().p("AgkQDIAApwIGuAAIAAJwg");
	var mask_graphics_35 = new cjs.Graphics().p("AgkQAIAApwIGuAAIAAJwg");
	var mask_graphics_36 = new cjs.Graphics().p("AgkP8IAApwIGuAAIAAJwg");
	var mask_graphics_37 = new cjs.Graphics().p("AgkP3IAApwIGuAAIAAJwg");
	var mask_graphics_38 = new cjs.Graphics().p("AgkPzIAApwIGuAAIAAJwg");
	var mask_graphics_39 = new cjs.Graphics().p("AgkPuIAApwIGuAAIAAJwg");
	var mask_graphics_40 = new cjs.Graphics().p("AgkPoIAApwIGuAAIAAJwg");
	var mask_graphics_41 = new cjs.Graphics().p("AgkPjIAApwIGuAAIAAJwg");
	var mask_graphics_42 = new cjs.Graphics().p("AgkPdIAApwIGuAAIAAJwg");
	var mask_graphics_43 = new cjs.Graphics().p("AgkPWIAApwIGuAAIAAJwg");
	var mask_graphics_44 = new cjs.Graphics().p("AgkPPIAApwIGuAAIAAJwg");
	var mask_graphics_45 = new cjs.Graphics().p("AgkPIIAApwIGuAAIAAJwg");
	var mask_graphics_46 = new cjs.Graphics().p("AgkPBIAApwIGuAAIAAJwg");
	var mask_graphics_47 = new cjs.Graphics().p("AgkO5IAApwIGuAAIAAJwg");
	var mask_graphics_48 = new cjs.Graphics().p("AgkOxIAApwIGuAAIAAJwg");
	var mask_graphics_49 = new cjs.Graphics().p("AgkOpIAApwIGuAAIAAJwg");
	var mask_graphics_50 = new cjs.Graphics().p("AgkOhIAApwIGuAAIAAJwg");
	var mask_graphics_51 = new cjs.Graphics().p("AgkOYIAApwIGuAAIAAJwg");
	var mask_graphics_52 = new cjs.Graphics().p("AgkOQIAApwIGuAAIAAJwg");
	var mask_graphics_53 = new cjs.Graphics().p("AgkOIIAApwIGuAAIAAJwg");
	var mask_graphics_54 = new cjs.Graphics().p("AgkOAIAApwIGuAAIAAJwg");
	var mask_graphics_55 = new cjs.Graphics().p("AgkN4IAApwIGuAAIAAJwg");
	var mask_graphics_56 = new cjs.Graphics().p("AgkNxIAApwIGuAAIAAJwg");
	var mask_graphics_57 = new cjs.Graphics().p("AgkNqIAApwIGuAAIAAJwg");
	var mask_graphics_58 = new cjs.Graphics().p("AgkNkIAApwIGuAAIAAJwg");
	var mask_graphics_59 = new cjs.Graphics().p("AgkNdIAApwIGuAAIAAJwg");
	var mask_graphics_60 = new cjs.Graphics().p("AgkNYIAApwIGuAAIAAJwg");
	var mask_graphics_61 = new cjs.Graphics().p("AgkNSIAApwIGuAAIAAJwg");
	var mask_graphics_62 = new cjs.Graphics().p("AgkNNIAApwIGuAAIAAJwg");
	var mask_graphics_63 = new cjs.Graphics().p("AgkNIIAApwIGuAAIAAJwg");
	var mask_graphics_64 = new cjs.Graphics().p("AgkNEIAApwIGuAAIAAJwg");
	var mask_graphics_65 = new cjs.Graphics().p("AgkM/IAApwIGuAAIAAJwg");
	var mask_graphics_66 = new cjs.Graphics().p("AgkM7IAApwIGuAAIAAJwg");
	var mask_graphics_67 = new cjs.Graphics().p("AgkM4IAApwIGuAAIAAJwg");
	var mask_graphics_68 = new cjs.Graphics().p("AgkM0IAApwIGuAAIAAJwg");
	var mask_graphics_69 = new cjs.Graphics().p("AgkMxIAApwIGuAAIAAJwg");
	var mask_graphics_70 = new cjs.Graphics().p("AgkMuIAApwIGuAAIAAJwg");
	var mask_graphics_71 = new cjs.Graphics().p("AgkMrIAApwIGuAAIAAJwg");
	var mask_graphics_72 = new cjs.Graphics().p("AgkMpIAApwIGuAAIAAJwg");
	var mask_graphics_73 = new cjs.Graphics().p("AgkMmIAApwIGuAAIAAJwg");
	var mask_graphics_74 = new cjs.Graphics().p("AgkMkIAApwIGuAAIAAJwg");
	var mask_graphics_75 = new cjs.Graphics().p("AgkMiIAApwIGuAAIAAJwg");
	var mask_graphics_76 = new cjs.Graphics().p("AgkMgIAApwIGuAAIAAJwg");
	var mask_graphics_77 = new cjs.Graphics().p("AgkMeIAApwIGuAAIAAJwg");
	var mask_graphics_78 = new cjs.Graphics().p("AgkMcIAApwIGuAAIAAJwg");
	var mask_graphics_79 = new cjs.Graphics().p("AgkMbIAApwIGuAAIAAJwg");
	var mask_graphics_80 = new cjs.Graphics().p("AgkMZIAApwIGuAAIAAJwg");
	var mask_graphics_81 = new cjs.Graphics().p("AgkMYIAApwIGuAAIAAJwg");
	var mask_graphics_82 = new cjs.Graphics().p("AgkMWIAApwIGuAAIAAJwg");
	var mask_graphics_83 = new cjs.Graphics().p("AgkMVIAApwIGuAAIAAJwg");
	var mask_graphics_84 = new cjs.Graphics().p("AgkMUIAApwIGuAAIAAJwg");
	var mask_graphics_85 = new cjs.Graphics().p("AgkMTIAApwIGuAAIAAJwg");
	var mask_graphics_86 = new cjs.Graphics().p("AgkMSIAApwIGuAAIAAJwg");
	var mask_graphics_87 = new cjs.Graphics().p("AgkMRIAApwIGuAAIAAJwg");
	var mask_graphics_88 = new cjs.Graphics().p("AgkMRIAApwIGuAAIAAJwg");
	var mask_graphics_89 = new cjs.Graphics().p("AgkMQIAApwIGuAAIAAJwg");
	var mask_graphics_90 = new cjs.Graphics().p("AgkMPIAApwIGuAAIAAJwg");
	var mask_graphics_91 = new cjs.Graphics().p("AgkMPIAApwIGuAAIAAJwg");
	var mask_graphics_92 = new cjs.Graphics().p("AgkMOIAApwIGuAAIAAJwg");
	var mask_graphics_93 = new cjs.Graphics().p("AgkMOIAApwIGuAAIAAJwg");
	var mask_graphics_94 = new cjs.Graphics().p("AgkMOIAApwIGuAAIAAJwg");
	var mask_graphics_95 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");
	var mask_graphics_96 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");
	var mask_graphics_97 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");
	var mask_graphics_98 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");
	var mask_graphics_99 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");
	var mask_graphics_100 = new cjs.Graphics().p("AgkMNIAApwIGuAAIAAJwg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_2,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_3,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_4,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_5,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_6,x:39.5,y:107.2}).wait(1).to({graphics:mask_graphics_7,x:39.5,y:107.1}).wait(1).to({graphics:mask_graphics_8,x:39.5,y:107.1}).wait(1).to({graphics:mask_graphics_9,x:39.5,y:107.1}).wait(1).to({graphics:mask_graphics_10,x:39.5,y:107}).wait(1).to({graphics:mask_graphics_11,x:39.5,y:107}).wait(1).to({graphics:mask_graphics_12,x:39.5,y:106.9}).wait(1).to({graphics:mask_graphics_13,x:39.5,y:106.8}).wait(1).to({graphics:mask_graphics_14,x:39.5,y:106.7}).wait(1).to({graphics:mask_graphics_15,x:39.5,y:106.7}).wait(1).to({graphics:mask_graphics_16,x:39.5,y:106.6}).wait(1).to({graphics:mask_graphics_17,x:39.5,y:106.5}).wait(1).to({graphics:mask_graphics_18,x:39.5,y:106.4}).wait(1).to({graphics:mask_graphics_19,x:39.5,y:106.2}).wait(1).to({graphics:mask_graphics_20,x:39.5,y:106.1}).wait(1).to({graphics:mask_graphics_21,x:39.5,y:106}).wait(1).to({graphics:mask_graphics_22,x:39.5,y:105.8}).wait(1).to({graphics:mask_graphics_23,x:39.5,y:105.6}).wait(1).to({graphics:mask_graphics_24,x:39.5,y:105.5}).wait(1).to({graphics:mask_graphics_25,x:39.5,y:105.3}).wait(1).to({graphics:mask_graphics_26,x:39.5,y:105.1}).wait(1).to({graphics:mask_graphics_27,x:39.5,y:104.9}).wait(1).to({graphics:mask_graphics_28,x:39.5,y:104.6}).wait(1).to({graphics:mask_graphics_29,x:39.5,y:104.4}).wait(1).to({graphics:mask_graphics_30,x:39.5,y:104.1}).wait(1).to({graphics:mask_graphics_31,x:39.5,y:103.8}).wait(1).to({graphics:mask_graphics_32,x:39.5,y:103.5}).wait(1).to({graphics:mask_graphics_33,x:39.5,y:103.2}).wait(1).to({graphics:mask_graphics_34,x:39.5,y:102.8}).wait(1).to({graphics:mask_graphics_35,x:39.5,y:102.4}).wait(1).to({graphics:mask_graphics_36,x:39.5,y:102}).wait(1).to({graphics:mask_graphics_37,x:39.5,y:101.6}).wait(1).to({graphics:mask_graphics_38,x:39.5,y:101.1}).wait(1).to({graphics:mask_graphics_39,x:39.5,y:100.6}).wait(1).to({graphics:mask_graphics_40,x:39.5,y:100.1}).wait(1).to({graphics:mask_graphics_41,x:39.5,y:99.5}).wait(1).to({graphics:mask_graphics_42,x:39.5,y:98.9}).wait(1).to({graphics:mask_graphics_43,x:39.5,y:98.3}).wait(1).to({graphics:mask_graphics_44,x:39.5,y:97.6}).wait(1).to({graphics:mask_graphics_45,x:39.5,y:96.9}).wait(1).to({graphics:mask_graphics_46,x:39.5,y:96.1}).wait(1).to({graphics:mask_graphics_47,x:39.5,y:95.4}).wait(1).to({graphics:mask_graphics_48,x:39.5,y:94.6}).wait(1).to({graphics:mask_graphics_49,x:39.5,y:93.7}).wait(1).to({graphics:mask_graphics_50,x:39.5,y:92.9}).wait(1).to({graphics:mask_graphics_51,x:39.5,y:92.1}).wait(1).to({graphics:mask_graphics_52,x:39.5,y:91.2}).wait(1).to({graphics:mask_graphics_53,x:39.5,y:90.4}).wait(1).to({graphics:mask_graphics_54,x:39.5,y:89.6}).wait(1).to({graphics:mask_graphics_55,x:39.5,y:88.9}).wait(1).to({graphics:mask_graphics_56,x:39.5,y:88.2}).wait(1).to({graphics:mask_graphics_57,x:39.5,y:87.5}).wait(1).to({graphics:mask_graphics_58,x:39.5,y:86.8}).wait(1).to({graphics:mask_graphics_59,x:39.5,y:86.2}).wait(1).to({graphics:mask_graphics_60,x:39.5,y:85.6}).wait(1).to({graphics:mask_graphics_61,x:39.5,y:85.1}).wait(1).to({graphics:mask_graphics_62,x:39.5,y:84.5}).wait(1).to({graphics:mask_graphics_63,x:39.5,y:84.1}).wait(1).to({graphics:mask_graphics_64,x:39.5,y:83.6}).wait(1).to({graphics:mask_graphics_65,x:39.5,y:83.2}).wait(1).to({graphics:mask_graphics_66,x:39.5,y:82.8}).wait(1).to({graphics:mask_graphics_67,x:39.5,y:82.4}).wait(1).to({graphics:mask_graphics_68,x:39.5,y:82.1}).wait(1).to({graphics:mask_graphics_69,x:39.5,y:81.8}).wait(1).to({graphics:mask_graphics_70,x:39.5,y:81.5}).wait(1).to({graphics:mask_graphics_71,x:39.5,y:81.2}).wait(1).to({graphics:mask_graphics_72,x:39.5,y:80.9}).wait(1).to({graphics:mask_graphics_73,x:39.5,y:80.7}).wait(1).to({graphics:mask_graphics_74,x:39.5,y:80.4}).wait(1).to({graphics:mask_graphics_75,x:39.5,y:80.2}).wait(1).to({graphics:mask_graphics_76,x:39.5,y:80}).wait(1).to({graphics:mask_graphics_77,x:39.5,y:79.8}).wait(1).to({graphics:mask_graphics_78,x:39.5,y:79.7}).wait(1).to({graphics:mask_graphics_79,x:39.5,y:79.5}).wait(1).to({graphics:mask_graphics_80,x:39.5,y:79.4}).wait(1).to({graphics:mask_graphics_81,x:39.5,y:79.2}).wait(1).to({graphics:mask_graphics_82,x:39.5,y:79.1}).wait(1).to({graphics:mask_graphics_83,x:39.5,y:79}).wait(1).to({graphics:mask_graphics_84,x:39.5,y:78.9}).wait(1).to({graphics:mask_graphics_85,x:39.5,y:78.8}).wait(1).to({graphics:mask_graphics_86,x:39.5,y:78.7}).wait(1).to({graphics:mask_graphics_87,x:39.5,y:78.6}).wait(1).to({graphics:mask_graphics_88,x:39.5,y:78.5}).wait(1).to({graphics:mask_graphics_89,x:39.5,y:78.5}).wait(1).to({graphics:mask_graphics_90,x:39.5,y:78.4}).wait(1).to({graphics:mask_graphics_91,x:39.5,y:78.3}).wait(1).to({graphics:mask_graphics_92,x:39.5,y:78.3}).wait(1).to({graphics:mask_graphics_93,x:39.5,y:78.2}).wait(1).to({graphics:mask_graphics_94,x:39.5,y:78.2}).wait(1).to({graphics:mask_graphics_95,x:39.5,y:78.2}).wait(1).to({graphics:mask_graphics_96,x:39.5,y:78.2}).wait(1).to({graphics:mask_graphics_97,x:39.5,y:78.1}).wait(1).to({graphics:mask_graphics_98,x:39.5,y:78.1}).wait(1).to({graphics:mask_graphics_99,x:39.5,y:78.1}).wait(1).to({graphics:mask_graphics_100,x:39.5,y:78.1}).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#08FF64").s().p("AiKEIIAAnyIBUAAIAAgdIBsAAIAAAdIBWAAIAAHyg");
	this.shape.setTransform(55,124.6);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(100));

	// Layer 4
	this.instance = new lib.bat();
	this.instance.setTransform(55,124.6,1,1,0,0,0,14,26.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},4).wait(96));

	// Layer 2
	this.instance_1 = new lib.loader_1();
	this.instance_1.setTransform(55.5,103,1,1,0,0,0,48.5,54);
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({_off:true},97).wait(1));

	// Layer 1
	this.instance_2 = new lib.phone_blank_all();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,227);


(lib.wavesloop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wavesloop("synched",41);
	this.instance.setTransform(212.1,212.1,1.5,1.5,0,0,0,207.5,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-38.4,500.9,501);


// stage content:
(lib.samsung_s6_green_320x480 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.looped = false;
	}
	this.frame_295 = function() {
		if (!this.looped) {
			this.looped = true;
		}
		else {
		this.stop();
			
		}
	}
	this.frame_310 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(295).call(this.frame_295).wait(15).call(this.frame_310).wait(1));

	// Layer 17
	this.instance = new lib.Button9();
	this.instance.setTransform(0,0,0.4,3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Button9(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(311));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).dr(-149.55,-300,299.1,600);
	this.shape.setTransform(160,240,1.07,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(311));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_166 = new cjs.Graphics().p("EgY/gmfMAx/AAAMAAABM/Mgx/AAAg");
	var mask_graphics_167 = new cjs.Graphics().p("EgY/gmfMAx/AAAMAAABM/Mgx/AAAg");
	var mask_graphics_168 = new cjs.Graphics().p("EgY/gmfMAx/AAAMAAABM/Mgx/AAAg");
	var mask_graphics_169 = new cjs.Graphics().p("EgY/gmfMAx/AAAMAAABM/Mgx/AAAg");
	var mask_graphics_170 = new cjs.Graphics().p("EgY/gmeMAx/AAAMAAABM9Mgx/AAAg");
	var mask_graphics_171 = new cjs.Graphics().p("EgY/gmcMAx/AAAMAAABM5Mgx/AAAg");
	var mask_graphics_172 = new cjs.Graphics().p("EgY/gmbMAx/AAAMAAABM3Mgx/AAAg");
	var mask_graphics_173 = new cjs.Graphics().p("EgY/gmYMAx/AAAMAAABMxMgx/AAAg");
	var mask_graphics_174 = new cjs.Graphics().p("EgZAgmUMAyBAAAMAAABMpMgyBAAAg");
	var mask_graphics_175 = new cjs.Graphics().p("EgZAgmOMAyBAAAMAAABMdMgyBAAAg");
	var mask_graphics_176 = new cjs.Graphics().p("EgZBgmDMAyDAAAMAAABMHMgyDAAAg");
	var mask_graphics_177 = new cjs.Graphics().p("EgZCgl0MAyFAAAMAAABLpMgyFAAAg");
	var mask_graphics_178 = new cjs.Graphics().p("EgZDglrMAyHAAAMAAABLXMgyHAAAg");
	var mask_graphics_179 = new cjs.Graphics().p("EgZDglmMAyHAAAMAAABLNMgyHAAAg");
	var mask_graphics_180 = new cjs.Graphics().p("EgZDgljMAyHAAAMAAABLHMgyHAAAg");
	var mask_graphics_181 = new cjs.Graphics().p("EgZDglhMAyHAAAMAAABLDMgyHAAAg");
	var mask_graphics_182 = new cjs.Graphics().p("EgZEglgMAyJAAAMAAABLBMgyJAAAg");
	var mask_graphics_183 = new cjs.Graphics().p("EgZEglfMAyJAAAMAAABK/MgyJAAAg");
	var mask_graphics_184 = new cjs.Graphics().p("EgZEglfMAyJAAAMAAABK/MgyJAAAg");
	var mask_graphics_185 = new cjs.Graphics().p("EgZEglfMAyJAAAMAAABK/MgyJAAAg");
	var mask_graphics_296 = new cjs.Graphics().p("EgY+gu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_297 = new cjs.Graphics().p("EgY5gu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_298 = new cjs.Graphics().p("EgYqgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_299 = new cjs.Graphics().p("EgYSgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_300 = new cjs.Graphics().p("EgXzgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_301 = new cjs.Graphics().p("EgXLgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_302 = new cjs.Graphics().p("EgWbgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_303 = new cjs.Graphics().p("EgVhgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_304 = new cjs.Graphics().p("EgUdgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_305 = new cjs.Graphics().p("EgTLgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_306 = new cjs.Graphics().p("EgRogu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_307 = new cjs.Graphics().p("EgPtgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_308 = new cjs.Graphics().p("EgNQgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_309 = new cjs.Graphics().p("EgJvgu3MAx+AAAMAAABdvMgx+AAAg");
	var mask_graphics_310 = new cjs.Graphics().p("EAAAgu3MAyAAAAMAAABdvMgyAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_graphics_166,x:-159.6,y:239.5}).wait(1).to({graphics:mask_graphics_167,x:-159.1,y:239.5}).wait(1).to({graphics:mask_graphics_168,x:-157.7,y:239.5}).wait(1).to({graphics:mask_graphics_169,x:-155,y:239.5}).wait(1).to({graphics:mask_graphics_170,x:-150.8,y:239.5}).wait(1).to({graphics:mask_graphics_171,x:-144.6,y:239.5}).wait(1).to({graphics:mask_graphics_172,x:-135.8,y:239.5}).wait(1).to({graphics:mask_graphics_173,x:-123,y:239.6}).wait(1).to({graphics:mask_graphics_174,x:-104,y:239.6}).wait(1).to({graphics:mask_graphics_175,x:-73.8,y:239.6}).wait(1).to({graphics:mask_graphics_176,x:-18.9,y:239.7}).wait(1).to({graphics:mask_graphics_177,x:55.9,y:239.9}).wait(1).to({graphics:mask_graphics_178,x:99.9,y:239.9}).wait(1).to({graphics:mask_graphics_179,x:123.9,y:240}).wait(1).to({graphics:mask_graphics_180,x:138.6,y:240}).wait(1).to({graphics:mask_graphics_181,x:148.1,y:240}).wait(1).to({graphics:mask_graphics_182,x:154.2,y:240}).wait(1).to({graphics:mask_graphics_183,x:157.9,y:240}).wait(1).to({graphics:mask_graphics_184,x:159.8,y:240}).wait(1).to({graphics:mask_graphics_185,x:160.5,y:240}).wait(111).to({graphics:mask_graphics_296,x:160,y:300}).wait(1).to({graphics:mask_graphics_297,x:160.6,y:300}).wait(1).to({graphics:mask_graphics_298,x:162.1,y:300}).wait(1).to({graphics:mask_graphics_299,x:164.4,y:300}).wait(1).to({graphics:mask_graphics_300,x:167.6,y:300}).wait(1).to({graphics:mask_graphics_301,x:171.5,y:300}).wait(1).to({graphics:mask_graphics_302,x:176.3,y:300}).wait(1).to({graphics:mask_graphics_303,x:182.1,y:300}).wait(1).to({graphics:mask_graphics_304,x:189,y:300}).wait(1).to({graphics:mask_graphics_305,x:197.2,y:300}).wait(1).to({graphics:mask_graphics_306,x:207.1,y:300}).wait(1).to({graphics:mask_graphics_307,x:219.3,y:300}).wait(1).to({graphics:mask_graphics_308,x:235.1,y:300}).wait(1).to({graphics:mask_graphics_309,x:257.5,y:300}).wait(1).to({graphics:mask_graphics_310,x:320,y:300}).wait(1));

	// Layer 14
	this.instance_1 = new lib.next_is_now_black();
	this.instance_1.setTransform(125,443);

	this.instance_2 = new lib.next_is_now_black();
	this.instance_2.setTransform(95,568);

	this.instance_3 = new lib.samsung_black();
	this.instance_3.setTransform(21,30);

	this.instance_4 = new lib.s6_black();
	this.instance_4.setTransform(19,57,0.85,0.85);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},166).wait(145));

	// Layer 16
	this.instance_5 = new lib.cta_1("synched",0);
	this.instance_5.setTransform(162.5,428,1,1,0,0,0,76.5,25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(195).to({_off:false},0).to({x:160.5,y:395,alpha:1},20).wait(96));

	// Layer 13
	this.instance_6 = new lib.inch();
	this.instance_6.setTransform(161,97,1,1,0,0,0,139,11);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({y:77,alpha:1},20).wait(107));

	// Layer 12
	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(81,80.1,0.8,0.8);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},0).to({scaleY:0.8,x:372.4},29).wait(116));

	// Layer 11
	this.instance_8 = new lib.bgwhite();
	this.instance_8.setTransform(478.7,80,1.418,1.461,0,0,0,374.9,100);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(166).to({_off:false},0).wait(145));

	// Layer 6
	this.instance_9 = new lib.s6white();
	this.instance_9.setTransform(104,60.5,1,1,0,0,0,84,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(311));

	// samsun white
	this.instance_10 = new lib.samsungwhite();
	this.instance_10.setTransform(64,35,1,1,0,0,0,43,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(311));

	// next white
	this.instance_11 = new lib.next_is_now();
	this.instance_11.setTransform(125,443);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(311));

	// Layer 8
	this.instance_12 = new lib.text();
	this.instance_12.setTransform(182,123.5,1,1,0,0,0,158,37.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).to({y:108.5,alpha:1},19).to({_off:true},118).wait(125));

	// phone blank
	this.instance_13 = new lib.bankphone("single",0);
	this.instance_13.setTransform(206,418.5,1,1,0,0,0,56,91.5);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(1).to({regY:113.5,y:400.1},0).wait(1).to({y:384},0).wait(1).to({y:372.1},0).wait(1).to({y:362.3},0).wait(1).to({y:353.9},0).wait(1).to({y:346.5},0).wait(1).to({y:339.9},0).wait(1).to({y:333.9},0).wait(1).to({y:328.5},0).wait(1).to({y:323.5},0).wait(1).to({y:318.9},0).wait(1).to({y:314.7},0).wait(1).to({y:310.8},0).wait(1).to({y:307.2},0).wait(1).to({y:303.8},0).wait(1).to({y:300.8},0).wait(1).to({y:298},0).wait(1).to({y:295.4},0).wait(1).to({y:293},0).wait(1).to({y:290.8},0).wait(1).to({y:288.9},0).wait(1).to({y:287.2},0).wait(1).to({y:285.6},0).wait(1).to({y:284.3},0).wait(1).to({y:283.1},0).wait(1).to({y:282.2},0).wait(1).to({y:281.5},0).wait(1).to({y:280.9},0).wait(1).to({y:280.6},0).wait(1).to({regY:91.5,y:258.5,mode:"synched",loop:false},0).to({_off:true},155).wait(125));

	// disc
	this.instance_14 = new lib.disc_1();
	this.instance_14.setTransform(-138.5,314.5,1,1,0,0,0,70.5,70);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(15).to({_off:false},0).wait(1).to({rotation:98.5,x:-60.9,y:309},0).wait(1).to({rotation:136.1,x:-31.1,y:306.9},0).wait(1).to({rotation:163.6,x:-9.4,y:305.4},0).wait(1).to({rotation:185.9,x:8,y:304.1},0).wait(1).to({rotation:204.7,x:23,y:303.1},0).wait(1).to({rotation:221,x:35.8,y:302.2},0).wait(1).to({rotation:235.5,x:47.2,y:301.4},0).wait(1).to({rotation:248.4,x:57.4,y:300.7},0).wait(1).to({rotation:260.1,x:66.6,y:300},0).wait(1).to({rotation:270.7,x:75,y:299.4},0).wait(1).to({rotation:280.3,x:82.6,y:298.9},0).wait(1).to({rotation:289.2,x:89.6,y:298.4},0).wait(1).to({rotation:297.3,x:96,y:297.9},0).wait(1).to({rotation:304.7,x:101.9,y:297.5},0).wait(1).to({rotation:311.6,x:107.2,y:297.1},0).wait(1).to({rotation:317.8,x:112.2,y:296.8},0).wait(1).to({rotation:323.6,x:116.7,y:296.5},0).wait(1).to({rotation:328.8,x:120.8,y:296.2},0).wait(1).to({rotation:333.6,x:124.6,y:295.9},0).wait(1).to({rotation:337.9,x:128.1,y:295.6},0).wait(1).to({rotation:341.8,x:131.1,y:295.5},0).wait(1).to({rotation:345.3,x:133.9,y:295.2},0).wait(1).to({rotation:348.4,x:136.3,y:295.1},0).wait(1).to({rotation:351.2,x:138.5,y:294.9},0).wait(1).to({rotation:353.5,x:140.3,y:294.8},0).wait(1).to({rotation:355.5,x:141.9,y:294.7},0).wait(1).to({rotation:357.1,x:143.1,y:294.6},0).wait(1).to({rotation:358.4,x:144.2,y:294.5},0).wait(1).to({rotation:359.3,x:144.9},0).wait(1).to({rotation:359.8,x:145.3},0).wait(1).to({rotation:360,x:145.5},0).to({_off:true},140).wait(125));

	// Layer 7
	this.instance_15 = new lib.wavesloop2("synched",0);
	this.instance_15.setTransform(149.6,295.4,1,1,0,0,0,212.1,212.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(46).to({_off:false},0).wait(84).to({startPosition:4},0).to({y:315.4,alpha:0,startPosition:13},9).wait(172));

	// bgr
	this.instance_16 = new lib.bgr();
	this.instance_16.setTransform(401.3,62.7,1.07,0.642,0,0,0,375,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(159,238.5,322,601.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;