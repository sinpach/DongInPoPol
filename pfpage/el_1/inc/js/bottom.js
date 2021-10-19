/*

*/

$(document).ready(function(){
	$('.shortBtn button').click(function(){
		window.open('./help/shor_pop.html',"",'width=360,height=510');
	});

	video.on('ended',function(){
    	if($('.nextClick').hasClass('active')){

        }else{
	        $('.nextClick').fadeIn();
			playSound('./media/effect/over.mp3');
        }
    });
	$(".pause").click(function(){
			$(".pauseBtn").hide();
			$(".playBtn").show();
		});
	$(".play").click(function(){
			$(".pauseBtn").show();
			$(".playBtn").hide();
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
		alert("샘플 콘텐츠에서는 지원하지 않습니다.")
	});
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
