/**
* jQuery Broom plugin
* var 1.0
* 
* Turns any input box into a search and clear (Like Ubuntu)
*
* Usage: $('#id_of_object').broom([{array of settings}]);
*
* Copyright (c) 2011 Milan miff Djordjevic (miffmedia.com)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

(function($){
	$.fn.broom = function(options) {
		var $this = $(this);
		var settings = $.extend( {
			'bcolor' 		:'#fff', // Or any Hex color
			'color' 		:'#000', // Or any Hex color
			'icon' 			:'http://dev.miffmedia.com/appspot/broom/images/broom.png', // Icon to represent broom
			'divclass' 		:'inputBox', // Default class name for div
			'inpclass'		:'inputBox', // Default class name for input
			'width'			:120, // Of div. Only number
			'border'		:'1px solid #333', // In single line:)
			'pholder'		:''// Placeholder
		}, options);
		return this.each(function(){
			var name = $this.attr('name');
			var id = $this.attr('id');
			var val = $this.attr('value');
			var fwidth = settings['width']-34;
			var placeholder = $this.attr('placeholder');
			if(!placeholder) placeholder = settings['pholder'];
			$this.replaceWith(
				'<div class="'+settings['divclass']+'" style="border:'+settings['border']+';color:'+settings['color']+';background-color:'+settings['bcolor']+';padding: 2px;margin:2px;width:'+settings['width']+'px;">'
					+'<input style="outline:none;width:'+fwidth+'px;background-color:transparent;border:medium none;" placeholder="'+placeholder+'" type="text" name="'+name+'" id="'+id+'" value="'+val+'"/>'
					+'<a href="javascript:;" onclick="$(\'#'+id+'\').val(\'\');">'
						+'<img width="16" height="16" style="margin:4px;vertical-align: middle;float:'+settings['location']+'" src="'+settings['icon']+'" alt="'+settings['icon']+'"/>'
					+'</a>'
				+'</div>'
			);
		});
	};
})( jQuery );