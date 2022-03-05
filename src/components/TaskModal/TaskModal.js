import { createElement } from '../../ui/ui';
import Task from '../Task/Task';
//import Controller from '../../controller/controller';
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
inputDate.type = 'text';

submitButton.textContent = 'Create Task';
submitButton.addEventListener('click', submitNewTask);

TaskModalContainer.append(
  inputTitle,
  inputDescription,
  inputDate,
  submitButton
);

function submitNewTask(e) {
  let inputs = TaskModal.querySelectorAll('input');
  let vals = Array.from(inputs).map((entry) => entry.value);
  let newTask = new Task(...vals);

  //Controller.createTask(Controller.currentProject, newTask);
  hideModal();
  e.preventDefault();
}

function hideModal() {
  TaskModal.classList.add('display-none');
}

export default TaskModal;
