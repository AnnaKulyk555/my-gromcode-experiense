// 'use strict';

export const tasks = [
  { text: 'Buy milk', done: true },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const listTasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listTasksElem = document.createElement('li');
      listTasksElem.classList.add('list__item');
      const checkboxElem = document.createElement('input');
      checkboxElem.setAttribute('type', 'checkbox');
      checkboxElem.checked = done;
      if (done) {
        listTasksElem.classList.add('list__item_done');
      }
      checkboxElem.classList.add('list__item-checkbox');
      listTasksElem.append(checkboxElem, text);

      return listTasksElem;
    });

  listElem.append(...listTasksElems);
};

renderTasks(tasks);
