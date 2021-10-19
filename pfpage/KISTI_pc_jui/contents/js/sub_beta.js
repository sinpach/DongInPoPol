$(function () {

//  var ellipsis = function (con, c){
//    con.each(function () {
//      var length = c; 
//      $(this).each(function () {
//        if ($(this).text().length >= length) {
//          $(this).text($(this).text().substr(0, length) + ' ...')
//        }
//      });
//    });
//  }
//  ellipsis($(".mdCon>div"), 228);
//  ellipsis($(".el32"), 32);
//  ellipsis($(".el40"), 40);

 $(".arrow_down").click(function () {
   $(this).parent().siblings(".item_content").toggleClass("hidden");
 });
$("#schfilter_btn").mouseenter(function () {
  
  if ($(this).hasClass("tip_on")){
    return false;
  }else{
    $(".tip").fadeIn();
    $(this).addClass("tip_on");
  }
});
$(".tip_close").click(function () {
  $(".tip").fadeOut();
});
  
  $(".keyword").mouseover(function(){
    $(this).addClass("on")
  });
  $(".keyword").mouseleave(function () {
    $(this).removeClass("on")
  });

});