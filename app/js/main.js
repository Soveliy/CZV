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

// Slider

// $('.content-slider').each(function () {
//   var contentSlider = new Swiper(this, {
//     spaceBetween: 60,
//     slidesPerView: 2,
//     navigation: {
//       nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
//       prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },
//       1024: {
//         slidesPerView: 2,
//         spaceBetween: 40
//       }
//     }
//   });

// });

// Price slider

$('.content-slider.price__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// Question slider

$('.content-slider.questions__slider').each(function(){
  var contentSlider = new Swiper(this, {
    spaceBetween: 60,
    slidesPerView: 1,
    navigation: {
      nextEl: $(this).prev().find('.content-slider__arrow-right')[0],
      prevEl: $(this).prev().find('.content-slider__arrow-left')[0],
    },
  });
});

// Reviews slider

$('.content-slider.reviews__slider').each(function(){
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
      1025: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

// Gallery slider

$('.content-slider.gallery__slider').each(function(){
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
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});

// Articles slider

$('.content-slider.articles__slider').each(function(){
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
});

// Specialists slider

$('.content-slider.specialists__slider').each(function(){
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
      },
      1025: {
        slidesPerView: 3,
      }
    }
  });
});




//Table tips

$('.price__icon-container').mouseover(function () {
  $(this).find('.price__tip').addClass('active');
});
$('.price__icon-container').mouseleave(function () {
  $(this).find('.price__tip').removeClass('active');
});


//Dropdown

function dropdown(selectorTitle, activeClass){
  $(selectorTitle).click(function () {
    $(this).toggleClass(activeClass);
    $(this).next().toggleClass(activeClass).slideToggle();
  });
}

dropdown('.questions-dropdown__title-block', 'active')

// rate
$('.rate').each(function () {
  $(this).rateYo({
    ratedFill: "#DF7EB1",
    fullStar: true,
    starWidth: "22px"
  });
});


//Timer

  function timer(selector, deadline) {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((t / (1000 * 60 * 60 * 24))),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor((t / (1000 * 60 * 60) % 24));
  
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
    }  
  });


  $(".callback-js").click(function(){
    $("#callback-modal").arcticmodal();
  });
  $(".reception-js").click(function(){
    $("#reception-modal").arcticmodal();
  });
  
    function getZero(num) {
      if (num >= 0 && num < 10) {
        return '0' + num;
      } else {
        return num;
      }
    }
  
    function setClock(selector, endtime) {
  
      const timer = document.querySelector(selector),
        days = timer.querySelector(".timer__item--days"),
        hours = timer.querySelector('.timer__item--hours'),
        minutes = timer.querySelector('.timer__item--minutes'),
        seconds = timer.querySelector('.timer__item--seconds'),
        timeInterval = setInterval(updateClock, 1000);
  
      updateClock(deadline);
  
      function updateClock() {
        const t = getTimeRemaining(endtime);
        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
  
        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }
    }
  
    try{
      setClock(selector, deadline);
    } catch{}
  
  }

timer('.action--1 .timer', '2020-10-15');
timer('.action--2 .timer', '2020-11-15');
timer('.action--3 .timer', '2020-12-15');
