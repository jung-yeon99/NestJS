import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsInt()
  @IsOptional() // 값이있을때만 string 비교를 하겠다
  id: number;

  @IsString()
  @IsOptional()
  photo: string;

  @IsIn([0, 1, 2, 3])
  @IsOptional()
  role: number;
}
