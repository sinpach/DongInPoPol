$(function () {
  $(".schTab a").click(function (event) {
    event.preventDefault();
    var idx = $(this).parent("li").index();
    $(".schTab li").removeClass("active pr");
    $(this).parent("li").addClass("active");
    if(!idx == 0){
      $(".schTab li").eq(idx - 1).addClass("pr")
    }
  });

  $(".sch_category a").click(function(){
    $(".sch_category").removeClass("on")
    $(this).parent(".sch_category").addClass("on")
  });

  $(".arrow_down").click(function(){
    $(this).siblings(".item_content").toggleClass("hidden");
  });
});