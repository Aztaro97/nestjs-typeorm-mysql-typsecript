import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from "./database/database.module"
import { User } from './typeorm/entities/User';
import { Profile } from './typeorm/entities/Profile';
import { ProfileController } from './profile/controllers/profile.controller';
import { ProfileService } from './profile/services/profile.service';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { Post } from './typeorm/entities/Post';

@Module({
	imports: [AuthModule, UserModule, ProfileModule, PostModule, TypeOrmModule.forRoot({
		type: 'mysql',
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'root',
		database: 'test',
		entities: [User, Profile, Post],
		synchronize: true,
	})],
	controllers: [ProfileController],
	providers: [ProfileService],
})
export class AppModule { }
