import { createElement } from '../../ui/ui';
import './TaskModal.scss';

const TaskModal = createElement('div', 'TaskModal', 'display-none');
const TaskModalContainer = createElement('div', 'TaskModal__container');
TaskModal.append(TaskModalContainer);

const inputTitle = createElement('input', 'TaskModal__title');
const inputDescription = createElement('input', 'TaskModal__description');
const inputDate = createElement('input', 'TaskModal__date');
const submitButton = createElement('button', 'TaskModal__submit');

inputTitle.type = 'text';
inputDescription.type = 'text';
inputDate.type = 'date';

submitButton.textContent = 'Create Task';

TaskModalContainer.append(
  inputTitle,
  inputDescription,
  inputDate,
  submitButton
);

export default TaskModal;
