const formElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const emailInputElem = document.querySelector('[name="email"]');
const nameInputElem = document.querySelector('[name="name"]');
const passwordInputElem = document.querySelector('[name="password"]');

submitBtn.removeAttribute('disabled');

const createUser = formData =>
  fetch('https://6151af974a5f22001701d380.mockapi.io/p1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then(response => response.json());

const onFormSubmit = event => {
  event.preventDefault();
  if (formElem.reportValidity()) {
    console.log(true);
  }

  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData).then(result => {
    alert(JSON.stringify(result));
    emailInputElem.value = '';
    nameInputElem.value = '';
    passwordInputElem.value = '';
  });
};

formElem.addEventListener('submit', onFormSubmit, false);
// errorElem.append('Failed to create user')
