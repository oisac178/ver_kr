document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.section-catalog__data-item').forEach(function(pintor) {
    pintor.addEventListener('click', function(event) {
      let btn_pintor = this;
      event.currentTarget.classList.toggle("section-catalog__pintor-activated");

      document.querySelectorAll(".section-catalog__data-item").forEach(el => {
        if (el != btn_pintor) {
          el.classList.remove("section-catalog__pintor-activated");
        }
      });
    })
  })
})
