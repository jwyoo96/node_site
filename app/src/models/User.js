"use strict";

const UserStorage = require("./UserStorage");

class User {
	constructor(body) {
		this.body = body;
	}

	async login() {
		const client = this.body;
		try {
			const user = UserStorage.getUserInfo(client.id);

			if (user) {
				if (id === client.id && pw === client.pw) {
					return { success: true };
				}
				return { success: false, msg: "비밀번호가 틀렸습니다." };
			}
			return { success: false, msg: "존재하지 않는 아이디 입니다." };
		} catch (err) {
			return { success: false, msg: err };
		}
	}

	async register() {
		const client = this.body;
		try {
			const response = await UserStorage.save(client);
			return response;
		} catch (err) {
			return { success: false, msg: err };
		}
	}
}

module.exports = User;