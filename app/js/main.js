
/*---------BURGER------------*/
$(".menu-burger").click(function(){
  $(".menu-burger,.menu").toggleClass("active");
      $('html').toggleClass('no-scroll');
      $('.menu__link').click(function(){
        $('html').removeClass('no-scroll');
        $(".menu-burger,.menu").removeClass("active");
      })
});
/*---------BURGER------------*/









