import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProps, updateUserProps } from 'src/interfaces/user';
import { User } from 'src/typeorm/entities/User';

@Injectable()
export class UserService {

	constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

	createUser(userDetails: CreateUserProps) {
		const newUser = this.userRepository.create({ ...userDetails });
		return this.userRepository.save(newUser);
	}

	fetchAllUsers() {
		return this.userRepository.find({ relations: ["profile", "posts"] });
	}

	getUserById(id: string) {
		return this.userRepository.findOneBy({ id });
	}

	updateUser(id: string, userDetails: updateUserProps) {
		return this.userRepository.update({ id }, { ...userDetails });
	}

	deleteUser(id: string) {
		return this.userRepository.delete({ id });
	}
}