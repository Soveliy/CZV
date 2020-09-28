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
=======
>>>>>>> parent of 162c1c2... Нормальынй комит
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


//Dropdown

function dropdown(selectorTitle, activeClass){
  $(selectorTitle).click(function () {
    $(this).toggleClass(activeClass);
    $(this).next().toggleClass(activeClass).slideToggle();
  });
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
dropdown('.questions-dropdown__title-block', 'active')

// rate
$('.rate').each(function () {
  $(this).rateYo({
    ratedFill: "#DF7EB1",
    fullStar: true,
    starWidth: "22px"
  });
});
$(".callback-js").click(function(){
    $("#callback-modal").arcticmodal();
  });
  $(".reception-js").click(function(){
    $("#reception-modal").arcticmodal();
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
=======
$('.questions-dropdown__title-block').click(function(){
  $(this).toggleClass('active');
  $(this).next().toggleClass('active').slideToggle();
  $(this).find('.questions-dropdown__arrow-icon').toggleClass('active');
});

<<<<<<< HEAD
<<<<<<< HEAD
$('.options-buttons__search-btn').click(function(){
    $(this).next().toggleClass('js-active');
  });
  


=======
>>>>>>> parent of 162c1c2... Нормальынй комит

>>>>>>> parent of 9cdaf12... Item, doc
=======
$('.questions-dropdown__title-block').click(function(){
  $(this).toggleClass('active');
  $(this).next().toggleClass('active').slideToggle();
  $(this).find('.questions-dropdown__arrow-icon').toggleClass('active');
});


>>>>>>> parent of 9cdaf12... Item, doc
=======
$('.questions-dropdown__title-block').click(function(){
  $(this).toggleClass('active');
  $(this).next().toggleClass('active').slideToggle();
  $(this).find('.questions-dropdown__arrow-icon').toggleClass('active');
});


<<<<<<< HEAD
  $(".callback-js").click(function(){
    $("#callback-modal").arcticmodal();
  });
  $(".reception-js").click(function(){
    $("#reception-modal").arcticmodal();
  });
=======

=======
>>>>>>> parent of 162c1c2... Нормальынй комит
>>>>>>> parent of 9cdaf12... Item, doc
