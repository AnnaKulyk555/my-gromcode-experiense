import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

const createBtnElement = document.querySelector('.create-task-btn');
const inputElement = document.querySelector('.task-input');

export const onCreateTask = event => {
  const { value } = inputElement;
  if (value === '') {
    return;
  }
  const oldTasksList = getItem('tasksList') || [];
  oldTasksList.unshift({
    text: value,
    done: false,
    id: Math.random().toString(),
  });
  const newTasksList = oldTasksList;
  setItem('tasksList', newTasksList);
  renderTasks();
  inputElement.value = '';
};

createBtnElement.addEventListener('click', onCreateTask);
