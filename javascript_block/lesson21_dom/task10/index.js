export function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('name', 'login');
  loginForm.prepend(textInput);
  const passwordInput = document.querySelector('input[name = password]');
  passwordInput.setAttribute('type', 'password');
}

// finishForm();
