/*

*/

$(document).ready(function(){
	$('.shortBtn button').click(function(){
		window.open('./help/shor_pop.html',"",'width=360,height=510');
	});

	video.on('ended',function(){
    	// if($('.nextClick').hasClass('active')){
			//
      //   }else{
	    //     $('.nextClick').fadeIn();
			// playSound('./media/effect/over.mp3');
      //   }
    });

	$('.search_btn').click(function(){
		var txt = $('.search input').val();
		if(txt){
			window.open("https://search.naver.com/search.naver?query="+txt+"&ie=utf8");
		}else{
			alert("검색어를 입력하세요.");
		}
	});

	$('#bottom button').click(function(e){
		e.preventDefault();
		if($(this).hasClass('disable')){
			return false;
		}
	});
	$('.learningmap button').click(function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on')
			$(parent.document).find(".learning_on").animate({left : "-100%"})
			video[0].play();
			var bgm = $(".bgm")[0]
			if(bgm){
				bgm.play();
			}
		}else{
			$(this).addClass('on')
			$(parent.document).find(".learning_on").show()
			$(parent.document).find(".learning_on").animate({left : 0} )
			// video[0].pause();
			// var bgm = $("#bgm")[0]
			// if(bgm){
			// 	bgm.pause();
			// }
			$('.pauseBtn button').trigger('click');

		}

	});
	$(parent.document).find(".learning_close").click(function(){
		$('.learningmap button').removeClass('on')
		$(this).parents(".learning_on").animate({left : -100 +'%'})
		// video[0].play();
		// var bgm = $("#bgm")[0]
		// if(bgm){
		// 	bgm.play();
		// }
		$('.playBtn button').trigger('click');
	})
	$('.introduction button').click(function(){
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
	$('.purpose button').click(function(){
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
	$('.quality button').click(function(){
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
	$('.boolmark button').click(function(){
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
	$('.download button').click(function(){
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
});

window.onload = function() {
  var iframe_w = $("#contentFrame",parent.document).width();
  var iframe_h = $("#contentFrame",parent.document).height();
  var con_w = $("#contents").width();
  var con_h = $("#contents").height();
  var bottom_w = $("#bottom_wrap").width();
  var w = (iframe_w - con_w);
  var h	= (iframe_h - con_h);
  var bw = (iframe_w - bottom_w);
	var m_h	= (iframe_h - con_h - 67);
	var l_h	= (iframe_h - con_h );
  var mobile_h = $("#container").hasClass("mobile")
  if(mobile_h){
     $("#contents").css("margin-top", m_h/2 );
		 $(parent.document).find(".learning_wrap").css("margin-top", m_h/2);
  }else{
    $("#contents").css("margin-top", h/2 - 1);
		$(parent.document).find(".learning_wrap").css("margin-top", l_h/2);

  }

   $("#contents").css("margin-left", w/2);
   $("#display").css("margin-left", bw/2);

  var pageNum = $(parent.document).find("#contentFrame").attr('src').split('.')[0];

  window.parent.$('#menuFrame').get(0).contentWindow.menu_init(pageNum);

}
