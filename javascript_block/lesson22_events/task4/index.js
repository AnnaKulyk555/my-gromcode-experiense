const checkboxElem = document.querySelector('.task-status');
const checkboxHandler = () => {
  console.log(checkboxElem.checked);
};
checkboxElem.addEventListener('change', () => checkboxHandler());
