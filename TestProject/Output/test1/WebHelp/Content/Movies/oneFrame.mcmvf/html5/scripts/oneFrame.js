var stage;

var Movies = [
	"oneFrame.htm",
];

var MovieIndex = 0;

var MovieProps = {
	frame1 : { pause: false, frameStart: "0", frameDuration : "10000", transitionEffect : "", transitionDirection : "", transitionDuration : "", hasVideo : false }
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
          height: 160,
          cornerRadius: 0,
          rotation: 0,
          offset: [135, 80],
          fill: {type: "solid", color1: "#FFFFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "regular variables parent folder\nsingle\nparent\n\nDT variables parent folder\nsingle 02:14\nDT parent 02:14", x: 10, y: 10, width: 270, height: 160, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
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
          fill: {type: "solid", color1: "#FFFFFF"},
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
          fill: {type: "solid", color1: "#FFFFFF"},
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
          fill: {type: "solid", color1: "#FFFFFF"},
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
          fill: {type: "solid", color1: "#FFFFFF"},
          opacity: 1,
          stroke: "Black",
          strokeWidth: 1,
          shadow: {},
          start: 0,
          text: {text: "sub green", x: 370, y: 290, width: 150, height: 90, align: "center", fontSize: 16, fontFamily: "Arial", fontStyle: "normal", fontWeight: "normal", textFill: "Black", verticalAlign: "middle"},
          imageWidth: 0,
          imageHeight: 0,
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

        Movie.lastFrameIndex = 1;
        LoadAndStartMovie();
    }
});


