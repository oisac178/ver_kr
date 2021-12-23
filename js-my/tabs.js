document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-how__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tab-content').forEach(function(tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')

      document.querySelectorAll('.section-how__btn').forEach(function(tabBtn) {
        tabBtn.classList.remove('section-how__btn-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('section-how__btn-active')
    })
  })
})
