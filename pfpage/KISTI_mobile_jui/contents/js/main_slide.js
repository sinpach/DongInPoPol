var swiper;
var folderSwiper;
$(function () {


  // 2020-10-20 추가 start 
   folderSwiper = new Swiper('.folder_swiper ', {
      slidesPerView: 5,
      freeMode: true,
     
  });
  // 2020-10-20 추가 end
  var galleryThumbs = new Swiper('.nav_slide_wrap', {
	  spaceBetween: 5,
    slidesPerView: 5,
    draggable:false,
  });


 

  swiper = new Swiper('.swiper-container1', {
    //slidesPerView: 'auto',
    loopedSlides: 1,
    autoHeight: true,
    loop: true,
    name: 'debugger',
    params: {
      debugger: false,
    },
    on: {
   
      reachEnd: function (swiper) {
          // if (!swiper.params.debugger) return;
          // setCookie("MOBILE_CUR_TAB", 0, 7);
        },
        slideNextTransitionEnd: function (swiper) {
          // if (!swiper.params.debugger) return;
          // var active = this.realIndex;
          // if (active > 0) {
            
          //   setCookie("MOBILE_CUR_TAB", active, 7);
          // }

        },
        slidePrevTransitionEnd: function (swiper) {
          // if (!swiper.params.debugger) return;
          // var active = this.realIndex;
          // if (active >= 0) {
          //   setCookie("MOBILE_CUR_TAB", active, 7);
          // } 
        },
        slideChange: function (swiper) {
	        if (!swiper.params.debugger) return;
	        var active = this.activeIndex - 1;
	
	
	        var acIdx = $(".sub_nav li").eq(active);
          var left1 = acIdx.position().left;
          
          // if (active <= 3 && active > 0) {
            
          //   $(".sub_nav").css({
          //     transform: "translate3d(-" + left1 + "px,0,0)"
          //   });
          // } else if (active < 0 || active > 3) {
          //   $(".sub_nav").css({
          //     transform: "translate3d(-246.562px,0,0)"
          //   });
          // }
	       
	      },
     
    },
    thumbs: {
      swiper: galleryThumbs,
      autoScrollOffset : 0
    },
    debugger: true,
  });
  
  // swiper.slideTo($("#tabId").val(),0);
  
})

