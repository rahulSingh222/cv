import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

/*
Below code snnipit is used to add data in reportsEntity 
schema using below format
*/

@Entity()
export class reportsEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    price : number;
}