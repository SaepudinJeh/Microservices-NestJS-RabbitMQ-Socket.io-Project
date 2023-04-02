import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomRequestDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String, default: 'Input name room' })
  name: string;

  @IsArray()
  @ApiProperty({ type: Array, default: ['Social media'] })
  tags: string[];

  @IsBoolean()
  @IsOptional()
  isStatus?: boolean;
}
