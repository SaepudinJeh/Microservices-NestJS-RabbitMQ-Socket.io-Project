import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MessageGateway } from './message.gateway';

import { MessagesServiceController } from './controllers/messages-service.controller';
import { MessagesService } from './services/messages-service.service';
import { DatabaseModule } from '@app/common';
import { Room, RoomSchema } from './schemas/room.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageRepository } from './repositories/message.repository';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/messages-service/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
  ],
  controllers: [MessagesServiceController],
  providers: [MessagesService, MessageGateway, MessageRepository],
})
export class MessagesServiceModule {}
