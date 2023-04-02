import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn,} from "typeorm";
import { User } from "./user";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({unique: true})
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contacts,{ onDelete: 'CASCADE' })
  users: User;
}
