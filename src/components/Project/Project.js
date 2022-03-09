/* Project class
----------------
A Project harbors all of a user's Tasks. Projects can be added or removed from the user interface / storage. Projects can have their title edited.

*/

export default class Project {
  constructor(title, tasks) {
    this.title = title || 'Unnamed Project';
    this.tasks = tasks || new Array();
  }

  getTitle() {
    return this.title;
  }

  getTasks() {
    return this.tasks;
  }

  setTitle(newTitle) {
    if (!newTitle) return;
    this.title = newTitle;
  }

  setTasks(...newTasks) {
    if (!newTasks) return;
    this.tasks = [...this.tasks, ...newTasks];
  }

  removeTask(taskToRemove) {
    const newTaskList = this.tasks.filter(function (task) {
      return task != taskToRemove;
    });

    this.tasks = newTaskList;
  }
}
