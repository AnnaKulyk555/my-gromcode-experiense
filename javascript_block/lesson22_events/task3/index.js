const textInput = document.querySelector('.text-input');
const inputChangeHandler = () => {
  console.log(textInput.value);
};
textInput.addEventListener('change', inputChangeHandler);
