document.getElementById('logoutButton').addEventListener('click', function() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = 'login.html';
});