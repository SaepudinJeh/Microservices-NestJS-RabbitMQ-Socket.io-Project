import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  namespace: '/notification',
  allowEIO3: true,
  cors: { origin: true, credentials: true },
})
export class NotificationGateway implements OnGatewayInit {
  @WebSocketServer() wss: Server;

  private logger: Logger = new Logger('Notification Gateway');

  afterInit(server: Server) {
    this.logger.log('Initialized!');
  }

  @SubscribeMessage('notification')
  onEventMessage(
    @MessageBody() message: any,
    // client: Socket,
  ) {
    console.log('notificationss', message);
    return this.wss.emit('notification', message);
  }
}
