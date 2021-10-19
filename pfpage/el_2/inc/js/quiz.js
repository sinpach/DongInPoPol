$(document).ready(function (){

  //총 문제수
  var question_total_cnt=2;
  //문제 재시도 회수
  var max_wCnt=1;
  //정답
  var ranswer =[4,1];
  //맞은수
  var ranswerCnt = 0;
  //초기화
  quiz_init();
  h3_hide();
  $('.quiz_start_btn').hide();


  //replay 버튼 초기화 추가 ////////////
  $('.rePlayBtn').on('click',function(){
    retry();
    $('.quiz1').show();
    $(".quiz_nav").hide()
  });
  //////////////////////////////////////////
  function quiz_init () {
    $(".quiz_nav").find('li').removeClass('on').eq(0).addClass('on')
    $(".question_wrap > li").each(function  (idx) {
      $(this).find('.answer_list').attr({
        'data-ranswer':ranswer[idx],
        'data-try':'0',
        'data-true':'0'
      });
      $(this).css({display:"none"});
      ranswerCnt=0;
    });
    $(".question_wrap > li").eq(0).css({display:"block"})
    $(".rs").html('');
  }

  //퀴즈시작!
  $(".quiz_start_btn button").on('click',function  (e) {
    e.preventDefault();
    h3_show();
    var bgm = $("#bgm")[0]
    bgm.pause();
    $(this).parent().parent().hide();
    //$(".quiz_nav").show()
    $(".question_wrap").show();
    //$(".question_wrap > li").eq(0).css({"display":"block"})
    //퀴즈 aod 정지////////////////////////
    video[0].currentTime=14;
    video[0].pause();
    $('.playBtn .pause').hide();
    $('.playBtn .play').css('display','block');
    ////////////////////////////////////////
  });

  $(".quiz_nav button").on('click',function  (e) {
    e.preventDefault();
    var idx=$(this).parent().index();
    if (idx>0) {
      var cnt = parseInt($(".question_wrap > li").eq(idx-1).find('.answer_list').attr('data-try'));
      var cnt2 = parseInt($(".question_wrap > li").eq(idx-1).find('.answer_list').attr('data-true'));
      //console.log(cnt+'cnt');
      if (cnt<1 && cnt2==0) {
        return false;
      }
    }
    $(".quiz_nav li").removeClass('on')
    $(this).parent().addClass('on');
    $(".question_wrap > li").css({"display":"none"}).eq(idx).css({"display":"block"})
  });

  $(".answer_btn").on('click',function  () {
    $(".answer_btn").removeClass('on');
    $(this).addClass('on');

    var wCnt = parseInt($(this).parent().parent().attr('data-try'));
    //console.log(wCnt);
    if(wCnt>max_wCnt) return;

    //check ico 제어
    $(".check_ico").remove();
    $(this).append('<div class="check_ico"></div>');

    checkAnswer($(this))
  });

  //정답체크
  function checkAnswer (btn) {
    var answerList = btn.parent().parent();
    var ranswer = answerList.attr('data-ranswer');
    var answer =btn.attr('data-value');
    var wCnt = parseInt(answerList.attr('data-try'));

    if (ranswer != answer) { //오답
      answerList.attr('data-true','0');
      playSound('./media/effect/quiz_x.mp3');
      if(wCnt<max_wCnt){
        //alert('오답입니다.');
        $(".alert").removeClass('o').removeClass('x').addClass('s');
      }else {
        show_right_answer(answerList);
        marking(answerList,false)
        $(".alert").removeClass('s').removeClass('o').addClass('x');
      }

      $(".alert").fadeIn(300,function  () {
        setTimeout(function  () {
          $(".alert").fadeOut(400);
        },1000)
      })
    }else { //정답
      $(".alert").removeClass('s').removeClass('x').addClass('o');
      ranswerCnt++;
      ++wCnt;
      answerList.attr('data-true','1');
      show_right_answer(answerList,true);
      marking(answerList,true)
      playSound('./media/effect/quiz_o.mp3');
      $(".alert").fadeIn(300,function  () {
        setTimeout(function  () {
          $(".alert").fadeOut(400);
        },1000)
      })
    }
    answerList.attr('data-try',++wCnt);
  }
  function quizAlert () {
    if (ranswer != answer) {
      if (wCnt<max_wCnt) {

      }else{

      }

    }else $(".alert").removeClass('o').addClass('x');
    $(".alert").fadeIn(300,function  () {
      setTimeout(function  () {
        $(".alert").fadeOut(400);
      },1000)
    })

  }
  // 채점표시
  function marking (target,flag) {
    target.find('.marking').remove();
    target.find('.ra').find('.num').addClass('r');
    target.find('.ra').addClass('r');
    var targetTopPos= target.find('.ra').position().top-5;
    //console.log("target pos ="+targetTopPos);
    if (flag) {
      target.parent().find('.question').append('<div class="marking ok"></div>')
    }else {
      target.parent().find('.question').append('<div class="marking no"></div>')
    }
    target.parent().append('<div class="quizmask"></div>');
    //target.parent().append('<div class="ans_pointer"></div>');
    $(".ans_pointer").css({top:targetTopPos})
  }

  // 해설확인
  function show_right_answer (tg) {
    var target = tg.next()
    target.css({display:"block"});
    var ranswer = target.prev().attr('data-ranswer');
    target.find('.num').addClass('act'+ranswer);
    target.animate({bottom:0},function  () {
      target.find('>button').show().focus()
    });
  }

  //다음문제
  $(".nextBtn").on('click',function  (e) {
    e.preventDefault();
    var curNum = $(this).parent().parent().index() + 1;
    $(".question_wrap > li").each(function  (idx) {
      if (idx==curNum) $(this).css({display:"block"});
      else $(this).css({display:"none"});
    });
    //$(".quiz_nav li").removeClass('on').eq(curNum).addClass('on');
  });

  $(".rsBtn").on('click',function  (e) {
    e.preventDefault();
    $('.nextClick').fadeIn();
    h3_hide();
    $(".choice").hide();
    var html="";;

    html+='<h4 class="">RESULT</h4>';


    html+='<p class="rs_desc"><span class="">총</span> <em class="total_cnt">'+question_total_cnt+'</em>문제 중 <em class="ranswer_cnt">'+ranswerCnt+'</em><span class=""> <b>문제</b>를 맞혔습니다.</span></p>';
    html+='<ul class="marking">';

    $(".question_wrap > li").each(function  (idx) {
      var ranswer = $(this).find('.answer_list').attr('data-true');
      if (ranswer==1) {
        html+='	<li class="ir"><span class="marking2 ok"></span></li>';
      }else {
        html+='	<li class="ir"><span class="marking2 no"></span></li>';
      }
      $(this).css('display','none');
    });
    html+='</ul>';
    html+='<div class="re_text">문제를 다시 한번 풀어보시려면 <span>다시풀기</span> 버튼을 클릭하시고, 계속 진행하시려면 다음 페이지로 이동하세요.</div>'
    html+='<button class="retry_btn">다시풀기</button>';
    $(".rs").html(html);
    $(".rs").fadeIn();
  });
  $(".rs").on('click','.retry_btn',function  (e) {
    e.preventDefault();
    retry();
  });
  function retry () {
    // $(".quiz_nav").show();
    h3_show();
    quiz_init();
    $(".choice").show();
    $(".answerWrap").css({bottom:60});
    $(".answerWrap").css({"display":"none"})
    $(".question_wrap > li").eq(0).css({"display":"block"})
    //$(".answerWrap  button").css({'display':'none'});
    $(".num").removeClass('r');
    $(".answer_btn").removeClass('r');
    $(".rs").css({'display':'none'});
    $('.quizmask').remove();
    $('.answer_pointer').remove();
    $(".check_ico").remove();
    $(".marking").remove();
  }

  function h3_hide () {
    $("#header > h3").addClass('off')
  }
  function h3_show () {
    $("#header > h3").removeClass('off')
  }

  //$(".rsBtn").click()
  var count = 0;
  video.on('ended',function(){
    $('.quiz_start_btn').click();
    // var bgm = $(".bgm")[0]
    // bgm.pause();
  });
});
