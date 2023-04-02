import { RmqService } from '@app/common';
import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { NotificationService } from './notification-service.service';

@Controller()
export class NotificationServiceController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly rmqService: RmqService,
  ) {}

  private readonly logger = new Logger('Send Notification');

  @EventPattern('notification')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.logger.log('dataaaa notification', data);
    this.notificationService.bill(data);
    this.rmqService.ack(context);
  }
}
