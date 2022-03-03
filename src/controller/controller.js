/* Controller class
----------------
The controller handles task and project creation as well as the storage of data. This should be independent of the other components, which utilize this class as an intermediary.

The constructor holds a 'current project' and 'current task' for the sake of passing data between modules without referencing eachother.

*/

import Project from '../components/Project/Project';
import Task from '../components/Task/Task';
import { list } from '../components/Sidebar/Sidebar';
import { updateWorkArea } from '../components/WorkArea/WorkArea';
import TaskModal from '../components/TaskModal/TaskModal';

export default class Controller {
  constructor() {
    this.currentProject = null;
    this.currentTask = null;
  }

  static currentProject() {
    return this.currentProject;
  }

  static currentTask() {
    return this.currentTask;
  }

  static createProject(title) {
    let project = new Project(title);
    this.updateStorage(project);

    return project;
  }

  static removeProject(project) {
    localStorage.removeItem(project.getTitle());
  }

  static removeProjectFromView() {
    let title = this.currentProject.getTitle();
    let removed = list.querySelectorAll('li');

    for (let item of removed) {
      if (item.textContent == title) {
        item.remove();
      }
    }
  }

  static createTask(project, task) {
    let newTask = new Task(task);
    project.setTasks(newTask);
    this.updateStorage(project);

    return newTask;
  }

  static removeTask(task) {
    this.currentProject.removeTask(task);
    this.updateStorage(this.currentProject);
  }

  static updateStorage(project) {
    localStorage.setItem(
      project.getTitle(),
      JSON.stringify(project.getTasks())
    );
  }

  static clearLocalStorage() {
    localStorage.clear();
  }

  static showProject(project) {
    this.currentProject = project;
    updateWorkArea();
  }

  static showModal() {
    TaskModal.classList.remove('display-none');
  }

  static hideModal() {
    TaskModal.classList.add('display-none');
  }
}
