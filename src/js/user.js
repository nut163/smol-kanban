class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    validateCredentials() {
        return this.username === adminCredentials.username && this.password === adminCredentials.password;
    }
}

export default User;