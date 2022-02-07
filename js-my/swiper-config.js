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

  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    }
  }
});

var swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  //direction: 'vertical',
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },

  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,

      pagination: {
        type: 'bullets',
        el: '.swiper-pagination2',
      },
    }
  }

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

  breakpoints: {
    1680: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,

    }
  }

});
