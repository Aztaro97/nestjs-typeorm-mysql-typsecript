import { Controller, Post, Get, Body, Put, Delete, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';
import { UpdateUserDto } from '../dtos/updateUser.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) { }

	@Post()
	createUser(@Body() createUserDto: CreateUserDto) {
		return this.userService.createUser(createUserDto);
	}

	@Get()
	getAllUser() {
		return this.userService.fetchAllUsers();
	}

	@Get(":id")
	getUserById(@Param("id", ParseUUIDPipe) id: string) {
		return this.userService.getUserById(id)
	}

	@Put(":id")
	updateUserById(@Param("id", ParseUUIDPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.updateUser(id, updateUserDto);
	}

	@Delete(":id")
	deleteUserById(@Param("id", ParseUUIDPipe) id: string) {
		return this.userService.deleteUser(id);
	}
}
