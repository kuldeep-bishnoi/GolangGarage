/**
 * Adapted from jQuery Lined Textarea Plugin
 * http://alan.blog-city.com/jquerylinedtextarea.htm
 * 
 * Released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
	$.fn.linedtextarea = function() {
		/*
		 * Helper function to ensure line numbers match the current content
		 */
		var updateLineNumbers = function(linesDiv, totalLines) {
			linesDiv.empty();
			for (let i = 1; i <= totalLines; i++) {
				linesDiv.append("<div>" + i + "</div>");
			}
		};

		return this.each(function() {
			var textarea = $(this);

			/* Wrap the text area in the elements we need */
			textarea.wrap("<div class='linedtextarea' style='height:100%; overflow:hidden; display:flex'></div>");
			textarea.css({ width: "97%", resize: "none", overflow: "auto" });
			textarea.parent().prepend("<div class='lines' style='width:3%; overflow:hidden; text-align:right; padding-right:5px;'></div>");
			var linesDiv = textarea.parent().find(".lines");

			var update = function() {
				var lineCount = textarea.val().split("\n").length;
				updateLineNumbers(linesDiv, lineCount);
				linesDiv.css('margin-top', -textarea.scrollTop() + "px");
			};

			/* React to the scroll and input events */
			textarea.on('scroll input', update);
			$(window).resize(update);
			/* Initial call to set up the line numbers */
			update();
		});
	};

})(jQuery);
