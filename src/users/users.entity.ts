import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/*
Below code snnipit is used to add data in usersEntity 
schema using below format
*/

@Entity()
export class usersEntitiy {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;

    @Column()
    password : string;
}