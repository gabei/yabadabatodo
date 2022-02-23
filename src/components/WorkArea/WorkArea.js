import { createElement } from '../../ui/ui';
import Controller from '../../controller/controller';
import './WorkArea.scss';

const WorkArea = createElement('div', 'WorkArea');
const title = createElement('h2', 'WorkArea__title');
const taskList = createElement('ul', 'WorkArea__taskList');
const editProject = createElement('button', 'WorkArea__button--edit');
const deleteProject = createElement('button', 'WorkArea__button--delete');
title.textContent = 'Temp';

WorkArea.append(title, taskList, editProject, deleteProject);

//how do we get project information from Sidebar using Controller's properties?
// Controller.currentProject
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
  tasks.map((task) => {
    let li = createElement('li');
    li.textContent = task.getTitle();
    taskList.append(li);
  });
}

export { WorkArea, updateWorkArea };
