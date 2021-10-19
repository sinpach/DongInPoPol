
$(document).ready(function(){

	var w =  $(window).width();
	var h = $(window).height();
	var cw = $('#default').width();
	var ch = $('#default').height();
	var bw = $('#default')[0].getBoundingClientRect().width;
	var bh = $('#default')[0].getBoundingClientRect().height;
	var maxW = 999;
	var maxH = 681;

	var pw;
	var ph;
	chkMobileDevice ();
	var lowVersion = false;
	function chkMobileDevice () {
		var uAgent = navigator.userAgent.toLowerCase();
		//alert(uAgent.indexOf('version/4'))
		if (uAgent.indexOf('version/4') >-1 || uAgent.indexOf('chrome/3') >-1 ) {
			lowVersion=true;
		}
	}
	$(window).resize(function(){

		w =  $(window).width();
		h = $(window).height();

		bw = $('#default')[0].getBoundingClientRect().width;
		bh = $('#default')[0].getBoundingClientRect().height;
		var w_p = w/cw;
		var h_p = h/ch;
		if (w>maxW && h >maxH) {
			$('#default').css({'transform' : 'scale(1,1)'});
		}else {
			if (w_p>h_p) {
				$('#default').css({
					'transform' : 'scale('+h/ch+','+h/ch+')'
				});
			}else {
				$('#default').css({
					'transform' : 'scale('+w/cw+','+w/cw+')'
				});
			}

		}
	});
	$(window).trigger('resize');
	//모바일 제어//////////////////////
	var mql = window.matchMedia("(orientation: portrait)");

	// match 상태를 확인
	if (mql.matches) {
		// Portrait(세로) 방향
	} else {
		// Landscape(가로) 방향
	}

	// 리스너에 등록할 수도 있다.
	mql.addListener(function (m) {
		if (m.matches) {
			// 세로 방향으로 변환되면 처리
			$(window).trigger('resize');
		}
		else {
			// 가로 방향으로 변환되면 처리
			$(window).trigger('resize');
		}
	});
	///////////////////////////////////////////////////////

});
$(window).load(function  () {
		$(window).trigger('resize');
})
