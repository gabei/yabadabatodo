import { createElement } from '../../ui/ui';
import { createProject } from '../../controller/controller';
import './Sidebar.scss';

const Sidebar = createElement('div', 'Sidebar');

const title = createElement('h4', 'Sidebar__title');
title.textContent = 'Projects';
Sidebar.append(title);

const list = createElement('ul', 'Sidebar__list');
Sidebar.append(list);

const projectInputContainer = createElement(
  'div',
  'Sidebar__project-input',
  'display-none'
);
Sidebar.append(projectInputContainer);

const newProjectButton = createElement('a', 'Sidebar__button');
newProjectButton.textContent = 'Add Project';
newProjectButton.addEventListener('click', showProjectInput);
Sidebar.append(newProjectButton);

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
   info from the sidebar
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

  createProject(projectName);

  inputSource.textContent = '';
  hideProjectInput();
}

export { Sidebar, list };
