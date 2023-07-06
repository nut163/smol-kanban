import { taskCategories, taskColors, localStorageData } from './utils.js';
import { createTask, moveTask } from './task.js';
import { storeData, retrieveData } from './localStorage.js';

const todoColumn = document.getElementById('todoColumn');
const inProgressColumn = document.getElementById('inProgressColumn');
const doneColumn = document.getElementById('doneColumn');

function renderTasks() {
  const tasks = retrieveData(localStorageData);
  tasks.forEach(task => {
    const taskCard = createTask(task);
    switch(task.category) {
      case taskCategories[0]:
        todoColumn.appendChild(taskCard);
        break;
      case taskCategories[1]:
        inProgressColumn.appendChild(taskCard);
        break;
      case taskCategories[2]:
        doneColumn.appendChild(taskCard);
        break;
    }
  });
}

function addTask(category, content) {
  const task = { category, content, color: taskColors[category] };
  const tasks = retrieveData(localStorageData);
  tasks.push(task);
  storeData(localStorageData, tasks);
  const taskCard = createTask(task);
  switch(category) {
    case taskCategories[0]:
      todoColumn.appendChild(taskCard);
      break;
    case taskCategories[1]:
      inProgressColumn.appendChild(taskCard);
      break;
    case taskCategories[2]:
      doneColumn.appendChild(taskCard);
      break;
  }
}

function handleTaskMove(task, newCategory) {
  const tasks = retrieveData(localStorageData);
  const taskIndex = tasks.findIndex(t => t.content === task.content);
  tasks[taskIndex].category = newCategory;
  storeData(localStorageData, tasks);
  moveTask(task, newCategory);
}

export { renderTasks, addTask, handleTaskMove };