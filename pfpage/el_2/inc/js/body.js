var video ;
var bgm ;
function getIeVersion() {
    var agentStr = navigator.userAgent;
    var version = 7;
    var isCompatible = false;
    if (agentStr.indexOf("Trident/7.0") > -1) {
        if (agentStr.indexOf("MSIE 7.0") > -1) {
          isCompatible = true;
        }
        version = 11;
    }
    else if (agentStr.indexOf("Trident/6.0") > -1) {
        if (agentStr.indexOf("MSIE 7.0") > -1) {
          isCompatible = true;
        }
        version = 10;
    }
    else if (agentStr.indexOf("Trident/5.0") > -1) {
        if (agentStr.indexOf("MSIE 7.0") > -1) {
          isCompatible = true;
        }
        version = 9;
    }
    else if (agentStr.indexOf("Trident/4.0") > -1) {
        if (agentStr.indexOf("MSIE 7.0") > -1) {
          isCompatible = true;
        }
        version = 8;
    }

    return version;
}

$(document).ready(function(){
    var totalPage = 05;
    var _location = location.href;
    var _curNum = _location.substr(_location.length-7,2);
    $('.currentPageNum').text(_curNum);
    $('.totalPageNum').text(pageReturn(totalPage));
    var currentPageNum = parseInt(_curNum);


    var media = $('#video');
    if(getIeVersion() == 10 || getIeVersion() == 11){
        if(media.hasClass('aod')){
            media.replaceWith('<video id="video" controls autoplay class="aod">' + media.html() +'</video>')
        }
    }

    video = $('#video');
    bgm = $("#bgm")[0]
    ////////////////////////////////IFrame control///////////////////////////////////////////////
    //$(parent.document).find("#menuFrame").find(window).menu_init($('.currentPageNum').text());
    /* default.htm 제어  인트로의 경우 container에 .intro*/
    /*
    if ($("#container").hasClass('intro')) $(parent.document).find('#default').addClass('intro')
    else $(parent.document).find('#default').removeClass('intro');
    */
    ////////////////////////////////IFrame control end/////////////////////////////////////////////

    if(video.length > 0){
        var isMob = false;
        var uAgent = navigator.userAgent.toLowerCase();
        //var mobilePhones = new Array('iphone','ipod','ipad','android','blackberry','windows ce', 'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
        var mobilePhones = new Array('iphone','ipod','ipad','android','blackberry','windows ce', 'nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
        for(var i=0;i<mobilePhones.length;i++) {
            if(uAgent.indexOf(mobilePhones[i])!=-1){
                isMob = true;
            }
        }
        if (isMob) {

            $("#container").addClass("mobile");
            $(parent.document).find("#menuFrame").css("top","-2px");
              $(parent.document).find("#menuFrame").css("height","100%");
              $(parent.document).find("#menuFrame").contents().find('#menus').css("height","100%");
            $(".mobilePlayBtn").show();
            video[0].pause();
            $(".mobilePlayBtn").on('click',function  (e) {
                e.preventDefault();
                video[0].play();


                if(bgm){
                  bgm.play();
                }

                $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
                $('.playBtn button').addClass('on');
                $(this).hide();
            });
        }


        //video[0].load()
        video[0].removeAttribute("controls");
        video[0].removeAttribute("autoplay");
        var pageVolume = $(parent.document).find('.pageVolume').text();
        var pageRate = $(".playBackRate li").first().children('button').text();
        video.on('loadedmetadata', function() {

            $('.current').text(timeFormat(0));
            $('.duration').text(timeFormat(video[0].duration));
            updateVolume(0, pageVolume);
            //setTimeout(startBuffer, 150);
            $('.progress-bar').css('width',0);

            $(".playBackRate button[rate='"+pageRate+"']").click();
            video[0].play();
            video[0].playbackRate = pageRate

        });

        video[0].onplay = function () {
            $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
            $('.playBtn button').addClass('on');
            $('.nextClick').hide();
            if($('.open-pop')){
                $('.open-pop').fadeOut();
            }
            parent.videoEnded = false;

            /*인트로 페이지*/
            if(video.hasClass('intro')){
                video.show();
                $('.skipBtn').show();
            }
        };

        video.on('ended',function(){
            $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
            $('.pauseBtn button').addClass('on');
            parent.videoEnded = true;
            $('.currentTime').text(timeFormat(video[0].duration));
            $(".pauseBtn").hide();
      			$(".playBtn").show();
        });

        //video 상태
        var startBuffer = function() {
            var currentBuffer = video[0].buffered.end(0);
            var maxduration = video[0].duration;
            var perc = 100 * currentBuffer / maxduration;
            if(currentBuffer < maxduration) {
                setTimeout(startBuffer, 500);
            }

        };

        //프로그래스 바
        var updatebar = function(x) {
            var progress = $('.progress');
            var maxduration = video[0].duration;
            var position = x - progress.offset().left;
            var percentage = 100 * position / progress.width();
            if(percentage > 100) {
                percentage = 100;
            }
            if(percentage < 0) {
                percentage = 0;
            }
            $('.progress-bar').css('width',percentage+'%');
            video[0].currentTime = maxduration * percentage / 100;
        };

        var timeDrag = false;
        $('.progress').on('mousedown', function(e) {
            timeDrag = true;
            updatebar(e.pageX);
        });
        $(document).on('mouseup', function(e) {
            if(timeDrag) {
                timeDrag = false;
                updatebar(e.pageX);
            }
        });
        $(document).on('mouseout', function(e) {
            if(timeDrag) {
                timeDrag = false;
                updatebar(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(timeDrag) {
                updatebar(e.pageX);
            }
        });

        //플레이 시간
        video.on('timeupdate', function() {
            var currentPos = video[0].currentTime;
            var maxduration = video[0].duration;
            var perc = 100 * currentPos / maxduration;
            if (perc>100) {
                perc=100;
            }
            if (perc<0) {
                perc=0;
            }
            $('.progress-bar').css('width',perc+'%');
            $('.currentTime').text(timeFormat(currentPos));
        });

        //시간값 변경
        var timeFormat = function(seconds){
            var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
            var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
            return m+":"+s;
        };

        //볼륨 컨트롤
        var volumeDrag = false;
        $('.volume').on('mousedown', function(e) {
            volumeDrag = true;
            video[0].muted = false;
            $('.sound').removeClass('muted');
            updateVolume(e.pageX);

        });
        $(document).on('mouseup', function(e) {
            if(volumeDrag) {
                volumeDrag = false;
                updateVolume(e.pageX);
            }
        });
        $(document).on('mousemove', function(e) {
            if(volumeDrag) {
                updateVolume(e.pageX);
            }
        });
        var updateVolume = function(x, vol) {
            var volume = $('.volume');
            var percentage;
            if(vol) {
                percentage = vol * 100;
            }
            else {
                var position = x - volume.offset().left;
                percentage = 100 * position / volume.width();
            }

            if(percentage > 100) {
                percentage = 100;
            }
            if(percentage < 0) {
                percentage = 0;
            }

            $('.volumeBar').css('width',percentage+'%');
            video[0].volume = percentage / 100;

            if(bgm){
      				  bgm.volume = percentage / 100;
      			}
            updatePageVolume = percentage / 100;
            $(parent.document).find('.pageVolume').text(updatePageVolume);
            if(video[0].volume == 0){
                $('.sound').css("display","none");
                $('.mute').css("display","block");
            }else{
                $('.sound').css("display","block");
                $('.mute').css("display","none");
            }

        };
        //재생 일시정지
        video.on('click', function(e){ e.preventDefault()  });
        $('.playBtn button').on('click', function(e) {
            $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
            $(this).addClass('on');
            video[0].play();
            //var bgm = $(".bgm")
      			if(bgm){
      				bgm.play();
      			}
            $('.playBtn').css('display','none');
            $('.pauseBtn').css('display','block');
        });

        $('.pauseBtn button').on('click', function(e) {
            $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
            $(this).addClass('on');
            video[0].pause();
            //var bgm = $(".bgm")
            if(bgm){
              bgm.pause()
            }
            $('.playBtn').css('display','block');
            $('.pauseBtn').css('display','none');
        });

        $('.resetBtn button').on('click', function(e) {
            $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
            updatebar($('.progress').offset().left);
            // $(".playBackRate .option button").removeClass('on');
            // $(".playBackRate .option:first-child button").addClass('on');
            // video[0].playbackRate = $(".playBackRate .option:first-child button").attr('rate');
            video[0].stop();
            $(".pauseBtn").hide();
      			$(".playBtn").show();
        });

        var playpause = function() {
            if(video[0].paused || video[0].ended) {
                video[0].play();
                $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
                $('.playBtn').css('display','none');
                $('.pauseBtn').css('display','block');
            }
            else {
                video[0].pause();
                $('.playBtn button,.pauseBtn button,.resetBtn button').removeClass('on');
                $('.playBtn').css('display','block');
                $('.pauseBtn').css('display','none');
            }
        };

        //10초전
        $(".backwardBtn").click(function(){
            video[0].currentTime -= 10;
        });

        //10초후
        $(".forwardBtn").click(function(){
            video[0].currentTime += 10;
        });

        //음소거
        $('.soundBtn').click(function() {
            video[0].muted = !video[0].muted;
            if(video[0].muted) {
                if(bgm){
                    bgm.volume = 0;
                }
                $('.volumeBar').css('width',0);
                $('.soundBtn .sound').hide();
                $('.soundBtn .mute').css('display','block');
            }
            else{
                if(bgm){
                    bgm.volume = video[0].volume
                }
                $('.volumeBar').css('width', video[0].volume*100+'%');
                $('.soundBtn .sound').css('display','block');
                $('.soundBtn .mute').hide();
            }
        });
        //전체화면

        var fullScreen = function(e){

            var divObj = document.getElementById('container');
            if(divObj.requestFullscreen) {
                divObj.requestFullscreen();
            } else if(divObj.mozRequestFullScreen) {
                divObj.mozRequestFullScreen();
            } else if(divObj.webkitRequestFullscreen) {
                divObj.webkitRequestFullscreen();
            } else if(divObj.msRequestFullscreen) {
                divObj.msRequestFullscreen();
            }else{
                alert('지원하지 않는 브러우저 입니다.');
            }

            e.stopPropagation();
        };

        var exitFullscreen = function(e){

            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if(document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        $('.fullBtn').click(function(e){
            if(!$(this).hasClass('disable')){
                var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                if(fullscreenElement){
                    exitFullscreen();

                }else{
                    fullScreen(e);
                    //$(this).addClass("on")
                }
            }
        });

        //동영상 속도


        $(".playBackRate .option button").click(function(e){
            e.preventDefault();
            $(".playBackRate .option button").removeClass('on');
            $(this).addClass('on');
            video[0].playbackRate = $(this).attr('rate');
            $(parent.document).find('.pageRate').text($(this).attr('rate'));
        });

        //마커 시간변경
        $('.progressGroup .marker a').click(function(e){
            e.preventDefault();
            var time = $(this).attr('time');
            video[0].currentTime = time;
        });

        //자막
        var trackDisplay = $(parent.document).find('.trackDisplay').text();
        var track = document.getElementById("track");
        var disp = document.getElementById("display");
        if(trackDisplay == "on"){
            if(!$('.note').hasClass('disable')){
                $('#display').css('display','block') ;
                $('#dis_close_btn').css('display','block') ;
                $('.display_bg').css('display','block') ;
                $('.note').addClass('on');

            }else{
                $('#display').css('display','none') ;
                $('#dis_close_btn').css('display','none') ;
                $('.display_bg').css('display','none') ;
            }
        }else{
            $('#display').css('display','none') ;
            $('#dis_close_btn').css('display','none') ;
            $('.display_bg').css('display','none') ;
            $('.note').removeClass('on');
        }
        if(track == null){
        }else{
            track.addEventListener("cuechange", function () {
                var myTrack = this.track;             // track element is "this"
                var myCues = myTrack.activeCues;      // activeCues is an array of current cues.
                if (myCues.length > 0) {
                    disp.innerText = myCues[0].text;   // write the text
                }
             });
        }

		$("#dis_close_btn").on('click',function  () {
			if(!$(".note").hasClass('disable')){
                if($('#display').css('display') == 'none'){
                    $('#display').css('display','block') ;
                    $('.display_bg').css('display','block') ;
					$('#dis_close_btn').css('display','block') ;
                    $(parent.document).find('.trackDisplay').text('on');
                    $('.note').addClass('on');
                    $('.display_bg').css('display','block') ;
                }else{
                    $('#display').css('display','none') ;
					$('#dis_close_btn').css('display','none') ;
                    $(parent.document).find('.trackDisplay').text('off');
                    $('.note').removeClass('on');
                      $('.display_bg').css('display','none') ;
                };
            }
		});

        $(".note").click(function(e){
            e.preventDefault();
            if(!$(this).hasClass('disable')){
                if($('#display').css('display') == 'none'){
                    $('#display').css('display','block') ;
                      $('.display_bg').css('display','block') ;
					$('#dis_close_btn').css('display','block') ;
                    $(parent.document).find('.trackDisplay').text('on');
                    $(this).addClass('on');
                }else{
                    $('#display').css('display','none') ;
                      $('.display_bg').css('display','none') ;
					$('#dis_close_btn').css('display','none') ;
                    $(parent.document).find('.trackDisplay').text('off');
                    $(this).removeClass('on');
                };
            }
        });
    }

    //단축키 이벤트
    $(document).keydown(function(e){
        var tag = e.target.tagName.toLowerCase();
        if(tag == 'input' || tag == 'textarea'){
        }else{
            if(e.keyCode == 32){
                playpause();
            }else if(e.keyCode == 38){//위
                updateVolume(0,video[0].volume +0.1);
            }else if(e.keyCode == 40){//아래
                updateVolume(0,video[0].volume -0.1);
            }else if(e.keyCode == 37){//왼쪽
                video[0].currentTime -= 10;
            }else if(e.keyCode == 39){//오른쪽
                video[0].currentTime += 10;
            }else if(e.keyCode == 107){//속도 업
                playRateUp ();
            }else if(e.keyCode == 109){//속도 다운
				playRateDown ();
            }else if(e.altKey && e.which == 84){
               $(".note").trigger('click');
            }else if(e.which == 33){
                $('.prevPageBtn').trigger('click');
            }else if(e.which == 34){
                $('.nextPageBtn').trigger('click');
            }
        }
    });
	var playBackRate = $(".playBackRate");
	function playRateUp () {
		var idx = playBackRate.find('button.on').parent().index();
		if(idx<3) playBackRate.find('>li').eq(idx+1).find('button').click().addClass('on');
	}
	function playRateDown () {
		var idx = playBackRate.find('button.on').parent().index();
		if(idx>0) playBackRate.find('>li').eq(idx-1).find('button').click().addClass('on');
	}


    /*페이지 버튼*/
    $('.nextPage button').click(function(e){
        e.preventDefault();

        var page = currentPageNum+1;
        if(page <= totalPage){
            //menu 닫기////////////////
            window.parent.frames["menuFrame"].menuClose();
            //////////////////////////////
            $(parent.document).find('#contentFrame').attr('src', pageReturn(page)+'.html');
            //menuPage(page);
            currentPage = page;
        }
        exitFullscreen();
    });


    $('.prevPage button').click(function(e){
        e.preventDefault();
        var page = currentPageNum-1;
        if(page >= 1){
            //menu 닫기////////////////
            window.parent.frames["menuFrame"].menuClose();
            //////////////////////////////
            $(parent.document).find('#contentFrame').attr('src', pageReturn(page)+'.html');
            //menuPage(page);
            currentPage = page;
        }
        exitFullscreen();
    });

   //우클릭 방지
    document.oncontextmenu = new Function('return false');
});

function summaryFramToggle () {
    if(!$(parent.document).find('#summaryFrame').is(':visible')) $(parent.document).find('#summaryFrame').show();
    else $(parent.document).find('#summaryFrame').hide();
}
function pageReturn (page) {
    if (page<10) {
        page="0"+page;
    }
    return page;
}

window.onload=function(e) {
    var cpn = $('.currentPageNum').text()==""?"01":$('.currentPageNum').text();
    parent.document.menuFrame.menu_init(cpn);
}
$(function(){
  $(".touch").click(function(){
    $(this).hide()
    playSound('./media/effect/pop.mp3');
  });
})
