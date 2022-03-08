import { createElement } from '../../ui/ui';
import './TaskPopout.scss';

const TaskPopout = createElement('div', 'TaskPopout');
const title = createElement('h3', 'TaskPopout__title');
const description = createElement('p', 'TaskPopout__description');
const dueDate = createElement('span', 'TaskPopout__dueDate');

TaskPopout.append(title, description, dueDate);

function updatePopout(task) {
  title.textContent = task.getTitle();
  description.textContent = task.getDescription();
  dueDate.textContent = `Due Date: ${task.getDueDate()}`;
}

export { TaskPopout, updatePopout };
