import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Profile {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	firstName: string

	@Column()
	lastName: string

	@Column()
	age: Number

	@CreateDateColumn()
	createAt: Date

	@UpdateDateColumn()
	updateAt: Date

}