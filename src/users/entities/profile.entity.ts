import { SuperEntity } from 'src/db/super.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

// @Entity({ name: 'UserProfile' }) //네이밍은 회사마다 다름
// export class Profile extends SuperEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: true })
//   photo: string;

//   @Column()
//   role: number;
// }

@Entity({ name: 'UserProfile' }) //테이블명을 UserProfile라고 하겠다, defalut는 테이블명Id 이렇게 됨
export class Profile extends SuperEntity<Profile> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  photo: string;

  @Column({ default: 0 })
  role: number;

  @OneToOne(() => User, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  user: User;

  constructor(profile: Partial<Profile>) {
    super(profile);
  }
}
