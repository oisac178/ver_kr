window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
        document.querySelector('#btn-bur').classList.toggle('is-btn-active')
        document.querySelector('#burger').classList.toggle('open')
    })
  })
