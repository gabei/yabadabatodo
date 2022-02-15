import { createElement } from '../ui/ui';
import './Container.scss';

import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import WorkArea from '../components/WorkArea/WorkArea';

const Container = createElement('div', 'Container');
Container.append(Nav, Sidebar, WorkArea);

export default Container;
