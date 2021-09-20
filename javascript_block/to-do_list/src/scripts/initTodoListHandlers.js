import { updateTaskHandler } from './updateTask.js';
import { onCreateTask } from './createTask.js';

export const initTodoListHandlers = () => {
  const listElem = document.querySelector('.list');
  listElem.addEventListener('click', updateTaskHandler);

  const createBtnElement = document.querySelector('.create-task-btn');
  createBtnElement.addEventListener('click', onCreateTask);
};
