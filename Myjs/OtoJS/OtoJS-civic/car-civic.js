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
      	var pos_img2 = $('.hinh-2').offset().top;
		var pos_img3 = $('.hinh-3').offset().top;
      	var pos_img4 = $('.hinh-4').offset().top;
		var pos_img5 = $('.hinh-5').offset().top;
		var pos_img6 = $('.hinh-6').offset().top;
		var pos_img7 = $('.hinh-7').offset().top;
		var pos_img8 = $('.hinh-8').offset().top;
		var pos_img9 = $('.hinh-9').offset().top;
		var pos_img10 = $('.hinh-10').offset().top;
		var pos_img11 = $('.hinh-11').offset().top;
		var pos_img12 = $('.hinh-12').offset().top;
		
      	if(pos_body>2500){
        	$('.back-to-top').addClass('hien-ra');
      	}
      	else{
         	$('.back-to-top').removeClass('hien-ra');
		}
      	if(pos_body>pos_img2-200){
			$('.hinh-2').addClass('animate__animated animate__fadeInLeft');
		}
		if(pos_body>pos_img3-200){
			$('.hinh-3').addClass('animate__animated animate__fadeInRight');
		}
		if(pos_body>pos_img4-200){
			$('.hinh-4').addClass('animate__animated animate__fadeInLeft ');
		}
		if(pos_body>pos_img5-200){
			$('.hinh-5').addClass('animate__animated animate__fadeInRight');
		}
		if(pos_body>pos_img6-200){
			$('.hinh-6').addClass('animate__animated animate__fadeInLeft');
		}
		if(pos_body>pos_img7-200){
			$('.hinh-7').addClass('animate__animated animate__fadeInRight');
		}
		if(pos_body>pos_img8-200){
			$('.hinh-8').addClass('animate__animated animate__fadeInLeft');
		}
		if(pos_body>pos_img9-200){
			$('.hinh-9').addClass('animate__animated animate__fadeInRight');
		}
		if(pos_body>pos_img10-200){
			$('.hinh-10').addClass('animate__animated animate__fadeInLeft');
		}
		if(pos_body>pos_img11-200){
			$('.hinh-11').addClass('animate__animated animate__fadeInRight');
		}
		if(pos_body>pos_img12-200){
			$('.hinh-12').addClass('animate__animated animate__fadeInUp');
		}
   });
	$('.back-to-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
	
	
	
});