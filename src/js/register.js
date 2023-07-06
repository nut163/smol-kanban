// src/js/register.js

function register(username, password) {
  if (username === adminCredentials.username && password === adminCredentials.password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    return true;
  } else {
    return false;
  }
}