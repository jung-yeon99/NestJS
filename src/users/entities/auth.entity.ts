import { SuperEntity } from 'src/db/super.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Auth' })
export class Auth extends SuperEntity<Auth> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  authname: string;

  constructor(entity: Partial<Auth>) {
    super(entity); // 부모 클래스 생성자 호출
  }
}
