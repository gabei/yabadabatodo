class Project {
  constructor(title, tasks) {
    this.title = title || 'Unnamed Project';
    this.tasks = tasks || new Array();
  }

  get tasks(){
    return this.tasks;
  }

  set tasks(...newTasks){
    if(!newTasks) return;
    this.tasks = [...this.tasks, ...newTasks];
}

