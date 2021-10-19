var choiceCount1 = 0;
var choiceCount2 = 0;
var choiceCount3 = 0;
var choiceCount4 = 0;
var choiceCount5 = 0;
var choiceCount6 = 0;
var choiceCount7 = 0;
var choiceCount8 = 0;

$(document).ready(function(){
    /*p9 퀴즈 페이지*/
    $('.quizPage a').click(function(e){
        e.preventDefault();
        var page = $(this).attr('title');
        if($(this).hasClass('selected')){
            return false;
        }else{
            $('.quizPage a').removeClass('selected');
            $(this).addClass('selected');
            changeqPage(page);
            
        }
    })

    $('.nextBtn').click(function(e){
        e.preventDefault();
        var page = $(this).attr('qpageNum');
        if(!page == ""){
            $('.quizPage a').removeClass('selected');
            $('.quizPage a[title='+page+']').addClass('selected');
        }
        changeqPage(page);

    });

    /*문제 정오답 체크*/
    /*
        input : 문제의 input value;
        quizPageNum : 해당문제의 페이지 class;
        quizNum : 해당 문제 번호
    */
    function quizCheck(input, quizPageNum, quizNum){
        if(input == $('.'+quizPageNum+' .'+quizNum+' .correct .cor').text()){
            $('.'+quizPageNum+' .'+quizNum+'').addClass('right');
            $('.'+quizPageNum+' .'+quizNum+'input').attr('disabled','true');
        }else{
            $('.'+quizPageNum+' .'+quizNum+'').addClass('wrong');
            $('.'+quizPageNum+' .'+quizNum+'input').attr('disabled',false);
        }        
    }

    /*드래그*/
    function drag(dragItem, dragItemLeft, dragItemRight, dragIn){
        var ol = $(''+dragItem+'').offset().left; //해당 카드의 left
        var ot = $(''+dragItem+'').offset().top; //해당 카드의 top

        var w = $(''+dragIn+'').width(); //카드가 놓일 곳의 width
        var h = $(''+dragIn+'').height();//카드가 놓일 곳의 height
        var tl = $(''+dragIn+'').offset().left;//카드가 놓일 곳의 left
        var tt = $(''+dragIn+'').offset().top;//카드가 놓일 곳의 top
        var left = $(''+dragIn+'').offset().left - 172;
        var top = $(''+dragIn+'').offset().top - 177;
        var minLeft = tl - w;
        var minTop = tt - h;
        var maxLeft = tl + w;
        var maxTop = tt + h;


    //     if(ol > minLeft && ol < maxLeft && ot > minTop && ot < maxTop){
    //         $(''+dragItem+'').draggable('disable');
    //         $(''+dragIn+'').animate({'width' : $(''+dragItem+'').width()+5},500);
    //         $(''+dragItem+'').animate({
    //             left:left, top:top, height:h, padding: 0
    //         },500,function(){
    //             $(''+dragItem+'').addClass('com');
    //             $(''+dragIn+'').addClass('com').text($(''+dragItem+'').text());
    //             $(''+dragItem+'').hide();
    //         }); 
    //         playSound('./media/effect/quiz_o.mp3');
    //         $(''+dragItem+'').attr('item',true);
    //     }else{
    //         $(''+dragItem+'').animate({left:dragItemLeft, top:dragItemRight},500);
    //         playSound('./media/effect/quiz_x.mp3');
    //     }
    // }
    if(ol > minLeft && ol < maxLeft && ot > minTop && ot < maxTop){
            $(''+dragItem+'').draggable('disable');
            $(''+dragItem+'').animate({
                left:left, top:top, height:h, padding: 0
            },500,function(){
                $(''+dragItem+'').addClass('com');
                $(''+dragIn+'').addClass('com').text($(''+dragItem+'').text());
                $(''+dragItem+'').hide();
            }); 
            $(''+dragItem+'').css('width','auto');
            $(''+dragIn+'').animate({'width' : $(''+dragItem+'').width()+5},500);
            playSound('./media/effect/quiz_o.mp3');
            $(''+dragItem+'').attr('item',true);
        }else{
            $(''+dragItem+'').animate({left:dragItemLeft, top:dragItemRight},500);
            playSound('./media/effect/quiz_x.mp3');
        }
    }
function quizPlayAudio(){
        $('video')[0].pause();
        $('.playBtn .play').css("display","block");
        $('.playBtn .pause').css("display","none");
}
$('.quizbox input[type=text]').keydown(function(){
         quizPlayAudio();
    });
  /*q1 객관식 퀴즈~*/
function quizPlayAudio(){
        $('video')[0].pause();
        $('.playBtn .play').css("display","block");
        $('.playBtn .pause').css("display","none");
}
$('.quizbox input[type=text]').keydown(function(){
         quizPlayAudio();
    });


   var quiz1item1Left = $('.quizbox01 .drag .dragitem1').css('left');
    var quiz1item1Top = $('.quizbox01 .drag .dragitem1').css('top');
    var quiz1item2Left = $('.quizbox01 .drag .dragitem2').css('left');
    var quiz1item2Top = $('.quizbox01 .drag .dragitem2').css('top');
    var quiz1item3Left = $('.quizbox01 .drag .dragitem3').css('left');
    var quiz1item3Top = $('.quizbox01 .drag .dragitem3').css('top');

    function dragBox01(){
        quizPlayAudio();
        if($(this).hasClass('dragitem1')){ //해당 아이템이 1번인 경우
            drag('.quizbox01 .dragitem1', quiz1item1Left, quiz1item1Top,'.quizbox01 .quiz1 .dragin');
        }else if($(this).hasClass('dragitem2')){
            drag('.quizbox01 .dragitem2', quiz1item2Left, quiz1item2Top,'.quizbox01 .quiz3 .dragin');
        }else if($(this).hasClass('dragitem3')){
            drag('.quizbox01 .dragitem3', quiz1item3Left, quiz1item3Top,'.quizbox01 .quiz2 .dragin');
        }

        var quizPageNum = 'quizbox01';
        var item1 = $('.'+quizPageNum+' .dragitem1').attr('item');
        var item2 = $('.'+quizPageNum+' .dragitem2').attr('item');
        var item3 = $('.'+quizPageNum+' .dragitem3').attr('item');

        if( item1 == 'true' && item2 == 'true' && item3 == 'true'){
            $('.'+quizPageNum+' .drag .translate').fadeIn();
            if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','none');
                $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
            }else{/*다시풀기를 안한경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','block');
            }
            $('.'+quizPageNum).attr('right','true');
            
            $('.aodBox').show();/*교수님 음성*/
            $('#aod')[0].play();/*교수님 시작*/
        }
    }

    $('.quizbox01 .drag .item').draggable({
        stop:dragBox01 //드래그가 끝낫을 경우 onStop function 실행
    });
    
    /*q2*/
   var quiz2item1Left = $('.quizbox02 .drag .dragitem1').css('left');
    var quiz2item1Top = $('.quizbox02 .drag .dragitem1').css('top');
    var quiz2item2Left = $('.quizbox02 .drag .dragitem2').css('left');
    var quiz2item2Top = $('.quizbox02 .drag .dragitem2').css('top');

    function dragBox02(){
        quizPlayAudio();
        if($(this).hasClass('dragitem1')){ //해당 아이템이 1번인 경우
            drag('.quizbox02 .dragitem1', quiz2item1Left, quiz2item1Top,'.quizbox02 .quiz1 .dragin');
        }else if($(this).hasClass('dragitem2')){
            drag('.quizbox02 .dragitem2', quiz2item2Left, quiz2item2Top,'.quizbox02 .quiz2 .dragin');
        }

        var quizPageNum = 'quizbox02';
        var item1 = $('.'+quizPageNum+' .dragitem1').attr('item');
        var item2 = $('.'+quizPageNum+' .dragitem2').attr('item');

        if( item1 == 'true' && item2 == 'true'){
            $('.'+quizPageNum+' .drag .translate').fadeIn();
            if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','none');
                $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
            }else{/*다시풀기를 안한경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','block');
            }
            $('.'+quizPageNum).attr('right','true');
            
            $('.aodBox').show();/*교수님 음성*/
            $('#aod')[0].play();/*교수님 시작*/
        }
    }

    $('.quizbox02 .drag .item').draggable({
        stop:dragBox02 //드래그가 끝낫을 경우 onStop function 실행
    });
    
    /*q3 주관식 퀴즈~*/
    $('.quizbox03 .shortAnswer .confirmBtn').click(function(e){
        e.preventDefault();
        quizPlayAudio();
        var quizPageNum = 'quizbox03';
        var input1 = $('.'+quizPageNum+' .quiz1input').val();
        var input2 = $('.'+quizPageNum+' .quiz2input').val();
        var input3 = $('.'+quizPageNum+' .quiz3input').val();

        if(input1 == "" || input2 == "" || input3 == ""){
            $('.alert_r').fadeIn(1000,function(){
                $(this).fadeOut(2000);
            });
        }else{
            if(choiceCount3 == 0){// 해당 문제를 처음 풀엇을 경우

                quizCheck(input1, 'quizbox03', 'quiz1');
                quizCheck(input2, 'quizbox03', 'quiz2');
                quizCheck(input3, 'quizbox03', 'quiz3');

                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                    $('.alert_x.normal').fadeIn(1000,function(){
                        $(this).fadeOut(2000);
                    });
                    choiceCount3++;
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');

                    $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                    $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                    $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                    if($('.'+quizPageNum+' .quiz.right').length == 3){/*모두 정답일경우*/
                        $('.'+quizPageNum).attr('right','true');
                    }

                    $('.aodBox').show();/*교수님 음성*/
                    $('#aod')[0].play();/*교수님 시작*/

                    if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','none');
                        $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                    }else{/*다시풀기를 안한경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','block');
                    }
                    $(this).hide();

                    choiceCount3 = 2;
                }else{
                    return false;
                }

            }else if(choiceCount3 == 1){// 해당 문제를 두번째 풀엇을 경우
                $('.'+quizPageNum+' .quiz').removeClass('wrong').removeClass('right');
                quizCheck(input1, 'quizbox03', 'quiz1');
                quizCheck(input2, 'quizbox03', 'quiz2');
                quizCheck(input3, 'quizbox03', 'quiz3');
                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');
                }else{
                    return false;
                }
                $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                if($('.'+quizPageNum+' .quiz.right').length == 3){/*모두 정답일경우*/
                    $('.'+quizPageNum).attr('right','true');
                }
                $('.aodBox').show();/*교수님 음성*/
                $('#aod')[0].play();/*교수님 시작*/
                if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','none');
                    $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                }else{/*다시풀기를 안한경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','block');
                }
                $(this).hide();
                choiceCount3 = 2;
            }else{
                return false;
            }
        }   
    });
    
    /*q4 주관식 퀴즈~*/
    $('.quizbox04 .shortAnswer .confirmBtn').click(function(e){
        e.preventDefault();
        quizPlayAudio();
        var quizPageNum = 'quizbox04';
        var input1 = $('.'+quizPageNum+' .quiz1input').val();
        var input2 = $('.'+quizPageNum+' .quiz2input').val();

        if(input1 == "" || input2 == "" ){
            playSound('./media/effect/pop.mp3');
            $('.alert_r').fadeIn(1000,function(){
                $(this).fadeOut(2000);
            });
        }else{
            if(choiceCount4 == 0){// 해당 문제를 처음 풀엇을 경우

                quizCheck(input1, 'quizbox04', 'quiz1');
                quizCheck(input2, 'quizbox04', 'quiz2');

                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                    $('.alert_x.normal').fadeIn(1000,function(){
                        $(this).fadeOut(2000);
                    });
                    choiceCount4++;
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');

                    $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                    $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                    $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                    if($('.'+quizPageNum+' .quiz.right').length == 2){/*모두 정답일경우*/
                        $('.'+quizPageNum).attr('right','true');
                    }

                    $('.aodBox').show();/*교수님 음성*/
                    $('#aod')[0].play();/*교수님 시작*/

                    if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','none');
                        $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                    }else{/*다시풀기를 안한경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','block');
                    }
                    $(this).hide();

                    choiceCount4 = 2;
                }else{
                    return false;
                }

            }else if(choiceCount4 == 1){// 해당 문제를 두번째 풀엇을 경우
                $('.'+quizPageNum+' .quiz').removeClass('wrong').removeClass('right');
                quizCheck(input1, 'quizbox04', 'quiz1');
                quizCheck(input2, 'quizbox04', 'quiz2');
                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');
                }else{
                    return false;
                }
                $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                if($('.'+quizPageNum+' .quiz.right').length == 2){/*모두 정답일경우*/
                    $('.'+quizPageNum).attr('right','true');
                }

                $('.aodBox').show();/*교수님 음성*/
                $('#aod')[0].play();/*교수님 시작*/
                
                if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','none');
                    $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                }else{/*다시풀기를 안한경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','block');
                }
                $(this).hide();
                choiceCount4 = 2;
            }else{
                return false;
            }
            
        }
        
    });

    
    /*q5*/
   var quiz5item1Left = $('.quizbox05 .drag .dragitem1').css('left');
    var quiz5item1Top = $('.quizbox05 .drag .dragitem1').css('top');
    var quiz5item2Left = $('.quizbox05 .drag .dragitem2').css('left');
    var quiz5item2Top = $('.quizbox05 .drag .dragitem2').css('top');
    var quiz5item3Left = $('.quizbox05 .drag .dragitem3').css('left');
    var quiz5item3Top = $('.quizbox05 .drag .dragitem3').css('top');

    function dragBox05(){
        quizPlayAudio();
        if($(this).hasClass('dragitem1')){ //해당 아이템이 1번인 경우
            drag('.quizbox05 .dragitem1', quiz5item1Left, quiz5item1Top,'.quizbox05 .quiz2 .dragin');
        }else if($(this).hasClass('dragitem2')){
            drag('.quizbox05 .dragitem2', quiz5item2Left, quiz5item2Top,'.quizbox05 .quiz3 .dragin');
        }else if($(this).hasClass('dragitem3')){
            drag('.quizbox05 .dragitem3', quiz5item3Left, quiz5item3Top,'.quizbox05 .quiz1 .dragin');
        }

        var quizPageNum = 'quizbox05';
        var item1 = $('.'+quizPageNum+' .dragitem1').attr('item');
        var item2 = $('.'+quizPageNum+' .dragitem2').attr('item');
        var item3 = $('.'+quizPageNum+' .dragitem3').attr('item');

        if( item1 == 'true' && item2 == 'true' && item3 == 'true'){
            $('.'+quizPageNum+' .drag .translate').fadeIn();
            if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','none');
                $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
            }else{/*다시풀기를 안한경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','block');
            }
            $('.'+quizPageNum).attr('right','true');
            
            $('.aodBox').show();/*교수님 음성*/
            $('#aod')[0].play();/*교수님 시작*/
        }
    }

    $('.quizbox05 .drag .item').draggable({
        stop:dragBox05 //드래그가 끝낫을 경우 onStop function 실행
    });
    
    /*q6*/
    var quiz6item1Left = $('.quizbox06 .drag .dragitem1').css('left');
    var quiz6item1Top = $('.quizbox06 .drag .dragitem1').css('top');
    var quiz6item2Left = $('.quizbox06 .drag .dragitem2').css('left');
    var quiz6item2Top = $('.quizbox06 .drag .dragitem2').css('top');

    function dragBox06(){
        quizPlayAudio();
        if($(this).hasClass('dragitem1')){ //해당 아이템이 1번인 경우
            drag('.quizbox06 .dragitem1', quiz6item1Left, quiz6item1Top,'.quizbox06 .quiz1 .dragin');
        }else if($(this).hasClass('dragitem2')){
            drag('.quizbox06 .dragitem2', quiz6item2Left, quiz6item2Top,'.quizbox06 .quiz2 .dragin');
        }

        var quizPageNum = 'quizbox06';
        var item1 = $('.'+quizPageNum+' .dragitem1').attr('item');
        var item2 = $('.'+quizPageNum+' .dragitem2').attr('item');

        if( item1 == 'true' && item2 == 'true'){
            $('.'+quizPageNum+' .drag .translate').fadeIn();
            if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','none');
                $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
            }else{/*다시풀기를 안한경우*/
                $('.'+quizPageNum+' .nextBtn').css('display','block');
            }
            $('.'+quizPageNum).attr('right','true');
            
            $('.aodBox').show();/*교수님 음성*/
            $('#aod')[0].play();/*교수님 시작*/
        }
    }

    $('.quizbox06 .drag .item').draggable({
        stop:dragBox06 //드래그가 끝낫을 경우 onStop function 실행
    });
    /*q7*/
    $('.quizbox07 .shortAnswer .confirmBtn').click(function(e){
        e.preventDefault();
        quizPlayAudio();
        var quizPageNum = 'quizbox07';
        var input1 = $('.'+quizPageNum+' .quiz1input').val();
        var input2 = $('.'+quizPageNum+' .quiz2input').val();

        if(input1 == "" || input2 == ""){
            playSound('./media/effect/pop.mp3');
            $('.alert_r').fadeIn(1000,function(){
                $(this).fadeOut(2000);
            });
        }else{
            if(choiceCount7 == 0){// 해당 문제를 처음 풀엇을 경우

                quizCheck(input1, 'quizbox07', 'quiz1');
                quizCheck(input2, 'quizbox07', 'quiz2');

                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                    $('.alert_x.normal').fadeIn(1000,function(){
                        $(this).fadeOut(2000);
                    });
                    choiceCount7++;
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');

                    $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                    $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                    $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                    if($('.'+quizPageNum+' .quiz.right').length == 2){/*모두 정답일경우*/
                        $('.'+quizPageNum).attr('right','true');
                    }

                    $('.aodBox').show();/*교수님 음성*/
                    $('#aod')[0].play();/*교수님 시작*/

                    if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','none');
                        $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                    }else{/*다시풀기를 안한경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','block');
                    }
                    $(this).hide();

                    choiceCount7 = 2;
                }else{
                    return false;
                }

            }else if(choiceCount7 == 1){// 해당 문제를 두번째 풀엇을 경우
                $('.'+quizPageNum+' .quiz').removeClass('wrong').removeClass('right');
                quizCheck(input1, 'quizbox07', 'quiz1');
                quizCheck(input2, 'quizbox07', 'quiz2');
                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');
                }else{
                    return false;
                }
                $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                if($('.'+quizPageNum+' .quiz.right').length == 2){/*모두 정답일경우*/
                    $('.'+quizPageNum).attr('right','true');
                }

                $('.aodBox').show();/*교수님 음성*/
                $('#aod')[0].play();/*교수님 시작*/
                
                if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','none');
                    $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                }else{/*다시풀기를 안한경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','block');
                }
                $(this).hide();
                choiceCount7 = 2;
            }else{
                return false;
            }
            
        }
        
    });
 /*q8*/
     $('.quizbox08 .shortAnswer .confirmBtn').click(function(e){
        e.preventDefault();
        quizPlayAudio();
        var quizPageNum = 'quizbox08';
        var input1 = $('.'+quizPageNum+' .quiz1input').val();
        var input2 = $('.'+quizPageNum+' .quiz2input').val();
        var input3 = $('.'+quizPageNum+' .quiz3input').val();

        if(input1 == "" || input2 == "" || input3 == ""){
            // $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');//추가
            playSound('./media/effect/pop.mp3');
            $('.alert_r').fadeIn(1000,function(){
                $(this).fadeOut(2000);
            });
        }else{
            if(choiceCount8 == 0){// 해당 문제를 처음 풀엇을 경우

                quizCheck(input1, 'quizbox08', 'quiz1');
                quizCheck(input2, 'quizbox08', 'quiz2');
                quizCheck(input3, 'quizbox08', 'quiz3');

                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                    $('.alert_x.normal').fadeIn(1000,function(){
                        $(this).fadeOut(2000);
                    });
                    choiceCount8++;
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');

                    $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                    $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                    $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                    if($('.'+quizPageNum+' .quiz.right').length == 3){/*모두 정답일경우*/
                        $('.'+quizPageNum).attr('right','true');
                    }

                    $('.aodBox').show();/*교수님 음성*/
                    $('#aod')[0].play();/*교수님 시작*/

                    if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                        $('.'+quizPageNum+' .nextBtn').css('display','none');
                        $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                    }else{/*다시풀기를 안한경우*/
                        $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                    }
                    $(this).hide();

                    choiceCount8 = 2;
                }else{
                    return false;
                }

            }else if(choiceCount8 == 1){// 해당 문제를 두번째 풀엇을 경우
                $('.'+quizPageNum+' .quiz').removeClass('wrong').removeClass('right');
                quizCheck(input1, 'quizbox08', 'quiz1');
                quizCheck(input2, 'quizbox08', 'quiz2');
                quizCheck(input3, 'quizbox08', 'quiz3');
                if($('.'+quizPageNum+' .quiz').hasClass('wrong')){/*오답일경우*/
                    playSound('./media/effect/quiz_x.mp3');
                }else if($('.'+quizPageNum+' .quiz').hasClass('right')){/*정답일경우*/
                    playSound('./media/effect/quiz_o.mp3');
                }else{
                    return false;
                }
                $('.'+quizPageNum+' .shortAnswer .correct').show();/*정답*/
                $('.'+quizPageNum+' .shortAnswer .translate').css('display','block');/*번역*/
                $('.'+quizPageNum+' .quizinput input').attr('disabled',true);
                if($('.'+quizPageNum+' .quiz.right').length == 3){/*모두 정답일경우*/
                    $('.'+quizPageNum).attr('right','true');
                }

                $('.aodBox').show();/*교수님 음성*/
                $('#aod')[0].play();/*교수님 시작*/
                
                if($('.'+quizPageNum).attr('check') == "true"){/*다시풀기를 해서 넘어온경우*/
                    $('.'+quizPageNum+' .nextBtn').css('display','none');
                    $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                }else{/*다시풀기를 안한경우*/
                    $('.'+quizPageNum+' .shortAnswer .resultBtn').css('display','block');
                }
                $(this).hide();
                choiceCount8 = 2;
            }else{
                return false;
            }
            
        }
        
    });

    $('.resultBtn').click(function(){
        $('.practice').hide();
        $('.result').show();

        for (var i = 1; i <= $('.quizbox').length; i++) {
            if($('.quizbox0'+i+'').attr('right') == "true"){
                $('.requiz'+i+' .comitem').removeClass('nocom');
                $('.requiz'+i+' .comitem').addClass('com');
            }    
        };
        
        $('#aod')[0].pause();
        $('.nextClick').fadeIn();
        $('.recount').text($('.quizbox[right=true]').length);
    });

    $('.requiz1 a').click(function(e){
        e.preventDefault();

        $('.practice').show();
        $('.result').hide();

        quizRe('Q1','01');
        $('.quizbox01').attr('check','true');
        choiceCount1 = 0;

        $('.quizbox01 .drag .item').show().removeClass('com').attr('item',false);
        $('.quizbox01 .drag .dragin').text('').removeClass('com');
        $('.quizbox01 .drag .dragitem1').css({
            left : quiz1item1Left,
            top : quiz1item1Top,
            padding: "0 20px",
            width: '170px'
        });
        $('.quizbox01 .drag .dragitem2').css({
            left : quiz1item2Left,
            top : quiz1item2Top,
            padding: "0 20px",
            width: '170px'
        });
        $('.quizbox01 .drag .dragitem3').css({
            left : quiz1item3Left,
            top : quiz1item3Top,
            padding: "0 20px",
            width: '170px'
        });
         $('.quizbox01 .drag .dragin').css({
            width: '231px'
         });
        $('.quizbox01 .drag .item').draggable('enable');
    });

    $('.requiz2 a').click(function(e){
        e.preventDefault();

        $('.practice').show();
        $('.result').hide();

        quizRe('Q2','02');
        $('.quizbox02').attr('check','true');
        choiceCount2 = 0;

        $('.quizbox02 .drag .item').show().removeClass('com').attr('item',false);
        $('.quizbox02 .drag .dragin').text('').removeClass('com');
        $('.quizbox02 .drag .dragitem1').css({
            left : quiz2item1Left,
            top : quiz2item1Top,
            padding: "0 20px",
            width: '190px'
        });
        $('.quizbox02 .drag .dragitem2').css({
            left : quiz2item2Left,
            top : quiz2item2Top,
            padding: "0 20px",
            width: '190px'
        });
         $('.quizbox02 .drag .dragin').css({
            width: '231px'
         });
        $('.quizbox02 .drag .item').draggable('enable');
    });
    
    $('.requiz3 a').click(function(e){
        e.preventDefault();
        $('.practice').show();
        $('.result').hide();
        quizRe('Q3','03');
        $('.quizbox03').attr('check','true');
        choiceCount3 = 0;
    });

    $('.requiz4 a').click(function(e){
        e.preventDefault();
        $('.practice').show();
        $('.result').hide();
        quizRe('Q4','04');
        $('.quizbox04').attr('check','true');
        choiceCount4 = 0;
    });

    $('.requiz5 a').click(function(e){
        e.preventDefault();

        $('.practice').show();
        $('.result').hide();

        quizRe('Q5','05');
        $('.quizbox05').attr('check','true');
        choiceCount5 = 0;

        $('.quizbox05 .drag .item').show().removeClass('com').attr('item',false);
        $('.quizbox05 .drag .dragin').text('').removeClass('com');
        $('.quizbox05 .drag .dragitem1').css({
            left : quiz5item1Left,
            top : quiz5item1Top,
            padding: "0 20px",
            width: '170px'
        });
        $('.quizbox05 .drag .dragitem2').css({
            left : quiz5item2Left,
            top : quiz5item2Top,
            padding: "0 20px",
            width: '170px'
        });
        $('.quizbox05 .drag .dragitem3').css({
            left : quiz5item3Left,
            top : quiz5item3Top,
            padding: "0 20px",
            width: '170px'
        });
         $('.quizbox05 .drag .dragin').css({
            width: '200px'
         });
        $('.quizbox05 .drag .item').draggable('enable');
    });

    $('.requiz6 a').click(function(e){
        e.preventDefault();

        $('.practice').show();
        $('.result').hide();

        quizRe('Q6','06');
        $('.quizbox06').attr('check','true');
        choiceCount6 = 0;

        $('.quizbox06 .drag .item').show().removeClass('com').attr('item',false);
        $('.quizbox06 .drag .dragin').text('').removeClass('com');
        $('.quizbox06 .drag .dragitem1').css({
            left : quiz6item1Left,
            top : quiz6item1Top,
            padding: "0 20px",
            width: '230px'
        });
        $('.quizbox06 .drag .dragitem2').css({
            left : quiz6item2Left,
            top : quiz6item2Top,
            padding: "0 20px",
            width: '230px'
        });
         $('.quizbox06 .drag .dragin').css({
            width: '231px'
         });
        $('.quizbox06 .drag .item').draggable('enable');
    });

    $('.requiz7 a').click(function(e){
        e.preventDefault();
        $('.practice').show();
        $('.result').hide();
        quizRe('Q7','07');
        $('.quizbox07').attr('check','true');
        choiceCount7 = 0;
    });
    $('.requiz8 a').click(function(e){
        e.preventDefault();
        $('.practice').show();
        $('.result').hide();
        quizRe('Q8','08');
        $('.quizbox08').attr('check','true');
        choiceCount8 = 0;
    });

});


/* 퀴즈 다시 풀기*/
function quizRe(quiz,quizNum){
    var page = quiz;
    if(!page == ""){
        $('.quizPage a').removeClass('selected');
        $('.quizPage a[title='+page+']').addClass('selected');
    }
    changeqPage(page);

    $('.quizbox'+quizNum+' .quiz').removeClass('wrong');
    $('.quizbox'+quizNum+' .quiz').removeClass('right');
    $('.quizbox'+quizNum+' .quizinput input').attr('disabled',false);
    $('.quizbox'+quizNum+' .quizinput input').val("");
    $('.quizbox'+quizNum+' .quizinput .correct').hide();
    $('.quizbox'+quizNum+' .box').hide();
    $('.quizbox'+quizNum+' .confirmBtn').css("display","block");
    $('.quizbox'+quizNum+' .resultBtn').hide();
    $('.quizbox'+quizNum+' .nextBtn').hide();
    $('.quizbox'+quizNum+' .translate').hide();
    
}

function changeqPage(page){
    if(page == "Q1"){
        $('.quizbox').hide();
        $('.quizbox01').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-1.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox01').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q2"){
        $('.quizbox').hide();
        $('.quizbox02').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-2.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox02').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q3"){
        $('.quizbox').hide();
        $('.quizbox03').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-3.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox03').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q4"){
        $('.quizbox').hide();
        $('.quizbox04').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-4.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox04').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q5"){
        $('.quizbox').hide();
        $('.quizbox05').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-5.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox05').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q6"){
        $('.quizbox').hide();
        $('.quizbox06').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-6.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox06').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q7"){
        $('.quizbox').hide();
        $('.quizbox07').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-7.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox07').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }else if(page == "Q8"){
        $('.quizbox').hide();
        $('.quizbox08').show();
        $('#aod').attr('src','./media/mp3/10-1-10-10-8.mp3');
        $('#aod')[0].load();
        $('.ctime').text('00:00');
        if($('.quizbox08').attr('check') == "false"){
            $('.aodBox').hide();
        }else{
            $('.aodBox').show();
        }
    }
}
