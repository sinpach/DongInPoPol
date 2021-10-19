(function($){
	/**
	 * ÅÇ ¸Þ´º
	 **/
	function init_tabs() {
		$(".tab_unit").css("display","none");
		if (!$('ul.unit_tab').length) { return; }
		$('div.tab_unit_wrap').each(function() {
			$(this).find('div.tab_unit:first').fadeIn();
		});
		$('ul.unit_tab a').click(function() {
			if (!$(this).hasClass('current')) {
				$(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');
				$($(this).attr('title')).fadeIn().siblings('div.tab_unit').hide();
			}
			this.blur();
			return false;
		});
	}

	$(function() {
		$(".datepicker").datepicker({
			dateFormat:'yy-mm-dd',
			changeMonth: true,
			changeYear: true
		  });
	});

	$(document).ready(function(){
		init_tabs()

		// GNB
		var menu, menuLi, menuLink;
		menu = $("#m-gnb");
		menuLi = $("#m-gnb > ul > li");
		menuLink = $("#m-gnb > ul > li > .depth1 > a.menu");
		menuLink.on("click", function(){
			if($(this).parents("li").hasClass("on")){
				$(this).parents("li:has(ul)").children("ul").slideUp(250);
				$(this).parents("li:has(ul)").removeClass("on");
			}else{
				menuLi.not($(this).parents("li")).children("ul").slideUp(250);
				menuLi.not($(this).parents("li")).removeClass("on");
				$(this).parents("li:has(ul)").children("ul").slideDown(250);
				$(this).parents("li:has(ul)").addClass("on");
			}
			return false;
		});

		// menu icon states, opening main nav
		$('#menu-icon').click(function(){
			$(this).toggleClass('open');
			$('#gnbBox').toggleClass('open');
		});

		$('a.pagelink').click(function(){
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 500);
			return false;
		});

		/* movTop */
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#wrapper').addClass("scrollOn");
			} else {
				$('#wrapper').removeClass("scrollOn");
			}
		});
	});
})(jQuery)