import { Module } from '@nestjs/common';
import { MessagesServiceController } from './messages-service.controller';
import { MessagesServiceService } from './messages-service.service';

@Module({
  imports: [],
  controllers: [MessagesServiceController],
  providers: [MessagesServiceService],
})
export class MessagesServiceModule {}
