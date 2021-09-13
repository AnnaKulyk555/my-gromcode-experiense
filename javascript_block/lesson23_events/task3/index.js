const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtnElement = document.querySelector('.create-task-btn');
const inputElement = document.querySelector('.task-input');

function onCreateTask(event) {
  const { value } = inputElement;
  if (value === '') {
    return;
  }
  tasks.unshift({
    text: value,
    done: false,
  });

  renderTasks(tasks);
  inputElement.value = '';
}

createBtnElement.addEventListener('click', onCreateTask);

function updateTaskHandler(event) {
  // console.log(tasks);

  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  // console.log('checbox is clicked');
  const selectedChecboxId = event.target.dataset.id;
  if (tasks[selectedChecboxId].done === true) {
    tasks[selectedChecboxId].done = false;
  } else {
    tasks[selectedChecboxId].done = true;
  }

  // console.log(selectedChecboxId);
  // console.log(tasks);
  renderTasks(tasks);
}

listElem.addEventListener('click', updateTaskHandler);
