/* Controller class
----------------
The controller handles task and project creation as well as the storage of data. This should be independent of the other components, which utilize this class as an intermediary.

*/

import Project from '../components/Project/Project';
import Task from '../components/Task/Task';

export default class Controller {
  static createProject(title) {
    let project = new Project(title);
    this.updateStorage(project);

    return project;
  }

  static updateStorage(project) {
    localStorage.setItem(
      project.getTitle(),
      JSON.stringify(project.getTasks())
    );
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

  static addTaskToView() {
    // add the task to work area
  }

  static removeTask() {
    // remove task from storage
  }

  static removeTaskFromView() {
    // remove task from work area
  }

  static clearLocalStorage() {
    localStorage.clear();
  }

  static showProject(project) {
    console.log('Project view updated.');
    console.log(project);
  }

  static showTask() {
    // show a detailed view of the selected task
  }
}
