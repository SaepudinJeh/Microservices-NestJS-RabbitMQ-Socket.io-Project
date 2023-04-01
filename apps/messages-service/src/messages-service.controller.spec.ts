import { Test, TestingModule } from '@nestjs/testing';
import { MessagesServiceController } from './messages-service.controller';
import { MessagesServiceService } from './messages-service.service';

describe('MessagesServiceController', () => {
  let messagesServiceController: MessagesServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessagesServiceController],
      providers: [MessagesServiceService],
    }).compile();

    messagesServiceController = app.get<MessagesServiceController>(MessagesServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messagesServiceController.getHello()).toBe('Hello World!');
    });
  });
});
