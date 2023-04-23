const div1 = document.getElementById('pagina1');
const div2 = document.getElementById('pagina1');


div1.addEventListener('click', function() {
  const url = this.getAttribute('data-url');
  window.location.href = url;
});