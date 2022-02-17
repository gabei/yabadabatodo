/* Task
Tasks can be added or removed from a Project. Tasks can have their title, description, or due date edited.

*/

export default class Task {
  constructor(title, description, dueDate) {
    this.title = title || 'New Task';
    this.description = description || '';
    this.dueDate = dueDate || '';
  }

  get title() {
    return this.title;
  }

  get description() {
    return this.description;
  }

  get dueDate() {
    return this.dueDate;
  }

  set title(newTitle) {
    if (!newTitle) return;
    this.title = newTitle;
  }

  set description(newDescription) {
    if (!newDescription) return;
    this.title = newDescription;
  }

  set dueDate(newDate) {
    if (!newDate) return;
    this.title = newDate;
  }
}
