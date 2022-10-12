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

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(333);
        $(".popup."+name_pop+" .popup__inner").fadeIn(333);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('333');
        $(".popup__inner").fadeOut(333);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

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

	/*========photo-slider========*/
  	$('.photo-slider').slick({
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow: $('.photo .arrow-circle_prev'),
  		nextArrow: $('.photo .arrow-circle_next'),
  		responsive: [
    	 {
    	   breakpoint: 1400,
    	    settings: {
    	        slidesToShow: 3,
    	        slidesToScroll: 1,
    	    }
    	  },
    	  {
    	   breakpoint: 769,
    	    settings: {
    	        slidesToShow: 2,
    	        slidesToScroll: 1,
    	    }
    	  },
    	  {
    	   breakpoint: 547,
    	    settings: {
    	        slidesToShow: 1,
    	        slidesToScroll: 1,
    	    }
    	  },
    	]
  	});
	/*=======/photo-slider========*/
/*=================/sliders===================*/
});



