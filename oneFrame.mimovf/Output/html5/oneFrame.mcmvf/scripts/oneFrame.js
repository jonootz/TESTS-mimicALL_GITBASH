var stage;

var Movies = [
	"oneFrame.htm",
];

var MovieIndex = 0;

var MovieProps = {
	frame1 : { pause: false, frameStart: "0", frameDuration : "10000", transitionEffect : "", transitionDirection : "", transitionDuration : "", hasVideo : false },
	frame2 : { pause: false, frameStart: "10000", frameDuration : "10000", transitionEffect : "", transitionDirection : "", transitionDuration : "", hasVideo : false },
	frame3 : { pause: false, frameStart: "20000", frameDuration : "10000", transitionEffect : "", transitionDirection : "", transitionDuration : "", hasVideo : false }
};

var MovieShapes = {
	frame1: [ 
        {
          shape: "background",
          id: -1,
          x: 0,
          y: 0,
          width: 618,
          height: 526,
          cornerRadius: 0,
          rotation: 0,
          offset: [309, 263],
          fill: {type: "solid", color1: "DarkGray"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {},
		imageSource: "images/oneFrame/frame0.png",
          duration: 0
	   },
        {
          shape: "rect",
          id: 0,
          x: 10,
          y: 10,
          width: 270,
          height: 370,
          cornerRadius: 0,
          rotation: 0,
          offset: [135, 185],
          fill: {type: "solid", color1: "#FFFFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {x: 10, y: 10, width: 270, height: 370, verticalAlign: "middle"},imageSource: "images/oneFrame/text35f608775774b123a53f0717b031563362786750.png",
          imageWidth: 270,
          imageHeight: 370,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 1,
          x: 360,
          y: 20,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#FFE4E1"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "red", x: 360, y: 20, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 2,
          x: 370,
          y: 110,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#E0FFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "blue", x: 370, y: 110, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 3,
          x: 360,
          y: 200,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F5F5DC"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub yellow", x: 360, y: 200, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 4,
          x: 370,
          y: 290,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F0FFF0"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub green", x: 370, y: 290, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "path",
          id: 5,
          x: 507,
          y: 459,
          width: 89,
          height: 20,
          rotation: 0,
          offset: [44.5, 10],
          fill: {type: "solid", color1: "#32CD32"},
          opacity: 1,
          stroke: "#000000",
          strokeWidth: 0,
          shadow: {color: "Black", offset: [2, 2], opacity: 1},
          text: {},
		clickAction: {action: "GotoNext", actionArg: "", doubleClickEnabled: false},
          start: 0,
          
          imageWidth: 0,
          imageHeight: 0,
          data: [
			{type: "start", data: [507, 466]},
			{type: "line", data: [507, 469]},
			{type: "line", data: [507, 472]},
			{type: "line", data: [569, 472]},
			{type: "line", data: [569, 479]},
			{type: "line", data: [596, 469]},
			{type: "line", data: [569, 459]},
			{type: "line", data: [569, 466]},
			{type: "line", data: [507, 466]},
		  ],
          duration: 10000
	   }
	],
	frame2: [ 
        {
          shape: "background",
          id: -1,
          x: 0,
          y: 0,
          width: 618,
          height: 526,
          cornerRadius: 0,
          rotation: 0,
          offset: [309, 263],
          fill: {type: "solid", color1: "DarkGray"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {},
		imageSource: "images/oneFrame/frame1.png",
          duration: 0
	   },
        {
          shape: "rect",
          id: 0,
          x: 10,
          y: 10,
          width: 270,
          height: 370,
          cornerRadius: 0,
          rotation: 0,
          offset: [135, 185],
          fill: {type: "solid", color1: "#FFFFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {color: "Black", offset: [5, 5], opacity: 0.5},
          start: 0,
          text: {x: 10, y: 10, width: 270, height: 370, verticalAlign: "middle"},imageSource: "images/oneFrame/text35f608775774b123a53f0717b031563362786750.png",
          imageWidth: 270,
          imageHeight: 370,
          duration: 10000,
		inAnim: {effect: "fade", duration: 500}
	   },
        {
          shape: "rect",
          id: 1,
          x: 360,
          y: 20,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#FFE4E1"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "red", x: 360, y: 20, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000,
		animation: {effect: "move", xTo: 312, yTo: 14, duration : 10000}
	   },
        {
          shape: "rect",
          id: 2,
          x: 370,
          y: 110,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#E0FFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "blue", x: 370, y: 110, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000,
		animation: {effect: "move", xTo: 419, yTo: 97, duration : 10000}
	   },
        {
          shape: "rect",
          id: 3,
          x: 360,
          y: 200,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F5F5DC"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub yellow", x: 360, y: 200, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000,
		animation: {effect: "move", xTo: 328, yTo: 199, duration : 10000}
	   },
        {
          shape: "rect",
          id: 4,
          x: 370,
          y: 290,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F0FFF0"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub green", x: 370, y: 290, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000,
		animation: {effect: "move", xTo: 453, yTo: 293, duration : 10000}
	   },
        {
          shape: "path",
          id: 5,
          x: 507,
          y: 459,
          width: 89,
          height: 20,
          rotation: 0,
          offset: [44.5, 10],
          fill: {type: "solid", color1: "#32CD32"},
          opacity: 1,
          stroke: "#000000",
          strokeWidth: 0,
          shadow: {color: "Black", offset: [2, 2], opacity: 1},
          text: {},
		clickAction: {action: "GotoNext", actionArg: "", doubleClickEnabled: false},
          start: 0,
          
          imageWidth: 0,
          imageHeight: 0,
          data: [
			{type: "start", data: [507, 466]},
			{type: "line", data: [507, 469]},
			{type: "line", data: [507, 472]},
			{type: "line", data: [569, 472]},
			{type: "line", data: [569, 479]},
			{type: "line", data: [596, 469]},
			{type: "line", data: [569, 459]},
			{type: "line", data: [569, 466]},
			{type: "line", data: [507, 466]},
		  ],
          duration: 10000
	   },
        {
          shape: "path",
          id: 6,
          x: 23,
          y: 449,
          width: 84,
          height: 20,
          rotation: 0,
          offset: [42, 10],
          fill: {type: "solid", color1: "#FF0000"},
          opacity: 1,
          stroke: "#000000",
          strokeWidth: 1,
          shadow: {},
          text: {},
		clickAction: {action: "GotoPrevious", actionArg: "", doubleClickEnabled: false},
          start: 0,
          
          imageWidth: 0,
          imageHeight: 0,
          data: [
			{type: "start", data: [107, 462]},
			{type: "line", data: [107, 459]},
			{type: "line", data: [107, 456]},
			{type: "line", data: [47, 456]},
			{type: "line", data: [52, 449]},
			{type: "line", data: [23, 459]},
			{type: "line", data: [52, 469]},
			{type: "line", data: [47, 462]},
			{type: "line", data: [107, 462]},
		  ],
          duration: 10000
	   }
	],
	frame3: [ 
        {
          shape: "background",
          id: -1,
          x: 0,
          y: 0,
          width: 618,
          height: 526,
          cornerRadius: 0,
          rotation: 0,
          offset: [309, 263],
          fill: {type: "solid", color1: "DarkGray"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {},
		imageSource: "images/oneFrame/frame2.png",
          duration: 0
	   },
        {
          shape: "rect",
          id: 0,
          x: 10,
          y: 10,
          width: 270,
          height: 370,
          cornerRadius: 0,
          rotation: 0,
          offset: [135, 185],
          fill: {type: "solid", color1: "#FFFFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {x: 10, y: 10, width: 270, height: 370, verticalAlign: "middle"},imageSource: "images/oneFrame/text35f608775774b123a53f0717b031563362786750.png",
          imageWidth: 270,
          imageHeight: 370,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 1,
          x: 360,
          y: 20,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#FFE4E1"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "red", x: 360, y: 20, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 2,
          x: 370,
          y: 110,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#E0FFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "blue", x: 370, y: 110, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 3,
          x: 360,
          y: 200,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F5F5DC"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub yellow", x: 360, y: 200, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "rect",
          id: 4,
          x: 370,
          y: 290,
          width: 150,
          height: 90,
          cornerRadius: 0,
          rotation: 0,
          offset: [75, 45],
          fill: {type: "solid", color1: "#F0FFF0"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub green", x: 370, y: 290, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
          duration: 10000
	   },
        {
          shape: "path",
          id: 5,
          x: 579.9999,
          y: 448,
          width: 20,
          height: 33,
          rotation: 0,
          offset: [10, 16.5],
          fill: {type: "solid", color1: "#32CD32"},
          opacity: 1,
          stroke: "#000000",
          strokeWidth: 0,
          shadow: {color: "Black", offset: [2, 2], opacity: 1},
          text: {},
		clickAction: {action: "GotoFirst", actionArg: "", doubleClickEnabled: false},
          start: 0,
          
          imageWidth: 0,
          imageHeight: 0,
          data: [
			{type: "start", data: [587, 481]},
			{type: "line", data: [590, 481]},
			{type: "line", data: [593, 481]},
			{type: "line", data: [592.9999, 475]},
			{type: "line", data: [599.9999, 475]},
			{type: "line", data: [589.9999, 448]},
			{type: "line", data: [579.9999, 475]},
			{type: "line", data: [586.9999, 475]},
			{type: "line", data: [587, 481]},
		  ],
          duration: 10000
	   },
        {
          shape: "path",
          id: 6,
          x: 23,
          y: 449,
          width: 84,
          height: 20,
          rotation: 0,
          offset: [42, 10],
          fill: {type: "solid", color1: "#FF0000"},
          opacity: 1,
          stroke: "#000000",
          strokeWidth: 1,
          shadow: {},
          text: {},
		clickAction: {action: "GotoPrevious", actionArg: "", doubleClickEnabled: false},
          start: 0,
          
          imageWidth: 0,
          imageHeight: 0,
          data: [
			{type: "start", data: [107, 462]},
			{type: "line", data: [107, 459]},
			{type: "line", data: [107, 456]},
			{type: "line", data: [47, 456]},
			{type: "line", data: [52, 449]},
			{type: "line", data: [23, 459]},
			{type: "line", data: [52, 469]},
			{type: "line", data: [47, 462]},
			{type: "line", data: [107, 462]},
		  ],
          duration: 10000
	   }
	]
};



var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

    
var VerifyBrowserCompatibility = function(generateWebM, generateH264){
    $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
    var ua = $.browser;
    var compatible;

    if (navigator.userAgent.match(/iPhone|iPod/i)){
        $("#movie_media").empty();
        $("#movie_media").attr("src", "videos/oneFrame/oneFrame.mp4");
        return false;
    }

    if (ua.msie && (!Modernizr.canvas || !Modernizr.video)){
        $("div.incompatibleWrapper").css("visibility", "visible");
        $("div.incompatibleOverlay").html("This version of Microsoft Internet Explorer does not support the Html5 standards required to play this movie. Please try with <strong>Internet Explorer 9 or later.</strong>");
        return false;
    }

    if (generateWebM && generateH264){
        compatible = true;
    } else if (generateWebM) {
        compatible = (ua.mozilla || ua.opera || ua.chrome);
        if (!compatible){
            $("div.incompatibleWrapper").css("visibility", "visible");
            $("div.incompatibleOverlay").html("This browser does not support the WebM output format. Please try the latest version of one of the following browsers:<br/><br/>Google Chrome<br/>Mozilla Firefox<br/>Opera");
        }
        return compatible;
    } else if (generateH264){
        compatible = (ua.msie || ua.webkit);
        if (!compatible){
            $("div.incompatibleWrapper").css("visibility", "visible");
            $("div.incompatibleOverlay").html("This browser does not support the H.264 output format. Please try the latest version of one of the following browsers:<br/><br/>Google Chrome<br/>Microsoft Internet Explorer<br/>Apple Safari (requires Quicktime on Windows)");
        }
    }
    
    return compatible;
}
 
           
var LoadAndStartMovie = function(){
    Movie.DownloadMedia(function () {
        if (Movie.isRecording()) {
            Movie.Initialize();
        }
        else {
            if (isMobile.any()){
                $("div.playOverlayWrapper").css("visibility", "visible");
                $("a.playButton").removeClass("playing").addClass("paused");
                $(".volumeWrapper").css("display", "none");
            } else {
                StartMovie();
            }
        }
    });
};


var StartMobile = function(){
    $("div.playOverlayWrapper").css("visibility", "hidden");
    
    StartMovie();
};


var StartMovie = function(){
    Movie.Initialize();
    if (Movie.video != null && !isMobile.any()) {
        Movie.video.addEventListener("canplay", OnCanPlayThrough, false);
        Movie.video.addEventListener("load", OnCanPlayThrough, false);
        Movie.video.addEventListener("error", OnError, false);
        if (Movie.video.readyState == 4){
            OnCanPlayThrough();
        }
        else {
            Movie.Play();
        }
    } else {
        Movie.Play();
    }
};

var OnCanPlayThrough = function(){
    Movie.video.removeEventListener("canplay", OnCanPlayThrough, false);
    Movie.video.removeEventListener("load", OnCanPlayThrough, false);
    Movie.Play();
}

var OnError = function(error){
    alert(error);
}


$(document).ready(function(){
    if ((typeof Movie !== 'undefined' && Movie.isRecording()) || VerifyBrowserCompatibility(true, false)){
        stage = new Kinetic.Stage({
            container: "MimicMovieHost",
            width: 618,
            height: 526
        });

        stage.getContent().style.position = "absolute";

        Movie.lastFrameIndex = 3;
        LoadAndStartMovie();
    }
});


