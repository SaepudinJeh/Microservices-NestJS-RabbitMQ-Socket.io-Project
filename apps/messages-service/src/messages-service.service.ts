import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesServiceService {
  getHello(): string {
    return 'Hello World message!';
  }
}
