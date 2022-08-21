import { Column, Entity, PrimaryGeneratedColumn, JoinTable, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	title: string

	@Column()
	content: string

	@ManyToOne(() => User, user => user.posts)
	@JoinColumn({name: "userId"})
	user: User
}