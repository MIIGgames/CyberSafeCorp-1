const div1 = document.getElementById('pagina1');
const div2 = document.getElementById('pagina2');


div1.addEventListener('click', function() {
  const url = this.getAttribute('data-url');
  window.location.href = url;
});

div2.addEventListener('click', function() {
  const url = this.getAttribute('data-url');
  window.location.href = url;
});

const curso = document.getElementById('pagina-curso');
curso.addEventListener('click', function() {
  window.location.href = 'https://curso.cybersafecorp.com.br/';
});

const conheca = document.getElementById('conheca-mais');
conheca.addEventListener('click', function() {
  window.location.href = 'https://boletim.cybersafecorp.com.br';
});
