import { Column, Entity, PrimaryGeneratedColumn,JoinTable, OneToMany, JoinColumn, OneToOne } from "typeorm"
import { Profile } from "./Profile"
import { Post } from "./Post"

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	name: string

	@Column()
	email: string

	@OneToOne(() => Profile)
	@JoinColumn({ name: "profileId" })
	profile: Profile

	@OneToMany(() => Post, post => post.user)
	@JoinTable({ name: "postId" })
	posts: Post[]
}