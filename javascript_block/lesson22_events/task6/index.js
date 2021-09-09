const btnElem = document.querySelector('.single-use-btn');

// WORK
btnElem.addEventListener('click', function btnElemHandler() {
  btnElem.removeEventListener('click', btnElemHandler);
  console.log('clicked');
});

// DON'T WORK
// const btnElemHandler = () => {
//   btnElem.removeEventListener('click', btnElemHandler);

//   console.log('clicked');
// };

// btnElem.addEventListener('click', () => btnElemHandler());

// DON'T WORK
// function btnElemHandler() {
//   btnElem.removeEventListener('click', btnElemHandler);

//   console.log('clicked');
// }

// btnElem.addEventListener('click', () => btnElemHandler());
