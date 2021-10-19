var menuFrame ;
var menus;
var menuBtn;
$(document).ready(function (){
  menus = $("#menus");
  menuBtn = $("#menuBtn");
  menuFrame = $(parent.document).find("#menuFrame");
  var pageNum = $(parent.document).find("#contentFrame").attr('src').split('.')[0];
  init_call(pageNum);
  function init_call (pageNum) {
    menu_init(pageNum);
  }

  $("#menuBtn button").on('click',function  (e) {
    e.preventDefault();

    if($(this).hasClass('in')){
      $(this).removeClass('in');

        menuFrame.animate({left:'-220px'},500,function(){
        $(this).css({width:288});
        menus.hide();
      });
    }else{
      $(this).addClass('in');
      menus.show();
      menuFrame.css({width:288}).animate({left:'0px'},500,function(){

      });
    }

  });
  menus.find('button').on('click',function  (e) {
    e.preventDefault();
    menuClose ();
    if ($(this).attr('page')!="") {
      var page= $(this).attr('page')+'.html';
      $(parent.document).find("#contentFrame").attr('src',page);

    }
  });
  menus.find('button:last').on('keydown',function  (e) {
    if (e.keyCode==9 && !event.shiftKey) {
      menuClose();
    }
  });
  $("#menuBtn button").on('keydown',function  (e) {
    if (e.keyCode==9 && event.shiftKey && $(this).hasClass('in') ) {
      menuClose();
    }
  });
});
function menu_init (pageNum) {
  $("#menus").find('li').removeClass('on');
  var target =$("#menus").find('> ul > li > ul > li > button[page='+pageNum+']').parent();
  if (target.length==0) {
    var _pageNum=pageReturn(parseInt(pageNum));
    menu_init(_pageNum);
    return;
  }
  target.addClass('on').parent().parent().addClass('on');

}
function menuClose () {
  if($("#menuBtn button").hasClass('in')){
    menuFrame.contents().find('#menuBtn button').removeClass('in');
    menuBtn.removeClass('in');
    menuFrame.animate({left:'-220px'},500,function(){
      menus.hide();
      $(this).css({width:288});
    });
  }
}
