import { createElement } from '../../ui/ui';
import './TaskModal.scss';

const TaskModal = createElement('div', 'TaskModal', 'display-none');
const TaskModalContainer = createElement('div', 'TaskModal__container');
TaskModal.append(TaskModalContainer);

const inputTitle = createElement('input', 'TaskModal__title');
const inputDescription = createElement('input', 'TaskModal__description');
const inputDate = createElement('input', 'TaskModal__date');
const buttonContainer = createElement('div', 'TaskModal__buttons');
const submitButton = createElement('button', 'TaskModal__buttons--submit');
const cancelButton = createElement('button', 'TaskModal__buttons--cancel');

inputTitle.type = 'text';
inputTitle.placeholder = 'Task Name';

inputDescription.type = 'text';
inputDescription.placeholder = 'Task Description';

inputDate.type = 'date';

submitButton.textContent = 'Create Task';
cancelButton.textContent = 'Cancel';
buttonContainer.append(submitButton, cancelButton);

TaskModalContainer.append(
  inputTitle,
  inputDescription,
  inputDate,
  buttonContainer
);

export default TaskModal;
