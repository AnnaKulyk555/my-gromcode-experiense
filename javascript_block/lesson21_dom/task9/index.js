export function finishList() {
  const listElem = document.querySelector('.list');

  const lastListItem = document.createElement('li');
  lastListItem.textContent = 8;
  listElem.append(lastListItem);

  const firstListItem = document.createElement('li');
  firstListItem.textContent = 1;
  listElem.prepend(firstListItem);

  const fifthListElem = document.querySelector('.special');

  const fourthListItem = document.createElement('li');
  fourthListItem.textContent = 4;
  fifthListElem.before(fourthListItem);

  const sixthListItem = document.createElement('li');
  sixthListItem.textContent = 6;
  fifthListElem.after(sixthListItem);
}

//
// finishList();
