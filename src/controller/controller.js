/* Controller class
----------------
The controller handles task and project creation as well as the storage of data. This should be independent of the other components, which utilize this class as an intermediary.

The constructor holds a 'current project' and 'current task' for the sake of passing data between modules without referencing eachother.

*/

import Project from '../components/Project/Project';
import Task from '../components/Task/Task';
import { updateWorkArea } from '../components/WorkArea/WorkArea';

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
    // remove project from work area
    // remove project from sidebar
    // remove project from storage
  }

  static createTask(project, task) {
    let newTask = new Task(task);
    project.setTasks(newTask);
    this.updateStorage(project);

    return newTask;
  }

  static removeTask() {
    // remove task from storage
  }

  static removeTaskFromView() {
    // remove task from work area
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

  static showTask() {
    // show a detailed view of the selected task
  }
}
