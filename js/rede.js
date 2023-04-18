const divs = document.querySelectorAll('.redirecionar');

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function() {
    const url = this.getAttribute('data-url');
    window.location.href = url;
  });
}