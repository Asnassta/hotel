function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {

	/*========mobile-menu=========*/
  $(".burger").on("click", function(event) {
    event.preventDefault();
      $(".mobile-menu").toggleClass('show'); 
      $('body').addClass('hidden'); 
  });

  $(".mobile-menu__close").on("click", function() {
      $(".mobile-menu").removeClass('show');
      $('body').removeClass('hidden');   
  });
  $(".mobile-menu__bg").on("click", function() {
      $(".mobile-menu").removeClass('show');
      $('body').removeClass('hidden');   
  });
  /*========/mobile-menu=========*/

/*=================Sliders===================*/
  /*========intro-slider========*/
  $('.intro__slider').slick({
  	fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.intro .slider-arrow_prev'),
    nextArrow: $('.intro .slider-arrow_next'),
    dots: true,
  });
  /*=======/intro-slider========*/
/*=================/sliders===================*/

});


