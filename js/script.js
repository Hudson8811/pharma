$(function() {
  $('.btn11').click(function() {
       $(this).toggleClass("open");
       $(".menu").toggleClass("active");
  });
});

if (window.innerWidth < 999) {
  $('.mobile_partner_slider').owlCarousel({
      items:1,
      loop:true,
      margin:0,
      nav:true,
      navText:['<', '>'],
      dots:false,
      responsive:{
              0:{
                  items:1
              },
              450:{
                  items:2
              },
              600:{
                  items:3
              }
          }
  });
}

$(document).ready(function(){
    $('.fancybox').fancybox();
});

