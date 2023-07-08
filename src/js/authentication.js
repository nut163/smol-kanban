const adminCredentials = {
  username: 'admin',
  password: 'admin'
};

function authenticate(username, password) {
  if (username === adminCredentials.username && password === adminCredentials.password) {
    return true;
  } else {
    alert('invalidLogin');
    return false;
  }
}

function login(username, password) {
  if (authenticate(username, password)) {
    localStorage.setItem('isLoggedIn', true);
    return true;
  } else {
    return false;
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
}

export { login, logout, authenticate };