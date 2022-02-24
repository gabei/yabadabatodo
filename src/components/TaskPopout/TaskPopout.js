import { createElement } from '../../ui/ui';
import Task from '../Task/Task';
import './TaskPopout.scss';

const TaskPopout = createElement('div', 'TaskPopout');
const title = createElement('h3', 'TaskBar__title');
const description = createElement('p', 'TaskPopout__description');
const dueDate = createElement('span', 'TaskPopout__dueDate');
const editTitle = createElement('button', 'TaskBar__button--editTitle');
const editDescription = createElement(
  'button',
  'TaskBar__button--editDescription'
);
const editDueDate = createElement('button', 'TaskBar__button--editDueDate');
const deleteTask = createElement('button', 'TaskBar__button--delete');

TaskPopout.append(title, description);

function updatePopout(task) {
  title.textContent = task.getTitle();
  description.textContent = task.getDescription();
}

export { TaskPopout, updatePopout };
