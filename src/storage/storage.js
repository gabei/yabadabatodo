/* Storage
----------------
If Local Storage is available, user projects and tasks will be saved in JSON when submitted by the user. Upon page load, if any information is saved, it will be pulled and added to the page.

If local storage is not available, the UI should let the user know.

*/

import { addProjectToView } from '../controller/controller';

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
  console.log(projects);
}

function populateFromStorage() {}

export { initStorage };
