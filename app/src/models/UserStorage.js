"use strict";

class UserStorage {
    static #users = {
        id: ["123", "435", "456"],
        pw: ["312", "425", "634"],
        nm: ["유재욱", "구소영", "조인수"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;