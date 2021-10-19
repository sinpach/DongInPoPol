



$(function(){
	$("html, body").animate({ scrollTop: 0 },60,function(){
		$(".info_con>li,.info_menu>li").removeClass("on");
		$(".info_con>li,.info_menu>li").eq(0).addClass("on");
	});

	$(".info_menu>li>a").click(function(){

		$(".info_con>li").eq(idx).addClass("on");
		$(this).parent().addClass("on");
		$(this).parent().siblings().removeClass("on");
		var idx = $(this).parent().index();

	 	var scrollPosition = $(".info_con>li").eq(idx).offset().top;
		$("html").stop().animate({scrollTop: scrollPosition},290);

   	// var menuTop = $(".info_con>li").eq(idx).position().top;
		// $(".info_menu").stop().animate({"top": menuTop + "px"}, 300);

	});
	$(document).scroll(function() {
		conIdx = $(".info_con>li.on").index();
		menuIdx = $(".info_menu>li.on").index();
		scrollPosition = $(".info_con>li").eq(0).offset().top;
		// console.log(scrollPosition,$(this).scrollTop());
		if ($(window).scrollTop() == $(document).height() - $(window).height()){
			$(".info_con>li").removeClass("on");
			$(".info_con>li").last().addClass("on");
			$(".info_menu>li").removeClass("on");
			$(".info_menu>li").last().addClass("on");
		}else if ($(this).scrollTop() >= $(".info_con>li").eq(0).offset().top && $(this).scrollTop() < $(".info_con>li").eq(1).offset().top )    {
			// 1번째
			$(".info_menu").css("position","fixed");
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(0).addClass("on");
		}else if ($(this).scrollTop() >= $(".info_con>li").eq(1).offset().top && $(this).scrollTop() < $(".info_con>li").eq(2).offset().top )    {
			// 2번째
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(1).addClass("on");
		}else if ($(this).scrollTop() >= $(".info_con>li").eq(2).offset().top && $(this).scrollTop() < $(".info_con>li").eq(3).offset().top )    {
			// 3번째
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(2).addClass("on");
		} else if ($(this).scrollTop() >= $(".info_con>li").eq(3).offset().top && $(this).scrollTop() < $(".info_con>li").eq(4).offset().top )    {
			// 4번째
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(3).addClass("on");
		}else if ($(this).scrollTop() >= $(".info_con>li").eq(4).offset().top && $(this).scrollTop() < $(".info_con>li").eq(5).offset().top )    {
			// 5번째
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(4).addClass("on");
		}else if ($(this).scrollTop() >= $(".info_con>li").eq(5).offset().top && $(this).scrollTop() < $(".info_con>li").eq(6).offset().top )    {
			// 6번째
			$(".info_con>li,.info_menu>li").removeClass("on");
			$(".info_con>li,.info_menu>li").eq(5).addClass("on");
		}else if ($(this).scrollTop() < $(".info_con>li").eq(0).offset().top ){
			$(".info_menu").removeAttr( 'style' );

		}

	});

});
