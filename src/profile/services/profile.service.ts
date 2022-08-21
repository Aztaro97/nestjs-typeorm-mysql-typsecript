import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { profileDetailsProps } from 'src/interfaces/profile';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
		@InjectRepository(Profile) private profileRepository: Repository<Profile>
	) { }

	async createProfile(id: string, profileDetails: profileDetailsProps) {
		const user = await this.userRepository.findOneBy({ id });

		if (!user) {
			throw new HttpException("User not found, Can't create a profile", HttpStatus.BAD_REQUEST);
		}

		const profile = this.profileRepository.create(profileDetails);
		const newProfile = await this.profileRepository.save(profile);

		user.profile = newProfile;

		return this.userRepository.save(user);
	}
}
