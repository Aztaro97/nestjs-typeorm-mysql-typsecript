import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/utils/typeorm/entities/Post';
import { User } from 'src/utils/typeorm/entities/User';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';

@Module({
	imports: [TypeOrmModule.forFeature([Post, User])],
	providers: [PostService],
	controllers: [PostController]
})
export class PostModule { }
