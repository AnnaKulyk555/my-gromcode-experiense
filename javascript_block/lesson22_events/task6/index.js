const btnElem = document.querySelector('.single-use-btn');

const btnElemHandler = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', btnElemHandler);
};
btnElem.addEventListener('click', btnElemHandler);
