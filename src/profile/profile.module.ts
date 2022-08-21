import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm"
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import { ProfileController } from './controllers/profile.controller';
import { ProfileService } from './services/profile.service';

@Module({
	imports: [TypeOrmModule.forFeature([Profile, User])],
	controllers: [ProfileController],
	providers: [ProfileService],
	exports: [TypeOrmModule]
})
export class ProfileModule { }
