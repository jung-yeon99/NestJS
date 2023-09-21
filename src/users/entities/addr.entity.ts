import { SuperEntity } from 'src/db/super.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';
// import { User } from './user.entity';

@Entity({ name: 'Addr' })
export class Addr extends SuperEntity<Addr> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  street: string;

  @Column({ length: 30 })
  detail: string;

  @ManyToOne(() => User, (user) => user.addrs, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete',
  })
  @JoinColumn()
  user: User; //userId 라는식으로 생성됨

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(entity: Partial<Addr>) {
    super(entity); // 부모 클래스 생성자 호출
  }
}
