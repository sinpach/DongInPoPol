
 /* 상단 메뉴 on/off */
$(function(){
	$(".topbar_toggle>a").click(function(){
		$(this).children("span").toggleClass("up");
		$("#topbar").slideToggle(150);
		return false;
	});
});

/* 언어 선택 on/off*/
$(function(){ 
	$(".lang").mouseenter(function(){
		$(".lang>div>p.lang_en").show();
	});
	$(".lang").mouseleave(function(){
		$(".lang>div>p.lang_en").hide();
	});
});

/*pc 메인 메뉴   */
$(function(){   
	var navA = $(".web .nav>nav>ul>li>a");
	navA.on("mouseenter focus",function(){
		if(navA.target){
			$(navA.target).next().hide();
			$(navA.target).css("color","#222")
			$(this).next().show();
			$(this).css("color","#FCB910")
		}else{
			$(this).next().show();
			$(this).css("color","#FCB910")
		}
		navA.target = this;
	});
	navA.mouseleave(function(){
		$(this).next().hide();
		$(this).css("color","#222")
	});
	$(".web .nav>nav>ul>li>ul").hover(function(){
		$(this).show();
		$(this).siblings("a").css("color","#FCB910")
	},function(){
		$(this).hide();
		$(this).siblings("a").css("color","#222")
	});
	var navLi = $(".web .nav>nav>ul>li>ul>li>a")
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
	$(".web .nav>nav>ul>li>ul>li>ul").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
	
});


 /* search 이미지변경*/

$(function(){    
	
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


/* 메인 비쥬얼 이미지 크기값 */
$(function(){    
	var w = $(window).width();
	var h = w*0.5;
	$(".slide").width(w).height(h).css("height",w*0.38);
	$(window).resize(function(){
		w = $(window).width();
		h = w*0.5;
		$(".slide").width(w).height(h).css("height",w*0.38);
	});
});


/* 하단 to_top on 고정 //*/
$(function(){     
	$(window).scroll(function(){
		var totop = $(this).scrollTop();
		if(totop>400){
			$(".to_top").fadeIn(50);
		}else{
			$(".to_top").fadeOut(50);
		}
	});
});
/* pc버젼일때만 메뉴 고정 //*/
$(window).scroll(function(){
	var p = $(this).scrollTop();
	if(p>250){
		$(".fix").addClass("nav_fix")
	}else{
		$(".fix").removeClass("nav_fix")
	}
	return false;
});


 /* 메인 비쥬얼 콘트롤  */
$(function(){  
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


/* 태블릿 메인 메뉴*/
$(function(){    
	$(".tablet .nav_on>a").click(function(){
		$(".tablet .depth1").toggle();
	});
	$(".tablet .depth1>li>a").click(function(){
		$(".tablet .depth1").animate({'left':'-1070px'},300);
		$(this).siblings("ul").show().animate({'left':'900px'},300);
	});
	$(".tablet .back1>a").click(function(){
		$(".tablet .depth1").animate({'left':'-170px'},300);
		$(".tablet .depth2").animate({'left':'-900px'},300);
	});
	$(".tablet .depth2>.left_icon>a").click(function(){
		$(".tablet .depth2").animate({'left':'0px'},300);
		$(this).siblings("ul").show().animate({'left':'900px'},300);
	});
	$(".tablet .back2>a").click(function(){
		$(this).parent().parent().parent().parent("ul").animate({'left':'900px'},300);
		$(".tablet .depth3").animate({'left':'-900px'},300);
	});
});/* 모바일 메인 메뉴*/
$(function(){    
	$(".mobile .nav_on>a").click(function(){
		$(".mobile .depth1").toggle();
	});
	$(".mobile .depth1>li>a").click(function(){
		$(".mobile .depth1").animate({'left':'-430px'},200);
		$(this).siblings("ul").show().animate({'left':'430px'},200);
	});
	$(".mobile .back1>a").click(function(){
		$(".mobile .depth1").animate({'left':'0px'},200);
		$(".mobile .depth2").animate({'left':'-430px'},200);
	});
	$(".mobile .depth2>.left_icon>a").click(function(){
		$(".mobile .depth2").animate({'left':'0px'},300);
		$(this).siblings("ul").show().animate({'left':'430px'},300);
	});
	$(".mobile .back2>a").click(function(){
		$(this).parent().parent().parent().parent("ul").animate({'left':'430px'},300);
		$(".mobile .depth3").animate({'left':'-430px'},300);
	});
});
/* item & news 이미지 hover*/
$(function(){
	$(".hover>div").mouseenter(function(){
		$(this).children(".item_hover").fadeIn(120);
	});
	$(".hover>div").mouseleave(function(){
		$(this).children(".item_hover").fadeOut(120);
	});
});

/* 비쥬얼 이미지 슬라이드*/
$(function(){
	var listA = $(".slide_list>.slide_icon");
	var listImg = $(".vis_frame").find("li");
	
	var i = 0
	var playOn = false;
	var roll;
	
	listImg.hide();
	listA.click(function(){
		var index = $(this).index();
		if(listA.state){
			stop();
			$(listImg.state).fadeOut("fast");
			$(listImg[index]).fadeIn("fast");
			mouseOn(listA.state);
			mouseOff(this);
			i = index;
			play();
		}else{
			$(listImg[index]).fadeIn("fast");
			mouseOff(this);
			play();
		}
		listA.state = this;
		listImg.state = listImg[index];
		return false;
	});
	$(".left").click(function(){
		i--;
		if(i<0){
			i = listImg.length-1;
		}
		listA.eq(i).click();
	});
	$(".right").click(function(){
		i++;
		if(i>listImg.length-1){
			i = listImg.length-1;
			i = 0;
		}
		listA.eq(i).click();
	});
	$(".play").click(function(){
		play();
	});
	$(".stop").click(function(){
		stop();
	});
	function play(){
		if(!playOn){
			playOn = true;
			roll = setInterval(function(){
				$(".right").click();
			},3500);
		}
	}
	function stop(){
		if(playOn){
			playOn = false;
			clearInterval(roll);
		}
	}
		
	function mouseOn(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("on","off"));
	}
	function mouseOff(t){
		$(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
	}
	listA.eq(0).click();

});

/* //비쥬얼 이미지 슬라이드*/