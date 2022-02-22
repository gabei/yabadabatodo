import { createElement } from '../../ui/ui';
import Controller from '../../controller/controller';
import './WorkArea.scss';

const WorkArea = createElement('div', 'WorkArea');
const title = createElement('h2', 'WorkArea__title');
const taskList = createElement('ul', 'WorkArea__taskList');
const editProject = createElement('button', 'WorkArea__button--edit');
const deleteProject = createElement('button', 'WorkArea__button--delete');

WorkArea.append(title, taskList, editProject, deleteProject);

function updateTitle(projectName) {
  title.textContent = projectName;
}

export default WorkArea;
