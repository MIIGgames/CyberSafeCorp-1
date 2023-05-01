// Verifica se já houve escolha anterior do usuário em relação aos cookies
const aceitouCookies = localStorage.getItem('aceitouCookies');

if (aceitouCookies === 'true') {
  // Código para quando o usuário aceitou os cookies
} else if (aceitouCookies === 'false') {
  // Código para quando o usuário recusou os cookies
} else {
  // Mostra a mensagem de cookies até que o usuário tome uma decisão
  const cookieMessage = document.getElementById('cookie-message');
  cookieMessage.style.display = 'block';
}

// Quando o usuário aceita os cookies, armazena a escolha no localStorage
const acceptCookiesButton = document.getElementById('accept-cookies');
acceptCookiesButton.addEventListener('click', () => {
  localStorage.setItem('aceitouCookies', 'true');
  const cookieMessage = document.getElementById('cookie-message');
  cookieMessage.style.display = 'none';
});

// Quando o usuário recusa os cookies, armazena a escolha no localStorage
const rejectCookiesButton = document.getElementById('reject-cookies');
rejectCookiesButton.addEventListener('click', () => {
  localStorage.setItem('aceitouCookies', 'false');
  const cookieMessage = document.getElementById('cookie-message');
  cookieMessage.style.display = 'none';
});
