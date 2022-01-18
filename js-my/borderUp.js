document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.ui-accordion-header-active').forEach(function(border) {
    border.addEventListener('click', function(event) {
      event.closest(".section-catalog__data", {
        borderTopColor: '#7943A4'
      });
    })
  })
})
