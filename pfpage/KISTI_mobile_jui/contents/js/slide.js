$(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 'auto',
    autoHeight: true,
    
    pagination: {
      el: '.sub_nav',
      clickable: true,
      renderBullet: function (index, className) {
        var names = [];
        $(" .swiper-wrapper .swiper-slide").each(function (i) {
          names.push($(this).data("name"));
        });
        return '<li class="' + className + '">' + names[index] + '</li>';
      },
    },
  });

})