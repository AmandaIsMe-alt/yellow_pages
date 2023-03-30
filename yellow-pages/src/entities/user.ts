import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany,} from "typeorm";
import { Contact } from "./contact";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.users, {eager: true})
  contacts: Contact[];
}
