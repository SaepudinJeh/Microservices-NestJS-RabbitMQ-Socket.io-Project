import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  getHello(): string {
    return 'Hello World!';
  }

  bill(data: any) {
    this.logger.log('Billing...', data);
  }
}
