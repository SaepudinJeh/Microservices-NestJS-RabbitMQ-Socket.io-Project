import { RmqService } from '@app/common';
import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { NotificationService } from './notification-service.service';
import { NotificationGateway } from './notification.gateway';

@Controller()
export class NotificationServiceController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly rmqService: RmqService,
    private readonly notificationGateway: NotificationGateway,
  ) {}

  private readonly logger = new Logger('Send Notification');

  @EventPattern('notification')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.notificationGateway.onEventMessage(data);
    this.notificationService.bill(data);
    this.rmqService.ack(context);
  }
}
