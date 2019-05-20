$(function() {
$('.btn11').click(function() {
     $(this).toggleClass("open");
     $(".menu").toggleClass("active");
});
});



















$('.preheader .row .regist_block .block_autorized a:first-child').click(function(){
  $('#login_form').arcticmodal()
 });
 
 $('.modal--form .forget_pass').click(function(){
  $('#login_form').arcticmodal("close");
  $('#reset__pass').arcticmodal();
 });
 



$(".numbox").mask("+7 (999) 999-99-99");

(function($) {
$(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

});
})(jQuery);

(function($) {
$(function() {

    $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.map_block').removeClass('active').eq($(this).index()).addClass('active');
    });

});
})(jQuery);


jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});


$(function() {

    $('.main-window .content-block .filters__block .tabs .tabs__content .filter__body.type--2  ul li').on('click',  function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
        
    });

});




$(function() {

    $('.main-window .content-block .filters__block .tabs .tabs__content .filter_block .caption_block').on('click',  function() {

            if($(this).parent().hasClass("active"))
            $(this).parent().removeClass('active');
         else{
            $(this).parent()
            .addClass('active').siblings().removeClass('active');
         }
            

         
    });

});








let selectHouse = document.querySelectorAll('.caption_block.cp'); 

//элемент выпадающего списка 
let selectHouseArray = [].slice.call(selectHouse); 

for(let i=0; i< selectHouseArray.length; i++){ 
selectHouseArray[i].nextElementSibling.style.display = 'none'; 
} 


selectHouseArray.map((item)=>{ 
item.addEventListener('click', function(e) { 


//если отображается 
if(!e.target.nextElementSibling.style.display){ 

e.target.nextElementSibling.style.display = "none"; 
return; 
} 

toggleSelect(selectHouseArray, item); 

}); 

}); 



//переключение выпадающего списка 
function toggleSelect(selectArray, currentHouseSelect,currentIsPrevious=false){ 
for(let i=0; i< selectArray.length; i++){ 
selectArray[i].nextElementSibling.style.display = 'none'; 
} 

//если мы нажимаем на один и тот же (текущий = предыдущий) 
if(currentIsPrevious) return; 

currentHouseSelect.nextElementSibling.style.display = ""; 



}





$(function() {
    $('.preheader .row .right_side .regist_block').on('click', function() {
            $(this)
            .addClass('active');
            
             $(".preheader .row .regist_block .block_autorized").toggleClass("hide");
    });

})





$('.main__page .slider_block').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    navText:false,
    dots:false,

});


$('.sliderMobil').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    navText:false,
    dots:false,

});

$('.catalog__item .image_block').owlCarousel({
    items:1,
    loop:false,
    margin:0,
    nav:true,
    navText:false,
    dots:false,

});

$('.fillings .item .image_block').owlCarousel({
    items:1,
    loop:false,
    margin:0,
    nav:true,
    navText:false,
    dots:false,

});

$('.sliderMobil .owl-prev').html('<i class="fas fa-chevron-left"></i>');
$('.sliderMobil .owl-next').html('<i class="fas fa-chevron-right"></i>');
$(document).ready(function() {
  $('.select').niceSelect();
})




$(function() {
$('.description .btn-full').click(function() {
     $(this).parent().toggleClass("js-open");
     $(this).toggleClass("hideI");
     
});
});




$( document ).ready(function(){

    $( ".apartments_items .left_side .item a" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
      $(this).toggleClass("js-open");
      $(this).parent().siblings(".apartments_info").slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    });
  });


 


$('.tabs_block .tabs_lincks .tab_link').click(function() {
$('.tabs_block .tabs_lincks .tab_link').removeClass('active');
$(this).addClass('active');
$('.tabs_block .tabs_items .tab_item').removeClass('active')
.eq($(this).index()).addClass('active');
return false;
});



$( document ).ready(function(){

    $( ".poster .carcas .advert .filling .tabs_block .tabs_items .tab_item .buttons__block a.button:first-child" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
      $(this).parent().parent().parent().prev().children().find(".active").removeClass("active").prev().toggleClass("active");
      $(this).parent().parent().removeClass("active").prev().toggleClass("active"); // плавно скрываем, или отображаем все элементы <div>
    });
  });


$( document ).ready(function(){

    $( ".poster .carcas .advert .filling .tabs_block .tabs_items .tab_item .buttons__block a.button:last-child" ).click(function(){ // задаем функцию при нажатиии на элемент с классом slide-toggle
      $(this).parent().parent().parent().prev().children().find(".active").removeClass("active").addClass("fully").next().toggleClass("active");
      $(this).parent().parent().removeClass("active").next().toggleClass("active"); // плавно скрываем, или отображаем все элементы <div>
    });
  });


$(function() {

    $('.main-window .content-block .filters__block .tabs .tabs__content .filter__body.type--2  ul li').on('click', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
        
    });

});


$(function() {

    $('.fillings .big_fliters .row .filter_block .caption_block').on('click', function() {

              if($(this).parent().hasClass("active"))
            $(this).parent().removeClass('active');
         else{
            $(this).parent()
            .addClass('active').siblings().removeClass('active');
         }
            

         
    });

});

$(function() {

    $('.fillings .filter a').on('click', function() {

            $(this)
            .toggle('hide');
            $(".fillings .big_fliters")
            .toggle('hide');

         
    });

});


$(function() {

    $('.fillings .big_fliters .row .btn3').on('click', function() {

            $(".fillings .big_fliters")
            .toggle('hide');
            $(".fillings .filter a")
            .toggle('hide');

         
    });

});








  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.button--up').fadeIn();
      else $('.button--up').fadeOut();
    });
    $('.button--up').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });







$(function() {

    $('.main-window .content-block .filters__block .tabs .tabs__content .btn3').on('click', function() {

            $(this).toggleClass('active2');
            $(this).closest("div.tabs__content").find(".not-imp").toggleClass("js-non-active");
            $(this).closest("div.tabs__content").find(".btn1").toggleClass("active2");

         
    });

});






$(function() {

    $('.fillings .item .sell_block button').on('hover', function() {

            
            $(this).closest("div.item").find(".menu_card").toggleClass("hide");


         
    });

});

