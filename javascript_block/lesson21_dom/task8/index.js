export function createButton(buttonText) {
  const buttonElem = document.createElement('button');
  const body = document.querySelector('body');
  buttonElem.textContent = buttonText;
  body.append(buttonElem);
}

// test

// createButton('start');
