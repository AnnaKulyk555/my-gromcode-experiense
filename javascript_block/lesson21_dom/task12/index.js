/* eslint-disable no-param-reassign */
export function squaredNumbers() {
  const listItems = Array.from(document.querySelectorAll('.number'));
  listItems.forEach(listItem => {
    const itemNumber = listItem.dataset.number;
    listItem.dataset.squaredNumber = itemNumber * itemNumber;
  });
}

// squaredNumbers();
