$(function () {
  $(".re_set").click(function(){
    $("input:checkbox").prop("checked", false);
    $("select").prop('selectedIndex', 0);
    $("input:radio").prop("checked", false);
  });

  $(".all_chk").click(function(){
    var allchk = $(this).parent().siblings("li").children("input")
    allchk.prop('checked', this.checked);
  });

});