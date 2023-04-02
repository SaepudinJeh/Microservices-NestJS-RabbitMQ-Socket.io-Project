import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from '../schemas/room.schema';

@Injectable()
export class MessageRepository extends AbstractRepository<Room> {
  protected readonly logger: Logger = new Logger(MessageRepository.name);

  constructor(@InjectModel(Room.name) messageModel: Model<Room>) {
    super(messageModel);
  }
}
