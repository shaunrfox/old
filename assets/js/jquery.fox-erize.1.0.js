/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function($) {

    $.fn.raptorize = function(options) {

        //Yo' defaults
        var defaults = {  
            enterOn: 'click', //timer, konami-code, click
            delayTime: 5000 //time before raptor attacks on timer mode
            };  
        
        //Extend those options
        var options = $.extend(defaults, options); 
	
        return this.each(function() {

			var _this = $(this);
			var audioSupported = false;
			//Stupid Browser Checking which should be in jQuery Support
			if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) { 
				audioSupported = true;
			}
			
			//Raptor Vars
			var raptorImageMarkup = '<img id="elRaptor" style="display: none" src="../assets/fox/shaun1.png" />'
			var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="../assets/fox/foxy.mp3" /><source src="../assets/fox/foxy.ogg" /></audio>';	
			var locked = false;
			
			var heights = [600, 615];
			var widths = [400, 221];
			
			
			//Append Raptor and Style
			$('body').append(raptorImageMarkup);
 			if(audioSupported) { $('body').append(raptorAudioMarkup); }
			var raptor = $('#elRaptor').css({
				"position":"fixed",
				"bottom": "-740px",
				"right" : "0",
				"display" : "block"
			})
			
			// Animating Code
			function init() {
				locked = true;
				
				
				
				var number = Math.floor(Math.random()*2);
				$("#elRaptor").attr("src", "shaun"+(number+1)+".png");
				var bottom = (heights[number]*-1 -140)+"px";
				
				
				$('#elRaptor').css({
					"bottom":  bottom,
				});
			
				//Sound Hilarity
				if(audioSupported) { 
					function playSound() {
						document.getElementById('elRaptorShriek').play();
					}
					playSound();
				}
								
				// Movement Hilarity	
				raptor.animate({
					"bottom" : "0"
				}, function() { 			
					$(this).animate({
						"bottom" : "-130px"
					}, 100, function() {
						var offset = (($(this).position().left)+widths[number]);
						$(this).delay(300).animate({
							"right" : offset
						}, 2200, function() {
							raptor = $('#elRaptor').css({
								"bottom": bottom,
								"right" : "0"
							})
							locked = false;
						})
					});
				});
			}
			
			
			//Determine Entrance
			if(options.enterOn == 'timer') {
				setTimeout(init, options.delayTime);
			} else if(options.enterOn == 'click') {
				_this.bind('click', function(e) {
					e.preventDefault();
					if(!locked) {
						init();
					}
				})
			} else if(options.enterOn == 'konami-code'){
			    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
			    $(window).bind("keydown.raptorz", function(e){
			        kkeys.push( e.keyCode );
			        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
			        	init();
			        	$(window).unbind('keydown.raptorz');
			        }
			    }, true);
	
			}
			else if(options.enterOn == 'foxxy'){
			    var foxkeys = [], foxxy = "70,79,88,88,89";
			    $(window).bind("keydown.raptorz", function(e){
			        foxkeys.push( e.keyCode );
			        if ( foxkeys.toString().indexOf( foxxy ) >= 0 ) {
			        	init();
			        	$(window).unbind('keydown.raptorz');
			        }
			    }, true);
	
			}
			
        });//each call
    }//orbit plugin call
})(jQuery);

