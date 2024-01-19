import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
@PrimaryGeneratedColumn()
id:number;
 
@Column()
firstName:string;

@Column()
lastName:string;

@Column()
phone:string;

@Column()
address:string;

@Column()
country:string;

@Column()
email:string;


@Column()
password:string;


@Column()
confirmPassword:string;

}
