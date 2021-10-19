var filter = "win16|win32|win64|mac";

if( navigator.platform  ){
    if( filter.indexOf(navigator.platform.toLowerCase())<0 ){
        $(".m_nav_btn").show()
        $("#body").addClass('mobile')
    }else{
        $(".m_nav_btn").hide()
        $("#body").removeClass('mobile')
    }
}
$(function(){
  $( ".m_nav_btn>a" ).click(function() {
    if ($("#left").is(":animated")){
    	return false;
    };

  	if ($("#body").hasClass("m_on")){
      $("#left").animate({left:0},300);
      $("#right").animate({
        left:'358px',
        width:'1562px'
      },300);
      $(".popbg .correct.plan-popup").animate({
        left:'399px',
        width:'1480px'
      },300);

    } else {
      $("#left").animate({left:"-358px"},300);
      $("#right").animate({
        left:0,
        width:'1920px'
      },300);
      $(".popbg .correct.plan-popup").animate({
        left:'41px',
        width:'1838px'
      },300);
    };

    $("#body").toggleClass("m_on");
  });
});
function horizonBarAnimate(result_table){

    var percentText = $(result_table +" .result-percent span").text()
    var percentTextThis = $(result_table +" .result-percent span")
    var readyWidth = percentTextThis.parents(result_table).children("colgroup").children("col").first()
    readyWidth.animate({width: [percentText+'%']});
}
function horizonBarAnimate2(risk){
  for (var i = 0; i < 6; i++) {
    var high_bar = $(".high_bar"+i+risk);
    var high_barWidth = high_bar.children('p');
    var high_barText = high_bar.next('td').text();
    high_barWidth.animate({width:[high_barText]});

    var safe_bar = $(".safe_bar"+i+risk);
    var safe_barWidth = safe_bar.children('p');
    var safe_barText = safe_bar.next('td').text();
    safe_barWidth.animate({width:[safe_barText]});

    var middle_bar = $(".middle_bar"+i+risk);
    var middle_barWidth = middle_bar.children('p');
    var middle_barText = middle_bar.next('td').text();
    middle_barWidth.animate({width:[middle_barText]});
  }

}

function horizonBarAnimate3(box){
    var low_result = $(box +" .content-box .result_bar .low")
    var high_result = $(box +" .content-box .result_bar .high")
    var low_Text = $(box +" .content-box .low_result>span").text()
    var high_Text = $(box +" .content-box .high_result>span").text()
    var low_resultText = 100 - low_Text
    var high_resultText = 100 -  high_Text
    low_result.animate({'right': low_resultText +'%'});
    high_result.animate({'left': high_resultText +'%'});
}


/*설계결과 nav*/


function design_result(){
  var iframe = $("#iframe").attr("src");
  var iframeNum;
  if(iframe){
      iframeNum = iframe.replace(/[^0-9]/g, "");
  }
  var all_a = $("a[data-num]");
  var a_on = $("a[data-num="+iframeNum+"]");
  var data_tab = $("a[data-tab]")
  all_a.removeClass("on")
  a_on.addClass("on");
  a_on.parents(".nav1").addClass("active");
  a_on.parents(".nav1").siblings(".nav1").removeClass("active");

  Num = parseFloat(iframeNum)
  if( 5 >= Num  ){
    data_tab.removeClass("on")
    $("a[data-tab='01']").addClass("on")
  }else if (6 <= Num && Num < 12) {
    data_tab.removeClass("on")
    $("a[data-tab='02']").addClass("on")
  }else if (12 <= Num && Num < 20) {
    data_tab.removeClass("on")
    $("a[data-tab='03']").addClass("on")
  }else if (20 <= Num && Num < 24) {
    data_tab.removeClass("on")
    $("a[data-tab='04']").addClass("on")
  }else if (24 <= Num && Num < 26) {
    data_tab.removeClass("on")
    $("a[data-tab='05']").addClass("on")
  }else if (26 <= Num && Num < 37) {
    data_tab.removeClass("on")
    $("a[data-tab='06']").addClass("on")
  }else if (37 <= Num && Num < 39) {
    data_tab.removeClass("on")
    $("a[data-tab='07']").addClass("on")
  }else if (39 <= Num && Num < 46) {
    data_tab.removeClass("on")
    $("a[data-tab='08']").addClass("on")
  }

  if(1 == Num){
    $(".i_prev").hide();
    $(".i_next").show();
  }else if(45 == Num){
    $(".i_next").hide();
    $(".i_prev").show();
  }else{
    $(".i_prev").show();
    $(".i_next").show();
  }
  var totalPageNum = $(".left-menu a[data-num]").last().attr('data-num')

}
$(function(){
  var totalPageNum = $(".left-menu a[data-num]").last().attr('data-num')
  var iframe = $("#iframe").attr("src");
  var iframeNum;
  if(iframe){
      iframeNum = iframe.replace(/[^0-9]/g, "");
  }
  var all_a = $("a[data-num]");
  var a_on = $("a[data-num="+iframeNum+"]");
  var data_tab = $("a[data-tab]")
  design_result()
  all_a.click(function(){
    $("#iframe").attr("src","./design_result/"+ $(this).attr('data-num') +'.html');
    design_result()
  });
  $('.i_prev').click(function(){
    var iframe = $("#iframe").attr("src");
    var iframeNum;
    if(iframe){
        iframeNum = iframe.replace(/[^0-9]/g, "");
    }
    iframeNum--
    if(10 <= iframeNum ){
      $("#iframe").attr("src","./design_result/"+ iframeNum +'.html');
     
    }else{
      $("#iframe").attr("src","./design_result/0"+ iframeNum +'.html');
     
    }
    design_result()
  });
  $('.i_next').click(function(){
    var iframe = $("#iframe").attr("src");
    var iframeNum;
    if(iframe){
        iframeNum = iframe.replace(/[^0-9]/g, "");
    }
    iframeNum++
    if(10 <= iframeNum ){
      $("#iframe").attr("src","./design_result/"+ iframeNum +'.html');
      
    }else{
      $("#iframe").attr("src","./design_result/0"+ iframeNum +'.html');
     
    }
    design_result()



  });



});
