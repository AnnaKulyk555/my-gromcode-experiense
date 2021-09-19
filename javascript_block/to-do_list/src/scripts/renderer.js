import { createCheckboxElem } from './checkbox.js';
import { listElem } from './appElems.js';
import { getItem } from './storage.js';

export const renderTasks = () => {
  listElem.innerHTML = '';

  const tasksList = getItem('tasksList') || [];
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      const checkboxElem = createCheckboxElem(done, id);
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
