import Project from '../components/Project/Project';

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
  }

  static showTask() {
    // show a detailed view of the selected task
  }
}
