/*---------fixed-------------*/
// window.addEventListener("scroll", function(){
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
//   })
  /*---------fixed-------------*/
  
  /*---------hide-------------*/
  
  $(".accordion__title-block").click(function(event){
    $(this).next().slideToggle(500);
    $('.accordion__item', this).toggleClass('active')
  });
  /*---------hide-------------*/