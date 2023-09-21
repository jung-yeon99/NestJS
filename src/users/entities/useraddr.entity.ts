import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserAddr {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  addrId: number;
}
