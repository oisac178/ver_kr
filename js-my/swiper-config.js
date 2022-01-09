var swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,

  // If we need pagination
  pagination: {
    type: 'fraction',
    el: '.swiper-pagination1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
});
var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,
  loop: true,

  // If we need pagination
  pagination: {
    type: 'fraction',
    el: '.swiper-pagination2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
});
var swiper3 = new Swiper('.swiper3', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },

});
