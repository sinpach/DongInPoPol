$(document).ready(function (){
	/*
	var video = $('video');
	//videoStop ()
	function videoPlay () {
		video[0].play();
		$('.playBtn .pause').css('display','block');
		$('.playBtn .play').hide();
	}
	function videoStop () {
		video[0].pause();
		$('.playBtn .pause').hide();
		$('.playBtn .play').css('display','block');
	}
	*/

	var video = $('#video');


	/*	dragitem  */
	//var tabs = [0,0,0,0];
	var success_item = [0,0,0,0,0];
	var complete =[0,0,0,0,0];
	var item_left =[];
	var item_top =[];
	$('.drag_items div').draggable({
	    stop:onStop
	});
	$(".dragin").each(function  (idx) {
		$(this).attr('data-answer',++idx);
	})
	$(".drag_item").each(function  (idx) {
		$(this).attr('data-answer',++idx);
	})
	$('.dragitem_list div').css('position','absolute');
	var start_left=50; // 150
	var plus_left =140;
	//초기화할 top좌표 지정
	item_top =
	[93,93,93,93,93];
	item_left=
	[70,260,410,540,710];
	//초기화할 left좌표 설정

	for (var i=0; i<success_item.length; i++) {
		//item_left[i] = start_left;
		/*
		$(".dragitem_list .item"+(i+1)).css({left:item_left[i],top:item_top[i]});
		*/
		//start_left=start_left+plus_left;
		//////////////////////////////////////////////////
		// 4개째에서 left좌표를 초기할경우  갯수만큼 지정
		// if (i==3) reset(150);  초기할 left좌표 지정
		///////////////////////////////////////////////////
		/*
		if (i==3) reset(56);
		else if (i==8) reset(235);
		else if (i==11) reset(235);
		*/
	}
	function reset (num) {
		start_left=num;
	}

	function onStop(){
		//var idx = $(this).attr('data-answer');
		var idx2 = $(this).index()+1;
		var idx = $(this).attr('data-ranswer')
		var target = $(".dragin"+idx);
		var w = target.outerWidth();
		var h = target.outerHeight();
		console.log(idx);
		var tw =$(this).outerWidth();
		var th =$(this).outerHeight();
		var tl = target.position().left;
		var tt = target.position().top;
		var ol = $(this).position().left;
		var ot = $(this).position().top;
		var left = target.position().left;
		var top = target.position().top
		var txt = $(this).text();

		//console.log('left '+left);
		//console.log('top '+top);

		var minLeft = tl - tw;
		var minTop = tt - th;
		var maxLeft = tl + w ;
		var maxTop = tt + h;
		var flag = ol > minLeft && ol < maxLeft && ot > minTop && ot < maxTop;


		if(flag){
			$(this).draggable('destroy');
			$(this).css('background-size','cover');

			$(this).css({'display':'none'})
			target.addClass('complete');
			target.text(txt);
			console.log(txt, target);
			completeChk();

			playSound('./media/effect/quiz_o.mp3');
			success_item[idx-1] = true;
			$(".drag_nav span").removeClass('on');
			$(".seq"+ (parseInt(idx)+1) ).addClass('on');
			console.log(idx+1);

		}else{
			$(this).animate({left:item_left[idx2-1], top:item_top[idx2-1]},500);
			//console.log('item_left'+(idx-1)+' : '+item_left[idx-1]);
			playSound('./media/effect/quiz_x.mp3');
		}
	}
	function completeChk () {
		var complete=true;
		$(".dragin").each(function  () {
			if (!$(this).hasClass('complete')) {
				complete= false;
			}
		})
		if(complete) {
			playSound("./media/mp3/01_17/02.mp3");
			$(".drag_item_bg").hide();
			$(".drag_nav").stop().animate({left:190}).find('span').removeClass('on');
			$(".drag_area").stop().animate({left:140},500,function  () {
				$(".drag_area_complete2").css({width:0});
				$(".drag_area_complete2").show(0);
				$(".drag_area_complete2").animate({width:690},2000);
			});

		}
	}
});
