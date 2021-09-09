const checkboxElem = document.querySelector('.task-status');
const checkboxHandler = event => {
  console.log(event.target.checked);
};
checkboxElem.addEventListener('change', checkboxHandler);
