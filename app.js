const login = document.getElementById('login');
const account_btn = document.getElementById('account-btn');
const container = document.querySelector('.login-container');

login.addEventListener('click', () => {
  container.classList.toggle('active');
});
