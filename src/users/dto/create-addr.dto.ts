import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAddrDto {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  detail: string;

  @IsString()
  @IsOptional()
  zipcode: string;
}
//superEntityDto 상속 받아서 겹치는부분은 따로 빼서 작성하는것이 코드에 좋음
