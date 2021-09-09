const inputElem = document.querySelector('.text-input');
const chanceHandler = event => {
  console.log(event.target.value);
};
inputElem.addEventListener('change', chanceHandler);
