$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(500).fadeOut('fast');
	});
$(document).ready(function() {
	$("#menu .drop").hover(function() {
		$(this).find('ul:first()').slideDown(300)
	}, function() {
		$(this).find('ul:first()').slideUp(100);
	});
	$('.drop-btn').hover(function() {
		$(this).css('background-color', '#a30000');
	}, function() {
		$(this).css('background-color', '#C00000');
		$('.active').css('background-color', '#a30000');
	});
	
	
	$('.ul-1').hover(function() {
		$('.drop-btn1').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn1').css('background-color', '#C00000');
	});
	$('.ul-2').hover(function() {
		$('.drop-btn2').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn2').css('background-color', '#C00000');
	});
	$('.ul-3').hover(function() {
		$('.drop-btn3').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn3').css('background-color', '#C00000');
	});
	$('.ul-4').hover(function() {
		$('.drop-btn4').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn4').css('background-color', '#C00000');
	});



	$('.new-container').hover(function() {
		$(this).css('border', '1px solid #C00000');
		$(this).find('.new-more').css('background-color', '#C00000');
	}, function() {
		$(this).css('border', '1px solid #ccc');
		$(this).find('.new-more').css('background-color', '#212121');
	});
});