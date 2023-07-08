const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    if (authenticate(username, password)) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = '/kanban.html';
    } else {
        alert(invalidLogin);
    }
});

function authenticate(username, password) {
    return username === adminCredentials.username && password === adminCredentials.password;
}