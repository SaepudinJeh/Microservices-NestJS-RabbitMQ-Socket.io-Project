import { IsBoolean, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';

export class SetStatusRoomRequestDto {
  @ApiProperty({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    default: '_id room',
  })
  @IsNotEmpty()
  _id: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    type: Boolean,
    default: false,
  })
  isStatus: boolean;
}
