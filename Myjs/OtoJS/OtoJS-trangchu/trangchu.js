$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.load').delay(500).fadeOut('fast');
	});
$(document).ready(function() {
	// menu
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

	$('.post').hover(function() {
		$(this).find('.product-hover').addClass('animate__animated animate__zoomIn').css('display', 'block');
	},function(){
		$(this).find('.product-hover').css('display', 'none');
		});
	
	$('.post-wrapper').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  nextArrow:$('.next'),
	  prevArrow:$('.prev'),
	});
	$('.post-wrapper-1').slick({
	slidesToShow: 2,
	  slidesToScroll: 1,
	  nextArrow:$('.next-1'),
	  prevArrow:$('.prev-1'),
	  autoplay: true,
	  autoplaySpeed: 5000,
	});	
	
	$('.new-container').hover(function() {
		$(this).css('border', '1px solid #C00000');
		$(this).find('.new-more').css('background-color', '#C00000');
	}, function() {
		$(this).css('border', '1px solid #ccc');
		$(this).find('.new-more').css('background-color', '#212121');
	});
	
});