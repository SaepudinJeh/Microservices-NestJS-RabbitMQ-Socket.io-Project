import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { MessageGateway } from './message.gateway';

import { MessagesServiceController } from './messages-service.controller';
import { MessagesServiceService } from './messages-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
      }),
      envFilePath: './apps/messages-service/.env',
    }),
    // DatabaseModule,
  ],
  controllers: [MessagesServiceController],
  providers: [MessagesServiceService, MessageGateway],
})
export class MessagesServiceModule {}
