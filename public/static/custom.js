(function($) {
	window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
}(jQuery));

var $mcj = jQuery.noConflict(true);

jQuery('[data-scroll]').click(function(){
	element = jQuery('#'+jQuery(this).attr('data-scroll'));
	jQuery('#primary-menu-trigger').click();
	jQuery('html').animate(
		{scrollTop: element.offset().top - 120}, //- $(window).scrollTop()
		1000
	);
});

jQuery('[data-scroll-down]').click(function(){
	element = jQuery('[data-scroll-content]');
	jQuery('html').animate(
		{scrollTop: element.offset().top - 98}, //- $(window).scrollTop()
		1000
	);
});

jQuery(window).scroll(function () {
	var scrollPosition = jQuery('.header-down')[0].getBoundingClientRect();
	if (scrollPosition.y < 50) {
		jQuery('#header').removeClass('transparent');
		jQuery('.logo-white').addClass('hidden');
		jQuery('.logo').removeClass('hidden');

	} else {
		jQuery('#header').addClass('transparent');
		jQuery('.logo-white').removeClass('hidden');
		jQuery('.logo').addClass('hidden');
	}
});
