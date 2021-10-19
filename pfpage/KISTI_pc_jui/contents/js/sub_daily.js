$(function () {



  $(".tab_nav a").click(function (event) {
    event.preventDefault();
    var idx = $(this).parent("li").index();
    $(".tab_nav li").removeClass("active pr");
    $(this).parent("li").addClass("active");
    if(!idx == 0){
      $(".tab_nav li").eq(idx - 1).addClass("pr")
    }
    $(".tab_con_list>li").removeClass("on");
    $(".tab_con_list>li").eq(idx - 1).addClass("on");
  });

  

  $(".arrow_down").click(function(){
    $(this).siblings(".item_content").toggleClass("hidden");
  });



  $(".weekly_btn_wrap a").click(function(){
    var openHeight = $(".weekly_wt_list").outerHeight();
    if($(this).hasClass("on")){
      $(this).removeClass("on");
      $(this).text("주간예보 닫기");
      $(".weekly_wt").css("margin-top", "23px")
      $(".weekly_wt").animate({
        height: openHeight
      },300);
    }else{
      $(this).addClass("on");
      $(this).text("주간예보 보기")
      $(".weekly_wt").animate({
        height: 0
        
      },function(){ $(".weekly_wt").css("margin-top", "0px")});
    }
      

  });

  

  $(".my_calendar>ul>li>a").click(function(){
    $(this).toggleClass("on");
  });
  

  $(".set_btn").click(function(){
    $(".local_popup_wrap").fadeIn();
  });
  $(".confirm_btn, .cancel_btn, .local_pop_bg").click(function(){
    $(".local_popup_wrap").fadeOut();

  });
  $(".google_interlink, .my_calendar>ul>li>a").click(function () {
    $(".calendar_area").css("height","950px");
    $(".google_interlink").fadeOut();
    
  });


  

  
});


document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    titleFormat: function (date) { 
      return date.date.year + ". " + (date.date.month + 1) + ".";
    },
    titleRangeSeparator: '.',
    defaultRangeSeparator: ' 181818',
    headerToolbar: {
      left: 'today',
      center: 'title',
      right: 'prev,next'
    },
    
    buttonText :{
      today : "오늘"
    },
    googleCalendarApiKey: 'AIzaSyCw_zWjOEs9nQABxhwvC4gaKpgmsRX5fA0',
    eventSources: [
      {
        googleCalendarId: 'kim1983q@gmail.com',
        className: 'event1'
      },
      {
        googleCalendarId: 'urip0ub4prh6af148dopt0eu9o@group.calendar.google.com',
        className: 'event2'
      },
      
      {
        googleCalendarId: '6fjlpf62nhelhfifn3i6nc7b58@group.calendar.google.com',
        className: 'event3'
      },
    ],
  
   

    eventClick: function (arg) {
      // opens events in a popup window
      window.open(arg.event.url, 'google-calendar-event', 'width=700,height=600');
      arg.jsEvent.preventDefault() // don't navigate in main tab
    },
  });
  
  calendar.render();

});



  