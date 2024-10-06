/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function ($) {

	$.fn.raptorize = function (options) {

		//Yo' defaults
		var defaults = {
			enterOn: 'click', //timer, konami-code, click
			delayTime: 5000 //time before raptor attacks on timer mode
		};

		//Extend those options
		var options = $.extend(defaults, options);

		return this.each(function () {

			var _this = $(this);
			var audioSupported = !!document.createElement("audio").canPlayType;

			//Raptor Vars
			var shaunPhotos = 5;
			for (var x = 1; x <= shaunPhotos; x++) {
				var imgId = "#shaunPhoto" + x;
				$('body').append("<img class='elFox' id='shaunPhoto" + x + "' style='display: none' src='" + site.baseurl + "/assets/fox/shaun" + x + ".png'/>");
				$(imgId).css({
					"position": "fixed",
					"bottom": "-740px",
					"right": "0",
					"display": "block"
				});
			}

			var foxSounds = 7;
			if (audioSupported) {
				if (options.sounds === "fox sounds") {
					for (var y = 1; y <= foxSounds; y++) {
						$("body").append("<audio id='foxSound" + y + "' preload='auto'><source src='" + site.baseurl + "/assets/fox/fox sound " + y + ".mp3'/><source src='" + site.baseurl + "/assets/fox/fox sound " + y + ".ogg'/></audio>");
					}
				}
				else {
					$("body").append("<audio id='foxy' preload='auto'><source src='" + site.baseurl + "/assets/fox/foxy.mp3'/><source src='" + site.baseurl + "/assets/fox/foxy.ogg'/></audio>");
				}
			}



			var locked = false;

			var heights = [600, 615, 600, 600, 435];
			var widths = [400, 221, 444, 490, 433];





			// Animating Code
			function init() {
				locked = true;



				var number = Math.floor(Math.random() * shaunPhotos);
				var shaunId = "#shaunPhoto" + (number + 1);
				var bottom = (heights[number] * -1 - 140) + "px";
				var foxSoundId = "foxSound" + (Math.floor(Math.random() * foxSounds) + 1);



				$(shaunId).css({
					"bottom": bottom,
				});

				//Sound Hilarity
				if (audioSupported) {
					function playSound() {
						if (options.sounds !== "fox sounds") {
							document.getElementById("foxy").play();
							return;
						}
						document.getElementById(foxSoundId).play();
					}
					playSound();
				}

				// Movement Hilarity
				$(shaunId).animate({
					"bottom": "0"
				}, function () {
					$(this).animate({
						"bottom": "-130px"
					}, 100, function () {
						var offset = (($(this).position().left) + widths[number]);
						$(this).delay(300).animate({
							"right": offset
						}, 2200, function () {
							raptor = $(shaunId).css({
								"bottom": bottom,
								"right": "0"
							})
							locked = false;
						})
					});
				});
			}


			//Determine Entrance
			if (options.enterOn == 'timer') {
				setTimeout(init, options.delayTime);
			} else if (options.enterOn == 'click') {
				_this.bind('click', function (e) {
					e.preventDefault();
					if (!locked) {
						init();
					}
				})
			} else if (options.enterOn == 'konami-code') {
				var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
				$(window).bind("keydown.raptorz", function (e) {
					kkeys.push(e.keyCode);
					if (kkeys.toString().indexOf(konami) >= 0) {
						init();
						$(window).unbind('keydown.raptorz');
					}
				}, true);

			}
			else if (options.enterOn == 'foxxy') {
				var foxkeys = [], foxxy = "70,79,88,88,89";
				$(window).bind("keydown.raptorz", function (e) {
					foxkeys.push(e.keyCode);
					if (foxkeys.toString().indexOf(foxxy) >= 0) {
						init();
						$(window).unbind('keydown.raptorz');
					}
				}, true);

			}

		});//each call
	}//orbit plugin call
})(jQuery);

