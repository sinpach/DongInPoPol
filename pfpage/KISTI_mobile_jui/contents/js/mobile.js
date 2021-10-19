var slide_move = true;
var ch_order_text = [];
var ch_order_html = [];
var ch_order_num = [];
$(function () {

	$(".sub_tab_con .accordion_menu .item>a").click(function(){
		$(this).toggleClass("on");
		$(this).siblings(".faq_section_inner").toggle();
	});

	$(".faq_more").click(function(){
			$(this).toggleClass("on");
			$(this).parent().siblings(".faq_ans").toggle();
	});

	$(".con_area>.more_btn").click(function(){
		$(this).siblings('.con_box').addClass("on")
		var add_height = $(this).siblings('.con_box.on').height() - 880;
		console.log(add_height)
		var el = $(this).parent().parent().parent(".swiper-wrapper")
		var el_h = el.height();
		var plus_h = el_h + add_height
		el.height(plus_h +"px") 

	});

	$(".sub_tab_menu.faq>ul>li>a").click(function(){
		if (!$(this).parent("li").hasClass("on")) {
			var idx = $(this).parent("li").index();
			$(".sub_tab_menu.faq>ul>li").removeClass("on");
			$(".sub_tab_con>li").removeClass("on");
			$(this).parent("li").addClass("on")
			$(".sub_tab_con>li").eq(idx).addClass("on")
		}
	});



	var ellipsis = function (con, c) {
		con.each(function () {
			var length = c;
			$(this).each(function () {
				if ($(this).text().length >= length) {
					$(this).text($(this).text().substr(0, length) + ' ...')
				}
			});
		});
	}
	// ellipsis($(".sns .board_con .txt2"), 45);
	// ellipsis($(".report .board_con p"), 60);

	// var nav_on = '<i class="fa fa-bars" aria-hidden="true"></i>';
	// var nav_off = '<i class="fa fa-times" aria-hidden="true"></i>';


// 2020-10-21 수정 start 
	$(document).ready(function () {
		$(".m_nav_btn").click(function () {
				$(window).scrollTop(0);
				$('html').addClass('navOn');
				$(".main_nav").fadeIn();
		});

		$(".nav_close_btn").click(function(){
			$('html').removeClass('navOn');
			$(".main_nav").fadeOut();
		})

		// $(".nav_more_btn").click(function () {
		// 	$(".main_nav").fadeIn();
		// 	$(".m_nav_btn2").fadeIn();
		// 	$(".main_h1").fadeIn();
		// 	$('html').addClass('navOn');

		// });

		// $(".m_nav_btn2").click(function () {
		// 	$(".main_nav").fadeOut();
		// 	$(".m_nav_btn2").fadeOut();
		// 	$(".main_h1").fadeOut();
		// 	$('html').removeClass('navOn');

		// });
// 2020-10-21 수정 end 
		// $(".accordion_menu>li>a").click(function(){
		// 	if (!$(this).hasClass("on")) {
		// 		var lt = $(this).siblings(".board_con_wrap").children(".board_con").length
		// 		var h = $(this).siblings(".board_con_wrap").children(".board_con").outerHeight() * lt
		// 		$('.accordion_menu>li>a').each(function () {
		// 			$(this).removeClass("on");
		// 		});
		// 		$('.board_con_wrap').each(function () {
		// 			$(this).css("height","0");
		// 		});
		// 		$(this).addClass("on");
		// 		$(this).siblings(".board_con_wrap").animate({
		// 			height: h
		// 		},200);
		// 	}else{
		// 		$(this).removeClass("on");
		// 		$(this).siblings(".board_con_wrap").animate({
		// 			height: 0
		// 		}, 200);
		// 	}
		// });

	})
	 
	$(".green").click(function(){
		var g_con = $(this).parent().siblings('.green_con')
		if (!$(this).hasClass("on")) {
			g_con.show();
			$(this).addClass("on");
		}else{
			g_con.hide();
			$(this).removeClass("on");
		}
		
	});


	$(".switch_close_btn").click(function(){
		
		ch_order_text = [];
		ch_order_html = [];
		ch_order_num = [];
		var array = $(".switch_menu li");

		for (var i = 0; i < array.length; i++) {
			var order_text = array.eq(i).text();
			var order_data = array.eq(i).attr("data");
			ch_order_text.push(order_text)
			ch_order_num.push(Number(order_data));
		}
		
		for (var i = 0; i < ch_order_text.length; i++) {
			$(".sub_nav .swiper-slide").eq(i + 1).text(ch_order_text[i])
		}	

		for (var i = 0; i < ch_order_num.length; i++) {
			var save_data = $(".swiper-container1>ul>li").eq(ch_order_num[i] + 1).children("div");
			ch_order_html.push(save_data);
			
		}
		for (var i = 0; i < ch_order_html.length; i++ ) {
			var inner_html = $(".swiper-container1>ul>li").eq(i + 2) ;
			inner_html.html(ch_order_html[i]);
		}
		
		$(".switch_wrap").stop().animate({
			left: "-1080px"
		},function(){
			var clone = $(".swiper-container1>ul>li").eq(ch_order_html.length + 1).children('div').clone();
			$(".swiper-container1>ul>li").eq(0).html(clone);
			for (var i = 0; i < ch_order_num.length; i++) {
				$(".switch_menu li").eq(i).attr("data", i + 1);
			}

		});
	
		
	});

	$(".exchange_btn").click(function(){
		$(".switch_wrap").stop().animate({
			left: 0,
		});
	});

	$(".pop_close_btn").click(function(){
		$(".popup_wrap").hide();
		$('body,html').css("overflow-y", "auto");
	});

 var add = '<div> <select name="" id=""><option value="">전체</option></select><input type="text"><select name="" id=""><option value="">AND</option><option value="">OR</option></select></div>'
	$(".add_btn").click(function(){
		$(".item").prepend(add)
	});

})
// 20200924 수정


function popShow(id) {
	$('#' + id).show();
	$('body,html').css("overflow", "hidden");
}


