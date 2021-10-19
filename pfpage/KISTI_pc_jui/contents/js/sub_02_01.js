$(function () {
  $(".scNav>ul>li>a").click(function(event){
    event.preventDefault();
    var nav = $(".scNav>ul>li")
    var idx = $(this).parent("li").index();
    var sc = $(".scPackageArea>ul>li")
    nav.removeClass("active")
    $(this).parent("li").addClass("active")

    if(idx == 0 ){
      sc.show();
    }else{
      sc.hide();
      sc.eq(idx -1).show();
      // console.log(aa)
    }
  });


});