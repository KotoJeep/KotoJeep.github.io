var swiper = new Swiper('.feedback_slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  initialSlide: '2',
  coverflowEffect: {
    rotate: 0,
    depth: 50,
    modifier: 5,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.feedback_next',
    prevEl: '.feedback_prev',
  },
});

var swiper = new Swiper('.license_slider', {
  // Optional parameters
  direction: 'horizontal',
  spaceBetween: 30,
  grabCursor: true,
  slidesPerView: 'auto',
  watchOverflow: '4',
});

var swiper = new Swiper('.object_container', {
  direction: 'horizontal',
  spaceBetween: 20,
  grabCursor: true,
  slidesPerView: '2.5',
  slidesPerGroup: '1',
  slidesPerColumn: '1',
  navigation: {
    nextEl: '.object_next',
    prevEl: '.object_prev',
  },
  pagination: {
    el: '.object_pagination',
    type: 'fraction',
  },
  breakpoints: {
    400: {
      slidesPerView: '1',
    },

    768: {
      slidesPerView: '1',
    },
  },
});
