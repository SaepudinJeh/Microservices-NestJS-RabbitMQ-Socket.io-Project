import { RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { NotificationServiceController } from './notification-service.controller';
import { NotificationService } from './notification-service.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_MESSAGE_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/notification-service/.env',
    }),
    RmqModule,
  ],
  controllers: [NotificationServiceController],
  providers: [NotificationService],
})
export class NotificationServiceModule {}
