import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';
import mongoose from 'mongoose';
import { CreateRoomRequestDto } from './createRoomRequest.dto';

export class UpdateRoomRequestDto extends PartialType(CreateRoomRequestDto) {
  @IsMongoId()
  @ApiProperty({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    default: '_id room',
  })
  _id: string;
}
