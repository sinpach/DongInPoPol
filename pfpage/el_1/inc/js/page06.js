$(document).ready(function(e){
		/*p6 카드 뒤집기*/
    var leftCard = "";
    var rightCard = "";
    $('#cardContainer .leftCards .jcard').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('complet')){
            leftCard = $(this).attr('answer');
            if(!rightCard == ""){
                if(leftCard == rightCard){
                    playSound('./media/effect/quiz_o.mp3');
                    $('.rightCards a[answer="'+rightCard+'"]').addClass('complet');
                    $('.leftCards a[answer="'+leftCard+'"]').hide();
                    $('.leftCards .sound'+leftCard+'').show();

                    leftCard = "";
                    rightCard ="";
                }else{
                    playSound('./media/effect/quiz_x.mp3');
                    $('.leftCards a[answer="'+leftCard+'"]').removeClass('selected');
                    $('.rightCards a[answer="'+rightCard+'"]').removeClass('selected');

                    leftCard = "";
                    rightCard = "";
                }
                $('video')[0].pause();
                $('.playBtn .pause').hide();
                $('.playBtn .play').css('display','block');
            }else{
                $('.leftCards .jcard').removeClass('selected');
                $(this).addClass('selected');
            }
        }
    });

    $('#cardContainer .rightCards .kcard').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('complet')){
            rightCard = $(this).attr('answer');
            if(!leftCard == ""){
                if(leftCard == rightCard){
                    playSound('./media/effect/quiz_o.mp3');
                    $('.rightCards a[answer="'+rightCard+'"]').addClass('complet');
                    $('.leftCards a[answer="'+leftCard+'"]').hide();
                    $('.leftCards .sound'+leftCard+'').show();

                    leftCard = "";
                    rightCard ="";
                }else{
                    playSound('./media/effect/quiz_x.mp3');
                    $('.leftCards a[answer="'+leftCard+'"]').removeClass('selected');
                    $('.rightCards a[answer="'+rightCard+'"]').removeClass('selected');

                    leftCard = "";
                    rightCard = "";
                }
                $('video')[0].pause();
                $('.playBtn .pause').hide();
                $('.playBtn .play').css('display','block');
            }else{
                $('.rightCards .kcard').removeClass('selected');
                $(this).addClass('selected');
            }
        }
        if($('.kcard.complet').length == 10){//카드 총갯수
            $('.nextClick').fadeIn();
        }

    });

    $('.speak').click(function(e){
        e.preventDefault();
        var sound = $(this).parent('.jcard').attr('sound');
        $('audio').attr('loop', false);
        $('.replay').removeClass('play');
        playSound(sound);
        $('video')[0].pause();
        $('.playBtn .pause').hide();
        $('.playBtn .play').css('display','block');
    });
    
    $('.replay').click(function(e){
        e.preventDefault();
        var sound = $(this).parent('.jcard').attr('sound');
        if($(this).hasClass('play')){
            $(this).removeClass('play');
            $('audio')[0].pause();
            $('audio').attr('loop', false);
        }else{
            var src = $(this).attr('href');
            $(this).addClass('play');
            playSound(sound);
            $('audio').attr('loop', true);
        }
        $('video')[0].pause();
        $('.playBtn .pause').hide();
        $('.playBtn .play').css('display','block');
    });

    $('.cardslidepage .totalslide').text($('.cardSlide').length);

    $('.cardslidepage .slidenext').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('dis')){
            $('.cardSlide.slide1').animate({'left':'-930px' },'slow');
            $('.cardSlide.slide2').animate({'left':'0px' },'slow');

            $('.cardslidepage a').removeClass('dis');
            $(this).addClass('dis');
            $('.cardslidepage .curslide').text('2');
            $('.replay').removeClass('play');
            $('audio')[0].pause();
            $('audio').attr('loop', false);
        }
    });
    $('.cardslidepage .slideprev').click(function(e){
        e.preventDefault();
        if(!$(this).hasClass('dis')){
            $('.cardSlide.slide1').animate({'left':'0px' },'slow');
            $('.cardSlide.slide2').animate({'left':'930px' },'slow');

            $('.cardslidepage a').removeClass('dis');
            $(this).addClass('dis');
            $('.cardslidepage .curslide').text('1');
            /*클릭시 반복듣기 정지*/
            $('.replay').removeClass('play');
            $('audio')[0].pause();
            $('audio').attr('loop', false);
        }

    })
});

