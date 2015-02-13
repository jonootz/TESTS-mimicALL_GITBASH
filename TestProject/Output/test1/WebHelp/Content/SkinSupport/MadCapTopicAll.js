/*
* Copyright MadCap Software
* http://www.madcapsoftware.com/
*
* v10.0.0.0
*/
var MadCap={};MadCap.CreateNamespace=function(b){var d=b.split(".");var e=MadCap;for(var a=0,c=d.length;a<c;a++){var b=d[a];if(b=="MadCap"){continue}if(typeof(e[b])!="undefined"){e=e[b];continue}e[b]={};e=e[b]}return e};if(!Object.create){Object.create=function(b){if(arguments.length>1){throw new Error("Object.create implementation only accepts the first parameter.")}function a(){}a.prototype=b;return new a()}}MadCap.Extend=function(a,b){b.prototype=Object.create(a.prototype);b.prototype.constructor=b;b.prototype.base=a.prototype};MadCap.Exception=function(b,a){this.Number=b;this.Message=a};MadCap.IsIOS=function(){return MadCap.String.Contains(navigator.userAgent,"iphone")||MadCap.String.Contains(navigator.userAgent,"ipad")};(function(){var a=MadCap.CreateNamespace("String");a.IsNullOrEmpty=function(b){if(b==null){return true}if(b.length==0){return true}return false};a.StartsWith=function(f,e,c){if(e==null){return false}if(f.length<e.length){return false}var d=f;var b=e;if(!c){d=d.toLowerCase();b=b.toLowerCase()}if(d.substring(0,b.length)==b){return true}else{return false}};a.EndsWith=function(f,e,c){if(e==null){return false}if(f.length<e.length){return false}var d=f;var b=e;if(!c){d=d.toLowerCase();b=b.toLowerCase()}if(d.substring(d.length-b.length)==b){return true}else{return false}};a.Contains=function(h,g,c){var d=c?h:h.toLowerCase();if($.isArray(g)){for(var e=0,f=g.length;e<f;e++){var b=c?g[e]:g[e].toLowerCase();if(d.indexOf(b)!=-1){return true}}return false}var b=c?g:g.toLowerCase();return d.indexOf(b)!=-1};a.Trim=function(b){return a.TrimRight(a.TrimLeft(b))};a.TrimLeft=function(d){var b=0;var c=d.length;for(b=0;b<c&&d.charAt(b)==" ";b++){}return d.substring(b,d.length)};a.TrimRight=function(c){var b=0;for(b=c.length-1;b>=0&&c.charAt(b)==" ";b--){}return c.substring(0,b+1)};a.ToBool=function(e,c){var b=c;if(e!=null){var d=e.toLowerCase();if(d!="true"&&d!="false"&&d!="1"&&d!="0"&&d!="yes"&&d!="no"){throw new MadCap.Exception(-1,"The string can not be converted to a boolean value.")}b=d=="true"||d=="1"||d=="yes"}return b};a.ToInt=function(d,b){var c=b;if(d!=null){c=parseInt(d)}return c};a.ToDashed=function(b){return b.replace(/([A-Z])/g,function(c){return"-"+c.toLowerCase()})}})();(function(){MadCap.CreateNamespace("DEBUG");var a=MadCap.DEBUG;a.Log={};a.Log.Create=function(){var e=document.createElement("div");e.setAttribute("id","DEBUG_Log");var f=document.createElement("div");$(f).addClass("MCDebugLogHeader");f.appendChild(document.createTextNode("Log Console"));e.appendChild(f);var d=document.createElement("div");$(d).addClass("MCDebugLogBody");e.appendChild(d);var c=document.createElement("div");$(c).addClass("MCDebugLogFooter");e.appendChild(c);document.body.appendChild(e);var b=new MadCap.DragDrop(e,f)};a.Log._LoadTime=new Date();a.Log.AddLine=function(d){if(parent!=window){MadCap.Utilities.CrossFrame.PostMessageRequest(parent,"DEBUG-AddLine",[d],null);return}var f=document.getElementById("DEBUG_Log");if(f==null){return}var c=new Date();var h=c-a.Log._LoadTime;var e=document.createElement("p");$(e).addClass("MCDebugLogEntryTime");e.appendChild(document.createTextNode(h+"ms "+c.toLocaleTimeString()));var b=document.createElement("div");$(b).addClass("MCDebugLogEntry");b.appendChild(e);b.appendChild(document.createTextNode(d));var g=MadCap.Dom.GetElementsByClassName("MCDebugLogBody","div",f)[0];g.insertBefore(b,g.firstChild)}})();/*
* Copyright MadCap Software
* http://www.madcapsoftware.com/
*
* v10.0.0.0
*/
(function(a){a.fn.fitVids=function(c){var e={customSelector:null};var d=document.createElement("div"),b=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];d.className="fit-vids-style";d.innerHTML="&shy;<style>.fluid-width-video-wrapper {width: 100%;position: relative;padding: 0;} .fluid-width-video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>";b.parentNode.insertBefore(d,b);if(c){a.extend(e,c)}return this.each(function(){var f=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.kickstarter.com']"];if(e.customSelector){f.push(e.customSelector)}var g=a(this).find(f.join(","));g.each(function(){var j=a(this);if(j.parent(".fluid-width-video-wrapper").length){return}var m=j.attr("height")&&!isNaN(parseInt(j.attr("height"),10))?parseInt(j.attr("height"),10):j.height(),l=!isNaN(parseInt(j.attr("width"),10))?parseInt(j.attr("width"),10):j.width(),h=m/l;if(!j.attr("id")){var k="fitvid"+Math.floor(Math.random()*999999);j.attr("id",k)}j.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",h*100+"%");j.removeAttr("height").removeAttr("width")})})}})(jQuery);!function(a){var c={},b={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4000,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},slideshowClass:""};a.fn.MCSlider=function(aq){if(0==this.length){return this}if(this.length>1){return this.each(function(){a(this).MCSlider(aq)}),this}var ap={},am=this;c.el=this;var aB=a(window).width(),at=a(window).height(),ay=function(){ap.settings=a.extend({},b,aq),ap.settings.slideWidth=parseInt(ap.settings.slideWidth),ap.children=am.children(ap.settings.slideSelector),ap.children.length<ap.settings.minSlides&&(ap.settings.minSlides=ap.children.length),ap.children.length<ap.settings.maxSlides&&(ap.settings.maxSlides=ap.children.length),ap.settings.randomStart&&(ap.settings.startSlide=Math.floor(Math.random()*ap.children.length)),ap.active={index:ap.settings.startSlide},ap.carousel=ap.settings.minSlides>1||ap.settings.maxSlides>1,ap.carousel&&(ap.settings.preloadImages="all"),ap.minThreshold=ap.settings.minSlides*ap.settings.slideWidth+(ap.settings.minSlides-1)*ap.settings.slideMargin,ap.maxThreshold=ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin,ap.working=!1,ap.controls={},ap.interval=null,ap.animProp="vertical"==ap.settings.mode?"top":"left",ap.usingCSS=ap.settings.useCSS&&"fade"!=ap.settings.mode&&function(){var f=document.createElement("div"),g=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var d in g){if(void 0!==f.style[g[d]]){return ap.cssPrefix=g[d].replace("Perspective","").toLowerCase(),ap.animProp="-"+ap.cssPrefix+"-transform",!0}}return !1}(),"vertical"==ap.settings.mode&&(ap.settings.maxSlides=ap.settings.minSlides),am.data("origStyle",am.attr("style")),am.children(ap.settings.slideSelector).each(function(){a(this).data("origStyle",a(this).attr("style"))}),az()},az=function(){am.wrap('<div class="mc-wrapper"><div class="mc-viewport '+ap.settings.slideshowClass+'"></div></div>'),ap.viewport=am.parent(),ap.loader=a('<div class="mc-loading" />'),ap.viewport.prepend(ap.loader),am.css({width:"horizontal"==ap.settings.mode?100*ap.children.length+215+"%":"auto",position:"relative"}),ap.usingCSS&&ap.settings.easing?am.css("-"+ap.cssPrefix+"-transition-timing-function",ap.settings.easing):ap.settings.easing||(ap.settings.easing="swing"),ax(),ap.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),ap.viewport.parent().css({maxWidth:ak()}),ap.settings.pager||ap.viewport.parent().css({margin:"0 auto 0px"}),ap.children.css({"float":"horizontal"==ap.settings.mode?"left":"none",listStyle:"none",position:"relative"}),ap.children.css("width",al()),"horizontal"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginRight",ap.settings.slideMargin),"vertical"==ap.settings.mode&&ap.settings.slideMargin>0&&ap.children.css("marginBottom",ap.settings.slideMargin),"fade"==ap.settings.mode&&(ap.children.css({position:"absolute",zIndex:0,display:"none"}),ap.children.eq(ap.settings.startSlide).css({zIndex:50,display:"block"})),ap.controls.el=a('<div class="mc-controls" />'),ap.settings.captions&&J(),ap.active.last=ap.settings.startSlide==ai()-1,ap.settings.video&&am.fitVids();var d=ap.children.eq(ap.settings.startSlide);"all"==ap.settings.preloadImages&&(d=ap.children),ap.settings.ticker?ap.settings.pager=!1:(ap.settings.pager&&F(),ap.settings.controls&&ad(),ap.settings.auto&&ap.settings.autoControls&&ab(),(ap.settings.controls||ap.settings.autoControls||ap.settings.pager)&&ap.viewport.after(ap.controls.el)),aw(d,av)},aw=function(g,d){var f=g.find("img, iframe").length;if(0==f){return d(),void 0}var h=0;g.find("img, iframe").each(function(){a(this).one("load",function(){++h==f&&d()}).each(function(){this.complete&&a(this).load()})})},av=function(){if(ap.settings.infiniteLoop&&"fade"!=ap.settings.mode&&!ap.settings.ticker){var g="vertical"==ap.settings.mode?ap.settings.minSlides:ap.settings.maxSlides,d=ap.children.slice(0,g).clone().addClass("mc-clone"),f=ap.children.slice(-g).clone().addClass("mc-clone");am.append(d).prepend(f)}ap.loader.remove(),G(),"vertical"==ap.settings.mode&&(ap.settings.adaptiveHeight=!0),ap.viewport.height(ao()),am.redrawSlider(),ap.settings.onSliderLoad(ap.active.index),ap.initialized=!0,ap.settings.responsive&&a(window).bind("resize",ae),ap.settings.auto&&ap.settings.autoStart&&aa(),ap.settings.ticker&&U(),ap.settings.pager&&Z(ap.settings.startSlide),ap.settings.controls&&s(),ap.settings.touchEnabled&&!ap.settings.ticker&&K()},ao=function(){var f=0,d=a();if("vertical"==ap.settings.mode||ap.settings.adaptiveHeight){if(ap.carousel){var g=1==ap.settings.moveSlides?ap.active.index:ap.active.index*ar();for(d=ap.children.eq(g),i=1;i<=ap.settings.maxSlides-1;i++){d=g+i>=ap.children.length?d.add(ap.children.eq(i-1)):d.add(ap.children.eq(g+i))}}else{d=ap.children.eq(ap.active.index)}}else{d=ap.children}return"vertical"==ap.settings.mode?(d.each(function(){f+=a(this).outerHeight()}),ap.settings.slideMargin>0&&(f+=ap.settings.slideMargin*(ap.settings.minSlides-1))):f=Math.max.apply(Math,d.map(function(){return a(this).outerHeight(!1)}).get()),f},ak=function(){var d="100%";return ap.settings.slideWidth>0&&(d="horizontal"==ap.settings.mode?ap.settings.maxSlides*ap.settings.slideWidth+(ap.settings.maxSlides-1)*ap.settings.slideMargin:ap.settings.slideWidth),d},al=function(){var d=ap.settings.slideWidth,f=ap.viewport.width();return 0==ap.settings.slideWidth||ap.settings.slideWidth>f&&!ap.carousel||"vertical"==ap.settings.mode?d=f:ap.settings.maxSlides>1&&"horizontal"==ap.settings.mode&&(f>ap.maxThreshold||f<ap.minThreshold&&(d=(f-ap.settings.slideMargin*(ap.settings.minSlides-1))/ap.settings.minSlides)),d},ax=function(){var d=1;if("horizontal"==ap.settings.mode&&ap.settings.slideWidth>0){if(ap.viewport.width()<ap.minThreshold){d=ap.settings.minSlides}else{if(ap.viewport.width()>ap.maxThreshold){d=ap.settings.maxSlides}else{var f=ap.children.first().width();d=Math.floor(ap.viewport.width()/f)}}}else{"vertical"==ap.settings.mode&&(d=ap.settings.minSlides)}return d},ai=function(){var f=0;if(ap.settings.moveSlides>0){if(ap.settings.infiniteLoop){f=ap.children.length/ar()}else{for(var g=0,d=0;g<ap.children.length;){++f,g=d+ax(),d+=ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()}}}else{f=Math.ceil(ap.children.length/ax())}return f},ar=function(){return ap.settings.moveSlides>0&&ap.settings.moveSlides<=ax()?ap.settings.moveSlides:ax()},G=function(){if(ap.children.length>ap.settings.maxSlides&&ap.active.last&&!ap.settings.infiniteLoop){if("horizontal"==ap.settings.mode){var f=ap.children.last(),g=f.position();aA(-(g.left-(ap.viewport.width()-f.width())),"reset",0)}else{if("vertical"==ap.settings.mode){var d=ap.children.length-ap.settings.minSlides,g=ap.children.eq(d).position();aA(-g.top,"reset",0)}}}else{var g=ap.children.eq(ap.active.index*ar()).position();ap.active.index==ai()-1&&(ap.active.last=!0),void 0!=g&&("horizontal"==ap.settings.mode?aA(-g.left,"reset",0):"vertical"==ap.settings.mode&&aA(-g.top,"reset",0))}},aA=function(g,k,f,h){if(ap.usingCSS){var l="vertical"==ap.settings.mode?"translate3d(0, "+g+"px, 0)":"translate3d("+g+"px, 0, 0)";am.css("-"+ap.cssPrefix+"-transition-duration",f/1000+"s"),"slide"==k?(am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),ac()})):"reset"==k?am.css(ap.animProp,l):"ticker"==k&&(am.css("-"+ap.cssPrefix+"-transition-timing-function","linear"),am.css(ap.animProp,l),am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),aA(h.resetValue,"reset",0),Q()}))}else{var d={};d[ap.animProp]=g,"slide"==k?am.animate(d,f,ap.settings.easing,function(){ac()}):"reset"==k?am.css(ap.animProp,g):"ticker"==k&&am.animate(d,speed,"linear",function(){aA(h.resetValue,"reset",0),Q()})}},aj=function(){for(var g="",d=ai(),f=0;d>f;f++){var h="";ap.settings.buildPager&&a.isFunction(ap.settings.buildPager)?(h=ap.settings.buildPager(f),ap.pagerEl.addClass("mc-custom-pager")):(h=f+1,ap.pagerEl.addClass("mc-default-pager")),g+='<div class="mc-pager-item"><a data-slide-index="'+f+'" class="mc-pager-link">'+h+"</a></div>"}ap.pagerEl.html(g)},F=function(){ap.settings.pagerCustom?ap.pagerEl=a(ap.settings.pagerCustom):(ap.pagerEl=a('<div class="mc-pager" />'),ap.settings.pagerSelector?a(ap.settings.pagerSelector).html(ap.pagerEl):ap.controls.el.addClass("mc-has-pager").append(ap.pagerEl),aj()),ap.pagerEl.delegate("a","click",an)},ad=function(){ap.controls.next=a('<a class="mc-next">'+ap.settings.nextText+"</a>"),ap.controls.prev=a('<a class="mc-prev">'+ap.settings.prevText+"</a>"),ap.controls.next.bind("click",ah),ap.controls.prev.bind("click",ag),ap.settings.nextSelector&&a(ap.settings.nextSelector).append(ap.controls.next),ap.settings.prevSelector&&a(ap.settings.prevSelector).append(ap.controls.prev),ap.settings.nextSelector||ap.settings.prevSelector||(ap.controls.directionEl=a('<div class="mc-controls-direction" />'),ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next),ap.controls.el.addClass("mc-has-controls-direction").append(ap.controls.directionEl))},ab=function(){ap.controls.start=a('<div class="mc-controls-auto-item"><a class="mc-start">'+ap.settings.startText+"</a></div>"),ap.controls.stop=a('<div class="mc-controls-auto-item"><a class="mc-stop">'+ap.settings.stopText+"</a></div>"),ap.controls.autoEl=a('<div class="mc-controls-auto" />'),ap.controls.autoEl.delegate(".mc-start","click",au),ap.controls.autoEl.delegate(".mc-stop","click",R),ap.settings.autoControlsCombine?ap.controls.autoEl.append(ap.controls.start):ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop),ap.settings.autoControlsSelector?a(ap.settings.autoControlsSelector).html(ap.controls.autoEl):ap.controls.el.addClass("mc-has-controls-auto").append(ap.controls.autoEl),af(ap.settings.autoStart?"stop":"start")},J=function(){ap.children.each(function(){var d=a(this).attr("title");void 0!=d&&(""+d).length&&a(this).append('<div class="mc-caption"><span>'+d+"</span></div>")})},ah=function(d){ap.settings.auto&&am.stopAuto(),am.goToNextSlide(),d.preventDefault()},ag=function(d){ap.settings.auto&&am.stopAuto(),am.goToPrevSlide(),d.preventDefault()},au=function(d){am.startAuto(),d.preventDefault()},R=function(d){am.stopAuto(),d.preventDefault()},an=function(g){ap.settings.auto&&am.stopAuto();var d=a(g.currentTarget),f=parseInt(d.attr("data-slide-index"));f!=ap.active.index&&am.goToSlide(f),g.preventDefault()},Z=function(f){var d=ap.children.length;return"short"==ap.settings.pagerType?(ap.settings.maxSlides>1&&(d=Math.ceil(ap.children.length/ap.settings.maxSlides)),ap.pagerEl.html(f+1+ap.settings.pagerShortSeparator+d),void 0):(ap.pagerEl.find("a").removeClass("active"),ap.pagerEl.each(function(g,h){a(h).find("a").eq(f).addClass("active")}),void 0)},ac=function(){if(ap.settings.infiniteLoop){var d="";0==ap.active.index?d=ap.children.eq(0).position():ap.active.index==ai()-1&&ap.carousel?d=ap.children.eq((ai()-1)*ar()).position():ap.active.index==ap.children.length-1&&(d=ap.children.eq(ap.children.length-1).position()),"horizontal"==ap.settings.mode?aA(-d.left,"reset",0):"vertical"==ap.settings.mode&&aA(-d.top,"reset",0)}ap.working=!1,ap.settings.onSlideAfter(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index)},af=function(d){ap.settings.autoControlsCombine?ap.controls.autoEl.html(ap.controls[d]):(ap.controls.autoEl.find("a").removeClass("active"),ap.controls.autoEl.find("a:not(.mc-"+d+")").addClass("active"))},s=function(){1==ai()?(ap.controls.prev.addClass("disabled"),ap.controls.next.addClass("disabled")):!ap.settings.infiniteLoop&&ap.settings.hideControlOnEnd&&(0==ap.active.index?(ap.controls.prev.addClass("disabled"),ap.controls.next.removeClass("disabled")):ap.active.index==ai()-1?(ap.controls.next.addClass("disabled"),ap.controls.prev.removeClass("disabled")):(ap.controls.prev.removeClass("disabled"),ap.controls.next.removeClass("disabled")))},aa=function(){ap.settings.autoDelay>0?setTimeout(am.startAuto,ap.settings.autoDelay):am.startAuto(),ap.settings.autoHover&&am.hover(function(){ap.interval&&(am.stopAuto(!0),ap.autoPaused=!0)},function(){ap.autoPaused&&(am.startAuto(!0),ap.autoPaused=null)})},U=function(){var f=0;if("next"==ap.settings.autoDirection){am.append(ap.children.clone().addClass("mc-clone"))}else{am.prepend(ap.children.clone().addClass("mc-clone"));var d=ap.children.first().position();f="horizontal"==ap.settings.mode?-d.left:-d.top}aA(f,"reset",0),ap.settings.pager=!1,ap.settings.controls=!1,ap.settings.autoControls=!1,ap.settings.tickerHover&&!ap.usingCSS&&ap.viewport.hover(function(){am.stop()},function(){var k=0;ap.children.each(function(){k+="horizontal"==ap.settings.mode?a(this).outerWidth(!0):a(this).outerHeight(!0)});var g=ap.settings.speed/k,h="horizontal"==ap.settings.mode?"left":"top",l=g*(k-Math.abs(parseInt(am.css(h))));Q(l)}),Q()},Q=function(g){speed=g?g:ap.settings.speed;var k={left:0,top:0},f={left:0,top:0};"next"==ap.settings.autoDirection?k=am.find(".mc-clone").first().position():f=ap.children.first().position();var h="horizontal"==ap.settings.mode?-k.left:-k.top,l="horizontal"==ap.settings.mode?-f.left:-f.top,d={resetValue:l};aA(h,"ticker",speed,d)},K=function(){ap.touch={start:{x:0,y:0},end:{x:0,y:0}},ap.viewport.bind("touchstart",j)},j=function(d){if(ap.working){d.preventDefault()}else{ap.touch.originalPos=am.position();var f=d.originalEvent;ap.touch.start.x=f.changedTouches[0].pageX,ap.touch.start.y=f.changedTouches[0].pageY,ap.viewport.bind("touchmove",e),ap.viewport.bind("touchend",t)}},e=function(f){var k=f.originalEvent,d=Math.abs(k.changedTouches[0].pageX-ap.touch.start.x),g=Math.abs(k.changedTouches[0].pageY-ap.touch.start.y);if(3*d>g&&ap.settings.preventDefaultSwipeX?f.preventDefault():3*g>d&&ap.settings.preventDefaultSwipeY&&f.preventDefault(),"fade"!=ap.settings.mode&&ap.settings.oneToOneTouch){var l=0;if("horizontal"==ap.settings.mode){var h=k.changedTouches[0].pageX-ap.touch.start.x;l=ap.touch.originalPos.left+h}else{var h=k.changedTouches[0].pageY-ap.touch.start.y;l=ap.touch.originalPos.top+h}aA(l,"reset",0)}},t=function(f){ap.viewport.unbind("touchmove",e);var h=f.originalEvent,d=0;if(ap.touch.end.x=h.changedTouches[0].pageX,ap.touch.end.y=h.changedTouches[0].pageY,"fade"==ap.settings.mode){var g=Math.abs(ap.touch.start.x-ap.touch.end.x);g>=ap.settings.swipeThreshold&&(ap.touch.start.x>ap.touch.end.x?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto())}else{var g=0;"horizontal"==ap.settings.mode?(g=ap.touch.end.x-ap.touch.start.x,d=ap.touch.originalPos.left):(g=ap.touch.end.y-ap.touch.start.y,d=ap.touch.originalPos.top),!ap.settings.infiniteLoop&&(0==ap.active.index&&g>0||ap.active.last&&0>g)?aA(d,"reset",200):Math.abs(g)>=ap.settings.swipeThreshold?(0>g?am.goToNextSlide():am.goToPrevSlide(),am.stopAuto()):aA(d,"reset",200)}ap.viewport.unbind("touchend",t)},ae=function(){var f=a(window).width(),d=a(window).height();if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))){(aB!=f||at!=d)&&(aB=f,at=d,am.redrawSlider())}};return am.goToSlide=function(o,k){if(!ap.working&&ap.active.index!=o){if(ap.working=!0,ap.oldIndex=ap.active.index,ap.active.index=0>o?ai()-1:o>=ai()?0:o,ap.settings.onSlideBefore(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),"next"==k?ap.settings.onSlideNext(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index):"prev"==k&&ap.settings.onSlidePrev(ap.children.eq(ap.active.index),ap.oldIndex,ap.active.index),ap.active.last=ap.active.index>=ai()-1,ap.settings.pager&&Z(ap.active.index),ap.settings.controls&&s(),"fade"==ap.settings.mode){ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed),ap.children.filter(":visible").fadeOut(ap.settings.speed).css({zIndex:0}),ap.children.eq(ap.active.index).css("zIndex",51).fadeIn(ap.settings.speed,function(){a(this).css("zIndex",50),ac()})}else{ap.settings.adaptiveHeight&&ap.viewport.height()!=ao()&&ap.viewport.animate({height:ao()},ap.settings.adaptiveHeightSpeed);var u=0,f={left:0,top:0};if(!ap.settings.infiniteLoop&&ap.carousel&&ap.active.last){if("horizontal"==ap.settings.mode){var r=ap.children.eq(ap.children.length-1);f=r.position(),u=ap.viewport.width()-r.outerWidth()}else{var h=ap.children.length-ap.settings.minSlides;f=ap.children.eq(h).position()}}else{if(ap.carousel&&ap.active.last&&"prev"==k){var p=1==ap.settings.moveSlides?ap.settings.maxSlides-ar():(ai()-1)*ar()-(ap.children.length-ap.settings.maxSlides),r=am.children(".mc-clone").eq(p);f=r.position()}else{if("next"==k&&0==ap.active.index){f=am.find("> .mc-clone").eq(ap.settings.maxSlides).position(),ap.active.last=!1}else{if(o>=0){var q=o*ar();f=ap.children.eq(q).position()}}}}if("undefined"!=typeof f){var m="horizontal"==ap.settings.mode?-(f.left-u):-f.top;aA(m,"slide",ap.settings.speed)}}}},am.goToNextSlide=function(){if(ap.settings.infiniteLoop||!ap.active.last){var d=parseInt(ap.active.index)+1;am.goToSlide(d,"next")}},am.goToPrevSlide=function(){if(ap.settings.infiniteLoop||0!=ap.active.index){var d=parseInt(ap.active.index)-1;am.goToSlide(d,"prev")}},am.startAuto=function(d){ap.interval||(ap.interval=setInterval(function(){"next"==ap.settings.autoDirection?am.goToNextSlide():am.goToPrevSlide()},ap.settings.pause),ap.settings.autoControls&&1!=d&&af("stop"))},am.stopAuto=function(d){ap.interval&&(clearInterval(ap.interval),ap.interval=null,ap.settings.autoControls&&1!=d&&af("start"))},am.getCurrentSlide=function(){return ap.active.index},am.getSlideCount=function(){return ap.children.length},am.redrawSlider=function(){ap.children.add(am.find(".mc-clone")).outerWidth(al()),ap.viewport.css("height",ao()),ap.settings.ticker||G(),ap.active.last&&(ap.active.index=ai()-1),ap.active.index>=ai()&&(ap.active.last=!0),ap.settings.pager&&!ap.settings.pagerCustom&&(aj(),Z(ap.active.index))},am.destroySlider=function(){ap.initialized&&(ap.initialized=!1,a(".mc-clone",this).remove(),ap.children.each(function(){void 0!=a(this).data("origStyle")?a(this).attr("style",a(this).data("origStyle")):a(this).removeAttr("style")}),void 0!=a(this).data("origStyle")?this.attr("style",a(this).data("origStyle")):a(this).removeAttr("style"),a(this).unwrap().unwrap(),ap.controls.el&&ap.controls.el.remove(),ap.controls.next&&ap.controls.next.remove(),ap.controls.prev&&ap.controls.prev.remove(),ap.pagerEl&&ap.pagerEl.remove(),a(".mc-caption",this).remove(),ap.controls.autoEl&&ap.controls.autoEl.remove(),clearInterval(ap.interval),ap.settings.responsive&&a(window).unbind("resize",ae))},am.reloadSlider=function(d){void 0!=d&&(aq=d),am.destroySlider(),ay()},ay(),this}}(jQuery);(function(){var a=MadCap.CreateNamespace("Slideshow");a.Init=function(){var b;if($("html").attr("data-mc-target-type")){b=function(d,c){return d.attr("data-mc-"+c)}}else{b=function(d,c){return d.attr("madcap:"+c.replace("-",""))}}$(".MCSlider").each(function(n,f){var C=$(f);var j={};var r=f.className;var e=b(C,"random-start");var v=b(C,"infinite-loop");var o=b(C,"show-captions");var s=b(C,"controls");var u=b(C,"slide-width");var t=b(C,"adaptive-height");var h=b(C,"responsive");var g=b(C,"navigation");var p=true;var d=false;j.pagerCustom=null;if(g){if(g=="Thumbnails"){d=true;j.pagerCustom="#mc-pager"+(n+1).toString()}if(g=="None"){p=false}}var A=b(C,"auto-hover");var k=b(C,"auto-start");var B=b(C,"auto-controls");var c=b(C,"combine-controls");var y=b(C,"auto-direction");var z=b(C,"auto-delay");var q=b(C,"mode");var w=b(C,"speed");var l=b(C,"pause");var x=b(C,"video");if(r){j.slideshowClass=r}if(e){if("true"==e.toString().toLowerCase()){j.randomStart=true}else{if("false"==e.toString().toLowerCase()){j.randomStart=false}}}if(v){if("true"==v.toString().toLowerCase()){j.infiniteLoop=true}else{if("false"==v.toString().toLowerCase()){j.infiniteLoop=false;j.hideControlOnEnd=true}}}if(o){if("true"==o.toString().toLowerCase()){j.captions=true}else{if("false"==o.toString().toLowerCase()){j.captions=false}}}if(s){if("true"==s.toString().toLowerCase()){j.controls=true}else{if("false"==s.toString().toLowerCase()){j.controls=false}}}j.pager=p;j.thumbnails=d;if(u){j.slideWidth=u}if(t){if("true"==t.toString().toLowerCase()){j.adaptiveHeight=true}else{if("false"==t.toString().toLowerCase()){j.adaptiveHeight=false}}}if(h){if("true"==h.toString().toLowerCase()){j.responsive=true}else{if("false"==h.toString().toLowerCase()){j.responsive=false}}}var m=false;if(A){if("true"==A.toString().toLowerCase()){j.autoHover=true;m=true}else{if("false"==A.toString().toLowerCase()){j.autoHover=false}}}if(k){if("true"==k.toString().toLowerCase()){j.autoStart=true;m=true}else{if("false"==k.toString().toLowerCase()){j.autoStart=false}}}if(B){if("true"==B.toString().toLowerCase()){j.autoControls=true;j.autoControlsCombine=true;m=true}else{if("false"==B.toString().toLowerCase()){j.autoControls=false;j.autoControlsCombine=false}}}if(m){j.auto=true}if(y){j.autoDirection=y}if(z){j.autoDelay=z}if(q){j.mode=q}if(w){j.speed=w}if(l){j.pause=l}if(navigator.userAgent.indexOf("MSIE")!==-1){j.preloadImages="all"}j.video=true;j.useCSS=false;if(x){j.video=false}C.MCSlider(j)})}})();