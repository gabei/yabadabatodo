import { createElement } from '../../ui/ui';
import './Sidebar.scss';

const Sidebar = createElement('div', 'Sidebar');

const title = createElement('h3', 'Sidebar__title');
title.textContent = 'Projects';
Sidebar.append(title);

const list = createElement('ul', 'Sidebar__list');
Sidebar.append(list);

export default Sidebar;
