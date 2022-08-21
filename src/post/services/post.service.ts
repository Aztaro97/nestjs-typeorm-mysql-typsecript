import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm"
import { postDetailsProps } from 'src/interfaces/Post';
import { Post } from 'src/utils/typeorm/entities/Post';
import { User } from 'src/utils/typeorm/entities/User';
import { Repository } from "typeorm"

@Injectable()
export class PostService {
	constructor(
		@InjectRepository(Post) private postRepository: Repository<Post>,
		@InjectRepository(User) private userRepository: Repository<User>
	) { }



	async createPostById(id: string, postDetails: postDetailsProps) {
		const user = await this.userRepository.findOneBy({ id });

		if (!user) {
			throw new HttpException("User not found, Can't create a post", HttpStatus.BAD_REQUEST);
		}

		const newPost = this.postRepository.create({ ...postDetails, user });
		const savePost = await this.postRepository.save(newPost);

		return savePost;


	}
}
