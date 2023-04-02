import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false, timestamps: true })
export class Room extends AbstractDocument {
  @Prop({ unique: true })
  name: string;

  @Prop({ type: Boolean, default: true })
  isStatus?: boolean;

  @Prop({ type: Array, default: [], required: true })
  tags: string[];
}

export const RoomSchema = SchemaFactory.createForClass(Room).index(
  { name: 1 },
  { unique: true },
);
