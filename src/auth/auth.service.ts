import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService {
	signup() {
		return "I'm Sign-up"
	}

	login() {
		return "I'm login"
	}
}