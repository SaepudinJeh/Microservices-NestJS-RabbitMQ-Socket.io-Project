import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Room extends AbstractDocument {
  @Prop()
  name: string;

  @Prop({ type: Boolean, default: true })
  isStatus: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
