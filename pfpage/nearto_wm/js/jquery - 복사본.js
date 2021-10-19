var $devWidth;
var $limitSize = 901
$devWidth = $("body").width();
$(window).resize(function(){
	$devWidth = $("body").width()
});
//if($devWidth<$limitSize) return false;

$(function(){ /* 상단 메뉴 on/off */
	$(".topbar_toggle>a").click(function(){
		$(this).children("span").toggleClass("up");
		$("#topbar").slideToggle(150);
		return false;
	});
});

$(function(){ /* 언어 선택 on/off*/
	$(".lang").mouseenter(function(){
		$(".lang>div>p.lang_en").show();
	});
	$(".lang").mouseleave(function(){
		$(".lang>div>p.lang_en").hide();
	});
});

$(function(){   /* 메인 메뉴 on/off  */
	var navA = $(".nav>nav>ul>li>a");
	navA.on("mouseenter focus",function(){
		if(navA.target){
			$(navA.target).next().hide();
			$(this).next().show();
		}else{
			$(this).next().show();	
		}
		navA.target = this;
	});
	navA.mouseleave(function(){
		$(this).next().hide();
	});
	$(".nav>nav>ul>li>ul").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	var navLi = $(".nav>nav>ul>li>ul>li>a")
	navLi.on("mouseenter focus",function(){
		if(navLi.target){
			$(navLi.target).next().hide();
			$(this).next().show();
		}else{
			$(this).next().show();	
		}
		navLi.target = this;
	});
	navLi.mouseleave(function(){
		$(this).next().hide();
	});
	$(".nav>nav>ul>li>ul>li>ul").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});

$(function(){
	$(".nav_on>a").click(function(){
		$(".depth1").toggle();
	});
	$(".depth1>li>a").click(function(){
		$(".depth1").animate({'left':'-1070px'},300);
		$(this).siblings("ul").show().animate({'left':'900px'},300);
	});
	$(".back1>a").click(function(){
		$(".depth1").animate({'left':'-170px'},300);
		$(".depth2").animate({'left':'-900px'},300);
	});
	$(".depth2>.left_icon>a").click(function(){
		$(".depth2").animate({'left':'0px'},300);
		$(this).siblings("ul").show().animate({'left':'900px'},300);
	});
	$(".back2>a").click(function(){
		$(this).parent().parent().parent().parent("ul").animate({'left':'900px'},300);
		$(".depth3").animate({'left':'-900px'},300);
	});
	
});


$(function(){     /* search 이미지변경*/
	
	$(".nav_search>form>a").mouseenter(function(){
		imgOn(this);
	});
	$(".nav_search>form>a").mouseleave(function(){
		imgOff(this);
	});
	
	$(".top_search>form>a").mouseenter(function(){
		imgOn(this);
	});
	$(".top_search>form>a").mouseleave(function(){
		imgOff(this);
	});
	$("form>a").click(function(){
		$(this).siblings("input").toggle();
		return false;
	});
	
	
	function imgOn(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("_off","_on"));
	}
	function imgOff(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("_on","_off"));
	}
	
	

});


$(function(){    /* 메인 비쥬얼 이미지 크기값 */
	var w = $(window).width();
	var h = w*0.5;
	$(".slide").width(w).height(h).css("height",w*0.38);
	$(window).resize(function(){
		w = $(window).width();
		h = w*0.5;
		$(".slide").width(w).height(h).css("height",w*0.38);
	});
});

$(function(){     /* 메뉴 ,하단 to_top on 고정 //*/
	$(window).scroll(function(){
		if($devWidth<$limitSize) return false;
		var p = $(this).scrollTop();
		if(p>250){
			$("#header #bottombar").addClass("nav_fix")
		}else{
			$("#header #bottombar").removeClass("nav_fix")
		}
		return false;
	});
});
$(function(){     /* 메뉴 ,하단 to_top on 고정 //*/
	$(window).scroll(function(){
		var totop = $(this).scrollTop();
		if(totop>400){
			$(".to_top").fadeIn(50);
		}else{
			$(".to_top").fadeOut(50);
		}
	});
});


$(function(){   /* 메인 비쥬얼 콘트롤  */
	$("#visual .slide").mouseenter(function(){
		$(".control .side").fadeIn(150);
	});
	$("#visual .slide").mouseleave(function(){
		$(".control .side").fadeOut(150);
	});
	$(".slide_icon>a").mouseenter(function(){
		$(this).siblings().fadeIn(100);
	});
	$(".slide_icon>a").mouseleave(function(){
		$(this).siblings().fadeOut(100);
	});
});


