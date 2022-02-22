/* Controller class
----------------
The controller handles task and project creation as well as the storage of data. This should be independent of the other components, which utilize this class as an intermediary.

The constructor holds a 'current project' and 'current task' for the sake of passing data between modules without referencing eachother.

*/

import Project from '../components/Project/Project';
import Task from '../components/Task/Task';

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
    // remove project from sidebar
  }

  static createTask(project, task) {
    project.setTasks(task);
    updateStorage(project);
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
    console.log('Project view updated.');
    this.currentProject = project;
  }

  static showTask() {
    // show a detailed view of the selected task
  }
}
