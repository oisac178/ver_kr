document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.section-catalog__item').forEach(function(country) {
    country.addEventListener('click', function(event) {
      let btn_country = this;
      event.currentTarget.classList.toggle("section-catalog__picture-activated");

      document.querySelectorAll(".section-catalog__item").forEach(el => {
        if (el != btn_country) {
          el.classList.remove("section-catalog__picture-activated");
        }
      });
    })
  })
})
