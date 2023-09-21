import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { EntityManager } from 'typeorm';
import { Addr } from './entities/addr.entity';
import { Auth } from './entities/auth.entity';

@Injectable()
export class UsersService {
  private tokenMap = new Map<string, string>();
  userRepository: any;

  constructor(
    private readonly config: ConfigService,
    private readonly entityManager: EntityManager, // private readonly emailService: EmailService,
  ) {}
  findALl() {
    return this.entityManager.find(User);
  }
  private getAllAuth() {
    return this.entityManager.find(Auth);
  }
  create(createUserDto: CreateUserDto) {
    const profile = new Profile({ ...createUserDto.profile, role: 0 });
    const addrs = createUserDto.addrs?.map(
      (createAddrDto) => new Addr(createAddrDto),
    );

    const user = new User({ ...createUserDto, profile, addrs });
    return this.entityManager.save(user);
  }

  verifyToken(email: string, token: string) {
    console.log('🚀  token:', token, this.tokenMap.get(email));
    return token === this.tokenMap.get(email);
  }

  private CheckUser() {}
  findAll() {
    const pro = this.config.get<number>('PRO');
    const ttt = this.config.get<string>('TTT');
    this.t(pro, ttt);
    return `This action returns all users`;
  }

  async findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: { profile: true, addrs: true },
    });
  }

  private t(p: number, t: string) {
    console.log(p, t);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    user.name = updateUserDto.name;
    user.passwd = updateUserDto.passwd;

    if (updateUserDto.profile)
      user.profile = new Profile(updateUserDto.profile);

    return this.entityManager.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
