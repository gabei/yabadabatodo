import { createElement } from '../../ui/ui';
import Controller from '../../controller/controller';
import './WorkArea.scss';

const WorkArea = createElement('div', 'WorkArea');
const title = createElement('h2', 'WorkArea__title');
const taskList = createElement('ul', 'WorkArea__taskList');
const editProject = createElement('button', 'WorkArea__button--edit');
const deleteProject = createElement('button', 'WorkArea__button--delete');
const taskPopout = createElement('div', 'WorkArea__taskPopout');
title.textContent = 'Temp';

WorkArea.append(title, taskList, editProject, deleteProject, taskPopout);

//how do we get project information from Sidebar using Controller's properties?
// Controller.currentProject
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
    let li = createElement('li', 'WorkArea__taskList-item');
    li.textContent = task.getTitle();
    taskList.append(li);
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

export { WorkArea, updateWorkArea };
