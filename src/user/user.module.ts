import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User, Profile])],
	controllers: [UserController],
	providers: [UserService],
	exports: [TypeOrmModule]
})
export class UserModule { }
