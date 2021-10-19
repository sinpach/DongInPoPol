$(document).ready(function(){
    $('.changeBtn').click(function(){    
        if($(this).hasClass('kjcon')){
            $('.changeBtn.kjcon').hide();
            $('.changeBtn.jcon').css('display','block');
            $('.scroll').show();
            $('#video')[0].pause();
            $('#video').hide();
            $('.contentbg').css('background','url("./img/content/p3/contentbg.png") 0 0 no-repeat');
        }else{
            $('.changeBtn.jcon').hide();
            $('.changeBtn.kjcon').css('display','block');
            $('.scroll').hide();
            $('#video')[0].currentTime = 7;//로그인화면 넘기기
            $('#video')[0].play();
            $('#video').show();
            $('.nextClick').hide();
            $('.contentbg').css('background','none');
            $('.videochange').hide();
        }
    });

    $('.replay').click(function(){
        $('.videochange').hide();
        $('.scroll').hide();
        $('#video').show();
        $('.contentbg').css('background','none');
        $('.changeBtn.jcon').hide();
        $('.changeBtn.kjcon').css('display','block');
    });
});


