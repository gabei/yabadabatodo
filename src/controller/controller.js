import Project from '../components/Project/Project';
import { list } from '../components/Sidebar/Sidebar';
import { createElement } from '../ui/ui';

function createProject(title) {
  let project = new Project(title);
  addProjectToView(project);
  updateStorage(project);

  return project;
}

function addProjectToView(project) {
  let link = createElement('li');
  link.textContent = project.getTitle();
  link.addEventListener('click', showProject);

  list.append(link);
}

function updateStorage(project) {
  localStorage.setItem(project.getTitle(), JSON.stringify(project.getTasks()));
}

function removeProject() {
  // remove project from storage
}

function removeProjectFromView() {
  // remove project from sidebar
}

function createTask(project, task) {
  project.setTasks(task);
  updateStorage(project);
}

function addTaskToView() {
  // add the task to work area
}

function removeTask() {
  // remove task from storage
}

function removeTaskFromView() {
  // remove task from work area
}

function clearLocalStorage() {
  localStorage.clear();
}

function showProject(project) {
  console.log('Project view updated.');
}

function showTask() {
  // show a detailed view of the selected task
}

export { createProject, addProjectToView, removeProject };
