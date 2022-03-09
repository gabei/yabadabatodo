import { createElement, insertAfter } from '../../ui/ui';
import Controller from '../../controller/controller';
import { TaskPopout, updatePopout } from '../TaskPopout/TaskPopout';
import { clear } from '../../ui/ui';
import TaskModal from '../TaskModal/TaskModal';
import Task from '../Task/Task';
import './WorkArea.scss';

/* Elements
_______________________________________________*/
const WorkArea = createElement('div', 'WorkArea');
const titleContainer = createElement('div', 'WorkArea__title');
const title = createElement('h2', 'WorkArea__title-text');
const editTitle = createElement('button', 'WorkArea__title-edit');
const deleteProjectButton = createElement('button', 'WorkArea__title-delete');
const taskList = createElement('ul', 'WorkArea__taskList');
const taskPopout = createElement('div', 'WorkArea__taskPopout');
WorkArea.append(titleContainer, taskList, taskPopout, TaskModal);

/* Setup Title Section
_______________________________________________*/
title.textContent = 'Temp';
title.append(deleteProject);
editTitle.textContent = 'E';

deleteProjectButton.textContent = 'X';
deleteProjectButton.addEventListener('click', function (e) {
  deleteProject();
  e.stopPropagation();
});

titleContainer.append(title, editTitle, deleteProjectButton);

/* WorkArea Content Update (Switch Project)
_______________________________________________*/
function updateWorkArea() {
  taskList.textContent = '';
  let project = Controller.currentProject;

  updateTitle(project.getTitle());
  populateTasks(project.getTasks());
}

function updateTitle(newTitle) {
  title.textContent = newTitle;
}

function populateTasks(tasks) {
  tasks.forEach((task) => {
    addTaskToView(task);
  });
}

/* Add Task Button
_______________________________________________*/
const newTaskButton = createElement('a', 'WorkArea__newTaskContainer-button');
newTaskButton.textContent = 'Add Task';
newTaskButton.addEventListener('click', showModal);
WorkArea.append(newTaskButton);

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

/* Task Modal Form Submission
_______________________________________________*/
const taskSubmit = TaskModal.querySelector('.TaskModal__submit');
taskSubmit.addEventListener('click', submitNewTask);

function submitNewTask(e) {
  let inputs = TaskModal.querySelectorAll('input');
  let vals = Array.from(inputs).map((entry) => entry.value);
  console.log(vals);
  let title = vals[0];
  let description = vals[1];
  let date = vals[2];
  let newTask = new Task(title, description, date);

  Controller.createTask(Controller.currentProject, newTask);
  addTaskToView(newTask);

  hideModal();
  e.preventDefault();
}

function showModal() {
  TaskModal.classList.remove('display-none');
}

function hideModal() {
  TaskModal.classList.add('display-none');
}

export { WorkArea, updateWorkArea };
