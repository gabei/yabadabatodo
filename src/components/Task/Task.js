/* Task
Tasks can be added or removed from a Project. Tasks can have their title, description, or due date edited.

*/

export default class Task {
  constructor(title, description, dueDate) {
    this.title = title || 'New Task';
    this.description = description || 'This task has no description.';
    this.dueDate = dueDate || 'This task has no due date.';
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setTitle(newTitle) {
    if (!newTitle) return;
    this.title = newTitle;
  }

  setDescription(newDescription) {
    if (!newDescription) return;
    this.title = newDescription;
  }

  setDueDate(newDate) {
    if (!newDate) return;
    this.title = newDate;
  }
}
