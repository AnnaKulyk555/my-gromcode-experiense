import { getItem, setItem } from './storage.js';
import { renderTasks } from './renderer.js';

export function updateTaskHandler(e) {
  if (!e.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
      };
    }

    return task;
  });

  setItem('tasksList', newTasksList);

  renderTasks();
}
