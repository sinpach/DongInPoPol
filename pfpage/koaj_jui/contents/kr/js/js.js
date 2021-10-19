




$(function(){
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

});
