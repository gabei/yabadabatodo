import { createElement, insertAfter } from '../../ui/ui';
import Controller from '../../controller/controller';
import { TaskPopout, updatePopout } from '../TaskPopout/TaskPopout';
import { clear } from '../../ui/ui';
import TaskModal from '../TaskModal/TaskModal';
import './WorkArea.scss';

// setup elements
const WorkArea = createElement('div', 'WorkArea');
const titleContainer = createElement('div', 'WorkArea__title');
const title = createElement('h2', 'WorkArea__title-text');
const editTitle = createElement('button', 'WorkArea__title-edit');
const deleteProjectButton = createElement('button', 'WorkArea__title-delete');
const taskList = createElement('ul', 'WorkArea__taskList');
const taskPopout = createElement('div', 'WorkArea__taskPopout');
WorkArea.append(titleContainer, taskList, taskPopout, TaskModal);

// setup title section
title.textContent = 'Temp';
title.append(deleteProject);
editTitle.textContent = 'E';

deleteProjectButton.textContent = 'X';
deleteProjectButton.addEventListener('click', function (e) {
  deleteProject();
  e.stopPropagation();
});

titleContainer.append(title, editTitle, deleteProjectButton);

// workarea content update functions
function updateWorkArea() {
  taskList.textContent = '';
  let project = Controller.currentProject;

  updateTitle(project.getTitle());
  populateTasks(project.getTasks());
  attachClickListener();
}

function updateTitle(newTitle) {
  title.textContent = newTitle;
}

function populateTasks(tasks) {
  tasks.map((task) => {
    addTaskToView(task);
  });
}

function attachClickListener() {
  taskList.addEventListener('click', getTaskInfo);
}

function getTaskInfo() {
  if (event.target.nodeName === 'LI') {
    let taskName = event.target.value;
    let task = Controller.currentProject.getTasks()[taskName];
    populateTaskPopout(task);
  }
}

function populateTaskPopout(task) {
  let title = task.getTitle();
  let description = task.getDescription();
  let date = task.getDueDate();

  taskPopout.textContent = `${title}, ${description}, ${date}`;
}

/////////////////////////
// setup add task button
const newTaskButton = createElement('a', 'WorkArea__newTaskContainer-button');
newTaskButton.textContent = 'Add Task';
newTaskButton.addEventListener('click', showModal);
WorkArea.append(newTaskButton);

const newTaskInputContainer = createElement(
  'div',
  'WorkArea__newTaskContainer',
  'display-none'
);

const cancelButton = createElement(
  'button',
  'WorkArea__newTaskContainer-button--cancel'
);
cancelButton.textContent = 'x';
cancelButton.addEventListener('click', hideNewTaskInput);

const submitButton = createElement(
  'button',
  'WorkArea__newTaskContainer-button--submit'
);
submitButton.textContent = '✓';
submitButton.addEventListener('click', submitNewTaskInput);

const newTaskInput = createElement('input');
newTaskInput.type = 'text';
newTaskInputContainer.append(newTaskInput, submitButton, cancelButton);
WorkArea.append(newTaskInputContainer, newTaskButton);

// new task input functions
function hideNewTaskInput() {
  newTaskInputContainer.classList.add('display-none');
}

function showNewTaskInput() {
  newTaskInputContainer.classList.remove('display-none');
}

function submitNewTaskInput() {
  let inputSource = newTaskInputContainer.querySelector('input');
  let taskName = inputSource.value;
  inputSource.value = '';

  let newTask = Controller.createTask(Controller.currentProject, taskName);
  addTaskToView(newTask);
  hideNewTaskInput();
}

function addTaskToView(task) {
  let itemContainer = createElement('div', 'WorkArea__taskList-item');
  let itemTitle = createElement('span', 'WorkArea__taskList-item--title');
  let deleteButton = createElement('button', 'WorkArea__taskList-item--delete');

  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', function (e) {
    deleteTask(this, task);
    e.stopPropagation();
  });

  itemTitle.textContent = task.getTitle();

  itemContainer.addEventListener('click', function () {
    showTaskPopout(task, this);
  });

  itemContainer.append(itemTitle, deleteButton);
  taskList.append(itemContainer);
}

function deleteTask(button, task) {
  button.parentNode.remove();
  hideTaskPopout();

  Controller.removeTask(task);
}

function deleteProject() {
  clear(WorkArea);
  Controller.removeProjectFromView();
  Controller.removeProject(Controller.currentProject);
}

function showTaskPopout(task, node) {
  TaskPopout.classList.remove('display-none');
  updatePopout(task);
  insertAfter(TaskPopout, node);
}

function hideTaskPopout() {
  TaskPopout.classList.add('display-none');
}

function showModal() {
  TaskModal.classList.remove('display-none');
}

function hideModal() {
  TaskModal.classList.add('display-none');
}

export { WorkArea, updateWorkArea };
