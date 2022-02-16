import { createElement } from '../../ui/ui';
import './Sidebar.scss';

const Sidebar = createElement('div', 'Sidebar');

const title = createElement('h4', 'Sidebar__title');
title.textContent = 'Projects';
Sidebar.append(title);

const list = createElement('ul', 'Sidebar__list');
Sidebar.append(list);

/* Temporary projects list for styling. Will draw from storage later. */
const projectList = ['Project1', 'Project2', 'Project3', 'Project4'];

projectList.forEach((item) => {
  let project = createElement('li');
  project.textContent = item;
  list.append(project);
});

const newProjectButton = createElement('a', 'Sidebar__button');
newProjectButton.textContent = 'Add Project';
Sidebar.append(newProjectButton);

export default Sidebar;
