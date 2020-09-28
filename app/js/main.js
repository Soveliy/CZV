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

<<<<<<< HEAD
// const sliders = document.querySelectorAll('.swiper-container');

// sliders.forEach((el) => {
// 	let swiper = new Swiper(el, {
// 		slidesPerView: 3,
// 		spaceBetween: 10,
// 		loop: true,
// 		pagination: {
// 			el: el.querySelector('.swiper-pagination'),
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: el.querySelector('.swiper-button-next'),
// 			prevEl: el.querySelector('.swiper-button-prev'),
// 		},
// 	});
// });
=======
>>>>>>> parent of 9cdaf12... Item, doc
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
      breakpoints: {        
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },       
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
    });
  } else if ($(this).hasClass('gallery__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 30,
      slidesPerView: 3,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
      breakpoints: {        
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },   
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },     
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
    });
  } else if($(this).hasClass('articles__slider')){
    var contentSlider = new Swiper(this, {    
      spaceBetween: 10,
      slidesPerView: 4,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
      breakpoints: {        
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },   
        768: {
          slidesPerView: 2,
          spaceBetween: 0
        },     
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
      
    });
  } else {
    var contentSlider = new Swiper(this, {    
      spaceBetween: 60,
      slidesPerView: 2,
      navigation: {
        nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
        prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
      },
      breakpoints: {        
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },       
        1024: {
          slidesPerView: 2,
          spaceBetween: 40
        }
      }
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

<<<<<<< HEAD
$('.options-buttons__search-btn').click(function(){
    $(this).next().toggleClass('js-active');
  });
  



// upload width Browser
windowSize = $(window).width(); 
$(window).on('resize', function(event){
windowSize = $(window).width(); 
});


$(".header__buttons-item-icon--edit").on('click', function(){
    $(".mobile-buttons").slideToggle();
    $(".mobile-menu").hide();
    $(".burger").removeClass("js-active")
})
$(".burger").on('click', function(){
    $(this).toggleClass("js-active")
    $(".mobile-menu").slideToggle();
    $(".mobile-buttons").hide();
})
$(".mobile-menu__nav > ul > li > span").on('click', function(){

  
    if(windowSize < 1025){
    if ($(this).hasClass("js-active")) {
        $(this).removeClass("js-active");
        $(this).next().removeClass("js-active");
        $(this).next().slideToggle();
        
    } else {
      
      $(this).closest(".mobile-menu__nav").find("ul.js-active").slideToggle();
      $(this).closest(".mobile-menu__nav").find("ul.js-active").removeClass("js-active");
      $(".mobile-menu__nav > ul > li > span").removeClass("js-active");
      $(this).addClass("js-active");
      $(this).next().addClass("js-active");
      $(this).next().slideToggle();
    }
    }  
  });


  $(".callback-js").click(function(){
    $("#callback-modal").arcticmodal();
  });
  $(".reception-js").click(function(){
    $("#reception-modal").arcticmodal();
  });
=======

>>>>>>> parent of 9cdaf12... Item, doc
