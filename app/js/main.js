// $('.main-slider .swiper-container').each(function(){
//     var main_slider = new Swiper(this, {

// const { default: Swiper } = require("swiper");

// const { default: Swiper } = require("swiper");

     
//         navigation: {
//             nextEl: $(this).parent().find('.swiper-button-next'),
//             prevEl: $(this).parent().find('.swiper-button-prev'),
//         }
//     pagination: {
//         el:  $(this).parent().find('.swiper-pagination'),
//         type: 'fraction',
//       },

// });
// });

var aboutSlider = new Swiper('.main-slider .swiper-container', {
    pagination: {
        el: '.main-slider .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.main-slider .swiper-button-next',
        prevEl: '.main-slider .swiper-button-prev',
      },
  });

$('.content-slider').each(function(){
  if($(this).hasClass('price__slider') || $(this).hasClass('questions__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 60,
      slidesPerView: 1,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
    });
  } else if($(this).hasClass('reviews__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
    });
  } else if ($(this).hasClass('gallery__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
    });
  } else if($(this).hasClass('articles__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 10,
      slidesPerView: 4,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
    });
  } else {
    var contentSlider = new Swiper(this, {    
      spaceBetween: 60,
      slidesPerView: 2,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
    });
  }
  
});

//Table tips

$('.price__icon-container').mouseover(function(){
  $(this).find('.price__tip').addClass('active');
});
$('.price__icon-container').mouseleave(function(){
  $(this).find('.price__tip').removeClass('active');
});


//FAQ dropdown


$('.questions-dropdown__title-block').click(function(){
  $(this).toggleClass('active');
  $(this).next().toggleClass('active').slideToggle();
  $(this).find('.questions-dropdown__arrow-icon').toggleClass('active');
});


