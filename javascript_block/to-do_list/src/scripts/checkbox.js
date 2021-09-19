export const createCheckboxElem = (done, id) => {
  const checkboxElem = document.createElement('input');

  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;

  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};
