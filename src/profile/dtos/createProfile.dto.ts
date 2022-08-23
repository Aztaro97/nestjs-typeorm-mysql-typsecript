import { IsString, IsNumber } from "class-validator"

export class CreateProfileDto {

	@IsString()
	firstName: string;

	@IsString()
	lastName: string;

	@IsNumber()
	age: Number
}