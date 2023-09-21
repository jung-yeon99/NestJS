// import { IsEmail, IsString, Matches } from 'class-validator';

// export class CreateUserDto {
//   @IsString()
//   readonly name: string;
//   @IsEmail({}, { message: '메세지가 올바르지 않습니다' })
//   readonly email: string;

//   @IsString()
//   // @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/,
//   @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/, {
//     message: '암호는 영문 특수문자 포함 최소 8자리 이상 30자리 미만입니다',
//   })
//   @Matches(/^[A-Za-z\d!@#$%^&*()]*$/, {
//     message: '암호는 영문과 특수문자를 반드시 포함하여 작성해주세요.',
//   })
//   // TODO: 특수문자는 반드시 들어가야함, 8자리-30자리 미만 메세지를 찢어서 보내는걸로 코드 짜보기
//   // TODO: Matches 두개를 걸면 됨
//   readonly password: string;
// }
import { BadRequestException } from '@nestjs/common';
import { Transform, Type } from 'class-transformer';
import {
  IsString,
  IsEmail,
  Matches,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { CreateProfileDto } from './create-profile.dto';
import { CreateAddrDto } from './create-addr.dto';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: '이메일을 정확히 입력하세요!' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform((params) => {
    console.log('p>>>>', params);
    return params.value;
  })
  @Transform(({ value, obj: { passwd, name } }) => {
    if (passwd.includes(name.trim())) {
      throw new BadRequestException('암호에 이름이 포함되면 안됩니다!');
    }
    return value;
  })
  @Matches(/^[A-z\d!@#$%^&*()]*$/, {
    message: '암호는 영문과 특수문자만 가능합니다!',
  })
  @Matches(/^[A-z\d!@#$%^&*()]{8,30}$/, {
    message: '암호는 최소 8자리 이상 30자 미만입니다!',
  })
  passwd: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile: CreateProfileDto;

  @ValidateNested()
  @Type(() => CreateAddrDto)
  addrs: CreateAddrDto[];

  // @ValidateNested()
  // @Type(() => CreateAuthDto)
  // auths: CreateAuthDto[];
}
