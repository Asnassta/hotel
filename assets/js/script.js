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
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
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
  	new Swiper('.photo-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    resizeReInit: true,
    navigation: {
        nextEl: '.arrow-circle_next',
        prevEl: '.arrow-circle_prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        547: {
          slidesPerView: 2,
        },
        769: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }
  });
/*=======/photo-slider========*/

/*========page-slider========*/
  new Swiper('.page-slider-main', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow_next',
      prevEl: '.slider-arrow_prev',
    },
    thumbs: {
      swiper: {
        el: '.page-slider-min',
        //loop: true,
        slidesPerView: 5,
        spaceBetween: 16,
        breakpoints: {
          320: {
            spaceBetween: 4,
          },
          993: {
            spaceBetween: 16,
          },
        },
      },
      autoScrollOffset: 1,
    },
  });
/*=======/page-slider========*/


/*=================/sliders===================*/

$('.copyright__year').html((new Date()).getFullYear());

/*==========Form============*/
$("form").submit(function(e) {

	console.log($('form').attr('id'));

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var actionUrl = form.attr('action');
	name_input = form.find('input[name="name"]')
	phone_input = form.find('input[name="phone"]')
	
	$('.form__item').removeClass('error');
	if(name_input.val().length == 0)
  {  
 
    name_input.parent().addClass('error');
  }
  if(phone_input.val().length == 0)
  {
    phone_input.parent().addClass('error');
  }

  if(name_input.val().length == 0 || phone_input.val().length == 0)
  {
    return false;
  }

	
    form.find('.form-success').addClass('show');
 
    $.ajax({
        type: "POST",
        url: 'http://127.0.0.1/',
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {
          alert(data); // show response from the php script.
        }
    });
    
});
/*==========/form============*/

});


