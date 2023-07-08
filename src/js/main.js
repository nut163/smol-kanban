import { storeData, retrieveData } from './localStorage.js';
import { createTask, moveTask } from './task.js';
import { login, logout, authenticate } from './authentication.js';
import { setupPage } from './setup.js';
import { worker } from './worker.js';

document.addEventListener('DOMContentLoaded', () => {
  const localStorageData = retrieveData();
  const taskCategories = ['Todo', 'In Progress', 'Done'];
  const taskColors = {
    'Todo': 'grey',
    'In Progress': 'yellow',
    'Done': 'green'
  };
  const adminCredentials = {
    username: 'admin',
    password: 'admin'
  };

  setupPage(taskCategories, taskColors, adminCredentials);

  document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    if (authenticate(username, password, adminCredentials)) {
      login(username);
    } else {
      alert('invalidLogin');
    }
  });

  document.getElementById('logoutButton').addEventListener('click', () => {
    logout();
  });

  taskCategories.forEach(category => {
    document.getElementById(`${category}Column`).addEventListener('drop', (event) => {
      const taskId = event.dataTransfer.getData('text');
      moveTask(taskId, category);
      storeData(localStorageData);
    });
  });

  worker();
});