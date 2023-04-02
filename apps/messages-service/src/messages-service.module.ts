import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { MessageGateway } from './message.gateway';

import { MessagesServiceController } from './controllers/messages-service.controller';
import { MessagesServiceService } from './services/messages-service.service';
import { DatabaseModule } from '@app/common';
import { Room, RoomSchema } from './schemas/room.schema';
import { MongooseModule } from '@nestjs/mongoose';

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
  providers: [MessagesServiceService, MessageGateway],
})
export class MessagesServiceModule {}
