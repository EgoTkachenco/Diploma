const db = require('../config/db');
class Users {
    constructor() {
        this.users = db.get('USERS');
    }

    getUser(id) {
        let user = this.users.find(u => u.id === Number(id));
        return user ? user : null;
    }
    getUsers() {
        return this.users;
    }
    signIn(login, password) {
        let user = this.users.find(u => u.login === login && u.password === password);
        if (user) {
            return { status: true, user: user }
        } else {
            return { status: false, message: "Користувача не знайдено" }
        }
    }
    signUp(login, password, type, name) {
        let user = this.users.find(u => u.login === login);

        if (user) {
            return { status: false, message: "Користувач вже існує" }
        } else {
            let newUser = { 
                login, password, type, name, rating: 0,
                id: new Date().getTime(), 
            }
            this.users.push(newUser);
            this.save();
            return { status: true, user: newUser };
        }
    }
    save() {
        db.set('USERS', this.users);
    }
}

module.exports = USERS = new Users();