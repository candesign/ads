(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 920,
	height: 680,
	fps: 25,
	color: "#FFFFFF",
	manifest: [
		{src:"http://eu2.madsone.com/c/f5c4aa970a558d626bd62fadd9e176506451fca0.0472791441.jpeg", id:"_2phoneshi"},
		{src:"http://eu2.madsone.com/c/a8c11a4afc7f2945ed7e48c993500ca1180c7efa.8318971441.png", id:"_57"},
		{src:"http://eu2.madsone.com/c/5e3bd7b5e8f884232025075e47e27fd7517ce2de.4618971441.png", id:"arr"},
		{src:"http://eu2.madsone.com/c/e8d75ced692c19299b59c2cb54efbfaa15569485.9818971441.jpg", id:"bgr_300x600"},
		{src:"http://eu2.madsone.com/c/a431a61c0c2cb71f098cdbca922fc4c969e770b3.7772791441.png", id:"chargerhi"},
		{src:"http://eu2.madsone.com/c/8e6281b85f6c3e133b9c68066c98b3fe9165be5f.4328971441.png", id:"cta"},
		{src:"http://eu2.madsone.com/c/5ca42202b9260ff629afa5b01d4b0c5c58e6c6c1.8628971441.png", id:"ladowanie"},
		{src:"http://eu2.madsone.com/c/ca47d787a2ee9a5b5b2a0bfc9eecbc67070b046b.3438971441.png", id:"next_is_now"},
		{src:"http://eu2.madsone.com/c/62fbfc2b788408e6c270a4edad4da7f7b0d83a7d.5138971441.png", id:"next_is_now_black"},
		{src:"http://eu2.madsone.com/c/9fb500dd80456ee81e51913c67ad48e7ea9cd9ba.3548971441.png", id:"s6_black"},
		{src:"http://eu2.madsone.com/c/4b015ffdf07bf9137da20f76315d363535f20724.7958971441.png", id:"s6_white"},
		{src:"http://eu2.madsone.com/c/be71eee3722782c638aef9f917adfb3adc189a73.8168971441.png", id:"samsung_black"},
		{src:"http://eu2.madsone.com/c/338f1ac2644fff894669d438531d88ea41031e3f.6368971441.png", id:"samsung_white"},
		{src:"http://eu2.madsone.com/c/d1c5dc7ff1b76530d7a97b64b0a7f88a071fbf85.8082791441.png", id:"telhi"}
	]
};



// symbols:



