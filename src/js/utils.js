export const storeData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

export const retrieveData = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const createTask = (category, content) => {
  return {
    category,
    color: taskColors[category],
    content
  };
}

export const moveTask = (task, newCategory) => {
  task.category = newCategory;
  task.color = taskColors[newCategory];
  return task;
}

export const login = (username, password) => {
  if (username === adminCredentials.username && password === adminCredentials.password) {
    return true;
  } else {
    throw new Error(invalidLogin);
  }
}

export const logout = () => {
  // Clear local storage
  localStorage.clear();
}

export const authenticate = (username, password) => {
  if (username === adminCredentials.username && password === adminCredentials.password) {
    return true;
  } else {
    return false;
  }
}

export const setupPage = () => {
  // Set up task categories
  taskCategories.forEach(category => {
    const column = document.createElement('div');
    column.id = `${category}Column`;
    document.body.appendChild(column);
  });

  // Set up login form
  const form = document.createElement('form');
  form.id = 'loginForm';
  document.body.appendChild(form);
}

export const worker = () => {
  // Cloudflare worker code goes here
}