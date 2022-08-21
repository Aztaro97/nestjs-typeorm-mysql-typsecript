import { Controller, Post, Param, ParseUUIDPipe, Body } from '@nestjs/common';
import { CreatePostDto } from '../dtos/CreatePostDto.dto';
import { PostService } from '../services/post.service';

@Controller('post')
export class PostController {


	constructor(private postService: PostService) { }

	@Post("user/:id")
	createPost(@Param("id", ParseUUIDPipe) id: string, @Body() createPostDetailsDto: CreatePostDto) {
		return this.postService.createPostById(id, createPostDetailsDto);
	}

}


