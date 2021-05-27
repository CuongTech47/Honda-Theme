$(document).ready(function () {
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
    
   	$('.gioi-thieu-honda-xem-them').click(function(e) {
   		
   		if ($('.collapse-ctn').hasClass('toggled')) {
   			$(".collapse-ctn").animate({"height": "120px"}).removeClass("toggled");
   			$('.collapse-xem-them').html('Xem thêm');
   			$('.th-xe-may-bottom-ctn-detail-img').css('transform', 'rotate(0deg)');
   		}else{
   			$(".collapse-ctn").animate({"height": "215px"}).addClass("toggled");
   			$('.collapse-xem-them').html('Thu gọn');
   			$('.th-xe-may-bottom-ctn-detail-img').css('transform', 'rotate(180deg)');
   		}
	});

	var count1=0;
	var ms1 = 500;
	var step1 = 1;
	var counter1=setTimeout(timer1, ms1); 
	
	function timer1()
	{
			count1=count1+1;
			if (count1 <= 24)
		{
		//Do code for showing the number of seconds here
			document.getElementById("countdown1").innerHTML=count1 ; 
			ms1 = ms1 - step1;
			counter1 = setTimeout(timer1, ms1);

		}

	}

	var count2=0;
	var ms2 = 250;
	var step2 = 1;
	var counter2=setTimeout(timer2, ms2);
	function timer2()
	{
			count2=count2+60;
			if (count2 <= 9960)
		{
			document.getElementById("countdown2").innerHTML=count2 ; 
			ms2 = ms2 - step2;
			counter2 = setTimeout(timer2, ms2);
		}

	}
	var count3=0;
	var ms3 = 250;
	var step3 = 1;
	var counter3=setTimeout(timer3, ms3);
	function timer3()
	{
			count3=count3+1;
			if (count3 <= 3)
		{
			document.getElementById("countdown3").innerHTML=count3 ;
			document.getElementById("countdown4").innerHTML=count3 ; 
			ms3 = ms3 - step3;
			counter3 = setTimeout(timer3, ms3);
		}

	}
	var count5=0;
	var ms5 = 100;
	var step5 = 1;
	var counter5=setTimeout(timer5, ms5);
	function timer5()
	{
			count5=count5+100;
			if (count5 <= 10000)
		{
			document.getElementById("countdown5").innerHTML=count5 ; 
			ms5 = ms5 - step5;
			counter5 = setTimeout(timer5, ms5);
		}

	}

	$('.gioi-thieu-honda-xem-them1').click(function(e) {
   		
		if ($('.collapse-ctn1').hasClass('toggled')) {
			$(".collapse-ctn1").animate({"height": "120px"}).removeClass("toggled");
			$('.collapse-xem-them1').html('Xem thêm');
			$('.th-xe-may-bottom-ctn-detail-img1').css('transform', 'rotate(0deg)');
		}else{
			$(".collapse-ctn1").animate({"height": "360px"}).addClass("toggled");
			$('.collapse-xem-them1').html('Thu gọn');
			$('.th-xe-may-bottom-ctn-detail-img1').css('transform', 'rotate(180deg)');
		}
 });
   
});