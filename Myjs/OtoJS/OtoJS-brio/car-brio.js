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


	
	$(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();
      if(pos_body>2500){
         $('.back-to-top').addClass('hien-ra');
      }
      else{
         $('.back-to-top').removeClass('hien-ra');
      }
   });
	
	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});