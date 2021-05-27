//loading
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
		$('.active').css('background-color', '#a30000');
	});
	$('.ul-2').hover(function() {
		$('.drop-btn2').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn2').css('background-color', '#C00000');
		$('.active').css('background-color', '#a30000');
	});
	$('.ul-3').hover(function() {
		$('.drop-btn3').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn3').css('background-color', '#C00000');
		$('.active').css('background-color', '#a30000');
	});
	$('.ul-4').hover(function() {
		$('.drop-btn4').css('background-color', '#a30000');
	}, function() {
		$('.drop-btn4').css('background-color', '#C00000');
		$('.active').css('background-color', '#a30000');
	});
	




	$(window).scroll(function(event) {
      	var pos_body = $('html,body').scrollTop();
      	var pos_product = $('.product').offset().top;
        var pos_bottom = $('.btn-bottom').offset().top;
      	if(pos_body>pos_product-500){    
         $('.product').addClass('animate__animated animate__rollIn');
        }
        if(pos_body>pos_bottom-200){
          $('.btn-bottom').addClass('animate__animated animate__jackInTheBox');
        }
   });


   $('.slick').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed:2000,
		dots:true,
		nextArrow:$('.next'),
		prevArrow:$('.prev'),
		fade: true,
		cssEase: 'linear'
   });
    
});


