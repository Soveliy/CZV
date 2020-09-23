// $('.main-slider .swiper-container').each(function(){
//     var main_slider = new Swiper(this, {
     
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
