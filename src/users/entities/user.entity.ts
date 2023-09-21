import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Addr } from './addr.entity';
import { Auth } from './auth.entity';
import { SuperEntity } from 'src/db/super.entity';

@Entity({ name: 'User' })
export class User extends SuperEntity<User> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 256 })
  passwd: string;

  //일대일
  @OneToOne(() => Profile, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  profile: Profile; //profile 의 entity type을 리턴

  //일대다
  @OneToMany(() => Addr, (addr) => addr.user, {
    cascade: true,
  })
  addrs: Addr[];

  //다대다
  @ManyToMany(() => Auth, { cascade: true })
  @JoinTable()
  auths: Auth[];

  //CreateUserDto 를 사용할려면 UpdateUserDto는 사용할 수가 없음
  // constructor(user: Partial<User>) {
  //   Object.assign(this, user);
  // }
  constructor(user: Partial<User>) {
    super(user);
  }
}
