// day15.js file

const loginBtn = document.querySelector('.login-btn');
const emailBtn = document.querySelector('.email-btn');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateAndLogin();
});

emailBtn.addEventListener('click', () => {
  alert('Email login feature coming soon...');
});

function validateAndLogin() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '' || password === '') {
    alert('Please enter both username and password.');
    return;
  }

  // Fake login success logic
  alert(`Successfully logged in as ${username}!`);
  // Normally you'd redirect or do something post-login here
}