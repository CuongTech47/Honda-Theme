$(document).ready(function () {
	// menu
	$("#menu .drop").hover(function () {
		$(this).find('ul:first()').slideDown(300)
	}, function () {
		$(this).find('ul:first()').slideUp(100);
	});
	$('.drop-btn').hover(function () {
		$(this).css('background-color', '#a30000');
	}, function () {
		$(this).css('background-color', '#C00000');
		$('.active').css('background-color', '#a30000');
	});


	$('.ul-1').hover(function () {
		$('.drop-btn1').css('background-color', '#a30000');
	}, function () {
		$('.drop-btn1').css('background-color', '#C00000');
	});
	$('.ul-2').hover(function () {
		$('.drop-btn2').css('background-color', '#a30000');
	}, function () {
		$('.drop-btn2').css('background-color', '#C00000');
	});
	$('.ul-3').hover(function () {
		$('.drop-btn3').css('background-color', '#a30000');
	}, function () {
		$('.drop-btn3').css('background-color', '#C00000');
	});
	$('.ul-4').hover(function () {
		$('.drop-btn4').css('background-color', '#a30000');
	}, function () {
		$('.drop-btn4').css('background-color', '#C00000');
	});


	
	

	$('.btn-cost-estimates').click(function () {
		var seclected = $('#id-car option:selected');
		var seclected1 = $('#province option:selected')
		var seclected2 = $('#registration option:selected')

		if (seclected.length > 0 && seclected.val() == 1) {
			$('.price').html('1,319,000,000');
		}
		if (seclected.length > 0 && seclected.val() == 2) {
			$('.price').html("1,319,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 3) {
			$('.price').html("1,329,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 4) {
			$('.price').html("418,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 5) {
			$('.price').html("452,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 6) {
			$('.price').html("450,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 7) {
			$('.price').html("454,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 8) {
			$('.price').html("448,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 9) {
			$('.price').html("559,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 10) {
			$('.price').html("599,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 11) {
			$('.price').html("729,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 12) {
			$('.price').html("734,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 13) {
			$('.price').html("789,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 14) {
			$('.price').html("794,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 15) {
			$('.price').html("929,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 16) {
			$('.price').html("934,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 17) {
			$('.price').html("983,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 18) {
			$('.price').html("1,023,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 19) {
			$('.price').html("1,093,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 20) {
			$('.price').html("786,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 21) {
			$('.price').html("866,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 22) {
			$('.price').html("871,000,000");
		}
		if (seclected.length > 0 && seclected.val() == 23) {
			$('.price').html("871,000,000");
		}
		if (seclected.val() == 0) {
			$('.id-car').addClass('error')
			$('.price').html('');
		} else {
			$('.id-car').removeClass('error')
		}
		if (seclected1.val() == 0) {
			$('.province').addClass('error')
			$('.price').html('');
		} else {
			$('.province').removeClass('error')

		}
		if (seclected2.val() == 0) {
			$('.registration').addClass('error')
			$('.price').html('');


		} else {
			$('.registration').removeClass('error')
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('10%')
			$('.phi-kiem-dinh').html('230,000')
			$('.phi-duong-bo').html('1,560,000')
			$('.phi-bao-hiem').html('480,700')
		} else {
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
		}
		if (seclected.val() != 0 && seclected.val() == 1 && seclected1.val() != 0 && seclected2.val() != 0) {
			$('.phi-truoc-ba').html('131,900,000')
		} else {
			$('.phi-truoc-ba').html('')
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected1.val() == 1 && seclected2.val() == 1) {
			$('.registration_fee').html('11,000,000')
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected1.val() == 2 && seclected2.val() == 1) {
			$('.registration_fee').html('20,000,000')
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0 && seclected2.val() == 2) {
			$('.registration_fee').html('1,000,000')
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0 && seclected2.val() == 3) {
			$('.registration_fee').html('200,000')
		}
		if (seclected.val() != 0 && seclected.val() == 1 && seclected1.val() != 1 && seclected1.val() != 0 && seclected2.val() != 0 && seclected2.val() == 2) {
			$('.tong').html('1,454,170,700')
		}
		if (seclected.val() != 0 && seclected.val() == 1 && seclected1.val() != 1 && seclected1.val() != 0 && seclected2.val() != 0 && seclected2.val() == 3) {
			$('.tong').html('1,453,370,700')
		}


		if (seclected.val() != 0 && seclected.val() == 1 && seclected1.val() == 1 && seclected1.val() != 0 && seclected2.val() != 0 && seclected2.val() == 1) {
			$('.tong').html('1,464,170,700')
		}




		/* 
		xu ly khu vuc ha noi va hcm
		
		
		*/
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0 && seclected1.val() == 1 && seclected2.val() == 2) {
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
			$('.price').html('');
			Swal.fire({
				title: 'TP.Hồ Chí Minh thuộc khu vực I mời chọn lại khu vực',
				icon: 'error',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected1.val() == 1 && seclected2.val() != 0 && seclected2.val() == 3) {
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
			$('.price').html('');
			Swal.fire({
				title: 'TP.Hồ Chí Minh thuộc khu vực I mời chọn lại khu vực',
				icon: 'error',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0 && seclected1.val() == 2 && seclected2.val() == 2) {
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
			$('.price').html('');
			Swal.fire({
				title: 'TP.Hà Nội thuộc khu vực I mời chọn lại khu vực',
				icon: 'error',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		}
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected1.val() == 2 && seclected2.val() != 0 && seclected2.val() == 3) {
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
			$('.price').html('');
			Swal.fire({
				title: 'TP.Hà Nội thuộc khu vực I . Vui lòng chọn lại',
				icon: 'error',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
		}
		/*
		xử lý khu vực  các thành phố còn lại  
		*/
		if (seclected.val() != 0 && seclected1.val() != 0 && seclected2.val() != 0 && seclected1.val() != 1 && seclected1.val() != 2 && seclected2.val() == 1) {
			Swal.fire({
				title: 'Thành phố bạn chọn không thuộc khu vực I . Vui lòng chọn lại',
				icon: 'error',
				showClass: {
					popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
					popup: 'animate__animated animate__fadeOutUp'
				}
			})
			$('.rate-fee').html('');
			$('.phi-kiem-dinh').html('')
			$('.registration_fee').html('')
			$('.phi-duong-bo').html('')
			$('.phi-bao-hiem').html('')
			$('.tong').html('')
			$('.phi-truoc-ba').html('')
			$('.price').html('');
		}


		/* xử lý khu vực hà nội*/
		if (seclected1.val() == 2 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 1) {
			$('.rate-fee').html('12%')
		}
		if (seclected1.val() == 2 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 1 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected1.val() == 2 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 1 && seclected.val() == 1) {
			$('.tong').html('1,499,550,700')
		}
		/*xủ lý khu vực cần thơ */
		if (seclected1.val() == 15 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 1) {
			$('.rate-fee').html('12%')
		}
		if (seclected1.val() == 15 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 2 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected1.val() == 15 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() == 3 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}

		if (seclected2.val() == 2 && seclected1.val() == 15 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 15 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}
		/*xủ lý khu vực cao bàng*/
		if (seclected1.val() == 16 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('12%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 16 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 16 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 16 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 16 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}
		/*xủ lý khu vực hải phòng*/
		if (seclected1.val() == 30 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('12%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 30 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 30 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 30 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 30 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}
		/*xử lý khu vực lạng sơn*/
		if (seclected1.val() == 38 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('12%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 38 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 38 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 38 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 38 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}
		/*xử lý khu vực lào cai*/
		if (seclected1.val() == 39 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('12%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 39 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 39 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 39 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 39 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}

		/*xử lý khu vực hà tỉnh*/
		if (seclected1.val() == 28 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('11%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 28 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('145,090,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 28 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('145,090,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 28 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,467,360,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 28 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,466,560,700')
		}

		/*xử lý khu vực sơn la*/
		if (seclected1.val() == 52 && seclected.val() != 0 && seclected2.val() != 0 && seclected2.val() != 0) {
			$('.rate-fee').html('12%')
		}
		if (seclected2.val() == 2 && seclected1.val() == 52 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 3 && seclected1.val() == 52 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.phi-truoc-ba').html('158,280,000')
		}
		if (seclected2.val() == 2 && seclected1.val() == 52 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,480,550,700')
		}
		if (seclected2.val() == 3 && seclected1.val() == 52 && seclected.val() != 0 && seclected2.val() != 0 && seclected.val() == 1) {
			$('.tong').html('1,479,750,700')
		}
		
		/* xử lý khu vực hà nội*/
		























	});

});