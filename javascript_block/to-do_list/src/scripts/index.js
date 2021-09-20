import { renderTasks } from './renderer.js';
import { initTodoListHandlers } from './initTodoListHandlers.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});

window.addEventListener('storage', e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
});
