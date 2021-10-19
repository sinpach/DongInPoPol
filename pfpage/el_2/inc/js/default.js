function get_version_of_IE() {

   var version = "N/A";

   var agent = navigator.userAgent.toLowerCase();
   var name = navigator.appName;

   // IE old version ( IE 10 or Lower )
   if ( name == "Microsoft Internet Explorer" ) {
     $("#contentFrame").attr('src','help.html');
     $("#menuFrame").hide()
   }

   else {
     // IE 11
     if ( agent.search("trident") > -1 ){
      $("#contentFrame").attr('src','01.html');
      $("#menuFrame").show()
     }

     // Microsoft Edge
     else if ( agent.search("edge/") > -1 ){
       $("#contentFrame").attr('src','01.html');
       $("#menuFrame").show()
     }

   }
   return version;
}
$(document).ready(function() {
    get_version_of_IE()



    var pw;
    var ph;
    chkMobileDevice();
    var lowVersion = false;

    function chkMobileDevice() {
        var uAgent = navigator.userAgent.toLowerCase();
        //alert(uAgent.indexOf('version/4'))
        if (uAgent.indexOf('version/4') > -1 || uAgent.indexOf('chrome/3') > -1) {
            lowVersion = true;
        }
    }


    $(window).resize(function() {
        var iframe_w = $("#contentFrame").width();
        var iframe_h = $("#contentFrame").height();
				var con_w = $("#contentFrame").contents().find("#contents").width();
				var con_h = $("#contentFrame").contents().find("#contents").height();
				var bottom_w = $("#contentFrame").contents().find("#bottom_wrap").width();
				var w = (iframe_w - con_w);
				var h	= (iframe_h - con_h);
				var bw = (iframe_w - bottom_w);
        var m_h	= (iframe_h - con_h - 67);
        var l_h	= (iframe_h - con_h );
        var mobile_h = $("#contentFrame").contents().find("#container").hasClass("mobile")
        if(mobile_h){
           $("#contentFrame").contents().find("#contents").css("margin-top", m_h/2 );
           $(".learning_wrap").css("margin-top", m_h/2);
        }else{
          $("#contentFrame").contents().find("#contents").css("margin-top", h/2 - 1);
          $(".learning_wrap").css("margin-top", l_h/2);

        }

          $("#contentFrame").contents().find("#display").css("margin-left", bw/2);
    	  $("#contentFrame").contents().find("#contents").css("margin-left", w/2);

				// $("#contentFrame").contents().find("#bottom_wrap").css("margin-left", bw/2);
    });




});
$(window).load(function() {
    $(window).trigger('resize');
})
