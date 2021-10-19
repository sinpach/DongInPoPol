



$(function(){
	// nav
$(".top_nav").mouseover(function(){
	$(".top_nav").stop().animate({"height": "260px"},150);
});
$(".top_nav").mouseleave(function(){
	$(".top_nav").stop().animate({"height": "68px"},150);
});

//main lot_paper

$(".left_con .title").click(function(){
	if ($(this).hasClass("on")) {

	}else {
		var eq = $(this).index();
		$(this).addClass("on");
		$(this).siblings(".left_con .title").removeClass("on");
		if (eq == 0) {
			$(".left_con .lot_paper_wrap ul").removeClass("on");
				$(".left_con .lot_paper_wrap .btn_wrap a").removeClass("on");
			$(".left_con .lot_paper_wrap ul").eq(0).addClass("on");
			$(".left_con .lot_paper_wrap .btn_wrap a").eq(0).addClass("on");
		}else{
			$(".left_con .lot_paper_wrap ul").removeClass("on");
			$(".left_con .lot_paper_wrap .btn_wrap a").removeClass("on");
			$(".left_con .lot_paper_wrap ul").eq(1).addClass("on");
			$(".left_con .lot_paper_wrap .btn_wrap a").eq(1).addClass("on");
		}

	}
});
	// main slide

	var list_length = $(".recent_list li").length +1;
	var list_width = $(".recent_list li").length;
	$(".recent_list").css("width","331" * list_width  + "px");
	var eq = 0;
	$(".recent_wrap .list_btn").click(function(){
		eq++;

		if (list_width / 3 <= eq) {
			$(".recent_list").animate({"left": "0px"});
			eq = 0;
		}else{
			$(".recent_list").animate({"left": "-993" * eq + "px"});
		}
	});

	// year slide_down

	$(".by_year_list>a").click(function(){
		if ($(this).hasClass("on")) {
			var sel = $(this);

			$(this).removeClass("on");
			setTimeout(function(){
				sel.siblings(".by_year_nav").hide();
			},240);
			$(this).siblings(".by_year_nav").slideUp(300);

		}else{
			$(this).addClass("on");
			$(this).siblings(".by_year_nav").slideDown(300);
		}
	});

	// select_box more btn

	$(".select_box_title>a").click(function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(this).parent().parent(".select_wrap").removeClass("on");
		}else{
			$(this).addClass("on");
			$(this).parent().parent(".select_wrap").addClass("on");
		}
	});

	// article slide
	$(".slide_title a").click(function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(this).parent().siblings(".content").slideDown(300);
		}else{
			$(this).addClass("on");
			$(this).parent().siblings(".content").slideUp(300);


		}
	});

	$(".list_btn_green").click(function(){
		if ($(this).hasClass("on")) {
			$(this).removeClass("on");
			$(this).siblings(".green_con").slideUp(300);

		}else{
			$(this).addClass("on");
			$(this).siblings(".green_con").slideDown(300);


		}
	});


$(".sectionMenu button").click(function() {
	$(this).parent().find(".sectionTitle").fadeToggle(200);
});



var lastPosition = new Array();
// article view section title click - mobile only
$(".sectionTitle li").click(function() {
		var select = $(this).index();
		var topPosition = $(document).scrollTop();
		lastPosition.unshift(topPosition);
		lastPosition.splice(2, 1);
		console.log(lastPosition);
		$(this).parents(".sectionTitle").fadeOut(200);
		if(select==0 ) {
			$("html, body").animate({ scrollTop:lastPosition[1]}, 500);
		} else if(select==1) {
			$("html, body").animate({ scrollTop:0 }, 500);
		} else {
			var target = $(".slide_con li").eq(select-2);
			$("html, body").animate({ scrollTop:target.offset().top-100 }, 500);
		}

	});


	$(".pop_btn").click(function() {
		$(this).siblings(".pop_up").fadeToggle(200);
	});

	$(".toggle_btn").click(function() {
		$(this).parent().parent(".pop_up").fadeToggle(200);
	});

	$(".alignment").click(function() {
		$(".select_pop_up").fadeToggle(200);
	});

	$(".select_pop_btn").click(function() {
		$(".select_pop_up").fadeToggle(200);
		 var chk1 = $("input:radio[name='chk1']:checked").val();
		 var chk2 = $("input:radio[name='chk2']:checked").val();
		 var chk3 = $("input:radio[name='chk3']:checked").val();
		 $(".alignment span").eq(0).text(chk1);
		 $(".alignment span").eq(1).text(chk2);
		 $(".alignment span").eq(2).text(chk3);

	});
	$(".info_tab li a").click(function(){
		var li = $(this).parent("li");
		var idx = $(this).parent("li").index();
		$(".info_tab li").removeClass("on")
		li.addClass("on")
		$(".info_tab_con li").removeClass("on")
		$(".info_tab_con li").eq(idx).addClass("on")
	});

});
