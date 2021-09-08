export function setButton(buttonText) {
  const bodyElem = document.querySelector('body');
  bodyElem.innerHTML = `<button>${buttonText}</button>`;
  // bodyElem.textContent = `<button>${buttonText}</button>`;
  return bodyElem;
}

// test
// console.log(setButton('test'));
