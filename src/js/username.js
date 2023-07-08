const adminCredentials = require('./admin.js');

function getUsername() {
    return adminCredentials.username;
}

module.exports = getUsername;