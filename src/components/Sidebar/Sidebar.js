import { createElement } from '../../ui/ui';
import Controller from '../../controller/controller';
import { clear } from '../../ui/ui';
import './Sidebar.scss';

/* Setup sidebar and basic elements
_______________________________________________*/

const Sidebar = createElement('div', 'Sidebar');
const title = createElement('h4', 'Sidebar__title');
const list = createElement('ul', 'Sidebar__list');
const projectInputContainer = createElement(
  'div',
  'Sidebar__project-input',
  'display-none'
);
const newProjectButton = createElement('a', 'Sidebar__button');

title.textContent = 'Projects';
newProjectButton.textContent = 'Add Project';
newProjectButton.addEventListener('click', showProjectInput);

Sidebar.append(title, list, projectInputContainer, newProjectButton);

/* Setup 'add project' buttons
_______________________________________________*/

const cancelButton = createElement(
  'button',
  'Sidebar__project-input__button--cancel'
);
cancelButton.textContent = 'x';
cancelButton.addEventListener('click', hideProjectInput);

const submitButton = createElement(
  'button',
  'Sidebar__project-input__button--submit'
);
submitButton.textContent = '✓';
submitButton.addEventListener('click', submitProjectInput);

const newProjectInput = createElement('input');
newProjectInput.type = 'text';
projectInputContainer.append(newProjectInput, submitButton, cancelButton);

/* Functions for hiding and submitting 
   info from the sidebar. Interacts with Controller class
_______________________________________________*/

function showProjectInput() {
  projectInputContainer.classList.remove('display-none');
}
function hideProjectInput() {
  projectInputContainer.classList.add('display-none');
}

function submitProjectInput() {
  let inputSource = projectInputContainer.querySelector('input');
  let projectName = inputSource.value;
  inputSource.value = '';

  let newProject = Controller.createProject(projectName);
  addProjectToView(newProject);
  hideProjectInput();
}

function addProjectToView(project) {
  let link = createElement('li');
  link.textContent = project.getTitle();
  link.addEventListener('click', () => Controller.showProject(project));

  list.append(link);
}

function removeProjectFromSidebar() {
  let title = Controller.currentProject.getTitle();
}

export { Sidebar, list, addProjectToView };

import Task from '../Task/Task';
let testTask = new Task('test task', 'This is a test task');
