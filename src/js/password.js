const adminCredentials = require('./admin.js');

function validatePassword(password) {
  return password === adminCredentials.password;
}

module.exports = {
  validatePassword
};