(lib._2phoneshi = function() {
	this.initialize(img._2phoneshi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,664);


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


(lib.chargerhi = function() {
	this.initialize(img.chargerhi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,502);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,50);


(lib.ladowanie = function() {
	this.initialize(img.ladowanie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,55);


(lib.next_is_now = function() {
	this.initialize(img.next_is_now);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,14);


(lib.next_is_now_black = function() {
	this.initialize(img.next_is_now_black);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,177,14);


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


(lib.telhi = function() {
	this.initialize(img.telhi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,486,979);


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
	this.instance = new lib._2phoneshi();
	this.instance.setTransform(-343,-376.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-343,-376.9,552,664);


(lib.text = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ladowanie();
	this.instance.setTransform(-5,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,20,231,55);


(lib.telhi_1 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new lib.telhi();
	this.instance.setTransform(-29,-280,0.469,0.469);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-280,228,459.3);


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


(lib.inch = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._57();
	this.instance.setTransform(-2,20);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,20,257,24);


(lib.chargerhi_1 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new lib.chargerhi();
	this.instance.setTransform(-154,-257.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-154,-257.9,505,502);


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


(lib.bankphone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.telhi();
	this.instance.setTransform(-80,-94.2,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-94.2,237.9,479.3);


(lib.arr_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.arr();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,9,12);


(lib._2phoneshi_1 = function() {
	this.initialize();

	// Warstwa 1
	this.instance = new lib._2phoneshi();
	this.instance.setTransform(-198,-332.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198,-332.9,552,664);


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


(lib.wavesloop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wavesloop("synched",41);
	this.instance.setTransform(212.1,212.1,1.5,1.5,0,0,0,207.5,207.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.4,-38.4,500.9,501);


// stage content:
(lib.samsung_s6_green_920x680 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).dr(-183.95,-512.2,367.9,1024.4);
	this.shape.setTransform(460,340,2.501,0.664);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(311));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_166 = new cjs.Graphics().p("Ejo0hT3MHRpAAAMAAACnvMnRpAAAg");
	var mask_graphics_167 = new cjs.Graphics().p("EjomhT3MHRNAAAMAAACnvMnRNAAAg");
	var mask_graphics_168 = new cjs.Graphics().p("Ejn7hT1MHP3AAAMAAACnrMnP3AAAg");
	var mask_graphics_169 = new cjs.Graphics().p("EjmrhTzMHNXAAAMAAACnnMnNXAAAg");
	var mask_graphics_170 = new cjs.Graphics().p("EjkshTuMHJZAAAMAAACndMnJZAAAg");
	var mask_graphics_171 = new cjs.Graphics().p("EjhyhToMHDlAAAMAAACnRMnDlAAAg");
	var mask_graphics_172 = new cjs.Graphics().p("EjdmhTfMG7NAAAMAAACm/Mm7NAAAg");
	var mask_graphics_173 = new cjs.Graphics().p("EjXlhTSMGvLAAAMAAACmlMmvLAAAg");
	var mask_graphics_174 = new cjs.Graphics().p("EjOqhS+MGdVAAAMAAACl9MmdVAAAg");
	var mask_graphics_175 = new cjs.Graphics().p("EjAZhSfMGAzAAAMAAACk/MmAzAAAg");
	var mask_graphics_176 = new cjs.Graphics().p("EimihRnMFNFAAAMAAACjPMlNFAAAg");
	var mask_graphics_177 = new cjs.Graphics().p("EiDThQaMEGnAAAMAAACg1MkGnAAAg");
	var mask_graphics_178 = new cjs.Graphics().p("EhulhPtMDdLAAAMAAACfbMjdLAAAg");
	var mask_graphics_179 = new cjs.Graphics().p("EhjRhPUMDGjAAAMAAACepMjGjAAAg");
	var mask_graphics_180 = new cjs.Graphics().p("EhcVhPFMC4rAAAMAAACeLMi4rAAAg");
	var mask_graphics_181 = new cjs.Graphics().p("EhX4hO7MCvxAAAMAAACd3MivxAAAg");
	var mask_graphics_182 = new cjs.Graphics().p("EhVAhO1MCqBAAAMAAACdrMiqBAAAg");
	var mask_graphics_183 = new cjs.Graphics().p("EhTQhOxMCmhAAAMAAACdjMimhAAAg");
	var mask_graphics_184 = new cjs.Graphics().p("EhSVhOvMCkrAAAMAAACdfMikrAAAg");
	var mask_graphics_185 = new cjs.Graphics().p("EhSEhOuMCkJAAAMAAACddMikJAAAg");
	var mask_graphics_296 = new cjs.Graphics().p("EhJahPYMCS2AAAMAAACexMiS2AAAg");
	var mask_graphics_297 = new cjs.Graphics().p("EhJMhPSMCSzAAAMAAACelMiSzAAAg");
	var mask_graphics_298 = new cjs.Graphics().p("EhIkhPCMCSqAAAMAAACeFMiSqAAAg");
	var mask_graphics_299 = new cjs.Graphics().p("EhHnhOqMCSeAAAMAAACdVMiSeAAAg");
	var mask_graphics_300 = new cjs.Graphics().p("EhGUhOJMCSMAAAMAAACcTMiSMAAAg");
	var mask_graphics_301 = new cjs.Graphics().p("EhEshNgMCR2AAAMAAACbBMiR2AAAg");
	var mask_graphics_302 = new cjs.Graphics().p("EhCuhMtMCRbAAAMAAACZbMiRbAAAg");
	var mask_graphics_303 = new cjs.Graphics().p("EhAXhLxMCQ7AAAMAAACXjMiQ7AAAg");
	var mask_graphics_304 = new cjs.Graphics().p("Eg9ihKpMCQVAAAMAAACVTMiQVAAAg");
	var mask_graphics_305 = new cjs.Graphics().p("Eg6LhJTMCPnAAAMAAACSnMiPnAAAg");
	var mask_graphics_306 = new cjs.Graphics().p("Eg2IhHsMCOxAAAMAAACPZMiOxAAAg");
	var mask_graphics_307 = new cjs.Graphics().p("EgxHhFsMCNsAAAMAAACLZMiNsAAAg");
	var mask_graphics_308 = new cjs.Graphics().p("EgqqhDIMCMUAAAMAAACGRMiMUAAAg");
	var mask_graphics_309 = new cjs.Graphics().p("Egheg/dMCKYAAAMAAAB+7MiKYAAAg");
	var mask_graphics_310 = new cjs.Graphics().p("EgH4g1RMCE9AAAMAAABqjMiE9AAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(166).to({graphics:mask_graphics_166,x:-1490.1,y:433.2}).wait(1).to({graphics:mask_graphics_167,x:-1487.3,y:433.2}).wait(1).to({graphics:mask_graphics_168,x:-1478.2,y:433.1}).wait(1).to({graphics:mask_graphics_169,x:-1461.4,y:432.9}).wait(1).to({graphics:mask_graphics_170,x:-1435,y:432.7}).wait(1).to({graphics:mask_graphics_171,x:-1396.1,y:432.4}).wait(1).to({graphics:mask_graphics_172,x:-1340.2,y:431.9}).wait(1).to({graphics:mask_graphics_173,x:-1259.8,y:431.2}).wait(1).to({graphics:mask_graphics_174,x:-1140.5,y:430.2}).wait(1).to({graphics:mask_graphics_175,x:-949.8,y:428.6}).wait(1).to({graphics:mask_graphics_176,x:-604.2,y:425.6}).wait(1).to({graphics:mask_graphics_177,x:-133.4,y:421.6}).wait(1).to({graphics:mask_graphics_178,x:143.6,y:419.3}).wait(1).to({graphics:mask_graphics_179,x:294.9,y:418}).wait(1).to({graphics:mask_graphics_180,x:387.5,y:417.2}).wait(1).to({graphics:mask_graphics_181,x:447.1,y:416.7}).wait(1).to({graphics:mask_graphics_182,x:485.5,y:416.4}).wait(1).to({graphics:mask_graphics_183,x:508.8,y:416.2}).wait(1).to({graphics:mask_graphics_184,x:521.1,y:416.1}).wait(1).to({graphics:mask_graphics_185,x:525.3,y:416}).wait(111).to({graphics:mask_graphics_296,x:470,y:438.8}).wait(1).to({graphics:mask_graphics_297,x:471.2,y:438.5}).wait(1).to({graphics:mask_graphics_298,x:474.3,y:437.5}).wait(1).to({graphics:mask_graphics_299,x:479.1,y:436.1}).wait(1).to({graphics:mask_graphics_300,x:485.6,y:434.2}).wait(1).to({graphics:mask_graphics_301,x:493.8,y:431.8}).wait(1).to({graphics:mask_graphics_302,x:503.8,y:428.8}).wait(1).to({graphics:mask_graphics_303,x:515.7,y:425.3}).wait(1).to({graphics:mask_graphics_304,x:529.9,y:421.1}).wait(1).to({graphics:mask_graphics_305,x:546.9,y:416.1}).wait(1).to({graphics:mask_graphics_306,x:567.3,y:410}).wait(1).to({graphics:mask_graphics_307,x:592.5,y:402.6}).wait(1).to({graphics:mask_graphics_308,x:625.1,y:393}).wait(1).to({graphics:mask_graphics_309,x:671.5,y:379.2}).wait(1).to({graphics:mask_graphics_310,x:800.5,y:341}).wait(1));

	// Layer 14
	this.instance_1 = new lib.next_is_now_black();
	this.instance_1.setTransform(655.9,624.4,1.249,1.249);

	this.instance_2 = new lib.samsung_black();
	this.instance_2.setTransform(44.3,53.7,1.355,1.355);

	this.instance_3 = new lib.s6_black();
	this.instance_3.setTransform(41.5,90.3,1.152,1.152);

	this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},166).wait(145));

	// Layer 16
	this.instance_4 = new lib.cta_1("synched",0);
	this.instance_4.setTransform(138.5,622.2,1.287,1.287,0,0,0,76.5,25.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(195).to({_off:false},0).to({regX:76.4,scaleX:1.29,scaleY:1.28,x:139.9,y:532.5,alpha:1},20).wait(96));

	// Layer 13
	this.instance_5 = new lib.inch();
	this.instance_5.setTransform(182.5,224,1,1,0,0,0,139,11);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).to({x:185.3,y:182.9,alpha:0.551},11).to({x:182.5,y:145,alpha:1},9).wait(107));

	// Layer 12
	this.instance_6 = new lib._2phoneshi_1("synched",0);
	this.instance_6.setTransform(812.6,355.8,0.717,0.719);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween2("synched",0);
	this.instance_7.setTransform(831,366.8,0.736,0.736,0,0,0,-0.1,0.1);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({_off:false},0).to({_off:true,regX:-0.1,regY:0.1,scaleX:0.74,scaleY:0.74,x:831,y:366.8},7).wait(21).to({_off:false,regX:0,regY:0,scaleY:0.74,x:544.7,y:335.9},1).wait(116));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(166).to({_off:false},7).to({scaleX:0.73,x:650.7,y:367.9},21).to({_off:true,regX:0,regY:0,scaleX:0.74,scaleY:0.74,x:544.7,y:335.9},1).wait(116));

	// Layer 11
	this.instance_8 = new lib.bgwhite();
	this.instance_8.setTransform(1153.8,89.4,3.121,1.678,0,0,0,374.9,100);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(166).to({_off:false},0).wait(145));

	// Layer 6
	this.instance_9 = new lib.s6white();
	this.instance_9.setTransform(164.5,101.9,1.482,1.482,0,0,0,84,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(311));

	// samsun white
	this.instance_10 = new lib.samsungwhite();
	this.instance_10.setTransform(105.3,63.9,1.482,1.482,0,0,0,43,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(311));

	// next white
	this.instance_11 = new lib.next_is_now();
	this.instance_11.setTransform(622,621.7,1.44,1.44);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(311));

	// Layer 8
	this.instance_12 = new lib.text();
	this.instance_12.setTransform(129,181.5,1,1,0,0,0,158,37.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(49).to({_off:false},0).to({x:203,y:180.7,alpha:1},19).to({_off:true},118).wait(125));

	// phone blank
	this.instance_13 = new lib.bankphone("single",0);
	this.instance_13.setTransform(700,1022.1,1,1,0,0,0,56,91.5);
	this.instance_13._off = true;

	this.instance_14 = new lib.telhi_1("synched",0,false);
	this.instance_14.setTransform(653,495.8,1,1,0,0,0,56,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[]},155).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).wait(1).to({regX:39,regY:145.4,scaleX:0.99,scaleY:0.99,x:682.6,y:894},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:682.5,y:821.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:682.3,y:768},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:682.2,y:723.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:682.1,y:686},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:652.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:682,y:623.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:681.9,y:596.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:571.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:681.8,y:549.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:528.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:681.7,y:509.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:492.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:475.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:681.6,y:461},0).wait(1).to({scaleY:0.96,y:447.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:434.4},0).wait(1).to({scaleX:0.96,y:422.8},0).wait(1).to({scaleY:0.96,x:681.5,y:412.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:402.4},0).wait(1).to({y:393.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:385.8},0).wait(1).to({y:378.9},0).wait(1).to({scaleX:0.96,x:681.4,y:372.9},0).wait(1).to({scaleY:0.96,y:367.8},0).wait(1).to({y:363.6},0).wait(1).to({y:360.3},0).wait(1).to({scaleX:0.96,y:357.8},0).wait(1).to({regX:56,regY:91.5,x:697.7,y:304.8},0).to({_off:true,scaleX:1,scaleY:1,x:653,y:495.8,mode:"synched",loop:false},1).wait(280));

	// disc
	this.instance_15 = new lib.chargerhi_1();
	this.instance_15.setTransform(-12.6,374.6,0.629,0.629,98.3,0,0,70.5,70);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(16).to({_off:false},0).wait(1).to({regX:98.5,regY:-6.9,scaleX:0.63,scaleY:0.63,rotation:84.2,x:113.2,y:395},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:73.8,x:170,y:391.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:65.5,x:214.7,y:388.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:58.4,x:251.7,y:386.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:52.2,x:283.2,y:384.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:46.8,x:310.6,y:383.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:41.9,x:334.8,y:382.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:37.6,x:356.4,y:381.4},0).wait(1).to({rotation:33.6,x:375.8,y:380.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:29.9,x:393.2,y:380.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:26.6,x:409.1,y:380.1},0).wait(1).to({rotation:23.6,x:423.6,y:380},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:20.8,x:436.7,y:379.9},0).wait(1).to({rotation:18.2,x:448.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:15.9,x:459.7,y:380.1},0).wait(1).to({rotation:13.7,x:469.7,y:380.2},0).wait(1).to({rotation:11.7,x:478.8,y:380.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:9.9,x:487.2,y:380.6},0).wait(1).to({rotation:8.3,x:494.6,y:380.9},0).wait(1).to({rotation:6.8,x:501.4,y:381.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:5.5,x:507.4,y:381.4},0).wait(1).to({rotation:4.3,x:512.7,y:381.6},0).wait(1).to({rotation:3.3,x:517.4,y:381.9},0).wait(1).to({rotation:2.4,x:521.4,y:382.1},0).wait(1).to({rotation:1.7,x:524.8,y:382.3},0).wait(1).to({rotation:1.1,x:527.6,y:382.4},0).wait(1).to({rotation:0.6,x:529.8,y:382.5},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:0.3,x:531.3,y:382.6},0).wait(1).to({rotation:0.1,x:532.2,y:382.7},0).wait(1).to({regX:70.5,regY:70,rotation:0,x:515.4,y:429.7},0).to({_off:true},140).wait(125));

	// Layer 7
	this.instance_16 = new lib.wavesloop2("synched",0);
	this.instance_16.setTransform(527.8,383.8,1.326,1.326,0,0,0,212.1,212.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(46).to({_off:false},0).wait(84).to({scaleX:1.67,scaleY:1.67,x:529.7,y:382.8,startPosition:4},0).to({scaleX:1.62,scaleY:1.62,x:530.7,y:384,alpha:0.891,startPosition:5},1).to({scaleX:1.44,scaleY:1.44,x:524.5,y:355.6,alpha:0,startPosition:13},8).wait(172));

	// bgr
	this.instance_17 = new lib.bgr();
	this.instance_17.setTransform(1150.1,91.2,3.067,0.907,0,0,0,375,100);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(459,339,922.1,682);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;