const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorDiv = document.getElementById('error');

loginBtn.onclick = function(event) {
  event.preventDefault();
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!usernameValue && !passwordValue) {
    errorDiv.textContent = 'Please enter your username and password.';
    console.log("Login Error");
  } else if (!usernameValue) {
    errorDiv.textContent = 'Please enter your username.';
    console.log("Login Error");
  } else if (!passwordValue) {
    errorDiv.textContent = 'Please enter your password.';
    console.log("Login Error");
  } else {
    console.log('Login successful!');
  }
};
