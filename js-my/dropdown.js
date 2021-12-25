document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".header__down-btn").forEach(item => {
    item.addEventListener("click", function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__dropdown");

      document.querySelectorAll(".header__down-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active--btn");
        }
      });

      document.querySelectorAll(".header__dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("active-list--item");
        }
      })
      dropdown.classList.toggle("active-list--item");
      btn.classList.toggle("active--btn")
    })
  })

  document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".header__down-list")) {
      document.querySelectorAll(".header__dropdown").forEach(el => {
        el.classList.remove("active-list--item");
      })
      document.querySelectorAll(".header__down-btn").forEach(el => {
        el.classList.remove("active--btn");
      });
    }
  })

  document.querySelectorAll('.section-catalog__picture').forEach(function(country) {
    country.addEventListener('click', function(event) {
      let btn_country = this;
      event.classList.toggle("section-catalog__picture-activated");

      document.querySelectorAll(".section-catalog__picture").forEach(el => {
        if (el != btn_country) {
          el.classList.remove("section-catalog__picture-activated");
        }
      });
    })
  })
})
