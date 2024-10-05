(function() {
	var iconList;
	var searchInput;
	var clearButton;
	var svgCode;

	// Generate Icons
	function generateIcons() {
		iconList.each(function() {
			var thisIconID = $(this).attr("id");
			// console.log(thisIconID);

			$(".icons-column").append('\
				<button class="icon-wrapper" data-name="' + thisIconID + '">\
					<span class="title">.' + thisIconID + '</span>\
					<svg viewBox="0 0 30 30" class="' + thisIconID + '">\
						<use xlink:href="#' + thisIconID + '"></use>\
					</svg>\
				</button>\
				');
		});
	};

	// Count Icons
	function countIcons() {
		var iconCount = iconList.length;
		$(".count").append( " (" + iconCount + " and counting!)" );
	};

	// Check window hash and put value into search input
	function checkHash() {
		var hash = window.location.hash.substring(1);

		if (hash === "") {
			return;
		}

		setSearchInputValue(hash);
	};

	function filterIcons(filterString) {
		var lowercaseFilterString = filterString.toLowerCase();
		setHash(lowercaseFilterString);
		toggleIconButtons(lowercaseFilterString);
		clearButton.toggleClass("has-text", filterString !== "");
	}

	function toggleIconButtons(filterString) {
		$(".icon-wrapper").each(function(index, element) {
			 var dataName = $(this).attr("data-name");

			 if ( dataName.indexOf(filterString) !== -1 ) {
					$(this).show();
					return;
			 }

			 $(this).hide();
		});
	}

	function setHash(hash){
		if (hash === "") {
			window.location.hash = "";
			return;
		}

		window.location.hash = hash;
	}

	function setSearchInputValue(value) {
		searchInput.val(value);

		if (value === "") {
			searchInput.focus();
		}

		filterIcons(value);
	}

	function iconWrapperClick() {
		var clickDataName = $(this).attr("data-name");
		var svgString = "&lt;svg viewBox=&#34;0 0 30 30&#34; class=&#34;" + clickDataName + "&#34;&gt;&#10;&#32;&#32;&lt;use xlink:href=&#34;#" + clickDataName + "&#34;&gt;&lt;/use&gt;&#10;&lt;/svg&gt;";
		svgCode.html(svgString);
	}

	function clearSearch() {
		setSearchInputValue("");
	}

	function searchInputKeyup() {
		filterIcons(searchInput.val());
	}

	function initialize() {
		iconList = $("#fox-icons > defs > g");
		searchInput = $(".search > input");
		clearButton = $(".clear-search");
		svgCode = $(".prettyprint");

		generateIcons();
		countIcons();
		checkHash();

		$(".icon-wrapper").on("click", iconWrapperClick);
		searchInput.on("keyup", searchInputKeyup);
		clearButton.on("click", clearSearch);
	}

	$(document).ready(initialize);

}());