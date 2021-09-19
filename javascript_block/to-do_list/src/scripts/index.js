import { renderTasks } from './renderer.js';
import { onCreateTask } from './createTask.js';
import { updateTaskHandler } from './updateTask.js';

document.addEventListener('DOMContentLoaded', renderTasks);

window.addEventListener('storage', renderTasks);
