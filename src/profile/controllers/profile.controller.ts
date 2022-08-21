import { Controller, Post, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateProfileDto } from '../dtos/createProfile.dto';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
	constructor(private profileService: ProfileService) { }

	@Post(":id")
	createProfile(@Param("id", ParseUUIDPipe) id: string, @Body() createProfileDto: CreateProfileDto) {
		return this.profileService.createProfile(id, createProfileDto);
	}
}
