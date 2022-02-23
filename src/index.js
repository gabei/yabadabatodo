import { initStorage } from './storage/storage';
import { createElement } from './ui/ui';

import Nav from './components/Nav/Nav';
import { Sidebar } from './components/Sidebar/Sidebar';
import { WorkArea } from './components/WorkArea/WorkArea';

import './style/main.scss';

const Container = createElement('div', 'Container');
Container.append(Nav, Sidebar, WorkArea);
document.body.append(Container);

initStorage();
