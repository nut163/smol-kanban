import { storeData, retrieveData } from './localStorage.js';
import { createTask } from './task.js';
import { login, logout, authenticate } from './authentication.js';
import { taskCategories, taskColors, adminCredentials } from './utils.js';

function setupPage() {
  // Setup authentication
  const loginForm = document.getElementById('loginForm');
  const logoutButton = document.getElementById('logoutButton');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    if (authenticate(username, password, adminCredentials)) {
      login(username);
    } else {
      alert('invalidLogin');
    }
  });

  logoutButton.addEventListener('click', logout);

  // Setup task categories
  const todoColumn = document.getElementById('todoColumn');
  const inProgressColumn = document.getElementById('inProgressColumn');
  const doneColumn = document.getElementById('doneColumn');

  taskCategories.forEach((category) => {
    const column = document.getElementById(`${category}Column`);
    const tasks = retrieveData(category);
    tasks.forEach((task) => {
      const taskCard = createTask(task, taskColors[category]);
      column.appendChild(taskCard);
    });
  });

  // Setup local storage
  window.addEventListener('unload', () => {
    taskCategories.forEach((category) => {
      const column = document.getElementById(`${category}Column`);
      const tasks = Array.from(column.children).map((card) => card.task);
      storeData(category, tasks);
    });
  });
}

export { setupPage };