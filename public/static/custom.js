(function($) {
	window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';
}(jQuery));

var $mcj = jQuery.noConflict(true);

jQuery('[data-scroll]').click(function(){
	console.log('yooo');
	element = jQuery('#'+jQuery(this).attr('data-scroll'));
	console.log(element);
	console.log(element.offset().top);



	jQuery('html').animate(
		{scrollTop: element.offset().top - 120}, //- $(window).scrollTop()
		1000
	);
});
