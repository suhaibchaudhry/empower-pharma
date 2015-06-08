/******************************
*     Author: Asad Hasan      *
*******************************/

(function ($) {
  // Handle user toolbar when user is admin and have admin toolbar enabled.
  Drupal.behaviors.moveSocialLinks = {
  	attach: function(context, settings) {
		$('h2.field-name-title-field', context).after($('.service-links', context));	
  	}
 }
})(jQuery);
