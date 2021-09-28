const formElem = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const errorElem = document.querySelector('.error-text');
const emailInputElem = document.querySelector('[name="email"]');
const nameInputElem = document.querySelector('[name="name"]');
const passwordInputElem = document.querySelector('[name="password"]');

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtn.removeAttribute('disabled');
    errorElem.textContent = '';
  } else {
    submitBtn.setAttribute('disabled', true);
    errorElem.textContent = '';
  }
};

emailInputElem.addEventListener('input', onInputChange);
nameInputElem.addEventListener('input', onInputChange);
passwordInputElem.addEventListener('input', onInputChange);

const createUser = formData =>
  fetch('https://6151af974a5f22001701d380.mockapi.io/p1/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }).then(response => (response.ok ? response.json() : Promise.reject(response)));

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));
  createUser(formData)
    .then(result => {
      alert(JSON.stringify(result));
      emailInputElem.value = '';
      nameInputElem.value = '';
      passwordInputElem.value = '';
    })
    .catch(() => (errorElem.textContent = 'Failed to create user'));
};

formElem.addEventListener('submit', onFormSubmit, false);
