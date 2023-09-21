import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  profile: any;
}
//PartialType 객체에 대해 Nest 가 Partial 한것
