/* Storage
----------------
If Local Storage is available, user projects and tasks will be saved in JSON when submitted by the user. Upon page load, if any information is saved, it will be pulled and added to the page.

If local storage is not available, the UI should let the user know.

*/
import Controller from '../controller/controller';
import { addProjectToView } from '../components/Sidebar/Sidebar';
import Task from '../components/Task/Task';
import Project from '../components/Project/Project';

// variation on MDN's storage test function
function storageIsAvailable() {
  try {
    localStorage.setItem('poweron', 'selftest');
    localStorage.getItem('poweron');
    localStorage.removeItem('poweron');
    localStorage.clear();
    return true;
  } catch (error) {
    console.log('Local Storage is not available');
    console.error(error);
    // tell the user that storage is unavailable
  }
}

function initStorage() {
  if (storageIsAvailable) {
    getLocalStorage();
  }
}

function getLocalStorage() {
  let projects = { ...localStorage };

  for (let project in projects) {
    let newProject = new Project(project);
    let tasks = JSON.parse(localStorage.getItem(project));
    populateTasks(newProject, tasks);
    addProjectToView(newProject);
    console.log(newProject);
  }
}

function populateTasks(project, tasks) {
  for (let task of tasks) {
    let createdTask = new Task(task.title, task.description, task.dueDate);
    project.setTasks(createdTask);
  }
}

function populateFromStorage() {}

export { initStorage };
